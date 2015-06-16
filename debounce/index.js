module.exports = function(fn, time){
    var run = true, ran = false;
    return function(){
        var that = this, args = [].slice.call(arguments);
        if (!ran) { 
            clearTimeout(run);
            run = setTimeout(function(){fn.apply(that, args); ran = true;}, time);
            return;
        }
        ran = false;
        run = setTimeout(function(){fn.apply(that, args); ran = true}, time);
   }
};