function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class TodoItem {
  constructor(title){
    this.title = title;
    this.created = Date.now()
    this.completed = false;
    this.id = guid()
  }
}

function updateView(){
  var list = $('#list')
  list.html('')
  items.forEach((x)=> {
    list.append('<div class="todo-item">'+ x.title + '</div>')
  })
}

var items = []

function addNew(){
  var title = $('#title').val()
  if (title.length) {
    items.push(new TodoItem(title))
    $('#title').val('')
    $('#title').focus()
    updateView()
  }
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

