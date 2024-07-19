'use client'
import Advantages from "./Advantages";
import Dashboard from "./Dashboard";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import { Button, Modal } from 'antd';

export default function Home() {
 
  return (
    <div>
      <Dashboard />
      <Advantages />
      <QuestionsAndAnswers />
    </div>
  );
}
