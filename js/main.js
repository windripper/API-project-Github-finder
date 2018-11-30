// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search user
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", (evt) => {
    // Get user's text
    const userText = evt.target.value;
    
    if (userText !== "") {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    // Show error alert
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // Clear profile

    }

})