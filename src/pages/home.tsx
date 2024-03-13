import {Header} from "../components/header" 
import {Footer} from "../components/footer" 
import {PopularCities} from "../components/popularCities"
import {Agent} from "../components/agentsCard"

const HomePage = ()=>{
  
  return(
    <>
    <div className="h-max">
    <Header/> 
    <PopularCities/> 
    <Agent/>
    <Footer/>
    </div>
    </>
    )
} 

export default HomePage