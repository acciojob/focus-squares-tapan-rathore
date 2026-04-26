//your JS code here. If required.
let squares = document.querySelectorAll(".square");

// console.log(squares);
squares.forEach(square=>{
	square.addEventListener("mouseover", ()=>{
		squares.forEach(sq=>{
			sq.style.backgroundColor="#6F4E37" //coffe
		});
		square.style.backgroundColor="#E6E6FA" //normal color
	});

	square.addEventListener("mouseout", ()=>{
		squares.forEach(sq=>{
			sq.style.backgroundColor="#E6E6FA" //resest to orginal
		})
	})
})
