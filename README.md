<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1mzky9ZguJXkEqjB3JLdJsmxwzzZJgBnK

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## 部署到 GitHub Pages（推薦）

此專案使用 Vite。已在 `vite.config.ts` 設定 `base: './'`，可同時支援 GitHub Pages 的「使用者頁」與「專案頁」路徑。

1. 安裝依賴
   `npm install`
2. 產出靜態檔
   `npm run build`
3. 部署到 `gh-pages` 分支
   `npm run deploy`
4. 到 GitHub 專案設定開啟 Pages
   - Settings → Pages
   - Source 選擇 `Deploy from a branch`
   - Branch 選擇 `gh-pages` / `(root)`

完成後，GitHub Pages 會用 `dist/` 產出的靜態檔提供網站服務。
