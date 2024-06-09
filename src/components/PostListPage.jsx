import { useState, useEffect } from 'react';
import PostList from './PostList';

export default function PostListPage({ action }) {
    const [topicos, setTopicos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);

    const baseUrl = "https://infnet-forum-frenzy-default-rtdb.asia-southeast1.firebasedatabase.app";

    function convertData(data) {
        const ids = Object.keys(data);
        let topicos = Object.values(data);
        return topicos.map((topico, index) => {
            return {
                id: ids[index],
                ...topico,
            };
        });
    }

    useEffect(() => {
        fetch(`${baseUrl}/topicos.json`)
            .then(async (resp) => {
                const respTopicos = await resp.json();
                let convertedTopicos = convertData(respTopicos);
                if (action === "limit") {
                    convertedTopicos = convertedTopicos.slice(0, 3); // Limitação aplicada aqui
                }
                setTopicos(convertedTopicos);
            })
            .catch((error) => setMessage(error.message))
            .finally(() => setIsLoading(false));
    }, [action]); // Adicionando 'action' como dependência para que a limitação funcione

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {isLoading && <p>Carregando...</p>}
            {message && <p>{message}</p>}
            {topicos && <PostList topicos={topicos} />}
        </div>
    );
}
