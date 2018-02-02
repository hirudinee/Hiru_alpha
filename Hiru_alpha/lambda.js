let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	var insert = {};
	insert.id = String(event.id);
	insert.name = String(event.name);
	insert.year = String(event.year);

	ddb.put({
		TableName: 'Movies',
		Item: {
			'ID': insert.id,
			'Year': insert.year,
			'Title': insert.name,
			"info":{
            "plot": "Nothing happens at all.",
            "rating": 0
        }
		}
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
		}
	});


	callback(null, 'Successfully executed');
}