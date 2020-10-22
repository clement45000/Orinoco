function get(url){
    const promise = new Promise(function (resolve, reject){
        const request = new XMLHttpRequest();
        request.open("GET",url);
        request.onreadystatechange = function(){
            if (this.readyState === XMLHttpRequest.DONE) {
                if(this.status === 200){
                    resolve(JSON.parse(request.responseText));
                }else {
                    reject(request.status);
                }
            }
        };
        request.send();
    });
    return promise;
}

