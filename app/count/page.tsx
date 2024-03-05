"use client";

import { useState, useEffect } from 'react';

const Count = () => {
    const [targetNumber, setTargetNumber] = useState(0);
    const [increment, setIncrement] = useState(0);

    useEffect(() => {
        let intervalId;

        const increaseNumber = () => {
            intervalId = setInterval(() => {
                setTargetNumber(prevNumber => {
                    const nextNumber = prevNumber + 1;
                    if (nextNumber === increment) {
                        clearInterval(intervalId);
                        setIncrement(0);
                    }
                    return nextNumber;
                });
            }, 500);
        };

        if (increment > 0) {
            increaseNumber();
        }

        return () => clearInterval(intervalId);
    }, [increment]);

    const handleClick = () => {
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
