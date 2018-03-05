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
var webdriver = require('selenium-webdriver');
const util = require('util');
var fs = require('fs');
require('events').EventEmitter.defaultMaxListeners = 0;
//var webdriverUtil = require('selenium-webdriver-util');




var driver = new webdriver.Builder().forBrowser('firefox').build();
driver.manage().window().maximize();
const setTimeoutPromise = util.promisify(setTimeout);
driver.get('https://vk.com/audios76995859').then(function(){
    console.log("1");
    driver.findElement({id: 'email'}).click();
    driver.findElement({id: 'email'}).sendKeys("89821469162");
    driver.findElement({id: 'pass'}).click();
    driver.findElement({id: 'pass'}).sendKeys("Zx1#qwerty1906ugjoij");
    driver.findElement({id: 'login_button'}).click();


    driver.sleep(5000).then(function(){
      console.log("sleeeep___________________________________");

      driver.get('https://vk.com/audios21613066').then(function(){
        for(var i = 0; i<100; i++){
          driver.executeScript("window.scrollBy(0,1000)");
        //  console.log(i+" scroll");
        }
        driver.sleep(5000).then(function(){
          console.log("sleeeep**************");
        console.log("2");
        driver.findElements(webdriver.By.css(".audio_row__performer")).then(function(cheeses){
          console.log(cheeses.length);
          console.log(cheeses.length*0.25);
          var a1 = cheeses.length*0.5;
          console.log(a1);
          a1=Math.floor(a1);
          console.log(a1+" округление");
          var a2 = cheeses.length*0.5;
          var a3 = cheeses.length*0.75;




          /*
          cheeses.forEach(function(item, index, array) {
            console.log(item, index);
          });*/


/*
  for (var i = 0; i <= cheeses.length; i++) {
        console.log(i+" 1");

        setTimeoutPromise(20,i).then(function(i){
          cheeses[i].getText().then(function(text){
              console.log(i+` ${text}`);
                                    fs.appendFile("hello.txt", `${i} ${text}\n`, function(error){
                                      if(error) throw error; // если возникла ошибка
                                    });
              }, function(err){
              console.log(i+` ${i} ********************* `+ err);
              console.log(`ОШИБКА!!!!*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_***_*_`);
                      cheeses[i].getText().then(function(text){
                          console.log(i+` ${text}-----------------------------------------------------------`);
                                                fs.appendFile("hello.txt", `${i} ${text}\n`, function(error){
                                                  if(error) throw error; // если возникла ошибка
                              });
                          }, function(err){
                          console.log(i+` ${i} ********************* `+ err);
                          console.log(`ОШИБКА!!!!*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_***_*_`);
                        });
            });

        });

    }
*/






      },function(){console.log("Не найден ни один трек");});
      });
});
    });

  });





//driver.wait(until.elementLocated(By.id('foo')), 10000,'Мое сообщение');
//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//driver.manage().setTimeouts({implicit:100,pageLoad:1000,script:100});
//driver.manage().getTimeouts();

//var a = driver.getPageSource();
//console.log(a);

//driver.get('https://vk.com/zahar4506');
//driver.quit();
//************************************************************
