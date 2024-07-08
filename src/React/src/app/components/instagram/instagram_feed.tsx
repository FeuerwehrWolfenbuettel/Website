import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./instagram_feed.scss";

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
      <div className="instagram_feed">
    	  <div className="instagram_titel">
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
        <div className="instagram_posts">
          {images &&
            images.slice(0, 3).map((image: any) => (
          <div key={image.id} className="instagram_tile">
            <div className="instagram_tile_header">
              <img className="instagram_tile_header_picture"
                  src="/assets/Logo Big Black BG.png" 
                  alt="Instagram Logo Ortsfeuerwehr Wolfenbüttel" 
                />
              <div className="instagram_tile_header_text_container">
                <p className="instagram_tile_header_name">
                  Ortsfeuerwehr_Wolfenbüttel
                </p>
                <p className="instagram_tile_header_date">
                  04. OKT 2024
                </p>
              </div>
            </div>
            <a href={image.permalink}>
              <img className="instagram_tile_picture" 
                  src={image.media_url}
                  alt={image.caption} 
                />
            </a>
            <div className="instagram_tile_caption">
              <p className="instagram_tile_caption_text">{image.caption}</p>
            </div>
          </div>
            ))}  
        </div>
      </div>
  );
}

export default InstagramFeed;
