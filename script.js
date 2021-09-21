/*var container =document.createElement('div');
container.setAttribute('class', 'container');

var row =document.createElement('div');
row .setAttribute('class', 'row');

var column =document.createElement('div');
column.setAttribute('class', 'column');

row.append(column);
container.append(row);
document.body.append(container);*/

//creating a bootstrap table
var table=document.createElement('table');
table.setAttribute('class','table');

//creating a thead
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

//create a row
var tr=document.createElement('tr');

//create a th tag ()
var th1=createthtd('th','firstname');
var th2=createthtd('th','lastname');
tr.append(th1,th2);
thead.append(tr);

//create a body tag of table
var tbody=document.createElement('tbody');

//create a row
var tr1=document.createElement('tr');
var tr2=document.createElement('tr');

//create a td tag

var td1=createthtd('td','guvi');
var td2=createthtd('td','geek');
var td3=createthtd('td','joe');
var td4=createthtd('td','biden');

tr1.append(td1,td2);
tr2.append(td3,td4);
tbody.append(tr1,tr2);
table.append(thead,tbody);
document.body.append(table);

//<th> firstname </th>
//elementname-><th>
//value->firstname


//return value -> <th>firstname </th>
//return value -> <td>firstname </td>

//return value -> <td>guvi</td>
//return value -> <td>geek</td>


function createthtd(elementname,value){
var element=document.createElement(elementname);
element.innerHTML=value;
return element;
}


