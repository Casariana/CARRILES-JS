import React from "react";
import HeadOrganismos from "./HeadOrganismos";
import Footer from "./Footer";

export default function Organismos() {
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
      <HeadOrganismos />
      <section>
        <div class="flex items-center justify-center mt-16 min-h-80">
          <table class="border-spacing-y-3 text-gray-400 border-separate space-y-6 text-sm ">
            <thead class="bg-teal-100 text-gray-600 ">
              <tr>
                <th class="px-5 py-3 font-extrabold  uppercase">piscina</th>
                <th class="px-5 py-3 font-extrabold  text-left uppercase">
                  dia
                </th>
                <th class="px-5 py-3 font-extrabold  text-left uppercase">
                  hora inicio
                </th>
                <th class="px-5 py-3 font-extrabold  text-left uppercase">
                  hora fin
                </th>
              </tr>
            </thead>
            <tbody>
              {datosOrganismos.map((dato, index) => (
                <tr key={index} class="bg-teal-100 rounded-lg">
                  <td class="p-4 ">{dato.piscina}</td>
                  <td class="p-4">{dato.dia}</td>
                  <td class="p-4 ">{dato.horaInicio}</td>
                  <td class="p-4">
                    <span class="bg-green-400 text-gray-50 rounded-md px-2">
                      {dato.horaFin}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
}
