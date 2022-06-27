const getSleepHours = day => {
  switch (day) {
    case 'monday' :
      return  8
    case 'tuesday' :
      return  7
    case 'wednesday' :
      return  6
    case 'thursday' :
      return  7
    case 'friday' :
      return  8
    case 'saturday' :
      return  8
    case 'sunday' :
      return  8
  }
}
const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday')

const getIdealSleepHours = (idealHours = 8) => {
  return idealHours * 7
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(8)
  if (actualSleepHours === idealSleepHours) {
    console.log('perfect amount of sleep.')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('more sleep than needed. more sleep '
      + (actualSleepHours - idealSleepHours) + ' hour(s)')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('should get some rest. need more ' 
     + (idealSleepHours - actualSleepHours) + ' hour(s)')
  }
}
calculateSleepDebt()