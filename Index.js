window.onload = function(){
    
    function printTime(){
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        
        minute = checkTime(minute);
        second = checkTime(second);
        
        document.getElementById("clock").innerHTML = hour+":"+minute+":"+second;
    }
    
    function checkTime(i){
        if(i<10){
            i = "0" + i;
        }
        return i;
    }
    
    setInterval(printTime,1000);
    
}