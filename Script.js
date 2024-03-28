//Load amplify conf file
/*
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.js';

Amplify.configure(config);
*/
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

/*--------Database connection------------------------------------*/

/*--------Pushing data to database from RequestServices page ------------ */
//let appForm = document.getElementById("app-form");

//appForm.addEventListener("submit", (e) => {
//    e.preventDefault();
//});

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
    fetch("https://tvnxs4x0r0.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};
