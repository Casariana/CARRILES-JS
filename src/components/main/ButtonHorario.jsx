import { useState, useEffect } from "react";

export default function ButtonHorario() {
  const [selectedHora, setSelectedHora] = useState("");
  const [horarioss, setHorarioss] = useState([]);

  useEffect(() => {
    const obtenerHora = async () => {
      const remoteUrl = "http://xxxx"; // Reemplaza 'xxxx' con la URL de tu backend
      const localUrl = "/public/data/db.json"; // Ruta al JSON local

      try {
        // Intentar obtener datos del backend
        const remoteResponse = await fetch(remoteUrl);
        if (remoteResponse.ok) {
          const data = await remoteResponse.json();
          setHorarioss(data.hora_inicio);
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
            setHorarioss(data.hora_inicio);
          } else {
            throw new Error('No se pudo obtener el JSON local');
          }
        } catch (error) {
          console.log("Error al obtener datos del JSON local:", error);
        }
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
      <h2 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-4xl select-none">
        Selecciona la hora
      </h2>
      <div className="flex flex-wrap gap-2 max-w-xl mt-5 justify-center">
        {horarioss.map((hora, index) => (
          <label
            className={`${
              selectedHora === hora.hora ? "outline outline-4 outline-teal-700" : ""
            } text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer focus:accent-slate-950 w-20 select-none`}
            key={index}
          >
            <input
              className="appearance-none"
              type="radio"
              value={hora.hora}
              checked={selectedHora === hora.hora}
              onChange={handleChange}
            />
            {hora.hora}
          </label>
        ))}
      </div>
    </>
  );
}
