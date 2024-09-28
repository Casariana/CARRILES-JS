
export default function DisplayCarriles() {
    const displayedCarriles =[{
        nombre: 'ESTURIONES',
        instructor: null,
        colorBg: 'bg-cyan-400',
        texto: 'text-white'
    },
    {
        nombre: 'ESTURIONES',
        instructor: null,
        colorBg: 'bg-cyan-400',
        texto: 'text-white'
    },
    {
        nombre: 'ESTURIONES',
        instructor: null,
        colorBg: 'bg-cyan-400',
        texto: 'text-white'
    }, 
    {
        nombre: 'LINA',
        instructor: null,
        colorBg: 'bg-blue-600',
        texto: 'text-white'
    },
    {
        nombre: 'LINA',
        instructor: null,
        colorBg: 'bg-blue-600',
        texto: 'text-white'
    },
    {
        nombre: 'LINA',
        instructor: null,
        colorBg: 'bg-blue-600',
        texto: 'text-white'
    },
    {
        nombre: 'LINA',
        instructor: null,
        colorBg: 'bg-blue-600',
        texto: 'text-white'
    },
    {
        nombre: 'INDER',
        instructor: 'FREDDY MIRANDA',
        colorBg: 'bg-lime-600',
        texto: 'text-white'
    },
    {
        nombre: 'INDER',
        instructor: 'FREDDY MIRANDA',
        colorBg: 'bg-lime-600',
        texto: 'text-white'
    },
    {
        nombre: 'INDER',
        instructor: 'FREDDY MIRANDA',
        colorBg: 'bg-lime-600',
        texto: 'text-white'
    }];
  return (
    <div className={`grid grid-cols-10 max-w-3xl absolute `}>
        {displayedCarriles.map((carril, index) => (
            <div key={index} className={`${carril.colorBg} ${carril.texto} p-2 mx-1 flex  items-center justify-center h-96`} >
                <h2 style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className='my-4'>{carril.nombre}</h2>
                <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }} className=''>{carril.instructor}</p>
            </div>
        ))
    }
    </div>
    )
}
