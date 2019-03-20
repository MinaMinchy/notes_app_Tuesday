(function(exports) {
  function NoteListView(noteList = new NoteList()) {
    this.noteList = noteList;

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

NoteListView.prototype.getText = function() {
    return this.text
  };
