(function() {
  function testNoteControllerCanbeInstantiated() {
    var noteController = new NoteController();

    if (noteController instanceof NoteController) {
      console.log("testNoteControllerCanbeInstantiated: Yep, that's an instance!");
    }
    else {
      throw new Error("testNoteControllerCanbeInstantiated Error: Not an instance of object")
    }
  };
  testNoteControllerCanbeInstantiated();
})(this);

(function() {

  function testPageAppElementHasHTMLOfNote() {

    var noteController = new NoteController(new NoteList());
    noteController.noteListView.noteList.create('Bongiorno!')
    noteController.renderNotesToPage();

    var appDivHTML = document.getElementById('app').innerHTML;

    if(appDivHTML == '<ul><li>Bongiorno!</li></ul>') {
      console.log('testPageAppElementHasHTMLOfNote: the specifed HTML was found on the page');
    } else {
      console.log('testPageAppElementHasHTMLOfNote: the specifed HTML was not found on the page');
    }
  };

  testPageAppElementHasHTMLOfNote();
})(this);