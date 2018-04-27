	let http = require('http');
	const URL = 'http://localhost/bot/json.php';
	bot.api.users.list({token}, (err, response)=>{
		response.members.forEach((user)=>{
			slackUserList[user.id] = user;
		});
	});
	console.log(slackUserList[user.id]);
	console.log(user);
	http.get(URL, (res) => {
	  let body = '';
	  res.setEncoding('utf8');
	  res.on('data', (chunk) => {
		  body += chunk;
	  });

	  res.on('end', (res) => {
		  res = JSON.parse(body);
		  console.log(res[0].total_time_kadou);
	  });
	}).on('error', (e) => {
	  console.log('エラーしてるけど5');
	});