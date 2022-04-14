const functions = require("firebase-functions");

const {geocodeRequest} = require('./geocode')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.geocode = functions.https.onRequest((request, response) => {
   
    geocodeRequest(request, response)
 });
