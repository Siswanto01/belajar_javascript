const favoriteFoods = ["Ketoprak", "Sate", "Mie Ayam", "Bakso", "Soto", "Nasi Goreng"];

const containerElement = document.getElementById("title");
const title = document.createElement("h2");
title.innerText = "Tugas";
containerElement.append(title);

const container = document.getElementById("favoriteFoods");
const ul = document.createElement("ul");
favoriteFoods.forEach((food) => {
    const li = document.createElement("li");
    li.textContent = food;
    ul.append(li);
});

container.append(ul);