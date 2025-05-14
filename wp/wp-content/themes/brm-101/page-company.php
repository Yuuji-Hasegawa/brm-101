<?php get_header();?>
<h1 class="c-h1-ext u-mb-l">
	<?php echo set_my_title();?>
</h1>
<table class="c-map-tbl">
	<caption class="sr-only">
		会社概要
	</caption>
	<tbody>
		<tr class="o-sdb u-ins-sdb u-space-none">
			<th class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__key" scope="row">
				屋号/商号
			</th>
			<td class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__val">
				<?php echo esc_html(get_vars('company.name'));?>
			</td>
		</tr>
		<tr class="o-sdb u-ins-sdb u-space-none">
			<th class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__key" scope="row">
				代表取締役
			</th>
			<td class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__val">
        <?php echo esc_html(get_vars('company.owner'));?>
			</td>
		</tr>
		<tr class="o-sdb u-ins-sdb u-space-none">
			<th class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__key" scope="row">
				所在地
			</th>
			<td class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__val">
        <?php
          $zip = get_vars('company.zip');
          $address = get_vars('company.address');

          if ($zip || $address):
        ?>
          <?php
            if($zip) echo '〒<span class="u-fnt-en">' . esc_html($zip) . '</span>';
            if($zip && $address) echo ' ';
            if($address) echo esc_html($address);
          ?>
        <?php endif;?>
			</td>
		</tr>
		<tr class="o-sdb u-ins-sdb u-space-none">
			<th class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__key" scope="row">
				開業/設立
			</th>
			<td class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__val">
				<?php echo esc_html(get_vars('company.birth'));?>
			</td>
		</tr>
		<tr class="o-sdb u-ins-sdb u-space-none">
			<th class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__key" scope="row">
				URL
			</th>
			<td class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__val">
        <?php $URL = esc_html(get_vars('company.url') ?: '#');?>
				<a href="<?php echo $URL;?>" class="c-a c-a--und u-dsp-blc u-fnt-en u-hit-exp" target="_blank" rel="noopener  noreferrer">
          <?php echo $URL;?>
        </a>
			</td>
		</tr>
    <?php
      if($services = get_vars('company.service')):
    ?>
		<tr class="o-sdb u-ins-sdb u-space-none">
			<th class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__key" scope="row">
				事業内容
			</th>
			<td class="o-bx c-prg-l u-px-m u-py-s c-map-tbl__val">
        <ul class="c-ul">
          <?php for($i = 0; $i < count($services); $i++):?>
            <li><?php echo esc_html($services[$i]);?></li>
          <?php endfor;?>
          <li>その他、上記に係る業務</li>
        </ul>
			</td>
		</tr>
    <?php endif;?>
	</tbody>
</table>
<h2 class="c-h2 u-fnt-wb">
	アクセス
</h2>
<div class="o-sdb c-mda u-bg-neu">
	<div class="c-mda__nr">
		<ul class="c-ul u-mb-l">
			<li class="c-prg-l">近鉄奈良駅から徒歩5分</li>
			<li class="c-prg-l">奈良駅から徒歩12分</li>
		</ul>
		<a
			class="o-bx c-btn c-btn--tnl-gry c-prg-l u-fnt-wb u-brd-r-s u-dsp-flx u-mw-cnt u-flx-y-ctr u-py-s u-px-m"
			href="<?php echo esc_attr(get_vars('gmap.link') ?: '#');?>"
		>
			<span class="u-flx-shn u-fnt-en">Google Maps</span>
			<!-- prettier-ignore -->
			<svg class="u-ml-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.3 132.3">
				<path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"></path>
				<path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"></path>
				<path fill="#4285f4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"></path>
				<path fill="#fbbc04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"></path>
				<path fill="#34a853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"></path>
			</svg>
		</a>
    <?php
      $workday   = get_vars('company.workday');
      $dayoff    = get_vars('company.dayoff');
      $openTime  = get_vars('company.open');
      $closeTime = get_vars('company.close');

      if ($workday || $openTime || $closeTime):
        $timeRange = '';
        if ($openTime || $closeTime) {
          $timeRange = ($openTime ? $openTime : '') . ($closeTime ? '〜' . $closeTime : '');
        }
    ?>
    <div class="o-stc u-ins-stc u-space-s u-mt-xl">
      <dl class="o-cls">
        <dt class="c-prg-l u-fnt-wb">営業時間</dt>
        <dd class="c-prg-l"><?php if ($timeRange) echo $timeRange;?></dd>
      </dl>
      <dl class="o-cls">
        <dt class="c-prg-l u-fnt-wb">定休日</dt>
        <dd class="c-prg-l"><?php echo esc_html($dayoff);?></dd>
      </dl>
      <p class="c-note c-sml-l u-txt-dim">営業時間、定休日ともに、施設に準じる</p>
    </div>
    <?php endif;?>
	</div>
	<div class="c-mda__wd">
		<div class="o-frm">
			<iframe
				class="j-io-lzy"
				src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
				data-src="<?php echo esc_attr(get_vars('gmap.embed') ?: '#');?>"
				width="100%"
				height="100%"
				style="border:0;"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				title="Google Maps">
			</iframe>
		</div>
	</div>
</div>
<?php get_footer();?>
