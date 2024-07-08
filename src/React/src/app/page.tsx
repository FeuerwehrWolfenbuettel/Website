import "./globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import InstagramFeed from "./components/instagram/instagram_feed";

config.autoAddCss = false;

export default async function Home() {
  //const instaFeed = await getInstagramFeed();
  //const newsFeed = await getNewsFeed();
  return (
    <main className="home-page">
      <NewsPreview />

      <InstagramFeed/>

      <FacebookFeed />
    </main>
  );
}

function NewsFeed({ feed }: any) {
  const articles = feed.articles;
  console.log(articles);

  return (
    <div>
      <h2> News </h2>
      <div>
        {articles &&
          articles.map((article: any) => {
            <div className="news-preview">
              <NewsPreview article={article} />
            </div>;
          })}
      </div>
    </div>
  );
}

function NewsPreview({ article }: any) {
  console.log(article);

  return (
    <div className="content">
      <div className="content-with-picture">
        <img
          src="/images/Gesamtbild-Feuerwehr-Wolfenbüttel.jpg"
          className="news-Picture"
          alt={"article.summary"}
        />
        <div className="text-content">
          <div className="header-stripe-with-text">
            <div className="header-stripe-container">
              <div className="header-stripe"></div>
            </div>
            <div className="header">
              <span>{"article.title"}</span>
            </div>
          </div>
          <div className="flowing-text">
            <p>{"article.summary"}</p>
          </div>
          <button className="continue-button">Weiter lesen</button>
        </div>
      </div>
    </div>
  );
}

async function getNewsFeed(): Promise<any> {
  const url = "http://localhost:3002/article";
  const res = await fetch(url, { next: { revalidate: 60 } });
  const newsFeed = res.json();
  return newsFeed;
}

/*function InstagramFeed({feed}: any) {
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
}*/

function FacebookFeed() {
  return (
    <div>
      <h2>
        Folge uns auf
        <span className="facebook">
          <a href="https://www.facebook.com/ortsfeuerwehrwolfenbuettel">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
        </span>
      </h2>
      <div>Hier ist ein Facebook Feed</div>
    </div>
  );
}
