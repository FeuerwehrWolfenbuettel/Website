import AnimatedText from "@/components/Animatedtext/AnimatedText";
import abteilungen from "../../../public/assets/Abteilungen/abteilungen.json";
import "./card.scss";

export default function About() {
  const abteilungen = getAboutUs();
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section className="additional-content">
        <h1 id="title">Über unsere Abteilungen</h1>
        <div className="card-container">
          {abteilungen &&
            abteilungen.abteilungen.map((abteilung: any) => (
              <div key={abteilung.id}>
                <Card aboutUs={abteilung} />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

function Card({ aboutUs }: any) {
  return (
    <div className="card">
      <div className="info">
        <div className="headline">
          <h1> {aboutUs.title}</h1>
        </div>
      </div>
      <div className="picture">
        <img src={aboutUs.titlePicture} alt="Beschreibung des Bildes" />
      </div>
    </div>
  );
}

function getAboutUs(): any {
  return abteilungen;
}
