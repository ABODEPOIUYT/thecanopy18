import React, { useState } from "react";
import Particles from "./Particles";

const questions = [
  {
    q: "كم عدد أركان الإسلام؟",
    a: ["3", "5", "6", "7"],
    correct: 1
  },
  {
    q: "ما هي أول سورة في القرآن؟",
    a: ["البقرة", "الفاتحة", "الإخلاص", "الناس"],
    correct: 1
  },
  {
    q: "كم عدد الصلوات المفروضة؟",
    a: ["3", "4", "5", "6"],
    correct: 2
  },
  {
    q: "في أي شهر رمضان؟",
    a: ["شوال", "رمضان", "رجب", "محرم"],
    correct: 1
  },
  {
    q: "من هو خاتم الأنبياء؟",
    a: ["موسى", "عيسى", "محمد", "إبراهيم"],
    correct: 2
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px", color: "#fff" }}>
      <Particles />

      <div style={{
        background: "rgba(0,0,0,0.6)",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "auto"
      }}>
        <h2>🕌 لعبة الأسئلة الدينية</h2>

        {!finished ? (
          <>
            <p>{questions[current].q}</p>

            {questions[current].a.map((answer, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "10px",
                  width: "100%"
                }}
              >
                {answer}
              </button>
            ))}

            <p>النقاط: {score}</p>
          </>
        ) : (
          <div>
            <h3>🎉 انتهت اللعبة</h3>
            <p>نتيجتك: {score} / {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
