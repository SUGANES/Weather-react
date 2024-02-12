import "./index.css";
import axios from "axios";
import { useState } from "react";


function App() {

    const [degree, setdegree] = useState("180");
    const [city, setcity] = useState("Salem");
    const [desc, setdesc] = useState("Rainig");
    const [inputcity, setinputcity] = useState("");
    const [err, seterr] = useState("wrong");

    function getData() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=1b8abacd245232f8b47eee65c4facdd2`);
        weather.then((info) => {
            setdegree(info.data.main.temp);
            setdesc(info.data.weather[0].main);
            setcity(info.data.name);
            console.log(info.data);
        }).catch(() => {
           
        })
    }
    function handleInput(event) {
        setinputcity(event.target.value)
        // console.log(event.target.value);
    }
    return (
        <div className="flex flex-row justify-center h-[100vh] items-center">
            <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-2 rounded-md shadow">
                <h2 className="font-medium">Hey! 🌤️</h2>
                <p className="text-xs">Do you want to know the weather Report :)</p>
                <input onChange={handleInput} className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name ?" /><br />
                <button onClick={getData} className="bg-black rounded-lg text-white p-1 text-xs mt-2">Get Report 🌩️</button>
                <p className="text-xs mt-2">Degree :{degree} | City : {city} | Weather : {desc}</p>
            </div>
        </div>
    )
}

export default App;