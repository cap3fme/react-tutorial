# Verwendete Software

## GIT Clients
- Kommandozeile: https://git-scm.com/downloads
- Empfehlung: IntelliJ verfügt über einen integrierten GIT Client. Dieser setzt jedoch die Installation des Kommandozeilenclients voraus.
- GIT Kraken (noch relativ neu, kostenplfichtig) 

## Entwicklungsumgebung
- Empfehlung: IntelliJ Ultimate (Scala + Typescript) > WebStorm (Typescript)
- MS Visual Code kann Typescript
- Eclipse Unterstützung?!

## Tools zur Entwicklung
- node.js als Runtime für Javascript
- TypeScript: Erlaubt statische Typsicherheit in Javascript
- Webpack: Führt Build-Tasks aus
- yarn: Packagemanager für node.js
	- `yarn add <package-name>` fügt Pakete zu an das aktuelle Projekt
	- `yarn add @types/<package-name>` installiert die entsprechenden Typescript Bindings
	- `yarn` lädt die benötigten Projekte herunter

# Vorbereitung

Mit diesen Schritten kann das Projekt geöffnet und für die Entwicklung vorbereitet werden:

- node.js installieren
- yarn installieren
- IDE installieren
- Projekt öffnen
- `yarn` ausführen

Unter Windows kann es zu folgender Warnung kommen, welche jedoch ignoriert werden kann:

```
yarn install v1.3.2
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.3: The platform "win32" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 14.31s.
```

# Versionskontrolle

In GIT läuft der Workflow wie folgt:
- `git pull` aktualisiert den gewählten Branch
- `git add <filename>` merkt eine Änderung zum Commit vor
- `git commit -m "<commit message>"` Pflegt die markierten Änderungen ein.
- `git push` lädt die eingepflegten Änderungen hoch
