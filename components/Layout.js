import styles from '../styles/Layout.module.css'
import Navbar from '../components/Navbar';
import Header from '../components/Header'

const Layout = ({children}) => {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                {children}
            </main>
        </div>
      </>
    )
}

export default Layout
