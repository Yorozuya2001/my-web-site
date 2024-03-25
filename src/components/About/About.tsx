import { Parallax } from "react-scroll-parallax";
import styles from "./About.module.css";
import Card from "./Card/Card";
import Paragraph from "./Paragraph/Paragraph";
import History from "./History/History";
import Career from "./Career/Career";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Study from "./Study/Study";

const About = () => {
  const photoState = useSelector((state: RootState) => state.photo);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          {photoState.career ? (
            <Career />
          ) : photoState.study ? (
            <Study />
          ) : (
            <>
              <div className={styles.titleContainer}>
                <Parallax speed={10}>
                  <div className={styles.title}>
                    <h1 className={styles.text}>¡Bienvenido a mi sitio web!</h1>
                  </div>
                </Parallax>
              </div>
              <Card />
              <Paragraph />
              <History />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
