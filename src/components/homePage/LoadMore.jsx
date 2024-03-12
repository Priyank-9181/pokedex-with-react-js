import React from "react";
import styles from "../../styles/components/homePage/loadMore.module.css";

function LoadMore({ setlimit }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setlimit((limit) => {
            return limit + 20;
          });
        }}
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMore;
