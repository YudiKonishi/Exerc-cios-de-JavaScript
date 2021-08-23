let num = [2, 1, 0, 8, 5]
/*num.sort()
num.push(2)
console.log(num)
for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/
for(let pos in num) {
    console.log(num[pos])
}
console.log(`O elemento 2 está na posição ${(num.indexOf(3))}`)