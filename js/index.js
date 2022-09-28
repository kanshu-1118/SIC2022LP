const apiData = document.querySelector(".api__data")
const btnBox = document.querySelector(".btn__box")
const url = "https://jsonplaceholder.typicode.com/posts"

for (let i = 0; i < 10; i++) {
    if(i == 0){
        btnBox.innerHTML +=
        `
        <div class="api__btn">
        <a href="#">1~${i+1}0</a>
        </div>
        `
    }else{
        btnBox.innerHTML +=
        `
        <div class="api__btn">
        <a href="#">${i}1~${i+1}0</a>
        </div>
        `
    }
}
const apiBtn = document.querySelectorAll(".api__btn")

// ボタンを押したら1~10
// ボタンを押したら11~20...etc
// ボタンを押したら91~100
apiBtn.forEach((e,i) => {
    console.log(i);
    e.addEventListener("click" , () => {
        apiData.innerHTML = ``
        if (i == 0) {
            fetch(url+`?id=1&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9&id=10`)
            .then(res => res.json())
            .then(data => {
                data.forEach((e,i) => {
                    apiData.innerHTML +=
                    `
                    <div class="user">
                        <h2>${e.id}</h2>
                        <p>${e.title}</p>
                    </div>
                    `
                })
            });
        }else{
            fetch(url+`?id=${i}1&id=${i}2&id=${i}3&id=${i}4&id=${i}5&id=${i}6&id=${i}7&id=${i}8&id=${i}9&id=${i+1}0`)
            .then(res => res.json())
            .then(data => {
                data.forEach((e,i) => {
                    apiData.innerHTML +=
                    `
                    <div class="user">
                        <h2>${e.id}</h2>
                        <p>${e.title}</p>
                    </div>
                    `
                })
            });
        }
    });
});


