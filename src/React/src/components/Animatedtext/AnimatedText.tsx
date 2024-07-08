"use client";

import styles from './Animatedtext.module.scss';

const Animatedtext = () => {
    return (
        <div className={styles.animationContainer}>
            <div className={styles.textContainerLanding}>
                <div className="first">
                    <span>Für dich im</span>
                    <br />
                </div>
                <div className=" second">
                    <span>Für eure</span>
                    <br />
                </div>
                <div className="third">
                    <span>#jazur</span>
                    <br />
                </div>
                </div>

                <div className={styles.subTextLanding}>
                <div>
                    <span className="first">Einsatz</span>
                    <br />
                </div>
                <div>
                    <span className="second">Sicherheit</span>
                    <br />
                </div>
                <div>
                    <span className="third">Feuerwehr</span>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Animatedtext;
