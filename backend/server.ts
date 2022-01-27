import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";

const stress = 
["relax, take it easy",
"take a break, eat a KitKat",
"go on holiday",
"Exercise regularly",
"Turn off your phone sometimes"]

const trauer = 
["don't worry be happy",
"go to your happy place",
"try weed",
"Seek help if you think you may be dealing with depression"]

const sport = 
["Mach mehr Sport",
"Krafttraining hilf deinem Body-Image",
"Auch kleine Fortschritte sind Fortschritte"]

const lernen = 
["Setze dir deine Ziele vor Augen",
"Früh aufstehen hilft",
"Nicht alles auf den letzten Drücker lernen"]

const familie = 
["Ruf deine Eltern an",
"Familie sind die wahren OGs",
"Versuche zu verstehen, warum die Karen in deiner Familie so eine Karen ist"]

const freunde = 
["call your friends to ckeck up on them",
"Nur weil man noch snapt, heißt das nicht, dass man noch in Kontakt ist",
"love your friends"]

const app = opine();
app.use(opineCors())

app.get("/problems/:typeofproblem", function (req, res) {
    const emotion = eval(req.params.typeofproblem)
    const index = Math.floor(Math.random() * Object.keys(emotion).length)

    console.log(typeof(emotion))
    console.log(emotion)
    console.log(index)

    res.send({ answer: emotion[index] })
    
    
});

app.listen(
    3004,
    () => console.log("server has started on http://localhost:3004 🚀"),
);