let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'ThuvvaTable',
		Key: { 'ID': '003' }
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
			callback(null, data);
		}
	});

}