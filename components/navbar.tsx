import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <Link className={styles.link} href='/'>
          Home
        </Link>
      </div>
      <div className={styles.div}>
        <Link className={styles.link} href='/login'>
          Login
        </Link>
        <Link className={styles.link} href='/register'>
          Register
        </Link>
      </div>
    </nav>
  );
}
