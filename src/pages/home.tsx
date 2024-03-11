import {Header} from "../components/header" 
import {Footer} from "../components/footer" 
import {PopularCities} from "../components/popularCities"


const HomePage = ()=>{
  
  return(
    <>
    <div className="h-max">
    <Header/> 
    <PopularCities/>
    <Footer/>
    </div>
    </>
    )
} 

export default HomePage