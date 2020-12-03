
const express = require('express')
var request=require('request')
const bodyParser = require ('body-parser');
const {req, res } = require('express')
const app = express()
const port = 5000
const cors = require ('cors')
app.use (cors())


app.get('/' ,(req ,res) =>{
    res.send("Hello world")

})

app.get('/getWeatherghana', (req, res) => {
    request("https://api.weatherbit.io/v2.0/current?city=Accra&key=0386909e9bfb466193a9c1efaca2ca5d",
    function(error, response, body){
        if(!error&&response.statusCode==200){
            var parsedBody =JSON.parse(body)
            var temperature = parsedBody["data"][0]["temp"]
            res.send({temperature})
        }
    })
})

app.listen(port, () => {
    console.log("My app is running on this server")
})