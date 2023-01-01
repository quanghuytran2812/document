//display Form Contacts
let formNew = document.getElementById("contacts-form");
function displayForm() {
    if (formNew.style.display === "none") {
        formNew.style.display = "block";
        formNew.parentElement.classList.add('row', 'formContact', 'popup');
    } else {
        formNew.style.display = "none";
    }
    clearFields();
    loadDataContacts();
}
document.querySelector('.popup_close').addEventListener('click', ()=>{
    formNew.style.display = "none";
    formNew.parentElement.classList.remove('popup');
});


let formData = new Map([
    ['contact1', obj = {
        idC: 1,
        firstName: 'Thuy',
        lastName: 'Nguyen',
        fullName: function () {
            return this.lastName + " " + this.firstName;
        },
        emailC: 'Thuy@gmail.com',
        phoneC: '38912839'
    }],
    ['contact2', obj = {
        idC: 2,
        firstName: 'An',
        lastName: 'Le',
        fullName: function () {
            return this.lastName + " " + this.firstName;
        },
        emailC: 'An@gmail.com',
        phoneC: '09328392'
    }],
    ['contact3', obj = {
        idC: 3,
        firstName: 'Thien',
        lastName: 'Tran',
        fullName: function () {
            return this.lastName + " " + this.firstName;
        },
        emailC: 'thienn@gmail.com',
        phoneC: '09328392'
    }],
    ['contact4', obj = {
        idC: 4,
        firstName: 'Tien',
        lastName: 'Nguyen',
        fullName: function () {
            return this.lastName + " " + this.firstName;
        },
        emailC: 'Tien@gmail.com',
        phoneC: '09328392'
    }],
]);
function onFormSubmit() {
    let formData = readFormData();
    let keyConta = document.getElementById('keyContact').value;
    if (keyConta) {
        updateContacts(formData);
    } else {
        insertContacts(formData);
    }
    clearFields();
}


//Load data from Map()
this.onload = loadDataContacts();
function loadDataContacts() {
    ClearTable();
    const row = document.getElementById("table-contact").getElementsByTagName('tbody')[0];

    if (formData.size > 0) {
        for (const [key, value] of formData) {
            //
            const tr = document.createElement("tr");
            let name = value.fullName();
            const idCon = createTable("th", `${value.idC}`);
            const fullname = createTable("td", name);
            const emailC = createTable("td", `${value.emailC}`);
            const phoneC = createTable("td", `${value.phoneC}`);
            const Action = createAction(`${key}`);

            tr.appendChild(idCon);
            tr.appendChild(fullname);
            tr.appendChild(emailC);
            tr.appendChild(phoneC);
            tr.appendChild(Action);

            row.appendChild(tr);
        }
    }
}
// create td load data to table
function createTable(element, value) {
    const tableElement = document.createElement(element);
    const tableValue = document.createTextNode(value);
    tableElement.appendChild(tableValue);
    return tableElement;
}
// create td action: edit and delete
function createAction(key) {
    const td = createTable("td", "");
    //create icon Edit
    const iEdit = document.createElement("i");
    iEdit.setAttribute('class', "bi bi-pen text-primary edit");
    const aEdit = document.createElement("a");
    aEdit.onclick = function () {
        getID(key);
    }
    //create icon Delete
    const iDelete = document.createElement("i");
    iDelete.setAttribute('class', "bi bi-archive text-danger delete");
    const aDelete = document.createElement("a");
    aDelete.onclick = function () {
        deleteContacts(key);
    }

    aEdit.appendChild(iEdit);
    aDelete.appendChild(iDelete);

    td.appendChild(aEdit);
    td.appendChild(aDelete);
    return td;
}
// clear table before add, update, delete
function ClearTable() {
    let table = document.getElementById('table-contact');
    let rowCount = table.rows.length;
    for (let i = 1; i < rowCount; i++) {
        table.deleteRow(1);
    }
}
// search by name
function searchContacts() {
    ClearTable();
    let nameS = document.querySelector("#nameS").value;
    const row = document.getElementById("table-contact").getElementsByTagName('tbody')[0];
    for (const [key, value] of formData) {
        nameMap = (value.fullName()).toLowerCase();
        if (nameMap.indexOf(nameS) > -1) {
            const tr = document.createElement("tr");

            const idCon = createTable("th", `${value.idC}`);
            const fullname = createTable("td", `${value.fullName()}`);
            const emailC = createTable("td", `${value.emailC}`);
            const phoneC = createTable("td", `${value.phoneC}`);
            const Action = createAction(`${key}`);


            tr.appendChild(idCon);
            tr.appendChild(fullname);
            tr.appendChild(emailC);
            tr.appendChild(phoneC);
            tr.appendChild(Action);

            row.appendChild(tr);
        }
    }
    document.querySelector("#nameS").value = "";
}
//add a contact
let keyCo = 0;
function insertContacts(data) {
    let idCon = 0;
    //get values from form   
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const emailC = document.querySelector("#emailC").value;
    const phoneC = document.querySelector("#phoneC").value;
    keyCo++;

    //validate
    if (firstName == '' || lastName == '' || emailC == '' || phoneC == '') {
        confirm("Fill in all fields!");
    } else {
        data.idC = (formData.size);
        idCon = (data.idC)++;
        document.querySelector("#codeC").value = idCon;
        let keyC = String(keyCo);
        formData.set(keyC, data);
        loadDataContacts();
        console.log(formData)
    }
}
//get key from Map
function getID(key) {
    let result = formData.get(key);

    formNew.style.display = "block";
    formNew.parentElement.classList.add('row', 'formContact', 'popup');
    
    let keyCon = key;
    document.querySelector("#keyContact").value = keyCon;
    document.querySelector("#codeC").value = result.idC;
    document.querySelector("#firstName").value = result.firstName;
    document.querySelector("#lastName").value = result.lastName;
    document.querySelector("#emailC").value = result.emailC;
    document.querySelector("#phoneC").value = result.phoneC;
}
//update a contact
function updateContacts(data) {
    if (data.firstName == '' || data.lastName == '' || data.emailC == '' || data.phoneC == '') {
        confirm("Fill all fields!");
    } else {
        let keyConta = document.getElementById('keyContact').value;
        formData.set(keyConta, data);
        loadDataContacts();
        console.log(formData);
    }
}
//delete a contacts
function deleteContacts(key) {
    if (confirm('Are you want to delete this contacts?')) {
        formData.delete(key);
        loadDataContacts();
    }
    console.log(formData);
}


//read data from form
function readFormData() {
    let formData = {};
    formData["idC"] = document.querySelector("#codeC").value;
    formData["firstName"] = document.querySelector("#firstName").value;
    formData["lastName"] = document.querySelector("#lastName").value;
    formData["fullName"] = function () {
        return this.lastName + " " + this.firstName;
    };
    formData["emailC"] = document.querySelector("#emailC").value;
    formData["phoneC"] = document.querySelector("#phoneC").value;
    return formData;
}

//clear input in form
function clearFields() {
    document.querySelector("#keyContact").value = "";
    document.querySelector("#codeC").value = "";
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#emailC").value = "";
    document.querySelector("#phoneC").value = "";
}

