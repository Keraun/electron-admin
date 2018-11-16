/* eslint-disable no-console */
const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const url = require('url')

// !提供HMR功能，在Production环境下得删除
// ?是否可以优化
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

require('electron-reload')(__dirname)

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // !这段东西，在发布的时候要注释掉
  installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
    .then(name => console.log(`插件安装成功: ${name}`))
    .catch(err => console.log('An error occurred: ', err))

  // 设置安全策略
  // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  //   callback({
  //     responseHeaders: {
  //       ...details.responseHeaders,
  //       'Content-Security-Policy': ["default-src 'none'"]
  //     }
  //   })
  // })

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    icon: path.join(__dirname, './assets/app-icon/Icon-60.png'),
    center: true
  })

  console.log(__dirname)

  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true,
      transparent: true
    })
  )

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

require('electron-debug')()
