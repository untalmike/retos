const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours(year, holidays) {
    const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
    
    holidays.map(e => {
        const resultset = days[new Date(year+'/'+e).getDay()]
        
        if(resultset !== "Sun"){
            
        }
        
    })
}

countHours(year, holidays)