const returnFirstTwoDrivers = function(thing) {
    return [thing[0], thing[1]];
}

const returnLastTwoDrivers = function(thing) {
    return [thing[2], thing[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function fareMultiplier(multiplier=fare) {
        return fare * multiplier;
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(fare)(2);
    }

function fareTripler(fare) {
    return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
