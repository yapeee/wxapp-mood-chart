var setData = (key, data, app) => {
  let that = app || getApp();
  var key1 = that.globalData.key + '.' + key;
  wx.setStorageSync(key1, data);
}

var getData = (key, app) => {
  let that = app || getApp();
  var key1 = that.globalData.key + '.' + key;
  return wx.getStorageSync(key1)
}

var removeKey = (key, app) => {
  let that = app || getApp();
  var key1 = that.globalData.key + '.' + key;
  wx.removeStorageSync(key1)
}
var removeRealKey = (globalData, key) => {
  var key1 = globalData.key + '.' + key;
  wx.removeStorageSync(key1)
}
module.exports.setData = setData;
module.exports.getData = getData;
module.exports.removeKey = removeKey;
module.exports.removeRealKey = removeRealKey;