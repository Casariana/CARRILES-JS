import { useState } from "react";
function ButtonDiaSem() {
  const [selectedDia, setSelectedDia] = useState("");
  const diaSem = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const handleChange = (event) => {
    setSelectedDia(event.target.value);
    console.log("Opción seleccionada:", event.target.value);
  };
  return (
    <>
    <h2>Selecciona el día</h2>
    <div className="flex flex-wrap gap-2 sm:max-w-md mt-5 justify-center">
      {diaSem.map((dia, index) => (
        
        <label
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-28"
          key={index}
        >
          <input
            className=" appearance-none"
            type="radio"
            value={dia}
            checked={selectedDia === dia}
            onChange={handleChange}
          />
          {dia}
        </label>
      ))}
    </div>
    </>
  );
}

export default ButtonDiaSem;
