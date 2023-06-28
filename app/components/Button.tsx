"use client";

import { ReactNode } from "react";
import styles from "./Button.module.css";
type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};
export default function Button(props: ButtonProps) {
  return <button className={styles.Button} {...props} />;
}
