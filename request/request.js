export const request = (params) => {
  return new Promise((resolve, reject) => {
    const baseUrl = "http://192.168.31.2:8000";
    wx.request({
      ...params,
      url: baseUrl + params.url, 
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}