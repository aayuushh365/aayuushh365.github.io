import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'outline'

type BaseProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
}

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type AsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = AsButton | AsLink

const baseStyles =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg-primary'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30',
  outline: 'border border-border text-text-primary hover:border-accent hover:text-accent',
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AsLink
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  )
}
