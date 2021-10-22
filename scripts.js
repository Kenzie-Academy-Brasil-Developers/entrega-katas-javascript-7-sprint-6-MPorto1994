
// ForEach
let forEachArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note"]

function cbMyForEach (array) {
    array= "esse: " + array
    return array
}
function myForEach(array, callBack){
    for (let i =0 ; i <array.length ; i++){
        forEachArray[i]=callBack(forEachArray[i])
    }
}
myForEach(forEachArray,cbMyForEach)
console.log(forEachArray)
// ForEach

//Map
let mapArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note", "Sword Art Online"]

function cbMyMap (array) {
    return ("esse: " + array)
}
function myMap(array, callBack){
    let newMapArray =[]
    for (let i =0 ; i <array.length ; i++){
        newMapArray.push(callBack(array[i]))
    }
    return newMapArray
}
console.log(myMap(mapArray,cbMyMap))
//Map

//Filter
let filterArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note", "Sword Art Online"]
let newFilterArray =[]

function cbMyFilter (array) {
    if (array[0]=="S"){
        return true
    }
}
function myFilter(array, callBack){
    for (let i =0 ; i <array.length ; i++){
        if (callBack(array[i])){
            newFilterArray.push(array[i])
        }
    }
}
myFilter(filterArray,cbMyFilter)
console.log(newFilterArray)
// Filter

// Find
let findArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note", "Sword Art Online"]
let newFindArray =[]

function cbMyFind (array) {
    if (array[0]=="D"){
        return true
    }
}
function myFind(array, callBack){
    for (let i =0 ; i <array.length ; i++){
        if (callBack(array[i])){
            return array[i]
        }
    }
}
console.log(myFind(filterArray,cbMyFind))
// Find

// FindIndex
let findIndexArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note", "Sword Art Online"]
let newFindIndexArray =[]

function cbMyFindIndex (array) {
    if (array[0]=="D"){
        return true
    }
}
function myFindIndex(array, callBack){
    for (let i =0 ; i <array.length ; i++){
        if (callBack(array[i])){
            return i
        }
    }
    return -1
}
console.log(myFindIndex(findIndexArray,cbMyFindIndex))

// FindIndex

// Reduce
function cbMyReduce (acumulador, valorAtual, index, array) {
    if (array[0]=="D"){
        return true
    }
}
function myReduce(array, callBack){
    let total = 0
    for (let i =0 ; i <array.length ; i++){
        if (callBack(total, array[i], i, array)){
            return i
        }
    }
    return -1
}
console.log(myFindIndex(findIndexArray,cbMyFindIndex))
// Reduce

// Some
let someArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note", "Sword Art Online"]
let newSomArray =[]

function cbMySome (array) {
    if (array[0]=="D"){
        return true
    }
}
function mySome(array, callBack){
    for (let i =0 ; i <array.length ; i++){
        if (callBack(array[i])){
            return true
        }
    }
}
console.log(mySome(filterArray,cbMySome))
// Some

// Every
// myEvery(){

// }
let everyArray = ["Slime", "HunterXHunter", "Onde Piece", "Doctor Stone", "Death Note", "Sword Art Online"]
let newEveryArray =[]

function cbMyEvery (array) {
    if (array[0]=="D"){
        return true
    }
}
function myEvery(array, callBack){
    let equal = false
    for (let i =0 ; i <array.length ; i++){
        if (callBack(array[i])){
            equal=true
        }
        else{
            equal=false
        }
    }
    return equal
}
console.log(myEvery(everyArray,cbMyEvery))
// Every


// myFill(){

// }
// myIncludes(){

// }
// myIndexOf(){

// }
// myConcat(){
// 
// }
// myJoin(){

// }