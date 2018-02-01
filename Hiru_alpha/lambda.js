let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.put({
		TableName: 'ThuvvaTable',
		Item: { 'ID': '001', 'Name': 'hiru' }
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
		}
	});

	ddb.delete({
		TableName: 'ThuvvaTable',
		Key: { 'ID': '001' }
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
		}
	});



	callback(null, 'Successfully executed');
}