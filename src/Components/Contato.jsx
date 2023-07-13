import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato}  animeLeft`}>
      {/* <Head title="Ranek | Contato" description="Entre em contato" /> */}
      <img src={foto} alt="" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>xxx@gmail.com</li>
          <li>Tel XXX</li>
          <li>Rua XXX</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
