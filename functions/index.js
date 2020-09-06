const functions = require('firebase-functions');
const express = require('express');
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get("/:casinoId/:ticketId", (req, res) => {
    res.send(`Haaaaalo. ${req.params[0]}, ${req.query}`);
    console.log(req.query, req.params[0], req.params.casinoId);
});

exports.app = functions.https.onRequest(app);

exports.showTicketInfo = functions.https.onRequest((req, res) => {
    res.send(`Your parameters: Casino:`);
    console.log("=================");

    console.log(req.params);
    console.log(req.params[0]);
    console.log(req.url);
    console.log(req.path);
    console.log(req.originalUrl);
    console.log("-----------------");
    console.log(req.query);
});

exports.sayHi = functions.https.onRequest((req, res) => {
    res.send("Hello~ :D");
});