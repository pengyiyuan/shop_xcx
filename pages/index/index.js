import {
  request
} from "../../request/request.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getSwiperData();
  },

  // 获取轮播图数据
  getSwiperData(){
    request({
      url: '/temp/index/getSwiperData'
    })
    .then(result => {
      this.setData({
        swiperList: result.data.data
      })
    })
  },


  
})