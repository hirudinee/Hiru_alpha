let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.update({
		TableName: 'ThuvvaTable',
		ExpressionAttributeNames: { '#name': 'ID' },
		ExpressionAttributeValues: { ':ex': 1 },
		UpdateExpression: 'set # S :',
		ConditionExpression: '#name < :ex',
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});


	callback(null, 'Successfully executed');
}





















