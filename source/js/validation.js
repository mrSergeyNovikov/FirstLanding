(function() {
    var me = {};

    me.isEmail = function(email) {
        var re =  /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
        return re.test(email);
    };

    me.isNumber = function(number) {
        var re =  /^\d+$/;
        return re.test(number);
    };


    me.isNotEmpty = function(str) {
        return Boolean(str);
    }


    IT.validation = me;
})