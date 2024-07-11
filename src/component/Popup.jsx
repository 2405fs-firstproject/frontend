import React from "react";
import "./Popup.css";
export const Popup = () => {
  return (
    <div className="Popup_baner">
      <div className="Popup_event">
        <div className="Popup_dis">
          <p>매월 15회 이상 탑승 시 최대 60회까지 😀 교통비의 20~53% 적립</p>{" "}
        </div>
        <button className="Popup_closebtn">x</button>
      </div>
    </div>
  );
};
