/*--------Pushing data to database from RequestServices page ------------ */
function submitForm() {
    // Get form data
    const formData = new FormData(document.getElementById('app-form'));
    const data = {};
    for (let entry of formData.entries()) {
        data[entry[0]] = entry[1];
    }
    data.services = formData.getAll('services');

    // Convert form data to JSON
    const jsonData = JSON.stringify(data);

    // Send JSON data to AWS API Gateway endpoint
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://36ktc6fo3k.execute-api.us-east-1.amazonaws.com/dev', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Response:', xhr.responseText);
        } else {
            console.log('Error:', xhr.responseText);
        }
    };
    xhr.send(jsonData);
    document.getElementById("app-form").reset();
}

/*--------Pulling data from the database to dashboard page ------------ */
function fetchDataAndDisplay() {
    //GET request for data from lambda
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://36ktc6fo3k.execute-api.us-east-1.amazonaws.com/dev', true);
    xhr.setRequestHeader('Allow-Access-Origin', '*');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT')
    xhr.onload = function () {
        if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);
            // Display data on dashboard
            displayData(responseData);
        } else {
            console.log('Error fetching data:', xhr.responseText);
        }
    };
    xhr.send();
    
    function displayData(data) {
        //display data in html with id dashboard
        const dashboardElement = document.getElementById('dashboard');
        //clear previous data
        dashboardElement.innerHTML = '';
        //create HTML to display each entry
        data.forEach(entry => {
            const entryDiv = document.createElement('div');
            entryDiv.textContent = JSON.stringify(entry);
            dashboardElement.appendChild(entryDiv);
        });
    }
}
