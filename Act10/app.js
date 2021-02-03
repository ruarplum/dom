function say(something) {
    console.log(something);
}

say('hello');

function say(something) {
    console.log(something);
} 

function exec(func, arg){
    func(arg);
}

exec (say, "Hi, there");