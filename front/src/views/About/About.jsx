import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Acerca de Nosotros</h1>
      <p className={styles.paragraph}>Bienvenido a nuestro negocio donde ofrecemos una experiencia culinaria única y deliciosa. En nuestro restaurante, nos apasiona crear platos que despierten tus sentidos y te transporten a diferentes rincones del mundo a través de los sabores.</p>
      <p className={styles.paragraph}>Nuestro equipo de chefs expertos utiliza ingredientes frescos y de alta calidad para crear cada plato con amor y cuidado. Ya sea que estés buscando una cena romántica, una comida con amigos o simplemente quieras explorar nuevos sabores, estamos aquí para satisfacer tus necesidades gastronómicas.</p>
      <p className={styles.paragraph}>Para poder disfrutar de nuestra experiencia culinaria, te invitamos a registrarte en nuestro sitio web y reservar un turno para tu próxima visita. ¡Estamos emocionados de compartir nuestra pasión por la comida contigo!</p>
      <Link to="/register" className={styles.button}>Registrarse y Reservar un Turno</Link>
    </div>
  );
}

export default AboutPage;