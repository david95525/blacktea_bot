# Blacktea Bot (紅茶機器人) 🍵

這是一個基於 `discord.js` v14 開發的 Discord 互動機器人，主要功能是提供自定義的指令回覆，支援文字、圖片、GIF 以及影片，並具備冷卻系統 (Cooldown) 與指令分類清單。

## 🚀 功能亮點

-   **自定義指令**：透過 `commands.js` 輕鬆擴充指令。
-   **多樣化回覆**：
    -   單一文字或圖片/GIF/影片。
    -   隨機回覆：可設定多個回應內容，機器人會隨機挑選一個發送。
-   **指令清單**：輸入 `!list` 即可查看所有可用指令，並自動分類為「文字指令」與「圖片/GIF或影片」。
-   **冷卻系統**：防止指令濫用，每個指令預設有 2 秒冷卻時間。
-   **單元測試**：包含完整的測試環境，確保核心判斷邏輯準確無誤。

## 🛠️ 安裝與開發

### 前置作業

-   [Node.js](https://nodejs.org/) (建議 v16.9.0 以上)
-   [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/)

### 安裝步驟

1.  複製專案到本地端。
2.  安裝相依套件：
    ```bash
    npm install
    # 或
    yarn install
    ```
3.  設定環境變數：
    在專案根目錄建立 `.env` 檔案，並加入你的 Discord Bot Token：
    ```env
    BOT_TOKEN=你的_BOT_TOKEN
    ```

### 啟動機器人

-   **正式運行**：
    ```bash
    npm start
    ```
-   **開發模式** (使用 nodemon)：
    ```bash
    npm run dev
    ```

## 🧪 測試

專案使用 [Jest](https://jestjs.io/) 進行單元測試，以確保指令分類邏輯（文字 vs 圖片）運作正確。

執行測試：
```bash
npm test
```

## 📂 檔案結構

-   `index.js`: 機器人主程式，處理訊息監聽與邏輯分發。
-   `commands.js`: 指令配置檔，所有的指令與對應的回覆都在這裡設定。
-   `utils.js`: 工具函式，包含圖片判定邏輯。
-   `utils.test.js`: `utils.js` 的單元測試檔案。
-   `package.json`: 專案相依性與腳本設定。

## 📝 指令設定說明

在 `commands.js` 中，你可以按照以下格式新增指令：

```javascript
module.exports = [
  // 文字指令
  { trigger: "!hello", response: "你好！" },
  
  // 圖片指令
  { trigger: "!pic", response: "https://example.com/image.png" },
  
  // 隨機回覆指令
  { 
    trigger: "!random", 
    response: ["選項一", "選項二", "https://example.com/random_img.jpg"] 
  }
];
```

## 📜 授權

此專案僅供學習與交流使用。
