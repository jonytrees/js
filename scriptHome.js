var menu = {
    name: '',
    age: 13,
    method: function(){
        alert('menu');
    },
}

Object.defineProperty(menu, 'name', { // Object.defineProperty служит для определения атрибутов
    value: 'tom',
    writable: false, // доступность свойства для записи, возможность переопределить
    enumerable: false, // доступность перечисления для цикла for(in), доступность к свойству
    configurable: true, // доступность свойства для настройки, если false до ниже нельзя будет преопределить атрибуты ниже
});

var obj = {
    subname : 'smith',
    __proto__ : menu,

}

obj.func2 = function(){
    return this.subname + ' ' + this.name;
};

obj.name = 'cole';

// obj.method = 'obj';


// for(var key in obj){
//     if(typeof obj[key] == 'function'){
//         alert(obj[key]);
//     }
// }

alert(obj.func2());



