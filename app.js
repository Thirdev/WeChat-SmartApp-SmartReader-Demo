//app.js
App( {
    getBanner:function(){
        var bannerUrl=["../images/banner.jpg"];
        return bannerUrl;
    },
    getOneBook:function(id){
        var abook;
      var books =  [
                    {   id:"1",
                        bookUrl:"../images/img1.jpg",
                        bookName:"西方哲学史",
                        bookInfor:"关于哲学"
                    },
                    {   
                        id:"2",
                        bookUrl:"../images/tmd.jpg",
                        bookName:"塔木德",
                        bookInfor:"关于信仰"                        
                    },
                    {
                        id:"3",
                        bookUrl:"../images/holy.jpg",
                        bookName:"圣经",
                        bookInfor:"关于信仰"   
                    },
                    {
                        id:"4",
                        bookUrl:"../images/yuz.jpg",
                        bookName:"果壳中的宇宙",
                        bookInfor:"关于科学"
                    },
                    {
                        id:"5",
                        bookUrl:"../images/dream.jpg",
                        bookName:"理想国",
                        bookInfor:"关于哲学"
                    },
                    {
                        id:"6",
                        bookUrl:"../images/out.jpg",
                        bookName:"失控",
                        bookInfor:"关于经济"
                    }
                    ];
                for(i=0;i<books.length;i++){
                    if(books[i].id == id){
                        abook = books[i];  
                    }
                }
                 return abook;
  },
    getBoookList:function(){
        var indexList = [
                    {   id:"1",
                        bookUrl:"../images/img1.jpg",
                        bookName:"西方哲学史",
                        bookInfor:"关于哲学"
                    },
                    {   
                        id:"2",
                        bookUrl:"../images/tmd.jpg",
                        bookName:"塔木德",
                        bookInfor:"关于信仰"                        
                    },
                    {
                        id:"3",
                        bookUrl:"../images/holy.jpg",
                        bookName:"圣经",
                        bookInfor:"关于信仰"   
                    },
                    {
                        id:"4",
                        bookUrl:"../images/yuz.jpg",
                        bookName:"果壳中的宇宙",
                        bookInfor:"关于科学"
                    },
                    {
                        id:"5",
                        bookUrl:"../images/dream.jpg",
                        bookName:"理想国",
                        bookInfor:"关于哲学"
                    },
                    {
                        id:"6",
                        bookUrl:"../images/out.jpg",
                        bookName:"失控",
                        bookInfor:"关于经济"
                    }
                    ];

                     return indexList;
                }

               
})
