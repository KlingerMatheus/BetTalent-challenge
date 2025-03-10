import { ReactNode } from "react";
import styles from "./table.module.css";

interface TableContainerProps {
  children?: ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => (
  <table className={styles.table}>{children}</table>
);

export default TableContainer;
