# Tunnels & Trolls Character Sheet Creation API
## RESTful CRUD Node Server for DGM 4790

For this project, I had to build a set of REST APIs using Node and ExpressJS.  The API needed to allow users to Create, Read, Update, and Delete (CRUD) the items.  The server needed implement the following items:

- [x] Mongoose as your data modeling tool
    
    I am using Mongoose to create schemas for storing in a MongoDB. [Character Schema](https://github.com/gibriil/peter-beard-final-rest/blob/master/models/character.model.js) and [General Supply](https://github.com/gibriil/peter-beard-final-rest/blob/master/models/generalsupply.model.js) are examples of using Mongoose Schemas.

- [x] Cloud-based MongoDB as your data store
- [x] At least 3 endpoints to GET data from your server
- [x] At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs
- [x] At least 1 endpoint allowing user to create an item via POST
- [x] At least 1 endpoint allowing user to delete an item via DELETE
- [x] datastore will contain at least 25 items
- [x] app will be deployed to production using some service like Heroku, Digital Ocean, etc.
- [x] All source code will be properly uploaded to GitHub
- [x] ReadMe file will accurately describe the server install process (if any) and how to use the APIs