import { usePageContext } from "vike-react/usePageContext";
import styles from "./Link.module.scss";
import clsx from "clsx";

export function Link({ href, children }: { href: string; children: string }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a href={href} className={clsx(styles.link, {
       [styles.isActive]: isActive
    })}>
      {children}
    </a>
  );
}
