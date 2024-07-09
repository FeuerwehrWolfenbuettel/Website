"use client";

import styles from './ArticlePreView.module.scss';

const ArticlePreView = () => {
    return (
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <img 
                    src="/images/Gesamtbild-Feuerwehr-Wolfenbüttel.jpg" 
                    alt="Bild" 
                />
            </div>
            <div className={styles.rightSite}>
                <div className={styles.text}>
                    <div className={styles.heading}>
                        <div className={styles.headingStripe}></div>
                        <h1 className={styles.headingFont}>Überschrift</h1>
                    </div>
                    <div className={styles.flowingText}>
                        <p className={styles.flowingTextFont}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.continueButton}>Weiter lesen</button>
                </div>
            </div>
        </div>
    );
}

export default ArticlePreView;
