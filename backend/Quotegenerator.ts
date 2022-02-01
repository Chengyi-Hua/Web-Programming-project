export const emotions = new Map<string, string[]>();
emotions.set("stress", 
["relax, take it easy",
"take a break, eat a KitKat",
"go on holiday",
"Exercise regularly",
"Turn off your phone sometimes"])
emotions.set("trauer",
["don't worry be happy",
"go to your happy place",
"try weed",
"Seek help if you think you may be dealing with depression"])
emotions.set("sport",
["Mach mehr Sport",
"Krafttraining hilf deinem Body-Image",
"Auch kleine Fortschritte sind Fortschritte"])
emotions.set("lernen",
["Setze dir deine Ziele vor Augen",
"Früh aufstehen hilft",
"Nicht alles auf den letzten Drücker lernen"])
emotions.set("familie",
["Ruf deine Eltern an",
"Familie sind die wahren OGs",
"Versuche zu verstehen", "warum die Karen in deiner Familie so eine Karen ist"]
)
emotions.set("freunde",
["call your friends to ckeck up on them",
"Nur weil man noch snapt, heißt das nicht, dass man noch in Kontakt ist",
"love your friends"])

export function generateQuote(emotion: string, emotionMap = emotions){
    const emotionList = emotionMap.get(emotion)!
    const index = Math.floor(Math.random() * emotionList.length)
    return emotionList[index]
}

