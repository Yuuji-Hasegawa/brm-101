<?php

function get_vars($key = '')
{
  static $arr = null;

  if ($arr === null) {
    $json = file_get_contents(get_template_directory() . '/lib/setting.json');
    $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
    $arr = json_decode($json, true);
  }

  if (!$key) return $arr;

  $keys = explode('.', $key);
  $value = $arr;
  foreach ($keys as $k) {
    if (!isset($value[$k])) return null;
    $value = $value[$k];
  }
  return $value;
}

function get_ogp_type()
{
    is_single() ? $og_type = 'article' : $og_type = 'website';
    return $og_type;
}
/* shortcode */
function shortcode_url()
{
    return home_url();
}
add_shortcode('url', 'shortcode_url');

function shortcode_templateurl()
{
    return get_template_directory_uri();
}
add_shortcode('template_url', 'shortcode_templateurl');

add_filter('wp_kses_allowed_html', 'my_wp_kses_allowed_html', 10, 2);
function my_wp_kses_allowed_html($tags, $context)
{
    $tags['img']['srcset'] = true;
    $tags['source']['srcset'] = true;
    return $tags;
}

function get_thumb()
{
    $output = '<picture class="o-frm j-cnt-auto">';
    if (has_post_thumbnail()) {
        $output .= '<img src="' . esc_url(get_the_post_thumbnail_url(get_the_ID(), 'full')) . '"  width="100%" height="100%" loading="lazy" decoding="async" fetchpriority="low" alt=""/>';
    } else {
        $output .= '<source
									type="image/avif"
									srcset="' . get_template_directory_uri() . '/img/thumb-320.avif   320w,
													' . get_template_directory_uri() . '/img/thumb-640.avif   640w,
													' . get_template_directory_uri() . '/img/thumb-960.avif   960w,
													' . get_template_directory_uri() . '/img/thumb-1920.avif 1920w,
													' . get_template_directory_uri() . '/img/thumb.avif      1921w"
									sizes="(max-width: 320px) 320px,
												 (max-width: 640px) 640px,
												 (max-width: 960px) 960px,
												 (max-width: 1920px) 1920px,
												 100vw"
								>
                <source
									type="image/webp"
									srcset="' . get_template_directory_uri() . '/img/thumb-320.webp   320w,
													' . get_template_directory_uri() . '/img/thumb-640.webp   640w,
													' . get_template_directory_uri() . '/img/thumb-960.webp   960w,
													' . get_template_directory_uri() . '/img/thumb-1920.webp 1920w,
													' . get_template_directory_uri() . '/img/thumb.webp      1921w"
									sizes="(max-width: 320px) 320px,
												 (max-width: 640px) 640px,
												 (max-width: 960px) 960px,
												 (max-width: 1920px) 1920px,
												 100vw"
								>
                <img
									src="' . get_template_directory_uri() . '/img/thumb.png"
									srcset="' . get_template_directory_uri() . '/img/thumb-320.png   320w,
													' . get_template_directory_uri() . '/img/thumb-640.png   640w,
													' . get_template_directory_uri() . '/img/thumb-960.png   960w,
													' . get_template_directory_uri() . '/img/thumb-1920.png 1920w,
													' . get_template_directory_uri() . '/img/thumb.png      1921w"
									sizes="(max-width: 320px) 320px,
												 (max-width: 640px) 640px,
												 (max-width: 960px) 960px,
												 (max-width: 1920px) 1920px,
												 100vw"
									width="100%"
									height="100%"
									loading="lazy"
									decoding="async"
									fetchpriority="low"
									alt=""
								/>';
    }
    $output .= '</picture>';
    return $output;
}
function get_author_id()
{
  $source = get_vars('author.source');

  if ($source === 'json') {
    return null;
  }

  if (is_single()) {
    global $post;

    if (isset($post) && $post instanceof WP_Post && $post->post_author) {
      return (int) $post->post_author;
    }
  }

  return null;
}
function author_display_name()
{
    $source = get_vars('author.source');
    $json_name = get_vars('author.name');

    if ($source === 'json') {
        return !empty($json_name) ? $json_name : 'サンプル 太郎';
    }

    $author_id = get_author_id();

    if ($author_id) {
      $user = get_user_by('id', $author_id);
        if ($user && !empty($user->display_name)) {
          return $user->display_name;
      }
    }

    $admin_user = get_user_by('id', 1);
    return ($admin_user && !empty($admin_user->display_name)) ? $admin_user->display_name : 'サンプル 太郎';
}
function author_prof_url()
{
    $author_id = get_author_id();
    if (empty($author_id)) {
        return null;
    }
    return get_avatar_url($author_id);
}
function author_bio_pict()
{
    $author_img = author_prof_url();
    $output = '<picture class="o-frm u-asp-sq u-frm-r-r u-brd-r-r j-cnt-auto">';
    if (!empty($author_img) && !preg_match('/1\.gravatar\.com/', $author_img)) {
      $output .= '<img src="' . esc_url($author_img) . '" width="100%" height="100%" loading="lazy" decoding="async" fetchpriority="low"
      alt="">';
    } else {
      $output .= '<source
				type="image/avif"
				srcset="' . get_template_directory_uri() . '/img/profile-320.avif   320w,
								' . get_template_directory_uri() . '/img/profile-640.avif   640w,
								' . get_template_directory_uri() . '/img/profile-960.avif   960w,
								' . get_template_directory_uri() . '/img/profile-1920.avif 1920w,
								' . get_template_directory_uri() . '/img/profile.avif      1921w"
				sizes="(max-width: 320px) 320px,
							 (max-width: 640px) 640px,
							 (max-width: 960px) 960px,
							 (max-width: 1920px) 1920px,
							 100vw"
			>
			<source
				type="image/webp"
				srcset="' . get_template_directory_uri() . '/img/profile-320.webp   320w,
								' . get_template_directory_uri() . '/img/profile-640.webp   640w,
								' . get_template_directory_uri() . '/img/profile-960.webp   960w,
								' . get_template_directory_uri() . '/img/profile-1920.webp 1920w,
								' . get_template_directory_uri() . '/img/profile.webp      1921w"
				sizes="(max-width: 320px) 320px,
							 (max-width: 640px) 640px,
							 (max-width: 960px) 960px,
							 (max-width: 1920px) 1920px,
							 100vw"
			>
			<img
				src="' . get_template_directory_uri() . '/img/profile.png"
				srcset="' . get_template_directory_uri() . '/img/profile-320.png   320w,
					      ' . get_template_directory_uri() . '/img/profile-640.png   640w,
								' . get_template_directory_uri() . '/img/profile-960.png   960w,
								' . get_template_directory_uri() . '/img/profile-1920.png 1920w,
								' . get_template_directory_uri() . '/img/profile.png      1921w"
				sizes="(max-width: 320px) 320px,
							 (max-width: 640px) 640px,
							 (max-width: 960px) 960px,
							 (max-width: 1920px) 1920px,
							 100vw"
				width="100%"
				height="100%"
				loading="lazy"
				decoding="async"
				fetchpriority="low"
				alt=""
			/>';
    }
    $output .= '</picture>';
    return $output;
}
function get_author_desc()
{
    $author_id = get_author_id();
    if ($author_id) {
        return nl2br(get_the_author_meta('user_description', $author_id));
    }
    return nl2br(get_vars('author.desc'));
}

