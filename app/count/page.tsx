"use client";

import { useState, useEffect } from 'react';

const Count = () => {
    const [targetNumber, setTargetNumber] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [intervalTime, setIntervalTime] = useState(500);
    const [increment, setIncrement] = useState(0);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    useEffect(() => {
        if (increment > 0) {
            const timeToTarget = increment * 500 / 5;
            const id = setInterval(() => {
                setTargetNumber((prevNumber) => {
                    if (prevNumber + 1 === increment) {
                        clearInterval(id);
                        setIncrement(0);
                    }
                    return prevNumber + 1;
                });
            }, 500);
            setIntervalId(id);
            setIntervalTime(timeToTarget > 0 ? timeToTarget : 500);
        }
    }, [increment]);

    const handleClick = async () => {
        if (increment === 0) {
            setIncrement(targetNumber + 5);
        } else {
            setIncrement((prev) => prev + 5);
        }
    };

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className={`text-center`}>
                <p className={`flex justify-center mb-3 text-2xl font-semibold`}>{targetNumber}</p>
                <button className={`border border-gray-500 px-4 py-2 rounded-lg`} onClick={handleClick}>+5</button>
            </div>
        </div>
    );
};

export default Count;
