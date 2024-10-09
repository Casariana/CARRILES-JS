import HeadOrganismos from "./HeadOrganismos";
import Footer from "../Footer";
import Header from "../Header";
import BodyOrganismos from "./BodyOrganismos";

export default function Organismos() {
  
  return (
    <div className='root'>
      <Header />
      <HeadOrganismos />
      <BodyOrganismos />
      <Footer />
    </div>
  );
}
