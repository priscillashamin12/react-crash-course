import { useState } from "react"

export const Form = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Username: ${username}`)
    }
    return (
       <form onSubmit={handleSubmit}>
        <div>
<label>Username</label>
<input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
/>
        </div>
        <button type="submit">Submit</button>
        </form>
    )
}