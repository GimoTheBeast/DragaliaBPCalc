let calculate = function(){
	let spArray = []
	let	spCost = Number(document.querySelector("#cost").value)
	let breakpoints = []
	let bpResults = ""
	let resultsBox = document.querySelector("#res")
	resultsBox.innerHTML = "Please wait..."
	combo = document.querySelectorAll("#combo input")
	if(!spCost){
		console.log("ERROR: No SP Cost Entered")
		resultsBox.innerHTML = "<span class='error'>ERROR: No SP Cost Entered.</span>"
		return;
	}
	for (let i = 0; i < combo.length; i++){
		if(combo[i].value){
			spArray.push(combo[i].value)
		}
	}
	if(!spArray[0]){
		console.log("ERROR: No SP Combo Entered")
		resultsBox.innerHTML = "<span class='error'>ERROR: No SP Combo Entered.</span>"
		return;
	}
	for (let i = 0; i < 200; i++) {
		currentSP = 0;
		curCombo = 0;
		haste = 1 + i/100
		while(currentSP < spCost){
			for (let k = 0; k < spArray.length; k++){
				spIncrease = Math.ceil(Number(spArray[k]) * haste)
				currentSP = currentSP + spIncrease
				curCombo = curCombo + 1;
				if (currentSP >= spCost){
					if(!breakpoints[0]){
						breakpoints.push([curCombo,i])
					}
					else{
						let cCheck = breakpoints[breakpoints.length - 1][0]
						if(curCombo < cCheck){
							breakpoints.push([curCombo,i])
						}
					}
					break;
				}
			}
		}
	}
	for (let i = 0; i < breakpoints.length; i++){
		let fullC = ""
		let remC = ""
		let numLoops = Math.floor(breakpoints[i][0] / spArray.length)
		let loopRem = breakpoints[i][0] % spArray.length
		for (let k = 0; k < numLoops; k++){
			fullC += "c" + spArray.length
		}
		if (loopRem) {
			remC = "c" + loopRem
		}
		bpResults += "<div class='bp'><b>" + breakpoints[i][1] + "%</b> " +fullC + remC+"</div>"
			/*if(numLoops){
				bpResults += "<div class='bp'>" + breakpoints[i][1] + "% c" + spArray.length + "[x" + numLoops +"]c" + loopRem + "</div>"
			}
			else{
				bpResults +="<div class='bp'>"  + breakpoints[i][1] + "% c" + loopRem + "</div>"
			}*/
	}
	resultsBox.innerHTML = bpResults
}