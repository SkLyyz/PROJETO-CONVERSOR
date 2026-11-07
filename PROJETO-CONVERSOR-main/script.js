let convertbutton = document.querySelector(".convert-button");

let currencyselect = document.querySelector(".currency-select");

async function Convert ()
{
    let input = document.querySelector(".input").value;

    let valuetoconvert = document.querySelector(".value-to-convert");

    let convertedvalue = document.querySelector(".converted-value");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then( res => res.json())


    const dolartoday = data.USDBRL.high

    const eurotoday = data.EURBRL.high

    const libratoday = data.GBPBRL.high

    const bitcointoday = data.BTCBRL.high

    
    if (currencyselect.value == "dolar")
    {      
        convertedvalue.innerHTML =  new Intl.NumberFormat("pt-br", 
        {
            style: "currency",
            currency: "USD"

        }).format(input / dolartoday)

    }
    
    if (currencyselect.value == "euro")
    {
        convertedvalue.innerHTML = new Intl.NumberFormat("pt-br",
      {
        style: "currency",
        currency: "EUR" 

      }).format(input / eurotoday);


    }

    valuetoconvert.innerHTML = new Intl.NumberFormat("pt-br",
        {
            style: "currency",
            currency: "BRL"
        }
    ).format(input)

    if (currencyselect.value == "libra")
    {
        convertedvalue.innerHTML = new Intl.NumberFormat("pt-br",
            {
                style: "currency",
                currency: "GBP"
            }
        ).format(input / libratoday)
    }

    if (currencyselect.value == "bitcoin")
    {
        convertedvalue.innerHTML = new Intl.NumberFormat("pt-br", 
            {
                style: "currency",
                currency: "BTC"
            }
        ).format(input / bitcointoday)
    }



}

function ChangeCurrency()
{
    let currencyname = document.getElementById("currency-name")
    let currencyImg = document.querySelector(".currencyimg")
    
    if (currencyselect.value == "dolar")
    {
        currencyname.innerHTML = "Dólar"
        currencyImg.src = "./assets/eua.png"
    }

    if (currencyselect.value == "euro")
    {
        currencyname.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencyselect.value == "libra")
    {
        currencyname.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencyselect.value == "bitcoin")
    {
        currencyname.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
        
    Convert()
        
}

currencyselect.addEventListener("change", ChangeCurrency)
convertbutton.addEventListener("click", Convert);