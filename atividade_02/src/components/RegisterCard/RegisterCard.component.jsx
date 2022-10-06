
import { Link } from 'react-router-dom';
import styles from './RegisterCard.module.scss';

export const RegisterCard = () => {
	return (
		<div className={styles.customBody}>
			<div className={styles.customBodyTextLink}>
				<p>New to GitHub?</p>
				<Link to="/register" className={styles.customBodyTextLinkRegisterLink}>Create an account</Link>
				{/* <a className={styles.registerLink}>Create an account</a> */}
				<p>.</p>
			</div>
		</div>
	)
}
