const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q:searchTerm}} // This is a better way than below method:
    //const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const res = await axios.get("http://api.tvmaze.com/search/shows",config);
    makeImages(res.data);
    form.elements.query.value="";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}