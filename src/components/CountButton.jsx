import { useState } from "react"

const CountButton = (props) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
       setCount(count + props.increment)
    }
    return (
        <div>
            <button onClick={handleClick}>+{props.increment}</button>
            <div>{count}</div>
        </div>

    )
}

export default CountButton