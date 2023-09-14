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
      <AlarmTicker />

      <NewsFeed feed={newsFeed} />

      <InstagramFeed feed={instaFeed} />

      <FacebookFeed />
    </main>
  );
}

export function AlarmTicker() {
  return (
    <div>
      <h2> Unsere letzten Alarme</h2>
      Hier könnte Ihr Alarmticker sein
    </div>
  );
}

export function NewsFeed({ feed }: any) {
  return (
    <div>
      <h2> News </h2>
      Hier kommen News hin
    </div>
  );
}

async function getNewsFeed(): Promise<any> {
  const url = "localhost:3002/article";
  const res = await fetch(url, { next: { revalidate: 60 } });
  const newsFeed = res.json();
  return newsFeed;
}

export function InstagramFeed({ feed }: any) {
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
