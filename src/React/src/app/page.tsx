import "./globals.scss";
import Head from "next/head";
import styles from "../app/page.module.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

export default async function Home() {
  const instaFeed = await getInstagramFeed();
  const newsFeed = await getNewsFeed();
  return (
    <main className="home-page">

      <NewsFeed feed={newsFeed} />

     {/*}<InstagramFeed feed={instaFeed} />*/}
     <InstagramCoulBeFeed />

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
      {articles && articles.map((article:any) => {
        <div className="news-preview">
        <NewsPreview article={article}/>
        </div>
      })}
      </div>
    </div>
  );
}

function NewsPreview({ article }: any) {
  console.log(article);
  
  return (
    <div className='content'>
    <div className='content-with-picture'>
                <img
                    src="/images/Gesamtbild-Feuerwehr-Wolfenbüttel.jpg"
                    className="news-Picture"
                    alt={article.summary}
                />
                <div className='text-content'>
                    <div className='header-stripe-with-text'>
                        <div className='header-stripe-container'>
                            <div className='header-stripe'></div>
                        </div>
                        <div className='header'>
                            <span>{article.title}</span>
                            
                        </div>
                    </div>
                    <div className='flowing-text'>
                        <p>{article.summary}</p>
                    </div>
                    <button className='continue-button'>Weiter lesen</button>
                </div>
              </div>
          </div>
  )
}

async function getNewsFeed(): Promise<any> {
  const url = "http://localhost:3002/article";
  const res = await fetch(url, { next: { revalidate: 60 } });
  const newsFeed = res.json();
  return newsFeed;
}

function InstagramCoulBeFeed() {
  return (
    <div>
        <h2>
          Folge uns auf{" "}
          <span className="instagram">
            <a href="https://www.instagram.com/ortsfeuerwehr_wolfenbuettel/">
              {" "}
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </span>
        </h2>
        <div>
          Hier könnte Ihr Instafeed sein
        </div>
        
        </div>
  )

}


function InstagramFeed({ feed }: any) {
  if (feed) {
    const images = feed.data;
    return (
      <div>
        <h2>
          Folge uns auf{" "}
          <span className="instagram">
            <a href="https://www.instagram.com/ortsfeuerwehr_wolfenbuettel/">
              {" "}
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </span>
        </h2>
        <div className="insta-posts">
          {images &&
            images.slice(0, 5).map((image: any) => (
              <div key={image.id} className="post">
                <a href={image.permalink}>
                  <img src={image.media_url} alt={image.caption} />
                  <span>{image.caption}</span>
                </a>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return <div>Hier soll ein Feed hin</div>;
  }
}

async function getInstagramFeed(): Promise<any> {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url, { next: { revalidate: 10 } });
  const feed = await data.json();

  return feed;
}

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
