import Back from "../svg/Back";
import styles from "./Career.module.css";
import stylesAbout from "../About.module.css";
import { Parallax } from "react-scroll-parallax";
import { useDispatch } from "react-redux";
import { setPhoto } from "../../../redux/userSlice";
import { motion } from "framer-motion";
import { useState } from "react";
import Information from "./Information/Information";
import Table from "./Table/Table";

const Career = () => {
  const dispatch = useDispatch();
  const [animationEnd, setAnimationEnd] = useState(false);

  const back = () => {
    dispatch(setPhoto({ key: "career", value: false }));
  };

  return (
    <>
      <div className={stylesAbout.back} onClick={back}>
        <Back />
      </div>

      <div className={stylesAbout.titleContainer}>
        <Parallax speed={10}>
          <div className={stylesAbout.title}>
            <h1
              onAnimationEndCapture={() => setAnimationEnd(true)}
              className={stylesAbout.text}
            >
              Ingeniería Informática
            </h1>
            {animationEnd && (
              <motion.p
                className={styles.universityParagraph}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 3.5 }}
              >
                Universidad Nacional De la Matanaza
              </motion.p>
            )}
          </div>
        </Parallax>
      </div>
      <Information />
      <Table/>
    </>
  );
};

export default Career;
