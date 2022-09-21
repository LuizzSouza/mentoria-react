import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a href="https://github.com/site/terms" className={styles.blueLink}>Terms</a>
        <a href="https://github.com/site/privacy" className={styles.blueLink}>Privacy</a>
        <a href="https://docs.github.com/articles/github-security/" className={styles.blueLink}>Security</a>
        <a href="https://github.com/contact" className={styles.greyLink}>Contact GitHub</a>
    </footer>
  )
}
