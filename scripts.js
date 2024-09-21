// 對話框的工具描述
const toolInfo = {
    tool1: `
        <p style="text-align: center; font-size: 18px; font-weight: bold;">土鑽</p>
        <p>功能：用以蒐集土壤之採樣工具。</p>
        <p>用法：將鑽頭朝下垂直土壤表面後，雙手握緊手把以順時針方向轉動，到達目標深度後垂直取出土鑽即可。</p>
    `,
    tool2: `
        <p style="text-align: center; font-size: 18px; font-weight: bold;">工具2介紹</p>
        <p>這是工具2的第一個特點。</p>
        <p>這是工具2的第二個特點。</p>
    `,
    tool3: `
        <p style="text-align: center; font-size: 18px; font-weight: bold;">工具3介紹</p>
        <p>這是工具3的第一個特點。</p>
        <p>這是工具3的第二個特點。</p>
    `
    // 根據需要添加更多工具介紹
};

// 顯示對話框
function showInfo(toolId, event) {
    event.preventDefault(); // 防止默認行為（如頁面跳轉）

    const dialog = document.getElementById("dialog-box");
    const content = document.getElementById("dialog-content");
    const line = document.getElementById("#line line");
    
    content.innerHTML = toolInfo[toolId] || "<p>沒有找到該工具的介紹。</p>";

    const xPos = event.pageX;
    const yPos = event.pageY;

    dialog.style.left = xPos + 70 + "px"; // 讓對話框位於點擊點右側一點
    dialog.style.top = yPos + 70 + "px";  // 讓對話框位於點擊點下方一點
    dialog.style.display = "block";

    const dialogRect = dialog.getBoundingClientRect();
    const dialogX = dialogRect.left + dialogRect.width / 2; // 對話框中心X座標
    const dialogY = dialogRect.top; // 對話框頂部Y座標

    line.setAttribute("x1", dialogX); // 對話框中心
    line.setAttribute("y1", dialogY); // 對話框頂部
    line.setAttribute("x2", xPos); // 點擊位置X座標
    line.setAttribute("y2", yPos); // 點擊位置Y座標
}

// 隱藏對話框
function hideInfo() {
    const dialog = document.getElementById("dialog-box");
    const line = document.getElementById("line");

    dialog.style.display = "none";
    line.setAttribute("x1", 0); // 重置線條位置
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", 0);
}
