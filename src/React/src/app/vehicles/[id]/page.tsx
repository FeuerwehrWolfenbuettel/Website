import { log } from "console";
import fahrzeuge from "../../../../public/assets/Fahrzeuge/fahrzeuge.json";

export default function Page({ params }: { params: { id: string } }) {
  let vehicle = GetVehicle(params.id);

  return (
    <main>
      <h1>{vehicle?.name}</h1>
      <div>{vehicle?.longDescription}</div>
    </main>
  );
}

function GetVehicle(id: any) {
  log(id);
  return fahrzeuge.vehicles.find((element) => element.id == id);
}
