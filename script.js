$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:"/",
        type:"POST",
        dataType: 'json',
        cache: false,
        success: function(data){
            alert("File-size: "+data)
        }
        
    })
    return false;
})