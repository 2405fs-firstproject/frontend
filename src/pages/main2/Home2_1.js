import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home2_1.css";
import swiperLeft from "../../images/swiperLeft.svg";
import swiperRight from "../../images/swiperRight.svg";
import Home2_2 from "./Home2_2";

const initialCards = {
  cards1: [
    {
      src: "https://korea-pass.kr/assets/images/card/hana.webp?ver=240220",
      alt: "BC하나카드",
      name: "BC하나카드",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/br.webp?ver=240220",
      alt: "BC바로카드",
      name: "BC바로카드",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/ibk.webp?ver=240220",
      alt: "IBK기업은행",
      name: "IBK기업은행",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/hd.webp?ver=240220",
      alt: "현대카드",
      name: "현대카드",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/gj.webp?ver=240220",
      alt: "광주은행",
      name: "광주은행",
    },
  ],
  cards2: [
    {
      src: "https://korea-pass.kr/assets/images/card/dg.webp?ver=240220",
      alt: "iM유페이",
      name: "iM유페이",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/sh.webp?ver=240220",
      alt: "신한카드",
      name: "신한카드",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/wb.webp?ver=240220",
      alt: "우리카드",
      name: "우리카드",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/ss.webp?ver=240220",
      alt: "삼성카드",
      name: "삼성카드",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/hana.webp?ver=240220",
      alt: "하나카드",
      name: "하나카드",
    },
  ],
  cards3: [
    {
      src: "https://korea-pass.kr/assets/images/card/tm.webp?ver=240220",
      alt: "티머니",
      name: "티머니",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/eb.webp?ver=240220",
      alt: "모바일이즈",
      name: "모바일이즈",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/kakaopay.webp?ver=240220",
      alt: "카카오페이",
      name: "카카오페이",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/kb.webp?ver=240220",
      alt: "국민은행",
      name: "국민은행",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/nh.webp?ver=240220",
      alt: "NH농협",
      name: "NH농협",
    },
    {
      src: "https://korea-pass.kr/assets/images/card/kbk.webp?ver=240220",
      alt: "케이뱅크",
      name: "케이뱅크",
    },
  ],
};

