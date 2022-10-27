import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/iubel/luxvip-frontend'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    //useEffect(Function to execute , When execute)
    useEffect(() => {
        fetch('https://api.github.com/users/iubel/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}