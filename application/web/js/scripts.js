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

function compileData() {
  //console.log(document.getElementById("g0").value);
  var package = [];
  var q = document.getElementById("gpaform").tBodies[0].rows.length;
  for (var n = 0; n < q-1; n++) {
    var row = [];
    var gid = "g" + n.toString();
    var cid = "c" + n.toString();
    var wid = "w" + n.toString();
    row.push([document.getElementById(gid).value, document.getElementById(cid).value, document.getElementById(wid).checked]);
    package.push(row);
  }
  console.log(package);
  return package;
}
function submit() {
    var transcriptdata = compileData();
    $.ajax({
        type: 'post',
        url: 'text.php',
        data: {
            someValue: transcriptdata
        },
        success: function( data ) {
            console.log( data );
        }
    });
}
