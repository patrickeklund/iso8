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

const crystalCount = {   // Level : crystals to upgrade
	0: 0,
	1: 1,
	2: 3,
	3: 9,
	4: 27,
	5: 81,
}

const calcPrintHealth = document.querySelector('#healthResult')
const calcPrintArmor = document.querySelector('#armorResult')
const calcPrintFocus = document.querySelector('#focusResult')
const calcPrintDamage = document.querySelector('#damageResult')
const calcPrintResist = document.querySelector('#resistResult')
const calcPrintTotal = document.querySelector('#totalIons')

document.querySelector('#btn').addEventListener('click', calcTotalIons)
  function calcTotalIons() {
 
  let isoLevels = []
  
  let healthTotal = 0
  let healthTotal2 = 0
 
  let armorTotal = 0
  let armorTotal2 = 0
 
  let focusTotal = 0
  let focusTotal2 = 0
 
  let damageTotal = 0
  let damageTotal2 = 0
 
  let resistTotal = 0
  let resistTotal2 = 0
 
  let ionTotal = 0
  
  const healthLevel = document.querySelector('#health').value
  const armorLevel = document.querySelector('#armor').value
  const focusLevel = document.querySelector('#focus').value
  const damageLevel = document.querySelector('#damage').value
  const resistLevel = document.querySelector('#resist').value
  
  isoLevels.push(healthLevel)
  isoLevels.push(armorLevel)
  isoLevels.push(focusLevel)
  isoLevels.push(damageLevel)
  isoLevels.push(resistLevel)
  console.log(isoLevels)
  const min = Math.min(...isoLevels)
  console.log(min)
  
if(healthLevel < 5){
  	for(let i = healthLevel; i <= 5; i++){
		healthTotal = healthTotal + crystalCount[i]
		healthTotal2 = healthTotal2 + (isoCrystals[i])
		calcPrintHealth.innerText = "You need " + (healthTotal - crystalCount[healthLevel]) + " HEALTH crystals and " + (healthTotal2 - isoCrystals[healthLevel]) + " ions"
	} 
}else if(parseInt(healthLevel) === 5){
		calcPrintHealth.innerText = "Your HEALTH crystal is max level"
}else{
		calcPrintHealth.innerText = "Please enter a valid level 1 - 5"
}

if(armorLevel < 5){
	for(let i = armorLevel; i < 6; i++){
		armorTotal = armorTotal + crystalCount[i]
		armorTotal2 = armorTotal2 + (isoCrystals[i])
		calcPrintArmor.innerText = "You need " + (armorTotal - crystalCount[armorLevel]) + " ARMOR crystals and " + (armorTotal2 - isoCrystals[armorLevel]) + " ions"
	}
}else if(parseInt(armorLevel) === 5){
	calcPrintArmor.innerText = "Your ARMOR crystal is max level"
}else{
	calcPrintArmor.innerText = "Please enter a valid level 1 - 5"
}
if(focusLevel < 5){
	for(let i = focusLevel; i < 6; i++){
		focusTotal = focusTotal + crystalCount[i]
		focusTotal2 = focusTotal2 + (isoCrystals[i])
		calcPrintFocus.innerText = "You need " + (focusTotal - crystalCount[focusLevel]) + " FOCUS crystals and " + (focusTotal2 - isoCrystals[focusLevel]) + " ions"
	}
}else if(parseInt(focusLevel) === 5){
	calcPrintFocus.innerText = "Your FOCUS crystal is max level"
}else{
	calcPrintFocus.innerText = "Please enter a valid level 1 - 5"
}
if(damageLevel < 5){
	for(let i = damageLevel; i < 6; i++){
		damageTotal = damageTotal + crystalCount[i]
		damageTotal2 = damageTotal2 + (isoCrystals[i])
		calcPrintDamage.innerText = "You need " + (damageTotal - crystalCount[damageLevel]) + " DAMAGE crystals and " + (damageTotal2 - isoCrystals[damageLevel]) + " ions"
	}
}else if(parseInt(damageLevel) === 5){
	calcPrintDamage.innerText = "Your DAMAGE crystal is max level"
}else{
	calcPrintDamage.innerText = "Please enter a valid level 1 - 5"
}
if(resistLevel < 5){
	for(let i = resistLevel; i < 6; i++){
		resistTotal = resistTotal + crystalCount[i]
		resistTotal2 = resistTotal2 + (isoCrystals[i])
		calcPrintResist.innerText = "You need " + (resistTotal - crystalCount[resistLevel]) + " RESIST crystals and " + (resistTotal2 - isoCrystals[resistLevel]) + " ions"
	}
}else if(parseInt(resistLevel) === 5){
	calcPrintResist.innerText = "Your RESIST crystal is max level"
}else{
	calcPrintResist.innerText = "Please enter a valid level 1 - 5"
}
if(min < 5){
	for(let i = (min + 1); i < 6; i++) {
		ionTotal = ionTotal + upgradeCrystals[i]
	}
	calcPrintTotal.innerText = resistTotal2 + damageTotal2 + focusTotal2 + armorTotal2 + healthTotal2 + (ionTotal - (parseInt(isoCrystals[min]) + parseInt(upgradeCrystals[min])))  + " total ions needed"
}else if(min === 5){
	calcPrintTotal.innerText = "You are already at max level"
}else{
	calcPrintTotal.innerText = "Mistakes were made..."
}
}


 