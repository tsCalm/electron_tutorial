const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

/**
 *  어플리케이션을 종료시켜도 서버는 계속 작동하게 하는 명령
 *  해당 명령이 없다면 close 버튼 클릭 시 서버도 같이 작동을 멈춘다.
 */

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
