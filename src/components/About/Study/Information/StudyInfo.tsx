import styles from "./StudyInfo.module.css";

const StudyInfo = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.card}`}>
        <div className={styles.image}>
          <img src="/public/Logo/coder.png" alt="CoderHouse" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>CoderHouse</h3>
          <p>Desarrollo Web - Feb 2022</p>
          <p>Javascript - Jun 2022</p>
          <p>Diseño UX-UI - Ago 2022</p>
          <p>React - sept 2022</p>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={styles.image}>
          <img src="/public/Logo/henry.png" alt="Henry" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>SoyHenry</h3>
          <p>Full Stack Developer - Jun 2023</p>
          <p>Teaching Assistant - Jun 2023</p>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={styles.image}>
          <img
            className={styles.udemy}
            src="/public/Logo/udemy.png"
            alt="Udemy"
          />
          <img
            className={styles.freeCode}
            src="/public/Logo/freecode.svg"
            alt="Free Code"
          />
          <img
            className={styles.unlam}
            src="/public/Logo/unlam-universidad-nacional-de-la-matanza-logo-B665E562AA-seeklogo.com.png"
            alt="UNLaM"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>
            Udemy - FreeCodeCamp - UNLaM Extensión
          </h3>
          <p>Responsive Web Design - abr 2022</p>
          <p>Programación 1 - Introducción al Razonamiento Lógico - 2019</p>
          <p>Inglés Introductorio, I y II - 2019-2020 </p>
          <p>Reparación de PC - 2021</p>
        </div>
      </div>
    </section>
  );
};

export default StudyInfo;
