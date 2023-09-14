import Head from 'next/head'
import styles from '../app/page.module.css'
import './firestation.scss'

export default function FireStation() {
  return (
    <main>
      <h1 className="page-title">Feuerwache</h1>
      <section className="firestation" data-id="d6580d3" data-element_type="section">
        <div className="firestation-text">
						<p>Unsere Feuerwache wurde im Jahr 1988 an die Schwerpunktfeuerwehr übergeben. Davor waren wir neben dem Zeughaus ansässig. </p>
            <p>Die Feuerwehrwache der Schwerpunktfeuerwehr Wolfenbüttel, befindet sich in der Friedrich-Ebert-Straße 1 in Wolfenbüttel (Anfahrt über Sophienstraße). Neben der alten Leitstelle, Unterrichts- und Aufenthaltsräumen mit angrenzender Terrasse, sowie Atemschutzwerkstatt, Kleiderkammer und Büroräumen der Ortswehrführung und der Gerätewarte liegt die Fahrzeughalle mit angrenzenden Werkstätten. Die Fahrzeughallen bieten 10 Einstellboxen für Einsatzfahrzeuge, sowie eine extra Waschhalle und einen Werkstatt- und Lagerbereich.</p>
            <p>In der Feuerwache Wolfenbüttel arbeiten die beiden hauptamtlichen Gerätewarte der Stadt Wolfenbüttel und unterstützen die Schwerpunktfeuerwehr, da wir keine eigenen Gerätewarte/Atemschutzgerätewarte haben. Die sind in der Regel Montags-Donnerstags in der Zeit von 8-16 Uhr, sowie Freitags von 8-12 Uhr hier anzutreffen.</p>
            <p>Im Jahre 2019 wurde durch das Stadtkommando die Erstellung eines Brandschutzbedarfsplans für unsere Stadt beschlossen. Im Mai 2020 wurden den Ortsbrandmeistern die Ergebnisse und die daraus resultierenden Maßnahmen kundgetan. <br/></p>
            <p>Ab 2021 wird die Schwerpunktfeuerwehr nicht mehr initital das komplette Kernstadtgebiet abdecken. Der Bürger muss jedoch keine Bedenken haben, denn dann fahren die Ortsfeuerwehren Halchter und Linden in die Bereiche&nbsp; Rote Schanze und Teile der Juliusstadt bis einschließlich Kapellenweg, sowie Halchtersche Straße.&nbsp; <br/></p><br/>	
        </div>
			
		<div className="firestation-picture">
    
      <div className="info">
        <a href='https://goo.gl/maps/b9nCCxKYyVaHUaM16'>
          <div className="headline">
            <h1> Auf Maps anzeigen</h1>
          </div>
        </a>	
      </div>
      							
       <img decoding="async" width="840" height="840" src="https://www.feuerwehr-wolfenbuettel.de/wp-content/uploads/2020/08/Feuerwache.jpg"  alt="" loading="lazy"  sizes="(max-width: 840px) 100vw, 840px"/>															
      
    </div>
		</section>
    </main>
  )
}