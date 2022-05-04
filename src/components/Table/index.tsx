import styles from './style.module.scss'

type TableProps = {
  columns: string[]
  data: Record<string, string>[]
}

export const Table = (props: TableProps) => {
  return (
    <table className={styles.customTable}>
      <thead>
        <tr>
          {props.columns.map((c, i) => {
            return <th key={`column-${i}`}>{c}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, i) => {
          return (
            <tr key={`line-${i}`}>
              {props.columns.map((column, j) => {
                return <td key={`cell-${i}-${j}`}>{row[column]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
