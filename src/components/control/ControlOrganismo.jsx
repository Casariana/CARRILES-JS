import ControlFormOrganismos from "./ControlFormOrganismos";

export default function ControlOrganismo() {
  const datosOrganismos = [
    {
      organismo: "liga antioqueña de actividades subacuáticas",
      sigla: "liga antioqueña de actividades subacuáticas",
      programa: "liga antioqueña de actividades subacuáticas",
      modalidad: "liga antioqueña de actividades subacuáticas",
      formador: "liga antioqueña de actividades subacuáticas",
    },
  ];

  return (
    <>
      <ControlFormOrganismos />
      <section>
        <div className="flex items-center justify-center mt-4 min-h-30">
          <table className="border-spacing-y-3 text-gray-400 border-separate space-y-6 text-sm ">
            <thead className="bg-teal-100 text-gray-600 ">
              <tr>
                <th className="px-5 py-3 font-extrabold  uppercase select-none">
                  Organismo
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase select-none">
                  Sigla
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase select-none">
                  Programa
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase select-none">
                  Modalidad
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase select-none">
                  Formador
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase select-none">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {datosOrganismos.map((dato, index) => (
                <tr key={index} className="bg-teal-100 rounded-lg">
                  <td className="p-4 uppercase max-w-60 select-none">{dato.organismo}</td>
                  <td className="p-4 uppercase max-w-60 select-none">{dato.sigla}</td>
                  <td className="p-4 uppercase max-w-60 select-none">{dato.programa}</td>
                  <td className="p-4 uppercase max-w-60 select-none">{dato.modalidad}</td>
                  <td className="p-4 uppercase max-w-60 select-none">{dato.formador}</td>
                  <td className="p-4 flex">
                    <img
                      className="w-12 h-12"
                      src="../../../public/update.png"
                      alt="update"
                    />
                    <img
                      className="w-12 h-12"
                      src="../../../public/delete.png"
                      alt="delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
