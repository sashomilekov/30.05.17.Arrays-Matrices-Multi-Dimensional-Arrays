function solve(n , k) {
    let result = new Array();
    result[0] = 1;

    for(let i = 0; i < n; i++){
        let kElements = result.slice(0, k);
        let sum = 0;
        for(let args of kElements) {
            sum += args;
        }
        result.push(sum);

        if( k == result.length -1 ){
            break;
        }
    }
    for(let i = 1; i < n - k ; i++){
        let kElements = result.slice(i);
        let sum = 0;
        for(let args of kElements) {
            sum += args;
        }
        result.push(sum);


    }



    console.log(result.join(' '));

}

solve(8 , 2);
