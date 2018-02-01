let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	var insert={};
	insert.id =String(event.id);
	insert.name=String(event.name);

	ddb.put({
		TableName: 'ThuvvaTable',
		Item: { 'ID': insert.id, 'Name': insert.name }
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
		}
	});


	callback(null, 'Successfully executed');
}