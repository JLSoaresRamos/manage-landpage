import { twMerge } from 'tailwind-merge'

type ButtonProps =
	| ({
			type: 'button'
	  } & React.ButtonHTMLAttributes<HTMLButtonElement>)
	| ({
			type: 'link'
			href: string
	  } & React.AnchorHTMLAttributes<HTMLAnchorElement>)

export function Button(
	props: ButtonProps & {
		children?: React.ReactNode
		className?: string
	},
) {
	const { type, children, className, ...rest } = props

	const defaultStyle =
		'block w-fit rounded-full bg-primary-brightRed px-4 py-3 text-white mx-auto'

	const mergedClassName = twMerge(defaultStyle, className)

	if (type === 'button') {
		return (
			<button
				className={mergedClassName}
				{...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
			>
				{children}
			</button>
		)
	} else {
		return (
			<a
				className={mergedClassName}
				{...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{children}
			</a>
		)
	}
}
