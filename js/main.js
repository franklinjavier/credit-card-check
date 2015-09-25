var ccc = require('./credit-card-check');
var cards = require('../data/cards.json');
var luhn = require('./luhn');
var _ = require('lodash');
var tpl = '';
NodeList.prototype.forEach = Array.prototype.forEach; 
HTMLCollection.prototype.forEach = Array.prototype.forEach; // Because of https://bugzilla.mozilla.org/show_bug.cgi?id=14869
var $cardNumber = document.querySelector('#cardNumber');

_.forEach(cards, function(cards, flag) {
    tpl += '<button class="btn btn-primary">'+ flag +'</button>';
});

document.querySelector('#demo').innerHTML = tpl;

function randomCard(flag) {
    var choose = cards[flag];
    if (!choose) 
        return false;
    return choose[_.random(0, choose.length)];
}

document.querySelectorAll('.btn').forEach(function(el) {
    el.onclick = function() {
        var r = randomCard(this.innerText);
        $cardNumber.value = r;
        console.log(this.innerText);
        
        valid(r)
    }; 
});


function valid(val) {
    var cardNumber = (val);
    document.querySelector('#msg').innerText = ccc.card(cardNumber);
    $cardNumber.value = cardNumber;
}

