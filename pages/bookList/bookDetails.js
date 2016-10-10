var app = getApp();
Page({
  onLoad: function(options) {
    this.setData({
      title: options.title,
      id:options.id,
      bookDetails:app.getOneBook(options.id)
    })
  }
})