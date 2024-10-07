import { useEffect, useState } from "react";
function ButtonPiscina() {
  const [selectedPiscina, setSelectedPiscina] = useState("");
  const [piscina, setPiscina] = useState([]);

  useEffect(() => {
    const obtenerPiscina = async () => {
      try {
        const response = await fetch("/public/data/db.json");
        const data = await response.json();
        setPiscina(data.piscinas);
      } catch (error) {
        console.log("Error al obtener datos", error);
      }
    };
    obtenerPiscina();
  }, []);

  const handleChange = (event) => {
    setSelectedPiscina(event.target.value);
    console.log("Opción seleccionada:", event.target.value);
  };

  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-4xl select-none">
        Selecciona la piscina
      </h2>
      <div className="flex flex-wrap gap-2 max-w-xl mt-5 justify-center">
        {piscina.map((piscina, index) => (
          <label
            className={`${
              selectedPiscina === piscina.piscina
                ? "outline outline-4 outline-teal-700"
                : ""
            } text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-32 select-none`}
            key={index}
          >
            <input
              className=" appearance-none"
              type="radio"
              value={piscina.piscina}
              checked={selectedPiscina === piscina}
              onChange={handleChange}
            />
            {piscina.piscina}
          </label>
        ))}
      </div>
    </>
  );
}

export default ButtonPiscina;
