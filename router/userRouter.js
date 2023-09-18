const route = require("express").Router()

const bollywoodData = require("../Data_API/bollywood")
route.get("/bollywood", (req,res) =>{
    res.send(bollywoodData)
})

const hollywoodData = require("../Data_API/hollywood")
route.get("/hollywood", (req,res) =>{
    res.send(hollywoodData)
})
 
const techData = require("../Data_API/technology")
route.get("/technology", (req,res) => {
    res.send(techData)
})

const foodData = require("../Data_API/food")
route.get("/food", (req,res) => {
    res.send(foodData)
})

const fitnessData = require("../Data_API/fitness")
route.get("/fitness", (req,res) => {
    res.send(fitnessData)
})

const alldata = require("../Data_API/store")
route.get('/',(req,res)=>{
    res.send(alldata)
})

module.exports = route