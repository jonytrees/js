var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(var key in obj){
        if(typeof obj[key] == 'string'){
            continue;
        }
        obj[key] *= 2;
        alert(obj[key]);
    }
}

multiplyNumeric(menu);