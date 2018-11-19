/* eslint-disable no-console */
const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const url = require('url')

const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log)
}

require('electron-debug')()

// 主window, 必须是全局的
let mainWindow = null

async function createWindow() {
  // 加载tools
  if (process.env.NODE_ENV === 'development') {
    await installExtensions()
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    icon: path.join(__dirname, './assets/app-icon/Icon-60.png'),
    center: true
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true,
      transparent: true
    })
  )

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
