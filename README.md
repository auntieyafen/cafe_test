# Crypto-Arsenal Front-end Intern Test

### Next.js

建立一個頁面 `/count`，並實作以下功能：
![](./nextjs.gif)

1. 點擊 +5 後，數字會以 500 ms 的間隔逐漸增加到目標數字。
2. 增加過程中點擊 +5 會持續提高目標數字（當原數字為 0，連續點擊兩次後，將在 2.5 秒時達到 5，5 秒時達到 10）

### TailwindCSS

![Alt text](image.png)

### Storybook

對 TailwindCSS 需求中實現的元件建立一個 Story File，並確認其在 Storybook 中可以正常顯示。

1. 目前環境設置是 `app/**/*.stories.tsx` 視為 Story File。

### Playwright

run `npx playwright test`