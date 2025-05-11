import '../../styles/generic/_resets.scss'
import '../../styles/objects/_frame.scss'
import '../../styles/utils/_frames.scss'
import { ioLazy } from '../../scripts/io-lazy.js';

export const createGmap = ({
	modifier,
	lazy = false,
}) => {
	const Gmap = document.createElement('div')
	Gmap.classList.add(
		...['o-frm', ...(modifier ? modifier.split(' ') : [])]
	)

	const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = '0';
  iframe.allowFullscreen = '';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
	iframe.title = 'Google Maps';

	const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.9329897247435!2d135.82658877574357!3d34.681640672926505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001235850ce58ff%3A0x9c6cbd07c72e56aa!2z5qCq5byP5Lya56S-RlJBVEVMTE8!5e0!3m2!1sja!2sjp!4v1700736670552!5m2!1sja!2sjp';

  if (lazy) {
    iframe.classList.add('j-io-lzy');
    iframe.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		iframe.setAttribute('data-src', mapSrc);
		setTimeout(() => ioLazy(), 0);
  } else {
    iframe.src = mapSrc;
  }

	Gmap.appendChild(iframe);
	return Gmap
}
