import React from "react";
import { useParams } from "react-router-dom";
import "./K_Pass_Card.css";

const K_Pass_Card = () => {
  const { cardName } = useParams();

  return (
    <div className="card-details">
      <h2>{cardName} 카드 세부 정보</h2>
      {/* 여기서 cardName을 이용해 세부 정보를 불러오거나 표시할 수 있습니다 */}
      <p>여기에 {cardName} 카드의 세부 정보를 표시합니다.</p>
    </div>
  );
};

export default K_Pass_Card;
