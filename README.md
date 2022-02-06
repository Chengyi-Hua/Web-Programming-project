# Web-Programming-Projekt
DHBW Mannheim - Semester.3
- Für Einarbeitung/efforts siehe https://github.com/Chengyi-Hua/Web-Programming-project/blob/main/Efforts.md
- Für Contribution siehe https://github.com/Chengyi-Hua/Web-Programming-project/blob/main/contributions.md

Da es momentan sehr schwierig ist, Termine bei Psychologen zu bekommen, wäre unserer Meinung nach eine sinnvolle Ergänzung zur App (eine IOS-APP, entwickelt für die Fallstudie) eine Webschnittstelle, mit der User Psychologen (Personen mit entsprechenden Wissensstand) Fragen hinterlassen können und sich Ratschläge zu wichtigen Themen geben lassen können. Zukünftig können wir uns auch vorstellen AI-Chat-Bots als psychologen einzusetzen.

- Demo-Video




https://user-images.githubusercontent.com/96745479/151675120-ae063f60-616b-482e-bb27-43f03638c5bc.mov




### Html, CSS, JS Efforts (im Repo als "Fallstudie-Infoseite" bezeichnet)

- https://joy-landingpage-design-3969.bss.design

Für das Kennenlernen und Üben mit Web-app Programming wurde eine Landingpage für JOY (IOS Version) erstellt. Dabei wurde keine Links wie zum Beispiel Log-in oder Social Media hinterlegt.   



# Verwendung für lokales setup
#### Schritt 1: Repository klonen 
Windows/Mac:
```bash
git clone https://github.com/Chengyi-Hua/Web-Programming-project.git
```
- #### Schritt 2: Deno Installieren

```bash
Für MacOS (verwende  Homebrew): brew install deno
Für Windows (verwende Powershell): iwr https://deno.land/install.ps1 -useb | iex
```
- #### Schritt 3: Pathkontrolle 
```bash
cd /Users/<user>/Web-Programming-project
```
- #### Schritt 4: Dependencies installieren
```bash
deno run --allow-run --allow-read https://deno.land/x/snel/install.ts
```
- #### Schritt 5: cd backend und starte Server
```bash
cd backend
deno run --allow-all server.ts
```
- #### Schritt 6: In Terminal das frontend starten
```bash
cd /Users/<user>/Web-Programming-project/frontend
trex run start
```
- #### Stelle sicher, dass "trex" und "snel" in der Path sind. z.B. für MacOS
```bash
path+=('/Users/<user>/.deno/bin')
```  


## Mögliche Hürden
Problem 1: Das Installieren. für Windows (Powershell) "iwr https://deno.land/x/install/install.ps1 -useb | iex" funktioniert nicht.
Lösung: Powershell ISE als administrator öffnen und "iwr https://deno.land/x/install/install.ps1 -useb | iex" ausführen.

Problem 2: "trex run start" funktioniert nicht.
Lösung: Um damit arbeiten zu können, führe "deno run --allow-run --allow-read https://deno.land/x/snel/install.ts" aus.
Nun kann man mit "trex run start" die Web app starten. (wenn man im richtigen Pfad ist)

Problem 3: Module fehlen
Lösung: "https://deno.land/x/cors/mod.ts" und "https://deno.land/x/opine@2.1.1/mod" installieren


