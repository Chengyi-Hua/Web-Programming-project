import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

// get() eine Api wird hier abgefragt
const result = await Request.get('http://api.open-notify.org/iss-now.json')

console.log(result)

// how to run it: deno test --allow-net https://deno.land/x/request@1.3.2/test.ts
// the result is a possition with {longitude, latitude} mit message ob es erfolgreich war oder nicht