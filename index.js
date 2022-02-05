function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function () { return spy });







function returnsANamedFunction() {
    const oki = function () {

    }

    return oki;
}
namedFunction(function () { return 4 - 2; });






function returnsAnAnonymousFunction() {


    return function () {

    }



}

returnsAnAnonymousFunction(function () { return 9 - 8; });

