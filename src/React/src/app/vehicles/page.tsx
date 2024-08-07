import AnimatedText from "@/components/Animatedtext/AnimatedText";
import fahrzeuge from "../../../public/assets/Fahrzeuge/fahrzeuge.json";

import "./vehicle.scss";

export default function Vehicles() {
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section>
        <h1 id="title">Fuhrpark der Ortsfeuerwehr</h1>
        <ShowFahrzeuge />
      </section>
    </main>
  );
}

function ShowFahrzeuge() {
  let fahrzeuge = GetVehicles();
  return (
    <div className="vehicle-list">
      {fahrzeuge &&
        fahrzeuge.vehicles.map((fahrzeug: any) => (
          <div key={fahrzeug.id} className="vehicle-container">
            <RenderFahrzeug fahrzeug={fahrzeug}></RenderFahrzeug>
          </div>
        ))}
    </div>
  );
}

function RenderFahrzeug({ fahrzeug }: any) {
  return (
    <div className="vehicle">
      <a href={`/vehicles/${fahrzeug.id}`}>
        <img src={fahrzeug.titlePicture}></img>
        <div className="vehicle-text">
          <h3>
            <b>{fahrzeug.name}</b>
            <br />
            <p>{fahrzeug.type}</p>
          </h3>
          <p>{fahrzeug.description}</p>
        </div>
      </a>
    </div>
  );
}

function GetVehicles() {
  return fahrzeuge;
}
