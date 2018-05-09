navigator.getBattery().then(function(battery) {
    let level = battery.level * 100 + "%";
    console.log("Your Battery Life is " + level);
    document.getElementById('battery_life').innerHTML = "Your Battery Life is " + level
});
