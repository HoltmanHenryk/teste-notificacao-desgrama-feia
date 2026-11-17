let currentAnimation = null;

function show_notification(message, type = "positive") {
    let toast = document.querySelector(".toast_notification");

    if (!toast) {
        toast = document.createElement("div");
        document.body.appendChild(toast);
    }

    if (currentAnimation) {
        currentAnimation.cancel();
    }

    toast.textContent = message;
    const variant = (type === "negative" || type === false) ? "negative" : "positive";
    toast.className = `toast_notification ${variant}`;
    toast.style.visibility = "visible";

    currentAnimation = toast.animate(
        [
            { opacity: 0, transform: "translateY(-50px)", offset: 0 },
            { opacity: 1, transform: "translateY(0px)",   offset: 0.12 },
            { opacity: 1, transform: "translateY(0px)",   offset: 0.88 },
            { opacity: 0, transform: "translateY(-50px)", offset: 1 }
        ],
        {
            duration: 3000,
            easing: "ease",
            fill: "forwards"
        }
    );

    currentAnimation.onfinish = () => {
        toast.style.visibility = "hidden";
    };
}
