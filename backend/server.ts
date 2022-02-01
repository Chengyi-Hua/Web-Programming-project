import { opine } from "https://deno.land/x/opine@2.1.1/mod.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";
import { generateQuote } from "./Quotegenerator.ts"

const app = opine();
app.use(opineCors())

app.get("/problems/:typeofproblem", function (req, res) {
    res.send({ answer: generateQuote(req.params.typeofproblem) })
});

app.listen(
    3004,
    () => console.log("server has started on http://localhost:3004 🚀"),
);