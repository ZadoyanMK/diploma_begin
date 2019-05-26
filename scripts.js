var textBlockData = {
    'flower': {
        'title': 'Flower',
        'description': 'this is flower'
    },
    'arduino-nano': {
        'title': 'Arduino nano',
        'description': 'Nano desc!'
    },
    'rs485-ttl': {
        'title': '',
        'description': ''
    },
    'raspberry': {
        'title': '',
        'description': ''
    },
    'rs485-usb': {
        'title': '',
        'description': ''
    },
    'wifi': {
        'title': '',
        'description': ''
    },
    'ds18b20': {
        'title': '',
        'description': ''
    },
    'solar-panel': {
        'title': 'Solar Panel',
        'description': 'Solar panel description!'
    },
    'solar-panel-voltage': {
        'title': '',
        'description': ''
    },
    'solar-panel-amperage': {
        'title': '',
        'description': ''
    },
    'global-voltage': {
        'title': '',
        'description': ''
    },
    'global-amperage': {
        'title': '',
        'description': ''
    },
    'reley': {
        'title': '',
        'description': ''
    },
    'sg90-servo': {
        'title': '',
        'description': ''
    },
    'laser-receiver': {
        'title': '',
        'description': ''
    },
    'laser': {
        'title': '',
        'description': ''
    },
    'window': {
        'title': '',
        'description': ''
    },
    'mg135-air': {
        'title': '',
        'description': ''
    },
    'pir': {
        'title': '',
        'description': ''
    },
    'rfid-rc522': {
        'title': '',
        'description': ''
    },
    'door': {
        'title': '',
        'description': ''
    },
    'air-pipe': {
        'title': '',
        'description': ''
    },
    'ventilation-recuperaptor': {
        'title': '',
        'description': ''
    },
    'dht22': {
        'title': '',
        'description': ''
    },
    'peltye': {
        'title': '',
        'description': ''
    },
    'dht11': {
        'title': '',
        'description': ''
    },
    'sun-light': {
        'title': '',
        'description': ''
    },
    'white-led-strip': {
        'title': '',
        'description': ''
    },
    'rgb-led-strip': {
        'title': '',
        'description': ''
    },
    'light-sensor': {
        'title': '',
        'description': ''
    },
    'garage-door': {
        'title': '',
        'description': ''
    },
}

$( document ).ready(function() {
    Object.keys(textBlockData).map( (ob) => {
        $('.' + ob).hover( (e) => {
            $('.' + ob).css({
                opacity: 1
            });
        });
        $('.' + ob).mouseover( (e) => {
            $('.' + ob).css({
                opacity: 0.6
            });
        });
        $('.' + ob).tooltip(
            {
                delay: { "show": 100, "hide": 100 },
                title: textBlockData[ob]['title'], 
            }
        );
        $('.' + ob).click(function(e){
            $('#modalWindow #modalWindowTitle').html(textBlockData[ob]['title']);
            $('#modalWindow #text-description').html(textBlockData[ob]['description']);

            let type = '.jpg';
            const png_images = [
                'solar-panel', 'ds18b20', 'pir', 'flower'
            ];

            if ($.inArray(ob, png_images) != -1){
                type = '.png';
            }

            $('#modalWindow #img-description img').attr({
                src: 'images/for_modal/' + ob + type,
                alt: textBlockData[ob]['title'],
            })
            $('#modalWindow').modal('show')
        });
    })
});
