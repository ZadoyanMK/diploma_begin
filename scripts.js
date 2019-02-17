var textBlockData = {
    '.arduino-nano': {
        'title': 'Arduino nano',
        'image': 'nano.png',
        'description': 'arduino nano description'
    },
    '.rs485-ttl': {
        'title': 'rs485-ttl',
        'image': 'nano.png',
        'description': 'rs485-ttl desc'
    },
    '.air-pipe': {
        'title': 'air pipe',
        'image': 'nano.png',
        'description': 'air-pipe desc'
    },
    '.dht22': {
        'title': 'dht22',
        'image': 'nano.png',
        'description': 'dht22 desc'
    },
}

$( document ).ready(function() {
    [
        '.arduino-nano', '.rs485-ttl', '.air-pipe', '.dht22'
    ].map( (ob) => {
        $(ob).hover( (e) => {
            $(ob).css({
                opacity: 1
            });
        })
        $(ob).mouseover( (e) => {
            $(ob).css({
                opacity: 0.6
            });
        })
    
        $(ob).tooltip(
            {
                delay: { "show": 100, "hide": 100 },
                title: textBlockData[ob]['title'], 
            }
        )
        $(ob).click(function(e){
            $('#exampleModalCenter .modal-body').html(textBlockData[ob]['description'])
            $('#exampleModalCenter').modal('show')
        });
    })
});
