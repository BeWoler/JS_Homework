function Animal(name) {
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.name = name;

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.call(this, name);

    function catHappy() {
        console.log('Кот доволен ^_^');
    };

   

    var self = this;

    

    self.stroke = function() {
        console.log('Гладим кота');
        return self;
    };

    self.animalFeed = function() {
        this.feed.call(this);
        return self;
    }
}

var barsik = new Cat('Barsik');
