(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports={items:"detail_items__2nyHz",img:"detail_img__nUz6F",container:"detail_container__34pb0",name:"detail_name__2J9Kr",detail:"detail_detail__1gA3J",linkVolver:"detail_linkVolver__2ynJ1",titAct:"detail_titAct__269Mf",loadingDiv:"detail_loadingDiv__6Kuy9",loadingp:"detail_loadingp__26BQk",spinner:"detail_spinner__2X3oL",spin:"detail_spin__2qY1b",actcontainer:"detail_actcontainer__1gWlS",dontact:"detail_dontact__iskgk"}},15:function(e,t,n){e.exports={containerNav:"search_containerNav__1uSTg",input:"search_input__21OgS",inputButton:"search_inputButton__xG7KK",form:"search_form__3af_z",links:"search_links__25JaR",link:"search_link__3zHfh",linkhome:"search_linkhome__2i_kT"}},16:function(e,t,n){e.exports={activityListContainer:"activity_activityListContainer__3Y2_4",list:"activity_list__zXbnq",title:"activity_title__3JqkX",p:"activity_p__2RjjL"}},17:function(e,t,n){e.exports={containerFilters:"filters_containerFilters__by4XF",btnClear:"filters_btnClear__2Prw-",filterAndOrder:"filters_filterAndOrder__sWxFf",title:"filters_title__120os"}},19:function(e,t,n){e.exports={grid:"Home_grid__l3OPw",link:"Home_link__3Iiwb",container:"Home_container__3LNmG",loadingDiv:"Home_loadingDiv__2ldgI",loadingp:"Home_loadingp__1Yo2G",spinner:"Home_spinner__2CLBM",spin:"Home_spin__2HCo_"}},22:function(e,t,n){e.exports={img:"card_img__KJdh1",container:"card_container__2VUOy",name:"card_name__3ldU-",parrafos:"card_parrafos__1tuwT",all:"card_all__3pcgM"}},32:function(e,t,n){e.exports={container:"LandingPage_container__yJ8cX",world:"LandingPage_world__S9LSP",moverDerecha:"LandingPage_moverDerecha__3luk6",linkHome:"LandingPage_linkHome__3eM7D",btnHome:"LandingPage_btnHome__2xSC5",moverArriba:"LandingPage_moverArriba__3b0WW"}},40:function(e,t,n){e.exports={paginadoContainer:"Paginado_paginadoContainer__17Y_v",ul:"Paginado_ul__3w99Z"}},8:function(e,t,n){e.exports={container:"activityCreate_container__2uH7u",containerform:"activityCreate_containerform__8s3Se",btnDelete:"activityCreate_btnDelete__LAJe6",imgBack:"activityCreate_imgBack__23AvG",inputTextarea:"activityCreate_inputTextarea__Yl7Ii",form:"activityCreate_form__31eYR",input:"activityCreate_input__28ENf",btn__submit:"activityCreate_btn__submit__LZJAs",title:"activityCreate_title__28QBF",select:"activityCreate_select__11G0e",textArea:"activityCreate_textArea__1K652",radio:"activityCreate_radio__3_MQf",label:"activityCreate_label__31-jm"}},92:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(30),r=n.n(c),s=n(7),o=n(32),l=n.n(o),u=n(0);function j(){return Object(u.jsx)("div",{className:l.a.container,children:Object(u.jsx)("div",{className:l.a.world,children:Object(u.jsx)(s.b,{className:l.a.linkHome,to:"/home",children:Object(u.jsx)("h1",{children:"Countries"})})})})}var d=n(14),b=n(19),O=n.n(b),h=n(15),_=n.n(h),p=n(5),m=n(27),f=n(38),x=n(25),v=n.n(x),g="GET_COUNTRIES",y="SEARCH_COUNTRIES",N="SEARCH_COUNTRIES_DETAIL",C="ORDER_CONTINENT",A=" ORDER_BY_NAME",E="ORDER_BY_POPULATION",S=" ORDER_BY_ACTIVITIES",k="POST_ACTIVITIES",T="GET_ACTIVITIES",D="CLEAR_DETAIL",F="CLEAR_FILTERS";function L(){return function(e){fetch("/countries").then((function(e){return e.json()})).then((function(t){console.log(t),e({type:g,payload:t})}))}}function P(){return function(e){fetch("/activities").then((function(e){return e.json()})).then((function(t){e({type:T,payload:t})}))}}var I=n(55),R=n(26),w=n(2),H=n(4),B=n(8),M=n.n(B);n(16);var J=n(39),W=n.n(J),X=n.p+"static/media/volver.12a9f4aa.png";function Y(){Object(H.f)();var e=Object(p.c)((function(e){return e.countries})),t=Object(p.c)((function(e){return e.activities})),n=Object(a.useState)({name:"",duration:"",difficulty:"",season:"",idCountry:[]}),i=Object(d.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(""),l=Object(d.a)(o,2),j=l[0],b=l[1];e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));var O=Object(p.b)();function h(e){r(Object(w.a)(Object(w.a)({},c),{},Object(R.a)({},e.target.name,e.target.value))),b(function(e){var n={};return e.name.length>0&&t.filter((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})).length>0&&(n.name="The activity already exists"),e.name.length||(n.name="name is required"),e.duration.length||(n.duration="duration is required"),(e.duration<1||e.duration>24)&&(n.duration="duration must be greater than 1 and less than 24"),e.difficulty.length||(n.difficulty="difficulty is required"),e.season.length||(n.season="season is required"),0==e.idCountry.length&&(n.idCountry="country is required"),n}(Object(w.a)(Object(w.a)({},c),{},Object(R.a)({},e.target.name,e.target.value))))}return Object(a.useEffect)((function(){O(L()),O(P())}),[c]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:M.a.containerform,children:[Object(u.jsx)(s.b,{to:"/home",children:Object(u.jsx)("img",{className:M.a.imgBack,src:X,alt:"back"})}),Object(u.jsxs)("div",{className:M.a.container,children:[Object(u.jsx)("h2",{className:M.a.title,children:" Create Activity "}),Object(u.jsxs)("form",{className:M.a.form,onSubmit:function(e){var n;e.preventDefault(),""===c.name||""===c.duration||""===c.difficulty||""===c.season||""===c.idCountry.length?W()({title:"\xa1Error!",text:"You must complete all fields",icon:"error",button:"OK"}):(O((n=c,function(){var e=Object(f.a)(Object(m.a)().mark((function e(t){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/activities",n);case 2:return e.abrupt("return",t({type:k}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),W()({title:"\xa1Activity created successfully!",text:"",icon:"success",button:"OK"}),r({name:"",duration:"",difficulty:"",season:"",idCountry:[]})),console.log(t)},children:[Object(u.jsx)("input",{className:M.a.input,name:"name",type:"text",placeholder:"Name activity..",value:c.name,onChange:h}),j.name&&Object(u.jsx)("p",{style:{color:"orange",fontWeight:"bold"},children:j.name}),Object(u.jsx)("input",{className:M.a.input,name:"duration",type:"number",min:"1",pattern:"^[0-9]+",placeholder:"Duration in hours..",value:c.duration,onChange:h}),j.duration&&Object(u.jsx)("p",{style:{color:"orange",fontWeight:"bold"},children:j.duration}),Object(u.jsx)("label",{className:M.a.label,children:"Difficulty:"}),Object(u.jsx)("input",{className:M.a.radio,type:"range",name:"difficulty",min:"1",max:"5",value:c.difficulty,onChange:h}),j.difficulty&&Object(u.jsx)("p",{style:{color:"orange",fontWeight:"bold"},children:j.difficulty}),Object(u.jsxs)("select",{className:M.a.select,name:"season",value:c.season,onChange:h,children:[Object(u.jsx)("option",{className:M.a.op,children:"season"}),Object(u.jsx)("option",{value:"Summer",children:"Summer"}),Object(u.jsx)("option",{value:"Autumn",children:"Autum"}),Object(u.jsx)("option",{value:"Winter",children:"Winter"}),Object(u.jsx)("option",{value:"Spring",children:"Spring"})]}),j.season&&Object(u.jsx)("p",{style:{color:"orange",fontWeight:"bold"},children:j.season}),Object(u.jsxs)("select",{className:M.a.select,onChange:function(e){return function(e){r(Object(w.a)(Object(w.a)({},c),{},{idCountry:[].concat(Object(I.a)(c.idCountry),[e.target.value])}))}(e)},children:[Object(u.jsx)("option",{children:"county"}),e.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(u.jsx)("div",{className:M.a.textArea,children:c.idCountry.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:M.a.btnDelete,type:"button",value:"X",onClick:function(){return function(e){r(Object(w.a)(Object(w.a)({},c),{},{idCountry:c.idCountry.filter((function(t){return t!==e}))}))}(e)}},e.id),Object(u.jsx)("p",{className:M.a.inputTextarea,children:e})]},t)}))}),Object(u.jsx)("button",{className:M.a.btn__submit,type:"submit",children:" Create activity"})]})]})]})})}var U=n(17),q=n.n(U),K=n(40),V=n.n(K);function G(e){for(var t=e.postPag,n=e.countries,a=e.paginado,i=e.pagina,c=[],r=1;r<=Math.ceil(n/t);r++)c.push(r);return Object(u.jsx)("nav",{className:V.a.paginadoContainer,children:Object(u.jsx)("ul",{className:V.a.ul,children:c.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)("a",{className:i===e?"active":"",onClick:function(){return a(e)},children:[" ",e," "]})},t)}))})})}function z(e){var t=e.setPagina,n=Object(p.c)((function(e){return e.activities})),a=Object(p.b)(),i=Object(H.f)();return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:q.a.containerFilters,children:[Object(u.jsx)("h3",{className:q.a.title,children:"Filter for: "}),Object(u.jsxs)("select",{className:q.a.filterAndOrder,onChange:function(e){var n;a((n=e.target.value,{type:A,payload:n})),i.push("/home"),t(1)},children:[Object(u.jsx)("option",{hidden:!0,children:"A \u21f5 Z"}),Object(u.jsx)("option",{value:"ASCENDENTE",children:" A-Z "}),Object(u.jsx)("option",{value:"DESCENDENTE",children:" Z-A "})]}),Object(u.jsxs)("select",{className:q.a.filterAndOrder,onChange:function(e){var n;a((n=e.target.value,{type:C,payload:n})),i.push("/home"),t(1)},children:[Object(u.jsx)("option",{hidden:!0,children:"Continent"}),Object(u.jsx)("option",{value:"All",children:"All"}),Object(u.jsx)("option",{value:"North America",children:"North America "}),Object(u.jsx)("option",{value:"South America",children:" South America"}),Object(u.jsx)("option",{value:"Asia",children:" Asia"}),Object(u.jsx)("option",{value:"Africa",children:" Africa"}),Object(u.jsx)("option",{value:"Europe",children:" Europa"}),Object(u.jsx)("option",{value:"Oceania",children:" Oceania "}),Object(u.jsx)("option",{value:"Antarctica",children:" Antartida"})]}),Object(u.jsxs)("select",{className:q.a.filterAndOrder,onChange:function(e){var n;a((n=e.target.value,{type:E,payload:n})),i.push("/home"),t(1)},children:[Object(u.jsx)("option",{hidden:!0,children:"Population"}),Object(u.jsx)("option",{value:"MAX",children:" Less pop "}),Object(u.jsx)("option",{value:"MIN",children:" More pop "})]}),Object(u.jsxs)("select",{className:q.a.filterAndOrder,onChange:function(e){var n;a((n=e.target.value,{type:S,payload:n})),i.push("/home"),t(1)},children:[Object(u.jsx)("option",{hidden:!0,children:"Activities"}),n.map((function(e){return Object(u.jsxs)("option",{value:e.name,children:[" ",e.name]},e.id)}))]}),Object(u.jsx)("button",{className:q.a.btnClear,onClick:function(){a({type:F}),t(1)},children:"Clear Filters"})]})})}function Z(e){var t=e.setPagina,n=Object(a.useState)(""),i=Object(d.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(!1),l=Object(d.a)(o,2),j=l[0],b=l[1],O=Object(p.b)();return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{className:_.a.containerNav,children:[Object(u.jsx)(s.b,{className:_.a.linkhome,to:"/",children:"Countries"}),Object(u.jsxs)("div",{className:_.a.form,children:[Object(u.jsx)("input",{className:_.a.input,type:"text",placeholder:"Search country..",value:c,onChange:function(e){e.preventDefault(),r(e.target.value)}}),Object(u.jsx)("button",{className:_.a.inputButton,onClick:function(){b(!0),O(function(e){return function(){var t=Object(f.a)(Object(m.a)().mark((function t(n){var a;return Object(m.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/countries?name="+e);case 3:if(a=t.sent,console.log(a.data),"object"!==typeof a.data){t.next=9;break}return t.abrupt("return",n({type:y,payload:a.data}));case 9:alert(a.data);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),alert(t.t0.response.data);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(c)),t(1),setTimeout((function(){b(!1),r("")}),5e3)},children:j?"Searching...":"Search"})]}),Object(u.jsx)("div",{className:_.a.links,children:Object(u.jsxs)(s.b,{className:_.a.link,to:"/createActivity",children:["Create Activity"," "]})})]})})}var Q=n(22),$=n.n(Q);function ee(e){e.id;var t=e.name,n=e.flag,a=e.continent;return Object(u.jsx)("div",{className:$.a.all,children:Object(u.jsxs)("div",{className:$.a.container,children:[Object(u.jsx)("h2",{className:$.a.name,children:t}),Object(u.jsx)("img",{className:$.a.img,src:n,alt:"sin imagen"}),Object(u.jsx)("div",{className:$.a.parrafos,children:Object(u.jsxs)("p",{children:[" Continent: ",a]})})]})})}function te(){var e=Object(p.c)((function(e){return e.countriesFilt})),t=Object(p.b)(),n=Object(a.useState)(1),i=Object(d.a)(n,2),c=i[0],r=i[1],o=Object(a.useState)(10),l=Object(d.a)(o,1)[0],j=c*l,b=j-l,h=e.slice(b,j);return Object(a.useEffect)((function(){t(L()),t(P())}),[]),0===e.length?Object(u.jsxs)("div",{className:O.a.loadingDiv,children:[Object(u.jsx)("p",{className:O.a.spinner}),Object(u.jsx)("p",{className:O.a.loadingp,children:"Loading..."})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(Z,{setPagina:r})}),Object(u.jsx)(z,{setPagina:r}),Object(u.jsx)(G,{postPag:l,pagina:c,countries:e.length,paginado:function(e){r(e)}}),Object(u.jsx)("div",{className:O.a.container,children:Object(u.jsx)("div",{className:O.a.grid,children:h.map((function(e){return Object(u.jsx)(s.b,{className:O.a.link,to:"/"+e.id,children:Object(u.jsx)(ee,{name:e.name,flag:e.flag,continent:e.continent})},e.id)}))})})]})}var ne=n(13),ae=n.n(ne);function ie(){var e=Object(p.c)((function(e){return e.detail})),t=Object(H.g)().id,n=Object(p.b)();return Object(a.useEffect)((function(){return n(function(e){return function(t){try{fetch("/countries/"+e).then((function(e){return e.json()})).then((function(e){t({type:N,payload:e})}))}catch(n){console.log(n)}}}(t)),function(){n({type:D})}}),[]),0===e.length?Object(u.jsxs)("div",{className:ae.a.loadingDiv,children:[Object(u.jsx)("p",{className:ae.a.spinner}),Object(u.jsx)("p",{className:ae.a.loadingp,children:"Loading..."})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:ae.a.detail,children:[Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:"/home",children:Object(u.jsx)("img",{id:ae.a.linkVolver,src:X,alt:"volver"})})}),Object(u.jsxs)("div",{className:ae.a.container,children:[Object(u.jsxs)("div",{className:ae.a.items,children:[Object(u.jsx)("h2",{className:ae.a.name,children:e.name}),Object(u.jsx)("img",{className:ae.a.img,src:e.flag,alt:"not image"}),Object(u.jsx)("h5",{children:e.id}),Object(u.jsxs)("h5",{children:[" ",Object(u.jsx)("b",{children:"Continent:"})," ",e.continent]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Capital:"})," ",e.capital]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Population:"})," ",e.population]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Area:"})," ",e.area," km2"]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Subregion:"})," ",e.subregion]})]}),Object(u.jsx)("h3",{className:ae.a.titAct,children:"Activities:"}),e.activities.length?e.activities.map((function(e){return Object(u.jsxs)("div",{className:ae.a.actcontainer,children:[Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Activity:"})," ",e.name]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Difficulty:"})," ",e.difficulty]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Duration:"})," ",e.duration," hs"]}),Object(u.jsxs)("h5",{children:[Object(u.jsx)("b",{children:"Season:"})," ",e.season]})]})})):Object(u.jsxs)("div",{children:[" ",Object(u.jsx)("h3",{className:ae.a.dontact,children:"There are no registered activities"})]})]})]})})}var ce=function(){return Object(u.jsx)(s.a,{children:Object(u.jsxs)(H.c,{children:[Object(u.jsx)(H.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(H.a,{exact:!0,path:"/createActivity",component:Y}),Object(u.jsx)(H.a,{exact:!0,path:"/home",component:te}),Object(u.jsx)(H.a,{exact:!0,path:"/:id",component:ie})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))},se=n(33),oe={countries:[],detail:[],activities:[],countriesFilt:[]};var le=n(54),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.b,je=Object(se.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(w.a)(Object(w.a)({},e),{},{countries:t.payload,countriesFilt:t.payload});case y:return Object(w.a)(Object(w.a)({},e),{},{countriesFilt:t.payload});case D:return Object(w.a)(Object(w.a)({},e),{},{detail:[]});case N:return Object(w.a)(Object(w.a)({},e),{},{detail:t.payload[0]});case k:return Object(w.a)({},e);case T:return Object(w.a)(Object(w.a)({},e),{},{activities:t.payload});case A:return"ASCENDENTE"===t.payload?Object(w.a)(Object(w.a)({},e),{},{countriesFilt:e.countriesFilt.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}):Object(w.a)(Object(w.a)({},e),{},{countriesFilt:e.countriesFilt.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0}))});case C:var n="All"===t.payload?e.countries:e.countries.filter((function(e){return e.continent===t.payload}));return Object(w.a)(Object(w.a)({},e),{},{countriesFilt:n});case E:return"MAX"===t.payload?Object(w.a)(Object(w.a)({},e),{},{countriesFilt:e.countriesFilt.sort((function(e,t){return e.population<t.population?-1:e.population>t.population?1:0}))}):Object(w.a)(Object(w.a)({},e),{},{countriesFilt:e.countriesFilt.sort((function(e,t){return e.population<t.population?1:e.population>t.population?-1:0}))});case S:return Object(w.a)(Object(w.a)({},e),{},{countriesFilt:e.countries.filter((function(e){return e.activities.find((function(e){return e.name===t.payload}))}))});case F:return Object(w.a)(Object(w.a)({},e),{},{countriesFilt:e.countries});default:return e}}),ue(Object(se.a)(le.a)));v.a.defaults.baseURL="https://pi-countries2022-production.up.railway.app",r.a.render(Object(u.jsx)(p.a,{store:je,children:Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(ce,{})})}),document.getElementById("root")),re()}},[[92,1,2]]]);
//# sourceMappingURL=main.9828610a.chunk.js.map