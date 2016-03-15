const electron = require('electron')
const app = electron.app;
const BrowserWindow = require('electron').BrowserWindow;

app.on('window-all-closed', function() {
  app.quit();
});

mainWindow = null;

app.on('ready', function() {
  mainWindow = new BrowserWindow({ 
	width: 1024, 
	height: 768, 
	center: true, 
	frame: false
 })

  // mainWindow.loadURL('file://' + __dirname + '/browser.html');
  mainWindow.loadURL('https://google.com/');
});
