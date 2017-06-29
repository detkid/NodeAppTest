const TERGET_URL = 'http://127.0.0.1:1880';
const casper = require('casper').create();

casper.start(TERGET_URL, function(){
	this.echo(casper.getTitle());
});

casper.run();
