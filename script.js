function addRecommendation() {
    const input = document.getElementById("new-recommendation");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a recommendation.");
        return;
    }

    const list = document.getElementById("recommendation-list");
    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    alert("Thank you for your recommendation!");
    input.value = "";
}
