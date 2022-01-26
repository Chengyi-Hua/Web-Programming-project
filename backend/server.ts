import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";

const stress = 
["relax, take it easy",
"take a brake",
"go on holiday"]

const trauer = 
["don't worry be happy",
"go to your happy place",
"try weed"]

const sport = 
["mach mehr sport",
"Krafttraining hilf deinem Body-Image",
"auch kleine Vorschritte sind Vortschritte"]

const lernen = 
["Setze dir dein Ziel vor augen",
"Früh aufstehen hilft",
"nicht alles auf den letzten Drücker"]

const familie = 
["Ruf deine Eltern an",
"Familie sind die wahren OGs",
"Versuche zur verstehen warum die Karen in deiner Familie so ist"]

const freunde = 
["call your friends to ckeck up on them",
"Nur weil man noch snapt heißt das nicht das man noch in Kontakt ist",
"love your friends"]

const app = opine();
app.use(opineCors())

app.get("/problems/:typeofproblem", function (req, res) {
    let emotion = eval(req.params.typeofproblem)
    let index = Math.floor(Math.random()*3)

    console.log(typeof(emotion))
    console.log(emotion)
    console.log(index)

    res.send({ answer: emotion[index] })
    
    
});

app.listen(
    3004,
    () => console.log("server has started on http://localhost:3004 🚀"),
);