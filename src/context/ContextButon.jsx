import React, { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [diaSem, setDiaSem] = useState([]);
  const [horarioss, setHorarioss] = useState([]);
  const [piscina, setPiscina] = useState([]);
  
  const [selectedDia, setSelectedDia] = useState("");
  const [selectedHora, setSelectedHora] = useState("");
  const [selectedPiscina, setSelectedPiscina] = useState("");

  // Lógica para obtener los datos
  const fetchData = async (url, setData, dataKey) => {
    const remoteUrl = url; // Reemplaza con la URL de tu backend
    const localUrl = "/public/data/db.json"; // Ruta al JSON local

    try {
      const remoteResponse = await fetch(localUrl);
      if (remoteResponse.ok) {
        const remoteData = await remoteResponse.json();
        setData(remoteData[dataKey]);
      } else {
        throw new Error('No se pudo obtener el JSON del backend');
      }
    } catch (error) {
      console.log("Error al obtener datos del backend, usando datos locales:", error);
      try {
        const localResponse = await fetch(remoteUrl);
        if (localResponse.ok) {
          const localData = await localResponse.json();
          setData(localData[dataKey]);
        } else {
          throw new Error('No se pudo obtener el JSON local');
        }
      } catch (error) {
        console.log("Error al obtener datos del JSON local:", error);
      }
    }
  };

  useEffect(() => {
    fetchData("http://xxxx", setDiaSem, "diaSem");
    fetchData("http://xxxx", setHorarioss, "hora_inicio");
    fetchData("http://xxxx", setPiscina, "piscinas");
  }, []);

  console.log({ diaSem, horarioss, piscina });
  return (
    <AppContext.Provider value={{
      diaSem, selectedDia, setSelectedDia,
      horarioss, selectedHora, setSelectedHora,
      piscina, selectedPiscina, setSelectedPiscina
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto
export const useAppContext = () => {
  return useContext(AppContext);
};
