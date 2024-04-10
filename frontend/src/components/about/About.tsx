import { motion } from "framer-motion";
import styles from "./About.module.css";
import { useEffect } from "react";

// Определение типа для пропсов компонента
type AboutProps = {};

const About: React.FC<AboutProps> = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка страницы вверх при монтировании компонента
    }, []); // Пустой массив зависимостей, чтобы код вызывался только один раз
    return (
        <div className={styles.about}>
            <motion.h1
                className={styles.welcome}
                initial={{
                    x: -1000,
                    opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                Welcome to StyleStepHaven
            </motion.h1>

            <div className={styles.about_us}>
                <motion.h2 className={styles.history}>
                    Our history <img src="history-book.png" className={styles.historyBookIcon} alt="History" />
                </motion.h2>

                <p className={styles.text}>StyleStepHaven began its history on September 30th. 2023 We are proud that our goal has remained the same since the beginning: to provide our customers with outstanding footwear solutions that combine style, comfort and quality.</p>

                <div>
                    <h2>
                        <strong className={styles.mission}>
                            Our Mission <img src="mission.png" alt="Misson" />
                        </strong>
                    </h2>
                    <p className={styles.text}>We strive to be more than just a shoe store, but a partner in your lifestyle. Our mission is to support you every step of the way, offering unique shoe collections that follow the latest trends, without forgetting comfort and durability.</p>
                </div>

                <div>
                    <h2>
                        <strong className={styles.team}>
                            Our Team <img src="team.png" className={styles.teamIcon} alt="Team" />
                        </strong>
                    </h2>
                    <p className={styles.text}>StyleStepHaven is not just a team, it's a family. We provide not only high quality products, but also a personalized service experience. Our shoe specialists will do everything they can to help you find the perfect pair.</p>
                </div>

                <div>
                    <h2>
                        <strong className={styles.why_us}>
                            Why Us? <img src="why-us.png" className={styles.whyUsIcon} alt="Why-us" />
                        </strong>
                    </h2>
                    <ul>
                        <li>Trend Fashion: We carefully select each model to match the latest trends.</li>
                        <li>Quality and Comfort: All our products are made from high quality materials with an emphasis on comfort.</li>
                        <li>Superior Service: Our goal is to make your shopping experience a pleasant and unrivaled experience.</li>
                    </ul>
                </div>

                <div>
                    <h2>
                        <strong className={styles.contact_us}>
                            Contact Us <img src="contact-us.png" className={styles.contactUsIcon} alt="Contact-us" />
                        </strong>
                    </h2>
                    <p className={styles.text}>We are proud that we are creating not just a store, but a community of style lovers. Join StyleStepHaven and share your impressions with us on social networks: [links to social networks].</p>
                </div>

                <p>Thank you for choosing StyleStepHaven. We look forward to making sure you step with confidence and style!</p>
            </div>
        </div>
    );
};

export default About;
