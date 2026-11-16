let notificationTimeout;

function showNotification(message = "Saved!") {
    let toast = document.querySelector(".positive_notification");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "positive_notification";
        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.remove("show");
    void toast.offsetWidth; 
    toast.classList.add("show");
}
