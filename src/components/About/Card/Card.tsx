import { Parallax } from "react-scroll-parallax";
import styles from "./Card.module.css";


const Card = () => {
  return (
    <Parallax
      className={styles.parallaxContainer}
      translateX={["0px", "300px"]}
      speed={20}
      easing="easeInQuad"
    >
      <div className={styles.cardContainer}>
        <div className={styles.info}>
          <h2 className={styles.title}>AXEL ARIEL VALIENTE</h2>
          <div className={styles.infoContainerOne}>
            <div className={styles.colOne}>
              <p>Nacionalidad: Argentina</p>
              <p>Ciudad: Buenos Aires</p>
              <p>Edad: 23 Años</p>
            </div>
            <div className={styles.colTwo}>
              <p>Estudios: Ingeniería Informática</p>
              <p>Universiad: UNLaM</p>
              <p>Status: Activo (2do Año)</p>
            </div>
          </div>
          <div className={styles.infoContainerTwo}>
            <p>Estudiante de Ingeniería en Informática</p>
            <p>Desarrollador Full Stack</p>
            <p>Amante de la programación</p>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/public/my-face.jpg" alt="Mi rostro" />
        </div>
      </div>
    </Parallax>
  );
};

export default Card;
