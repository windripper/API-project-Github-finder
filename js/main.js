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
                    ui.showAlert("User not found", "alert alert-danger");
                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }

})