import { useState } from "react";

function Counter() {



    let [count, setCount] = useState(0);

    let increase1 = () => {
        setCount(count + 1);
    }
    // console.log(count);

    let increase2 = () => {
        setCount(count + 2);

    }
    let reset = () => {
        setCount(0);

    }



    let decrease1 = () => {
        let updatecount = count;
        if (updatecount > 0) {
            setCount(updatecount - 1)
        }
    }

    let decrease2 = () => {
        let updatecount = count;
        if (updatecount > 0) {
            setCount(updatecount - 2)
        }
    }
    return (
        <>

            <div className="counter">
                <div className="text">
                    <h2 >
                        {count}
                    </h2>
                </div>
                <button onClick={increase1} className="b1">+1</button>
                <button onClick={increase2} className="b2">+2</button>
                <button onClick={reset} className="b3">Reset</button>
                <button onClick={decrease1} className="b4">-1</button>
                <button onClick={decrease2} className="b5">-2</button>
            </div>
        </>
    );
}

export default Counter;