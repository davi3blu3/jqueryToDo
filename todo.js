
$("#newToDo").click(function(){
  var input = $("input").val();
  if (input) {
    var newItem = `<li>
      <div class="row">
        <button class="btn btn-primary col-1 done">Done</button>
        <p class="list-item col-4">` + input + `</p>
        <button class="btn btn-danger col-1 del">Delete</button>
      </div>
    </li>`;
    $("#list").append(newItem);
    $("input").val("");

    $(".done").click(function() {
      $(this).next().addClass("complete");
    });

    $(".del").click(function() {
      $(this).parent().fadeOut();
    });
  }
});













//
