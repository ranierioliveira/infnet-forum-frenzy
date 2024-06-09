export default function PostCard({ topico }) {
  return (
      <div style={styles.container}>
          <span>
              <h1 style={{ textDecoration: 'underline' }}>{topico.titulo}</h1>
              <p>
                  <span>Publicado: {topico.dataPublicacao}</span>
                  <span> Palavras-chave: {topico.palavrasChave}</span>
              </p>
              <p>{topico.descricao}</p>
              <p>Discussão aberta por: {topico.nomeUsuario} - likes: {topico.curtidas} | deslikes: {topico.descurtidas}</p>
          </span>
      </div>
  );
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
