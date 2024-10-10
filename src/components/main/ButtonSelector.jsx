import { useAppContext } from '../../context/ContextButon'; 

const ButtonSelector = ({ title, dataKey }) => {
  const { diaSem, horarioss, piscina, selectedDia, setSelectedDia, selectedHora, setSelectedHora, selectedPiscina, setSelectedPiscina } = useAppContext();

  const dataMap = {
    diaSem: { data: diaSem, selected: selectedDia, setSelected: setSelectedDia },
    horarioss: { data: horarioss, selected: selectedHora, setSelected: setSelectedHora },
    piscina: { data: piscina, selected: selectedPiscina, setSelected: setSelectedPiscina },
  };

  const { data, selected, setSelected } = dataMap[dataKey];
  console.log(data);

  const handleChange = (event) => {
    setSelected(event.target.value);
    console.log('Opción seleccionada:', event.target.value);
  };

  return (
    <>
      <h2 className="mb-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-4xl select-none">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2 max-w-xl mt-5 justify-center">
        {data.map((item, index) => (
          <label
            className={`${
              selected === item[dataKey === "diaSem" ? "dia" : dataKey === "horarioss" ? "hora" : "piscina"] ? "outline outline-4 outline-teal-700" : ""
            } text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 w-28 mb-2`}
            key={index}
          >
            <input
              className="hidden"
              type="radio"
              value={item[dataKey.slice(0, -1)]}
              checked={selected === item[dataKey === "diaSem" ? "dia" : dataKey === "horarioss" ? "hora" : "piscina"] } 
              onChange={handleChange}
            />
            {item[dataKey === "diaSem" ? "dia" : dataKey === "horarioss" ? "hora" : "piscina"]}
          </label>
        ))}
      </div>
    </>
  );
};

export default ButtonSelector; 
