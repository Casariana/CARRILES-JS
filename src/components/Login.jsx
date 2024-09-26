

function Login() {
  return (
    <div className="flex justify-center mt-28">
      <div className="w-full max-w-sm p-4 bg-[url('public/complejo.svg')] bg-cover  rounded-lg  sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-2xl font-medium text-black ">
            ¿Eres colaborador?
          </h5>
          <div>
            <label className="block mb-2 text-xl font-semibold text-black">
              Escribe tu nombre
            </label>
            <input
              type="text"
              name="username"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="User Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-xl font-medium text-black ">
              Tu contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label className="ms-2 text-xl font-medium text-black ">
                Recuérdame
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-emerald-600 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
          >
            Ingresar
          </button>
          <div className="text-md font-medium text-black ">
            ¿No está registrado? Sorry
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
