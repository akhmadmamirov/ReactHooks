import { useRef } from "react"

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = 'Goodbye'
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    className="form-control mb-2"
                    ref={inputRef}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>My new Paragraph</p>
        </div>
    )
}

export default UseRefExample1 