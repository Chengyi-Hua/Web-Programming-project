# Web-Programming-Projekt
DHBW Mannheim - 3. Semester
- Einarbeitung/Efforts: https://github.com/Chengyi-Hua/Web-Programming-project/blob/main/efforts.md
- Contribution: https://github.com/Chengyi-Hua/Web-Programming-project/blob/main/contributions.md

Da es momentan sehr schwierig ist, Termine bei Psychologen zu bekommen, wäre unserer Meinung nach eine sinnvolle Ergänzung zur App (eine IOS-APP, entwickelt für die Fallstudie) eine Webschnittstelle, mit der User Psychologen (Personen mit entsprechenden Wissensstand) Fragen hinterlassen können und sich Ratschläge zu wichtigen Themen geben lassen können. Zukünftig können wir uns auch vorstellen, AI-Chat-Bots als psychologische Unterstützung einzusetzen.

<br/>

## Deployment and hosting

### Backend deployment
Der Server wurde mit Hilfe von [deno deploy](https://deno.com/deploy) deployed, welches auf das Repository zugreift und den Server nach einem Commit der [server.ts](/backend/server.ts) Datei automatisch aktualisiert. Der Server ist nun unter https://joy-backend.deno.dev/ erreichbar (Routing zu den einzelnen Gefühlslagen über /problems/<stress, trauer, freunde, familie, lernen, sport, other>). 

### Frontend deployment
Das Frontend wurde mithilfe des Befehls `trex run build` kompiliert und auf einem Webserver hochgeladen. Die Website ist unter https://www.projekt.jan-ruedt.de/ erreichbar. 

<br/>

## Demo-Video




https://user-images.githubusercontent.com/96745479/151675120-ae063f60-616b-482e-bb27-43f03638c5bc.mov

<br/>

## Einarbeitung in HTML, CSS, JS durch Erstellung der Landingpage des Fallstudienprojektes (im Repo als "Fallstudie-Infoseite" bezeichnet)

- https://joy-landingpage-design-3969.bss.design

Für das Kennenlernen und Üben von Webprogramming wurde eine Landingpage für das Fallstudienprojekt "JOY" (IOS-App) erstellt. Der Code hierfür ist im Ordner "frontend" hinterlegt.

<br/>

## Verwendung für lokales setup
- ### Schritt 1: Repository klonen 

```bash
git clone https://github.com/Chengyi-Hua/Web-Programming-project.git
```
- ### Schritt 2: Deno Installieren

```bash
Für MacOS (verwende  Homebrew): brew install deno
Für Windows (verwende Powershell): iwr https://deno.land/install.ps1 -useb | iex
```
- ### Schritt 3: Pathkontrolle 
```bash
cd /Users/<user>/Web-Programming-project
```
- ### Schritt 4: Dependencies installieren
```bash
deno run --allow-run --allow-read https://deno.land/x/snel/install.ts
```
- ### Schritt 5: cd backend und starte Server (nicht mehr nötig server ist gehostet)
```bash
cd backend
deno run --allow-all server.ts
```
- ### Schritt 6: In Terminal das frontend starten
```bash
cd /Users/<user>/Web-Programming-project/frontend
trex run start
```
- ### Stelle sicher, dass "trex" und "snel" in der Path sind. z.B. für MacOS
```bash
path+=('/Users/<user>/.deno/bin')
```  


## Mögliche Hürden
**Problem 1:** Die Installation von Deno unter Windows mit der Powershell-Eingabe `iwr https://deno.land/x/install/install.ps1 -useb | iex ` funktioniert nicht.<br>
**Lösung:** Powershell ISE als Administrator ausführen.

<br/>

**Problem 2:** `trex run start` funktioniert nicht. <br>

**Lösung:** Führe zuvor `deno run --allow-run --allow-read https://deno.land/x/snel/install.ts` aus.
Nun kann man mit `trex run start` die Web app starten. (wenn man im richtigen Pfad ist)

<br/>

**Problem 3:** Module fehlen. <br>

**Lösung:** "https://deno.land/x/cors" und "https://deno.land/x/opine" installieren.

<br/>

**Problem 4:** Deployment des Frontend mit [deno deploy](https://deno.com/deploy) wirft einen 502 Error.<br>

**Lösung:** Hosting auf einem eigenen Webserver.

