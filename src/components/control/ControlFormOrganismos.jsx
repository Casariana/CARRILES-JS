import { useState } from "react";
import ModalOrganismos from "./ModalOrganismos";

export default function ControlFormOrganismos() {
  const [modal, setModal] = useState(false);

  const controlModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="flex items-center justify-center  flex-col">
        <div>
          <button 
          onClick={controlModal}
          className="text-white bg-lime-600 hover:bg-teal-500 font-medium rounded-lg text-sm px-3 py-2 text-center  m-10  h-12 select-none">
            Agregar nuevo organismo
          </button>
        </div>        
      </div>
        {modal && <ModalOrganismos onClose={controlModal} />}
    </>
  );
}
