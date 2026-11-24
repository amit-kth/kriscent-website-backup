"use client";

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { RefreshCw } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';

interface CaptchaDialogProps {
    isVerified: boolean;
    onVerify: (success: boolean) => void;
}

const CaptchaDialog = forwardRef(({ isVerified, onVerify }: CaptchaDialogProps, ref) => {
    const [mathProblem, setMathProblem] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [userInput, setUserInput] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        generateNewProblem();
    }, [isVerified]);

    const generateMathProblem = () => {
        const operations = [
            { symbol: '+', compute: (a: number, b: number) => a + b },
            { symbol: '-', compute: (a: number, b: number) => a - b },
            { symbol: 'x', compute: (a: number, b: number) => a * b }
        ];

        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operation = operations[Math.floor(Math.random() * operations.length)];

        const problem = `${num1} ${operation.symbol} ${num2}`;
        const answer = operation.compute(num1, num2);

        return { problem, answer };
    };

    const drawMathProblem = (problem: string) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
            ctx.stroke();
        }

        ctx.font = '12px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
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

    // Expose the verify function to the parent component
    useImperativeHandle(ref, () => ({
        verifyCaptcha: () => {
            const numInput = parseInt(userInput);
            if (numInput === correctAnswer) {
                onVerify(true); // Notify that captcha is verified
                setUserInput(''); // Clear input
                generateNewProblem(); // Generate a new problem
                return true; // Return true for successful verification
            } else {
                onVerify(false); // Notify that captcha is not verified
                setUserInput(''); // Clear input
                generateNewProblem(); // Generate a new problem
                return false; // Return false for failed verification
            }
        }
    }));

    return (
        <div className="captcha-container">
            <div className="flex flex-col space-y-2">
                {
                    isVerified ?
                        <div className="text-green-600 text-sm"></div>
                        :
                        <div>
                            <div className="relative w-full h-10 flex gap-2">
                                <canvas
                                    ref={canvasRef}
                                    width="80"
                                    height="30"
                                    className="w-full border rounded-md bg-white max-w-28"
                                />
                                <Input
                                    type="number"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="Enter your answer"
                                    className='w-full'
                                />
                                <div className="flex items-center gap-2 ml-auto">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={generateNewProblem}
                                    >
                                        <RefreshCw className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* <div className="flex justify-between items-center space-x-2 mt-2">
                                
                            </div> */}
                        </div>
                }
            </div>
        </div>
    );
});

CaptchaDialog.displayName = 'CaptchaDialog';
export default CaptchaDialog;