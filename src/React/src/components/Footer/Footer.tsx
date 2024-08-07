"use client";

import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.nameAndSocialMedia}>
        <div className={styles.textContainerFooter}>
          {/*<span>Schwerpunktfeuerwehr</span>
                    <br />
    <span className={styles.subTextFooter}>Wolfenbüttel</span>)*/}
          <img src="../../assets/Logo with Text.png" />
        </div>
        <div className={styles.socialMediaIcon}>
          <a
            href="https://www.instagram.com/ortsfeuerwehr_wolfenbuettel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="notLastImage"
              src="/icons/icons8-instagram.svg"
              height={40}
              width={40}
              alt="instagram"
            />
          </a>
          <a
            href="https://www.youtube.com/@schwerpunktfeuerwehrwolfen5008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="not-last-image"
              src="/icons/icons8-youtube-play.svg"
              height={40}
              width={40}
              alt="youtube"
            />
          </a>
          <a
            href="https://www.facebook.com/ortsfeuerwehrwolfenbuettel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/icons8-facebook.svg"
              width={40}
              height={40}
              alt="facebook"
            />
          </a>
        </div>
      </div>
      <div className={styles.emailAndPolicy}>
        <div className={styles.email}>
          <img src="/icons/icons8-email.svg" alt="email" />
          <span>info@Schwerpunktfeuerwehrwf.de</span>
        </div>
        <div className={styles.privacyPolicy}>
          <span className={styles.firstSpan}>Privacy policy</span>
          <span>Terms & Condition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
