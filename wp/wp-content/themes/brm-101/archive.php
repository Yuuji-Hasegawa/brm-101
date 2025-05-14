<?php get_header();?>
<h1 class="c-h1-ext u-mb-l">
  <?php echo set_my_title();?>
</h1>
<?php if (have_posts()):?>
  <ul class="o-grd o-grd--t">
    <?php while (have_posts()): the_post();?>
    <li>
      <a
        href="<?php the_permalink();?>"
        class="o-stc c-crd c-crd--link"
      >
        <?php echo get_thumb();?>
        <span class="o-stc u-ins-stc u-space-s u-py-l u-px-m">
					<span class="o-cls u-ins-cls u-space-m">
						<time class="c-prg-l u-fnt-en u-fnt-wm" datetime="<?php the_time('Y-m-d');?>">
              <?php the_time('Y.m.d');?>
            </time>
            <?php echo get_loop_cat();?>
					</span>
					<span class="c-prg-l u-txt-trim u-txt-trim--2 u-fnt-wb"><?php the_title();?></span>
					<span class="c-prg-m u-txt-dim">
						<span class="u-font-en u-fnt-wm"><?php echo get_views_count();?></span>回表示・読了見込<span class="u-font-en u-fnt-wm"><?php echo get_readtime();?></span>分
					</span>
				</span>
      </a>
    </li>
    <?php endwhile;?>
  </ul>
  <?php else:?>
    <p class="c-prg-l">記事はまだありません。</p>
  <?php endif;
  echo get_pagination();?>
<?php get_footer();?>
