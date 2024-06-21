const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    var table = document.querySelector('table');
    var prices = document.querySelectorAll('.price');
    let sum = 0;

    prices.forEach((price) => {
        sum += parseFloat(price.textContent);
    });

    // Create a new row
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.setAttribute('colspan', '2');
    cell.textContent = `Total Price: Rs ${sum}`;

    // Append the new row
    row.appendChild(cell);
    table.appendChild(row);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
