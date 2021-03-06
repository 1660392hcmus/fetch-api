const fetch = require("node-fetch");
// A URL returns JSON data.
var url =
  "https://rawgit.com/o7planning/webexamples/master/_testdatas_/json-simple-data.json";

function doGetJSON() {
  // Call fetch(url) with default options.
  // It returns a Promise object:
  var aPromise = fetch(url);

  // Work with Promise object:
  aPromise
    .then(function(response) {
      console.log("OK! Server returns a response object:");
      console.log(response);

      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      // Get JSON Promise from response object:
      var myJSON_promise = response.json();

      // Returns a Promise object.
      return myJSON_promise;
    })
    .then(function(myJSON) {
      console.log("OK! JSON:");
      console.log(myJSON);
    })
    .catch(function(error) {
      console.log("Something error:");
      console.log(error);
    });
}

doGetJSON();
