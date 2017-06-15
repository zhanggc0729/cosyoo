//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    topBalance:'月预算余额',
    month:'',
    balance:5000.00,
    shadeStyle:"shade hide",
    dateValue:"",
    inBalance:"00.0",
    outBalance: "0.0",
    balanceTemp:-1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  editBalanceView:function(){
   this.setData({
     shadeStyle: "shade show"
   });
  },
  closePop:function(){
    this.setData({
      shadeStyle: "shade hide"
    });
  },
  datePickerBindchange:function(e){
    this.setData({
      dateValue: e.detail.value,
    });
  },
  finishEdit:function(){
    this.setData({
      shadeStyle: "shade hide"
    });
    console.log("修改后的余额balance：" + this.data.balance);
    console.log("修改后的余额balanceTemp：" + this.data.balanceTemp);
    if (this.data.balanceTemp!=-1){
    
      this.setData({
        balance:this.data.balanceTemp
      })
    }
    console.log("修改后的余额：" +this.data.balance );
  },
  inputBlurEvent: function(e){
    console.log("修改临时余额为 :" + e.detail.value);
    this.data.balanceTemp = e.detail.value;
    
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    if (month<10){
      month = "0" + month;
    }
   console.log(year +month)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        month: (date.getMonth() + 1),
        dateValue: year + "-" + month
      })
    
    
     
    })
  }
})
