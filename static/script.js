document.getElementById("shortenbutton").addEventListener("click", () => {
    console.log("clicked");
});

document.getElementById("editableInput").addEventListener("input", function (event) {
    prefix = "ezlynk.vercel.app//"
    var inputValue = event.target.value.slice(prefix.length);
    var pattern = /^[a-zA-Z0-9]*$/;
    if (!pattern.test(inputValue)) {
        alert("no special character allowed")
        event.target.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('editableInput');
    var initialValue = inputField.value;

    inputField.addEventListener('input', function (event) {
        var currentValue = event.target.value;

        if (!currentValue.startsWith(initialValue)) {
            event.target.value = initialValue;
        }
    });




    document.getElementById("urltype").addEventListener("input", () => {
        if (document.getElementById("urltype").value === "custom") {
            elements = document.querySelectorAll(".customurloption")
            elements.forEach(element => {
                element.classList.remove("hide")

            });
            document.getElementById("shortenbutton").disabled = true;
        }
        else {
            elements = document.querySelectorAll(".customurloption")

            elements.forEach(element => {
                element.classList.add("hide")


            });
            document.getElementById("shortenbutton").disabled = false;

            inputField.value = initialValue

        }
    })


});



var inputField = document.getElementById('url');
var errorElement = document.getElementById("errorurl");

errorElement.style.display = 'none';

inputField.addEventListener('input', function (event) {
    var url = event.target.value;
    var urlPattern = /^(http|https):\/\/[^ "]+$/;

    if (!url.match(urlPattern)) {
        errorElement.style.display = 'block';
        document.getElementById("shortenbutton").disabled = true;

    } else {
        errorElement.style.display = 'none';
        document.getElementById("shortenbutton").disabled = false;

    }
});

const routeInput = document.getElementById('editableInput');
const availabilitySpan = document.getElementById('availability');

routeInput.addEventListener('input', function () {
    var route = routeInput.value.trim();
    const prefix = 'ezlynk.vercel.app/';
    route = route.slice(prefix.length);

    document.getElementById("shortenbutton").disabled = true;
    if (route.length === 0) {
        availabilitySpan.textContent = 'enter a valid url';
        availabilitySpan.style.color = 'orange';
        return;


    }

    else {
        availabilitySpan.textContent = 'enter a valid url';
        availabilitySpan.style.color = 'red';
        fetch('/check_route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'route=' + encodeURIComponent(route)
        })
            .then(response => response.json())
            .then(data => {
                if (data.available) {
                    availabilitySpan.textContent = 'Route is available';
                    availabilitySpan.style.color = 'green';
                    document.getElementById("shortenbutton").disabled = false;

                } else {
                    availabilitySpan.textContent = 'Route is not available';
                    availabilitySpan.style.color = 'red';
                    document.getElementById("shortenbutton").disabled = true;

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
