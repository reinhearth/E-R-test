humanSize = (bytes) => {
    let result;
    let unit;

    if (bytes >= 10 ** 24) {
        result = (bytes * (10 ** -24)).toFixed(1) //yb
        unit = "YB"
    } else if (bytes >= 10 ** 21) {
        result = (bytes * (10 ** -21)).toFixed(1) //zb
        unit = "ZB"
    } else if (bytes >= 10 ** 18) {
        result = (bytes * (10 ** -18)).toFixed(1) //eb
        unit = "EB"
    } else if (bytes >= 1000000000000000) {
        result = (bytes * (10 ** -15)).toFixed(1) //pb
        unit = "PB"
    } else if (bytes >= 1099511627776) {
        result = (bytes * (10 ** -12)).toFixed(1) //tb
        unit = "TB"
    } else if (bytes >= 1073741824) {
        result = (bytes * (10 ** -9)).toFixed(1); //GB
        unit = "GB"
    } else if (bytes >= 1048576) {
        result = (bytes * 0.000001).toFixed(1); //MB
        unit = "MB"
    } else if (bytes >= 1) {
        result = (bytes * 0.001).toFixed(1); //kB
        unit = "kB"
    }

    return `${result} ${unit}`;
};

console.log(humanSize(13400200012))