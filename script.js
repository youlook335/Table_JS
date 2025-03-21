function generateTable() {
    const number = document.getElementById("numberInput").value;
    const limit = document.getElementById("limitInput").value;
    const tableData = document.getElementById("tableData");
    const tableHeading = document.getElementById("tableHeading");
    const copyBtn = document.getElementById("copyBtn");
    const copyText = document.getElementById("copyText");

    if (!number || !limit) {
        alert("Please enter a valid number and limit!");
        return;
    }

    let tableHTML = "";
    let copyContent = `Table of ${number} up to ${limit}\n`;

    for (let i = 1; i <= limit; i++) {
        let rowText = `${number} × ${i} = ${number * i}`;
        tableHTML += `<tr><td>${rowText}</td></tr>`;
        copyContent += rowText + "\n";
    }

    tableData.innerHTML = tableHTML;
    tableHeading.innerText = `Table of ${number} up to ${limit}`;
    copyText.value = copyContent;
    copyBtn.style.display = "block"; // Show copy button after generating table
}

function copyTable() {
    let copyText = document.getElementById("copyText");
    copyText.select();
    document.execCommand("copy");
    alert("📋 Table copied successfully!");
}
