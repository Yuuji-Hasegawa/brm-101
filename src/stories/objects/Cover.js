import '../../styles/generic/_resets.scss'
import '../../styles/objects/_cover.scss'
import '../../styles/utils/_spaces.scss'

export const createCover = ({
	topClass,
	middleClass,
	bottomClass,
	label,
}) => {
  const Cover = document.createElement('div')
	Cover.className = 'o-cvr'
	Cover.style.minHeight = '240px'
	Cover.style.backgroundColor = 'var(--c-bg-layer)'

	const top = document.createElement('span');
  top.innerText = `${label} TopItem`;
	top.style.backgroundColor = 'var(--c-bg-primary)'
	top.style.color = 'var(--c-txt-on-bg-primary)'
	top.classList.add(
		...['u-pd-s', ...(topClass ? topClass.split(' ') : [])]
	);
  Cover.append(top);

  const middle = document.createElement('span');
  middle.innerText = `${label} MiddleItem`;
	middle.style.backgroundColor = 'var(--c-bg-secondary)'
	middle.style.color = 'var(--c-txt-on-bg-secondary)'
	middle.classList.add(
		...['u-pd-s', ...(middleClass ? middleClass.split(' ') : [])]
	);
  Cover.append(middle);

  const bottom = document.createElement('span');
  bottom.innerText = `${label} BottomItem`;
	bottom.style.backgroundColor = 'var(--c-bg-tertiary)'
	bottom.style.color = 'var(--c-txt-on-bg-tertiary)'
	bottom.classList.add(
		...['u-pd-s', ...(bottomClass ? bottomClass.split(' ') : [])]
	);
	Cover.append(bottom);

  return Cover
}
