let cList = document.querySelectorAll("#combo input");
fetch("./presets.json").then(response => {
	return response.json();
}).then(output => {
   	const comboObj = output
	let charList = ""
	for (let key in comboObj) {
		charList += "<div class=\"character\" onclick=\"charPreset('" + key + "')\"><img src=\"icons/characters/" + key + ".png\"></div>"
	}
	document.querySelector("div#chars").innerHTML = charList
})

let presetState = false;
let togglePreset = function(){
	if(presetState){
		document.querySelector("#presets").setAttribute("style", "display: none;");
		presetState = false;
	}
	else{
		document.querySelector("#presets").setAttribute("style", "display: block;");
		presetState = true;
	}
}
let charPreset = function(key){
	cList[0].value = comboObj[key][0]
	cList[1].value = comboObj[key][1]
	cList[2].value = comboObj[key][2]
	cList[3].value = comboObj[key][3]
	cList[4].value = comboObj[key][4]
	cList[5].value = comboObj[key][5]
	cList[6].value = comboObj[key][6]
	cList[7].value = comboObj[key][7]
	cList[8].value = comboObj[key][8]
	document.querySelector("#fs").value = comboObj[key][9]
	document.querySelector("#fsc").checked = comboObj[key][10]
	document.querySelector("#inf").checked = comboObj[key][11]
}
let weaponPreset = function(type){	
	switch(type){
		case "sword":
			cList[0].value = 150
			cList[1].value = 150
			cList[2].value = 196
			cList[3].value = 265
			cList[4].value = 391
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 345
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "blade":
			cList[0].value = 130
			cList[1].value = 130
			cList[2].value = 220
			cList[3].value = 360
			cList[4].value = 900
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 200
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "dagger":
			cList[0].value = 144
			cList[1].value = 144
			cList[2].value = 264
			cList[3].value = 288
			cList[4].value = 480
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 288
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "axe":
			cList[0].value = 200
			cList[1].value = 240
			cList[2].value = 360
			cList[3].value = 380
			cList[4].value = 420
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 300
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "lance":
			cList[0].value = 120
			cList[1].value = 240
			cList[2].value = 120
			cList[3].value = 480
			cList[4].value = 600
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 400
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "bow":
			cList[0].value = 184
			cList[1].value = 92
			cList[2].value = 276
			cList[3].value = 414
			cList[4].value = 529
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 460
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "wand":
			cList[0].value = 130
			cList[1].value = 200
			cList[2].value = 240
			cList[3].value = 430
			cList[4].value = 600
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 400
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "staff":
			cList[0].value = 232
			cList[1].value = 232
			cList[2].value = 348
			cList[3].value = 464
			cList[4].value = 696
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 580
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "lr":
			cList[0].value = 545
			cList[1].value = 545
			cList[2].value = null
			cList[3].value = null
			cList[4].value = null
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 345
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "cr":
			cList[0].value = 340
			cList[1].value = 340
			cList[2].value = null
			cList[3].value = null
			cList[4].value = null
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = null
			document.querySelector("#fs").value = 345
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = false
			break;
		case "rf":
			cList[0].value = null
			cList[1].value = null
			cList[2].value = null
			cList[3].value = null
			cList[4].value = null
			cList[5].value = null
			cList[6].value = null
			cList[7].value = null
			cList[8].value = 90
			document.querySelector("#fs").value = null
			document.querySelector("#fsc").checked = false
			document.querySelector("#inf").checked = true
			break;
	}
}
let calculate = function(){
	let spArray = []
	let	spCost = Number(document.querySelector("#cost").value)
	let breakpoints = []
	let bpResults = ""
	let refill = Number(document.querySelector("#refill").value)
	let strikeSP = Number(document.querySelector("#fs").value)
	let strikeHaste = Number(document.querySelector("#fsh").value)/100
	let infCombo = 0
	let fsCount = 0
	let onlyFS = false
	let resultsBox = document.querySelector("#res")
	let fullC = ""
	let numFS = ""
	resultsBox.innerHTML = "Please wait..."
	combo = document.querySelectorAll("#combo input")
	if(!spCost){
		console.log("ERROR: No SP Cost Entered")
		resultsBox.innerHTML = "<span class='error'>ERROR: No SP Cost Entered.</span>"
		return;
	}
	if(refill){
		spCost = Math.ceil(spCost * ( 100 - refill) / 100)
	}
	if(combo){
		for (let i = 0; i < combo.length; i++){
			if(combo[i].value){
				spArray.push(combo[i].value)
			}
		}
	}
	else{
		spArray = []
	}
	if(!spArray[0] && !strikeSP){
		console.log("ERROR: No SP Combo Entered")
		resultsBox.innerHTML = "<span class='error'>ERROR: No SP Combo Entered.</span>"
		return;
	}
	
	if(document.querySelector("#inf").checked){
		spArray.splice(-1,1)
		for (let i = 0; i < 100; i++) {
			infCombo = 0;
			currentSP = 0;
			curCombo = 0;
			haste = 1 + i/100
			let infValue = document.querySelector("#infinite").value * haste
			
			if(!infValue){
				console.log("ERROR: No SP Value entered in infinite slot.")
				resultsBox.innerHTML = "<span class='error'>ERROR: No SP Value entered in infinite slot.</span>"
				return;
			}
			for (let k = 0; k < spArray.length; k++){
				spIncrease = Math.ceil(Math.fround(Number(spArray[k])) * Math.fround(haste))
				currentSP = currentSP + spIncrease 
			}
			while(currentSP < spCost){
				currentSP += infValue
				curCombo = spArray.length
				infCombo += 1
				if (currentSP >= spCost){
					if(!breakpoints[0]){
						breakpoints.push([infCombo,i])
						console.log(breakpoints)
					}
					else{
						let cCheck = breakpoints[breakpoints.length - 1][0]
						if(infCombo < cCheck){
							breakpoints.push([infCombo,i])
						}
					}
				}
			}
		}
		console.log(spArray)
		if (spArray.length){
			fullC = "c" + spArray.length + " + "
		}
		for (let i = 0; i < breakpoints.length; i++){
			bpResults += "<div class='bp'><b>" + breakpoints[i][1] + "%</b> " + fullC + breakpoints[i][0] +" hits</div>"
		}
		resultsBox.innerHTML = bpResults
		return;
	}
	if(document.querySelector("#fsc").checked) {
		if(!strikeSP){
			console.log("ERROR: No SP Cost for FS Entered")
			resultsBox.innerHTML = "<span class='error'>ERROR: No SP Cost for FS slot entered.</span>"
			return;
		}
		if(spArray.length){
			for (let i = 0; i < 100; i++) {
				currentSP = 0;
				curCombo = 0;
				fsCount = 0
				haste = 1 + i/100
				strikeH = haste + strikeHaste
				while(currentSP < spCost){
					for (let k = 0; k < spArray.length; k++){
						spIncrease = Math.ceil(Math.fround(Number(spArray[k])) * Math.fround(haste))
						currentSP = currentSP + spIncrease
						curCombo = curCombo + 1;
						console.log(haste + " " + currentSP + " " + spCost + " " + currentSP >= spCost )
						if (currentSP >= spCost){
							if(!breakpoints[0]){
								breakpoints.push([curCombo,i,fsCount])
							}
							else{
								let cCheck = breakpoints[breakpoints.length - 1][0]
								if(curCombo < cCheck){
									breakpoints.push([curCombo,i,fsCount])
								}
								else if (fsCount < breakpoints[breakpoints.length - 1][2]){
									breakpoints.push([curCombo,i,fsCount])
								}
							}
							break;
						}
						else if(k == spArray.length - 1) {
							currentSP = currentSP + Math.ceil(Math.fround(strikeSP) * Math.fround(strikeH))
							fsCount += 1
							if (currentSP >= spCost){
								if(!breakpoints[0]){
									breakpoints.push([curCombo,i,fsCount])
								}
								else{
									let cCheck = breakpoints[breakpoints.length - 1][0]
									if(curCombo < cCheck){
										breakpoints.push([curCombo,i,fsCount])
									}
								}
							}
							break;
						}
						console.log(breakpoints)
					}
				}
			}
		}
		else{
			for (let i = 0; i < 100; i++) {
				currentSP = 0;
				curCombo = 0;
				haste = 1 + i/100
				strikeH = haste + strikeHaste
				onlyFS = true
				while(currentSP < spCost){
					currentSP = currentSP + (strikeSP * strikeH)
					curCombo += 1;
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
		if(onlyFS){
			for (let i = 0; i < breakpoints.length; i++){
				numFS += "<div class='bp'><b>" + breakpoints[i][1] + "%</b> FS x" +  breakpoints[i][0] + "</div>"
			}
			resultsBox.innerHTML = numFS
		}
		else{
			for (let i = 0; i < breakpoints.length; i++){
				let fullC = ""
				let remC = ""
				let numLoops = Math.floor(breakpoints[i][0] / spArray.length)
				let loopRem = breakpoints[i][0] % spArray.length
				for (let k = 0; k < numLoops; k++){
					fullC += "c" + spArray.length
					if(breakpoints[i][2]){
						fullC += "fs "
						breakpoints[i][2] = breakpoints[i][2] - 1
					}
				}
				if (loopRem) {
					remC = "c" + loopRem
				}
				bpResults += "<div class='bp'><b>" + breakpoints[i][1] + "%</b> " + fullC + remC + "</div>"
			}
			resultsBox.innerHTML = bpResults
		}
		return;
	}
	
	for (let i = 0; i < 100; i++) {
		currentSP = 0;
		curCombo = 0;
		haste = 1 + i/100
		
		while(currentSP < spCost){
			for (let k = 0; k < spArray.length; k++){
				spIncrease = Math.ceil(Math.fround(Number(spArray[k])) * Math.fround(haste))
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
	}
	resultsBox.innerHTML = bpResults
}
