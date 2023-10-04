import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <span className={styles.footerName}>COMPANY NAME</span>
                        <p className={styles.footerItem}>StyleStepHaven is a leading footwear company specializing in the design, production, and sale of stylish and comfortable shoes.</p>
                    </div>
                    <div className="col">
                        <span className={styles.footerName}>PRODUCTS</span>
                        <p className={styles.footerItem}></p>
                    </div>
                    <div className="col">
                        <span className={styles.footerName}>USEFUL LINKS</span>
                        <div className={styles.footerItem}>
                            <ul>
                                <a href="#">
                                    <li>Events</li>
                                </a>
                                <a href="#">
                                    <li>Team</li>
                                </a>
                                <a href="#">
                                    <li>Gallery</li>
                                </a>
                                <a href="#">
                                    <li>Something</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <span className={styles.footerName}>CONTACT</span>
                        <div className={styles.footerItem}>
                            <div className="contact">
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                    &nbsp; 123-456-789
                                </span>
                                <br />
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    &nbsp; info@market.com
                                </span>
                            </div>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon className={styles.socials} icon={faFacebook} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className={styles.socials} icon={faInstagram} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className={styles.socials} icon={faTelegram} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon className={styles.socials} icon={faYoutube} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
