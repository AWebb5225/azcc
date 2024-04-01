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
const appForm = document.getElementById("app-form");

appForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObject = Object.formEntries(formData.entries());

    const apiEndpoint = "https://36ktc6fo3k.execute-api.us-east-1.amazonaws.com";

    fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

    /*
//API function to grab and push the data to dynamodb
var callAPI = (fname, lname, email, tel, datetimelocal, serv1, serv2, serv3, serv4, serv5, addnotes) =>  {
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
    fetch("https://36ktc6fo3k.execute-api.us-east-1.amazonaws.com", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};
,
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