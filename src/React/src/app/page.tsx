import "./page.scss";
import AnimatedText from '../components/Animatedtext/AnimatedText'
import ArticlePreView from "@/components/ArticlePreView/ArticlePreView";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";

export default function Home() {
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section className="additional-content">
        <ArticlePreView />
        <InstagramFeed />
      </section>
    </main>
  );
}
