(function() {
    angular.module('plantilla')
        .service('NavigationProgress', function () {
            var itemmenu = {
                item1:true,
                item2:true,
                item3:true,
                item4:true,
                item5:true,
                a:[false,false,false],
                b:[false,false,false],
                c:[false,false,false],
                d:[false,false,false],
                e:[false,false,false]
            };

            this.viewed1 = function() {itemmenu.item1 = false;};
            this.viewed2 = function() {itemmenu.item2 = false;};
            this.viewed3 = function() {itemmenu.item3 = false;};
            this.viewed4 = function() {itemmenu.item4 = false;};
            this.viewed5 = function() {itemmenu.item5 = false;};

            this.viewedA = function(opc) {itemmenu.a[parseInt(opc)] = true;}
            this.viewedB = function(opc) {itemmenu.b[parseInt(opc)] = true;}
            this.viewedC = function(opc) {itemmenu.c[parseInt(opc)] = true;}
            this.viewedD = function(opc) {itemmenu.d[parseInt(opc)] = true;}
            this.viewedE = function(opc) {itemmenu.e[parseInt(opc)] = true;}

            this.getProgress = function()
            {
                return itemmenu;
            };
        });
})();