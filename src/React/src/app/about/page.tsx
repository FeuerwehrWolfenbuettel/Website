import './card.css'

export default function About() {
  return (
    <main>
      <h1>Über uns</h1>
      <Card/>
      <Card/>
      <Card/>
    </main>
  )
}

function Card() {

  return (

    <div className="card">
    <div className="info">
      <div className="headline">
        <h1>Einsatzabteilung</h1>
      </div>
    </div>
    <div className="picture">
      <img src="https://i.ibb.co/yXcM07d/garreth-paul-3-Qo-ABp-ZPGqs-unsplash.jpg" alt="Beschreibung des Bildes"/>
    </div>
  </div>
  )

}