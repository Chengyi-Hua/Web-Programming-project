import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";

const stress = 
["Relax, take it easy",
"Take a break, eat a KitKat",
"Urlaub?",
"Mach mehr Sport",
"Manchmal muss man das Handy ausmachen"]

const trauer = 
["Don't worry be happy",
"Alles was in 5 Jahre irrelevant ist, ist nicht wichtig",
"Try weed",
"Nehme dir Zeit :)"]

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
["Rufe sie mal an, redet einfach offen über Themen :)",
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