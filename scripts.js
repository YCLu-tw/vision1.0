// 對話框的工具描述
const toolInfo = {
    tool1: `
        <p style="text-align: center; font-size: 30px; font-weight: bold;">土鑽</p>
        <p>功能：用以蒐集土壤之採樣工具。</p>
        <p>用法：將鑽頭朝下垂直土壤表面後，雙手握緊手把以順時針方向轉動，到達目標深度後垂直取出土鑽即可。</p>
    `,
    tool2: `
        <p style="text-align: center; font-size: 30px; font-weight: bold;">孟氏色帖</p>
        <p>功能：用於比較土壤顏色，可以初步研判其性質
主要以色彩(hue)、 色值(value)和色度(chroma)三個面向表示，色彩可表示其中的成分，常用於土壤診斷；色值表示顏色的相對明暗，色值越大，顏色越亮；色度表示光譜的相對純度或強度，色度越小，白色成分居多。
</p>
        <p>用法：在照明良好且均勻一致的場所進行，直接以肉眼比色。</p>
    `,
    tool3: `
        <p style="text-align: center; font-size: 30px; font-weight: bold;">土壤剖面樣本</p>
        <p>功能：用於參考土壤剖面化育層。每一個區域的樣本並非都有明顯的化育層分層，會因為各種因素而有差距，土壤剖面有助於建立土壤資料，搭配當地的地形氣候生物層等因素，可以判斷土壤的演化以及歷史。</p>
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

    dialog.style.left = xPos + 25 + "px"; // 讓對話框位於點擊點右側一點
    dialog.style.top = yPos + 25 + "px";  // 讓對話框位於點擊點下方一點
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
