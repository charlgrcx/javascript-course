'use strict';

console.log('Mapty OOP Foundation');

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;
}
