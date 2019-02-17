var textBlockData = {
    '.arduino-nano': {
        'title': 'Arduino nano',
        'description': 'arduino nano description'
    },
    '.rs485-ttl': {
        'title': 'rs485-ttl',
        'description': 'rs485-ttl desc'
    },

}

$( document ).ready(function() {
    [
        '.arduino-nano', '.rs485-ttl',
    ].map( (ob) => {
        $(ob).hover( (e) => {
            $(ob).css({
                opacity: 1
            });
        })
        $(ob).mouseover( (e) => {
            $(ob).css({
                opacity: 0.7
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
