const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,  // Allows Node.js in the renderer process
      contextIsolation: false // Required if using older Electron versions
    }
  });

  // Load your HTML file (adjust path as needed)
  mainWindow.loadFile("logo.html");  // If index.html is in the root folder
  // OR load a full URL (e.g., a local web server)
  // mainWindow.loadURL('http://localhost:3000');
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});