import { ReactNode } from "react";

import styles from "./ButtonBar.module.css";
type ButtonBarProps = {
  children: ReactNode;
};
export default function ButtonBar({ children }: ButtonBarProps) {
  return <div className={styles.ButtonBar}>{children}</div>;
}
