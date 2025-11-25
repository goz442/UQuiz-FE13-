import { useParams, useNavigate } from "react-router-dom";

function Quiz() {
  const { nickname } = useParams();
  const navigate = useNavigate();

  const finishQuiz = () => {
    navigate(`/results/${nickname}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>퀴즈 페이지</h1>
      <p>참가자: {nickname}</p>

      <button onClick={finishQuiz}>결과 보기</button>
    </div>
  );
}

export default Quiz;
