import { useState } from 'react';
import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const Feedback = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () =>{
    return good + bad + neutral};

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good * 100) / countTotalFeedback());
  };

    return (
      <div>
        <FeedbackOptions
          onLeaveFeedback={handleFeedback}
          options={['good', 'neutral', 'bad']}
        />
        <h2>Statistics</h2>

        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  
}

export default Feedback