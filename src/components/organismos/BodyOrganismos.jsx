

function BodyOrganismos() {
    const datosOrganismos = [
        {
          piscina: "Subacuatica",
          dia: "Lunes",
          horaInicio: "05:00",
          horaFin: "06:00",
        },
        {
          piscina: "Subacuatica",
          dia: "Lunes",
          horaInicio: "07:00",
          horaFin: "08:00",
        },
        {
          piscina: "Subacuatica",
          dia: "Lunes",
          horaInicio: "05:00",
          horaFin: "06:00",
        },
        {
          piscina: "Subacuatica",
          dia: "Lunes",
          horaInicio: "05:00",
          horaFin: "06:00",
        },
        {
          piscina: "Subacuatica",
          dia: "Lunes",
          horaInicio: "05:00",
          horaFin: "06:00",
        },
        {
          piscina: "Subacuatica",
          dia: "Lunes",
          horaInicio: "05:00",
          horaFin: "06:00",
        },
      ];
  return (
    <>
    <section>
        <div className="flex items-center justify-center mt-16 min-h-80">
          <table className="border-spacing-y-3 text-gray-400 border-separate space-y-6 text-sm ">
            <thead className="bg-teal-100 text-gray-600 ">
              <tr>
                <th className="px-5 py-3 font-extrabold  uppercase">piscina</th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase">
                  dia
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase">
                  hora inicio
                </th>
                <th className="px-5 py-3 font-extrabold  text-left uppercase">
                  hora fin
                </th>
              </tr>
            </thead>
            <tbody>
              {datosOrganismos.map((dato, index) => (
                <tr key={index} className="bg-teal-100 rounded-lg">
                  <td className="p-4 ">{dato.piscina}</td>
                  <td className="p-4">{dato.dia}</td>
                  <td className="p-4 ">{dato.horaInicio}</td>
                  <td className="p-4">
                    <span className="bg-green-400 text-gray-50 rounded-md px-2">
                      {dato.horaFin}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default BodyOrganismos