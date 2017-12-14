# droppCafe
This app is a test-quest.

## Technologies
1. React, react-router on client-side
2. CouchDB-cli on server-side
3. Developed and tested for desktop Google Chrome(last version)

## How to launch
1. Download ZIP-file and extract or clone through git
2. Download NodeJS and install it. To do it go to https://nodejs.org/en/
2. Get into main directory and write in teminal:
```sh
npm install
```
3. After go to http://couchdb.apache.org/ and follow instructions for your OS
4. CouchDB must be running on http://localhost:5984
5. Go to http://localhost:5984/_utils/ (somewhere about)
6. Create a database with name 'invites'
7. Go to http://localhost:5984/_utils/#_config/nonode@nohost/cors
8. Disable CORS
9. Choose checkbox with label 'All domains ( * )'
7. Then in main project directory write in teminal:
```sh
npm start
```
8. Test it!
