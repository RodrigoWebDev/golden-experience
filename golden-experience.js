var _ = document.querySelectorAll.bind(document);

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function forEach(element, fn) {
    for (var i = 0; i < _(element).length; i++) {
        fn(_(element)[i], i);
    }
}

/*forEach("button", function (e, i) {
    e.addEventListener("click", function () {
        console.log(i);
    });
})*/

function json(method, url, success) {

    var data;
    var request = new XMLHttpRequest();
    request.open(method, url, true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            success(data);
        } else {
            console.error("We reached our target server, but it returned an error")
        }
    };

    request.onerror = function () {
        console.error("There was a connection error of some sort");
    };

    request.send();

    return data;
}

/*json("GET", "https://jsonplaceholder.typicode.com/posts/", function(data){
    console.log(data);
});*/

function fadeIn(element, speed, type) {
    if (speed === undefined) {
        speed = 300;
    }

    if (type === undefined) {
        type = "block";
    }
    _(element).style.cssText = "display:" + type + "; transition: opacity " + speed + "ms; opacity: 1"
}

/*forEach(".fadeIn", function(e){
    e.addEventListener("click", function(){
        fadeIn(_(".click")[0], 400, "inline-block");
    })
});*/

function fadeOut(element, speed) {
    if (speed === undefined) {
        speed = 300;
    }

    _(element).style.cssText = "transition: opacity " + speed + "ms; opacity: 0"
    setTimeout(function () {
        _(element).style.display = "none";
    }, speed)
}

/*forEach(_(".fadeOut"), function(e){
    e.addEventListener("click", function(){
        fadeOut(_(".click")[0], 400);
    })
});*/

function on(event, element, fn) {
    forEach(element, function (e) {
        e.addEventListener("click", function () {
            fn();
        });
    });
}

/*on("click", "button", function(){
    console.log("click")
})*/

function hide(element) {
    element.style.display = "none";
}

//hide(_("button")[0]);

function show(element, type) {
    if (type === undefined) {
        type = "block";
    }
    element.style.display = type;
}

//show(_("button")[0], "flex");

function after(element, html) {
    element.insertAdjacentHTML('afterend', html);
}

//after(_(".fadeOut")[0], "<p> Lorem ipsum dolor </p>");

function before(element, html) {
    element.insertAdjacentHTML('beforebegin', html);
}

//after(_(".fadeOut")[0], "<p> Lorem ipsum dolor </p>");

function trigger(el, event) {
    // For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
    var event = document.createEvent('HTMLEvents');
    event.initEvent(event, true, false);
    el.dispatchEvent(event);
}