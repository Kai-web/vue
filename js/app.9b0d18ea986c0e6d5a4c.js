webpackJsonp([1],{"8/w4":function(t,o){},Jbp7:function(t,o){},NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s("7+uW"),a={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]};var d=s("VU/8")({name:"App"},a,!1,function(t){s("8/w4")},null,null).exports,i=s("/ocq"),n={name:"Slider",data:function(){return{msg:"Vue+ElementUI 点菜应用",tableData:[],totalCount:0,totalMoney:0,oftenGoods:[{goodsId:2,foodsName:"香辣鸡腿堡",price:15},{goodsId:3,foodsName:"原味鸡腿堡",price:15},{goodsId:4,foodsName:"奥尔良鸡腿堡",price:18},{goodsId:5,foodsName:"可口可乐",price:10},{goodsId:6,foodsName:"雪碧柠檬味",price:20},{goodsId:7,foodsName:"芬达橙味汽水",price:10},{goodsId:8,foodsName:"经典炸薯条",price:18},{goodsId:9,foodsName:"比利时炸薯条",price:15},{goodsId:10,foodsName:"番茄奶酪薯条",price:17}],foods_type:[{goodsId:11,goodsImg:"https://img14.360buyimg.com/n0/jfs/t1/101776/21/16819/138244/5e8003bcEf2be4def/423b124c0e641e88.jpg",foodsName:"香辣鸡腿堡",price:18},{goodsId:12,goodsImg:"https://img14.360buyimg.com/n0/jfs/t1/87292/16/4555/355931/5de759a7Ecba923b9/844542c22995a105.jpg",foodsName:"原味鸡腿堡",price:15},{goodsId:13,goodsImg:"https://img14.360buyimg.com/n0/jfs/t18643/146/2407861968/202851/2bf4579b/5af53b1eNf714372c.jpg",foodsName:"奥尔良鸡腿堡",price:15}],foods_type1:[{goodsId:16,goodsImg:"https://img14.360buyimg.com/n0/jfs/t8302/147/1031208510/386450/47ce1a27/59b2c42fNed4d2ece.jpg",foodsName:"可口可乐",price:20},{goodsId:13,goodsImg:"https://img14.360buyimg.com/n0/jfs/t7777/262/2671675393/386949/80125863/59b2c3fdNd2f9abf9.jpg",foodsName:"雪碧柠檬味",price:15},{goodsId:13,goodsImg:"https://img14.360buyimg.com/n0/jfs/t7864/216/2712097427/400568/db980658/59b2c40bN7e761cd8.jpg",foodsName:"芬达橙味汽水",price:15}],foods_type2:[{goodsId:16,goodsImg:"https://img14.360buyimg.com/n0/jfs/t1/58149/20/13822/456340/5da919c4Eb954fd95/c53a0a1e7d93e71f.jpg",foodsName:"经典炸薯条",price:20},{goodsId:13,goodsImg:"https://img14.360buyimg.com/n0/jfs/t1/92203/22/15154/383100/5e707d4aEfa8137ea/01d8232edc1488da.jpg",foodsName:"比利时炸薯条",price:15},{goodsId:13,goodsImg:"https://img14.360buyimg.com/n0/jfs/t1/61396/11/13178/461164/5da91f14E7d2f6e16/446672fded45a1a9.jpg",foodsName:"番茄奶酪薯条",price:15}],foods_type3:[{goodsId:17,goodsImg:"http://www.laio8.com/static/index/uploads/img/20180509/a4f76f8cf7783f8c9415d8f1eff8b671.png",foodsName:"珍珠奶茶",price:10},{goodsId:18,goodsImg:"http://www.laio8.com/static/index/uploads/img/20180509/35375ceb4dd0cf413a91afe0b9784165.png",foodsName:"金桔柠檬汁",price:18},{goodsId:19,goodsImg:"http://www.laio8.com/static/index/uploads/img/20180509/cbeb2e5bd2fe6b06068db146149c71f9.png",foodsName:"红豆巧克力",price:15}]}},methods:{deleteRow:function(t){console.log(t.goods)},addRow:function(t){console.log(t.goods)},addOrderList:function(t){for(var o=!1,s=0;s<this.tableData.length;s++)if(this.tableData[s].goodsId===t.goodsId){o=!0;break}if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var e={goodsId:t.goodsId,foodsName:t.foodsName,price:t.price,count:1};this.tableData.push(e)}this.getAllMoney()},delGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId})},emptyShopCar:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})},payMoney:function(){var t=this;this.$confirm("商品数量："+this.totalCount+"，\n         总价："+this.totalMoney+"， 是否支付？","提交订单",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){t.$message({type:"success",message:"支付成功!"})}).catch(function(){t.$message({type:"info",message:"已取消支付"})}),this.tableData=[],this.totalCount=0,this.totalMoney=0}}},c={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("el-row",[s("el-col",{attrs:{span:7}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{attrs:{data:t.tableData}},[s("el-table-column",{attrs:{prop:"foodsName",label:"商品"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"数量"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.delGoods(o.row)}}},[t._v("移除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("外卖")]),t._v(" "),s("el-tab-pane",{attrs:{label:"自取"}},[t._v("自取")])],1),t._v(" "),s("div",{staticClass:"calculation"},[s("label",[t._v("数量："+t._s(t.totalCount))]),t._v(" "),s("span",[t._v("金额："+t._s(t.totalMoney))])]),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.emptyShopCar}},[t._v("清空")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:t.payMoney}},[t._v("结算")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"daily-goods"},[s("div",{staticClass:"title"},[t._v("日常商品")])]),t._v(" "),s("div",{staticClass:"daily-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{on:{click:function(s){return t.addOrderList(o)}}},[s("span",[t._v(t._s(o.foodsName))]),t._v(" "),s("span",[t._v(t._s(o.price)+"元")])])}),0)]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("ul",{staticClass:"cookList"},t._l(t.foods_type,function(o){return s("li",{on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.foodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},t._l(t.foods_type1,function(o){return s("li",{on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.foodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)]),t._v(" "),s("el-tab-pane",{attrs:{label:"薯条"}},[s("ul",{staticClass:"cookList"},t._l(t.foods_type2,function(o){return s("li",{on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.foodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)]),t._v(" "),s("el-tab-pane",{attrs:{label:"奶茶"}},[s("ul",{staticClass:"cookList"},t._l(t.foods_type3,function(o){return s("li",{on:{click:function(s){return t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.foodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}),0)])],1)],1)])],1)],1)},staticRenderFns:[]};var l=s("VU/8")(n,c,!1,function(t){s("Jbp7")},"data-v-679eadbb",null).exports;e.default.use(i.a);var r=new i.a({routes:[{path:"/",name:"pos",component:l}]}),f=s("zL8q"),p=s.n(f);s("tvR6");e.default.use(p.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:r,components:{App:d},template:"<App/>"})},tvR6:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.9b0d18ea986c0e6d5a4c.js.map