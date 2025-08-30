import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({options, onLeaveFeedback, showReset, onReset}) {
    return (
        <div className= { styles.feedbackOptions}>
            {options.map(option => (
                <button
                key={option}
                type="button"
                className={styles.button}
                onClick={() => onLeaveFeedback(option)}>
                    {option.charAt(0).toUpperCase()
                    + option.slice(1)}
                </button>
            ))}
            {showReset && (  // ← Bu koşul çalışıyor mu?
        <button
          type="button"
          className={styles.resetButton}
          onClick={onReset}
        >
          Reset Feedback
        </button>
      )}
        </div>
    );
};