function my_user_meta($wb)
{
    $wb['facebook'] = 'facebook';
    $wb['twitter'] = 'twitter';
    $wb['instagram'] = 'instagram';
    $wb['youtube'] = 'youtube';
    $wb['note'] = 'note';
    $wb['linkedin'] = 'linkedin';
    $wb['gravatar'] = 'gravatar';
    return $wb;
}
add_filter('user_contactmethods', 'my_user_meta', 10, 1);

function get_author_sns()
{
  $author_sns = [];
  $source = get_vars('author.source');

  if ($source === 'json') {
    $sns_keys = [
        'Facebook'         => 'author.sns.fb',
        'Twitter'          => 'author.sns.tw',
        'Instagram'        => 'author.sns.instagram',
        'LinkedIn'         => 'author.sns.linkedin',
        'Youtube'          => 'author.sns.youtube',
        'note.com'         => 'author.sns.note',
        'Substack'         => 'author.sns.substack',
        'Pinterest'        => 'author.sns.pinterest',
        'GitHub'           => 'author.sns.github',
        'Website'          => 'author.sns.url',
    ];

    foreach ($sns_keys as $name => $key) {
      $url = get_vars($key);
      if (!empty($url)) {
          $author_sns[] = [
              'name' => $name,
              'url'  => $url,
          ];
      }
    }

    return $author_sns;
  }

  if($author_id = get_author_id()) {
    $sns_keys = [
        'Facebook'         => get_the_author_meta('facebook', $author_id),
        'Twitter'          => get_the_author_meta('twitter', $author_id),
        'Instagram'        => get_the_author_meta('instagram', $author_id),
        'LinkedIn'         => get_the_author_meta('linkedin', $author_id),
        'Youtube'          => get_the_author_meta('youtube', $author_id),
        'note.com'         => get_the_author_meta('note', $author_id),
        'Website'          => get_the_author_meta('url', $author_id),
    ];

    foreach ($sns_keys as $name => $url) {
      if (!empty($url)) {
        $author_sns[] = [
          'name' => $name,
          'url'  => $url,
        ];
      }
    }
    return $author_sns;
  }

  return $author_sns;
}

