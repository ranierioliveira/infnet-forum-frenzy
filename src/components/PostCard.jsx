//Resumo de um tópico
import { format } from 'date-fns';

export default function PostCard(props){

    const {topico} = props;
    const dataFormatada = format(newDate(topico.dataPublicacao), 'dd/MM/yyyy');

    return(
        <div style = {styles.container}>
           <span>
            <h1>{topico.titulo}</h1>
            <p>Publicado: {dataFormatada} </p>
            <p> Palavras-chave: {topico.palavrasChave}</p>
           </span> 
        </div>
    )
}

const styles = {
    container: {
      display: "flex",
      padding: 5,
      margin: 10,
      backgroundColor: "#8ecae6",
      borderRadius: 2,
    },
  };