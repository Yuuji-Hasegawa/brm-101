<?php

function get_pagination()
{
    global $wp_query;
    $bignum = 999999999;
    if ($wp_query->max_num_pages <= 1) {
        return;
    }
    $paged        = get_query_var('paged') ? intval(get_query_var('paged')) : 1;
    $pagenum_link = html_entity_decode(get_pagenum_link());
    $query_args   = array();
    $url_parts    = explode('?', $pagenum_link);
    if (isset($url_parts[1])) {
        wp_parse_str($url_parts[1], $query_args);
    }
    $pagenum_link = remove_query_arg(array_keys($query_args), $pagenum_link);
    $pagenum_link = trailingslashit($pagenum_link). '%_%';
    $format  = $GLOBALS['wp_rewrite']->using_index_permalinks() && !strpos($pagenum_link, 'index.php') ? 'index.php/' : '';
    $format .= $GLOBALS['wp_rewrite']->using_permalinks() ? user_trailingslashit('page/%#%', 'paged') : '?paged=%#%';
    $pages = paginate_links(array(
      'base'     => $pagenum_link,
      'format'   => $format,
      'total'    => $GLOBALS['wp_query']->max_num_pages,
      'current'  => $paged,
      'end_size'     => 1,
      'mid_size'     => 1,
      'add_args' => array_map('urlencode', $query_args),
      'prev_text'    => '<svg class="o-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" fill="currentColor" /></svg><span class="sr-only">前のページへ</span>',
      'next_text'    => '<svg class="o-icn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" fill="currentColor" /></svg><span class="sr-only">次のページへ</span>',
      'type'      => 'array'
    ));
    $pages = str_replace('<span class="page-numbers dots">&hellip;</span>', '', $pages);
    $pages = str_replace('<a class="page-numbers"', '<a class="o-bx c-btn c-btn--sq c-btn--tnl-sec c-prg-l u-brd-r-s u-fnt-en"', $pages);
    $pages = str_replace('<a class="prev page-numbers"', '<a class="o-bx c-btn c-btn--sq c-btn--tnl-sec u-brd-r-s c-h4-ext" title="前のページ" aria-label="前のページへ"', $pages);
    $pages = str_replace('<a class="next page-numbers"', '<a class="o-bx c-btn c-btn--sq c-btn--tnl-sec u-brd-r-s c-h4-ext" title="次のページ" aria-label="次のページへ"', $pages);

    if (is_array($pages)) {
        $output = '<nav class="u-mt-xl" aria-label="Pagination"><ol class="o-cls u-ins-cls u-space-s u-flx-ctr">';
        foreach ($pages as $page) {
            if ($page == null) continue;

            if (preg_match('/<a[^>]+>(\d+)<\/a>/', $page, $matches)) {
              $page_num = $matches[1];
              $page = str_replace(
                  '<a ',
                  '<a title="' . $page_num . 'ページ" aria-label="' . $page_num . 'ページ目へ" ',
                  $page
              );
            }

            if (preg_match('/class="page-numbers current">(\d+)</', $page, $matches)) {
                $page_num = $matches[1];
                $page = str_replace(
                    'class="page-numbers current"',
                    'class="o-bx c-btn c-btn--sq c-btn--lne c-prg-l u-brd-r-s u-fnt-en" aria-label="現在のページ" title="' . $page_num . 'ページ"',
                    $page
                );
            }

            $output .= '<li>' . $page . '</li>';
        }
        $output .= '</ol></nav>';
    }
    if ($output) {
        return $output;
    }
}
