const express = require('express');  //Lädt das Express-Framework
const morgan = require('morgan');  //Lädt Morgan
const app = express();
const port = 3000;
const daten = require('./fileTest.json');


// Middleware für JSON-Body - wandelt JSON in req.body um
app.use(express.json());

//Middleware damit statische Dateien im "public"-Ordner bereitgestellt werden
app.use(express.static('public'));

// Middleware Morgan - Logging aktivieren
app.use(morgan('dev'));  //Aktiviert Morgan im "dev" Modus (zeigt Methode, URL, Statuscode, Antwortzeit)

//Beispiel für Routing - GET Route:
//Variante 1: Ausgabe "Hallo Welt" im Browser
app.get('/data1', (req, res) => {
    res.send("Hello Welt");
})

//Variante 2: Ausgabe der JSON-Datei fileTest.json
app.get('/data2', (req, res) => {
    res.json(daten);
})


//Beispiel für Routing - POST Route:
//Daten empfangen und als HTML zurückgeben
app.post('/api/data1', (req, res) => {
  const daten = req.body;

  const htmlAntwort = `
    <html>
      <head><title>Datenanzeige</title></head>
      <body>
        <h1>Gespeicherte Daten</h1>
        <p><strong>Name:</strong> ${daten.name}</p>
        <p><strong>Klasse:</strong> ${daten.klasse}</p>
      </body>
    </html>
  `;

   res.send(htmlAntwort);
  });


//Server Listen
app.listen(port, () => {
   console.log(`Server läuft auf http://localhost:${port}`);
});