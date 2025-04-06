document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const yearTo = document.getElementById("yearTo");
    const yearFrom = document.getElementById("yearFrom");

    // Default values
    yearFrom.value = currentYear - 5;
    yearTo.value = currentYear;

    // Set bounds
    yearFrom.max = currentYear;
    yearTo.max = currentYear;

    // Add listeners to both inputs
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

    // Adjust if range is invalid
    if (fromVal > toVal) {
        yearTo.value = fromVal;
        toVal = fromVal;
    } else if (toVal < fromVal) {
        yearFrom.value = toVal;
        fromVal = toVal;
    }

    // Update constraints dynamically
    yearFrom.max = toVal;
    yearTo.min = fromVal;

    // Trigger filter
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