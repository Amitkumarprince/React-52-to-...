import { useState } from "react"
import "./index.css"
import { useEffect } from "react";

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className="container">
            <div className="counter">
                <p>My Subscribers on Youtube</p>
                <div className="odometer" id="odometer">
                    {count}
                </div>
                <h3 className="title">
                    subscribers <br /> Realtime Counter
                </h3>
            </div>
        </div>
    )
}