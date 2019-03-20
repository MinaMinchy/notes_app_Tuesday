(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList;

  };
//
  exports.NoteListView = NoteListView;
})(this);


NoteListView.prototype.html = function() {
  var html = '<ul>'
  this.noteList.printAll().forEach(function(note) {
    html += '<li>' + note + '</li>'
  });
  html += '</ul>'
  return html
}

Note.prototype.getText = function() {
    return this.text
  };
