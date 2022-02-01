import { generateQuote, emotions } from "./Quotegenerator.ts";
import { assertArrayIncludes } from "https://deno.land/std@0.123.0/testing/asserts.ts";

Deno.test("should return a quote from the stress list if emotion is stressed", () => {
    const quote = [generateQuote("stress")]
    const emotionList = emotions.get("stress")!
    assertArrayIncludes(emotionList, quote)
})

Deno.test("should return a quote from the lernen list if emotion is lernen", () => {
    const quote = [generateQuote("lernen")]
    const emotionList = emotions.get("lernen")!
    assertArrayIncludes(emotionList, quote)
})

Deno.test("should return a quote from the familie list if emotion is familie", () => {
    const quote = [generateQuote("familie")]
    const emotionList = emotions.get("familie")!
    assertArrayIncludes(emotionList, quote)
})

Deno.test("should return a quote from the sport list if emotion is sport", () => {
    const quote = [generateQuote("sport")]
    const emotionList = emotions.get("sport")!
    assertArrayIncludes(emotionList, quote)
})

Deno.test("should return a quote from the freunde list if emotion is freunde", () => {
    const quote = [generateQuote("freunde")]
    const emotionList = emotions.get("freunde")!
    assertArrayIncludes(emotionList, quote)
})

Deno.test("should return a quote from the trauer list if emotion is trauer", () => {
    const quote = [generateQuote("trauer")]
    const emotionList = emotions.get("trauer")!
    assertArrayIncludes(emotionList, quote)
})