require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());

const PORT = process.env.PORT;

const Forcast = require("./forcast");

//http:localhost:3100/
server.get("/", (req, res) => {
  res.send("Hi from the Default route");
});

//http:localhost:3100/weather?name=cityName&lon=lon&lat=lat
server.get("/weather", (req, res) => {
  if (
    req.query.lat === Forcast.ammancoordinates[0] &&
    req.query.lon === Forcast.ammancoordinates[1] &&
    req.query.name.toLowerCase() === "amman"
  ) {
    return res.send(Forcast.amman);
  } else if (
    req.query.lat === Forcast.parisCoordinates[0] &&
    req.query.lon === Forcast.parisCoordinates[1] &&
    req.query.name.toLowerCase() === "paris"
  ) {
    return res.send(Forcast.paris);
  } else if (
    req.query.lat === Forcast.seattleCoordinates[0] &&
    req.query.lon === Forcast.seattleCoordinates[1] &&
    req.query.name.toLowerCase() === "seattle"
  ) {
    return res.send(Forcast.seattle);
  } else {
    return res.send(
      "404 Error, Please Enter Amman, Paris or Seattle to get weather info!"
    );
  }
});

server.get("*", (req, res) => {
  res.send(
    "ERROR ! Please Enter A valid route . We could not find this page ! "
  );
});

server.listen(PORT, () => {
  console.log(`Hello, I am listening On ${PORT}`);
});
