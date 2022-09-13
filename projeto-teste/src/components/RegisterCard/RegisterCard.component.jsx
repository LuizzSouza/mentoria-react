
import styles from './RegisterCard.module.css';

export const RegisterCard = () => {
	return (
		<div className={styles.body}>
			<div className={styles.textLink}>
				<p>New to GitHub?</p>
				<a href="https://github.com/signup?source=login" className={styles.registerLink}>Create an account</a>
				<p>.</p>
			</div>
		</div>
	)
}
