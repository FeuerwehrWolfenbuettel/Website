import { log } from "console";
import fahrzeuge from "../../../../public/assets/Fahrzeuge/fahrzeuge.json";
import AnimatedText from "@/components/Animatedtext/AnimatedText";

export default function Page({ params }: { params: { id: string } }) {
  let vehicle = GetVehicle(params.id);
  log(vehicle);
  return (
    <main className="fullscreen-container">
      <div className="background-image">
        <AnimatedText />
      </div>
      <section className="additional-content">
        <h1>{vehicle!.name}</h1>
        <p>{vehicle!.longDescription}</p>
      </section>
    </main>
  );
}

function GetVehicle(id: any) {
  log(id);
  return fahrzeuge.vehicles.find((element) => element.id == id);
}
