import React from "react";
import "./RewardCard.css";

const RewardCard = () => {
  return (
    <div className="reward-card">
      <div className="reward-header">
        <span className="badge">Elite Rewards</span>
      </div>

      <p className="reward-text">
        You're 2 bookings away from a free 1-hour session!
      </p>

      <div className="progress-section">
        <div className="progress-info">
          <h2>8/10</h2>
          <span>Completed</span>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <div className="reward-icon">🏆</div>
    </div>
  );
};

export default RewardCard;