<?php

function set_bread_json()
{
    global $post;
    $array[] = array(
        "@type" => "ListItem",
        "position" => 1,
        "item" => array(
            "@id" => esc_url(home_url('/')),
            "name" => esc_attr('トップページ')
        )
    );
    if (is_404()) {
        $notfound[] = array(
            "@type" => "ListItem",
            "position" => 2,
            "item" => array(
                "@id" => esc_url(get_pagenum_link()),
                "name" => esc_attr('お探しのページは見つかりませんでした')
            )
        );
        $array = array_merge($array, $notfound);
    } elseif (is_page()) {
        $i = 1;
        if ($post->post_parent != 0) {
            $ancestors = array_reverse(get_post_ancestors($post->ID));
            foreach ($ancestors as $ancestor) {
                $pageName = get_the_title($ancestor);
                $pageId = get_permalink($ancestor);
                $i++;
                $page_json[] = array(
                    "@type" => "ListItem",
                    "position" => $i,
                    "item" => array(
                        "@id" => esc_url($pageId),
                        "name" => esc_html($pageName)
                    )
                );
            }
        }
        $i++;
        $pageName = get_the_title($post->ID);
        $page[] = array(
            "@type" => "ListItem",
            "position" => $i,
            "item" => array(
                "@id" => esc_url(get_permalink($post->ID)),
                "name" => esc_html($pageName)
            )
        );
        $array = array_merge($array, $page);
    } elseif (is_archive()) {
        if (is_post_type_archive('news')) {
            $child[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(home_url('/news/')),
                    "name" => esc_attr('お知らせ')
                )
            );
            $array = array_merge($array, $child);
        } elseif (is_tag()) {
            $parent[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(home_url('/blog/')),
                    "name" => esc_attr('ブログ')
                )
            );
            $child[] = array(
                "@type" => "ListItem",
                "position" => 3,
                "item" => array(
                    "@id" => esc_url(get_term_link(get_queried_object_id($post->ID))),
                    "name" => esc_attr(single_term_title('#', false))
                )
            );
            $array = array_merge($array, $parent, $child);
        } elseif (is_category()) {
            $parent[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(home_url('/blog/')),
                    "name" => esc_attr('ブログ')
                )
            );
            $cat = get_the_category($post->ID);
            $i = 2;
            if (!empty($cat)) {
                $cat_id = $cat[0]->cat_ID;
                $ancestors = get_ancestors($cat_id, 'category');
                $reversed_ancestors = array_reverse($ancestors);
                foreach ($reversed_ancestors as $ancestor) {
                    $pageName = get_cat_name($ancestor);
                    $pageId = get_category_link($ancestor);
                    $i++;
                    $cat_array[] = array(
                      "@type" => "ListItem",
                      "position" => $i,
                      "item" => array(
                        "@id" => esc_url($pageId),
                        "name" => esc_html($pageName)
                      )
                    );
                }
            }
            $i++;
            $last_cat[] = array(
                    "@type" => "ListItem",
                    "position" => $i,
                    "item" => array(
                        "@id" => esc_url(get_category_link($cat[0]->term_id)),
                        "name" => esc_attr($cat[0]->cat_name)
                    )
                );
            if (!empty($cat_array)) {
                $array = array_merge($array, $parent, $cat_array, $last_cat);
            } else {
                $array = array_merge($array, $parent, $last_cat);
            }
        } else {
            $parent[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(home_url('/blog/')),
                    "name" => esc_attr('ブログ')
                )
            );
            $array = array_merge($array, $parent);
        }
    } elseif (is_single()) {
        if ('news' == get_post_type()) {
            $parent[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(home_url('/news/')),
                    "name" => esc_attr('お知らせ')
                )
            );
            $child[] = array(
                "@type" => "ListItem",
                "position" => 3,
                "item" => array(
                    "@id" => esc_url(get_permalink($post->ID)),
                    "name" => esc_html(get_the_title($post->ID))
                )
            );
            $array = array_merge($array, $parent, $child);
        } elseif (is_attachment()) {
            $attachment[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(get_permalink($post->ID)),
                    "name" => esc_attr('添付ファイルのページ')
                )
            );
            $array = array_merge($array, $attachment);
        } else {
            $parent[] = array(
                "@type" => "ListItem",
                "position" => 2,
                "item" => array(
                    "@id" => esc_url(home_url('/blog/')),
                    "name" => esc_attr('ブログ')
                )
            );
            $cat = get_the_category($post->ID);
            $i = 2;
            if (!empty($cat)) {
                $cat_id = $cat[0]->cat_ID;
                $ancestors = get_ancestors($cat_id, 'category');
                $reversed_ancestors = array_reverse($ancestors);
                foreach ($reversed_ancestors as $ancestor) {
                    $pageName = get_cat_name($ancestor);
                    $pageId = get_category_link($ancestor);
                    $i++;
                    $cat_array[] = array(
                    "@type" => "ListItem",
                    "position" => $i,
                    "item" => array(
                        "@id" => esc_url($pageId),
                        "name" => esc_html($pageName)
                    )
                );
                }
            }
            $i++;
            $last_cat[] = array(
              "@type" => "ListItem",
              "position" => $i,
              "item" => array(
                "@id" => esc_url(get_category_link($cat[0]->term_id)),
                "name" => esc_attr($cat[0]->cat_name)
              )
            );
            $i++;
            $single[] = array(
                "@type" => "ListItem",
                "position" => $i,
                "item" => array(
                    "@id" => esc_url(get_permalink($post->ID)),
                    "name" => esc_html(get_the_title($post->ID))
                )
            );
            if (!empty($cat_array)) {
                $array = array_merge($array, $parent, $cat_array, $last_cat, $single);
            } else {
                $array = array_merge($array, $parent, $last_cat, $single);
            }
        }
    }
    if ($array) {
        $bread_array = array(
            "@context" => "https://schema.org",
            "@type" => "BreadcrumbList",
            "itemListElement" => $array
        );
        return $bread_array;
    }
}
function set_content_json()
{
    global $post;
    $ogp_title = get_ogp_title();
    $ogp_img = get_ogp_img();
    $cat_name = '';
    if ('news' == get_post_type()) {
        $cat_name = 'お知らせ';
    } elseif (get_the_category($post->ID)) {
        $cat = get_the_category($post->ID);
        $cat_name = esc_attr($cat[0]->cat_name);
    } else {
        $cat_name = 'ブログ';
    }
    $author_id = get_author_id();
    $author_name = esc_attr(author_display_name());
    $author_type = get_vars('author.type') === 'Person' ? 'Person':'Organization';
    $author_url = get_vars('author.sns.url');

    $author_sameAs = array_filter(array_column(get_author_sns(), 'url'));

    $organs_url = get_vars('company.url')? :home_url('/');
    $organs_sameAs = array_filter([
      get_vars('sns.fb'),
      get_vars('sns.tw'),
      get_vars('sns.instagram'),
      get_vars('sns.linkedin'),
      get_vars('sns.youtube'),
      get_vars('sns.note'),
      get_vars('sns.substack'),
      get_vars('sns.pinterest')
    ]);

    $array = array(
        "@context" => "http://schema.org",
        "@type" => "NewsArticle",
        "mainEntityOfPage" => array(
            "@type" => "WebPage",
            "@id" => esc_url(get_permalink($post->ID))
        ),
        "name" => esc_html(get_ogp_title()),
        "headline" => esc_html(get_ogp_title()),
        "image" => array(
            array(
                "@type" => "ImageObject",
                "url" => esc_url($ogp_img['url']),
                "width" => $ogp_img['width'],
                "height" => $ogp_img['height']
            )
        ),
        "articleSection" => esc_html($cat_name),
        "datePublished" => get_the_time('c'),
        "dateModified" => get_the_modified_time('c'),
        "author" => array(
            "@type" => $author_type,
            "name" => $author_name,
            "url" => $author_type === 'Person' ? $author_url : $organs_url,
            "sameAs" => $author_type === 'Person' ? $author_sameAs : $organs_sameAs
        ),
        "publisher" => array(
            "@type" => "Organization",
            "name" => esc_attr(get_vars('company.name')),
            "url" => $organs_url,
            "logo" => array(
                "@type" => "ImageObject",
                "url" => esc_url(get_template_directory_uri() . '/img/logo.svg'),
                "width" => get_vars('company.logo.width'),
                "height" => get_vars('company.logo.height')
            ),
            "sameAs" => $organs_sameAs
        ),
        "description" => my_description()
    );
    if ($array) {
        return $array;
    }
}
function set_front_json()
{
    $array = array(
      "@context" => "http://schema.org",
      "@type" => "WebSite",
      "name" => get_bloginfo('name'),
      "url" => esc_url(home_url('/'))
    );
    if ($array) {
        return $array;
    }
}
