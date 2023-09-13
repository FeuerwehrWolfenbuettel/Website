import abteilungen from "./../../../assets/Abteilungen/abteilungen.json"
import './card.css'


export default function About() {
  const abteilungen = getAboutUs().abteilungen;
  return (
    <main>
      <h1>Über unsere Abteilungen</h1>
        {abteilungen && abteilungen.map((abteilung:any) => (
            <Card aboutUs={abteilung} />
        ))
  }
    </main>
  )
}

function Card({aboutUs}: any) {

  return (

    <div className="card">
      <div className="info">
        <div className="headline">
          <h1> {aboutUs.title}</h1>
        </div>
      </div>
      <div className="picture">
        <img src={aboutUs.titlePicture} alt="Beschreibung des Bildes"/>
      </div>
  </div>
  )

}

function getAboutUs(): any {
  
  console.log(abteilungen);
  return abteilungen;
}