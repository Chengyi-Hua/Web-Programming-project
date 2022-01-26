import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";
const app = opine();
const StressList = ["A","B","C"];
app.use(opineCors())

app.get("/problems/:typeofproblem", function (req, res) {
    if (req.params.typeofproblem == "stress"){
        res.send({ answer: "Die Lösung ist: Take it easy & relax & mach bissle weniger stress" })
    } else {
        res.send({answer: "mach was anderes"})
    }
    
});

app.listen(
    3004,
    () => console.log("server has started on http://localhost:3004 🚀"),
);