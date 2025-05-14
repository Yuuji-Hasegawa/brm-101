<?php get_header();?>
<h1 class="c-h1-ext u-mb-l">
  <?php echo set_my_title();?>
</h1>
<?php if (have_posts()):?>
	<?php the_content();?>
<?php endif;?>
<?php get_footer();?>
