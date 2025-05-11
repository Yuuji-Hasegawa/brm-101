import '../../styles/generic/_resets.scss'
import '../../styles/objects/_stack.scss'
import '../../styles/objects/_sidebar.scss'
import '../../styles/components/_link.scss'
import '../../styles/components/_text-sizes.scss'
import '../../styles/components/_row.scss'
import '../../styles/utils/_spaces.scss'
import '../../styles/utils/_text.scss'

export const createHeadlineNews = () => {
	const count = 10
	const HeadlineNews = document.createElement('ul')
	HeadlineNews.className = 'o-stc u-ins-stc u-space-m'
	for (let i = 1; i <= count; i++) {
		const li = document.createElement('li')
		li.className = 'o-sdb c-row'
		const time = document.createElement('time')
		time.className = 'c-prg-l u-fnt-en'
		time.dateTime = '2025-mm-dd'
		time.innerText = '2025.mm.dd'
		const Link = document.createElement('a')
		Link.className = 'c-a c-prg-l c-row__str'
		Link.href = '#'
		Link.innerText = `list Item ${i}`
		li.appendChild(time)
		li.appendChild(Link)
		HeadlineNews.appendChild(li)
	}
	return HeadlineNews
}
