
type  Props = {
  city:string,
  src:string,
} 

const demoCities:Props[] = [
  {city:"Miami",src:"/src/assets/Miami.jpeg"},
  {city:"Miami Beach",src:"/src/assets/miamibeach.jpeg"},
  {city:"Orlando",src:"/src/assets/Orlando.jpeg"}, 
 {city:"Tempa",src:"/src/assets/tempa.jpeg"},
 {city:"Fort Myers",src:"/src/assets/fortmyers.jpeg"}, 
 {city:"Fort Lauderdale",src:"/src/assets/FortLauderdale.jpeg"},
 {city:"Sarasota",src:"/src/assets/sarasota.jpeg"}, 
 {city:"St Petersburg",src:"/src/assets/Petersburg.jpeg"}, 
  ]

const CityCard = ({city,src}:Props)=>{
  
  return(
    <>
   <div className="rounded-2xl relative w-32 h-28 md:w-56 md:h-44 m-2"> 
    <img src={src} className="w-[100%] h-[100%] absolute rounded-2xl"/>
   <div className="absolute w-[100%] h-[100%] flex items-center justify-center text-white z-10 bg-black bg-opacity-25 rounded-2xl hover:bg-blue-500 hover:bg-opacity-50"> <span>{city}</span></div> 
    </div> 
    </>
    )
}

export const PopularCities = ()=>{
  
  return(
    <> 
    <div className="font-bold m-3 ">Available cities</div>
    <div className="md:flex md:items-center md:justify-center">
    <div className="grid grid-cols-2 justify-items-center md:grid-cols-3 items-center md:w-[70%]">
    
    
    {
      demoCities.map(item=>{
        return (<CityCard city={item.city} src={item.src}/>)
      })
    }
    
    </div> 
    </div>
    </>
    )
}