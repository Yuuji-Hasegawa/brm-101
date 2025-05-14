<?php get_header();?>
<div class="u-mw-r u-mx-auto">
  <h1 class="c-h1-ext u-mb-l">
    <?php echo set_my_title();?>
  </h1>
  <p class="c-prg-l u-mb-l">ご相談・ご質問は、こちらからお気軽にお問い合わせください。</p>
  <?php if (have_posts()) the_content();?>
	<ul class="o-stc u-ins-stc u-space-xs u-mt-l">
		<li class="c-prg-m c-note">
			調査等のため、返信にお時間を頂くことがございます。予めご了承ください。
		</li>
		<li class="c-prg-m c-note">
			万が一、一週間経っても返信がない場合は大変お手数ですが、
        <?php $contactMail = get_vars('contact.email.primary') ?: get_option('admin_email');?>
        <a
          class="u-fnt-en c-a c-a--und"
          href="mailto:<?php echo esc_attr($contactMail);?>"
          rel="noopener noreferrer"
          target="_blank"
        >
          <?php echo esc_html($contactMail);?>
        </a>
      までご連絡ください。
		</li>
	</ul>
</div>
<?php get_footer();?>
