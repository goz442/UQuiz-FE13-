import { useParams } from "react-router-dom";

function Results() {
  const { nickname } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>결과 페이지</h1>
      <p>{nickname}님의 결과입니다!</p>
    </div>
  );
}

export default Results;
