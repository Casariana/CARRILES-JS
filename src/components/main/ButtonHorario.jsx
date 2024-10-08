import { useState, useEffect } from "react";

export default function ButtonHorario() {
  const [selectedHora, setSelectedHora] = useState("");
  const [horarioss , setHorarioss] = useState([]);

  useEffect(() => {
    const obtenerHora = async () => {
      try {
        const response = await fetch("/public/data/db.json");
        const data = await response.json();
        setHorarioss(data.hora_inicio)
      } catch (error) {
        console.log("Error al obtener datos", error)
      }
    };
    obtenerHora();
  }, []);

  const handleChange = (event) => {
    setSelectedHora(event.target.value);
    console.log('Opción seleccionada:', event.target.value);
  };
  
  return (
    <>
    <h2 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-4xl select-none">Selecciona la hora</h2>
    <div className="flex flex-wrap gap-2 max-w-xl mt-5 justify-center">
      {horarioss.map((hora, index) => (
        <label
          className={`${
            selectedHora === hora.hora ? "outline outline-4 outline-teal-700" : ""
          } text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer focus:accent-slate-950 w-20 select-none`}
          key={index}
        >
          <input
            className="appearance-none "
            type="radio"
            value={hora.hora}
            checked={selectedHora === hora}
            onChange={handleChange}
          />
          {hora.hora}
        </label>
      ))}
      
    </div>
    </>
  );
}
