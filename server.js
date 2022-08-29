'use strict';

require('dotenv').config();
const express = require('express'); //import express
const cors = require('cors'); //import cors
const WeatherData = require('./Assets/weather.json');

const server = express();
server.use(cors()); // make my server opened for any client

const PORT = process.env.MY_PORT ; //take the port from .env file

// http://localhost:3100/
server.get('/',(req,res)=>{
    res.send('This is The defulat route . Happy to have you here :)')
})

// http://localhost:3100/weather?name=cityName&lon=cityLon&lat=cityLat
server.get('/weather',(req,res) => {


try{
    const result = WeatherData.find( (item) =>{
       
        
        if(item.city_name === req.query.name)
        return item;
    })  
    let arr = [];
    arr.push(result.city_name);
    arr.push(result.lat )
    arr.push(result.lon)
    console.log("array",arr);

    res.send(arr);
    this.setState({
          
        name: CityData[0].display_name,
        lat: CityData[1].lat,
        lon: CityData[2].lon,
        appear:true,
        
      });


}catch{

    res.send("Error ! Please Enter One Of the following :Amman,Seattle or Paris. ");


}

})



// http://localhost:3100/getPock?name=bulbasaur


// http:localhost:3100/***** */
server.get('*',(req,res)=>{
    res.status(404).send('Sorry, page not found');
})

// to make our server listen on PORT
server.listen(PORT, () => {
    console.log(`Hello, I am listening on ${PORT}`);
})