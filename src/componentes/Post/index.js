import styles from "./Post.module.css";

export default function Posts({ post }) {
  console.log(post);

  return (
    <div className={styles.posts}>
      <img
        className={styles.capa}
        src={`/posts/${post.id}/capa.png`}
        alt="Imagem de capa do post"
      />

      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
  );
}
