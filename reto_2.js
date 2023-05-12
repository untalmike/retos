const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours(year, holidays) {
    const days = [1,2,3,4,5]
    return holidays.map((holiday) => {
        let date = new Date(`${year}/${holiday}`)
        return days.includes(date.getDay())
    }).reduce((count, extra) => count+extra)*2
}

console.log(countHours(year, holidays))