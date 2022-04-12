import styles from './styles.module.scss'
import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string
  onChange: () => void
}

export const Input = ({ name, labelName, onChange, ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{labelName}</label>
      <input name={name} onChange={onChange} {...rest} />
    </div>
  )
}
