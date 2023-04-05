let number:number[] = [0, 2, 3, 5, 7, 8, 9, 10]
function findmissing(number:number[]){
    let missing:number[]=[]

    for (let i = 0; i <= 10; i++) {
        if(number.indexOf(i)===-1){
            missing.push(i)
        }
    }
    return missing
}
console.log(findmissing(number))