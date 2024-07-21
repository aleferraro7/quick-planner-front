import Navbar from '@/components/Navbar';
import styles from '../ui/home.module.css';

export default function Page() {
  return (
    <body className={styles.body}>
      <Navbar />
      <div>
        <div>PAGINA DE INICIO</div>
      </div>
    </body>
  );
}
