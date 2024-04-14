//Load amplify conf file
/*
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.js';

Amplify.configure(config);

Amplify.configure({
    API: {
        REST: {
            requestServiceAPItest: {
                endpoint:
                    'https://tvnxs4x0r0.execute-api.us-east-1.amazonaws.com/dev',
                region: 'us-east-1' // Optional
            }
        }
    }
});
*/
/*--------Database connection------------------------------------*/

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


/*
var callAPI = (fname, lname, email, pnumber, date, serv1, serv2, serv3, serv4, serv5, addnotes) =>  {
    //create header object
    var myHeaders = new Headers();
    //add header type
    myHeaders.append("Content-Type", "application/json");
    //use JSON package to convert object to string
    var raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "email": email,
        "pnumber": pnumber,
        "date": date,
        "serv1": serv1,
        "serv2": serv2,
        "serv3": serv3,
        "serv4": serv4,
        "serv5": serv5,
        "addnotes": addnotes,
    });
    //create JSON obj for http POST request to API
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    //Call to API using paramters
    fetch("https://36ktc6fo3k.execute-api.us-east-1.amazonaws.com/dev/", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};

                callAPI(document.getElementById('fname').value,
                    document.getElementById('lname').value,
                    document.getElementById('email').value,
                    document.getElementById('pnumber').value,
                    document.getElementById('date').value,
                    document.getElementById('serv1').value,
                    document.getElementById('serv2').value,
                    document.getElementById('serv3').value,
                    document.getElementById('serv4').value,
                    document.getElementById('serv5').value,
                    document.getElementById('addnotes').value)
*/
