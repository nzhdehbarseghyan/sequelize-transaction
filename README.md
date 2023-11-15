# Sequelize data transfer

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Table of contents
* [Introduction](#Introduction)
* [Requirements](#Requirements)
* [Set Up](#Set-Up)
* [Technical Notes](#Technical-Notes)
* [Documentation](#Documentation)


## Introduction
This project leverages Sequelize, a powerful ORM (Object-Relational Mapping) tool,
to seamlessly transfer and manage data within an SQLite database. By employing Sequelize's
intuitive features, the project ensures efficient and organized handling of data transactions,
offering a robust solution for SQLite database interactions.


## Requirements

- Node v16+
- NPM
- Sequelize
- SQlite


## Set Up
1. Begin by establishing a local repository for the designated folder.

2. Navigate to the root directory of the repository and execute `npm install` to fetch all necessary dependencies.

3. Proceed with `npm run seed` to populate the local SQLite database. **Caution: This action will erase the existing database if present.** The database is stored in a local file named database.sqlite3.

4. Conclude the setup by executing `npm start`, initiating both the server and the React client.


## Technical Notes
- The server utilizes [nodemon](https://nodemon.io/), which automatically restarts upon file modifications and saves.

- SQLite serves as the database provider, storing data in a local file within your repository titled `database.sqlite3`.

- The server operates on port 3001.

## Documentation
For API documentation visit [here]()