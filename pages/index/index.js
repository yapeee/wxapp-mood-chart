//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    comfortCount: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // comfort-count add or sub
  changeCount: function(e) {
    let newComfortCount = this.data.comfortCount;
    let type = e.currentTarget.dataset.type;
    if (type === 'add'){
      newComfortCount++;
    }else{
      newComfortCount--;
    }
    this.setData({
      comfortCount: newComfortCount
    })
  },
  // submit the comfortInfo
  formSubmit(e) {
    let time = Date.parse(new Date());
    let info = {
      content: e.detail.value.content || '略',
      count: this.data.comfortCount,
      time: time
    }
    let infoList = getApp().cache.getData('comfortInfo') || [];
    infoList.push(info);
    getApp().cache.setData('comfortInfo', infoList);
    wx.showToast({
      title: '保存成功',
      icon: 'none',
      duration: 2000
    })
    wx.navigateTo({
      url: '../mood-charts/mood-charts',
    })
  }
})
