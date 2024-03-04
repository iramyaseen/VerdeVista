import { useState } from "react";
import styles from "./saveimgbox.module.css";

const SaveImgBox = () => {
  const [animationText, setAnimationText] = useState("Before");

  return (
    <div
      className={styles.img_animate_box}
      onMouseEnter={() => setAnimationText("After")}
      onMouseLeave={() => setAnimationText("Before")}
    >
      <img
        src="./images/savejobs/savejobbefore.png"
        className={styles.animate_box_img1}
        alt="before"
      />
      <img
        src="./images/savejobs/savejobafter.png"
        className={styles.animate_box_img2}
        alt="after"
      />
      <span className={styles.animationText_box}>{animationText}</span>
    </div>
  );
};

export default SaveImgBox;
