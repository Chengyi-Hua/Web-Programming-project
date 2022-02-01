import {FiatConverter_fromAPI} from 'https://deno.land/x/currency_converter@v0.9.1/api_mod.ts'
let FiatConverter = new FiatConverter_fromAPI()


// Mode 1) Convert Currency with Realtime Data from fixer.io (API-Key required: https://fixer.io/)
var result = await FiatConverter.convert("https://fixer.io/",15,"EUR","RUB")
console.log(result)

// run with deno run --allow-net

// nothing comes back?