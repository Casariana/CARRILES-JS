import { useState } from "react";

let seleccionado = "";
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
    setSelectedDia((seleccionado = event.target.value));
  };
  console.log(seleccionado);
  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-4xl select-none">
        Selecciona el día
      </h2>
      <div className="flex flex-wrap gap-2 sm:max-w-md mt-5 justify-center ">
        {diaSem.map((dia, index) => (
          <label
            className={` ${
              selectedDia === dia ? "outline outline-4 outline-teal-700" : ""
            } text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-28 select-none`}
            key={index}
          >
            <input
              className=" hidden "
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
