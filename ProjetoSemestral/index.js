document.addEventListener('DOMContentLoaded', function () {
    var containerCalendario = document.getElementById('calendario');
    var diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    var eventos = [];

    // Cria cabeçalhos para cada dia da semana
    diasDaSemana.forEach(function (dia) {
        var cabecalhoDia = document.createElement('div');
        cabecalhoDia.classList.add('dia', 'dia-header');
        cabecalhoDia.textContent = dia;
        containerCalendario.appendChild(cabecalhoDia);
    });

    // Cria espaços reservados para cada dia do mês no calendário
    for (var i = 1; i <= 31; i++) {
        var dia = document.createElement('div');
        dia.classList.add('dia');
        dia.textContent = i;
        dia.dataset.date = i;
        dia.addEventListener('click', function(event) {
            var date = event.target.dataset.date;
            var eventName = prompt('Digite o nome do evento:');
            if(eventName) {
                var eventType = prompt('O evento é uma aula ou uma prova? (Digite "aula" ou "prova")');
                if(eventType === 'aula' || eventType === 'prova') {
                    addEvent(eventName, date, eventType);
                } else {
                    alert('Tipo de evento inválido.');
                }
            }
        });
        containerCalendario.appendChild(dia);
    }

    function addEvent(name, date, type) {
        eventos.push({name: name, date: date, type: type});
        renderEvents();
    }

    function renderEvents() {
        containerCalendario.querySelectorAll('.event').forEach(function(event) {
            event.remove();
        });
        eventos.forEach(function(event) {
            var dia = containerCalendario.querySelector('[data-date="' + event.date + '"]');
            var eventoDiv = document.createElement('div');
            eventoDiv.classList.add('event');
            eventoDiv.textContent = event.name;
            if(event.type === 'aula') {
                eventoDiv.classList.add('lesson');
            } else {
                eventoDiv.classList.add('test');
            }
            dia.appendChild(eventoDiv);
        });
    }
});
