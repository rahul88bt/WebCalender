function calender(){
    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month=["January","February","March","April","May","june","July","August","Septemper","Octobar","November","December"];
    var d=new Date();
    setText('calender-day',day[d.getDay()]);
    setText('calender-date',d.getDate());
    setText('calender-month-year',month[d.getMonth()]+' '+(d.getFullYear()));
};

function setText(id,val){
    if(val<10){
        val='0'+val;

    }
    document.getElementById(id).innerHTML=val;
};


window.onload=calender;