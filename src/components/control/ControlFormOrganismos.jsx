

export default function ControlFormOrganismos() {
  return (
    <>
    <section className="flex items-center justify-center mt-16 min-h-80">
        <form action="submit" className="space-y-4 w-full max-w-md">
        <div className="flex flex-col">
        <label className="text-left text-gray-700 font-semibold" >
            Organismo
        <input type="text" className="border border-gray-300 rounded-md p-2 w-full"/>
        </label  >
        </div>
        <div className="flex flex-col">
        <label className="text-left text-gray-700 font-semibold" >
            Sigla
        <input type="text" className="border border-gray-300 rounded-md p-2 w-full"/>
        </label >
        </div>
        <div className="flex flex-col">
        <label className="text-left text-gray-700 font-semibold" >
            Programa
        <input type="text" className="border border-gray-300 rounded-md p-2 w-full"/>
        </label >
        </div>
        <div className="flex flex-col">
        <label className="text-left text-gray-700 font-semibold" >
            Modalidad
        <input type="text" className="border border-gray-300 rounded-md p-2 w-full"/>
        </label >
        </div>
        <div className="flex flex-col">
        <label className="text-left text-gray-700 font-semibold" >
            Formador
        <input type="text" className="border border-gray-300 rounded-md p-2 w-full"/>
        </label >
        </div>
        </form>
        </section>
    </>
  )
}


