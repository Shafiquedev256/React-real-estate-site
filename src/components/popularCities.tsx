
type  Props = {
  city:string,
  src:string,
} 

const demoCities:Props[] = [
  {city:"Miami",src:"/src/assets/Miami.jpeg"},
  {city:"Miami Beach",src:"/src/assets/miamibeach.jpeg"},
  {city:"Orlando",src:"/src/assets/Orlando.jpeg"},
  ]

const CityCard = ({city,src}:Props)=>{
  
  return(
    <>
   <div className="rounded-2xl relative w-32 h-28 "> 
    <img src={src} className="w-[100%] h-[100%] absolute rounded-2xl"/>
   <div className="absolute w-[100%] h-[100%] flex items-center justify-center text-white z-10 bg-black bg-opacity-25 rounded-2xl hover:bg-blue-500 hover:bg-opacity-50"> <span>{city}</span></div> 
    </div> 
    </>
    )
}

export const PopularCities = ()=>{
  
  return(
    <>
    <div className="md:flex md:items-center md:justify-center">
    <div className="grid grid-cols-2 justify-items-center items-center md:w-[70%]">
    
    
    {
      demoCities.map(item=>{
        return (<CityCard city={item.city} src={item.src}/>)
      })
    }
    
    <div>NasiMiami Beach</div>
    <div>Orlando</div>
<div>NasiOrlando</div>
<div>Tampa</div>
<div>NasiTampa</div>
<div>Fort Lauderdale</div>
    </div> 
    </div>
    </>
    )
}