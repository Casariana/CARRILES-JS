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

// import ButtonSelector from "./ButtonSelector"; // Asegúrate de que la ruta sea correcta

// const Filtros = () => {
//   return (
//     <div className="flex mt-10">
//       <div>
//         <ButtonSelector title="Selecciona el día" dataKey="diaSem" />
//       </div>
//       <div>
//         <ButtonSelector title="Selecciona la piscina" dataKey="piscina" />
//       </div>
//       <div>
//         <ButtonSelector title="Selecciona la hora" dataKey="horarioss" />
//       </div>
//     </div>
//   );
// };

// export default Filtros;
