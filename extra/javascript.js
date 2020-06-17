// add target="_blank" to href property to let link open in new tab
document.getElementsByClassName("md-content__button md-icon")[0].target = "_blank";

/*
This section is only required when the "instant" feature of mkdocs is enabled.
It sends a XMLHTTPRequest (Ajax) to load pages dynamically.
Therefore we have to detect this request in order to apply our changes also to the new page

from https://stackoverflow.com/a/20714771
*/

var proxied = window.XMLHttpRequest.prototype.send;
window.XMLHttpRequest.prototype.send = function() {    
    var pointer = this
    var intervalId = window.setInterval(function(){
            if(pointer.readyState != 4){
                    // readyState 4 means answer arrived
                    return;
            }
            //Here is where you can add any code to process the response.
            document.getElementsByClassName("md-content__button md-icon")[0].target = "_blank";
            clearInterval(intervalId);

    }, 1);//I found a delay of 1 to be sufficient, modify it as you need.
    return proxied.apply(this, [].slice.call(arguments));
}


