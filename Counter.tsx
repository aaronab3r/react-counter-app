import { useState } from "react"

// Defining a functional component using React.FC (Function Component type)
const Counter: React.FC = () => {

    // useState to hook to manage the counter value, initializes it to 0 and ensures its a number
    const [count, setCount] = useState<number>(0);  

    // Function to increment the count
    const increment = () => setCount(prevCount => prevCount + 1);

    // Function to decrement the count
    const decrement = () => setCount(prevCount => prevCount - 1);

    // Reset to 0
    const reset = () => setCount(0);


    return (
        <div style = {{textAlign: "center"}}>

            <h1>Counter App</h1>
            <h2>{count}</h2>

            <div>
            <button onClick={increment} style={{margin: "5px"}}>Increment</button>
            <button onClick={decrement} style={{margin: "5px"}}>Decrement</button>
            <button onClick={reset} style={{margin: "5px"}}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;