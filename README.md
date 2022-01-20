# Web-Programming-project
DHBW Semester 3. Webapp 

## Fallstudie
In der Fallstudie wurde eine App entwickelt, die Menschen mit einem stressigen Alltag oder Leuten, die sich generell mehr mit ihrer mentalen Gesundheit beschäftigen möchten, einen persönlichen mobilen psychologen bereitstellt. Dieser bietet zahlreiche Funktionen, beispielsweise kann man sich durch tägliche Quotes motivieren und aufmuntern lassen, Tagebuch führen und durch tägliche Aufgaben sein Selbstbewusstsein erweitern und sich persönlich weiterentwickeln.

Hinführung

-Wireframe:
Link: https://miro.com/app/board/uXjVOb7k0fk=/

-Mockup:
Link: https://www.figma.com/file/X2edvrJbaVunssM9CeGrcf/JOY-Mock-up?node-id=0%3A1

-Pitch/Demo-video:
Link: https://www.youtube.com/watch?v=qd4YGj0H4Wg

-Daten Dev: 

<img width="597" alt="image" src="https://user-images.githubusercontent.com/96745479/149769309-337efd8d-b5aa-4a86-8e03-869d0a65ccb9.png">

zentrale (cloudbasierte), persistente Datenspeicherung




## Web-Programming-project
Da es momentan sehr schwierig ist, Termine bei Psychologen zu bekommen, wäre unserer Meinung nach eine sinnvolle Ergänzung zur App eine Webschnittstelle, mit der die User mit Psychologen (Personen mit entsprechenden Wissensstand) chatten können und sich in Gruppen austauschen können. Zukünftig können wir uns auch vorstellen AI-Chat-Bots als psychologen einzusetzen.


## Landingpage: html, css, js efforts
Eine Landingpage als Übersichts-onepager für JOY wird erstellt. Dabei wird keine Links oder Weiterleitende Features wie zum Beispiel Log-in oder Social Media hinterlegt. 
Dabei haben wir beschlossen die Grunddatei für Fronts; Farben; Boxgrößen aus Boostrape Studio zu nehmen.  

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

## How to use
### Step 1: Clone repository
```bash
git clone https://github.com/Chengyi-Hua/Web-Programming-project.git
```
### Step 2: Install Deno
for MacOS use Homebrew
```bash
brew install deno
```
### Step 3: cd to the repository
```bash
cd /Users/<user>/Web-Programming-project
```
### Step 4: install necessary dependencies
```bash
deno run --allow-run --allow-read https://deno.land/x/snel/install.ts
```
### Step 5: cd backend and run server.ts
```bash
cd backend
deno run --allow-all server.ts
```
### Step 6: open new terminal, cd to frontend and run with trex
```bash
cd /Users/<user>/Web-Programming-project/frontend
trex run start
```
make sure trex and snel are added to your PATH
```bash
path+=('/Users/<user>/.deno/bin')
```  

## Deno-Einarbeitung und efforts
Lernmaterial:
- Youtube
- Unterrichtseinheiten 
- Denoblog: https://deno.com/blog für aktuelle News

Problem 1: Download. für Windows habe ich in Powershell "iwr https://deno.land/x/install/install.ps1 -useb | iex" eingegeben und es hat nicht geklappt. 
Lösung: Powershell ISE als administrator öffnen und "iwr https://deno.land/x/install/install.ps1 -useb | iex" eingeben - hat geklappt! :)

Problem 2.1: es gibt Sachen die man noch installieren sollte, um mit svelte zu arbeiten z.B. "deno run --allow-run --allow-read https://deno.land/x/snel/install.ts" 
nur wenn man das runtergeladen hat, kann man mit "trex run start" die gewünschte Web app starten. (wenn man im richtigen Pfad ist)

Problem 2.2: Es muss "https://deno.land/x/cors/mod.ts" modul installiert werden. Ebenso wie "https://deno.land/x/opine@2.1.1/mod"

Stand 19.01.2022: Frage? kann nun die Webapp aufrufen, jedoch gibt es noch Probleme. dann die Rückgabe aus Backend nicht mehr bekommen. Wisst ihr noch wie genau wir da vorgegangen sind? Ich meine Code-Basis ist da gleiche, gab es Befehle in der Console, die ich verpasst habe? 


## Svelte Einarbeitung
How to generate a svelte app:
- https://www.youtube.com/watch?v=lnpdn2rE2N8
- 

