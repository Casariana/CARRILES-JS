
import Filtros from "./Filtros";
import PlantillaPiscina from "./PlantillaPiscina";
import Footer from "../Footer";
import Header from "../Header";

export default function Home() {
  return (
    <>
      <Header />
      <Filtros />      
      <PlantillaPiscina />
      <Footer />
    </>
  );
}
