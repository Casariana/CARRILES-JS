import { useState } from "react";
import ControlOrganismo from "./ControlOrganismo";
import ControlCarril from "./ControlCarril";

export default function BtnControl() {
  const [component, setComponent] = useState(null);
  return (
    <>
    <div >
      <button
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center  mt-10 mx-2 w-40 h-16 select-none"
        onClick={() => setComponent("controlOrganismo")}
      >
        CONTROL ORGANISMOS
      </button>
      <button
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 w-40 h-16 select-none"
        onClick={() => setComponent("controlCarril")}
      >
        CONTROL CARRILES
      </button>

      </div>
      {component === "controlOrganismo" && <ControlOrganismo />}
      {component === "controlCarril" && <ControlCarril />}
    </>
  );
}
