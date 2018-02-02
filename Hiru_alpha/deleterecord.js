let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
const rds = new SL.AWS.RDS(connectionManager);
const s3 = new AWS.S3();
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
const sns = new AWS.SNS();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	var insert = {};
	insert.id = String(event.id);

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