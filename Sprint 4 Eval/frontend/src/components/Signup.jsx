import { useState } from "react"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [pass, setPass] = useState("")
    const [city, setCity] = useState("")
    const [age, setAge] = useState(0)
    const [married, setMarried] = useState(false)
    


    const handleSubmit = () => {
        const payload = {
            name: username,
            email: email,
            gender: gender,
            password: pass,
            age: age,
            city: city,
            is_married: married
        }
        // connecting FE with BE
        fetch("https://drab-train-cow.cyclic.app/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
            <h1>Registration Page</h1>
            <div style={{ border: "1px solid black", width: "50%", margin: "auto" }}>
                Username: <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br></br>
                Email: <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br></br>
                Gender: <input type="text" placeholder="What is your gender?" value={gender} onChange={(e) => setGender(e.target.value)} />
                <br></br>
                Password: <input type="password" placeholder="Enter Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                <br></br>
                City: <input type="text" placeholder="Where are you from?" value={city} onChange={(e) => setCity(e.target.value)} />
                <br></br>
                Age: <input type="number" placeholder="Enter your age.." value={age} onChange={(e) => setAge(e.target.value)} />
                <br></br>
                Married/Unmarried: <input type="number" placeholder="Marital Status" value={married} onChange={(e) => setMarried(e.target.value)} />
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export { Signup } 