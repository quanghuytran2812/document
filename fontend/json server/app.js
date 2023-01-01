var couseraApi = 'http://localhost:3000/cousera';

function start() {
    getCousera(renderCousera);
    handerCousera();
    handerUpdateCousera();
}
start();
function getCousera(callback) {
    fetch(couseraApi)
        .then(response => response.json())
        .then(callback)
}

function renderCousera(couses) {
    let html = couses.map((value) => {
        return `<li>
                    <h2>${value.name}</h2>
                    <p>${value.description}</p>
                    <button  style="cursor: pointer;" onclick="handledeleteCourse(${value.id})">&times;</button>
                    <button  style="cursor: pointer;" onclick="displayInfo(${value.id})">Update</button>
                </li>`
    })
    document.querySelector(".films").innerHTML = html.join('');
}

function handledeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(couseraApi + '/' + id, options)
        .then(function (response) { response.json() })
        .then()
}

function getID(id, callback) {
    fetch(couseraApi + "/" + id)
        .then(response => response.json())
        .then(callback);
}
function displayInfo(id) {
    var nameCo = document.getElementById("name");
    var desCo = document.getElementById("des");
    var idCo = document.getElementById("id-Co");
    getID(id, function (data) {
        idCo.value = data.id;
        nameCo.value = data.name;
        desCo.value = data.description;
    });

}
function handerUpdateCousera() {
    let update = document.getElementById("update");
    update.addEventListener('click', () => {
        var nameUp = document.querySelector('input[name="name"]').value;
        var desUp = document.querySelector('input[name="des"]').value;
        var upData = {
            name: nameUp,
            description: desUp
        }
        updateCousera(upData);
    });
}
function updateCousera(data){
    var idF = document.getElementById("id-Co").value;
    var Upoptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(couseraApi + "/" + idF, Upoptions)
        .then(response => response.json())
        .then()
}
function createCousera(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(couseraApi, options)
        .then(response => response.json())
        .then(callback)
}

function handerCousera() {
    let create = document.querySelector("#create");
    create.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var des = document.querySelector('input[name="des"]').value;

        var formData = {
            name: name,
            description: des
        }
        createCousera(formData);
    }
}