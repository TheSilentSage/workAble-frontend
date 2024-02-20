import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </Router>
            
        </>
    );


}

export default App;