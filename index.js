const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']


const returnFirstTwoDrivers = function(array){
    console.log (drivers[0] , drivers[1])
    return [array[0] , array[1]]
}

const returnLastTwoDrivers = function(array){
    return [array[2] , array[3]]
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
    return function(fare){
        fare * num
        return (fare*num)
    }

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function(array,funct){
return (funct(array))
}