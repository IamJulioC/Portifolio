async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const fetiching = await fetch(url)
    return await fetiching.json()
}

