import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from './InstagramFeed.module.scss';
import Image from 'next/image';

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
                  <Image 
                    className={styles.instagramTileHeaderPicture}
                    src="/assets/Logo Big Black BG.png" 
                    alt="Instagram Logo Ortsfeuerwehr Wolfenbüttel" 
                    width={75}
                    height={73}
                  />
                  <div className={styles.instagramTileHeaderTextContainer}>
                    <h1 className={styles.instagramTileHeaderName}>
                      Ortsfeuerwehr_Wolfenbüttel
                    </h1>
                    <h2 className={styles.instagramTileHeaderDate}>
                      04. OKT 2024
                    </h2>
                  </div>
                </div>
                <a href={image.permalink}>
                <img
                className={styles.instagramTilePicture} 
                src={image.media_url} 
                alt={image.caption}
                />
                </a>
                <div className={styles.instagramTileCaption}>
                  <p className={styles.instagramTileCaptionText}>{image.caption}</p>
                </div>
              </div>
              ))} 
        </div>
    </div>
  );
}

export default InstagramFeed;