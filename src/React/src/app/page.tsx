import "./page.scss";
import AnimatedText from '../components/Animatedtext/AnimatedText'
import ArticlePreView from "@/components/ArticlePreView/ArticlePreView";

export default function Home() {
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section className="additional-content">
        <ArticlePreView />
      </section>
    </main>
  );
}
