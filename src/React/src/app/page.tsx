import "./page.scss";
import AnimatedText from '../components/Animatedtext/AnimatedText'

export default function Home() {
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section className="content">
        <h1>Willkommen auf unserer Landing Page</h1>
        <p>Scrollen Sie nach unten, um mehr zu erfahren.</p>
      </section>
      <section className="additional-content">
        <h2>Mehr über uns</h2>
        <p>Hier steht mehr Information über uns...</p>
      </section>
    </main>
  );
}