function get_cat_link()
{
    global $post;
    $output = "";
    $cat = get_the_category($post->ID);
    if ($cat && !is_wp_error($cat)) {
        $output = '<a class="o-bx c-btn c-btn--tnl-gry c-prg-l u-fnt-wb u-brd-r-s u-dsp-flx u-mw-cnt u-flx-y-ctr u-py-s u-px-m u-mb-l" href="' . get_category_link($cat[0]->term_id) . '">
        <svg class="o-icn u-mr-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"
            fill="currentColor"></path>
        </svg>' . $cat[0]->cat_name . '</a>';
    }
    if ($output) {
        return $output;
    }
}
function get_tag_cluster()
{
    global $post;
    $output = "";
    $tags = wp_get_object_terms($post->ID, 'post_tag');
    if ($tags && !is_wp_error($tags)) {
        $output = '<div class="o-cls">';
        foreach ($tags as $tagname) {
            $output .= '<a href="' . get_term_link($tagname) . '" rel="tag" class="o-bx c-btn c-btn--txt c-prg-m u-fnt-wb u-brd-r-s u-py-xs u-px-s u-dsp-flx u-mw-cnt u-flx-y-ctr">
            <span class="u-mr-xs">#</span>' . $tagname->name . '</a>';
        }
        $output .= '</div>';
    }
    if ($output) {
        return $output;
    }
}
function get_summary()
{
    global $post;
    $output = "";
    if(get_post_meta($post->ID, 'meta_description', true)) {
        $output = nl2br(get_post_meta($post->ID, 'meta_description', true));
    } else {
        if(is_single()) {
            $output = get_the_excerpt();
        } else {
            get_vars('site.description') ? $output = get_vars('site.description') : $output = get_bloginfo('description');
        }
    }
    if ($output) {
        return $output;
    }
}

function post_view_count()
{
    global $post;
    $views = get_post_meta($post->ID, 'post_views_count', true);
    if ($views) {
        $views++;
        update_post_meta($post->ID, 'post_views_count', $views);
    } else {
        add_post_meta($post->ID, 'post_views_count', 1, true);
    }
    return $views ? $views : 0;
}
function set_readtime()
{
    global $post;
    $content = mb_strlen(strip_tags(get_post_field('post_content', $post->ID)));
    $summary = mb_strlen(strip_tags(get_post_meta($post->ID, 'post_summary', true)));
    $count = $content + $summary;
    $readtime = round($count / 600);
    update_post_meta($post->ID, 'readtime', $readtime);
}
add_action('save_post', 'set_readtime');

function get_readtime()
{
    global $post;
    $output = '';
    if(get_post_meta($post->ID, 'readtime', true)) {
        $output = get_post_meta($post->ID, 'readtime', true);
    } else {
        $output = '0';
    }
    return $output;
}
function get_views_count()
{
    global $post;
    $output = '';
    if(get_post_meta($post->ID, 'post_views_count', true)) {
        $output = get_post_meta($post->ID, 'post_views_count', true);
    } else {
        $output = '0';
    }
    return $output;
}
