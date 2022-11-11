import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>Diary</h2>
      <p>Diary 페이지 입니다</p>
    </div>
  );
};

export default Diary;