const Home2_1 = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const navigate = useNavigate();

  const cardWrapperRef1 = useRef(null);
  const cardWrapperRef2 = useRef(null);
  const cardWrapperRef3 = useRef(null);

  const cardWidth1 = useRef(0);
  const cardWidth2 = useRef(0);
  const cardWidth3 = useRef(0);

  useEffect(() => {
    const calculateCardWidth = () => {
      if (cardWrapperRef1.current) {
        cardWidth1.current =
          cardWrapperRef1.current.scrollWidth / initialCards.cards1.length;
      }
      if (cardWrapperRef2.current) {
        cardWidth2.current =
          cardWrapperRef2.current.scrollWidth / initialCards.cards2.length;
      }
      if (cardWrapperRef3.current) {
        cardWidth3.current =
          cardWrapperRef3.current.scrollWidth / initialCards.cards3.length;
      }
    };

    const handleResize = () => {
      calculateCardWidth();
    };

    calculateCardWidth();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollCardWrapper = (ref, direction, cardWidth) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSwipeLeft = (section) => {
    switch (section) {
      case 1:
        setIndex1((prevIndex) => {
          const newIndex =
            prevIndex === 0 ? initialCards.cards1.length - 1 : prevIndex - 1;
          scrollCardWrapper(cardWrapperRef1, "left", cardWidth1.current);
          return newIndex;
        });
        break;
      case 2:
        setIndex2((prevIndex) => {
          const newIndex =
            prevIndex === 0 ? initialCards.cards2.length - 1 : prevIndex - 1;
          scrollCardWrapper(cardWrapperRef2, "left", cardWidth2.current);
          return newIndex;
        });
        break;
      case 3:
        setIndex3((prevIndex) => {
          const newIndex =
            prevIndex === 0 ? initialCards.cards3.length - 1 : prevIndex - 1;
          scrollCardWrapper(cardWrapperRef3, "left", cardWidth3.current);
          return newIndex;
        });
        break;
      default:
        break;
    }
  };

  const handleSwipeRight = (section) => {
    switch (section) {
      case 1:
        setIndex1((prevIndex) => {
          const newIndex =
            prevIndex === initialCards.cards1.length - 1 ? 0 : prevIndex + 1;
          scrollCardWrapper(cardWrapperRef1, "right", cardWidth1.current);
          return newIndex;
        });
        break;
      case 2:
        setIndex2((prevIndex) => {
          const newIndex =
            prevIndex === initialCards.cards2.length - 1 ? 0 : prevIndex + 1;
          scrollCardWrapper(cardWrapperRef2, "right", cardWidth2.current);
          return newIndex;
        });
        break;
      case 3:
        setIndex3((prevIndex) => {
          const newIndex =
            prevIndex === initialCards.cards3.length - 1 ? 0 : prevIndex + 1;
          scrollCardWrapper(cardWrapperRef3, "right", cardWidth3.current);
          return newIndex;
        });
        break;
      default:
        break;
    }
  };

  const handleCardClick = () => {
    navigate("/k-pass-card");
  };

  return (
    <div>
      <section className="home2">
        <h2>
          K-패스 적립금
          <br /> 지급일정 알려드릴게요.
        </h2>
        <div className="home2_1">
          <header>
            <h3>내 카드 결제일</h3>
            <p>
              신용공여기간에 따라
              <br />
              변경될 수 있습니다!
            </p>
          </header>
          <div className="home2_1_info">
            <div className="swiperLeft" onClick={() => handleSwipeLeft(1)}>
              <img src={swiperLeft} alt="swiper left" />
            </div>
            <div className="home2_1_card" ref={cardWrapperRef1}>
              {initialCards.cards1.map((card, idx) => (
                <div
                  key={idx}
                  className={`card ${idx === index1 ? "active" : ""}`}
                  onClick={handleCardClick}
                >
                  <div className={`card1_${idx + 1}_img`}>
                    <img src={card.src} alt={card.alt} />
                  </div>
                  <div className="cardName">{card.name}</div>
                </div>
              ))}
            </div>
            <div className="swiperRight" onClick={() => handleSwipeRight(1)}>
              <img src={swiperRight} alt="swiper right" />
            </div>
          </div>
        </div>
        <div className="home2_2">
          <header>
            <h3>7~9 영업일 사이</h3>
            <p>정산 후 2~3일 이내 지급됩니다!</p>
          </header>
          <div className="home2_2_info">
            <div className="swiperLeft" onClick={() => handleSwipeLeft(2)}>
              <img src={swiperLeft} alt="swiper left" />
            </div>
            <div className="home2_2_card" ref={cardWrapperRef2}>
              {initialCards.cards2.map((card, idx) => (
                <div
                  key={idx}
                  className={`card ${idx === index2 ? "active" : ""}`}
                  onClick={handleCardClick}
                >
                  <div className={`card2_${idx + 1}_img`}>
                    <img src={card.src} alt={card.alt} />
                  </div>
                  <div className="cardName">{card.name}</div>
                </div>
              ))}
            </div>
            <div className="swiperRight" onClick={() => handleSwipeRight(2)}>
              <img src={swiperRight} alt="swiper right" />
            </div>
          </div>
        </div>
        <div className="home2_3">
          <header>
            <h3>정해진 날짜에</h3>
            <p>
              카드사마다 특정 날짜에
              <br />
              일괄 지급합니다!
            </p>
          </header>
          <div className="home2_3_info">
            <div className="swiperLeft" onClick={() => handleSwipeLeft(3)}>
              <img src={swiperLeft} alt="swiper left" />
            </div>
            <div className="home2_3_card" ref={cardWrapperRef3}>
              {initialCards.cards3.map((card, idx) => (
                <div
                  key={idx}
                  className={`card ${idx === index3 ? "active" : ""}`}
                  onClick={handleCardClick}
                >
                  <div className={`card3_${idx + 1}_img`}>
                    <img src={card.src} alt={card.alt} />
                  </div>
                  <div className="cardName">{card.name}</div>
                </div>
              ))}
            </div>
            <div className="swiperRight" onClick={() => handleSwipeRight(3)}>
              <img src={swiperRight} alt="swiper right" />
            </div>
          </div>
        </div>
      </section>
      <Home2_2 /> {}
    </div>
  );
};

export default Home2_1;
