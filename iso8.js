const isoCrystals = {
	1:0,
	2:1000,
	3:4000,
	4:15000,
	5:50000,
}

const upgradeCrystals = {
	1:0,
	2:5000,
	3:15000,
	4:25000,
	5:50000,
}


document.querySelector('#btn').addEventListener('click', getIons)
	function getIons(){
		let total = '';	
		const calcPrint = document.querySelector('#calcResult')
		const isoLevel = parseInt(document.querySelector('#iso-input').value)
		
		if(isoCrystals.hasOwnProperty(isoLevel) === true && upgradeCrystals.hasOwnProperty(isoLevel) === true){
			total = (isoCrystals[isoLevel] * 5) + upgradeCrystals[isoLevel]
			calcPrint.innerText = "You need " + total + " ions"
		}else{
			calcPrint.innerText = "Please enter a level under 6"
		}
	
}
