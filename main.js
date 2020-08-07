const electron = require('electron')
// 用來hot reload
require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
})
// 用來控制App生命週期
const app = electron.app
// 用來創造原生瀏覽器畫面
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// 建立一個全域變數給視窗物件, 否則在JavaScript垃圾回收機制後視窗將自動關閉
let mainWindow

function createWindow() {    
    // 建立瀏覽器視窗
    mainWindow = new BrowserWindow({width: 800, height: 600})
    
    // 載入App的index.html
    mainWindow.loadURL(
        url.format(
            {
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
            }
        )
    )

    // mainWindow.loadFile('index.html')

    // 開啟開發工具
    mainWindow.webContents.openDevTools()

    // 當視窗關閉時執行
    mainWindow.on('closed', function () {
        // 將視窗物件淨空,通常會視窗物件存放內容為陣列
        // 因此若想將對應的視窗刪除只需要刪除對應陣列元素
        mainWindow = null
    })

}

// 當Electron初始化並且準備好創建視窗物件
// 則呼叫以下APIs
app.on('ready', createWindow)

// 當所有視窗被關閉時App關閉
app.on('window-all-closed', function () {
        // darwin 為蘋果操作系統        
        if (process.platform !== 'darwin') app.quit()        
})

app.on('activate', function () {
    // 在OS X 當按下dock icon時會重新創造頁面
    if (mainWindow === null){
        createWindow()
    }
})

// 我們可以把App的主要程序寫在這個檔案內
// 也可以將其分散到各個檔案再require進來

