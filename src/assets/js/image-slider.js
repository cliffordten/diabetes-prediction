
var arr=['"assets/images/1.jpg"','"assets/images/2.jpg"','"assets/images/3.jpg"','"assets/images/4.jpg"','"assets/images/5.jpg"']; 
var pos=0;

$(document).ready(function () {
    var interval=5000;

    $('#slider').css({'background-image':'url('+arr[0]+')'});

    function autoSlide(arr,interval){

        setInterval(function () {
          
            pos++;
            if(pos>arr.length-1){
                pos=0;
            }

            $('#slider').css({'background-image':'url('+arr[pos]+')'}) ;
        

            if(pos==0){
                $('#'+(arr.length-1)).css({'background':'transparent', 'color':'transparent'});
            }

        },interval);
    }

    autoSlide(arr,interval);

});
