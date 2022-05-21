/* Your Code Here */

function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []  
    }
}

function createEmployeeRecords(record){
   return record.map(createEmployeeRecord)
 }
 
 function createTimeInEvent(string){
     let timeStamp = string.split(" ")
    const obj = {
         type: "TimeIn",
         hour : parseInt(timeStamp[1],10),
         date : timeStamp[0],
        
     }
     this.timeInEvents.push(obj)
     return this
 }
 
 function createTimeOutEvent(string){
          let timeStamp = string.split(" ")
    const obj = {
         type: "TimeOut",
         hour : parseInt(timeStamp[1],10),
         date : timeStamp[0],
     }
     this.timeOutEvents.push(obj)
     return this
 }
 
 function hoursWorkedOnDate(date){
    const clockIn = this.timeInEvents.find(e => e.date === date).hour 
    const clockOut = this.timeOutEvents.find(e => e.date === date).hour 
    
     return (clockOut-clockIn)/100
 }
 
 function wagesEarnedOnDate(date){
     return hoursWorkedOnDate.call(this,date)*this.payPerHour
 }

function findEmployeeByFirstName(record,firstName){
    return record.find((e) => e.firstName === firstName)
}

 function calculatePayroll (record) {
  return record.reduce((totalWage, wage) => {
       return totalWage + allWagesFor.call(wage)
   }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}






