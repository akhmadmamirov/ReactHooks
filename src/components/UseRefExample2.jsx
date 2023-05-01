import { useEffect, useState, useRef } from "react"

function UseRefExample2() {
    const renders = useRef(1)
    const prevName = useRef("")

    const [name, setName] = useState("")
    useEffect(() => {
        renders.current = renders.current + 1
        prevName.current = name
    },[name])

    return (
        <div>
            <h1>Renders: {renders.current}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
            <h2>Prev Name: {prevName.current}</h2>
        </div>
    )
}

export default UseRefExample2