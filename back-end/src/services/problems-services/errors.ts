export function invalidExtension() {
    return {
        name: "Invalid Extensions",
        message: "Test cases extensions not allowed, be sure to use .in for inputs and .out for outputs",
    };
}

export function testsSizeExceeded() {
    return {
        name: "Test Sizes Exceeded",
        message: "Test cases should be at most 40 MB length"
    };
}

export function missingMatchesOrEmptyCases() {
    return {
        name: "Missing Matches Or Empty Cases",
        message: "Test cases can't be empty and all input files has to match with an output file"
    }
}

export function forbiddenName() {
    return {
        name: "Forbidden Test Name",
        message: "Test name should follow the pattern 1.in 1.out, 2.in 2.out and so on"
    }
}