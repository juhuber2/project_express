# Protokoll zum Projekt **Express.js**
##### im Rahmen des Faches 5ABI* WMC Klewein 2425 von Jürgen Huber (5ACIF) 
---

## ✅ Grundlegendes  

- Zum Starten des Servers: node server.js  
- Im Browser http://localhost:3000 eingeben und dann das jeweilige Untverzeichnis hinzufügen

---

## 🧩 Middleware

- ✅ **JSON-Body Parser**  
Middleware mit `express.json()` zur Verarbeitung von JSON-Daten in `req.body`

- ✅ **Statische Dateien**  
Middleware mit `express.static('public')` zum Bereitstellen von Dateien aus dem `public`-Ordner (z. B. HTML, CSS, Bilder)  
Screenshot (index.html wird auotmatisch aufgerufen):  
![static --> index](images/img_12.png)

- ✅ **Logging mit Morgan**  
Logging-Middleware für Express. HTTP-Anfragen werden in der Konsole protokolliert.
![Morgan - Logger](images/img_4.png)


---

## 🚦 Routing

- 🟢 **GET /data1**  
Gibt den Text **"Hallo Welt"** im Browser aus  
Screenshot:  
![get1](images/img_1.png)


- 🟢 **GET /data2**  
Gibt die Inhalte der Datei `fileTest.json` im JSON-Format zurück  
Screenshot:  
![get2](images/img_2.png)

- 🟡 **POST /api/data1**  
Empfängt JSON-Daten und gibt eine HTML-Seite als Antwort zurück. Getestet mit Postman.  
Screenshot:  
![post](images/img_3.png)

---

## 🚀 Serverstart

- Mit `app.listen(port, ...)` wird der Server gestartet und hört auf Anfragen unter z. B. `http://localhost:3000`

---

## Logging



## 📁 Projektstruktur

```bash
mein-projekt/
├── server.js
├── fileTest.json
└── public/
    ├── index.html
