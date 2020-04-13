function loadCookies(){
    let timeBox = document.getElementById("cookieP");
    let timeCookie = getCookie("pageCookie");
    if(timeCookie!==""){
        timeBox.innerText = timeCookie;
    }
    else{
        setCookie(window.prompt("Enter text to be stored", "text"));
    }
}

function setCookie(text) {
    let d = new Date();
    d.setTime(d.getTime() + (2*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "pageCookie" + "=" + text + ";" + expires + ";path=/";

    alert("Reload the page to see the new cookie loaded!");
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}