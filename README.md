# Basic tickting system databace
## This database does not have any encryption or authentication it is <b>not</b> ment for commercial use just a basic concept.

This database is designed for a very bacic school ticketing system for help desks. <br>The data that it takes is:
- Name
- Problem description
- Ticket ID
- Room Number
- Status
### Request Types | Endpoints
### Add

This endpoint is a POST request. It will add a ticket to the databace. The address for this endpoint is "http://mywebserver.com:3000/add". The request format to add a entry to the databace looks like this:
```javascript
{
  "status": "Pennding",
  "ticket": "123",
  "room": "1234",
  "name": "Name",
  "problem": "The problem description"
 }
```
response: Status Code 200
```javascript
{
  "status": "Pennding",
  "ticket": "123",
  "room": "1234",
  "name": "Name",
  "problem": "The problem description"
 }
```

### Get

This endpoint is a GET request. It will send all the data in the databace. All you do to use it is call "http://mywebserver.com:3000/get" and in the body it will send you all the data in json format.
<br>
Responce example:
```javascript
{
  "status": "Pennding",
  "ticket": "123",
  "room": "1234",
  "name": "Name",
  "problem": "The problem description"
 }
```

### Remove

This endpoint is a POST request. It will remove the entry from the databace with the ticket id given. The request will look like "http://mywebserver.com:3000/remove/Ticket id".
<br>
Responce: Satus Code 200 Done

### Set
This endpoint is a POST request. It will change the status of entry from the databace with the new status given. The request will look like "http://mywebserver.com:3000/set".
<br>
Body:
```javascript
{
  "status": "Pennding",
  "ticket": "123"
 }
```
Responce: Status Code 200 Done
### About the databace

All the data in the data in the database is stored in the db.json file in the Endpoints directory.
<br>
Format:
  ```javascript
{
  "status": "Pennding",
  "ticket": "123",
  "room": "1234",
  "name": "Name",
  "problem": "The problem description"
 }
```












