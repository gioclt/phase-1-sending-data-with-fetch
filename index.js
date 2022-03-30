
function submitData(name, email) {
    const configObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    };
    return fetch("http://localhost:3000/users", configObject)
        .then(response => response.json())
        .then(body => addNewContact(body.id))
        .catch(function (error) {
            alert("Unauthorized Access");
            document.body.innerHTML=error.message
        })
    
}

function addNewContact(newId) {
    document.getElementsByTagName("body")[0].innerHTML = newId;
}

submitData("name", "name@name.com")