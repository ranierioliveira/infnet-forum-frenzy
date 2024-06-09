import {useState} from 'react';

export default function PostInsert({ user }){
  const baseUrl = "https://infnet-forum-frenzy-default-rtdb.asia-southeast1.firebasedatabase.app";

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);


  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.title} >Novo Tópico</h1>
      <section>
        {message && <p>{message}</p>}
        {isLoading && <p>Carregando...</p>}
      </section>
      <section>
        <div>
          <label htmlFor="title">Título: </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição: </label>
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="keywords">Palavras-chave: </label>
          <input
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <button
            onClick={() => {
                setLoading(true);
                const topico = {
                    title, 
                    keywords,
                    userName: user,
                    dislikes: 0,
                    likes: 0,
                    description,
                    publicationDate: new Date()
                };
                fetch(`${baseUrl}/topicos.json`, {
                    method: 'post',
                    header: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(topico),
                  }).then(_ => setMessage("Salvo com sucesso!"))
                  .catch(error => setMessage(error.message))
                  .finally(setLoading(false));
            }}  
            style={styles.button}
        >
            Salvar
        </button>
      </section>
    </div>
  );

}

const styles = {
    container: {
        border: "1px solid black",
        maxWidth: "800px",
        margin: "auto",
        padding: "8px",
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.2rem"
    },
    button: {
        backgroundColor: "blue",
        color: "white",
        padding: "8px",
        borderRadius: "4px",
        border: "none"
    }

}