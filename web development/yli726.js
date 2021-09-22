function showDunedinDairy() {
    document.getElementById("homepage").style.display = "block";
    document.getElementById("news").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("person").style.display = "none";
    document.getElementById("register").style.display = "none";

    document.getElementById("dairytab").style.backgroundColor = "lightgrey";
    document.getElementById("newstab").style.backgroundColor = "transparent";
    document.getElementById("locationtab").style.backgroundColor = "transparent";
    document.getElementById("booktab").style.backgroundColor = "transparent";
    document.getElementById("persontab").style.backgroundColor = "transparent";
    document.getElementById("registertab").style.backgroundColor = "transparent";
}


function showNews() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("news").style.display = "block";
    document.getElementById("location").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("person").style.display = "none";
    document.getElementById("register").style.display = "none";

    document.getElementById("dairytab").style.backgroundColor = "transparent";
    document.getElementById("newstab").style.backgroundColor = "lightgrey";
    document.getElementById("locationtab").style.backgroundColor = "transparent";
    document.getElementById("booktab").style.backgroundColor = "transparent";
    document.getElementById("persontab").style.backgroundColor = "transparent";
    document.getElementById("registertab").style.backgroundColor = "transparent";
}
function showLocation() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("location").style.display = "block";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("person").style.display = "none";
    document.getElementById("register").style.display = "none";

    document.getElementById("dairytab").style.backgroundColor = "transparent";
    document.getElementById("newstab").style.backgroundColor = "transparent";
    document.getElementById("locationtab").style.backgroundColor = "lightgrey";
    document.getElementById("booktab").style.backgroundColor = "transparent";
    document.getElementById("persontab").style.backgroundColor = "transparent";
    document.getElementById("registertab").style.backgroundColor = "transparent";
}
function showGuestBook() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("guestbook").style.display = "block";
    document.getElementById("person").style.display = "none";
    document.getElementById("register").style.display = "none";

    document.getElementById("dairytab").style.backgroundColor = "transparent";
    document.getElementById("newstab").style.backgroundColor = "transparent";
    document.getElementById("locationtab").style.backgroundColor = "transparent";
    document.getElementById("booktab").style.backgroundColor = "lightgrey";
    document.getElementById("persontab").style.backgroundColor = "transparent";
    document.getElementById("registertab").style.backgroundColor = "transparent";
}
function showPerson() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("person").style.display = "block";
    document.getElementById("register").style.display = "none";

    document.getElementById("dairytab").style.backgroundColor = "transparent";
    document.getElementById("newstab").style.backgroundColor = "transparent";
    document.getElementById("locationtab").style.backgroundColor = "transparent";
    document.getElementById("booktab").style.backgroundColor = "transparent";
    document.getElementById("persontab").style.backgroundColor = "lightgrey";
    document.getElementById("registertab").style.backgroundColor = "transparent";
}
function showRegister() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("news").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("person").style.display = "none";
    document.getElementById("register").style.display = "block";

    document.getElementById("dairytab").style.backgroundColor = "transparent";
    document.getElementById("newstab").style.backgroundColor = "transparent";
    document.getElementById("locationtab").style.backgroundColor = "transparent";
    document.getElementById("booktab").style.backgroundColor = "transparent";
    document.getElementById("persontab").style.backgroundColor = "transparent";
    document.getElementById("registertab").style.backgroundColor = "lightgrey";
}
function showProducts() {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("products").style.display = "block";
    document.getElementById("news").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("guestbook").style.display = "none";
    document.getElementById("person").style.display = "none";
    document.getElementById("register").style.display = "none";
}


function getitem() {
    const x = document.querySelector(".item");
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/items", {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => {
        for (var i = 0; i < data.length; i++) {
            var a = Products(data[i]);
            x.append(a);
        }
    });
}

