class UI {
    constructor () {
        this.profile = document.getElementById("profile");
    }

    //Display profile
    showProfile (user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}"></img>
                        <a class="btn btn-primary btn-block mb-4" href="${user.html_url}" target="_blank" >View profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br></br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos:</h3>
            <div id="repos"></div>
        `;
    }

    // Show repos
    showRepos (repos) {
        let output = "";

        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        })

        document.getElementById("repos").innerHTML = output;
    }

    // Show alert message
    showAlert (message, className) {
        this.clearAlert();

        const div = document.createElement("div");
        div.id = "showAlert";
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".search-container");
        const search = document.querySelector(".search");

        container.insertBefore(div, search);

        // Clear after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }

    // Clear alert message
    clearAlert () {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile () {
        this.profile.innerHTML = "";
    }
}