<?php get_header();?>
<h1 class="c-h1-ext u-mb-l">
  <?php echo set_my_title();?>
</h1>
<?php if (have_posts()):?>
  <ul class="o-stc u-ins-stc u-space-m">
    <?php while (have_posts()): the_post();?>
      <li class="o-sdb">
        <time class="c-prg-l u-fnt-en u-fnt-wb" datetime="<?php the_time('Y-m-d');?>">
          <?php the_time('Y.m.d');?>
        </time>
        <a
          class="c-a c-a--und c-prg-l c-fld u-fnt-wb"
          href="<?php the_permalink();?>"
        >
          <?php the_title();?>
        </a>
      </li>
    <?php endwhile;?>
  </ul>
  <?php else:?>
    <p class="c-prg-l">お知らせはまだありません。</p>
  <?php endif;
  echo get_pagination();?>
<?php get_footer();?>
