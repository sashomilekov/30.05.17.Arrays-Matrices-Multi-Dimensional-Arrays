function sumFirstAndLastElement(arr) {
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length-1]);

    let sum = firstElement + lastElement;

    console.log(sum);

}

sumFirstAndLastElement(['20', '30', '40']);