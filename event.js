const baseLink = 'http://kea.sigurdarson.is/wp-huset/wp-json/wp/v2/volunteer/';
const params = new URLSearchParams(window.location.search);
const eventID = params.get('id');
const headerClass = document.querySelector('.header');

window.onload = () => {
    headerClass.classList.add('headerWhite');
};

fetch(baseLink + eventID + "?_embed").then(e => e.json()).then(showEvent);

function showEvent(data) {
    console.log(data);
    document.querySelector("div img").src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    document.querySelector("div h1").textContent = data.event_name;
    document.querySelector('section .eventDetailsType').textContent = data.event_type;
    document.querySelector('section .eventDetailsDate').textContent = data.date_and_time;
    document.querySelector('section .eventDetailsDescription').textContent = data.projects;
}