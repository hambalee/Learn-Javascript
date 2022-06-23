let raceNumber = Math.floor(Math.random() * 1000);

const registerEarly = false
const age = 18
if (registerEarly && age > 18) {
  raceNumber += 1000
}
if (age > 18 && registerEarly) {
  console.log(`Race number ${raceNumber} will race at 9:30 am`)
} else if (age > 18 && !registerEarly) {
  console.log(`Race number ${raceNumber} Late adults run at 11:00 am`)
} else if (age < 18 ) {
  console.log(`Race number ${raceNumber} will race at 12:30 pm`)
} else {
  console.log(`Race number ${raceNumber} will race at 12:30 pm see the registration desk`)
}