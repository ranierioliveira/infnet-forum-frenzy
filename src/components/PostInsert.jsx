import { useState } from 'react';

export default function PostInsert({ user, onNewTopic }) {
  const baseUrl = "https://infnet-forum-frenzy-default-rtdb.asia-southeast1.firebasedatabase.app";

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [palavrasChave, setPalavrasChave] = useState("");

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const saveTopic = async () => {
    setLoading(true);
    try {
      const topico = {
        titulo,
        palavrasChave,
        nomeUsuario: user,
        descurtidas: "0",
        curtidas: "0",
        descricao,
        dataPublicacao: formattedDate
      };

      const response = await fetch(`${baseUrl}/topicos.json`);
      const data = await response.json();
      const existingKeys = data ? Object.keys(data) : [];
      const nextIndex = existingKeys.length + 1;
      const newTopicKey = `topico${nextIndex}`;

      await fetch(`${baseUrl}/topicos/${newTopicKey}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topico),
      });
      setMessage("Salvo com sucesso!");
      //Atualiza a requisição após adicionar um novo tópico
      if (onNewTopic) onNewTopic();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
      setTitulo("");
      setDescricao("");
      setPalavrasChave("")
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Novo Tópico</h1>
      <section>
        {message && <p>{message}</p>}
        {isLoading && <p>Carregando...</p>}
      </section>
      <section>
        <div>
          <label htmlFor="titulo">Título: </label>
          <input
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição: </label>
          <input
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="palavrasChave">Palavras-chave: </label>
          <input
            id="palavrasChave"
            value={palavrasChave}
            onChange={(e) => setPalavrasChave(e.target.value)}
          />
        </div>
        <button
          onClick={saveTopic}
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
};
