fs = require('fs');

module.exports = {
	setServer: function(server) {
		this.app = server;
	},
	call: function(url) {
		if (this.app) {
			this.app.get(url, function(req, res) {
				var options = {
					encoding: 'utf-8',
					flag: 'r'
				};
				console.log(req.params.data);
				fs.readFile(__dirname + '/../public/json/' + url + '.json', options, function(err, data) {
					if (err) throw err;
					res.setHeader('content-type', 'application/json; charset=utf-8');
					res.end(data, 'utf-8');
				});
			});
			return;
		}
		throw "plz, set server befor call api";
	}
}