import styles from './Notification.module.css';
export default function Notification ({message}) {
    return (
        <div className={styles.notification}>
            <p className={styles.message}>{message}</p>
        </div>
    )
}