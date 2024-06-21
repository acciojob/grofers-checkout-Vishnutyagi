const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select the table and all price elements
    const table = document.querySelector("table");
    const prices = table.querySelectorAll('.price');

    let sum = 0;
    // Iterate through each price and calculate the total sum
    prices.forEach(price => {
        sum += parseFloat(price.textContent); // Use textContent to get the price value
    });

    // Create a new row for displaying the total price
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <strong>Total Price:</strong>
        <td id="ans"><strong>${sum}</strong></td>
    `;

    // Append the total row to the table body
    table.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
