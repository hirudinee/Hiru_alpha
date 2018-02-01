let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.query({
		TableName: 'ThuvvaTable',
		ExpressionAttributeValues: {
			':test': '002'
		},
		KeyConditionExpression: 'ID = :test',
		FilterExpression: 'ID = :test'
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
		} else {
			console.log('data : ', data);
			callback(null, data);
		}
	});

}