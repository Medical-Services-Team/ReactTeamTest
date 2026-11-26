# ⚛️ ReactTeamTest：Git 與 React 的團隊練習場

> 為完全沒寫過 Git 和 React 的組員準備的練習專案：每個人有自己的頁面可以動手改，練習開分支、發 PR、合併，再一起進入正式專案。

| 類型 | 期間 | 正式專案 |
|---|---|---|
| 醫療好評網團隊的內部練習 | 2022 年 9 月 | [醫療好評網 BoostrapTest](https://github.com/Medical-Services-Team/BoostrapTest) |

## 🎯 這是什麼

一個用 Create React App 建立的小網站。首頁上方有導覽列，每位組員各有一個頁面（例如 `/Yun`、`/Worker1`），在自己的頁面裡練習用 MUI 元件排版，不會互相干擾。

## 💡 為什麼做

醫療好評網的組員多數沒有寫過程式。與其直接在正式專案上邊做邊學，先在這裡把「拉下專案 → 開分支 → 改自己的頁面 → 發 PR → 合併」走過一遍，熟悉流程後再開始正式開發。

## 🕹️ 怎麼練習

1. 把專案 clone 到自己的電腦，執行 `npm install`、`npm start`，打開 http://localhost:3000 。
2. 從 `main` 開一個自己的分支，例如 `yun20220923`。
3. 在 `src/` 裡新增自己的資料夾與頁面，並在 `App.js` 加上路由、`AppMenu.js` 加上按鈕。
4. commit 並 push 分支，在 GitHub 發 Pull Request，由組長確認後合併。

需要安裝套件時，先關掉正在執行的終端機，再執行 `npm install 套件名稱`。

## 🛠️ 怎麼實作

| 項目 | 技術 |
|---|---|
| 專案骨架 | Create React App |
| 頁面切換 | React Router（`App.js`） |
| 導覽列與卡片元件 | MUI（`AppMenu.js`、各組員頁面） |
| 圖示 | [Iconify](https://iconify.design/) |

**命名規範**

1. 資料夾：小寫駝峰
2. Component 檔案：大寫駝峰
3. Function JS 檔：小寫駝峰
4. Router Path：小寫駝峰

`圖檔/` 資料夾放的是醫療好評網「我的任務」頁的 UI 素材。

## 🔗 相關專案

- [醫療好評網 BoostrapTest](https://github.com/Medical-Services-Team/BoostrapTest)：練習後實際開發的網站原型
