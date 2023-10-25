import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function RefsExample() {
    const baseURL = 'https://jsonplaceholder.typicode.com'
    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        fetch(`${baseURL}/users`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(true)
                setUsers(data)
                setLoading(false)
            })
            .catch((error) => {
                alert(error.response.data.error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <button onClick={() => { navigate('/homePage') }}>
                Back to Home Page
            </button>
            <br />
            <h1>React Lists Example with conditional content</h1>
            <p>To see this example open <code>src/Lists.jsx</code>.</p>
            <p>Here, we are using the fetch function inside an useEffect hook that runs only the first time the component mounts
                to bring the data from an API.</p>
            <p>Also, we are conditionally rendering a "loading" text when the API call is executing.</p>
            <p>Finally, we are using the map function to loop through the data that was returned from the API and to display the different items in it.</p>
            <div className="card">
                {loading === true ? <p>Loading ...</p> : ''}
                {users.length > 0 && (
                    users.map((item) => (
                        <div key={item.id}>
                            <p><span>{item.name}</span></p>
                            <p>{item.email}</p>
                            <hr />
                        </div>
                    )))
                }
            </div>
        </>
    )
}

export default RefsExample
