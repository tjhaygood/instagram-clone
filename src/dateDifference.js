export const dateDiffString = (date_future) => {
  var diff = Math.abs(date_future - Date.now()) / 1000;
  var days = Math.floor(diff / 86400);
  var weeks = Math.floor(days / 7);
  diff -= days * 86400;
  var hours = Math.floor(diff / 3600) % 24;
  diff -= hours * 3600;
  var minutes = Math.floor(diff / 60) % 60;
  diff -= minutes * 60;
  var seconds = Math.floor(diff % 60);
  var timeMap = {
    0 : 's',
    1 : 'm',
    2 : 'h',
    3 : 'd',
    4 : 'w',
  }

  var timeList = [seconds, minutes, hours, days, weeks];
  for(var i=4; i >= 0; i--){
    if(i === 0 && timeList[i] < 1){
      return 'Now';
    }
    if(timeList[i] !== 0){
      return timeList[i] + timeMap[i];
    }
  }
}