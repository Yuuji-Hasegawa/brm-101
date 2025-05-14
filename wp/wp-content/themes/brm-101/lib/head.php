<?php

add_theme_support('title-tag');
function set_my_title()
{
    global $post;
    if (is_404()) {
        $my_title = 'お探しのページは見つかりませんでした';
    } elseif(is_page()) {
        $my_title = get_the_title();
    } elseif(is_archive()) {
        if (is_post_type_archive('news')) {
            $my_title = 'お知らせ';
        } elseif (is_category()) {
            $my_title = get_queried_object()->cat_name;
        } elseif (is_tag()) {
            $my_title = '#' . single_tag_title('', false);
        } else {
            $my_title = 'ブログ';
        }
    } else {
        $my_title = get_the_title();
    }
    return $my_title;
}
function meta_title()
{
    $title = set_my_title();
    if (!is_front_page()) {
        $meta_title = $title . ' | ' . get_bloginfo('name');
    } else {
        $meta_title = get_bloginfo('name');
    }
    return $meta_title;
}
add_filter('pre_get_document_title', 'meta_title');

function my_robots()
{
    if ('0' != get_option('blog_public')) {
        if (is_home()) {
            $robots = 'index, follow, max-image-preview:large';
        } elseif (is_single()) {
            $robots = 'index, follow, max-image-preview:large';
        } elseif (is_paged() || is_archive()) {
            $robots = 'noindex, follow';
        } elseif (is_404() || is_attachment()) {
            $robots = 'noindex, nofollow';
        } else {
            $robots = 'index, follow';
        }
        return '<meta name="robots" content="' . $robots .'">';
    }
}
function get_my_canonical()
{
    global $post;
    $canonical = '';
    if (is_404()) {
        $protocol = empty($_SERVER["HTTPS"]) ? "http://" : "https://";
        $canonical = esc_url($protocol. $_SERVER["HTTP_HOST"].$_SERVER["REQUEST_URI"]);
    } elseif (is_single() || is_page()) {
        $canonical = esc_url(get_permalink($post->ID));
    } elseif (is_archive()) {
        if (is_post_type_archive('news')) {
            $canonical = esc_url(home_url('/news/'));
        } elseif (is_category()) {
            $cat = get_queried_object();
            $canonical = esc_url(get_category_link($cat->term_id));
        } elseif (is_tag()) {
            $canonical = esc_url(get_tag_link(get_term(get_queried_object_id(), 'post_tag')->term_id));
        } else {
            $canonical = esc_url(home_url('/blog/'));
        }
    } else {
        $canonical = home_url('/');
    }
    return $canonical;
}
function my_keywords()
{
    global $post;
    $keywords = '';
    $base_keywords = get_vars('site.keywords');
    if ($base_keywords) {
        $keywords .= $base_keywords[0];
        for ($i = 1; $i < count($base_keywords); $i++) {
            $keywords .= ',' . $base_keywords[$i];
        }
    }
    if (is_single() || is_page()) {
        $add_keywords = get_post_meta($post->ID, 'meta_keywords', true);
        if ($add_keywords) {
            $keywords .= ',' . $add_keywords;
        }
    }
    return $keywords;
}
function my_description()
{
    global $post;
    $default_desc = get_vars('site.description') ?: get_bloginfo('description');
    if (is_single() || is_page()) {
      if($meta_description = get_post_meta($post->ID, 'meta_description', true)) {
        return esc_html($meta_description);
      }
    }

    return esc_html($default_desc);
}
function get_ogp_title()
{
    global $post;
    $ogp_title = set_my_title();
    if(is_front_page()) {
        $ogp_title = get_bloginfo('name');
    }
    return $ogp_title;
}
function get_ogp_img()
{
    global $post;
    $ogp = array();
    if(is_single() && has_post_thumbnail()) {
        $ogp = array(
          'url' => wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full')[0],
          'width' => wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full')[1],
          'height' => wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full')[2]
        );
    } else {
        $ogp = array(
          'url' => get_template_directory_uri() . '/ogp.png?' . date("YmdHis"),
          'width' => '1200',
          'height' => '630'
        );
    }
    return $ogp;
}
function get_tw_img()
{
    global $post;
    $twImg = array();
    if(is_single() && has_post_thumbnail()) {
        $fullImg = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'full');
        $img_width = $fullImg[1];
        $img_height = $fullImg[2];
        $size = min($img_width, $img_height);
        $twImg = array(
          'url' => $fullImg[0],
          'width' => $size,
          'height' => $size,
        );
    } else {
        $twImg = array(
          'url' => get_template_directory_uri() . '/ogp-1x1.png?' . date("YmdHis"),
          'width' => '1200',
          'height' => '1200',
        );
    }
    return $twImg;
}
function my_ogp()
{
    global $post;
    $ogp_title = get_ogp_title();
    $ogp_img = get_ogp_img();
    $tw_img = get_tw_img();
    $pub_time = get_the_time('c');
    $mod_time = get_the_modified_time('c');
    $author = esc_attr(author_display_name());
    $ogp = '<meta property="og:locale" content="ja_JP">';
    $ogp .= '<meta property="og:description" content="' . my_description() . '">';
    $ogp .= '<meta property="og:type" content="' . get_ogp_type() . '">';
    $ogp .= '<meta property="og:title" content="'. $ogp_title . '">';
    $ogp .= '<meta property="og:url" content="' . get_my_canonical() . '">';
    $ogp .= '<meta property="og:site_name" content="' . get_vars('site.name') . '">';
    $ogp .= '<meta property="og:image" content="' . $ogp_img['url'] . '">';
    $ogp .= '<meta property="og:image:width" content="' . $ogp_img['width'] . '">';
    $ogp .= '<meta property="og:image:height" content="' . $ogp_img['height'] . '">';
    $ogp .= '<meta property="article:published_time" content="' . $pub_time . '" />';
    $ogp .= '<meta property="article:modified_time" content="' . $pub_time . '" />';
    $ogp .= '<meta property="article:author" content="' . $author . '" />';
    $ogp .= '<meta name="twitter:card" content="summary">';
    $ogp .= '<meta name="twitter:site" content="@' . get_vars('ogp.twitter.site') . '">';
    $ogp .= '<meta name="twitter:description" content="' . my_description() . '">';
    $ogp .= '<meta name="twitter:title" content="' . $ogp_title . '">';
    $ogp .= '<meta name="twitter:creator" content="@' . get_vars('ogp.twitter.creator') . '">';
    $ogp .= '<meta name="twitter:image" content="' . $tw_img['url'] . '">';
    $ogp .= '<meta name="twitter:image:width" content="' . $tw_img['width'] . '">';
    $ogp .= '<meta name="twitter:image:height" content="' . $tw_img['height'] . '">';
    return $ogp;
}
function add_head()
{
    $inserts = '<meta name="p:domain_verify" content="' . get_vars('codes.pinterest') . '"/>';
    $inserts .= '<meta name="google-site-verification" content="' . get_vars('codes.google') . '">';
    $inserts .= '<meta name="format-detection" content="telephone=no, address=no, email=no" />';
    $inserts .= '<meta name="keywords" content="' . my_keywords() . '" />';
    $inserts .= '<meta name="description" content="' . my_description() . '" />';
    $inserts .= my_robots();
    $inserts .= '<link rel="canonical" href="' . get_my_canonical() . '">';
    $inserts .= my_ogp();
    $inserts .= '<link rel="icon" href="' . get_template_directory_uri() . '/favicon.ico" />';
    $inserts .= '<link rel="icon" type="image/svg+xml" href="' . get_template_directory_uri() . '/img/favicon.svg">';
    $inserts .= '<link rel="apple-touch-icon" sizes="180×180" href="' .  get_template_directory_uri() . '/pwa/icons/icon-180x180.png" />';
    $inserts .= '<meta name="theme-color" content="' . get_vars('themeColor.light') . '" media="(prefers-color-scheme: light)" />';
    $inserts .= '<meta name="theme-color" content="' . get_vars('themeColor.dark') . '" media="(prefers-color-scheme: dark)" />';
    $inserts .= '<link rel="manifest" href="' . get_template_directory_uri() . '/pwa/manifest.json" />';
    $inserts .= '<meta name="apple-mobile-web-app-title" content="' . get_vars('site.name') . '">';
    $inserts .= '<meta name="apple-mobile-web-app-capable" content="yes">';
    $inserts .= '<meta name="apple-mobile-web-app-status-bar-style" content="default">';
    $inserts .= '<link rel="apple-touch-icon-precomposed" href="' . get_template_directory_uri() . '/pwa/icons/icon-512x512.png" />';
    echo $inserts;
}
add_action('wp_head', 'add_head');


function add_gtm_partytown() {
  ?>
  <script>
    partytown = {
      lib: "<?php echo get_template_directory_uri(); ?>/~partytown/"
    };
  </script>
  <script src="<?php echo get_template_directory_uri(); ?>/~partytown/partytown.js"></script>
  <script type="text/partytown">
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','<?php echo get_vars('codes.gtm');?>');
  </script>
  <?php
}
add_action('wp_head', 'add_gtm_partytown', 1);

function add_gtm_nojs_partytown() {
  ?>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo get_vars('codes.gtm');?>"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <?php
}
add_action('wp_body_open', 'add_gtm_nojs_partytown');
