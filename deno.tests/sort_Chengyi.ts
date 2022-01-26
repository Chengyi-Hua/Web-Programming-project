import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"

const testInput = [88,55,54,1,4,5,2,444,52,133]

// die Liste wird in diesem Fall mit der Funktion sort(), sortiert, mit Python vergleichbar
const actualOutput = SortService.sort(testInput, Direction.DESCENDING)
// Verständnis: ist eigentlich wie print(actualOutput) in Python
console.log(actualOutput)