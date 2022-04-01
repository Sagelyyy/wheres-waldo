import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game.js";
import App from "./App.js";
import Home from "./components/Home.js";

const RouteSwitch = () => {

    // Going to be storing state in here, and passing it down to the different routes.


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="game" element={<Game />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;