$( document ).ready(function() {
    $('.arduino-nano').tooltip(
        {
            delay: { "show": 100, "hide": 100 },
            title: 'arduino nano', 
        }
    )
    $(".arduino-nano").click(function(e){
        $('#exampleModalCenter .modal-body').html('test arduino description')
        $('#exampleModalCenter').modal('show')
    });

    $('.servo').tooltip(
        {
            delay: { "show": 100, "hide": 100 },
            title: 'SG90 Servo', 
        }
    )
    $(".servo").click(function(e){
        $('#exampleModalCenter .modal-body').html('test servo description')
        $('#exampleModalCenter').modal('show')
    });
});
