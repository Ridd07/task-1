function  isValidTaskTitle(title){
    if(title.length === 0){
        return false;
    }
    if(title.length > 80){
        return false;
    }
    return true;
}

console.log(isValidTaskTitle(""))
console.log(isValidTaskTitle("Riddhi"))
console.log(isValidTaskTitle("  "))
console.log(isValidTaskTitle("R".repeat(81)))