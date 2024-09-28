import ButtonDiaSem from "./ButtonDiaSem";
import ButtonPiscina from "./ButtonPiscina";
import ButtonHorario from "./ButtonHorario";

function Filtros() {
  return (
    <div className="flex mt-10">
      <div>
        <ButtonPiscina />
      </div>
      <div>
        <ButtonDiaSem />
      </div>
      <div>
        <ButtonHorario />
      </div>
    </div>
  );
}

export default Filtros;
