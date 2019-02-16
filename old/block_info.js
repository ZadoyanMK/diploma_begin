$( document ).ready(function() {
    $('.thrid').tooltip(
        {
            delay: { "show": 100, "hide": 100 },
            title: 'test tooltip', 
        }
    )
    $(".thrid").hover(function(e) { 
        $(".thrid").css("background", "green");
        $('.thrid').tooltip(
            {
                delay: { "show": 100, "hide": 100 },
                title: 'test tooltip', 
            }
        )
        $(".a").css("background", "green");
        $(".b").css("background", "green");
    });
    $(".thrid").mouseover(function(e) { 
        $(".thrid").css("background", "greenyellow");
        $(".a").css("background", "greenyellow");
        $(".b").css("background", "greenyellow");
    });
    $(".thrid").click(function(e){
        $('#exampleModalCenter .modal-body').html('new test text')
        $('#exampleModalCenter').modal('show')
    });
});
