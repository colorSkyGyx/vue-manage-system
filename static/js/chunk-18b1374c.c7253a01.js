(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b1374c"],{"61f7":function(e,t,a){"use strict";function s(e){var t=/(?:0|86|\+86)?1[3456789]\d{9}/;return t.test(e)}a.d(t,"a",(function(){return s}))},d15b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-lx-calendar"}),e._v(" 商家管理 ")]),a("el-breadcrumb-item",[e._v("商家详情")])],1)],1),a("div",{staticClass:"container"},[a("el-card",{staticClass:"box-card store-info",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-s-shop stroe-icon"}),a("span",[e._v(e._s(e.storeName))])]),a("div",{staticClass:"info"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item"},[a("span",[e._v("所属行业：")]),a("span",[e._v("教育")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item"},[a("span",[e._v("联系人：")]),a("span",[e._v("谈迎峰")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item"},[a("span",[e._v("联系电话：")]),a("span",[e._v("12345678932")])])]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"item"},[a("span",[e._v("邮箱地址：")]),a("span",[e._v("12345678@163.com")])])]),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"item"},[a("span",[e._v("备注：")]),a("span",[e._v("备注备注备注备注备注备注")])])])],1)],1)]),a("div",{staticClass:"record-list"},[a("div",{staticClass:"handle-box"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("p",[e._v("商品列表")])]),a("el-col",{staticClass:"search",attrs:{span:16}},[a("el-form",{ref:"searchForm",attrs:{model:e.query,rules:e.rules}},[a("el-form-item",{attrs:{prop:"name"}},[a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"请输入商品名称"},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name",t)},expression:"query.name"}})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.handleSearch("searchForm")}}},[e._v("搜索")])],1)],1)],1)],1),a("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:"","header-cell-class-name":"table-header"}},[a("el-table-column",{attrs:{prop:"id",label:"序号",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.goodName)+"\n          ")]}}])}),a("el-table-column",{attrs:{label:"所属店铺",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.store))]}}])}),a("el-table-column",{attrs:{prop:"type",label:"商品分类",align:"center"}}),a("el-table-column",{attrs:{label:"价格",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.price))]}}])}),a("el-table-column",{attrs:{label:"售出",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.Sold))]}}])}),a("el-table-column",{attrs:{label:"剩余库存",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.surplus))]}}])}),a("el-table-column",{attrs:{label:"上架时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.PutTime))]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next","current-page":e.query.pageIndex,"page-size":e.query.pageSize,total:e.pageTotal},on:{"current-change":e.handlePageChange}})],1)],1)],1)])},l=[],r=(a("f548"),a("365c")),n=a("61f7"),i={name:"tabs",data:function(){var e=function(e,t,a){t&&(Object(n["a"])(t)?a():a(new Error("请输入正确的手机号码格式")))};return{storeName:"",query:{tel:"",name:"",pageIndex:1,pageSize:10},tableData:[],multipleSelection:[],delList:[],editVisible:!1,pageTotal:0,form:{},idx:-1,id:-1,rules:{tel:[{validator:e,required:!1,trigger:"blur"}]}}},mounted:function(){this.getData(),this.storeName=this.$route.query.store,console.log(this.$route.query.store)},methods:{phoneChange:function(){this.query.tel=this.query.tel.replace(/[^\d]/g,""),this.query.tel.length>11&&(this.query.tel=this.query.tel.substr(0,11));var e=/^1[3456789]\d{9}$/;this.query.tel.length>=11&&!e.test(this.query.tel)&&alert("请输入正确的手机号码格式")},getData:function(){var e=this;Object(r["a"])(this.query).then((function(t){e.tableData=t.data04.list,e.pageTotal=t.data04.pageTotal}))},handleSearch:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.$set(t.query,"pageIndex",1),t.getData()}))},pass:function(e){this.$msg.success(e)},handlePageChange:function(e){this.$set(this.query,"pageIndex",e),this.getData()}}},o=i,c=(a("efe5"),a("4023")),u=Object(c["a"])(o,s,l,!1,null,"051c9cec",null);t["default"]=u.exports},e4330:function(e,t,a){},efe5:function(e,t,a){"use strict";var s=a("e4330"),l=a.n(s);l.a}}]);