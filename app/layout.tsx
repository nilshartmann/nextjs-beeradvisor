import "./bootstrap-reboot.css";
import "./google-fonts.css";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";
import AppLink from "@/app/components/AppLink";

export const metadata = {
  title: "BeerAdvisor",
  description: "BeerAdvisor Next.js Sample App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <div className={styles.BeerRatingApp}>
          <header className={styles.Header}>
            <div className={styles.MainHeader}>
              <h1>
                <AppLink href={"/beers"}>Beer Advisor</AppLink>
              </h1>
            </div>
          </header>
          <div className={styles.Main}>{children}</div>
          <footer className={styles.Footer}>
            <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
              {GITHUB_REPO}
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
const GITHUB_REPO = "https://github.com/nilshartmann/nextjs-beeradvisor";
