function goUpAndDown(n){
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
    for(let j=n-1; j >= 1; j--){
        console.log(j);
    }
}

goUpAndDown(5);
// Big O: O(n)