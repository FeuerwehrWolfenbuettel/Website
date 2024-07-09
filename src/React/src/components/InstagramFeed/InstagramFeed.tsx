import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from './InstagramFeed.module.scss';

async function getInstagramFeed(): Promise<any> {
  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
    const data = await fetch(url, { next: { revalidate: 3600 } });

    if (!data.ok) {
      throw new Error("Instagram API-Anfrage fehlgeschlagen");
    }

    const feed = await data.json();
    
    return feed;
  } catch (error) {
    console.error("Fehler beim Abrufen des Instagram-Feeds:", error);
    return { data: [] };
  }
}

async function InstagramFeed() {
  const feed = await getInstagramFeed();
  const images = feed.data;
  return (
    <div className={styles.instagramFeed}>
        <div className={styles.instagramTitel}>
          <h1>
            Neues von unserem{" "}
            <span>
              <a href="https://www.instagram.com/ortsfeuerwehr_wolfenbuettel/">
                {" "}
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </span>
          </h1>
        </div>
        <div className={styles.instagramPosts}>
          {images &&
              images.slice(0, 3).map((image: any) => (
              <div key={image.id} className={styles.instagramTile}>
                <div className={styles.instagramTileHeader}>
                  <img 
                    className={styles.instagramTileHeaderPicture}
                    src="/assets/Logo Big Black BG.png" 
                    alt="Instagram Logo Ortsfeuerwehr Wolfenbüttel" 
                  />
                  <div className={styles.instagramTileHeaderTextContainer}>
                    <p className={styles.instagramTileHeaderName}>
                      Ortsfeuerwehr_Wolfenbüttel
                    </p>
                    <p className={styles.instagramTileHeaderDate}>
                      04. OKT 2024
                    </p>
                  </div>
                </div>
              </div>
              ))} 
        </div>
    </div>
  );
}

export default InstagramFeed;