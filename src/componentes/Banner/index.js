import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha-foto.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.titulo}> Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Olá, meu nome é Ana Laura. Estou estudando desenvolvimento web e
          atualmente focada em aprender React. Gosto de criar interfaces
          modernas, interativas e responsivas. Estou animada para evoluir cada
          vez mais na programação e construir projetos incríveis.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto Ana Laura"
        ></img>
      </div>
    </div>
  );
}
