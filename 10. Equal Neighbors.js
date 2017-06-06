function solve(matrix) {
    let counter = 0;

    for(let i = 0; i < matrix.length -1; i++){
        for ( j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] == matrix[i+1][j] ){
                counter++;
            }

        }
    }

    for(let b = 0; b < matrix.length; b++){
        for (j = 0; j < matrix.length; j++){
            if( matrix[b][j] == matrix[b][j+1]){
                counter++
            }
        }

    }





    console.log(counter);
}

solve([['2', '2', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '4'],
    ['4', '4', '7', '5', '4']]
);