// let drinkwareCounter =0;
// let drinkwaresList = [

// ];
export let typesList = ['Long drinks', 'Short drinks', 'Шоты', 'Апперитивы', 'Диджестивы', 'Горячие', 'Молочные', 'Десертные', 'Слоистые', 'Дейзи', 'Джулепы',  'Кардинал', 'Коллинз', 'Куллер', 'Сангари', 'Сауэр', 'Слинг', 'Смэш', 'Суизл', 'Физз', 'Фикс', 'Флипп', 'Фраппе'];
// cocktailsTypesObject.properties.filter((value)=>{
//     if ("strongness" === value.type){
//         return true
//     }
//     return false
// })
export let cocktailsTypesObject = [
    {name:'Long drinks', properties: {
        glassType:"glass", dinkStrength:"middle", drinkBase:  ['Бренди', 'Кальвадос'] 
    } }, 
    {name: 'Short drinks', properties: { 
        glassType:"shot", dinkStrength:"hight", drinkBase: ['Абсент', 'Водка', 'Джин', 'Виски', 'Текила','Ром', 'Коньяк'] 
     }}, 
    {name: 'Шоты', properties:{
        glassType:"shot", dinkStrength:"hight", drinkBase: ['Абсент', 'Водка', 'Джин', 'Виски', 'Текила','Ром', 'Коньяк'] 
     } }, 
    {name: 'Апперитивы', properties:{
        glassType:"wineGlass", dinkStrength:"low", drinkBase:  ['Вино', 'Мартини']
    }}, 
    {name: 'Диджестивы', properties:{
        glassType:"wineGlass", dinkStrength:"low", drinkBase:   ['Вино', 'Мартини']
     } },
    {name:'Горячие', properties:{
        glassType:"glass", dinkStrength:"hight", drinkBase:   ['Абсент', 'Водка', 'Джин', 'Виски', 'Текила','Ром', 'Коньяк']
     } }, 
    {name:'Молочные', properties:{
        glassType:"glass", dinkStrength:"zero", drinkBase: ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
     } }, 
    {name:'Десертные', properties:{
        glassType:"martiniGlass", dinkStrength:"zero", drinkBase:   ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
     } }, 
    {name:'Слоистые', properties:{
        glassType:"glass", dinkStrength:"hight", drinkBase:   ['Абсент', 'Водка', 'Джин', 'Виски', 'Текила','Ром', 'Коньяк']
     } }, 
    {name:'Дейзи', properties:{
        glassType:"martiniGlass", dinkStrength:"zero", drinkBase:   ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
     } }, 
    {name:'Джулепы', properties: {
        glassType:"glass", dinkStrength:"zero", drinkBase:   ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
    } },  
    {name:'Кардинал', properties:{
        glassType:"shot", dinkStrength:"hight", drinkBase:   ['Абсент', 'Водка', 'Джин', 'Виски', 'Текила','Ром', 'Коньяк']
     } }, 
    {name:'Коллинз', properties:{
        glassType:"shot", dinkStrength:"zero", drinkBase:   ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
     } }, 
    {name:'Куллер', properties:{
        glassType:"glass", dinkStrength:"zero", drinkBase:   ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
     } }, 
    {name:'Сангари', properties:{
        glassType:"wineGlass", dinkStrength:"zero", drinkBase:   ['Вода', 'Сироп', 'Ликёр', 'Лемонад']
     } }, 
    {name:'Сауэр', properties:{
        glassType:"WineGlass", dinkStrength:"low", drinkBase:   ['Вино', 'Мартини']
     } }, 
    {name:'Слинг', properties:{
        glassType:"shot", dinkStrength:"low", drinkBase:   ['Вино', 'Мартини']
     } }, 
    {name:'Смэш', properties:{
        glassType:"glass", dinkStrength:"low", drinkBase:   ['Вино', 'Мартини']
     } }, 
    {name:'Суизл', properties:{
        glassType:"martiniGlass", dinkStrength:"low", drinkBase:   ['Вино', 'Мартини']
     } }, 
    {name:'Физз', properties:{
        glassType:"martiniGlass", dinkStrength:"low", drinkBase:   ['Вино', 'Мартини']
     } }, 
    {name:'Фикс', properties:{
        glassType:"shot", dinkStrength:"middle", drinkBase:   ['Бренди', 'Кальвадос']
     } }, 
    {name:'Флипп', properties:{
        glassType:"shot", dinkStrength:"middle", drinkBase:   ['Бренди', 'Кальвадос']}
     }, 
    {name:'Фраппе', properties:{
        glassType:"shot", dinkStrength:"middle", drinkBase:   ['Бренди', 'Кальвадос']
     } },  
];

export let strongnessList = ['Безалкогольные', 'Слабоградусные', 'Полукрепкие', 'Крепкие'];
export let drinkBaseList = ['Абсент', 'Водка', 'Джин', 'Виски', 'Бренди', 'Кальвадос', 'Вода', 'Сироп', 'Ликёр', 'Текила','Ром', 'Коньяк', 'Вино', 'Мартини'];
export let drinkwaresDrinksObj = [
    ['Сауэр', 'Слинг', 'Смэш', 'Суизл', 'Физз', 'Фикс', 'Флипп', 'Фраппе'],
    ['Слоистые', 'Дейзи', 'Джулепы',  'Кардинал', 'Коллинз', 'Куллер', 'Сангари'],
    ['Long drinks', 'Молочные', 'Десертные'],
    ['Short drinks', 'Шоты', 'Апперитивы', 'Диджестивы', 'Горячие', ]
]
export let strongnessObj = [
    [{name:'Вода', elements:["Вода"]}, 'Сироп', 'Ликёр', 'Лемонад'],
    ['Бренди', 'Кальвадос'],
    ['Вино', 'Мартини'],
    ['Абсент', 'Водка', 'Джин', 'Виски', 'Текила','Ром', 'Коньяк' ]
];
export let ingredients = [
    {key:'Добавить ингридиент', }, 'Абсент', 'Водка', 'Джин', 'Виски', 'Бренди', 'Кальвадос', 'Вода', 'Сироп', 'Ликёр', 'Текила','Ром', 'Коньяк', 'Вино', 'Мартини'
]
export let portionScale = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',];
export let timeScale = ['7', '10', '15', '20', '30', '45', '60', '90', '120'];
export let complexityScale = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',];
export let methods = ['Не важно', 'В шейкере', 'Билд', 'Стир', 'Бленд',]
export let decorations = ['Апельсин', 'Мята', 'Взбитые сливки', 'Виноград', 'Вишня', 'Мандарин', 'Долька лимона', 'Корица', 'Мускатный орех','Ананас', 'Оливка', 'Зонтик', 'Соломинка', ];
export let tags = ['Овощные', 'Огненные', 'Освежающие', 'Пикантные', 'Пунш', 'С мороженым', 'Сладкие', 'Солёные', 'Острые', 'Крепкие','Со льдом', 'С украшением', 'Крепкие', 'Безалкогольные'];

