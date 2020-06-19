const http = require('http');
const express = require('express');
const port = 3000;

// This function creates an Express app to emulate Google Cloud
// Platform's Cloud Function httpsTrigger[s] then registers all of
// the Cloud Function handlers with the Express app. We'll be passing in
// all of the exports from our index.js file as the "functions" parameter
// below.
const setUpApp = (functions) => {
	const newApp = express();

	for (let func in functions) {
		console.log(`registered http://localhost:${port}/${func}`);

		// Create a fake "httpsTrigger" for every export, handling get
		// requests.
		newApp.get(`/${func}`, functions[func]);
	}
	return newApp;
};

// Create the Express app with all of the Cloud Function handlers
// and add it as a listner on our Cloud Function emulation server.
const myApp = setUpApp(require('../index.js/index.js.js'));
const server = http.createServer(myApp);
server.listen(port);

// Save the initial app so we can remove it from the server when
// there are Webpack Hot Module Reload updates.
let currentApp = initialApp
if (module.hot) {
  module.hot.accept('../index.js', () => {
    // Create a new Express app with the updated Cloud Function 
    // handlers.
    const newApp = setUpApp(require('../index.js/index.js.js'))
    
    // Remove the old Express app.   
    server.removeListener('request', currentApp)
    
    // Register the new app with the server.
    server.on('request', newApp)
    
    // Save the current app so we can remove it when there are 
    // updates.
    currentApp = newApp
  })
}