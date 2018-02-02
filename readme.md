# Verwendete Software

## GIT Clients

- Kommandozeile: https://git-scm.com/downloads
- Empfehlung: IntelliJ verfügt über einen integrierten GIT Client. Dieser setzt jedoch die Installation des Kommandozeilenclients voraus.
- GIT Kraken (noch relativ neu, kostenplfichtig) 

## Entwicklungsumgebung

- Empfehlung: IntelliJ Ultimate (Scala + Typescript) > WebStorm (Typescript)
- MS Visual Code kann Typescript und ist kostenfrei
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

Im folgenden sind die wichtigsten Schritte zusammengefasst.
Für eine ausführliche Erklärung ist das Online Buch [GIT Book Pro](https://git-scm.com/book/en/v2) sehr empfehlenswert.

## Setup

Um über GIT kooperieren zu können, muss zunächst der Benuztername gesetzt werden:

`$ git config --global user.name "Mona Lisa"`

## Workflow

Mehr dazu kann man in der [GitHub Dokumentation](https://help.github.com/articles/setting-your-username-in-git/) finden.

In GIT läuft der Workflow wie folgt ab:

- `git pull` aktualisiert den gewählten Branch
- `git add <filename>` merkt eine Änderung zum Commit vor
- `git commit -m "<commit message>"` Pflegt die markierten Änderungen ein.
- `git push` lädt die eingepflegten Änderungen hoch

Es bietet sich an, neue Änderungen zunächst auf einem eigene `branch` zu beginnen.

- `git checkout -b <branch-name>` legt einen neuen branch an.
- Nun können Änderungen durchgeführt werden.
- `git add .` merkt die Änderunegn für das Commit vor.
- `git commit -m <commit message>` führt den Commit durch
- Wenn das Feature fertig ist, kann es zurück auf den master-Branch gezogen werden:
- `git checkout master` wechselt zurück zur master-Branch.
- `git merge <branch-name>` übernimmt die Änderungen vom eigenen Branch.

# Entwicklung

## Dev Server

Der Dev Server wartet auf Dateiänderungen und übersetzt das Projekt dann neu.
Das ist praktisch für die Entwicklung.

Der Dev Server ist ein Paket, was mit yarn installiert werden kann: 

`yarn add webpack-dev-server --dev`

Der Dev Server wird konfiguriert über die Datei `scripts/webpack-dev-server.js`.
Dort kann auch der Port konfiguriert werden.

Durch einen Eintrag in der `./package.json` unter `scripts` kann der Dev Server über yarn gestartet werden:

package.json: 
```json
"scripts": {
    "build": "./node_modules/.bin/webpack",
    "develop": "node ./scripts/webpack-dev-server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Ausführen mit:

`yarn develop`


## React 

### Links

- Die [offizielle Einführung von React](https://reactjs.org/tutorial/tutorial.html) ist gut zum Kennenlehrnen, verwendet allerdings kein TypeScript.
- Die [React-Dokumentation](https://reactjs.org/docs/hello-world.html) enthält ausführliche Informationen zu React und ist auch für Einsteiger gut geeignet.

### React Components

Komponenten sind die Grundbausteine einer React-Anwendung.

Es bietet sich an, Komponenten in einem Unterverzeichnis `./components` zu speichern.

Beispielkomponente:

```ts
import * as React from "react";

export class AppComponent extends React.Component {
    render() {
        return <div className="app-component">App</div>;
    }
}
```

Die Methode `render()` ist eine abstrakte Methode aus der Klasse `React.Component`, welche angibt, wie die Komponente im DOM dargestellt werden kann.
Da die Methode abstrakt ist, muss sie implementiert werden.

Im `<div>`-Element muss innerhalb der `render()`-Methode der Klassenname mit `className` angegeben werden, da `class` ein reserviertes Wort in TypeScript ist.
Im gerenderten HTML steht später wie gewohnt `class`.

