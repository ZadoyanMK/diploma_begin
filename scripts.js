var textBlockData = {
    '.arduino-nano': {
        'title': 'Arduino nano',
        'image': 'arduino_nano_terminal.jpg',
        'description': 'Nano desc!'
    },
    '.rs485-ttl': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.raspberry': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.rs485-usb': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.wifi': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.ds18b20': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.solar-panel': {
        'title': 'Solar Panel',
        'image': 'solar_panel.png',
        'description': 'Solar panel description!'
    },
    '.solar-panel-voltage': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.solar-panel-amperage': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.global-voltage': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.global-amperage': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.reley': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.main-door': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.sg90-servo': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.garage-door': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.laser-receiver': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.laser': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.window': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.mg135-air': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.pir': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.rfid-rc522': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.door': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.air-pipe': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.dht22': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.peltye': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.dht11': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.sun-light': {
        'title': '',
        'image': '',
        'description': ''
    },'.white-led-strip': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.rgb-led-strip': {
        'title': '',
        'image': '',
        'description': ''
    },
    '.light-sensor': {
        'title': '',
        'image': '',
        'description': ''
    },
}

$( document ).ready(function() {
    Object.keys(textBlockData).map( (ob) => {
        $(ob).hover( (e) => {
            $(ob).css({
                opacity: 1
            });
        });
        $(ob).mouseover( (e) => {
            $(ob).css({
                opacity: 0.6
            });
        });
        $(ob).tooltip(
            {
                delay: { "show": 100, "hide": 100 },
                title: textBlockData[ob]['title'], 
            }
        );
        $(ob).click(function(e){
            $('#modalWindow #modalWindowTitle').html(textBlockData[ob]['title'])
            $('#modalWindow #text-description').html(textBlockData[ob]['description'])
            $('#modalWindow #img-description img').attr({
                src: 'images/' + textBlockData[ob]['image'],
                alt: textBlockData[ob]['title'],
            })
            $('#modalWindow').modal('show')
        });
    })
});
