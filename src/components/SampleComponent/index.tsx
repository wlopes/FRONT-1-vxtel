import styles from './styles.module.scss'

export interface SampleComponentProps {
  title: string
}

export const SampleComponent = ({ title }: SampleComponentProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  )
}
