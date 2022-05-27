$(document).ready(function(){

    var imgPos=1;
    var imgPos2=1;
    var imgPos3=1;
    var imgPos4=1;
    var imgPos5=1;
    var imgPos6=1;
    var imgPos7=1;
    var imgPos8=1;
    // Oculatar los Tabs
    $('.detail').hide();
    //Mostrar el tab MakeUp
    $('.detail[course="MakeUp"]').show();
    // Agregando la clase Active al primer Curso
    $('.superCourses .coursesItem[course="MakeUp"]').addClass('classActive');
    
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
        
        // Mostrar Cursos
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

    //Start slideShow-1
    // Agregar los tabs de paginación
    var imgItems=$('.slider img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider img').hide();
    $('.slider img:first').show();
    $('.pagination li:first').css({'color': '#ffa600'});

    $('.pagination li').click(PaginationTo);
    $('.right svg').click(NextSliderTo);
    $('.left svg').click(PrevSliderTo);

    setInterval(function(){
        NextSliderTo();
    }, 5000);

    function PaginationTo(){
        $('.slider img').hide();
        var paginationPos=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider img:nth-child('+paginationPos+')').fadeIn('slow');
        $('.pagination li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos;
    }
    
    function NextSliderTo(){
        imgPos++;
        console.log(imgPos);
        var endSlider=$('.pagination li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos>endSlider){
            imgPos=1;            
        }
        $('.slider img').hide();
        $('.slider img:nth-child('+imgPos+')').fadeIn('slow');
        $('.pagination li').css({'color': '#0f0f0f'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#ffa600'});
    }



    function PrevSliderTo(){
        imgPos--;
        console.log(imgPos);
        var endSlider=$('.pagination li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos<1){
            imgPos=endSlider;            
        }
        $('.slider img').hide();
        $('.slider img:nth-child('+imgPos+')').fadeIn('slow');
        $('.pagination li').css({'color': '#0f0f0f'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#ffa600'});
    }
    // End slideShow-1 

    // Start slideShow-2
    // Agregar los tabs de paginación
    var imgItems=$('.slider-2 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-2').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-2 img').hide();
    $('.slider-2 img:first').show();
    $('.pagination-2 li:first').css({'color': '#ffa600'});

    $('.pagination-2 li').click(PaginationTo2);
    $('.right-2 svg').click(NextSliderTo2);
    $('.left-2 svg').click(PrevSliderTo2);

    setInterval(function(){
        NextSliderTo2();
    }, 5000);

    function PaginationTo2(){
        $('.slider-2 img').hide();
        var paginationPos2=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-2 img:nth-child('+paginationPos2+')').fadeIn('slow');
        $('.pagination-2 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos2;
    }
    
    function NextSliderTo2(){
        imgPos2++;
        console.log(imgPos2);
        var endSlider=$('.pagination-2 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos2>endSlider){
            imgPos2=1;            
        }
        $('.slider-2 img').hide();
        $('.slider-2 img:nth-child('+imgPos2+')').fadeIn('slow');
        $('.pagination-2 li').css({'color': '#0f0f0f'});
        $('.pagination-2 li:nth-child('+imgPos2+')').css({'color': '#ffa600'});
    }



    function PrevSliderTo2(){
        imgPos2--;
        console.log(imgPos2);
        var endSlider=$('.pagination-2 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos2<1){
            imgPos2=endSlider;            
        }
        $('.slider-2 img').hide();
        $('.slider-2 img:nth-child('+imgPos2+')').fadeIn('slow');
        $('.pagination-2 li').css({'color': '#0f0f0f'});
        $('.pagination-2 li:nth-child('+imgPos2+')').css({'color': '#ffa600'});
    }


    /* Start slideShow-3*/
    
    // Agregar los tabs de paginación
    var imgItems=$('.slider-3 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-3').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-3 img').hide();
    $('.slider-3 img:first').show();
    $('.pagination-3 li:first').css({'color': '#ffa600'});

    $('.pagination-3 li').click(PaginationTo3);
    $('.right-3 svg').click(NextSliderTo3);
    $('.left-3 svg').click(PrevSliderTo3);

    setInterval(function(){
        NextSliderTo3();
    }, 5000);

    function PaginationTo3(){
        $('.slider-3 img').hide();
        var paginationPos3=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-3 img:nth-child('+paginationPos3+')').fadeIn('slow');
        $('.pagination-3 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos3;
    }
    
    function NextSliderTo3(){
        imgPos3++;
        console.log(imgPos3);
        var endSlider=$('.pagination-3 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos3>endSlider){
            imgPos3=1;            
        }
        $('.slider-3 img').hide();
        $('.slider-3 img:nth-child('+imgPos3+')').fadeIn('slow');
        $('.pagination-3 li').css({'color': '#0f0f0f'});
        $('.pagination-3 li:nth-child('+imgPos3+')').css({'color': '#ffa600'});
    }

    function PrevSliderTo3(){
        imgPos3--;
        console.log(imgPos3);
        var endSlider=$('.pagination-3 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos3<1){
            imgPos3=endSlider;            
        }
        $('.slider-3 img').hide();
        $('.slider-3 img:nth-child('+imgPos3+')').fadeIn('slow');
        $('.pagination-3 li').css({'color': '#0f0f0f'});
        $('.pagination-3 li:nth-child('+imgPos3+')').css({'color': '#ffa600'});
    }

    /* Start slideShow-4*/

    // Agregar los tabs de paginación
    var imgItems=$('.slider-4 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-4').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-4 img').hide();
    $('.slider-4 img:first').show();
    $('.pagination-4 li:first').css({'color': '#ffa600'});

    $('.pagination-4 li').click(PaginationTo4);
    $('.right-4 svg').click(NextSliderTo4);
    $('.left-4 svg').click(PrevSliderTo4);

    setInterval(function(){
        NextSliderTo4();
    }, 5000);

    function PaginationTo4(){
        $('.slider-4 img').hide();
        var paginationPos4=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-4 img:nth-child('+paginationPos4+')').fadeIn('slow');
        $('.pagination-4 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos4;
    }
    
    function NextSliderTo4(){
        imgPos4++;
        console.log(imgPos4);
        var endSlider=$('.pagination-4 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos4>endSlider){
            imgPos4=1;            
        }
        $('.slider-4 img').hide();
        $('.slider-4 img:nth-child('+imgPos4+')').fadeIn('slow');
        $('.pagination-4 li').css({'color': '#0f0f0f'});
        $('.pagination-4 li:nth-child('+imgPos4+')').css({'color': '#ffa600'});
    }

    function PrevSliderTo4(){
        imgPos4--;
        console.log(imgPos4);
        var endSlider=$('.pagination-4 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos4<1){
            imgPos4=endSlider;            
        }
        $('.slider-4 img').hide();
        $('.slider-4 img:nth-child('+imgPos4+')').fadeIn('slow');
        $('.pagination-4 li').css({'color': '#0f0f0f'});
        $('.pagination-4 li:nth-child('+imgPos4+')').css({'color': '#ffa600'});
    }

    /* Start slideShow-5*/

    // Agregar los tabs de paginación
    var imgItems=$('.slider-5 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-5').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-5 img').hide();
    $('.slider-5 img:first').show();
    $('.pagination-5 li:first').css({'color': '#ffa600'});

    $('.pagination-5 li').click(PaginationTo5);
    $('.right-5 svg').click(NextSliderTo5);
    $('.left-5 svg').click(PrevSliderTo5);

    setInterval(function(){
        NextSliderTo5();
    }, 5000);

    function PaginationTo5(){
        $('.slider-5 img').hide();
        var paginationPos5=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-5 img:nth-child('+paginationPos5+')').fadeIn('slow');
        $('.pagination-5 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos5;
    }
    
    function NextSliderTo5(){
        imgPos5++;
        console.log(imgPos5);
        var endSlider=$('.pagination-5 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos5>endSlider){
            imgPos5=1;            
        }
        $('.slider-5 img').hide();
        $('.slider-5 img:nth-child('+imgPos5+')').fadeIn('slow');
        $('.pagination-5 li').css({'color': '#0f0f0f'});
        $('.pagination-5 li:nth-child('+imgPos5+')').css({'color': '#ffa600'});
    }

    function PrevSliderTo5(){
        imgPos5--;
        console.log(imgPos5);
        var endSlider=$('.pagination-5 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos5<1){
            imgPos5=endSlider;            
        }
        $('.slider-5 img').hide();
        $('.slider-5 img:nth-child('+imgPos5+')').fadeIn('slow');
        $('.pagination-5 li').css({'color': '#0f0f0f'});
        $('.pagination-5 li:nth-child('+imgPos5+')').css({'color': '#ffa600'});
    }

    /* Start slideShow-6*/

    // Agregar los tabs de paginación
    var imgItems=$('.slider-6 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-6').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-6 img').hide();
    $('.slider-6 img:first').show();
    $('.pagination-6 li:first').css({'color': '#ffa600'});

    $('.pagination-6 li').click(PaginationTo6);
    $('.right-6 svg').click(NextSliderTo6);
    $('.left-6 svg').click(PrevSliderTo6);

    setInterval(function(){
        NextSliderTo6();
    }, 5000);

    function PaginationTo6(){
        $('.slider-6 img').hide();
        var paginationPos6=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-6 img:nth-child('+paginationPos6+')').fadeIn('slow');
        $('.pagination-6 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos6;
    }
    
    function NextSliderTo6(){
        imgPos6++;
        console.log(imgPos6);
        var endSlider=$('.pagination-6 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos6>endSlider){
            imgPos6=1;            
        }
        $('.slider-6 img').hide();
        $('.slider-6 img:nth-child('+imgPos6+')').fadeIn('slow');
        $('.pagination-6 li').css({'color': '#0f0f0f'});
        $('.pagination-6 li:nth-child('+imgPos6+')').css({'color': '#ffa600'});
    }

    function PrevSliderTo6(){
        imgPos6--;
        console.log(imgPos6);
        var endSlider=$('.pagination-6 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos6<1){
            imgPos6=endSlider;            
        }
        $('.slider-6 img').hide();
        $('.slider-6 img:nth-child('+imgPos6+')').fadeIn('slow');
        $('.pagination-6 li').css({'color': '#0f0f0f'});
        $('.pagination-6 li:nth-child('+imgPos6+')').css({'color': '#ffa600'});
    }

    /* Start slideShow-7*/

    // Agregar los tabs de paginación
    var imgItems=$('.slider-7 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-7').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-7 img').hide();
    $('.slider-7 img:first').show();
    $('.pagination-7 li:first').css({'color': '#ffa600'});

    $('.pagination-7 li').click(PaginationTo7);
    $('.right-7 svg').click(NextSliderTo7);
    $('.left-7 svg').click(PrevSliderTo7);

    setInterval(function(){
        NextSliderTo7();
    }, 5000);

    function PaginationTo7(){
        $('.slider-7 img').hide();
        var paginationPos7=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-7 img:nth-child('+paginationPos7+')').fadeIn('slow');
        $('.pagination-7 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos7;
    }
    
    function NextSliderTo7(){
        imgPos7++;
        console.log(imgPos7);
        var endSlider=$('.pagination-7 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos7>endSlider){
            imgPos7=1;            
        }
        $('.slider-7 img').hide();
        $('.slider-7 img:nth-child('+imgPos7+')').fadeIn('slow');
        $('.pagination-7 li').css({'color': '#0f0f0f'});
        $('.pagination-7 li:nth-child('+imgPos7+')').css({'color': '#ffa600'});
    }

    function PrevSliderTo7(){
        imgPos7--;
        console.log(imgPos7);
        var endSlider=$('.pagination-7 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos7<1){
            imgPos7=endSlider;            
        }
        $('.slider-7 img').hide();
        $('.slider-7 img:nth-child('+imgPos7+')').fadeIn('slow');
        $('.pagination-7 li').css({'color': '#0f0f0f'});
        $('.pagination-7 li:nth-child('+imgPos7+')').css({'color': '#ffa600'});
    }

    /* Start slideShow-8*/

    // Agregar los tabs de paginación
    var imgItems=$('.slider-8 img').length; // Numero de slides 
    
    for( i=1;i<=imgItems;i++){
        //console.log(i);
        $('.pagination-8').append('<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/></svg></li>');
    }
    //agregando el slide inicial de imagenes de los Trainings
    $('.slider-8 img').hide();
    $('.slider-8 img:first').show();
    $('.pagination-8 li:first').css({'color': '#ffa600'});

    $('.pagination-8 li').click(PaginationTo8);
    $('.right-8 svg').click(NextSliderTo8);
    $('.left-8 svg').click(PrevSliderTo8);

    setInterval(function(){
        NextSliderTo8();
    }, 5000);

    function PaginationTo8(){
        $('.slider-8 img').hide();
        var paginationPos8=($(this).index())+1;
        //console.log(paginationPos);
        //$('.slider li img:first').fadeIn('slow');
        //$('.slider img').fadeIn('slow');
        $('.slider-8 img:nth-child('+paginationPos8+')').fadeIn('slow');
        $('.pagination-8 li').css({'color': '#0f0f0f'});
        $(this).css({'color': '#ffa600'});
        return paginationPos8;
    }
    
    function NextSliderTo8(){
        imgPos8++;
        console.log(imgPos8);
        var endSlider=$('.pagination-8 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos8>endSlider){
            imgPos8=1;            
        }
        $('.slider-8 img').hide();
        $('.slider-8 img:nth-child('+imgPos8+')').fadeIn('slow');
        $('.pagination-8 li').css({'color': '#0f0f0f'});
        $('.pagination-8 li:nth-child('+imgPos8+')').css({'color': '#ffa600'});
    }

    function PrevSliderTo8(){
        imgPos8--;
        console.log(imgPos8);
        var endSlider=$('.pagination-8 li').length;
        console.log(endSlider);        
        //console.log(endSlider);
        if(imgPos8<1){
            imgPos8=endSlider;            
        }
        $('.slider-8 img').hide();
        $('.slider-8 img:nth-child('+imgPos8+')').fadeIn('slow');
        $('.pagination-8 li').css({'color': '#0f0f0f'});
        $('.pagination-8 li:nth-child('+imgPos8+')').css({'color': '#ffa600'});
    }
    
})

