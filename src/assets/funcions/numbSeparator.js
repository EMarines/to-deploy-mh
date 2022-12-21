

export function toComaSep(number){
	try {
		return number.toLocaleString('en')		
	} catch (error) {
		console.log(error);
	}
}


export function toTele(tel){
	let res1 = tel.slice(0, 3)
	let res2 = tel.slice(3, 6)
	let res3 = tel.slice(6, 10)
	return (`${res1} ${res2} ${res3}`)
}
