import React, { useState } from "react";

import { Text, Input, Img, Button, PdfFileGenerator } from "components";
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import update from 'react-addons-update'; // ES6



const AssessmentFormpreferrePage = () => {

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [pdf, setPdf] = useState({})
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizFinished, setQuizFinished] = useState(false)
  const [res, setRes] = useState({
    personalDetails: {
      name: "",
      email: "",
      phone: ""
    },
    questions: [{
      questionText: "Choose your preferred country",
      answer: ""
    },
    {
      questionText: "2. Select your Age",
      answer: ""
    },
    {
      questionText: "3. Choose education",
      answer: ""
    },
    {
      questionText: "4. Your work experience",
      answer: ""
    }],
    score: 0,
    verdict: ""
  })

  const questions = [
    {
      questionText: 'Choose your preferred country',
      answerOptions: [
        { answerText: 'Australia', points: 1 },
        { answerText: 'Canada', points: 1 },
        { answerText: 'UK', points: 2 },
        { answerText: 'Other', points: 1 },
      ],
    },
    {
      questionText: '2. Select your Age',
      answerOptions: [
        { answerText: '1-18', points: 1 },
        { answerText: '19-34', points: 2 },
        { answerText: '35-45', points: 1 },
        { answerText: '45+', points: 1 },
      ],
    },
    {
      questionText: '3. Choose education',
      answerOptions: [
        { answerText: 'PhD', points: 2 },
        { answerText: 'Master’s degree', points: 1 },
        { answerText: 'Bachelor’s degree', points: 1 },
        { answerText: '2 year post secondary diploma', points: 1 },
        { answerText: '1 year post secondary diploma', points: 1 }
      ],
    },
    {
      questionText: '4. Your work experience',
      answerOptions: [
        { answerText: '1 year', points: 1 },
        { answerText: '2-3 years', points: 1 },
        { answerText: '4-5 years', points: 1 },
        { answerText: '6 or more', points: 2 },
      ],
    },
  ]

  function handleAnswerClick() {
    if (currentIndex === questions.length - 1) {
      // quiz over
      setAnswers([
        ...answers,
        selectedAnswer
      ]);
      setQuizFinished(true)
      console.log(answers)
    } else {
      if (selectedAnswer != "") {
        setAnswers([
          ...answers,
          selectedAnswer
        ]);

        const temp = questions[currentIndex].answerOptions.filter((resp) => resp.answerText === selectedAnswer);
        setScore((score) => score + temp[0].points)
        setCurrentIndex((value) => value + 1)
        console.log(score)
      }
    }
  }

  const response = {
    personalDetails: {
      name: "",
      email: "",
      phone: ""
    },
    questions: [{
      questionText: "Choose your preferred country",
      answer: ""
    },
    {
      questionText: "2. Select your Age",
      answer: ""
    },
    {
      questionText: "3. Choose education",
      answer: ""
    },
    {
      questionText: "4. Your work experience",
      answer: ""
    }],
    score: 0,
    verdict: ""
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-center mx-[auto] p-[36px] w-[100%]">
        <div className="flex flex-col justify-center items-center max-w-[728px] mb-[32px] mx-[auto] w-[100%]">
          <Text
            className="capitalize font-inter text-bluegray_903 text-center w-[auto]"
            as="h3"
            variant="h3"
          >
            Check your eligibility for free
          </Text>
          <Text
            className="font-normal font-poppins mx-[auto] mt-[19px] not-italic text-bluegray_601 text-center w-[auto]"
            variant="body12"
          >
            Get to know your immigration points instantly by answering a few
            questions
          </Text>
          <Text
            className="font-normal font-poppins mx-[auto] mt-[37px] not-italic text-bluegray_904 text-center w-[auto]"
            variant="body9"
          >
            {questions[currentIndex].questionText}
          </Text>
          <div className="flex flex-col justify-center items-center mt-[29px] md:w-[100%] sm:w-[100%] w-[68%]">
            {questions[currentIndex].answerOptions.map((answer) => {
              return (
                <Button
                  className={`font-medium font-poppins min-w-[60%] my-[10px] text-[18px] text-center w-[max-content] ${selectedAnswer === answer.answerText ? "bg-gray-400" : "white hover:bg-slate-300"}`}
                  shape="RoundedBorder10"
                  size="2xl"
                  key={answer.answerText}
                  onClick={() => {
                    setSelectedAnswer(answer.answerText)
                  }
                  }
                >
                  {answer.answerText}
                </Button>
              )
            })}
            {currentIndex === questions.length - 1 ? (<PDFDownloadLink classname="w-full" document={<PdfFileGenerator response={response} />} fileName="FORM" >
              {({ loading }) =>
                loading ? (
                  <Button
                    className="w-[300px] font-medium font-poppins min-w-[60%] mt-[35px] text-[18px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="OutlineAmber70026_1"
                    onClick={handleAnswerClick}
                  >
                    Loading...
                  </Button>
                ) : (
                  <Button
                    className="w-[300px] font-medium font-poppins min-w-[60%] mt-[35px] text-[18px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="OutlineAmber70026_1"
                    onClick={handleAnswerClick}
                  >
                    Finish
                  </Button>
                )}
            </PDFDownloadLink >) : (<Button
              className="font-medium font-poppins min-w-[60%] mt-[35px] text-[18px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder10"
              size="2xl"
              variant="OutlineAmber70026_1"
              onClick={handleAnswerClick}
            >
              Next
            </Button>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentFormpreferrePage;
