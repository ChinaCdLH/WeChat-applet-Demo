//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[],
    navIndex:0,
    flag:false
  },
  onLoad(){
    this.fetchList()
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   confirmColor:"pink",
    //   success: function(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  },
  swiperChange(event){
    this.setData({
      navIndex:event.detail.current
    })
  },
  fetchList(){
    var _this = this;
    wx.request({
      url: app.globalData.globalurl + '/api/list',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        _this.setData({
          list:res.data.data
        });
        // wx.setStorage({
        //   key: 'list',
        //   data: res.data.data
        // })
      }
    })
  },
  handleChange(event){
    this.setData({
      navIndex:event.target.dataset.index
    })
  },
  topChange(){
    var _this = this
    wx.request({
      url:app.globalData.globalurl + '/api/list',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
          _this.setData({
            list:_this.data.list.concat(res.data.data)
          }) 
        }
    })
  },
  bottomChange(){
    var _this = this
      wx.request({
            url:app.globalData.globalurl + '/api/list',
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
                _this.setData({
                  list:_this.data.list.concat(res.data.data)
        }) 
      }
    })
  }
})
