// import ButtonDiaSem from "./ButtonDiaSem";
// import ButtonPiscina from "./ButtonPiscina";
// import ButtonHorario from "./ButtonHorario";

// function Filtros() {
//   return (
//     <div className="flex mt-10">
//       <div>
//         <ButtonPiscina />
//       </div>
//       <div>
//         <ButtonDiaSem />
//       </div>
//       <div>
//         <ButtonHorario />
//       </div>
//     </div>
//   );
// }

// export default Filtros;

import ButtonDiaSem from "./ButtonDiaSem";
import ButtonPiscina from "./ButtonPiscina";
import ButtonHorario from "./ButtonHorario";

function Filtros({ diaSem, horarioss, piscina }) {
  return (
    <div className="flex mt-10">
      <div>
        <ButtonPiscina piscina={piscina} />
      </div>
      <div>
        <ButtonDiaSem diaSem={diaSem} />
      </div>
      <div>
        <ButtonHorario horarioss={horarioss} />
      </div>
    </div>
  );
}

export default Filtros;
