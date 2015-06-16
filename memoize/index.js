module.exports = function(fn) {
    var memory = {};
    return function (e, un) {
        
        if (memory.__diff !== un) {
            memory = {};
            memory.__diff = un;
        }
        if (memory[e] !== undefined){
            return memory[e];
        }
        memory[e] = fn(e);
        return memory[e];
    }
}