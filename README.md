# Node-Express-Cassandra CRUD sample Application

This is a simple Node-Express CRUD application using Cassandra.

### Configuration

Cassandra connection configuration requires `CASSANDRA_IP` environment variable or `cassandra` link alias:

	const client = new cassandra.Client({contactPoints: [process.env.CASSANDRA_IP || 'cassandra']});

Express configuration requires `PORT` environment variable. The default port is 3000: 	

	app.listen(process.env.PORT || 3000);

Wercker environment properties to push image to repository:

+ DOCKER\_USERNAME = username for Docker account
+ DOCKER\_PASSWORD = password for Docker account
+ DOCKER\_TAG = tag of the docker image
+ DOCKER\_REPOSITORY = name of the new repository (includes image name)

### How to run

In Docker environment use Docker link and define alias: **cassandra** for Cassandra service.

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
[codetrash/nodecrud](https://github.com/codetrash/nodecrud).
