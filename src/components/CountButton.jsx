import { useState, useEffect } from "react"

const CountButton = (props) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
       setCount(count + props.increment)
    }

    useEffect(() =>{

    }, [])
    return (
        <div>
            <button onClick={handleClick}>+{props.increment}</button>
            <div>{count}</div>
        </div>

    )
}

export default CountButton