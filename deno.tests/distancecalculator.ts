import { DistanceCalculator } from "https://deno.land/x/distancecalculator/distance-calculator.ts"

// ich teste für Freundenstadt bis Oberndorf am Necker, zwei ehemalige Wohnorte von mir

const freudenstadt = {
    latitude: 48.46695, 
    longitude: 8.41371
}

const oberndorf = {
    latitude: 48.2946154,
    longitude: 8.5765805
}

//eingebaute Funktionen für Kilometer, Miles und Lichtjahren
const distanceInKilometers = 
 DistanceCalculator.getDistanceInKilometers(oberndorf.latitude, oberndorf.longitude, freudenstadt.latitude, freudenstadt.longitude)

const distanceInNauticMiles = 
  DistanceCalculator.getDistanceInNauticMiles(oberndorf.latitude, oberndorf.longitude, freudenstadt.latitude, freudenstadt.longitude)

const distanceInLightYears = 
  DistanceCalculator.getDistanceInLightYears(oberndorf.latitude, oberndorf.longitude, freudenstadt.latitude, freudenstadt.longitude)  

// \n$ ist wie , {distanceInKilometers} in Python
console.log(` Die Distanz zwischen Freudenstadt und Oberndorf am Nechar beträgt: \n${distanceInKilometers} kilometers \n${distanceInNauticMiles} nautic miles \n${distanceInLightYears} light years`)

// Kommentar: Das stellt die Luftliniedistanz dar und nicht die "Fahrstrecke"