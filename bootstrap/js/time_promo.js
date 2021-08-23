$('#clock').countdown('2021-07-10 19:00:00', function (event) {
  var totalHours = event.offset.totalDays * 24 + event.offset.hours;
  var totalMinutes = totalHours * 60;
  var $this = $(this).html(event.strftime(
    '<div class="clockItem"><span class="clockObject">%D</span> <span class="clockTxt">Dias</span> </div>' +
    '<div class="clockItem"><span class="clockObject">%H</span> <span class="clockTxt">Horas</span> </div>' +
    '<div class="clockItem"><span class="clockObject">%M</span> <span class="clockTxt">Minutos</span> </div>' +
    '<div class="clockItem"><span class="clockObject">%S</span> <span class="clockTxt">Segundos</span> </div>'
  ));
})
  .on('finish.countdown', function (event) {
    $(this).html('This offer has expired!').parent().addClass('disabled');
  });