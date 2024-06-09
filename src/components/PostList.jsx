//Recebe a lista de tópicos para renderizar os itens com o component Post card

import PostCard from './PostCard';

export default function PostsList(props){
    const { topicos } = props;

    return (
        <div>
            {topicos.map((topico) => (
                <PostCard
                 key={topico.id}
                 topico={topico}   
                />
            ))}
        </div>
    );
}
