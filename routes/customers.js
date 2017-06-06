var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: [process.env.CASSANDRA_IP || 'cassandra']});
client.connect(function(err, result){
	console.log('customers: cassandra connected');
});


/*
 * GET users listing.
 */
exports.list = function(req, res){

	console.log('customers: list');
	client.execute('SELECT * FROM people.subscribers',[], function(err, result){
		if(err){
			console.log('customers: list err:', err);
			res.status(404).send({msg: err});
		} else {
			console.log('customers: list succ:', result.rows);
			res.render('customers', {page_title:"Customers - Node.js", data: result.rows})
		}
	});

};

exports.add = function(req, res){
  res.render('add_customer',{page_title:"Add Customers - Node.js"});
};

exports.edit = function(req, res){

    var id = req.params.id;


	console.log('customers: edit');

	client.execute("SELECT * from people.subscribers WHERE id = " + id + " ALLOW FILTERING",[], function(err, result){
		if(err){
			console.log('customers: edit err:', err);
			res.status(404).send({msg: err});
		} else {
			console.log('customers: edit succ:');
			res.render('edit_customer',{page_title:"Edit Customers - Node.js", data: result.rows});
		}
	});

};

/*Save the customer*/
exports.save = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));

	console.log('customers: save');

	client.execute("INSERT INTO people.subscribers (id, name, address, email, phone) VALUES (now(), '" + input.name + "', '" + input.address + "', '" + input.email + "', '" + input.phone + "')",[], function(err, result){
		if(err){
			console.log('customers: add err:', err);
			res.status(404).send({msg: err});
		} else {
			console.log('customers: add succ:');
			res.redirect('/customers');
		}
	});
};

exports.save_edit = function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;


	console.log('customers: save_edit');

	client.execute("UPDATE people.subscribers set name = '" + input.name + "', address = '" + input.address + "', email = '" + input.email + "', phone = '" + input.phone + "' WHERE id = " + id,[], function(err, result){
		if(err){
			console.log('customers: save_edit err:', err);
			res.status(404).send({msg: err});
		} else {
			console.log('customers: save_edit succ:');
			res.redirect('/customers');
		}
	});

};


exports.delete_customer = function(req,res){

    var id = req.params.id;

	console.log('customers: delete');

	client.execute("DELETE FROM people.subscribers WHERE id = " + id,[], function(err, result){
		if(err){
			console.log('customers: delete err:', err);
			res.status(404).send({msg: err});
		} else {
			console.log('customers: delete succ:');
			res.redirect('/customers');
		}
	});

};


