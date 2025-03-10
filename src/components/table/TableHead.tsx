import styles from "./table.module.css";

interface TableHeadProps {
  columns: string[];
}

const TableHead = ({ columns }: TableHeadProps) => (
  <thead className={styles.thead}>
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </tr>
  </thead>
);

export default TableHead;
