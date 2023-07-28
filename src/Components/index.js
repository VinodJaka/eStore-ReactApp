import { Route, Routes } from "react-router-dom";
import MainComponent from "./MainComponent";


const LandingPage = ()=>{

    return(
        <div>
            <Routes>
                <Route path="/" Component={MainComponent}/>
            </Routes>
        </div>
    )
}

export default LandingPage;