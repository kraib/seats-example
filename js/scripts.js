/**
 * Created by kraiba on 15/11/2016.
 */
var $ = require('jquery');

var init=require('./seat.js');
var settings=require('./settings.js');
//test case
var seats=[
{'seat_id':1, 'seat_name': '1A', 'seat_type': 'executive','booked':false},
{'seat_id':2, 'seat_name': '1B', 'seat_type': 'ordinary','booked':false},
{'seat_id':3, 'seat_name': '2A', 'seat_type': 'vip','booked':false},
{'seat_id':4, 'seat_name': '2B', 'seat_type': 'executive','booked':true},
{'seat_id':5, 'seat_name': '3A', 'seat_type': 'ordinary','booked':false},
{'seat_id':6, 'seat_name': '3B', 'seat_type': 'vip','booked':false},
{'seat_id':7, 'seat_name': '4A', 'seat_type': 'executive','booked':true},
{'seat_id':8, 'seat_name': '4B', 'seat_type': 'executive','booked':false},
{'seat_id':9, 'seat_name': '5A', 'seat_type': 'ordinary','booked':false},
{'seat_id':10, 'seat_name': '5B', 'seat_type': 'executive','booked':false},
{'seat_id':11, 'seat_name': '6A', 'seat_type': 'ordinary','booked':true},
{'seat_id':12, 'seat_name': '6B', 'seat_type': 'vip','booked':true}
    ]

$('#place').html(init(seats));

$('.' + settings.seatCss).click(function () {
    if ($(this).hasClass(settings.selectedSeatCss)){
        alert('This seat is already reserved');
    }
    else{
        var seat_no =$(this).attr('id');
        alert(seats[seat_no-1].seat_name);
    }
});

$('#btnShow').click(function () {
    var str = [];
    $.each($('#place li.' + settings.selectedSeatCss + ' a, #place li.'+ settings.selectingSeatCss + ' a'), function (index, value) {
        str.push($(this).attr('title'));
    });
    alert(str.join(','));
})

$('#btnShowNew').click(function () {
    var str = [], item;
    $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');
        str.push(item);
    });
    alert(str.join(','));
})