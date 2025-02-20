import styles from "./Footer.module.scss"; // Styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h1>
          New Style | Simple E-Commerce Website |{" "}
          <a href="https://github.com/parunchxi/React-Simple-Ecommerce-Website">
            Github
          </a>
        </h1>
      </div>
      <div className={styles.bg}></div>
    </footer>
  );
};

export default Footer;
