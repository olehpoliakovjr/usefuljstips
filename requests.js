document.addEventListener("DOMContentLoaded", function (){

     fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

        .then(response =>response.json())

        .then(data => {
            const rate = data.bpi.EUR.rate_float;
            console.log(rate)
            document.querySelector(".block").innerHTML = `1 btc is equal to ${rate.toFixed(0)} EUR`;
        });


})