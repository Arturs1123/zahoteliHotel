'use client'

import Advantages from "./components/Advantages";
import Wanted from "./components/Wanted";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers";

export default function Home() {
  return (
    <div>
      <Wanted />
      <Advantages />
      <QuestionsAndAnswers />
    </div>
  );
}
