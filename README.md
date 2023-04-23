# Mutation

Backend project that detects if a person has genetic differences
based on its DNA sequence.

Developing in NodeJs and express.

## Installation

Create a database in MySQL from this script file

```bash
  script_dbmutations.sql
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3001`

`DB_HOST='localhost'`

`DB_DATABASE='dbmutatios'`

`DB_USER='root'`

`DB_PASSWORD=''`

`DB_DIALECT='mysql'`

## Run Locally

Clone the project

```bash
  git clone https://gitlab.com/razadis/teamknowlogy-test-backend.git
```

Go to the project directory

```bash
  cd teamknowlogy-test-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## API Reference

#### Know if there is a mutation

Considering that the proposed configuration was left in the .env file, the CRUD host is the following:

```http
  http://localhost:3001
```

```http
  POST /mutation

  In the body:
  {
    "dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
  }
```

#### Get stats

```http
  GET /mutation/stats
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [@razadi](https://github.com/razadi)
