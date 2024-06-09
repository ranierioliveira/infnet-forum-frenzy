//Resumo de um tópico

export default function PostCard(props){

    const {topico} = props;

    return(
        <div>
            <h1>{topico.titulo}</h1>
        </div>
    )
}