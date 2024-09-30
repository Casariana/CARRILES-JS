import React from "react";

export default function ModalOrganismos({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Agregar Organismo</h2>
          <form action="submit" className="space-y-4 ">
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold">
                Organismo
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold">
                Sigla
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold">
                Programa
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold">
                Modalidad
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <label className="text-left text-gray-700 font-semibold">
                Formador
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </label>
            </div>
            <button 
            
            type="submit" 
            className="mt-4 bg-teal-500 text-white rounded-lg px-4 py-2">

            Enviar
          </button>
          </form>
        </div>
      </div>
    </>
  );
}
