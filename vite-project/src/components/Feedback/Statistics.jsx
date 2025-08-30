import styles from "./Statistic.module.css";

export default function Statistic ({good, neutral, bad, total, positivePercentage}) {
    return(
        <div className={styles.statistics}>
            <h2 className={styles.title}>İstatistikler</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.label}>İyi</span>
                    <span className= {styles.value}>{good}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Nötr</span>
                    <span className= {styles.value}>{neutral}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Kötü</span>
                    <span className= {styles.value}>{bad}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Toplam</span>
                    <span className= {styles.value}>{total}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>İyi</span>
                    <span className= {styles.value}>{good}</span>
                </li>
                <li className={styles.item}>
                <span className={styles.label}>Pozitif Geri Bildirim:</span>
                <span className={styles.value}>{positivePercentage}%</span>
              </li>
            </ul>
        </div>
    )
}