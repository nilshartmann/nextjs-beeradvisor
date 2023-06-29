import Link from "next/link";
import styles from "./page.module.css";
export default function LandingPage() {
  return (
    <div className={styles.Welcome}>
      <h1>Welcome!</h1>

      <p>
        Before you enter, please confirm that you are old enough to drink beer?
      </p>

      <Link href={"/beers"}>Yes, I am</Link>
    </div>
  );
}
