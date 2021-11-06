function isPrime(controlNumber){
    if(controlNumber<2){
        return false;
    }
    if(controlNumber== 2){
        return true;
    }
    for(var i = 3; i<controlNumber; i++){
        if(controlNumber%i == 0){
            return false;
        } 
    }
    return true;
}   
function multipleNumberPrimeChecker(...numbers){
    numbers.forEach(element => {
        if(isPrime(element) == true){
            console.log(element + "Asal sayıdır");
        }
        else{
            console.log(element +"Asal sayı değildir.")
        }
    });
}
multipleNumberPrimeChecker(5,8,13);