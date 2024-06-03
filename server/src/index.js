const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//midlwares
app.use(express.json());
app.use(cors());

//get All Currencies(req getting from client side and provide here response to client again)
app.get("/getAllCurrencies" , async(req,res)=> {

    const nameURL = "https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=01803395b792403b964b02cc2dcc1b38"

try{
    const nameResponse = await axios.get(nameURL);
    const nameData = nameResponse.data;
    return res.json(nameData);

}catch(err){
    console.error(err);
}
})

//calculate target amount through API
app.get("/convertRates" , async(req,res) => {

    const {
        date,
        sourceCurrency,
        targetCurrency,
        amountInsourceCurrency
    } = req.query;

    const dataURL = `https://openexchangerates.org/api/historical/${date}.json?app_id=01803395b792403b964b02cc2dcc1b38`;

    try{
        const dataResponse = await axios.get(dataURL);
        const rates = dataResponse.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency];

        //equation for finding target rate

        const targetAmount = (targetRate / sourceRate) * amountInsourceCurrency;
        return res.json(targetAmount);

    }catch(err){
        console.error(err);
    }
})

//server listen in a port
app.listen(5000 , ()=> {
    console.log("Server Started!");
})

