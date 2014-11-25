var expect = require('chai').expect;
var bevis = require('../index.js')();

describe('Given we have block with name butthead', function() {
    var b = bevis.block('butthead');
    var className  = '';

    describe('When we call name without arguments', function() {
        beforeEach(function() {  className = b.name(); });

        it('Then className should be "butthead"', function() {
            expect(className).to.be.eql('butthead');
        });
    });

    describe('When we call name with arguments', function() {
        beforeEach(function() {  className = b.name('drunk', 'fallen'); });

        it('Then className should be "butthead _drunk _fallen"', function() {
            expect(className).to.be.eql('butthead _drunk _fallen');
        });
    });

    describe('When we call name and one of arguments is undefined', function() {
        beforeEach(function() {  className = b.name(undefined, 'drunk'); });

        it('Then className should be "butthead _drunk"', function() {
            expect(className).to.be.eql('butthead _drunk');
        });
    });

    describe('When we call name and one of arguments is null', function() {
        beforeEach(function() {  className = b.name(null, 'drunk'); });

        it('Then className should be "butthead _drunk"', function() {
            expect(className).to.be.eql('butthead _drunk');
        });
    });

    describe('When we call name and one of arguments is empty string', function() {
        beforeEach(function() {  className = b.name('', 'drunk'); });

        it('Then className should be "butthead _drunk"', function() {
            expect(className).to.be.eql('butthead _drunk');
        });
    });

    describe('When we call elem with one argument', function() {
        beforeEach(function() {  className = b.elem('hair'); });

        it('Then className should be "butthead__hair"', function() {
            expect(className).to.be.eql('butthead__hair');
        });
    });

    describe('When we call elem with two and more arguments', function() {
        beforeEach(function() {  className = b.elem('hair', 'disheveled', 'seared'); });

        it('Then className should be "butthead__hair _disheveled _seared"', function() {
            expect(className).to.be.eql('butthead__hair _disheveled _seared');
        });
    });

    describe('When we call elem and one of arguments is undefined', function() {
        beforeEach(function() {  className = b.elem('hair', undefined, 'disheveled'); });

        it('Then className should be "butthead__hair _disheveled"', function() {
            expect(className).to.be.eql('butthead__hair _disheveled');
        });
    });

    describe('When we call elem and one of arguments is null', function() {
        beforeEach(function() {  className = b.elem('hair', null, 'disheveled'); });

        it('Then className should be "butthead__hair _disheveled"', function() {
            expect(className).to.be.eql('butthead__hair _disheveled');
        });
    });

    describe('When we call name and one of arguments is empty string', function() {
        beforeEach(function() {  className = b.elem('hair', '', 'disheveled'); });

        it('Then className should be "butthead__hair _disheveled"', function() {
            expect(className).to.be.eql('butthead__hair _disheveled');
        });
    });

});

describe('Given we have block beavis with view great-cornholio', function() {
    var b = bevis.block('beavis', 'great-cornholio');
    var className  = '';

    describe('When we call name without arguments', function() {
        beforeEach(function() {  className = b.name(); });

        it('Then className should be "beavis_great-cornholio"', function() {
            expect(className).to.be.eql('beavis_great-cornholio')
        });
    });
});

describe('Given we have block beavis with null view name', function() {
    var b = bevis.block('beavis', null);
    var className  = '';

    describe('When we call name without arguments', function() {
        beforeEach(function() {  className = b.name(); });

        it('Then className should be "beavis"', function() {
            expect(className).to.be.eql('beavis')
        });
    });
});

describe('Given we have block beavis with empty string view name', function() {
    var b = bevis.block('beavis', '');
    var className  = '';

    describe('When we call name without arguments', function() {
        beforeEach(function() {  className = b.name(); });

        it('Then className should be "beavis"', function() {
            expect(className).to.be.eql('beavis')
        });
    });
});


