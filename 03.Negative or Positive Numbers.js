function negativeOrPositiveNumbers(input) {

    let result = [];
    for ( let num of input) {
        if (num < 0) {
            result.unshift(num);
        }// Insert at the start
        else {
        result.push(num);
        }// Append at the end

   }
    console.log(result.join('\n'));

}

negativeOrPositiveNumbers([7, -2, 8, 9]);
