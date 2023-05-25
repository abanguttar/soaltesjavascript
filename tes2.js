const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    // ..TODO..
    if (startTime.length == 4) startTime = '0' + startTime;
    if(startTime < dayStart || startTime > dayEnd) return false;

    let [hour, min] = startTime.split(':');
    min = +min + durationMinutes;
    if (min > 60){
        min = min - 60;
        hour++
    }

    hour = String(hour);
    if (hour.length ==1) hour = '0' + hour;
    return hour + ':' + min <= dayEnd;

}
console.log(scheduleMeeting("7:00",15));
;     // false
scheduleMeeting("07:15",30);    // false
scheduleMeeting("7:30",30);     // true
scheduleMeeting("11:30",60);    // true
scheduleMeeting("17:00",45);    // true
scheduleMeeting("17:30",30);    // false
scheduleMeeting("18:00",15);    // false