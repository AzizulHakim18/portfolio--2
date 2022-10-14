// navbar js code
function openNav() {
    document.getElementById("mySidenav").style.width = "70%" //opens side navbar by 70 percent
    document.getElementById('backdrop').style.display = "block" //displays overlay
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById('backdrop').style.display = "none"
}


// google chart js file
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    const data = google.visualization.arrayToDataTable([
        ['Skills', 'Percentage', { role: 'style' }],
        ['HTML', 90, 'color: gray'],
        ['CSS', 85, 'color: #76A7FA'],
        ['BOOTSTRAP', 90, 'color: #76A7FA'],
        ['TAILWIND', 80, 'color: #76A7FA'],
        ['JAVASCRIPT', 65, 'color: #76A7FA'],
        ['REACT JS', 60, 'color: #76A7FA']
    ]);

    const options = {
        title: 'Skills Catagory'
    };

    const chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
}







// contact page
const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
    let letters = /^[a-zA-Z\s]*$/;
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const companyName = companyNameEl.value.trim();
    const message = messageEl.value.trim();
    if (name === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {
        }
    }
    if (email === "") {
        document.querySelector(".name-error").classList.add("error");
        document.querySelector(".name-error").innerText =
            "Please fill out this field!";
    } else {
        if (!letters.test(name)) {
            document.querySelector(".name-error").classList.add("error");
            document.querySelector(".name-error").innerText =
                "Please enter only characters!";
        } else {
        }
    }
}

function reset() {
    nameEl = "";
    emailEl = "";
    companyNameEl = "";
    messageEl = "";
    document.querySelector(".name-error").innerText = "";
}
