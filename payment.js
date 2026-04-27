const onlineRadio = document.getElementById("online");
const cashRadio = document.getElementById("cash");
const onlineOptions = document.querySelectorAll('input[name="online_type"]');

// لما يختار Cash
cashRadio.addEventListener("change", function () {
    if (this.checked) {
        onlineOptions.forEach(function (option) {
            option.checked = false;
            option.disabled = true;
        });
    }
});

// لما يختار Online
onlineRadio.addEventListener("change", function () {
    if (this.checked) {
        onlineOptions.forEach(function (option) {
            option.disabled = false;
        });
    }
});