"use client";

import { useState, useRef, useEffect } from 'react';

export const useCaptcha = () => {
  const [mathProblem, setMathProblem] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateMathProblem = () => {
    const operations = [
      { symbol: "+", compute: (a: number, b: number) => a + b },
      { symbol: "-", compute: (a: number, b: number) => a - b },
      { symbol: "x", compute: (a: number, b: number) => a * b },
    ];

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

    return {
      problem: `${num1} ${operation.symbol} ${num2}`,
      answer: operation.compute(num1, num2)
    };
  };

  const drawMathProblem = (problem: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
      ctx.stroke();
    }

    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(problem, canvas.width / 2, canvas.height / 1.5);
  };

  const generateNewProblem = () => {
    const { problem, answer } = generateMathProblem();
    setMathProblem(problem);
    setCorrectAnswer(answer);
    setTimeout(() => {
      drawMathProblem(problem);
    }, 0);
  };

  const verify = () => {
    const numInput = parseInt(userInput);
    if (numInput === correctAnswer) {
      setIsVerified(true);
      setUserInput("");
      generateNewProblem();
      return true;
    } else {
      setUserInput("");
      generateNewProblem();
      return false;
    }
  };

  useEffect(() => {
    generateNewProblem();
  }, []);

  return {
    isVerified,
    userInput,
    setUserInput,
    canvasRef,
    verify,
    generateNewProblem
  };
};