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

    this.animalFeed = function() {
        console.log('У каждого животного свой корм');
    }
}

function Cat(name) {
    Animal.call(this, name);

    this.paws = 4;

    function catHappy() {
        console.log('Кот доволен ^_^');
    };

    var catLike = this.feed;

    var self = this;

    self.feed = function() {
        catLike.call(this);
        catHappy();
        return self;
    };

    self.stroke = function() {
        console.log('Гладим кота');
        return self;
    };

    var whiskas = this.animalFeed;

    function catFeed() {
        console.log('Для котиков это whiskas ');
    }
    self.animalFeed = function() {
        whiskas.call(this);
        catFeed();
        return self;
    }
}

var barsik = new Cat('Barsik');

console.log(barsik.name);
console.log(barsik.dailyNorm(49));
console.log(barsik.feed());
console.log(barsik.stroke().feed().stroke().stroke().feed().feed());
console.log(barsik.dailyNorm(250));
console.log(barsik.feed());