let numberArr = [" zero"," one"," two"," three"," four"," five"," six"," seven"," eight"," nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let tensArr = [" twenty"," thirty"," forty"," fifty"," sixty"," seventy"," eighty"," ninety"];

function sayNumber(number) {
    let sayBaby = "";
    let tens = +String(Math.floor(number/10)).slice(-1);
    let hundred = Math.floor(number/100);
    console.log({number})
    if(hundred){
      console.log(hundred)
      sayBaby += numberArr[hundred] + " hundred";
  } 
    
     if(tens <2) {
        number = String(number);
        number = +number.slice(number.length-2);
        sayBaby += numberArr[number] 
    } else {
        sayBaby += tensArr[tens-2];
        number = String(number);
        number = +number.slice(number.length-1);
        if(number){
        sayBaby += numberArr[number];

        }
    }
    return sayBaby;
}

const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
	let sayDude = "";
    let numberBillion = +String(Math.floor(n/10**9)).slice(-3);
    let numberMillion = +String(Math.floor(n/10**6)).slice(-3)
    let numberThousand = +String(Math.floor(n/10**3)).slice(-3);
    if(numberBillion) {
        sayDude += sayNumber(numberBillion) + " billion";
    }
    if(numberMillion) {
        sayDude += sayNumber(numberMillion) + " million";
    }
    if(numberThousand) {
        sayDude += sayNumber(numberThousand) + " thousand";
    }
    
    let neo = Number(String(n).substr(-3,3));
     sayDude += sayNumber(neo);
    
	return sayDude
}

console.log(`12_127_325 in english is: ${sayNumberInEnglish(2802761)}`)
