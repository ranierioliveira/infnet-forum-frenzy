//Irá requisitar a lista de tópicos da REST API e exibir para o usuário
import { useState, useEffect } from 'react';
import PostList from './PostList';

export default function PostListPage(){

    const [topicos, setTopicos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState(null);

    const baseUrl = "https://infnet-forum-frenzy-default-rtdb.asia-southeast1.firebasedatabase.app";

    function convertData(data){
        const ids = Object.keys(data);
        let topicos = Object.values(data);
        return topicos.map((topico, index) => {
            return{
                id: ids[index], 
                ...topico,
            };
        })
    }

    useEffect(() => {
        fetch(`${baseUrl}/topicos.json`)
            .then(async (resp) => {
                const respTopicos = await resp.json();
                let convertedTopicos = convertData(respTopicos);
                setTopicos(convertedTopicos);
            })
            .catch((error) => setMessage(error.message))
            .finally((_) => setIsLoading(false));
    }, []);

    return(
       <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
        {isLoading && <p>Carregando...</p>}

        {message && <p>{message}</p>}

        {topicos && <PostList topicos={topicos}/>}
    </div>
   
    )
}