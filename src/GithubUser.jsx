import { useEffect, useState } from "react"

export default function GithubUser({ username }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    async function fetchAPI(username) {
        try {
            if (!username)return;
            const response = await fetch(`https://api.github.com/users/${username}`)
            if(!response.ok) {
                throw new Error('User not found')
            }
            const json = await response.json()
            setData(json)
        }
        catch (error) {
            setData(error);
            console.error(error)
        }}

        useEffect(() => {
            setData(null)
            setError(null)
            fetchAPI(username)
        }, [username])
        if (error) {
            return <p>Error: {error.message}</p>}
        if (!data) {
            return <p>Loading...</p>
        }
        return (
            <div>
                <img src={data.avatar_url} width={100} alt="avatar" />
                <p>Name: {data.name}</p>
                <p>Login name: {data.login}</p>
            </div>)
    }