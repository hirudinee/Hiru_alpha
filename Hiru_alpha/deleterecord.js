let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	
	var insert={};
	insert.id =String(event.id);
	
	ddb.delete({
		TableName: 'ThuvvaTable',
		Key: { 'ID': insert.id }
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
		}
	});


	callback(null, 'Successfully executed');
}