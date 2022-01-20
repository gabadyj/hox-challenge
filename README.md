<h1 align="center">Hox Challenge</h1>
<p align="center">Product management and user authentication</p>

## Running the application

To get started, you must clone the project from GitHub, choose a directory and run the following command

```shell
git clone https://github.com/gabadyj/hox-challenge.git
```

<br />

#### Install the dependencies

Run the command below in your terminal

```shell
yarn
```

The yarn command will install all project dependencies

<br />

#### Connecting to the database

Create a PostgreSQL database, the specs like name, port, database name and password are in the docker-compose.yaml file
Then run the command below

```shell
docker-compose up -d
```

Docker Compose will launch the container

<br />

#### Migrations

Run the following command to create the tables in the database that was created

```shell
yarn typeorm migration:run
```

<br />

#### Running the server

The command below will start the server on port 3333

```shell
yarn dev:server
```

<br />

### Run the docs

```shell
npx serve
```

Will run on http://localhost:3000/docs/
