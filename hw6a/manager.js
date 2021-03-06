
//get local data
var localdata = localStorage.getItem('user') == null ? [] :
    JSON.parse(localStorage.getItem('user'));
var lenOfData = 0

// show local data with formatting
show()
function show() {
    var htmlVac = '';
    var htmlTest = '';
    lenOfData = 0
    // loop through each object in the local data array
    // and display in the corresponding table (test or vaccination)
    localdata.forEach((ele, i) => {
        if(ele.type == "Vaccination"){
            lenOfData += 1;
            htmlVac += `
            <tr>
                <th>${ele.location}</th>
                <th>${ele.address}</th>
                <th>${ele.tel}</th>
                <th>${ele.type}</th>
                <th>${ele.datetime}</th>
                <th>${ele.time}</th>
                <th><a href='javascript:;' onclick='cancel(${i})'>cancel</a></th>
            </tr>
            `
        }
        else if (ele.type == "Testing"){
            lenOfData += 1;
            htmlTest += `
            <tr>
                <th>${ele.location}</th>
                <th>${ele.address}</th>
                <th>${ele.tel}</th>
                <th>${ele.type}</th>
                <th>${ele.datetime}</th>
                <th>${ele.time}</th>
                <th><a href='javascript:;' onclick='cancel(${i})'>cancel</a></th>
            </tr>
            `
        }
    });
    document.getElementById('box1').innerHTML = htmlVac;
    document.getElementById('box2').innerHTML = htmlTest;
    document.getElementById('app-count').innerHTML = lenOfData + " appointment(s)";
    console.log(localdata);
}


//cancel appointment button
function cancel(i) {
    localdata.splice(i, 1);
    localStorage.setItem('user', JSON.stringify(localdata));
    show();
}
