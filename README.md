## Das Password Manager Backend

Das Password Manager is a open source password manager extension for [Google Chrome](https://www.google.com/chrome). So please feel free to copy, modify the source code and suggest new changes.

This project is the backend of Das Password Manager. The frontend section of the project is [here](https://github.com/bijaydas/das-pm-dashboard)

To check how to set up the project, read on.

> Das PM is still in early development, and that includes the documentation. Any questions you have that aren't already address in the documentation should be opened as issues so they can be appropriately addressed in the documentation.

## Requirements
1. [Node.js](https://nodejs.org/en/download/)
2. [Postgresql](https://www.postgresql.org/download/)
3. [Postman (Optional) (For Development/testing only)](https://www.postman.com/)
4. [NGROK (Optional) (For Development/testing only)](https://ngrok.com/download)
## Installation
There is two section of the project
1. Installing the the dashboard/admin panel and Chrome extension
2. Installing the API(s) so that the Chrome extension can talk to the database.

### Here we will install the backend on our local machine
```bash
$ git clone https://github.com/bijaydas/das-pm-backend.git
$ cd das-pm-backend
$ npm install
$ cp .env.example .env
$ npx sequelize-cli db:migrate
```

> Now open the .env file and write add your credentials. Almost all of the variables are self-explanatory. `x-token` is the token value which will be checked every time the API has been called.

There are collection and environment file in the postman folder in the project's home directory. Import those in your Postman.

Now it's time to start the project by `npm start` and open Postman and define the url and `x-token` in the environmant and run the API(s).

## Contributing
Wanna contribute to the project? Awesome, the guidlines are coming soon.

## Developers
[Bijay Das](https://github.com/bijaydas)
