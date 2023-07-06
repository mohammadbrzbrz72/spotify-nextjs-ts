import React from "react";
import { TfiSearch } from "react-icons/tfi";

const styles = {
  main: `
    w-full h-full
    flex flex-col justify-center items-center
  `,
  searchIcon: `
    text-gray-300
  `,
  text: `
    text-gray-500 font-semibold text-xl
    mt-10
  `,
};

export default function EmptyBox() {
  return (
    <div className={styles.main}>
      <TfiSearch className={styles.searchIcon} size={190} />
      <span className={styles.text}>Your results will appear here</span>
    </div>
  );
}
