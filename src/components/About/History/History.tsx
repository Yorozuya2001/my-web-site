import styles from "./History.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { setPhoto } from "../../../redux/userSlice";
import { motion } from "framer-motion";

const History = () => {
  const dispatch = useDispatch();
  const photoState = useSelector((state: RootState) => state.photo);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const id: string | undefined = (event.target as HTMLDivElement)?.id;

    if (!id) return;

    if (id === "career")
      dispatch(setPhoto({ key: "career", value: !photoState?.career }));
    if (id === "study")
      dispatch(setPhoto({ key: "study", value: !photoState?.study }));
    if (id === "life")
      dispatch(setPhoto({ key: "career", value: !photoState?.life }));
  };

  return (
    <div className={styles.history}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`${styles.photo} ${styles.career}`}
        transition={{ duration: 2 }}
      >
        <div id="career" onClick={(event) => handleClick(event)}>
          Carrera Universitaria 🎓
        </div>
        <img src="/public/UNLaM.jpg" alt="UNLaM" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`${styles.photo} ${styles.study}`}
        transition={{ duration: 2 }}
      >
        <div id="study" onClick={(event) => handleClick(event)}>
          Estudios
          <br />
          Complementarios📚
        </div>
        <img src="/public/study.jpg" alt="estudios" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`${styles.photo} ${styles.life}`}
        transition={{ duration: 2 }}
      >
        <div id="life" onClick={(event) => handleClick(event)}>
          🐶🐕🐾
        </div>
        <img src="/public/UNLaM.jpg" alt="UNLaM" />
      </motion.div>
    </div>
  );
};

export default History;
