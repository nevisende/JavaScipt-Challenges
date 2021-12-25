const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    let date1Arr = dateText1.split('/');
    let date2Arr = dateText2.split('/');
-    return Math.round((new Date(date2Arr[2],date2Arr[0]-1,date2Arr[1]) - new Date(date1Arr[2],date1Arr[0]-1,date1Arr[1]))/DAY_IN_MILLISECONDS)
  }
  console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)

