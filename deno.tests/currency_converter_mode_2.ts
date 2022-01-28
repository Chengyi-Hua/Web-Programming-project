import {FiatConverter_fromJSON} from 'https://deno.land/x/currency_converter@v0.9.1/json_mod.ts'
let FiatConverter = new FiatConverter_fromJSON()

var result = await FiatConverter.convert(15,"EUR","RUB")
console.log(result)

// run with "deno run --allow-read"

// errors appear! Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'EUR') 
// return round(quantity*(1/this.data.rates[curr_from])*this.data.rates[curr_to], 2)