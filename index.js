function placePoint(str) {
    const result = [];
    let arr = str.split("");
    result.push(arr.join(""));

    for (let i=0; i < arr.length-1; i++){
        let version = arr.slice();
        
        for (let j = i; j < version.length-1; j++){
            version[j] = version[j] + ".";
            result.push(version.join(""));
        }
       
    }
    console.log(result);
}

let str = "abcd";
placePoint(str);
