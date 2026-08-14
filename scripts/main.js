function initClipboardButton() {

    //Grabs email address button and returns early if it doesn't exist
    var btn = document.getElementById("copy-email-button");
    if (!btn) {
        return;
    }

    var email = btn.textContent.trim();
    var timer;

    //Switches icon to check and stays active for 2 seconds
    function flash() {
        btn.classList.add("copied");
        clearTimeout(timer);
        timer = setTimeout(function () {
            btn.classList.remove("copied");
        }, 2000);
    }

    //Adds copied class to btn for 2 seconds, and copies button text to clipboard
    btn.addEventListener('click', function () {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(flash);
        } else {
            flash();
        }
    });

}

initClipboardButton();