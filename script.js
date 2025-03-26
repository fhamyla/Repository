function searchPapers() {
    let input = document.getElementById('search').value.toLowerCase();
    let papers = document.querySelectorAll('.paper');
    papers.forEach(paper => {
        let title = paper.getAttribute('data-title').toLowerCase();
        let author = paper.getAttribute('data-author').toLowerCase();
        let match = title.includes(input) || author.includes(input);
        paper.style.display = match ? 'block' : 'none';
    });
}

function filterBySDG() {
    let selectedSDG = document.getElementById('sdgFilter').value;
    let papers = document.querySelectorAll('.paper');
    papers.forEach(paper => {
        let sdg = paper.getAttribute('data-sdg');
        paper.style.display = (selectedSDG === "" || sdg === selectedSDG) ? 'block' : 'none';
    });
}