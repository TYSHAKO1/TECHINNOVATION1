var tablerows = 0;

function addRow() {
    tablerows += 1;
    var e = document.getElementById("formrow"),
        t = document.getElementById("gpaform").tBodies[0],
        n = e.cloneNode(!0),
        o = "formrow" + tablerows.toString();
    n.id = o,
        t.appendChild(n);
    for (var a = document.getElementById(o).childNodes, d = 0; d < a.length; d++)
        a[d].valueOf().hasChildNodes() && (a[d].valueOf().childNodes[0].id = a[d].valueOf().childNodes[0].id[0] + tablerows.toString())
}

function compileData() {
    for (var e = [], t = document.getElementById("gpaform").tBodies[0].rows.length, n = 0; n < t - 1; n++) {
        var o = [],
            a = "g" + n.toString(),
            d = "c" + n.toString(),
            r = "w" + n.toString(),
            b = "n" + n.toString();
        if (document.getElementById(a).value == 'other') {
            n = n; //continue;
        }
        o.push([document.getElementById(a).value, document.getElementById(d).value, document.getElementById(r).checked, document.getElementById(b).value]),
            e.push(o)
    }
    return console.log(e),
        e
}

function csvToArray() {
    return [
        ["Grade (%)", 0, 60, 63, 67, 70, 73, 77, 80, 83, 87, 90, 93],
        ["Grade (Letter)", "F", "D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A"],
        ["GP(UW)", 0, .7, 1, 1.3, 1.7, 2, 2.3, 2.7, 3, 3.3, 3.7, 4],
        ["GP(W)", 0, .7, 1, 1.3, 1.9, 2.2, 2.5, 3.1, 3.4, 3.7, 4.3, 4.6]
    ]
}

function calculateGPA() {
    for (var e = compileData(), t = csvToArray(), n = 0, o = 0, a = 0, d = 0; d < e.length; d++)
        for (var r = 0; r < e[d].length; r++) {
            var l = e[d][r],
                g = l[0],
                u = parseInt(l[1]);
            if (g == 'other') {
                continue;
            }
            a += u,
                l[2] ? (n += t[3][t[1].indexOf(g)] * u,
                    o += t[2][t[1].indexOf(g)] * u) : (n += t[2][t[1].indexOf(g)] * u,
                    o += t[2][t[1].indexOf(g)] * u)
        }
    return uwgpa = o / a,
        wgpa = n / a, [uwgpa.toFixed(3), wgpa.toFixed(3)]
}

function submit() {
    gpas = calculateGPA(),
        uwgpa = gpas[0],
        wgpa = gpas[1],
        document.getElementById("uwgpa").innerText = uwgpa,
        document.getElementById("wgpa").innerText = wgpa
}

function deleteLastAddedRow() {
    if (tablerows != 0) {
        document.getElementById("formrow" + tablerows.toString()).remove();
        tablerows -= 1;
    }
}

function saveGrades() {
    var blob = new Blob([compileData()], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, "SHS_GPA_Calculator.txt");
}

function upload() {
    const content = document.querySelector('.content');
    const [file] = document.querySelector('#myfile').files;
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        // this will then display a text file
        var content = reader.result;
        var ncontent = ''
        console.log(content);
        for (var yy = 0, com = 0; yy < content.length; yy++) {
            if (content[yy] == ',') {
                com += 1;
                console.log(com);
            }
            if (com == 4) {
                ncontent += '\n';
                com = 0;
                console.log('com');
                continue;
            }
            ncontent += content[yy];
        }
        console.log(ncontent);
        content = ncontent.split('\n');
        console.log(content);
        for (var ii = 0; ii < content.length; ii++) {
            content[ii] = content[ii].split(',');
        }
        sendToTable(content);

    }, false);

    if (file) {
        reader.readAsText(file);
    }
}

function sendToTable(content) {
    while (tablerows != 0) {
        deleteLastAddedRow();
    }
    for (var rows = 0; rows < content.length; rows++) {
        var row = content[rows];
        document.getElementById('g' + rows.toString()).value = row[0];
        document.getElementById('c' + rows.toString()).value = row[1];
        document.getElementById('w' + rows.toString()).checked = (row[2] == 'true');
        document.getElementById('n' + rows.toString()).value = row[3];
        addRow();

    }
    deleteLastAddedRow();
    submit();
}
