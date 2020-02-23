# Tunnels & Trolls Character Sheet Creation API
## RESTful CRUD Node Server for DGM 4790

For this project, I had to build a set of REST APIs using Node and ExpressJS.  The API needed to allow users to Create, Read, Update, and Delete (CRUD) the items.  The server needed implement the following items:

- [x] Mongoose as your data modeling tool

    I am using Mongoose to create schemas for storing in a MongoDB. [Character Schema](https://github.com/gibriil/peter-beard-final-rest/blob/master/models/character.model.js) and [General Supply](https://github.com/gibriil/peter-beard-final-rest/blob/master/models/generalsupply.model.js) are examples of using Mongoose Schemas.

- [x] Cloud-based MongoDB as your data store

    Due to using Heroku, I unfortunately had to whitelist all IPs in order for the deployed app to access the mongoDB Atlas cloud. Connections is made with Mongoose in [index.js](https://github.com/gibriil/peter-beard-final-rest/blob/master/index.js)

- [x] At least 3 endpoints to GET data from your server

    I have 2 GET endpoints in [character.route.js](https://github.com/gibriil/peter-beard-final-rest/blob/master/routes/character.route.js) and 1 endpoint in [generalsupply.route.js](https://github.com/gibriil/peter-beard-final-rest/blob/master/routes/generalsupply.route.js). Details on the endpoints will be given below.

- [x] At least 1 endpoint allowing user to update an item via PUT or PATCH HTTP verbs

    I am using PATCH in [character.route.js](https://github.com/gibriil/peter-beard-final-rest/blob/master/routes/character.route.js). I chose to use PATCH instead of PUT because I wanted to semantically convey that one thing can be updated at a time without updating the whole character model in the request.

- [x] At least 1 endpoint allowing user to create an item via POST

    POST is used in [character.route.js](https://github.com/gibriil/peter-beard-final-rest/blob/master/routes/character.route.js) to allow creation of the character sheet. Instructions on using the endpoint will be provided below.

- [x] At least 1 endpoint allowing user to delete an item via DELETE

    DELETE can be used to delete on Character Sheet at a time from the database. Endpoint can be found in [character.route.js](https://github.com/gibriil/peter-beard-final-rest/blob/master/routes/character.route.js).

- [x] datastore will contain at least 25 items

    There are 14 items in the *General Supplies* collection. These items can be retrieved the the code, explained below, or on the deployed app at [https://pbeard-tunnels-and-trolls.herokuapp.com/generalsupply](https://pbeard-tunnels-and-trolls.herokuapp.com/generalsupply). All data for character sheets can be found in the *Characters* collection and the route for the deployed app is [https://pbeard-tunnels-and-trolls.herokuapp.com/characters](https://pbeard-tunnels-and-trolls.herokuapp.com/characters).

- [x] app will be deployed to production using some service like Heroku, Digital Ocean, etc.

    I decided to use Heroku for this portion because it seems to be the easiest for this piece. I the continuous deployment made the most sense to use with Heroku. The deployed app is at [https://pbeard-tunnels-and-trolls.herokuapp.com/](https://pbeard-tunnels-and-trolls.herokuapp.com/). There is no default route as this is not intended to be used without a separate front end.

- [x] All source code will be properly uploaded to GitHub

    Github is used for remote git storage. [View Github repo](https://github.com/gibriil/peter-beard-final-rest)

- [x] ReadMe file will accurately describe the server install process (if any) and how to use the APIs

    The ReadMe can be viewed at on the Github repo main page or the code can be viewed at [https://github.com/gibriil/peter-beard-final-rest/blob/master/README.md](https://github.com/gibriil/peter-beard-final-rest/blob/master/README.md). Instructions and install process below.

## Use Documentation