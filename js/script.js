$(document).ready(function(){

    $('.detail').hide();
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
        setTimeout(HideCourse,200)
        
        // Mostrar Productos
        function ShowCourse(){
            $('.detail[course='+course+']').show();
            $('.detail[course='+course+']').css('transform', 'scale(1)');
        }
        setTimeout(ShowCourse,200)
        

    });
})