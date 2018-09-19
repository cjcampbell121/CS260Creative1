class TodoItem {
  constructor(title){
    this.title = title;
    this.created = Date.now()
    this.completed = false;
  }
}

var items = []

function addNew(){
  var title = $('#title').val()
  if (title.length) {
    items.push(new TodoItem(title))
    console.log(items)
    clearField();
    $('#title').focus()
  }
}

function clearField(){
  $('#title').val('')
}


$( document ).ready(function() {
  $("#submit").click(function(){
    addNew()
  })
  $('#title').on('keyup', function (e) {
    if (e.keyCode == 13) {
      addNew()
    }
  })
});