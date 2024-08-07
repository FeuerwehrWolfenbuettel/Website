"use client";

import React, { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from './InstagramFeed.module.scss';

// Define types for the Instagram feed data
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  permalink: string;
}

interface InstagramFeedData {
  data: InstagramPost[];
}

// Utility function to format the date
const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).toUpperCase();
}

// Fetch Instagram feed data
async function getInstagramFeed(): Promise<InstagramFeedData> {
  try {
    const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_KEY;  // Use the public environment variable
    console.log("Access Token:", accessToken);  // Log the token for debugging

    if (!accessToken) {
      throw new Error("Access token is not defined");
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${accessToken}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Instagram API-Anfrage fehlgeschlagen");
    }

    const feed = await response.json();
    
    // Print the content of data[] to the console
    console.log("Instagram feed data:", feed);

    return feed;
  } catch (error) {
    console.error("Fehler beim Abrufen des Instagram-Feeds:", error);
    return { data: [] };
  }
}

const InstagramFeed: React.FC = () => {
  const [images, setImages] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const feed = await getInstagramFeed();
      setImages(feed.data);
    };

    fetchFeed();
  }, []);

  return (
    <div className={styles.instagramFeed}>
      <div className={styles.instagramTitel}>
        <h1>
          Neues von unserem{" "}
          <span>
            <a href="https://www.instagram.com/ortsfeuerwehr_wolfenbuettel/">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </span>
        </h1>
      </div>
      <div className={styles.instagramPosts}>
        {images &&
          images.slice(0, 3).map((image: InstagramPost) => (
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
                    {formatDate(image.timestamp)}
                  </p>
                </div>
              </div>
              <div className={styles.instagramTileBody}>
                <a href={image.permalink} target="_blank" rel="noopener noreferrer">
                  <img 
                    className={styles.instagramTileImage}
                    src={image.media_url} 
                    alt={image.caption} 
                  />
                </a>
                <p className={styles.instagramTileCaption}>
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default InstagramFeed;
