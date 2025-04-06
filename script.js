document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const yearTo = document.getElementById("yearTo");
    const yearFrom = document.getElementById("yearFrom");

    yearFrom.value = currentYear - 5;
    yearTo.value = currentYear;

    yearFrom.max = currentYear;
    yearTo.max = currentYear;

    yearFrom.addEventListener("input", handleYearChange);
    yearTo.addEventListener("input", handleYearChange);
    yearFrom.addEventListener("change", handleYearChange);
    yearTo.addEventListener("change", handleYearChange);
});

function handleYearChange() {
    const yearFrom = document.getElementById("yearFrom");
    const yearTo = document.getElementById("yearTo");

    let fromVal = parseInt(yearFrom.value);
    let toVal = parseInt(yearTo.value);

    if (fromVal > toVal) {
        yearTo.value = fromVal;
        toVal = fromVal;
    } else if (toVal < fromVal) {
        yearFrom.value = toVal;
        fromVal = toVal;
    }

    yearFrom.max = toVal;
    yearTo.min = fromVal;

    filterByYear();
}

function filterByYear() {
    const from = parseInt(document.getElementById("yearFrom").value);
    const to = parseInt(document.getElementById("yearTo").value);
    const papers = document.querySelectorAll(".paper");

    papers.forEach(paper => {
        const year = parseInt(paper.getAttribute("data-date"));
        const visible = (year >= from && year <= to);

        paper.style.display = visible ? 'block' : 'none';
    });
}

function searchPapers() {
    applyFilters();
}

function filterBySDG() {
    applyFilters();
}

function applyFilters() {
    const input = document.getElementById('search').value.toLowerCase();
    const selectedSDG = document.getElementById('sdgFilter').value;
    const from = parseInt(document.getElementById('yearFrom').value);
    const to = parseInt(document.getElementById('yearTo').value);

    const papers = document.querySelectorAll('.paper');

    papers.forEach(paper => {
        const title = paper.getAttribute('data-title').toLowerCase();
        const author = paper.getAttribute('data-author').toLowerCase();
        const sdg = paper.getAttribute('data-sdg');
        const year = parseInt(paper.getAttribute('data-date'));

        const matchesSearch = title.includes(input) || author.includes(input);
        const matchesSDG = selectedSDG === "" || sdg === selectedSDG;
        const matchesYear = year >= from && year <= to;

        paper.style.display = (matchesSearch && matchesSDG && matchesYear) ? 'block' : 'none';
    });
}