import { useState } from 'react';
import styles from './PostInsert.module.css';

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
    <div className={styles['container']}>
      <h1 className={styles['title']}>Novo Tópico</h1>
      <section>
        {message && <p>{message}</p>}
        {isLoading && <p>Carregando...</p>}
      </section>
      <section >
        <div>
          <input
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder='Insira o título'
            className={styles['input-topico']}
          />
        </div>
        <div>
          <input
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder='Insira a descrição'
            className={styles['input-topico']}
          />
        </div>
        <div>
          <input
            id="palavrasChave"
            value={palavrasChave}
            onChange={(e) => setPalavrasChave(e.target.value)}
            placeholder='Palavras-chave'
            className={styles['input-topico']}
          />
        </div>
        <button
          onClick={saveTopic}
          className={styles['botao']}
        >
          Salvar
        </button>
      </section>
    </div>
  );
}

