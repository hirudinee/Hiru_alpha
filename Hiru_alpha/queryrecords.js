let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.query({
		TableName: 'ThuvvaTable',
		ExpressionAttributeValues: {
			':test': '002'
		},
		KeyConditionExpression: 'ID = :test',
		FilterExpression: 'test01 = :test'
	}, function (err, data) {
		if (err) {
			console.log('error : ', err);
			callback(null, err);
		} else {
			console.log('data success: ', data);
			console.log('test');
			callback(null, data);
		}
	});

}