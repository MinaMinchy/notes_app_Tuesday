(function(exports) {

  function NoteController(noteList = new NoteList()) {

    this.noteListView = new NoteListView(noteList);

  }

  NoteController.prototype.renderNotesToPage = function() {
    // spits out the html into the div element in index.html
    var appDiv = document.getElementById('app').innerHTML = this.noteListView.html();
  }

  exports.NoteController = NoteController;
})(this);