import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import Header from "../Header";
import Filtros from "./Filtros";
import PlantillaPiscina from "./PlantillaPiscina";
import Footer from "../Footer";
import { AppProvider } from '../../context/ContextButon';


export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de datos
    const fetchData = async () => {
      setTimeout(() => {
        setData({ message: '¡Datos cargados!' });
        setLoading(false);
      }, 100); // Simula un retraso de 3 segundos
    };

    fetchData();
  }, []);

  return  (
    <>
     <AppProvider>
    <div >
      {loading ? (
        <Loading />
      ) : (
        <div className='root'>
      <Header />
      <Filtros />
      <PlantillaPiscina />
      <Footer />
      </div>
      )}
    </div>
    </AppProvider>
      
    </>
  );
}
