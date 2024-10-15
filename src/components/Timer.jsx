import { useState, useEffect } from 'react'

export default function Timer({ startTimer, onComplete }) {
    const [timeLeft, setTimeLeft] = useState(9000);

    useEffect(() => {
        let timerId;

        if (startTimer) {
            timerId = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft > 0) {
                        return prevTimeLeft - 1;
                    } else {
                        clearInterval(timerId);
                        onComplete();
                        return 0;
                    }
                });
            }, 1); 
        }

        return () => clearInterval(timerId); 
    }, [startTimer, onComplete]);

    const seconds = Math.floor(timeLeft / 1000); 
    const milliseconds = timeLeft % 1000; 
    const formattedTime = `${seconds}.${milliseconds.toString().padStart(3, '0')}`;

    return (
        <h1 className="text-5xl font-bold">
            {timeLeft > 0 ? formattedTime : "Tempo scaduto!"}
        </h1>
    );
}
