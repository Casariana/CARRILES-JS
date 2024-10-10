// import React, { useState, useEffect } from 'react';
// import Loading from '../../components/Loading';
// import Header from "../Header";
// import Filtros from "./Filtros";
// import PlantillaPiscina from "./PlantillaPiscina";
// import Footer from "../Footer";


// export default function Home() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simular una carga de datos
//     const fetchData = async () => {
//       setTimeout(() => {
//         setData({ message: '¡Datos cargados!' });
//         setLoading(false);
//       }, 3000); // Simula un retraso de 3 segundos
//     };

//     fetchData();
//   }, []);

//   return  (
//     <>
//     <div >
//       {loading ? (
//         <Loading />
//       ) : (
//         <div className='root'>
//       <Header />
//       <Filtros />
//       <PlantillaPiscina />
//       <Footer />
//       </div>
//       )}
//     </div>
    
      
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import Header from "../Header";
import Filtros from "./Filtros";
import PlantillaPiscina from "./PlantillaPiscina";
import Footer from "../Footer";

export default function Home() {
  const [diaSem, setDiaSem] = useState([]);
  const [horarioss, setHorarioss] = useState([]);
  const [piscina, setPiscina] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      const remoteUrl = "http://xxxx"; // Reemplaza 'xxxx' con la URL de tu backend
      const localUrl = "/public/data/db.json"; // Ruta al JSON local

      try {
        const remoteResponse = await fetch(remoteUrl);
        const data = remoteResponse.ok ? await remoteResponse.json() : await fetch(localUrl).then(res => res.json());

        setDiaSem(data.diaSem);
        setHorarioss(data.hora_inicio);
        setPiscina(data.piscinas);
      } catch (error) {
        console.log("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className='root'>
            <Header />
            <Filtros diaSem={diaSem} horarioss={horarioss} piscina={piscina} />
            <PlantillaPiscina />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}
