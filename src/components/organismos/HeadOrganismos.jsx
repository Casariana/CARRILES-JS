export default function HeadOrganismos() {
  const organismos = [
    "inder",
    "lina",
    "lasa",
    "esturiones",
    "orcas",
    "cardumen",
    "galapagos",
    "lidimant",
    "lidefiant",
  ];
  return (
    <>
      <section className="my-10 flex justify-center items-end">
        <form className="max-w-sm mx-20 w-80 ">
          <label
            htmlFor="organismos"
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-3xl lg:text-4xl select-none  "
          >
            Selecciona el Organismo
          </label>
          <select
            id="organismos"
            className="mt-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 uppercase"
          >
            {organismos.map((organismo, index) => (
              <option className="uppercase" key={index}>
                {organismo}
              </option>
            ))}
          </select>
        </form>
      </section>
    </>
  );
}
