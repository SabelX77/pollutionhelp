// ============================
// AQI CHECKER
// ============================

function checkAQI() {
    const aqi = parseInt(document.getElementById("aqiInput").value);
    const result = document.getElementById("aqiResult");

    if (isNaN(aqi)) {
        result.innerHTML = "⚠ Please enter a valid AQI.";
        result.style.background = "#fff3cd";
        return;
    }

    let message = "";
    let color = "";

    if (aqi <= 50) {
        message = "🟢 Good Air Quality";
        color = "#2ecc71";
    }
    else if (aqi <= 100) {
        message = "🟡 Moderate";
        color = "#f1c40f";
    }
    else if (aqi <= 150) {
        message = "🟠 Unhealthy for Sensitive Groups";
        color = "#f39c12";
    }
    else if (aqi <= 200) {
        message = "🔴 Unhealthy";
        color = "#e74c3c";
    }
    else if (aqi <= 300) {
        message = "🟣 Very Unhealthy";
        color = "#8e44ad";
    }
    else {
        message = "⚫ Hazardous";
        color = "#2c3e50";
    }

    result.innerHTML = message;
    result.style.background = color;
    result.style.color = "white";
}



// ============================
// ECO HABIT TRACKER
// ============================

let score = localStorage.getItem("ecoScore") || 0;
let actions = JSON.parse(localStorage.getItem("ecoActions")) || [];

updateTracker();

function addAction(action) {
    actions.push(action);
    score = Number(score) + 10;

    saveTracker();
    updateTracker();
}

function addCustomAction() {

    const input = document.getElementById("customAction");

    if (input.value.trim() === "") return;

    actions.push(input.value);

    score = Number(score) + 10;

    input.value = "";

    saveTracker();

    updateTracker();
}

function updateTracker() {

    document.getElementById("score").innerText = score;

    const list = document.getElementById("actionList");

    list.innerHTML = "";

    actions.forEach(action => {

        const li = document.createElement("li");

        li.innerHTML = "✅ " + action;

        list.appendChild(li);

    });

    const progress = Math.min(score, 100);

    document.getElementById("progressBar").style.width = progress + "%";
}

function resetTracker() {

    score = 0;

    actions = [];

    saveTracker();

    updateTracker();
}

function saveTracker() {

    localStorage.setItem("ecoScore", score);

    localStorage.setItem("ecoActions", JSON.stringify(actions));

}



// ============================
// ECO TIPS
// ============================

const tips = [

"Carry a reusable water bottle instead of buying plastic bottles.",

"Turn off lights when leaving a room.",

"Use public transport whenever possible.",

"Plant one tree every year.",

"Switch to LED bulbs to save electricity.",

"Reuse shopping bags instead of plastic bags.",

"Save water while brushing your teeth.",

"Recycle paper, plastic and metal separately.",

"Walk or cycle for short distances.",

"Avoid food waste by planning your meals."

];

function newTip() {

    const random = Math.floor(Math.random() * tips.length);

    document.getElementById("tip").innerHTML = tips[random];

}



// ============================
// AI WASTE DETECTOR
// ============================
