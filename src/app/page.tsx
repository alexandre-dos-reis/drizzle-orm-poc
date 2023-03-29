import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { authorsTable, db } from "~/db/client";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const authors = await db.select().from(authorsTable);
  return (
    <main className={styles.main}>
      <ul>
        {authors.map((a) => (
          <li>
            {a.firstName} {a.lastName}
          </li>
        ))}
      </ul>
    </main>
  );
}
