class Github {
    constructor () {
        this.client_id = "75e6e78611a1b4a32665";
        this.client_secret = "215e44b03e412a9280b147c1b261e27fc4a2e132";
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}