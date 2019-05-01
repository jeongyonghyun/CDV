var time = document.getElementById("time");

setInterval(function(){
    var d = new Date(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay(),
    hour = d.getHours(),
    min = d.getMinutes(),
    sec = d.getSeconds(),
    ampm = (hour < 12)? "午前" : "午後",
    month = month + 1,
    hour = (hour > 12)? hour-12 : hour,
    min_0 = (min < 10)? "0"+min : min,
    sec_0 = (sec < 10)? "0"+sec : sec;

    switch(day){
        case 0 : day = "sun"; break;
        case 1 : day = "mon"; break;
        case 2 : day = "tue"; break;
        case 3 : day = "wed"; break;
        case 4 : day = "thur"; break;
        case 5 : day = "fri"; break;
        case 6 : day = "sat"; break;
    }

    var current_time = year + "年" + month + "月" + date + "日" + day+ "" + ampm + " " + hour +":" + min_0 + ":" + sec_0;
    time.innerHTML = current_time;
},1000);

function cal (new_year,new_month){
    var d = new Date(new_year,new_month-1,1),
        d_length = 32 - new Date(new_year,new_month-1,32).getDate(),
        year = d.getFullYear(),
        month = d.getMonth(),
        date = d.getDate(),
        day = d.getDay();

    var caption_year = document.querySelector(".year"),
        caption_month = document.querySelector(".month"),
        start_day = document.querySelectorAll("tr td");

    for(var i=0 ; i<start_day.length ; i++){
        start_day[i].innerHTML = "&nbsp;";
    }

    for(var i=day ; i<day+d_length ; i++){
        start_day[i].innerHTML = date;
        date++;
    }

    caption_year.innerHTML = year;
    caption_month.innerHTML = month+1;
}

(function(){
    var prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        origin = document.getElementById("origin"),
        year = new Date().getFullYear(),
        month = new Date().getMonth()+1;

        cal(year,month);

        prev.onclick = function(){
            cal(year,--month);
        };
        
        next.onclick = function(){
            cal(year,++month);
        };

        origin.onclick = function(){
            var y = new Date().getFullYear(),
                m = new Date().getMonth();
            cal(y,m+1);
        }


})();