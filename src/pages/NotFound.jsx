import styles from './NotFound.module.scss'

function NotFound() {
    return (
        <>
            <h1 className={styles.root}>😔<br /> Ничего не найдено</h1>
            <p className={styles.root}>К сожалению данная страница отсутствует на нашем интернет-магазине</p>
        </>
    )
}

export default NotFound