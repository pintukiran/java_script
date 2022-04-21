//mon 7am
//tus 8am
//wendnesday 9am
//thus  6am
//fri 5am    saturday 9am   sun 4am


let day="Holiday";
switch(day){
    case "Friday":
        console.log("7am");
        break;
    case "Tuesday":
        console.log("3am");
        break;
    case "Wednesday":
        console.log("4am");
        break;
     case "thursday":
        console.log("5am");
        break;
    case "Friday":
        console.log("2am");
        break;
    case "saturday":
        console.log("8am");
        break;
    case "sunday":
        console.log("10am");

    default:
        console.log("bye");
}


console.log("////////////////////////////////////////////////");

let day1 = 6;
//let dayName;

switch (day1) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday