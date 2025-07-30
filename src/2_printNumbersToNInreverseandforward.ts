function goUpAndDown(n: number): void {
    for (let i: number = 1; i <= n; i++) {
        console.log(i);
    }
    for (let j: number = n - 1; j >= 1; j--) {
        console.log(j);
    }
}

goUpAndDown(5);
// Big O: O(n)

export { goUpAndDown };
