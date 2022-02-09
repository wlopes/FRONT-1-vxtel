import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size: 'small' | 'medium' | 'fullWidth'
}

export const Button = ({ children, variant, size, ...rest }: ButtonProps) => {
  //
  const setClass = (classes: string[]) => {
    return classes.map((className) => styles[className]).join(' ')
  }

  return (
    <button
      className={setClass(['container', `button-${variant}`, `button-${size}`])}
      {...rest}
    >
      {children}
    </button>
  )
}
