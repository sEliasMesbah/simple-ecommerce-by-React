import { Route, Routes as Router } from "react-router-dom";
import Home from "../pages/Home";

export default function Routes (){
    return <Router>
        <Route path="/" Component={() => Home()} />
    </Router>
}