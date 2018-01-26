suite('Clobal Tests', function() {
	test('This title of page is good', function() {
		assert(document.title && 
		document.title.match(/\S/) && 
		document.title.toUpperCase() !== 'TODO');
	})
})