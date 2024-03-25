import styles from "./Study.module.css";
import stylesAbout from "../About.module.css";
import { useDispatch } from "react-redux";
import { setPhoto } from "../../../redux/userSlice";
import Back from "../svg/Back";
import { Parallax } from "react-scroll-parallax";
import StudyInfo from "./Information/StudyInfo";

const Study = () => {
  const dispatch = useDispatch();

  const back = () => {
    dispatch(setPhoto({ key: "study", value: false }));
  };

  return (
    <>
      <div className={stylesAbout.back} onClick={back}>
        <Back />
      </div>
      <div className={stylesAbout.titleContainer}>
        <Parallax speed={10}>
          <div className={stylesAbout.title}>
            <h1 className={stylesAbout.text}>Estudios Complementarios</h1>
          </div>
        </Parallax>
      </div>
      <StudyInfo/>
    </>
  );
};

export default Study;
