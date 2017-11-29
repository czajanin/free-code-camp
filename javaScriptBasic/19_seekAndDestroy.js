function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(el){
        return args.indexOf(el) < 0;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3) + ' should return [1, 1].');
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) + ' should return [1, 5, 1].');
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5) + ' should return [1].');
console.log(destroyer([2, 3, 2, 3], 2, 3) + ' should return [].');
console.log(destroyer(["tree", "hamburger", 53], "tree", 53) + ' should return ["hamburger"].');