(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{617:function(t,e,n){"use strict";n.r(e);var o={middleware:["admin-auth"],layout:"admin",name:"logout",beforeCreate:function(){this.$store.dispatch("auth/logout"),this.$router.push("/admin/login?message=logout")}},r=n(7),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("Очищаем данные")])},[],!1,null,"56406ac0",null);e.default=component.exports}}]);