

# Node-Express-Cassandra CRUD sample Application

This is a simple Node-Express CRUD application using Cassandra.

### Configuration

Cassandra: `export CASSANDRA_IP=129.150.70.97`

Express: `app.listen(process.env.PORT || 3000);`

Wercker environment properties:

+ DOCKER\_USERNAME = username for Docker account
+ DOCKER\_PASSWORD = password for Docker account
+ DOCKER\_TAG = tag of the docker image
+ DOCKER\_REPOSITORY = name of the new repository (includes image name)

### How to run

Use Docker link and define alias: **cassandra** for Cassandra service.

Or set Cassandra IP address as environment variable:

	export CASSANDRA_IP=129.150.70.97

To start the Node application:

	npm install
	node app.js

## History

### 1.0.0

- Initial version

## License

The Universal Permissive License (UPL), Version 1.0

## Credits

The user interface layout is based on
[https://github.com/codetrash/nodecrud](https://github.com/codetrash/nodecrud).
