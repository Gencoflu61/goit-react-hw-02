import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistics';
import Notification from './Notification';
import styles from './Feedback.module.css';


export default function Feedback(){
    const [feedback, setFeedback] = useState(() => {
        // LocalStorage'dan verileri al veya varsayılan değerleri kullan
        const savedFeedback = localStorage.getItem('sip-happen-feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0 };
    });
    // Feedback değiştiğinde localStorage'a kaydet
    useEffect(() => {
      localStorage.setItem('sip-happens-feedback',JSON.stringify(feedback));
    }, [feedback]);
    const option = ['good', 'neutral', 'bad'];

    const handleLeaveFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1,
        }));
    };
    const handleResetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0});
    };
    // Toplam geri bildirim sayısını hesapla
   const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
   };
    const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) return 0;
    return Math.round((feedback.good / total) * 100);
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    return (
        <div className = {styles.feedback}>
            <div className={styles.header}>
                <h1 className={styles.title}>Sip Happen Cafe</h1>
                <p className={styles.subtitle}>
                    Please leave your feedback about our service by selecting one of the options below.
                </p>
            </div>
            <FeedbackOptions
              options={option}
              onLeaveFeedback={handleLeaveFeedback}
              showReset={total > 0}
              onReset={handleResetFeedback}
            />
            {total > 0 ? (
                <Statistic
                  good={feedback.good}
                  neutral={feedback.neutral}
                  bad={feedback.bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
            ) : (
                <Notification message='Henüz geri bildirim yok'/>
            )}
        </div>
    );
}  