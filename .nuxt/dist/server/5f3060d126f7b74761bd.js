exports.ids=[3],exports.modules={132:function(t,e,o){"use strict";o.r(e);var n={middleware:["admin-auth"],layout:"admin",name:"list",head:{title:"Все посты | SSR Blog"},asyncData:async({store:t})=>({posts:await t.dispatch("post/fetchAdminPosts")}),methods:{open(t){this.$router.push(`/admin/post/${t}`)},async remove(t){try{await this.$confirm("Вы действительно хотите удалить пост?","Внимание!",{type:"warning",confirmButtonText:"Да",cancelButtonText:"Отмена"}),await this.$store.dispatch("post/remove",t),this.posts=this.posts.filter(e=>e._id!==t),console.log("this.posts",this.posts),this.$message({type:"success",message:"Пост успешно удален"})}catch(t){}}}},l=o(1);var component=Object(l.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"admin-list"},[t._ssrNode('<h1 class="mb2" data-v-fa4a5880>Посты</h1> '),o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.posts}},[o("el-table-column",{attrs:{label:"Название поста"},scopedSlots:t._u([{key:"default",fn:function(e){var title=e.row.title;return[o("span",[t._v(t._s(title))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"Дата"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row.date;return[o("i",{staticClass:"el-icon-time"}),t._v(" "),o("span",[t._v(t._s(t._f("date")(n,"date")))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"Просмотры"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row.views;return[o("i",{staticClass:"el-icon-view"}),t._v(" "),o("span",[t._v(t._s(n))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"Комментарии"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row.comments;return[o("i",{staticClass:"el-icon-message"}),t._v(" "),o("span",[t._v(t._s(n.length))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"Действия"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[o("el-tooltip",{attrs:{effect:"dark",content:"Открыть пост",placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-edit",type:"primary",circle:""},on:{click:function(e){return t.open(n._id)}}})],1),t._v(" "),o("el-tooltip",{attrs:{effect:"dark",content:"Удалить пост",placement:"top"}},[o("el-button",{attrs:{icon:"el-icon-delete",type:"danger",circle:""},on:{click:function(e){return t.remove(n._id)}}})],1)]}}])})],1)],2)},[],!1,function(t){},"fa4a5880","d8236fbc");e.default=component.exports}};
//# sourceMappingURL=5f3060d126f7b74761bd.js.map