suite('Тесты страницы "О нас"', function() {
	test('страница должна содержать ссылку "contacts"', function() {
		assert($('a[href="/contact"]').length);
	})
})