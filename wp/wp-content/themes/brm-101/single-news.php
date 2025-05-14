<?php get_header();?>
<div class="o-ctr u-ins-ctr u-space-clamp u-mw-r u-bg-neu u-level-s u-py-2xl">
	<h1 class="c-h1-ext u-mb-l">
    <?php echo set_my_title();?>
  </h1>
  <div class="o-stc u-ins-stc u-space-l">
		<div class="o-cls">
		  <time class="c-prg-m u-fnt-en u-txt-dim" datetime="<?php the_time('Y-m-d')?>">
			<!-- prettier-ignore -->
			<svg class="o-icn u-mr-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
				<path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z" fill="currentColor"></path>
			</svg>
        <?php the_time('Y.m.d')?>
      </time>
      <?php if (get_the_modified_time('Y-m-d') != get_the_time('Y-m-d')):?>
        <time class="c-prg-m u-fnt-en u-txt-dim" datetime="<?php the_modified_time('Y-m-d'); ?>">
          <!-- prettier-ignore -->
          <svg class="o-icn u-mr-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
            <path d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z" fill="currentColor"></path>
          </svg>
          <?php the_modified_time('Y.m.d'); ?>
        </time>
      <?php endif;?>
    </div>
    <?php if (have_posts()):?>
      <article class="c-entry">
        <?php the_content();?>
      </article>
    <?php endif;?>
    <h2 class="c-h2">
      シェア・共有
    </h2>
    <div class="u-dsp-flx u-pos-r">
      <label for="share-url" class="sr-only">Copy Share URL</label>
      <input class="o-bx c-frm-txt c-prg-l u-pd-s u-w-max" id="share-url" type="text" value="<?php echo esc_url(get_permalink($post->ID));?>" readonly="" />
      <button type="button" class="o-bx c-btn c-btn--sq c-btn--fll c-btn--copy u-brd-r-s u-ml-m u-flx-shn" aria-label="copy" aria-disabled="false" aria-describedby="tooltip-share-url">
        <!-- prettier-ignore -->
        <svg class="c-icn-cpy" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z" fill="currentColor"></path>
        </svg>
        <!-- prettier-ignore -->
        <svg class="c-icn-chk" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" fill="currentColor"></path>
        </svg>
      </button>
      <span id="tooltip-share-url" class="c-tip c-tip--cpy c-sml-l u-px-s u-py-2xs" aria-label="Copy url to clipboard" aria-hidden="true" popover="auto">
        Copy url to clipboard
      </span>
    </div>
    <h3 class="c-h3">
      本件に関するお問い合わせ先
    </h3>
    <div class="c-prg-l">
      <span class="u-dsp-ifx u-flx-y-b">
        <!-- prettier-ignore -->
        <svg class="o-icn" viewBox="0 0 688 87" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M448.75 56.5v-51h12V87l-55-57v51.5h-12V0zM520.25 3c22.368 0 40.5 18.133 40.5 40.5S542.618 84 520.25 84s-40.5-18.132-40.5-40.5S497.882 3 520.25 3m-391.5 57.5s4.9 11 16.5 11 16.5-11 16.5-11V5h12v54.5c0 8-8.9 23-28.5 23s-28.5-15-28.5-23V5h12zM11.335 4.265a58.4 58.4 0 0 1 9.138.904h-.001c3.422.55 6.456 1.62 9.09 3.218l.503.31c2.49 1.582 4.49 3.689 5.994 6.312 1.625 2.837 2.409 6.472 2.409 10.855a17.2 17.2 0 0 1-.63 4.531 17.3 17.3 0 0 1-1.672 4.297h-.001a17 17 0 0 1-2.62 3.68l-.018.017a13 13 0 0 1-2.143 1.74 17.4 17.4 0 0 1 4.731 2.14l.363.24a19 19 0 0 1 4.648 4.47l.257.342a21.2 21.2 0 0 1 2.97 5.71l.138.407a20 20 0 0 1 1.009 6.294c0 3.68-.664 6.89-2.022 9.602l-.28.536a20.24 20.24 0 0 1-6.153 6.904l-.01.008c-2.396 1.624-5.09 2.849-8.073 3.676l-.602.16-.014.003a43.2 43.2 0 0 1-9.915 1.129H.75A.75.75 0 0 1 0 81V5l.004-.077A.75.75 0 0 1 .75 4.25h9.242zm293.75 0a58.4 58.4 0 0 1 9.138.904h-.001c3.422.55 6.456 1.62 9.09 3.218l.503.31c2.491 1.582 4.49 3.689 5.994 6.312 1.625 2.837 2.409 6.472 2.409 10.855q-.001 2.225-.629 4.531a17.3 17.3 0 0 1-1.673 4.297h-.001a17 17 0 0 1-2.62 3.68l-.018.017a13 13 0 0 1-2.143 1.74 17.4 17.4 0 0 1 4.731 2.14l.364.24a19 19 0 0 1 4.647 4.47l.257.342a21.2 21.2 0 0 1 2.97 5.71l.138.407a20 20 0 0 1 1.009 6.294c0 3.68-.664 6.89-2.021 9.602l-.282.536a20.2 20.2 0 0 1-6.152 6.904l-.011.008q-3.594 2.436-8.072 3.676l-.602.16-.014.003a43.2 43.2 0 0 1-9.915 1.129H294.5a.75.75 0 0 1-.75-.75V5l.004-.077a.75.75 0 0 1 .746-.673h9.242zm296.509.235c4.155 0 7.899.987 11.216 2.968h.001c3.318 1.918 6 4.693 8.045 8.308a.5.5 0 0 1-.178.676l-7.279 4.35a.5.5 0 0 1-.685-.17c-1.325-2.2-2.89-3.846-4.687-4.957l-.006-.004.269-.422-.269.42c-1.711-1.095-3.908-1.66-6.622-1.66a13 13 0 0 0-4.299.746l-.013.004q-1.795.57-3.302 1.635l-.425.314a10.1 10.1 0 0 0-2.683 3.134l-.005.01c-.662 1.138-1 2.467-1 4.003 0 1.339.305 2.507.901 3.517l.239.387q.864 1.335 2.084 2.39 1.41 1.216 3.107 2.158a54 54 0 0 0 3.539 1.524l5.241 2.031.004.001-.174.438.174-.437q3.905 1.557 7.234 3.505 3.464 1.873 5.952 4.548l.307.339q2.271 2.566 3.575 5.906l.17.441c.821 2.227 1.225 4.789 1.225 7.674q.001 5.03-1.885 9.385c-1.191 2.832-2.88 5.275-5.066 7.321-2.118 2.043-4.631 3.655-7.529 4.836l-.009.004q-4.365 1.679-9.4 1.677-4.268 0-8.031-1.39l-.499-.193q-3.963-1.578-7.04-4.347l-.006-.005q-2.793-2.599-4.705-6.14l-.251-.476a25.2 25.2 0 0 1-2.495-7.733l-.079-.552a.5.5 0 0 1 .392-.556l9.22-1.933a.5.5 0 0 1 .603.49q0 2.904 1.03 5.418a12.3 12.3 0 0 0 2.889 4.178l.236.218q1.789 1.614 4.165 2.58 2.528.931 5.349.932c1.872 0 3.576-.373 5.121-1.111l.007-.003.301-.144q2.239-1.094 3.807-2.832l.009-.01.219-.235a12.9 12.9 0 0 0 2.491-4.048l.004-.008.124-.316q.905-2.377.906-5.007c0-1.872-.345-3.468-1.015-4.803l-.004-.008a10.7 10.7 0 0 0-2.782-3.605l-.021-.018a16 16 0 0 0-3.398-2.43l-.558-.29-.023-.013a42 42 0 0 0-4.507-2.198h-.003l-5.046-2.128-.005-.003a87 87 0 0 1-6.052-2.917l-.012-.006.246-.435-.246.434a26.7 26.7 0 0 1-4.661-3.308l-.581-.535-.016-.016a19.5 19.5 0 0 1-3.586-5.259l-.005-.012c-.874-2.008-1.303-4.303-1.303-6.872 0-3.032.596-5.753 1.8-8.153l.004-.01.242-.442a19.2 19.2 0 0 1 4.74-5.611l.389-.306q2.747-2.102 6.168-3.29l.492-.165a24.8 24.8 0 0 1 8.209-1.378M77.25 69.5h22.5V81h-34V5h11.5zM239.75 17h-30v18h29v11.5h-29v23h30V81h-42V5h42zm448 0h-30v18h29v11.5h-29v23h30V81h-42V5h42zm-167-3c-16.016 0-29 12.984-29 29s12.984 29 29 29 29-12.984 29-29-12.984-29-29-29M10.943 71.783h6.483q3.249 0 6.293-.492c2.064-.389 3.886-1.065 5.475-2.022l.011-.005.3-.181a10.3 10.3 0 0 0 3.545-3.677l.01-.018c.98-1.598 1.497-3.67 1.497-6.261 0-2.578-.577-4.595-1.667-6.114-1.13-1.574-2.605-2.805-4.44-3.694l-.009-.004.336-.67-.336.67q-2.526-1.27-5.59-1.779l-.412-.064a44 44 0 0 0-6.42-.496h-5.076zm293.75 0h6.483q3.248 0 6.293-.492c2.064-.389 3.886-1.065 5.475-2.022l.011-.005.301-.181a10.3 10.3 0 0 0 3.544-3.677l.011-.018c.979-1.598 1.496-3.67 1.496-6.261 0-2.578-.577-4.595-1.667-6.114-1.13-1.574-2.605-2.805-4.44-3.694l-.009-.004.336-.67-.336.67q-2.526-1.27-5.59-1.779l-.412-.064a44 44 0 0 0-6.419-.496h-5.077zM10.943 37.916h1.66q3.259-.001 6.107-.394c1.931-.324 3.578-.9 4.957-1.716 1.351-.867 2.43-2.04 3.24-3.536.795-1.536 1.22-3.62 1.22-6.304 0-2.454-.373-4.378-1.071-5.815l-.144-.28-.012-.022c-.696-1.398-1.654-2.48-2.877-3.266l-.25-.152-.02-.014c-1.286-.821-2.775-1.375-4.479-1.651l-.343-.052-.026-.004q-2.842-.492-6.1-.493h-1.862zm293.75 0h1.661q3.258-.001 6.106-.394c1.931-.324 3.578-.9 4.957-1.716 1.351-.867 2.431-2.04 3.24-3.536.795-1.536 1.221-3.62 1.221-6.304 0-2.454-.374-4.378-1.072-5.815l-.144-.28-.012-.022c-.696-1.398-1.654-2.48-2.878-3.266l-.249-.152-.02-.014c-1.286-.821-2.775-1.375-4.479-1.651l-.343-.052-.026-.004q-2.842-.492-6.1-.493h-1.862z" fill="currentColor"/>
        </svg>
        <span class="sr-only"><?php echo esc_html(get_vars('site.name') ?: '#');?></span>
        <span class="u-fnt-wb u-ml-s">運営窓口</span>
      </span>
      <?php
        $zip = get_vars('company.zip');
        $address = get_vars('company.address');

        if ($zip || $address):
      ?>
        <span class="u-dsp-blc">
          <?php
            if($zip) echo '〒<span class="u-fnt-en">' . esc_html($zip) . '</span>';
            if($zip && $address) echo ' ';
            if($address) echo esc_html($address);
          ?>
        </span>
      <?php endif;?>
      <?php $contactMail = get_vars('contact.email.primary') ?: get_option('admin_email');?>
      <span class="u-dsp-flx u-flx-y-ctr">
        メール:<a
                class="c-a c-a--und u-dsp-ibc"
                href="mailto:<?php echo esc_attr($contactMail);?>"
                target="_blank"
                rel="noopener noreferrer"
              >
          <?php echo esc_html($contactMail);?>
        </a>
      </span>
      <a class="c-a c-a--und u-dsp-blc" href="<?php echo home_url('/inquiry/');?>">
        お問い合わせフォーム
      </a>
    </div>
    <a
      class="o-bx c-btn c-btn--tnl-gry c-prg-l u-mx-auto u-dsp-flx u-flx-y-ctr u-py-s u-px-m u-brd-r-s u-mw-cnt u-fnt-wb"
      href="<?php echo home_url('/news/');?>"
    >
      一覧を見る
      <!-- prettier-ignore -->
      <svg class="o-icn u-ml-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.-->
        <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" fill="currentColor"></path>
      </svg>
    </a>
	</div>
</div>
<?php get_footer();?>
