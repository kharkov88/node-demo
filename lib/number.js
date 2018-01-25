var numbers = [
	"123",
	"523",
	"623",
	"823",
	"323",
	"223"
]

exports.getNumber = ()=>{
	var idx = Math.floor(Math.random() * numbers.length);
	return numbers[idx];
}