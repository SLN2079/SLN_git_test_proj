"usr stict";

function first() {
    //do something
    setTimeout(function(){
        console.log(1);
    }, 250);
}
    function second() {
            console.log(2);
        };

    first();
    second();

    function learnJS(lang, callback){
        console.log(`Ja uchu ${lang}`);
        callback();
    }
    
    function done() {
        console.log('Ya proshel etot urok');
    }

    learnJS('JavaScrypt', done);

        