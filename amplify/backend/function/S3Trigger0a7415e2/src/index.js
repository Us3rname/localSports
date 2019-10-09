exports.handler = function (event, context) { //eslint-disable-line
  const AWS = require('aws-sdk');
  const ddb = new AWS.DynamoDB.DocumentClient();


  ddb.put({
    TableName: 'Game',
    Item: {
      id: '1234-3456-7890',
      gameDay: '2019/10/08T20:00:00',
      homeTeam: 'De aanjagers',
      awayTeam: 'Rood/Wit',
      sportshall: 'Omnium',
      hall: 'Hal 1',
      referee: 'Scheidsrechter'
    },
  });


  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  const key = event.Records[0].s3.object.key; //eslint-disable-line
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
  context.done(null, 'Successfully processed S3 event'); // SUCCESS with message
};
