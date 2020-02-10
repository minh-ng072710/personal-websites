$(document).ready(()=>{
    $('a[data-title]').attr('', ()=> {
        return $(this).attr('title');
    }).removeAttr('title');
})