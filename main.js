const task = document.querySelector("h3"); // 只能選到第一個項目
console.log(task.textContent, (task.style.backgroundColor = "bisque"));

// const oddItems = document.querySelectorAll(".oddStyle");
// oddItems.forEach((item) => {
//     // item.style.backgroundColor = "gainsboro";
//     console.log(item.textContent);
// })

const textFields = document.querySelector(".textField");
const addTasks = document.querySelector(".addTask");
const list = document.querySelector(".list");

// 建立新項目
newTask = () => {
  if (textFields.value === "") {
    // 使用者僅按下 Enter 的話
    alert("請輸入項目");
    return;
  }

  const newLi = document.createElement("li"); // 建立新元素
  // newLi.textContent = textFields.value; // 用戶在文字欄中輸入的文字, 只能建立純文字內容, 不太夠用
  newLi.innerHTML = `
  <div class="liStyle">
    <div>
        <input type="checkbox" class="check" />
        <label>${textFields.value}</label>
    </div>
    <button class="delete">🗑</button>
  </div>
  `;

  // 刪除項目監聽
  const deleteTasks = newLi.querySelector(".delete");
  deleteTasks.addEventListener("click", () => {
    newLi.remove();
  });

  // 勾選項目監聽
  const checkTasks = newLi.querySelector(".check");
  checkTasks.addEventListener("click", () => {
    if (checkTasks.checked) {
      newLi.style.textDecoration = "line-through";
      newLi.style.color = "lightgray";
      list.append(newLi);
    } else {
      newLi.style.textDecoration = "none";
      newLi.style.color = "";
      list.prepend(newLi);
    }
  });

  list.append(newLi); // 把新任務放到清單底部
  newLi.classList.add("liWidth");
  textFields.value = ""; // 清空文字欄
};

// 監聽按鍵
textFields.addEventListener("keyup", (event) => {
  // console.log(event.key); // 顯示按下的按鍵
  if (event.key === "Enter") {
    newTask();
    console.log(event.target.value); // 主控台內顯示文字欄文字
  }
});

console.log(textFields.placeholder);
// textFields.forEach((item) => {
//     console.log(item.placeholder);
// })

// 按鈕監聽
addTasks.addEventListener("click", newTask);
