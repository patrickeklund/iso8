
// Ion calculator

const isoCrystals = {     // Level : Ions to upgrade
	0: 0,
	1: 0,
	2: 1000,
	3: 4000,
	4: 15000,
	5: 50000,
}

const upgradeCrystals = {    // Level : Ions to upgrade
	0: 0,
	1: 0,
	2: 5000,
	3: 15000,
	4: 25000,
	5: 50000,
}
// Object.keys(isoCrystals).length

const calcPrint = document.querySelector('#calcResult')

document.querySelector('#btn').addEventListener('click', getIons)
function getIons() {
	const isoLevel = document.querySelector('#iso-input').value
	let total = 0
	if (isoCrystals.hasOwnProperty(isoLevel) === true && upgradeCrystals.hasOwnProperty(isoLevel) === true) {   // loop to add cost of ions per level above entered value up to level 5
		for (let i = isoLevel; i < 6; i++) {
			total = total + (isoCrystals[i] * 5 + upgradeCrystals[i])
			calcPrint.innerText = "you need " + total.toLocaleString('en') + " ions for level iso8 green" 
		}
	} else {
		calcPrint.innerText = "Please enter a level under 6"
	}
}

// crystal calculator


const crystalCount = {
	0: 0,
	1: 1,
	2: 3,
	3: 9,
	4: 27,
	5: 81,
}

const crystalsToMax = document.querySelector('#calcResult2')


document.querySelector('#btn2').addEventListener('click', maxCrystals)
function maxCrystals(){
	const crystalLevel = document.querySelector('#crystal-input').value
	let total = 0
	if(crystalCount.hasOwnProperty(crystalLevel) === true){
		for (let i = crystalLevel; i < 6; i++) {
			total = total + crystalCount[i]
			crystalsToMax.innerText = "you need " + total + " crystals to max"
		}
	}else {
		crystalsToMax.innerText = "Please enter a level under 6"
	}
}