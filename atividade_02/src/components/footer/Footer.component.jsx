import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="https://github.com/site/terms" className={styles.footerBlueLink}>Terms</a>
        <a href="https://github.com/site/privacy" className={styles.footerBlueLink}>Privacy</a>
        <a href="https://docs.github.com/articles/github-security/" className={styles.footerBlueLink}>Security</a>
        <a href="https://github.com/contact" className={styles.footerGreyLink}>Contact GitHub</a>
    </footer>
  )
}
