//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // 调用登录接口
      // wx.login({
      //   success: function (res) {
      //     if (res.code) {
      //       //发起网络请求
      //       wx.request({
      //         url: 'https://api.xwta.net/Login/up',
      //         data: {
      //           code: res.code
      //         }
      //       })
      //     }
      //     wx.getUserInfo({
      //       success: function (res) {
      //         that.globalData.userInfo = res.userInfo
      //         typeof cb == "function" && cb(that.globalData.userInfo)
      //       }
      //     })
      //   }
      // })
    }
  },
  globalData: {
    userInfo: null,
    serverUrl: "https://dwto.99meiti.com"
  }
})