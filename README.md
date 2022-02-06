# Web-Programming-project
DHBW Semester 3. Webapp 

Da es momentan sehr schwierig ist, Termine bei Psychologen zu bekommen, wäre unserer Meinung nach eine sinnvolle Ergänzung zur App eine Webschnittstelle, mit der User Psychologen (Personen mit entsprechenden Wissensstand) Fragen hinterlassen können und sich Ratschläge zu wichtigen Themen geben lassen können. Zukünftig können wir uns auch vorstellen AI-Chat-Bots als psychologen einzusetzen.

- Demo-Video: 




https://user-images.githubusercontent.com/96745479/151675120-ae063f60-616b-482e-bb27-43f03638c5bc.mov




## Html, CSS, JS efforts (im Repo als "Fallstudie-Infoseite" bezeichnet)

- https://joy-landingpage-design-3969.bss.design

Für das Kennenlernen und Üben mit Web-app Programming wurde eine Landingpage für JOY (IOS Version) erstellt. Dabei wurde keine Links wie zum Beispiel Log-in oder Social Media hinterlegt.   


# Verwendung für lokales setup
### Schritt 1: Repository klonen 
Windows/Mac:
```bash
git clone https://github.com/Chengyi-Hua/Web-Programming-project.git
```
### Schritt 2: Deno Installieren

```bash
Für MacOS (verwende  Homebrew): brew install deno
Für Windows (verwende Powershell): iwr https://deno.land/install.ps1 -useb | iex
```
### Schritt 3: Pathkontrolle 
```bash
cd /Users/<user>/Web-Programming-project
```
### Schritt 4: Dependencies installieren
```bash
deno run --allow-run --allow-read https://deno.land/x/snel/install.ts
```
### Schritt 5: cd backend und starte Server
```bash
cd backend
deno run --allow-net --allow-read server.ts
```
### Schritt 6: In Terminal das frontend starten
```bash
cd /Users/<user>/Web-Programming-project/frontend
trex run start
```
Information: stelle sicher, dass "trex" und "snel" in der Path sind. z.B. für MacOS
```bash
path+=('/Users/<user>/.deno/bin')
```  


# Deno-Einarbeitung und efforts
Lernmaterial:
- Youtube
- Unterrichtseinheiten 
- Denoblog: https://deno.com/blog für aktuelle News

Lernmaterial für TypeScript
- https://www.tutorialsteacher.com/typescript/typescript-if-else

Problem 1: Download. für Windows habe ich in Powershell "iwr https://deno.land/x/install/install.ps1 -useb | iex" eingegeben und es hat nicht geklappt. 
Lösung: Powershell ISE als administrator öffnen und "iwr https://deno.land/x/install/install.ps1 -useb | iex" eingeben - hat geklappt! :)

Problem 2.1: es gibt Sachen die man noch installieren sollte, um mit svelte zu arbeiten z.B. "deno run --allow-run --allow-read https://deno.land/x/snel/install.ts" 
nur wenn man das runtergeladen hat, kann man mit "trex run start" die gewünschte Web app starten. (wenn man im richtigen Pfad ist)

Problem 2.2: Es muss "https://deno.land/x/cors/mod.ts" modul installiert werden. Ebenso wie "https://deno.land/x/opine@2.1.1/mod"

Stand 19.01.2022: Frage? kann nun die Webapp aufrufen, jedoch gibt es noch Probleme. dann die Rückgabe aus Backend nicht mehr bekommen. Wisst ihr noch wie genau wir da vorgegangen sind? Ich meine Code-Basis ist da gleiche, gab es Befehle in der Console, die ich verpasst habe? - gelöst. Server muss mit deno run --allow-all server.ts gestartet werden

# Veröffentlichung von Deno Modulen
https://deno.land/x/random_string@1.0.1
Es soll ein Satz (String) aus eine Reihe von Sätzen zufällig zurückgegeben werden.

Lernmaterial:
- Unterrichtseinheiten
- https://www.youtube.com/watch?v=eN3OIx7KQFw&t=334s

# Svelte Einarbeitung
Grundlagen und Codebeispiele:
- https://www.youtube.com/watch?v=lnpdn2rE2N8
- https://svelte.dev/tutorial/basics


# Weitere Einarbeitung in Webprogramming

In der Fallstudie wurde eine App entwickelt, die Menschen mit einem stressigen Alltag oder Leuten, die sich generell mehr mit ihrer mentalen Gesundheit beschäftigen möchten, einen persönlichen mobilen psychologen bereitstellt. Dieser bietet zahlreiche Funktionen, beispielsweise kann man sich durch tägliche Quotes motivieren und aufmuntern lassen, Tagebuch führen und durch tägliche Aufgaben sein Selbstbewusstsein erweitern und sich persönlich weiterentwickeln.
Dazu erstellten wir eine Landingpage.

Lernmaterial:
- w3schools :  
- https://www.w3schools.com : Lernkurse und Sessions über verschiedene Themen
- Youtube   :  
- https://www.youtube.com/watch?v=dOgFkZiVC8w : das arbeiten mit Container wurde erlernt. "Wie sollen Elemente plaziert werden" ; Die Einbettung von                                                                     Bilder und Videos; Farbänderung; Importieren von Fronts; Verschiebung´von Elemente zum Beispiel mit                                                                       "margin-left = "
- https://www.youtube.com/watch?v=2D8ScEGFa74 : Einbinden von CSS.Datei; Farbänderung; Öffnen der Browseransicht; Anpassung der mobilen Übersicht. Hier wurde eine Seite als Beispiel erstellt.
- https://www.youtube.com/watch?v=h5nEfuxdVS0 : HTML-Grundlagen. Überschriften; Listen; Zeilenumbrüche etc
- https://www.youtube.com/watch?v=PkZNo7MFNFg : "Beginners Javascript course" - Ein Standalone Video. Nur Teilelemente wurde hier angeschaut. Da es eine                                                                 Art Einarbeitungspacket für Javascript darstellt. 
- Bootstrap Studio
- Visual Studio code


-Pitch/Demo-video für IOS APP -JOY- :
Link: https://www.youtube.com/watch?v=qd4YGj0H4Wg

