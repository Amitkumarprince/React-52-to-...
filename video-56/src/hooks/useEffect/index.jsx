import { useEffect, useState } from "react";
import "./index.css"

export const ReactUseEffect = () => {
    const [date, setDate] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const updateDate = new Date();
            setDate(updateDate.toLocaleTimeString())
        }, 1000)
    }, []);

    return (
        <div className="container effect-container">
            <h1>Date : {date} </h1>
        </div>
    )
};


// export const ReactUseEffect = () => {
//     const [count, setCount] = useState(0);

//     // useEffect(() => { }, [])
//     useEffect(() => {
//         // console.log("Hello useEffect")
//         console.log("count value:", count)
//     }, [count])

//     // return (
//     //     <div>
//     //         <h1>Hello, useEffect!</h1>
//     //     </div>
//     // );


//     return (
//         <div className="container effect-container">
//             <h1>useEffect Hooks</h1>
//             <p>Count: {count} </p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//     )
// };