function isIsogram(str){
    let lowCase = str.toLowerCase();
    for (let i = 0; i <= str.length; ++i) {
        let newStr = lowCase.substring(i+1, str.length)
        console.log(newStr);
        if (newStr.indexOf(lowCase[i], 0) !==-1) {
            console.log(lowCase[i]);
            return false
        }
    } return true
}