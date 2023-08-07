function birthdayCakeCandles(candles) {
    let bigest = [0]
    let count = 0
    for (let i = 0; i < candles.length; i++) {
        if (bigest < candles[i]) {
            bigest = candles[i]
        }if(bigest == candles[i] ) {
            count++
        }
    }
    console.log(count)
    

}
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])

