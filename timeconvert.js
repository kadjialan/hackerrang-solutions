function timeConversion(s) {
    let time = s.slice(0, 2)

    if (time === "12") {
        if (s.includes("AM")) {
            time = "00"
        }
    } else if (s.includes("PM")) {
        time = parseInt(time) + 12
    }
    return `${time}${s.slice(2, 8)}`

}
console.log(timeConversion('07:05:45PM'))