var i = 0;
function addRow() {
  i+=1;
  var row = document.getElementById("formrow"); // find row to copy
      var table = document.getElementById("gpaform").tBodies[0]; // find table to append to
      var clone = row.cloneNode(true); // copy children too
      var newid = "formrow" + i.toString();
      clone.id = newid// change id or other attributes/contents
      table.appendChild(clone); // add new row to end of table
      var cloneChild = document.getElementById(newid).childNodes;
      for (var j = 0; j < cloneChild.length; j++) {
        if (cloneChild[j].valueOf().hasChildNodes()) {
          cloneChild[j].valueOf().childNodes[0].id = cloneChild[j].valueOf().childNodes[0].id[0] + i.toString();
        }
      }



}
