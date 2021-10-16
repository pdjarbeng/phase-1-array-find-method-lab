
// const record = [
//     { year: "2018", result: "W"},
// ]

function superbowlWin(array) {
    const results = array.find(key => key.result ==="W") 
    return results ? results.year :undefined
}

