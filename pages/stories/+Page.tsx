import styles from "./stories.module.scss";
import { Link } from "../../components/Link";

export default function Stories() {
  return (
    <>
      <h1 className={styles.text}>Stories</h1>
      <p className={styles.text}>This is a page of stories and anecdotes shared by family and friends of those who knew Jasmim</p>
      <p className={styles.text}><i>If you'd like to submit a story visit the <Link href="/stories/submit">submission page</Link></i></p>
    </>
  );
}
