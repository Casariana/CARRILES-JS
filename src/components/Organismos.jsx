import React from "react";
import HeadOrganismos from "./HeadOrganismos";

export default function Organismos() {
    const datosOrganismos = [
        {
            piscina: "Subacuatica",
            dia: "Lunes",
            horaInicio: "05:00",
            horaFin: "06:00"
          },
          {
            piscina: "Subacuatica",
            dia: "Lunes",
            horaInicio: "07:00",
            horaFin: "08:00"
          },
          {
            piscina: "Subacuatica",
            dia: "Lunes",   
            horaInicio: "05:00",
            horaFin: "06:00"
          },
          {
            piscina: "Subacuatica",
            dia: "Lunes",
            horaInicio: "05:00",
            horaFin: "06:00"
          },
          {
            piscina: "Subacuatica",
            dia: "Lunes",
            horaInicio: "05:00",
            horaFin: "06:00"
          },
          {
            piscina: "Subacuatica",
            dia: "Lunes",
            horaInicio: "05:00",
            horaFin: "06:00"
          }
    ];
  return (
    <>
      <HeadOrganismos />
      <section>
        <h2 className="my-10">Tabla de uso</h2>
        <div className="flex justify-center">
        <table >
          <thead    >
            <tr >
              <th className="px-8 py-6">PISCINA</th>
              <th className="px-8 py-6">DIA</th>
              <th className="px-8 py-6">HORA INICIO</th>
              <th className="px-8 py-6">HORA FIN</th>
            </tr>
          </thead>
          <tbody>
            {datosOrganismos.map((dato, index) => (
              <tr key={index}>
                <td>{dato.piscina}</td>
                <td>{dato.dia}</td>
                <td>{dato.horaInicio}</td>
                <td>{dato.horaFin}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>
    </>
  );
}
