
type Agents = {
  img:string,
  name:string,
  summary:string
}[]

export const Agent = ()=>{
  const agents:Agents =[{img:"/src/assets/Michele.png",name:"",summary: ""},{img:"/src/assets/Michele.png",name:"",summary: ""},{img:"/src/assets/Michele.png",name:"",summary: ""},{img:"/src/assets/Michele.png",name:"",summary: ""}]
  return(
    <div className="my-3"> 
    <div className="font-bold p-2">Agents We Associate with in USA </div>  
    
    <div className="flex justify-center items-center">
    <div className="flex flex-col md:w-[70%] justify-center items-center md:grid md:grid-cols-2"> 
    {
      agents.map(item=>(
    <div className="w-60 md:w-64 shadow-xl rounded m-2 p-2 flex flex-col justify-between items-center text-center hover:bg-blue-600 hover:text-white"> 
    <img src={item.img} className=""/>
    <div>
    <h1 className="font-bold text-blue-600 text-3xl">Michele Rolling</h1> 
    <span>Company Agent</span>
    <p className="text-sm text-[gray]"> Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Phasellus Porta Justo Eget Risus Consectetur,..</p>
    </div>
    </div> 
      ))
    }
    </div> 
    </div>
    </div>
    )
}