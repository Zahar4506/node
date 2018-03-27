/*var express = require('express');
var app = express();
app.get('/', function(req,res){
	res.send('hello API');
})

app.listen(3012, function(){
	console.log('API START')
})
*/

//***********************************************************

var Pool = require('pg').Pool;
var config = {
  host: 'localhost',
  user: 'postgres',
  password: '1',
  database: 'vk',
};

var pool = new Pool(config);


var webdriver = require('selenium-webdriver');
const util = require('util');
var fs = require('fs');//работа с файлами
require('events').EventEmitter.defaultMaxListeners = 0;//неограниченные запросы
const setTimeoutPromise = util.promisify(setTimeout);


//*********************************************************************************************
// ФУНКЦИЯ ПАРСИНГА СТРАНИЦЫ ПОЛЬЗОВАТЕЛЯ
function userPars(idVK){
  console.log("нууууу-------------------------------------------------");
  driver.get(`${idVK}`).then(function(){
    //Скролл страницы
    for(var i = 0; i<100; i++){
      driver.executeScript("window.scrollBy(0,1000)");
    }
    driver.sleep(10000).then(function(){
      console.log("sleeeep**************");
    //Поиск исполнителей по тегу
     driver.findElements(webdriver.By.css(".audio_row__performer")).then(function(cheeses){
      console.log(cheeses.length);
  //Функция парсера аудио из найденых блоков
  function pars(i){
  setTimeoutPromise(2000,i).then(function(i){
   cheeses[i].getText().then(function(text){
    console.log(i+` ${text}`);
   set_hits(`${text}`).then(function(){},function(Error){console.log(Error+"qweqweqweqweqwe");});
//    set_hits1(`${text}`);
    //Запись в файл полученх результатов
    fs.appendFile("hello.txt", `${i} ${text}\n`, function(error){
      if(error) throw error; // если возникла ошибка
    });
  }, function(err){
    console.log(i+` ${i} ********************* `+ err);
    console.log(`ОШИБКА!!!!///////////////////////////////////////////////`);
    pars(i);
  });
  });
  }

  //Перебор треков со страницы
  //for (var i = 0; i <= cheeses.length; i++) {
  for (var i = 0; i <= cheeses.length; i++) {
  console.log(i+" 1");
  pars(i);
  }

  },function(){console.log("Не найден ни один трек");});



  });
});
}
//***************************************************************************************************



//Запуск браузера в полноэкранном режиме
var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
//Процесс авторизации в ВК
driver.get('https://vk.com/audios76995859').then(function(){
    console.log("1");
    driver.findElement({id: 'email'}).click();
    driver.findElement({id: 'email'}).sendKeys("89821469162");
    driver.findElement({id: 'pass'}).click();
    driver.findElement({id: 'pass'}).sendKeys("Zx1#qwerty1906ugjoij");
    driver.findElement({id: 'login_button'}).click();

//Ожидание 6 секунд на прогрузку авторизации
driver.sleep(6000).then(function(){
      console.log("sleep________________________");
//urlы пользователей через разделитель ", "
var idVK='https://vk.com/audios76995859';//, https://vk.com/audios392240310';
var arr = idVK.split(', ');
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    driver.sleep(5000).then(function(){
    console.log("Pause 0000000000000000 "+i);
    userPars(arr[i]);
});}, 5000);
  console.log('Вам сообщение --------------------' + arr[i]);
}
 //userPars(arr[0]);
/*
 setTimeoutPromise(10000).then(function(){console.log("ждемс----------------------10");
 fs.appendFile("hello.txt", `\n\n\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\n\n\n`, function(error){
   if(error) throw error; // если возникла ошибка
 });
 idVK="https://vk.com/audios392240310";
 userPars(idVK);
});
*/

});


},function(){console.log("Не удалось авторизоваться");});

//var a = driver.getPageSource();
//console.log(a);

//driver.get('https://vk.com/zahar4506');
//driver.quit();
//************************************************************


/*  //вывод ошикбки сервера
cheeses.forEach(function(item, index, array) {
  console.log(item, index);
});*/

async function get_hits(){
  try {
    var response = await pool.query("SELECT * FROM public.musicband ORDER BY musicbandid ASC");
    console.log(response.rows);
  } catch (e) {
    console.log("MY ERROR",e);
  }
}
//var name = "ROCK";

//set_hits(name);
get_hits();
  function set_hits(musicbandname){
   var mypromise = new Promise(function(resolve,reject){
     try { var response =  pool.query("INSERT INTO public.musicband(nameband) VALUES (upper('"+musicbandname+"'))");
           console.log(response.rows);
           resolve("Положил в базу");
     } catch (e) {
       reject(Error("Не положил в базу"));
       console.log("MY ERROR",e);
         }
   });
 }

  async function set_hits1(musicbandname){
    try {
      var response = await pool.query("INSERT INTO public.vkuser_musicband(vkuserid, musicbandid)	VALUES ('12', (SELECT musicbandid FROM public.musicband WHERE nameband = upper('"+musicbandname+"')))");
      console.log(response.rows);
    } catch (e) {
 console.log("MY ERROR",e);
    }

  }
