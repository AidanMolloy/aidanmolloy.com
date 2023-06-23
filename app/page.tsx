import styles from "./page.module.css";
import Socials from "../components/socials";
import AidanTimeline from "../components/timeline";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <div className={styles.container}>
        <Socials />
        <AidanTimeline />
      </div>
    </main>
  );
}
