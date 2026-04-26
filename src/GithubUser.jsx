import { useEffect, useState } from "react"

export default function GithubUser({ username }) {
    const [data, setData] = useState(null)
    useEffect(() => {
        if (!username)return;
        fetch(`https://api.github.com/users/${username}`).then(response => {
            return response.json()
        }).then(json => {

            setData(json)
        }).catch(error => console.error(error))
    }, [username])

    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <img src={data.avatar_url} width={100} alt="avatar"/>
            <p>Name: {data.name}</p>
            <p>Login name: {data.login}</p>
        </div>)
}