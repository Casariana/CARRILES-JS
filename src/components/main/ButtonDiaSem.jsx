import { useEffect, useState } from "react";

export default function ButtonDiaSem() {
  const [selectedDia, setSelectedDia] = useState("");
  const [diaSem, setDiaSem] = useState([]);

  useEffect(() => {
    const obtenerDia = async () => {
      const remoteUrl = "http://xxxx"; // Reemplaza 'xxxx' con la URL de tu backend
      const localUrl = "/public/data/db.json"; // Ruta al JSON local

      try {
        // Intentar obtener datos del backend
        const remoteResponse = await fetch(remoteUrl);
        if (remoteResponse.ok) {
          const remoteData = await remoteResponse.json();
          setDiaSem(remoteData.diaSem);
        } else {
          throw new Error('No se pudo obtener el JSON del backend');
        }
      } catch (error) {
        console.log("Error al obtener datos del backend, usando datos locales:", error);
        
        // Si falla, intentar obtener los datos del JSON local
        try {
          const localResponse = await fetch(localUrl);
          if (localResponse.ok) {
            const localData = await localResponse.json();
            setDiaSem(localData.diaSem);
          } else {
            throw new Error('No se pudo obtener el JSON local');
          }
        } catch (error) {
          console.log("Error al obtener datos del JSON local:", error);
        }
      }
    };

    obtenerDia();
  }, []);

  const handleChange = (event) => {
    setSelectedDia(event.target.value);
    console.log('Opción seleccionada:', event.target.value);
  };

  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-4xl select-none">
        Selecciona el día
      </h2>
      <div className="flex flex-wrap gap-2 sm:max-w-md mt-5 justify-center">
        {diaSem.map((dia, index) => (
          <label
            className={`${
              selectedDia === dia.dia ? "outline outline-4 outline-teal-700" : ""
            } text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-28 select-none`}
            key={index}
          >
            <input
              className="hidden"
              type="radio"
              value={dia.dia}
              checked={selectedDia === dia.dia}
              onChange={handleChange}
            />
            {dia.dia}
          </label>
        ))}
      </div>
    </>
  );
}
