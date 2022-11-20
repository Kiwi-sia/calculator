let btnsDigits = document.querySelectorAll(".digit");
btnsDigits.forEach((digit) => {
	digit.addEventListener("click", () => {
		console.log(digit.textContent);
	});
});
// window.addEventListener("keydown", function (e) {
// 	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

// 	console.log(this);
// });

// window.addEventListener("keydown", function (event) {
// 	const key = event.keyCode;
// 	switch (key) {
// 		case 48:
// 		case 96:
// 			console.log("pressed 0");
// 			break;
// 		case 49:
// 		case 97:
// 			console.log("pressed 1");
// 		case 1:
// 			console.log("well");
// 	}
// });

window.addEventListener("keydown", function (event) {
	let regNum = console.log(event.key);
});

// 0	48
// 1	49
// 2	50
// 3	51
// 4	52
// 5	53
// 6	54
// 7	55
// 8	56
// 9	57

// numpad 0	96
// numpad 1	97
// numpad 2	98
// numpad 3	99
// numpad 4	100
// numpad 5	101
// numpad 6	102
// numpad 7	103
// numpad 8	104
// numpad 9	105
