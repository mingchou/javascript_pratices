

function random_increase_value(aInit) {
    return new Promise( (aResolve, aReject) => {
        let increasment = Math.random()*1000;
        setTimeout(() => {
            let result = aInit+increasment;
            console.log(result);
            aResolve(result);
        }, 1000);
    });
}

function async_add(aValue1, aValue2) {
    return new Promise( (aResolve, aReject) => {
        setTimeout(() => {
            let result = aValue1 + aValue2;
            console.log(aValue1 + " + " + aValue2 + " = " + result);
            aResolve(result);
        }, 1000);
    });
}

function get_and_pass(aInit) {
    let temporary_value1;
    let temporary_value2;
    return random_increase_value(aInit)
        .then((result) => temporary_value1 = result)
        .then(() => random_increase_value(aInit))
        .then((result) => temporary_value2 = result)
        .then(() => async_add(temporary_value1, temporary_value2))
        .then((result) => console.log(result));
}

get_and_pass(100);