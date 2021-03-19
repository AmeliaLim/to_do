![license shield](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

# Aphy's Post-it Note to do list :bookmark_tabs:	
An alternative way of developing a to-do-list app that is focused on limiting user's tendency to list a ton of tasks that is for them unproductive, by introducing Post-it Notes. 

## How it works
User will list down the 5 most important goals for them for the week and check it off once it's done. 


## Motivation 
This is a student project only for the purpose of learning, which is a part of the 3 month web development course organised by [INCO Academy](https://www.inco.org.au/incode)

## Demo 
![Demo]

## Technologies/Frameworks used:

- HTML, CSS, JavaScript, JQuery
- Node, Express, EJS 
- PostgreSQL

## Installation

Download or clone the repo and run the following in the same folder.

```zsh
npm install
```

## Getting Started

### 1. Create .env file

```
PORT=YOUR_PORT_NUMBER

POSTGRES_PORT=YOUR_POSTGRESQL_PORT
POSTGRES_DATABASE="todo"
POSTGRES_USERNAME="your_postgresql_username"
POSTGRES_PASSWORD="your_postgresql_password"
```

### 2. Open PostgreSQL and run the following scripts

This will create the database, create tables, and seed the tables.

```zsh
npm run create_database
```

```zsh
npm run create_tables
```

```zsh
npm run seed_tables
```

### 3. Start up the app

```zsh
npm run dev
```
## Licence 
![license shield](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## Acknowledgements

- Harry Aydin
- INCO Academy
