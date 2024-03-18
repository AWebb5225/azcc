//Load amplify conf file
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);


/*--------Database connection------------------------------------*/

/*--------Pushing data to database from RequestServices page ------------ */
//let appForm = document.getElementById("app-form");

//appForm.addEventListener("submit", (e) => {
//    e.preventDefault();
//});

//API function to grab and push the data to dynamodb
var callAPI = (fname, lname, email, tel, datetimelocal, serv1, serv2, serv3, serv4, serv5, addnotes) => {
    //create header object
    var myHeaders = new Headers();
    //add header type
    myHeaders.append("Content-Type", "application/json");
    //use JSON package to convert object to string
    var raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "email": email,
        "tel": tel,
        "datetimelocal": datetimelocal,
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
    fetch("https://yrzgtvlfyvf2deo237j323zqyu.appsync-api.us-east-1.amazonaws.com/graphql", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};