$('#new-todo').keypress(function(e) {
    if (e.keyCode == 13) {
        var newTodo = $(this).val();
        $(this).val('');
        $("#todo-list").append('<li class="list-group-item"><span class="delete" aria-hidden="true"><i class="fa fa-trash fa-lg"></i></span><span class="message">' + newTodo + '</span></li>');
    }
});
$('#todo-list').on('click', '.delete', function(event) {
    $(this).parent("li").fadeOut(500, function() {
        $(this).parent("li").remove();
    });
});
$('#todo-list').on('click', '.message', function() {
    $(this).toggleClass('completed');
});
