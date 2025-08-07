import styles from "./SobreMim.module.css";
import PostModeo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha-foto.jpg";

export default function SobreMim() {
  return (
    <PostModeo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá eu sou a Ana!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto Ana Laura"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        A voluptatum enim eos porro earum et quas blanditiis id quisquam
        impedit. Eos ratione praesentium sit dolor accusamus qui nihil laborum.
      </p>

      <p className={styles.paragrafo}>
        Eos dolorem eaque qui ipsum omnis sit molestiae perspiciatis aut rerum
        delectus non galisum accusantium. Non voluptatem dolores quo officiis
        rerum id optio magnam et ipsam odit est iste eveniet. Vel assumenda
        dolorem est reiciendis doloribus nam galisum dolor hic harum esse ad
        optio saepe.
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet. Et iusto quia ad consequuntur sint aut
        voluptatem animi ab molestiae vitae et consequatur voluptatem qui velit
        velit
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet. Ut labore molestiae est velit ratione et
        voluptate minima ut necessitatibus doloribus et quasi galisum. Sit iusto
        dolores ut odit voluptas sit laboriosam assumenda qui enim voluptatem ut
        quis recusandae.
      </p>
    </PostModeo>
  );
}
