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
            'title': 'Arduino nano',
            'description': "The Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x). It has more or less the same functionality of the Arduino Duemilanove, but in a different package. It lacks only a DC power jack, and works with a Mini-B USB cable instead of a standard one."
        },
        'ua': {
            'title': 'Arduino nano',
            'description': "Arduino Nano — це повнофункціональний мініатюрний пристрій на базі мікроконтролера ATmega328 (Arduino Nano 3.0) або ATmega168 (Arduino Nano 2.x), адаптований для використання з макетної плати. За функціональністю пристрій схожий на Arduino Duemilanove, і відрізняється від нього розмірами, відсутністю роз'єму живлення, а також іншим типом (Mini-B) USB-кабелю. Arduino Nano розроблено і випускається фірмою Gravitech. "
        }
    },
    'rs485-ttl': {
        'en': {
            'title': 'RS485-TTL',
            'description': 'This is a module that allows the TTL interface of the microcontroller to be transferred to the RS485 module. It is generally used for industrial automation.'
        },
        'ua': {
            'title': 'RS485-TTL',
            'description': 'Перехідна плата зі стандарту RS485 на TTL (транзисторно-транзисторна логіка). Використовується як з Arduino, так і в інших проектах.'
        }
    },
    'raspberry': {
        'en': {
            'title': 'Raspberry PI',
            'description': "Several generations of Raspberry Pis have been released. All models feature a Broadcom system on a chip (SoC) with an integrated ARM-compatible central processing unit (CPU) and on-chip graphics processing unit (GPU).            Processor speed ranges from 700 MHz to 1.4 GHz for the Pi 3 Model B+; on-board memory ranges from 256 MB to 1 GB RAM. Secure Digital (SD) cards in MicroSDHC form factor (SDHC on early models) are used to store the operating system and program memory. The boards have one to four USB ports. For video output, HDMI and composite video are supported, with a standard 3.5 mm tip-ring-sleeve jack for audio output. Lower-level output is provided by a number of GPIO pins, which support common protocols like I²C. The B-models have an 8P8C Ethernet port and the Pi 3 and Pi Zero W have on-board Wi-Fi 802.11n and Bluetooth. Prices range from US$5 to $35. "
        },
        'ua': {
            'title': 'Raspberry PI',
            'description': "Raspberry Pi побудований на системі-на-чипі (SoC) Broadcom BCM2835, яка включає в себе процесор ARM із тактовою частотою 700 МГц, графічний процесор VideoCore IV, і 512 чи 256 мегабайтів  оперативної пам'яті. Твердий диск відсутній, натомість використовується SD карта. Така апаратна начинка дозволяє відтворювати відео формату H.264 в роздільній здатності 1080p, і запускати комп'ютерні ігри на зразок Quake III Arena. "
        }
    },
    'rs485-usb': {
        'en': {
            'title': 'RS485-USB',
            'description': 'This is a module that allows the USB interface of the microcontroller to be transferred to the RS485 module. It is generally used for industrial automation.'
        },
        'ua': {
            'title': 'RS485-USB',
            'description': 'Перехідна плата зі стандарту RS485 на USB (транзисторно-транзисторна логіка). Використовується як з Arduino, так і в інших проектах.'
        }
    },
    'wifi': {
        'en': {
            'title': 'Wi-Fi module',
            'description': 'WiFi Module is a self contained SOC with integrated TCP/IP protocol stack that can give any microcontroller access to your WiFi network.'
        },
        'ua': {
            'title': 'Модуль wi-fi',
            'description': 'Модуль WiFi є автономним SOC з інтегрованим стеком протоколів TCP / IP, який може надати будь-якому доступу мікроконтролера до вашої мережі WiFi.'
        }
    },
    'ds18b20': {
        'en': {
            'title': 'DS18B20',
            'description': "The DS18B20 is a digital temperature meter with a resolution of 9 to 12 bits and a temperature control alarm function. Control parameters can be set by the user and saved in the non-volatile memory of the sensor."
        },
        'ua': {
            'title': 'DS18B20',
            'description': "DS18B20 це цифровий вимірювач температури, з дозволом перетворення 9 - 12 розрядів і функцією тривожного сигналу контролю за температурою. Параметри контролю можуть бути задані користувачем і збережені в енергонезалежній пам'яті датчика."
        }
    },
    'solar-panel': {
        'en': {
            'title': 'Solar panel',
            'description': "Solar panel - a type of panel panels for the absorption of energy from sunlight and its transformation into electric or thermal."
        },
        'ua': {
            'title': 'Сонячна панель',
            'description': 'Сонячна панель — тип збірних панелей для поглинання енергії сонячних променів та її перетворення у електричну чи теплову.'
        }
    },
    'reley': {
        'en': {
            'title': 'Reley',
            'description': 'A relay is an electrically operated switch. Many relays use an electromagnet to mechanically operate a switch, but other operating principles are also used, such as solid-state relays. Relays are used where it is necessary to control a circuit by a separate low-power signal, or where several circuits must be controlled by one signal. The first relays were used in long distance telegraph circuits as amplifiers: they repeated the signal coming in from one circuit and re-transmitted it on another circuit. Relays were used extensively in telephone exchanges and early computers to perform logical operations.'
        },
        'ua': {
            'title': 'Реле',
            'description': 'Реле — пристрій, у якому за досягнення певного значення вхідної величини X, вихідна величина Y змінюється стрибкоподібно та приймає скінченне число значень. Найчастіше, це автоматичний пристрій, який реагує на зміни параметру (температури, тиску, освітленості тощо) і який, у разі досягнення параметром заданої величини, замикає або розмикає електричне коло.'
        }
    },
    'sg90-servo': {
        'en': {
            'title': 'SG90 servo',
            'description': 'A servomotor is a rotary actuator or linear actuator that allows for precise control of angular or linear position, velocity and acceleration.  It consists of a suitable motor coupled to a sensor for position feedback. It also requires a relatively sophisticated controller, often a dedicated module designed specifically for use with servomotors.'
        },
        'ua': {
            'title': 'SG90 servo',
            'description': "Сервопри́вод (також серводвигун, сервомеханізм) — це пристрій в системах автоматичного регулювання або дистанційного керування, що за рахунок енергії допоміжного джерела здійснює механічне переміщення регулюючого органу відповідно до отримуваних від системи керування сигналів.  Тобто, міняється положення регулюючого органа (важеля, кнопки, перемикача) — потік матеріалу або енергії, що поступає на об'єкт дії, міняється і в результаті виконується дія на робочі машини або механізми, змінюється стан робочого об'єкта."
        }
    },
    // 'laser-receiver': {
    //     'en': {
    //         'title': '',
    //         'description': ''
    //     },
    //     'ua': {
    //         'title': '',
    //         'description': ''
    //     }
    // },
    // 'laser': {
    //     'en': {
    //         'title': '',
    //         'description': ''
    //     },
    //     'ua': {
    //         'title': '',
    //         'description': ''
    //     }
    // },
    'window': {
        'en': {
            'title': 'Window',
            'description': 'This is window!'
        },
        'ua': {
            'title': 'Вікно',
            'description': 'Це вікно!'
        }
    },
    'mg135-air': {
        'en': {
            'title': 'MG135-air',
            'description': 'This is air filter. A particulate air filter is a device composed of fibrous or porous materials which removes solid particulates such as dust, pollen, mold, and bacteria from the air. Filters containing an adsorbent or catalyst such as charcoal (carbon) may also remove odors and gaseous pollutants such as volatile organic compounds or ozone.[1] Air filters are used in applications where air quality is important, notably in building ventilation systems and in engines.'
        },
        'ua': {
            'title': 'MG135-air',
            'description': 'Це повітряний фільтер. Повітряний фільтр — фільтр для очищення повітря від завислих частинок в побуті та на виробництві. Фільтри, які застосовуються для очистки газів, класифікують за різними ознаками: за формою фільтрувальних елементів, способом підводу запилених газів, формою корпусу, призначенню та ін. Найбільш загальною є класифікація за матеріалом, з якого виготовлена фільтрувальна перегородка. За цією класифікацією розрізняють:'
        }
    },
    'pir': {
        'en': {
            'title': 'PIR',
            'description': 'A passive infrared sensor (PIR sensor) is an electronic sensor that measures infrared (IR) light radiating from objects in its field of view. They are most often used in PIR-based motion detectors. PIR sensors are commonly used in security alarms and automatic lighting applications. PIR sensors detect general movement, but do not give information on who or what moved. For that purpose, an active IR sensor is required.'
        },
        'ua': {
            'title': 'PIR',
            'description': "Пасивний інфрачервоний датчик (датчик PIR) - це електронний датчик, який вимірює інфрачервоне (ІЧ) світло, що випромінюється від об'єктів у його зорі. Найчастіше вони використовуються в ПІР-детекторах руху. Датчики PIR зазвичай використовуються в охоронних сигналізаціях і автоматичному освітленні. Датчики PIR виявляють загальний рух, але не дають інформації про те, хто або що перемістився. Для цього потрібний активний ІЧ-датчик."
        }
    },
    'rfid-rc522': {
        'en': {
            'title': 'RFID-RC522',
            'description': 'The RC522 RFID Reader module is designed to create a 13.56MHz electromagnetic field that it uses to communicate with the RFID tags (ISO 14443A standard tags). The reader can communicate with a microcontroller over a 4-pin Serial Peripheral Interface (SPI) with a maximum data rate of 10Mbps. It also supports communication over I2C and UART protocols.'
        },
        'ua': {
            'title': 'RFID-RC522',
            'description': "Модуль зчитувача RC522 RFID призначений для створення 13,56 МГц електромагнітного поля, яке він використовує для зв'язку з мітками RFID (стандартні мітки ISO 14443A). Зчитувач може спілкуватися з мікроконтролером через 4-контактний послідовний периферійний інтерфейс (SPI) з максимальною швидкістю передачі даних 10 Мбіт / с. Він також підтримує зв'язок через протоколи I2C і UART."
        }
    },
    'door': {
        'en': {
            'title': 'Door',
            'description': 'This is door!'
        },
        'ua': {
            'title': 'Двері',
            'description': 'Це двері!'
        }
    },
    'air-pipe': {
        'en': {
            'title': 'Air pipe',
            'description': 'Ventilation is the intentional introduction of outdoor air into a space and is mainly used to control indoor air quality by diluting and displacing indoor pollutants; it can also be used for purposes of thermal comfort or dehumidification.'
        },
        'ua': {
            'title': 'Вентиляція',
            'description': 'Вентиля́ція (від лат. ventilatio — провітрювання) — створення обміну повітря в приміщенні для видалення надлишків теплоти, вологи, шкідливих та інших речовин з метою забезпечення допустимих метеорологічних, санітарно-гігієнічних, технологічних умов повітряного середовища.'
        }
    },
    'ventilation-recuperaptor': {
        'en': {
            'title': 'Recuperator',
            'description': 'A recuperator is a special purpose counter-flow energy recovery heat exchanger positioned within the supply and exhaust air streams of an air handling system, or in the exhaust gases of an industrial process, in order to recover the waste heat. Generally, they are used to extract heat from the exhaust and use it to preheat air entering the combustion system. In this way they use waste energy to heat the air, offsetting some of the fuel, and thereby improves the energy efficiency of the system as a whole.'
        },
        'ua': {
            'title': 'Рекуператор',
            'description': 'Рекуператор (лат. recuperator — одержує назад, той що повертає) — теплообмінник поверхневого типу, який використовує теплоту із стороннього джерела, скажімо, вихлопних газів двигуна. У рекуператорі теплообмін здійснюється безперервним чином через стінку, яка розділяє теплоносії. На відміну від регенератора, траси потоків теплоносіїв у рекуператорі не змінюються. Рекуператори розрізняють за схемою відносного руху теплоносіїв — протиточні, прямоточні та ін; за конструкцією — трубчасті, пластинчасті, ребристі та ін.; за призначенням — із підігріванням повітря, газу, рідин, із випаровуваням, конденсатори тощо.'
        }
    },
    'dht22': {
        'en': {
            'title': 'DHT22',
            'description': "The DHT22 is a basic, low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin (no analog input pins needed). It's fairly simple to use, but requires careful timing to grab data. The only real downside of this sensor is you can only get new data from it once every 2 seconds, so when using our library, sensor readings can be up to 2 seconds old."
        },
        'ua': {
            'title': 'DHT22',
            'description': "DHT22 - це базовий, недорогий цифровий датчик температури та вологості. Він використовує ємнісний датчик вологості і термістор для вимірювання навколишнього повітря, і випрямляє цифровий сигнал на виводі даних (не потрібні аналогові входи). Він досить простий у використанні, але вимагає ретельної синхронізації даних. Єдиним реальним недоліком цього датчика є те, що ви можете отримувати нові дані лише раз на 2 секунди, тому при використанні нашої бібліотеки показання датчиків можуть становити до 2 секунд."
        }
    },
    'peltye': {
        'en': {
            'title': 'The Peltier element',
            'description': 'The Peltier element is a thermoelectric converter, whose principle of action is based on the Peltier effect - the occurrence of temperature differences in the flow of electric current. In English literature, the elements of the Peltier are denoted by the TEC (from the English Thermoelectric Cooler - thermoelectric cooler).'
        },
        'ua': {
            'title': 'Елемент Пельтьє',
            'description': 'Елемент Пельтьє — це термоелектричний перетворювач, принцип дії якого базується на ефекті Пельтьє — виникненні різниці температур при протіканні електричного струму. В англомовній літературі елементи Пельтьє позначаються TEC (від англ. Thermoelectric Cooler — Термоелектричний охолоджувач).'
        }
    },
    'dht11': {
        'en': {
            'title': 'DHT11',
            'description': 'The DHT11 is a basic, ultra low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin (no analog input pins needed). Its fairly simple to use, but requires careful timing to grab data.'
        },
        'ua': {
            'title': 'DHT11',
            'description': 'DHT11 - це базовий, дешевий цифровий датчик температури і вологості. Він використовує ємнісний датчик вологості і термістор для вимірювання навколишнього повітря, і випрямляє цифровий сигнал на виводі даних (не потрібні аналогові входи). Досить простий у використанні, але вимагає ретельної синхронізації даних.'
        }
    },
    'sun-light': {
        'en': {
            'title': 'White led strip',
            'description': 'An LED strip light (also known as an LED tape or ribbon light) is a flexible circuit board populated by surface mounted light-emitting diodes (SMD LEDs) and other components that usually comes with an adhesive backing. Traditionally, strip lights had been used solely in accent lighting, backlighting, task lighting, and decorative lighting applications. Increased luminous efficacy and higher-power SMDs have allowed LED strip lights to be used in applications such as high brightness task lighting, fluorescent and halogen lighting fixture replacements, indirect lighting applications, Ultra Violet inspection during manufacturing processes, set and costume design, and even growing plants.'
        },
        'ua': {
            'title': 'Біла світлодіодна стрічка',
            'description': '\"Світлодіодна стрічка\" - джерело світла, зібране на основі світлодіодів. Являє собою гнучку друковану (монтажну) плату, на якій рівновіддалено один від одного розташовані світлодіоди. Зазвичай ширина стрічки становить 8 або 10 мм, товщина (зі світлодіодами) 2-3 мм. При виготовленні стрічка намотується в рулони відрізками по 5 м. Для обмеження струму через світлодіоди електричну схему стрічки вводяться струмообмежувальні (резистори), які також монтуються на стрічці.'
        }
    },
    'white-led-strip': {
        'en': {
            'title': 'White led strip',
            'description': 'An LED strip light (also known as an LED tape or ribbon light) is a flexible circuit board populated by surface mounted light-emitting diodes (SMD LEDs) and other components that usually comes with an adhesive backing. Traditionally, strip lights had been used solely in accent lighting, backlighting, task lighting, and decorative lighting applications. Increased luminous efficacy and higher-power SMDs have allowed LED strip lights to be used in applications such as high brightness task lighting, fluorescent and halogen lighting fixture replacements, indirect lighting applications, Ultra Violet inspection during manufacturing processes, set and costume design, and even growing plants.'
        },
        'ua': {
            'title': 'Біла світлодіодна стрічка',
            'description': '\"Світлодіодна стрічка\" - джерело світла, зібране на основі світлодіодів. Являє собою гнучку друковану (монтажну) плату, на якій рівновіддалено один від одного розташовані світлодіоди. Зазвичай ширина стрічки становить 8 або 10 мм, товщина (зі світлодіодами) 2-3 мм. При виготовленні стрічка намотується в рулони відрізками по 5 м. Для обмеження струму через світлодіоди електричну схему стрічки вводяться струмообмежувальні (резистори), які також монтуються на стрічці.'
        }
    },
    'rgb-led-strip': {
        'en': {
            'title': 'Color (RGB) led strip',
            'description': 'An LED strip light (also known as an LED tape or ribbon light) is a flexible circuit board populated by surface mounted light-emitting diodes (SMD LEDs) and other components that usually comes with an adhesive backing. Traditionally, strip lights had been used solely in accent lighting, backlighting, task lighting, and decorative lighting applications. Increased luminous efficacy and higher-power SMDs have allowed LED strip lights to be used in applications such as high brightness task lighting, fluorescent and halogen lighting fixture replacements, indirect lighting applications, Ultra Violet inspection during manufacturing processes, set and costume design, and even growing plants.'
        },
        'ua': {
            'title': 'Кольорова (RGB) світлодіодна стрічка',
            'description': '\"Світлодіодна стрічка\" - джерело світла, зібране на основі світлодіодів. Являє собою гнучку друковану (монтажну) плату, на якій рівновіддалено один від одного розташовані світлодіоди. Зазвичай ширина стрічки становить 8 або 10 мм, товщина (зі світлодіодами) 2-3 мм. При виготовленні стрічка намотується в рулони відрізками по 5 м. Для обмеження струму через світлодіоди електричну схему стрічки вводяться струмообмежувальні (резистори), які також монтуються на стрічці.'
        }
    },
    'garage-door': {
        'en': {
            'title': 'Garage door',
            'description': 'This is garage door!'
        },
        'ua': {
            'title': 'Двері гаража',
            'description': 'Це гаражні двері!'
        }
    },

    // тут вопрос, хз что писать в описании
    'light-sensor': {
        'en': {
            'title': 'Light sensor',
            'description': 'The light sensor measures its level and sends the result to the main server.'
        },
        'ua': {
            'title': 'Датчик освітленості',
            'description': 'Датчик освітленості, вимірює її рівень та надсилає результат до основного серверу.'
        }
    },
    'solar-panel-voltage': {
        'en': {
            'title': 'Module for measuring current voltage',
            'description': 'Measures the voltage on the solar panel.'
        },
        'ua': {
            'title': 'Mодуль вимірювання напруги струму',
            'description': 'Bимірює напругу на сонячній панелі'
        }
    },
    'solar-panel-amperage': {
        'en': {
            'title': 'Module for measuring current amperage',
            'description': 'Measure the power of the current amperage on the solar panel.'
        },
        'ua': {
            'title': 'Модуль вимірювання сили струму',
            'description': 'Вимірює силу струму на сонячній панелі.'
        }
    },
    'global-voltage': {
        'en': {
            'title': 'Module for measuring current voltage',
            'description': 'Measures the voltage globally.'
        },
        'ua': {
            'title': 'Mодуль вимірювання напруги струму',
            'description': 'Bимірює напругу на всій території.'
        }
    },
    'global-amperage': {
        'en': {
            'title': 'Module for measuring current amperage',
            'description': 'Measure the power of the current amperage globally.'
        },
        'ua': {
            'title': 'Модуль вимірювання сили струму',
            'description': 'Вимірює силу струму на всій території.'
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
