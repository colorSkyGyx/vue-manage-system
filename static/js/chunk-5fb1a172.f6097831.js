(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb1a172"],{1340:function(t,e,o){"use strict";var s=o("7752"),r=o.n(s);r.a},"61f7":function(t,e,o){"use strict";function s(t){var e=/(?:0|86|\+86)?1[3456789]\d{9}/;return e.test(t)}o.d(e,"a",(function(){return s}))},"73ce":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",[o("i",{staticClass:"el-icon-lx-calendar"}),t._v(" 平台管理\n      ")]),o("el-breadcrumb-item",[t._v("平台公告")])],1)],1),o("div",{staticClass:"container"},[o("el-tabs",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}},[o("el-tab-pane",{attrs:{label:"商城公告",name:"first"}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("商城公告")])]),o("el-form",{ref:"shopNotice",attrs:{"status-icon":"",model:t.shopNoticeForm}},[o("el-form-item",[o("el-input",{attrs:{type:"textarea",placeholder:"请输入商城公告"},model:{value:t.shopNoticeForm.shopNotice,callback:function(e){t.$set(t.shopNoticeForm,"shopNotice",e)},expression:"shopNoticeForm.shopNotice"}})],1),o("el-form-item",{staticClass:"btns"},[o("el-button",{on:{click:function(e){return t.resetForm("shopNotice")}}},[t._v("重置")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")])],1)],1)],1)],1),o("el-tab-pane",{attrs:{label:"店铺公告",name:"second"}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("店铺公告")])]),o("el-form",{ref:"shopNotice",attrs:{"status-icon":"",model:t.shopNoticeForm}},[o("el-form-item",[o("el-input",{attrs:{type:"textarea",placeholder:"请输入商城公告"},model:{value:t.shopNoticeForm.shopNotice,callback:function(e){t.$set(t.shopNoticeForm,"shopNotice",e)},expression:"shopNoticeForm.shopNotice"}})],1),o("el-form-item",{staticClass:"btns"},[o("el-button",{on:{click:function(e){return t.resetForm("shopNotice")}}},[t._v("重置")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")])],1)],1)],1)],1),o("el-tab-pane",{attrs:{label:"推广者公告",name:"third"}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("推广者公告")])]),o("el-form",{ref:"shopNotice",attrs:{"status-icon":"",model:t.shopNoticeForm}},[o("el-form-item",[o("el-input",{attrs:{type:"textarea",placeholder:"请输入推广者公告"},model:{value:t.shopNoticeForm.shopNotice,callback:function(e){t.$set(t.shopNoticeForm,"shopNotice",e)},expression:"shopNoticeForm.shopNotice"}})],1),o("el-form-item",{staticClass:"btns"},[o("el-button",{on:{click:function(e){return t.resetForm("shopNotice")}}},[t._v("重置")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")])],1)],1)],1)],1),o("el-tab-pane",{attrs:{label:"客服电话",name:"fourth"}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("客服电话")])]),o("el-form",{ref:"shopNotice",attrs:{"status-icon":"",model:t.shopNoticeForm}},[o("el-form-item",[o("el-input",{attrs:{type:"number",placeholder:"请输入客服电话"},model:{value:t.shopNoticeForm.tel,callback:function(e){t.$set(t.shopNoticeForm,"tel",e)},expression:"shopNoticeForm.tel"}})],1),o("el-form-item",{staticClass:"btns"},[o("el-button",{on:{click:function(e){return t.resetForm("shopNotice")}}},[t._v("重置")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm()}}},[t._v("提交")])],1)],1)],1)],1)],1)],1)])},r=[],a=(o("61f7"),{name:"tabs",data:function(){return{message:"first",shopNoticeForm:{shopNotice:"",tel:""}}},methods:{submitForm:function(t){this.$msg.success("提交成功")},resetForm:function(t){console.log(t),this.$refs[t].resetFields()}},computed:{}}),i=a,c=(o("1340"),o("4023")),l=Object(c["a"])(i,s,r,!1,null,"29eec3d2",null);e["default"]=l.exports},7752:function(t,e,o){}}]);