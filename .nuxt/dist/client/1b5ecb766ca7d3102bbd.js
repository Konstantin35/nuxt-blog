(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{615:function(t,e,n){"use strict";n.r(e);n(29);var r=n(3),o={middleware:["admin-auth"],layout:"admin",name:"list",head:{title:"Все посты | ".concat("SSR Blog")},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,t.next=3,n.dispatch("post/fetchAdminPosts");case 3:return r=t.sent,t.abrupt("return",{posts:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),methods:{open:function(t){this.$router.push("/admin/post/".concat(t))},remove:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm("Вы действительно хотите удалить пост?","Внимание!",{type:"warning",confirmButtonText:"Да",cancelButtonText:"Отмена"});case 3:return t.next=5,this.$store.dispatch("post/remove",e);case 5:this.posts=this.posts.filter(function(t){return t._id!==e}),console.log("this.posts",this.posts),this.$message({type:"success",message:"Пост успешно удален"}),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}},c=n(7),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-list"},[n("h1",{staticClass:"mb2"},[t._v("Посты")]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.posts}},[n("el-table-column",{attrs:{label:"Название поста"},scopedSlots:t._u([{key:"default",fn:function(e){var title=e.row.title;return[n("span",[t._v(t._s(title))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Дата"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row.date;return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(t._f("date")(r,"date")))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Просмотры"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row.views;return[n("i",{staticClass:"el-icon-view"}),t._v(" "),n("span",[t._v(t._s(r))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Комментарии"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row.comments;return[n("i",{staticClass:"el-icon-message"}),t._v(" "),n("span",[t._v(t._s(r.length))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Действия"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[n("el-tooltip",{attrs:{effect:"dark",content:"Открыть пост",placement:"top"}},[n("el-button",{attrs:{icon:"el-icon-edit",type:"primary",circle:""},on:{click:function(e){return t.open(r._id)}}})],1),t._v(" "),n("el-tooltip",{attrs:{effect:"dark",content:"Удалить пост",placement:"top"}},[n("el-button",{attrs:{icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(e){return t.remove(r._id)}}})],1)]}}])})],1)],1)},[],!1,null,"fa4a5880",null);e.default=component.exports}}]);