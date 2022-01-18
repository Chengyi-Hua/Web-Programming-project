import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";
const app = opine();
app.use(opineCors())

app.get("/gibmirdieloesung", function (req, res) {
    res.send({ answer: "Die Lösung ist: Take it easy & relax & mach bissle sport" });
});

app.listen(
    3004,
    () => console.log("server has started on http://localhost:3004 🚀"),
);