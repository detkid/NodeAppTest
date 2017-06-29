const Nightmare = require('Nightmare');
const assert = require('power-assert');
require('babel-register');

describe('Nightmare2を使ってみる', () => {

	let driver;

	beforeEach(function () {
		driver = Nightmare();
	});

	afterEach(function* () {
		yield driver.end();
	});

	it('yahooさんのタイトルを取得することができる', function* () {
		let title = yield driver
			.goto('http://yahoo.com')
			.title();

		assert(title === 'Yahoo');
	});

	it('qiitaさんのタイトルを取得することができる', function* () {
		let title = yield driver
			.goto('http://qiita.com')
			.title();

		assert(title === 'Qiita - A technical knowledge sharing platform for programmers.');
	});

	it('qiitaのorganizationに登録されている企業数はNである', function* () {
		let items = yield driver
			.goto('http://qiita.com/organizations')
			.evaluate(function () {
				return $('.organizationsList_item');
			});

		assert(171 === items.length);
	});
});
