
import { Link } from 'react-router-dom';
import styles from './RegisterCard.module.css';

export const RegisterCard = () => {
	return (
		<div className={styles.body}>
			<div className={styles.textLink}>
				<p>New to GitHub?</p>
				<Link to="/register" className={styles.registerLink}>Create an account</Link>
				{/* <a className={styles.registerLink}>Create an account</a> */}
				<p>.</p>
			</div>
		</div>
	)
}
