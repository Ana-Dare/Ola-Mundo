import "./PaginaPost.css";
import styles from "./PaginaPost.module.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import Posts from "componentes/Post";

export default function PaginaPost() {
  const parametros = useParams();

  const post = posts.find((posts) => {
    return posts.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);
  console.log(postRecomendados);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar
              </h2>
              <ul className={styles.postRecomendados}>
                {postRecomendados.map((post) => (
                  <li key={post.id}>
                    <Posts post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
}
