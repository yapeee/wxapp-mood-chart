// pages/mood-list/mood-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comfortList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      comfortList: getApp().cache.getData('comfortInfo') || []
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
})