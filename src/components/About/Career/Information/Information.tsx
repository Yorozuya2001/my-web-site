import { Parallax } from "react-scroll-parallax";
import styles from "./Information.module.css";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <section className={styles.section}>
      <Parallax
        translateX={["-100%", "100%"]}
        scale={[0.75, 1]}
        easing="easeInQuad"
        className={styles.parallax}
      >
        <div className={styles.emoji}>👨‍💻</div>
        <div className={styles.emoji}>💾</div>
        <div className={styles.emoji}>📱</div>
        <div className={styles.emoji}>🖥️</div>
        <div className={styles.emoji}>🧠</div>
        <div className={styles.emoji}>🛠️</div>
        <img
          src="/public/Logo/unlam-universidad-nacional-de-la-matanza-logo-B665E562AA-seeklogo.com.png"
          alt="UNLaM"
        />
        <div className={styles.emoji}>💻</div>
        <div className={styles.emoji}>📡</div>
        <div className={styles.emoji}>🔌</div>
        <div className={styles.emoji}>🔋</div>
        <div className={styles.emoji}>🔬</div>
        <div className={styles.emoji}>🤖</div>
        <div className={styles.emoji}>🔗</div>
        <div className={styles.emoji}>💡</div>
        <div className={styles.emoji}>📊</div>
        <div className={styles.emoji}>🔧</div>
        <div className={styles.emoji}>💼</div>
        <div className={styles.emoji}>💡</div>
        <div className={styles.emoji}>📁</div>
      </Parallax>
      <div className={styles.information}>
        <Link
          to={
            "https://ingenieria.unlam.edu.ar/index.php?seccion=3&idArticulo=10"
          }
          target="_blank"
        >
          Información de la carrera
        </Link>
        <p>Cursada: Plan 2009 (2020-2022) - Plan 2023 (2023-Actualidad)</p>
        <p>Cantidad de Materias Arpobadas: 19</p>
      </div>
    </section>
  );
};

export default Information;
