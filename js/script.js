$(document).ready(function(){

    $('.detail').hide();
    $('.detail[course="Cosmetology"]').show();
    // Agregando la clase Active al primer Curso
    $('.superCourses .coursesItem[course="Cosmetology"]').addClass('classActive');

    $('.coursesItem').click(function(){
        
        var course = $(this).attr('course');
        console.log(course);

        // Agregando la clase classActive al enlace seleccionado
        $('.coursesItem').removeClass('classActive');
        $(this).addClass('classActive');

        // Ocultar Items
        function HideCourse(){
            $('.detail').hide();    
        }
        setTimeout(HideCourse,2)
        
        // Mostrar Productos
        function ShowCourse(){
            $('.detail[course='+course+']').show();
            //$('.detail[course='+course+']').css('transform', 'scale(1)');
        }
        setTimeout(ShowCourse,2)
        
    });

    $("img.img-1").click(function(){	    
        function ShowBox(){
            $('.container-grid').show();
            $('.container-grid').css('grid-template-areas', '"img1 img1 img1 img2" "img1 img1 img1 img3" "img1 img1 img1 img3" "img1 img1 img1 img4"');            
            $('.container-grid').css('cursor', 'pointer');
            $('.img.img-1').css({'filter': 'opacity(100%)'});
            $('.img.img-2').css({'filter': 'opacity(60%)'});
            $('.img.img-3').css({'filter': 'opacity(60%)'});
            $('.img.img-4').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
            $('.container-grid').css({'transition': 'all 2.0s easy'});
        }
        setTimeout(ShowBox,200)
    });    
    
    $("img.img-2").click(function(){	    
        function ShowBox(){
            $('.container-grid').show();
            $('.container-grid').css('grid-template-areas', '"img3 img2 img2 img2" "img3 img2 img2 img2" "img4 img2 img2 img2" "img1 img2 img2 img2"');
            $('.container-grid').css('cursor', 'pointer');
            $('.img.img-1').css({'filter': 'opacity(60%)'});
            $('.img.img-2').css({'filter': 'opacity(100%)'});
            $('.img.img-3').css({'filter': 'opacity(60%)'});
            $('.img.img-4').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'});       

        }
        setTimeout(ShowBox,200)
    });    

    $("img.img-3").click(function(){
        function ShowBox(){
            $('.container-grid').show();
            $('.container-grid').css('grid-template-areas', '"img3 img3 img3 img4" "img3 img3 img3 img4" "img3 img3 img3 img1" "img3 img3 img3 img2"');
            $('.container-grid').css('cursor', 'pointer');
            $('.img.img-1').css({'filter': 'opacity(60%)'});
            $('.img.img-2').css({'filter': 'opacity(60%)'});
            $('.img.img-3').css({'filter': 'opacity(100%)'});
            $('.img.img-4').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'});       

        }
        setTimeout(ShowBox,200)
    });	
    
    $("img.img-4").click(function(){	    
        function ShowBox(){
            $('.container-grid').show();
            $('.container-grid').css('grid-template-areas', '"img4 img4 img4 img4" "img4 img4 img4 img4" "img4 img4 img4 img4" "img1 img1 img2 img3"');
            $('.container-grid').css('cursor', 'pointer');
            $('.img.img-1').css({'filter': 'opacity(60%)'});
            $('.img.img-2').css({'filter': 'opacity(60%)'});
            $('.img.img-3').css({'filter': 'opacity(60%)'});
            $('.img.img-4').css({'filter': 'opacity(100%)'});
            $('.img').css({'border-radius': '10px'});       

        }
        setTimeout(ShowBox,200)
    });

    $("img.img-5").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img6 img7 img7 img8 img8 img9" "img6 img7 img7 img8 img8 img9" "img5 img5 img5 img10 img11 img11" "img5 img5 img5 img10 img11 img11" "img5 img5 img5 img12 img12 img13" "img5 img5 img5 img12 img12 img13"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(100%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-6").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img6 img6 img6 img7 img7 img8" "img6 img6 img6 img7 img7 img8" "img6 img6 img6 img9 img10 img10" "img6 img6 img6 img9 img10 img10" "img5 img12 img12 img13 img11 img11" "img5 img12 img12 img13 img11 img11"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(100%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-7").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img6 img6 img7 img7 img7 img8" "img6 img6 img7 img7 img7 img8" "img5 img5 img7 img7 img7 img9" "img5 img5 img7 img7 img7 img9" "img12 img13 img13 img11 img10 img10" "img12 img13 img13 img11 img10 img10"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(100%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-8").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img6 img6 img7 img8 img8 img8" "img6 img6 img7 img8 img8 img8" "img5 img12 img12 img8 img8 img8" "img5 img12 img12 img8 img8 img8" "img13 img11 img11 img10 img9 img9" "img13 img11 img11 img10 img9 img9"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(100%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-9").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img5 img5 img6 img7 img8 img8" "img5 img5 img6 img7 img8 img8" "img12 img12 img13 img9 img9 img9" "img12 img12 img13 img9 img9 img9" "img11 img10 img10 img9 img9 img9" "img11 img10 img10 img9 img9 img9"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(100%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-10").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img13 img13 img5 img5 img6 img6" "img13 img13 img5 img5 img6 img6" "img12 img10 img10 img10 img8 img7" "img12 img10 img10 img10 img8 img7" "img11 img10 img10 img10 img9 img9" "img11 img10 img10 img10 img9 img9"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(100%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-11").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img12 img12 img13 img5 img5 img6" "img12 img12 img13 img5 img5 img6" "img11 img11 img11 img8 img8 img7" "img11 img11 img11 img8 img8 img7" "img11 img11 img11 img10 img9 img9" "img11 img11 img11 img10 img9 img9"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(100%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });
       
    $("img.img-12").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img12 img12 img12 img13 img13 img5" "img12 img12 img12 img13 img13 img5" "img12 img12 img12 img7 img7 img6" "img12 img12 img12 img7 img7 img6" "img11 img11 img10 img10 img9 img8" "img11 img11 img10 img10 img9 img8"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(100%)'});
            $('.img.img-13').css({'filter': 'opacity(60%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    $("img.img-13").click(function(){	    
        function ShowBox(){
            $('.container-grid-b').show();
            $('.container-grid-b').css('grid-template-areas', '"img6 img6 img7 img13 img13 img13" "img6 img6 img7 img13 img13 img13" "img8 img9 img9 img13 img13 img13" "img8 img9 img9 img13 img13 img13" "img5 img5 img12 img12 img11 img10" "img5 img5 img12 img12 img11 img10"');
            $('.container-gri-b').css('cursor', 'pointer');
            $('.img.img-5').css({'filter': 'opacity(60%)'});
            $('.img.img-6').css({'filter': 'opacity(60%)'});
            $('.img.img-7').css({'filter': 'opacity(60%)'});
            $('.img.img-8').css({'filter': 'opacity(60%)'});
            $('.img.img-9').css({'filter': 'opacity(60%)'});
            $('.img.img-10').css({'filter': 'opacity(60%)'});
            $('.img.img-11').css({'filter': 'opacity(60%)'});
            $('.img.img-12').css({'filter': 'opacity(60%)'});
            $('.img.img-13').css({'filter': 'opacity(100%)'});
            $('.img').css({'border-radius': '10px'}); 
        }
        setTimeout(ShowBox,200)
    });

    
})

