# Web-Programming-Projekt
DHBW Mannheim - Semester.3

Da es momentan sehr schwierig ist, Termine bei Psychologen zu bekommen, wäre unserer Meinung nach eine sinnvolle Ergänzung zur App (eine IOS-APP, entwickelt für die Fallstudie) eine Webschnittstelle, mit der User Psychologen (Personen mit entsprechenden Wissensstand) Fragen hinterlassen können und sich Ratschläge zu wichtigen Themen geben lassen können. Zukünftig können wir uns auch vorstellen AI-Chat-Bots als psychologen einzusetzen.

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
deno run --allow-all server.ts
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


# Deno-Einarbeitung/Efforts
Lernmaterial:
- Youtube
- Unterrichtseinheiten 
- Denoblog: https://deno.com/blog für aktuelle News

Lernmaterial für TypeScript
- https://www.tutorialsteacher.com/typescript/typescript-if-else

### Mögliche Hürden
Problem 1: Das Installieren. für Windows (Powershell) "iwr https://deno.land/x/install/install.ps1 -useb | iex" funktioniert nicht.
Lösung: Powershell ISE als administrator öffnen und "iwr https://deno.land/x/install/install.ps1 -useb | iex" ausführen.

Problem 2: "trex run start" funktioniert nicht.
Lösung: Um damit arbeiten zu können, führe "deno run --allow-run --allow-read https://deno.land/x/snel/install.ts" aus.
Nun kann man mit "trex run start" die Web app starten. (wenn man im richtigen Pfad ist)

Problem 3: Dependencies fehlen bzw. es werden module benötigt.
Lösung: "https://deno.land/x/cors/mod.ts" und "https://deno.land/x/opine@2.1.1/mod" installieren

# Veröffentlichung von Deno Modulen
https://deno.land/x/random_string@1.0.1
Es wird ein Satz (String) aus eine Reihe von Sätzen zufällig zurückgegeben.

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
- https://www.w3schools.com : Lernkurse und Sessions über verschiedene Themen
- https://www.youtube.com/watch?v=dOgFkZiVC8w :  "Wie sollen Elemente plaziert werden" ; "Arbeiten man mit Container"; "Wie werden Videos hinzugefügt"; "Wie werden Farben verändert"
- https://www.youtube.com/watch?v=2D8ScEGFa74 : "Einbinden von CSS.Datei" ; "Öffnen der Browseransicht"
- https://www.youtube.com/watch?v=h5nEfuxdVS0 : "HTML-Grundlagen" - Überschriften; Listen; Zeilenumbrüche
- https://www.youtube.com/watch?v=PkZNo7MFNFg : "Beginners Javascript course" 
- Bootstrap Studio
- Visual Studio code


-Pitch/Demo-video für IOS APP -JOY- :
Link: https://www.youtube.com/watch?v=qd4YGj0H4Wg

