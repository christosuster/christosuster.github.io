$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.item').show('1000');

        }
        else{
            $('.item').not('.'+value).hide('1000');
            $('.item').filter('.'+value).show('1000');
        }
    })

    $('.list').click(function(){
        $('.list').removeClass('filter-active');
        $(this).addClass('filter-active');
    })
})