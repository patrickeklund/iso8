const isoCrystals = {     // Level : Ions to upgrade
	1: 0,
	2: 1000,
	3: 4000,
	4: 15000,
	5: 50000,
}

const upgradeCrystals = {    // Level : Ions to upgrade
	1: 0,
	2: 5000,
	3: 15000,
	4: 25000,
	5: 50000,
}

const isoLevel = document.querySelector('#iso-input').value
const calcPrint = document.querySelector('#calcResult')

document.querySelector('#btn').addEventListener('click', getIons)
function getIons() {
	let total = 0
	if (isoCrystals.hasOwnProperty(isoLevel) === true && upgradeCrystals.hasOwnProperty(isoLevel) === true) {   // loop to add cost of ions per level above entered value up to level 5
		for (let i = isoLevel; i < 6; i++) {
			total = total + (isoCrystals[i] * 5 + upgradeCrystals[i])
			let answer = "you need " + total.toLocaleString('en') + " ions for level iso8 green" 
			calcPrint.innerText = answer
		}
	} else {
		calcPrint.innerText = "Please enter a level under 6"
	}

}


document.querySelector('#btn2').addEventListener('click', clear)
function clear(){
	location.reload();
}