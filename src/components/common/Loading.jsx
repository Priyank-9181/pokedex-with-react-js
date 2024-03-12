import React from "react";
import styles from "../../styles/components/common/loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <img src="/image/loader.png" alt="loading" />
      </div>
    </div>
  );
}

export default Loading;