function Products(data) {
    var b_button = document.createElement("button");
    b_button.innerHTML = "buy now";
    b_button.onclick = getinfor(data);

    var d = document.createElement("div");

    createPic(d, data, "http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/itemimg?id=");
    createP(d, data.Origin);
    createP(d, data.Price);
    createP(d, data.Title);
    d.append(b_button);
    createHr(d);
    return d;
}

function getinfor(data) {
    const fetchPromise = fetch("https://cws.auckland.ac.nz/cors/CorsProxyService.svc/proxy?url=http://redsox.uoa.auckland.ac.nz/dsa/Service.svc/buy?id=" + data.ItemId, {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => alert(data));
}


//
//
function createP(d, data) {
    var a = document.createElement('p');
    a.innerHTML = data;
    d.append(a);

}

function createPic(d, data, url) {
    var a = document.createElement('img');
    if (data.ItemId) {
        a.src = url + data.ItemId;
    } else {
        a.src = url;
    }
    d.append(a);
}

function createHr(d) {
    var a = document.createElement('hr');
    d.append(a);

}
//
//




function search(e) {
    const x = document.querySelector(".item");
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/search?term=" + e, {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => {
        for (var i = 0; i < data.length; i++) {
            var a = Product(data[i]);
            x.append(a);
        }
    });
}




function getnews() {
    const x = document.querySelector(".newslist");
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/news", {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.json());
    streamPromise.then((data) => {
        for (var i = 0; i < data.length; i++) {
            var a = news(data[i]);
            x.append(a);
        }
    });
}

function news(data) {

    var TitleField = document.createElement("a");
    TitleField.innerHTML = data.titleField;
    TitleField.href = data.linkField;
    var p = document.createElement("p");
    var d = document.createElement("div");


    createPic(d, data, data.enclosureField.urlField);
    d.append(p);
    d.append(TitleField);
    createP(d, data.pubDateField);
    createP(d, data.descriptionField);
    createHr(d)

    return d;
}



function vcard() {
    const x = document.querySelector(".vcard");
    const fetchPromise = fetch("http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/vcard", {
        headers: {
            "Accept": "application/json",
        },
    });
    const streamPromise = fetchPromise.then((response) => response.text());
    streamPromise.then((data) => {
        //alert(data);
        var d = document.createElement("p");
        var tel = document.createElement("a");
        tel.innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;";
        tel.href = "tel:";
        var start = data.search("VOICE:");
        var end = data.search("ADR;");
        for (let i = start + 6; i < end; i++) {
            tel.innerHTML += data[i];
            tel.href += data[i];
        }

        var email = document.createElement("a");
        email.href = "mailto:";
        start = data.search("EMAIL:");
        end = data.search("TEL;");
        for (let i = start + 6; i < end; i++) {
            email.innerHTML += data[i];
            email.href += data[i];
        }

        d.append(email);
        d.append(tel);
        x.append(d);

    });
}





var sleep = function (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {
    }
};

function sendcomment() {
    let comment = document.getElementById("comments").value;
    let name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    document.getElementById("comments").value = "";
    const xhr = new XMLHttpRequest();
    const uri = "http://redsox.uoa.auckland.ac.nz/ups/UniProxService.svc/comment?name=" + name;
    xhr.open("POST", uri, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send('"' + comment + '"');
    sleep(1000);
    document.getElementById("recentcomment").src = document.getElementById("recentcomment").src;
}



function sendregister() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var address = document.getElementById("address");
    const fetchPromise = fetch('http://redsox.uoa.auckland.ac.nz/ds/DairyService.svc/register',
        {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "Name": username.value, "Password": password.value, "Address": address.value })
        });
    username.value = " ";
    password.value = " ";
    address.value = " ";
}



window.onload = function () {
    showDunedinDairy();
    getitem();

    var n = document.getElementById("searchbar");
    var i = document.querySelector(".item");
    n.oninput = function () {
        if (n.value != "") {
            i.innerHTML = "";
            search(n.value);
        }
        else {
            i.innerHTML = "";
            getitem();
        }

    };
    getnews();
    vcard();
}
