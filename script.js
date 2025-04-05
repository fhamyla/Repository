document.addEventListener("DOMContentLoaded", () => {
    const yearTo = document.getElementById("yearTo");
    yearTo.value = new Date().getFullYear();
    yearTo.max = new Date().getFullYear();
});

function searchPapers() {
    let input = document.getElementById('search').value.toLowerCase();
    let papers = document.querySelectorAll('.paper');
    papers.forEach(paper => {
        let title = paper.getAttribute('data-title').toLowerCase();
        let author = paper.getAttribute('data-author').toLowerCase();
        let match = title.includes(input) || author.includes(input);
        paper.style.display = match ? 'block' : 'none';
    });
    filterByYear();
}

function filterBySDG() {
    let selectedSDG = document.getElementById('sdgFilter').value;
    let papers = document.querySelectorAll('.paper');
    papers.forEach(paper => {
        let sdg = paper.getAttribute('data-sdg');
        paper.style.display = (selectedSDG === "" || sdg === selectedSDG) ? 'block' : 'none';
    });
    filterByYear();
}

function filterByYear() {
    let from = parseInt(document.getElementById('yearFrom').value);
    let to = parseInt(document.getElementById('yearTo').value);
    let papers = document.querySelectorAll('.paper');
    papers.forEach(paper => {
        let year = parseInt(paper.getAttribute('data-date'));
        let withinRange = (!isNaN(from) && !isNaN(to)) ? (year >= from && year <= to) : true;
        if (paper.style.display !== "none") {
            paper.style.display = withinRange ? 'block' : 'none';
        }
    });
}