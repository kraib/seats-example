/**
 * Created by kraiba on 15/11/2016.
 */
var settings=require('./settings.js');

var init = function (seats) {
    var str = [], seatNo=1, className;
    var rows = calculateRows(seats);
    for (i = 0; i <= rows; i++) {
        for (j = 0; j < settings.cols; j++) {
            if(seatNo <=  seats.length) {
                var seat = seats[seatNo - 1];

                className = seat.seat_type + ' ' + settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                if (seat.booked) {
                    className += ' ' + settings.selectedSeatCss;
                }
                str.push('<li id="' + seatNo + '" class="' + className + '"' +
                    'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px">' +
                    '<a title="' + seat.seat_name + '">' + seat.seat_name + '</a>' +
                    '</li>');
                ++seatNo;
            }
        }
    }
    return str.join('');
};

function calculateRows(seats) {
    return Math.floor(seats.length/settings.cols);
}

module.exports = init;