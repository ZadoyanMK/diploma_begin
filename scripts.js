const textBlockData = {
    'en-lang': {
        'en': {
            'title': 'English',
            'description': ''
        },
        'ua': {
            'title': 'Англійська',
            'description': ''
        }
    },
    'ua-lang': {
        'en': {
            'title': 'Ukrainian',
            'description': ''
        },
        'ua': {
            'title': 'Українська',
            'description': ''
        }
    },
    'flower': {
        'en': {
            'title': 'Flower',
            'description': 'This is flower!'
        },
        'ua': {
            'title': 'Квітка',
            'description': 'Це квітка!'
        }
    },
    'arduino-nano': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'rs485-ttl': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'raspberry': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'rs485-usb': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'wifi': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'ds18b20': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'solar-panel': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'solar-panel-voltage': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'solar-panel-amperage': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'global-voltage': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'global-amperage': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'reley': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'sg90-servo': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'laser-receiver': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'laser': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'window': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'mg135-air': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'pir': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'rfid-rc522': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'door': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'air-pipe': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'ventilation-recuperaptor': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'dht22': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'peltye': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'dht11': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'sun-light': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'white-led-strip': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'rgb-led-strip': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'light-sensor': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
    'garage-door': {
        'en': {
            'title': '',
            'description': ''
        },
        'ua': {
            'title': '',
            'description': ''
        }
    },
}

function disable(ob){
    $(ob).addClass('disabled');
    $(ob).css({
        opacity: 0.3
    });
}

function activate(ob){
    $(ob).removeClass('disabled');
    $(ob).css({
        opacity: 1
    });
}

function generate_field_texts(state) {
    let lang = 'en';
    disable('.en-lang');
    activate('.ua-lang');

    if (state == 2) {
        lang = 'ua';
        activate('.en-lang');
        disable('.ua-lang');
    }

    Object.keys(textBlockData).map( (ob) => {
        console.log($('.' + ob).hasClass('disabled'))

        if ($.inArray(ob, ['en-lang', 'ua-lang']) == -1 ){
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
        }

        $('.' + ob).attr('data-original-title', textBlockData[ob][lang]['title']);
        $('.' + ob).tooltip(
            {
                delay: { "show": 100, "hide": 100 },
                title: textBlockData[ob][lang]['title'], 
            }
        );

        if ($.inArray(ob, ['en-lang', 'ua-lang']) == -1){
            $('.' + ob).click(function(e){
                $('#modalWindow #modalWindowTitle').html(textBlockData[ob][lang]['title']);
                $('#modalWindow #text-description').html(textBlockData[ob][lang]['description']);
    
                let type = '.jpg';
                const png_images = [
                    'solar-panel', 'ds18b20', 'pir', 'flower'
                ];
    
                if ($.inArray(ob, png_images) != -1){
                    type = '.png';
                }
    
                $('#modalWindow #img-description img').attr({
                    src: 'images/for_modal/' + ob + type,
                    alt: textBlockData[ob][lang]['title'],
                })
                $('#modalWindow').modal('show')
            });
        }
        
    })
}

$( document ).ready(function() {
    generate_field_texts(1);

    $('.ua-lang').click(function (e) {
        generate_field_texts(2);
    });
    
    $('.en-lang').click(function (e) {
        generate_field_texts(1);
    });
});
