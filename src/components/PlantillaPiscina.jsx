import DisplayCarriles from "./DisplayCarriles";

export default function PlantillaPiscina() {
  return (
    <div className='mt-10 flex justify-center '>
        <DisplayCarriles />
        <img 
        className='max-w-3xl'
        src="../public/piscina25x50.jpg" 
        alt="piscina" />
    </div>
  )
}