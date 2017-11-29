function mutation(arr) { 
    for (var v of arr[1]) {
    if(arr[0].toLowerCase().indexOf(v.toLowerCase()) === -1)
        return false;
    }  
    return true;
  }
  
console.log(mutation(["hello", "hey"]) === false ? 1 : 0 );
console.log(mutation(["hello", "hey"]) === false ? 1 : 0);
console.log(mutation(["hello", "Hello"]) === true ? 1 : 0);
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true ? 1 : 0);
console.log(mutation(["Mary", "Army"]) === true ? 1 : 0);
console.log(mutation(["Mary", "Aarmy"]) === true ? 1 : 0);
console.log(mutation(["Alien", "line"]) === true ? 1 : 0);
console.log(mutation(["floor", "for"]) === true ? 1 : 0);
console.log(mutation(["hello", "neo"]) === false ? 1 : 0);
console.log(mutation(["voodoo", "no"]) === false ? 1 : 0);
