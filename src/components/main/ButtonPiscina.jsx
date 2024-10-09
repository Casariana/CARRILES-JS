import { useEffect, useState } from "react";

export default function ButtonPiscina() {
  const [selectedPiscina, setSelectedPiscina] = useState("");
  const [piscina, setPiscina] = useState([]);

  useEffect(() => {
    const obtenerPiscina = async () => {
      const remoteUrl = "http://xxxx"; // Reemplaza 'xxxx' con la URL de tu backend
      const localUrl = "/public/data/db.json"; // Ruta al JSON local

      try {
        // Intentar obtener datos del backend
        const remoteResponse = await fetch(remoteUrl);
        if (remoteResponse.ok) {
          const data = await remoteResponse.json();
          setPiscina(data.piscinas);
        } else {
          throw new Error('No se pudo obtener el JSON del backend');
        }
      } catch (error) {
        console.log("Error al obtener datos del backend, usando datos locales:", error);
        
        // Si falla, intentar obtener los datos del JSON local
        try {
          const localResponse = await fetch(localUrl);
          if (localResponse.ok) {
            const data = await localResponse.json();
            setPiscina(data.piscinas);
          } else {
            throw new Error('No se pudo obtener el JSON local');
          }
        } catch (error) {
          console.log("Error al obtener datos del JSON local:", error);
        }
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
              className="appearance-none"
              type="radio"
              value={piscina.piscina}
              checked={selectedPiscina === piscina.piscina}
              onChange={handleChange}
            />
            {piscina.piscina}
          </label>
        ))}
      </div>
    </>
  );
}
