<?php

function get_front_news()
{
    global $post;
    $output = '';
    $args = array(
        'post_type' => 'news',
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC',
        'no_found_rows' => true
    );
    $the_query = new WP_Query($args);
    if ($the_query->have_posts()) {
        $output = '<ul class="o-stc u-ins-stc u-space-m u-mw-r u-mx-auto u-mb-l">';
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $output .= '<li class="o-sdb">
            <time class="c-prg-l u-fnt-en u-fnt-wb" datetime="' . get_the_time('Y-m-d') . '">' . get_the_time('Y.m.d') . '</time>
            <a href="' . get_the_permalink() . '" class="c-a c-a--und c-prg-l c-fld">' . get_the_title() . '</a>
          </li>';
        }
        $output .= '</ul>';
        wp_reset_postdata();
        $output .= '<a class="o-bx c-btn c-btn--txt c-prg-l u-ml-auto u-dsp-flx u-flx-y-ctr u-py-s u-px-m u-brd-r-s u-mw-cnt u-fnt-wb" href="' . home_url('/news/') . '">
          一覧を見る
          <!-- prettier-ignore -->
          <svg class="o-icn u-ml-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
            <path
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
              fill="currentColor"></path>
          </svg>
        </a>';
    }
    if ($output) {
        return $output;
    } else {
        return '<p class="c-prg-l u-mw-r u-mx-auto">お知らせはまだありません。</p>';
    }
}

function get_loop_cat()
{
    global $post;
    $output = "";
    $cat = get_the_category($post->ID);
    if ($cat && !is_wp_error($cat)) {
        $output = '<span class="c-lbl-m u-fnt-wb u-dsp-ifx u-flx-y-ctr u-brd-r-l u-px-s u-bg-fll">' . $cat[0]->cat_name . '</span>';
    }
    if ($output) {
        return $output;
    }
}

function get_related_loop()
{
    global $post;
    $output = '';
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3,
        'no_found_rows' => true,
        'orderby' => 'rand'
    );
    $the_query = new WP_Query($args);
    if ($the_query->have_posts()) {
        $output = '<h2 class="c-h2 u-fnt-wb">関連記事</h2>
        <ul class="o-grd o-grd--t">';
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $output .= '<li>
            <a href="' . get_the_permalink() . '" class="o-stc c-crd c-crd--link">
            ' . get_thumb() .
            '<span class="o-stc u-ins-stc u-space-s u-py-l u-px-m">
          <span class="o-cls u-ins-cls u-space-m">
            <time class="c-prg-l u-fnt-en u-fnt-wm" datetime="' . get_the_time('Y-m-d') . '">' . get_the_time('Y.m.d') . '</time>
            '. get_loop_cat() .'
          </span>
          <span class="c-prg-l u-txt-trim u-txt-trim--2 u-fnt-wb">' . get_the_title() . '</span>
          <span class="c-prg-m u-txt-dim">
            <span
              class="u-font-en u-fnt-wm">' . get_views_count() . '</span>回表示・読了見込<span
              class="u-font-en u-fnt-wm">' . get_readtime() . '</span>分
          </span>
        </span>
      </a>
      </li>';
        }
        $output .= '</ul>';
        wp_reset_postdata();
    }
    if($output) {
        return $output;
    }
}

function get_last_loop()
{
    global $post;
    $output = '';
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 3,
        'orderby' => 'date',
        'order' => 'DESC',
        'no_found_rows' => true
    );
    $the_query = new WP_Query($args);
    if ($the_query->have_posts()) {
        $output = '<h2 class="c-h2 u-fnt-wb">最新記事</h2>
        <ul class="o-grd o-grd--t">';
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $output .= '<li>
            <a href="' . get_the_permalink() . '" class="o-stc c-crd c-crd--link">
            ' . get_thumb() .
            '<span class="o-stc u-ins-stc u-space-s u-py-l u-px-m">
          <span class="o-cls u-ins-cls u-space-m">
            <time class="c-prg-l u-fnt-en u-fnt-wm" datetime="' . get_the_time('Y-m-d') . '">' . get_the_time('Y.m.d') . '</time>
            '. get_loop_cat() .'
          </span>
          <span class="c-prg-l u-txt-trim u-txt-trim--2 u-fnt-wb">' . get_the_title() . '</span>
          <span class="c-prg-m u-txt-dim">
            <span
              class="u-font-en u-fnt-wm">' . get_views_count() . '</span>回表示・読了見込<span
              class="u-font-en u-fnt-wm">' . get_readtime() . '</span>分
          </span>
        </span>
      </a>
      </li>';
        }
        $output .= '</ul>';
        wp_reset_postdata();
    }
    if ($output) {
        return $output;
    }
}
function get_popular_loop()
{
    global $post;
    $output = '';
    $args = array(
      'post_type'      => 'post',
      'posts_per_page' => 4,
      'meta_key'       => 'post_views_count',
      'orderby'        => 'meta_value_num',
      'order'          => 'DESC',
      'no_found_rows' => true
    );
    $the_query = new WP_Query($args);
    if ($the_query->have_posts()) {
        $output = '<h2 class="c-h2 u-fnt-wb">人気記事</h2>
        <ul class="o-grd o-grd--q">';
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $output .= '<li>
            <a href="' . get_the_permalink() . '" class="o-stc c-crd c-crd--link">
            ' . get_thumb() .
            '<span class="o-stc u-ins-stc u-space-s u-py-l u-px-m">
          <span class="o-cls u-ins-cls u-space-m">
            <time class="c-prg-l u-fnt-en u-fnt-wm" datetime="' . get_the_time('Y-m-d') . '">' . get_the_time('Y.m.d') . '</time>
            '. get_loop_cat() .'
          </span>
          <span class="c-prg-l u-txt-trim u-txt-trim--2 u-fnt-wb">' . get_the_title() . '</span>
          <span class="c-prg-m u-txt-dim">
            <span
              class="u-font-en u-fnt-wm">' . get_views_count() . '</span>回表示・読了見込<span
              class="u-font-en u-fnt-wm">' . get_readtime() . '</span>分
          </span>
        </span>
      </a>
      </li>';
        }
        $output .= '</ul>';
        wp_reset_postdata();
    }
    if ($output) {
        return $output;
    }
}
