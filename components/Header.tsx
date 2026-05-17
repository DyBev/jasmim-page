import { Link } from "./Link"
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContents}>
        <div className={styles.headerTitle}>Jasmim Lobos</div>
        <span className={styles.spacer} />
        <Link href="/stories">Stories</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
}
