(this["webpackJsonpfirst-samurai"]=this["webpackJsonpfirst-samurai"]||[]).push([[0],{11:function(e,t,s){e.exports={preloader:"Profile_preloader__2xCYq",mainWrapper:"Profile_mainWrapper__3TSlx",headerWrapper:"Profile_headerWrapper__2Di8R",headerImage:"Profile_headerImage__vioNI",userInfo:"Profile_userInfo__225qC",userName:"Profile_userName__2Wph8",descriptionWrapper:"Profile_descriptionWrapper__ccE0v",about:"Profile_about__9RqXV",job:"Profile_job__1Ux7p",contacts:"Profile_contacts__lyiWl",linkList:"Profile_linkList__2BBLe",linkItem:"Profile_linkItem__O305h"}},128:function(e,t,s){e.exports={wrapper:"UsersFilter_wrapper__3wsRD"}},129:function(e,t,s){e.exports={ldsRoller:"Preloader_ldsRoller__8J8vx","lds-roller":"Preloader_lds-roller__1WaLT"}},130:function(e,t,s){e.exports={userStatus:"ProfileStatus_userStatus__1hpNm"}},131:function(e,t,s){e.exports={wrapper:"Login_wrapper__l6Rzl"}},132:function(e,t,s){e.exports={postContent:"Post_postContent__qzWL6"}},133:function(e,t,s){e.exports={wrapper:"Feed_wrapper__9W2PW"}},141:function(e,t,s){},22:function(e,t,s){e.exports={wrapper:"Users_wrapper__2dEvo",mainWrapper:"Users_mainWrapper__18Dz0",mainContent:"Users_mainContent__3EQ9G",usersList:"Users_usersList__gmgKN",navList:"Users_navList__3N-uf",navItem:"Users_navItem__3-LTY",nonActiveButton:"Users_nonActiveButton__2QjzG",preloaderWrapper:"Users_preloaderWrapper__jLhdO"}},220:function(e,t,s){},262:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),r=s.n(n),c=s(63),i=s.n(c),o=s(12),l=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,266)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))},u=(s(141),s(6)),d=s(53),j=s(4),p="SET-MESSAGE",m={dialogs:[{userId:1,name:"John Doe",message:"Hello"},{userId:2,name:"Geur Krik",message:"And?"},{userId:3,name:"Doe John",message:"Where are you?"},{userId:4,name:"John Wand",message:"thx"},{userId:5,name:"Wand Geur",message:"bye"},{userId:6,name:"Krik Doe",message:"maybe to..."}],messages:[{id:0,sender:!1,text:"Hi",time:"10:28"},{id:1,sender:!0,text:"Hello",time:"10:32"},{id:2,sender:!1,text:"How are you?",time:"10:33"},{id:3,sender:!0,text:"I`m fine, thx",time:"10:37"},{id:4,sender:!1,text:"ns",time:"10:56"},{id:5,sender:!0,text:"And you?",time:"10:56"}]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var s={id:e.messages.length,sender:t.isSender,text:t.value,time:t.currentTime};return Object(j.a)(Object(j.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[s])});default:return e}},h=s(124).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"54fe6c1f-55cf-468b-ac25-d930b231a9f0"}}),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return h.get("users?count=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))},g=function(e){return h.get("follow/".concat(e)).then((function(e){return e.data}))},O=function(e){return h.post("follow/".concat(e)).then((function(e){return e.data}))},_=function(e){return h.delete("follow/".concat(e)).then((function(e){return e.data}))},x=function(e){return h.get("profile/".concat(e)).then((function(e){return e.data}))},v=function(e){return h.get("profile/status/".concat(e)).then((function(e){return e.data}))},N=function(e){return h.put("profile/status",{status:e}).then((function(e){return e.data}))},I=function(){return h.get("auth/me").then((function(e){return e.data}))},w=function(e,t,s){return h.post("auth/login",{email:e,password:t,rememberMe:s}).then((function(e){return e.data}))},P=function(){return h.post("auth/logout").then((function(e){return e.data}))},S="FRIEND-TOGGLE",k="SET-USERS",W="SET-USERS-COUNT",F="SET-CURRENT-PAGE",C="SET-FETCHING",y="FOLLOW-IN-PROGRESS",L={users:[],allUsersCount:0,currentPage:1,isFetching:!0,followInProgress:[]},T=function(e){return{type:S,id:e}},A=function(e){return{type:k,users:e}},U=function(e){return{type:W,allUsersCount:e}},M=function(e){return{type:C,isFetching:e}},E=function(e,t){return{type:y,userId:e,status:t}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{followed:!e.followed}):e}))});case k:return Object(j.a)(Object(j.a)({},e),{},{users:Object(d.a)(t.users)});case W:return Object(j.a)(Object(j.a)({},e),{},{allUsersCount:t.allUsersCount});case F:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case C:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case y:return Object(j.a)(Object(j.a)({},e),{},{followInProgress:t.status?[].concat(Object(d.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},H="SET-PROFILE",R="SET-STATUS",B="SET FETCHING",G={profile:{userId:1,aboutMe:"Nothing",contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"Nothing",fullName:"Test Test",photos:{small:null,large:null}},profileStatus:"test",isFetching:!0},J=function(e){return{type:R,status:e}},K=function(e){return{type:B,isFetching:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(j.a)(Object(j.a)({},e),{},{profile:Object(j.a)({},t.data)});case R:return Object(j.a)(Object(j.a)({},e),{},{profileStatus:t.status});case B:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});default:return e}},V="SET-USER",z="SET-ERROR",Y="LOGOUT",X={data:{id:null,login:null,email:null},isAuth:!1,errorCode:!1},Z=function(e){return{type:z,errorCode:e}},Q=function(){return function(e){I().then((function(t){0===t.resultCode&&e(function(e){return{type:V,data:e,isAuth:!0}}(t.data))}))}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{data:Object(j.a)({},t.data),isAuth:!0,errorCode:null};case z:return Object(j.a)(Object(j.a)({},e),{},{errorCode:t.errorCode});case Y:return{data:{id:null,login:null,email:null},isAuth:!1,errorCode:!1};default:return e}},ee=s(125),te=s(265),se=Object(u.c)({messagesPage:b,usersPage:D,profilePage:q,auth:$,form:te.a}),ae=Object(u.e)(se,Object(u.a)(ee.a));window.store=ae;var ne,re,ce=ae,ie=s(134),oe=s(10),le=(s(220),s(87)),ue=s.n(le),de=s(66),je=s.n(de),pe=s.p+"static/media/logo-trill.c92d9656.png",me=s(33),be=s.n(me),he=function(e){var t=e.isAuth?"/profile/".concat(e.userId):"/login";return Object(a.jsx)("article",{className:be.a.container,children:Object(a.jsxs)("div",{className:be.a.wrapper,children:[Object(a.jsx)("span",{className:be.a.imageLink,children:Object(a.jsx)("img",{src:"".concat(e.photo),width:"50px",alt:e.isAuth?e.name:"undefined user"})}),Object(a.jsxs)("span",{className:be.a.aboutWrapper,children:[Object(a.jsx)(o.b,{to:t,className:be.a.nameLink,children:Object(a.jsx)("h3",{className:be.a.profileName,children:e.name||"Please login"})}),e.isAuth?Object(a.jsx)("button",{className:be.a.button,onClick:function(){return e.logoutUser()},children:"Logout"}):null]})]})})},fe=s(9),ge=s.p+"static/media/ffa09aec412db3f54deadf1b3781de2a.fbfe03c2.png",Oe=Object(u.d)(Object(fe.b)((function(e){return{isAuth:e.auth.isAuth,name:e.auth.data.login,userId:e.auth.data.id,photo:e.profilePage.profile.photos.large?e.profilePage.profile.photos.large:ge}}),{logoutUser:function(){return function(e){P().then((function(t){0===t.resultCode&&e({type:Y})}))}}}))((function(e){return Object(a.jsx)(he,Object(j.a)({},e))})),_e=function(e){return Object(a.jsxs)("header",{className:je.a.container,children:[Object(a.jsx)("div",{className:je.a.logoLink,children:Object(a.jsx)("img",{src:pe,alt:"website logo",className:je.a.logoImage})}),Object(a.jsx)(Oe,{})]})},xe=s(13),ve=s(14),Ne=s(16),Ie=s(15),we=s(43),Pe=s.n(we),Se=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(){return Object(xe.a)(this,s),t.apply(this,arguments)}return Object(ve.a)(s,[{key:"render",value:function(){return Object(a.jsx)("li",{className:Pe.a.menuItem,children:Object(a.jsxs)(o.b,{to:this.props.link,className:Pe.a.menuLink,activeClassName:Pe.a.activeLink,children:[Object(a.jsx)("i",{className:"".concat(Pe.a.icon," ").concat(Pe.a[this.props.icon])}),Object(a.jsx)("p",{children:this.props.name})]})})}}]),s}(r.a.Component),ke=s(90),We=s.n(ke),Fe=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(){return Object(xe.a)(this,s),t.apply(this,arguments)}return Object(ve.a)(s,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:We.a.wrapper,children:Object(a.jsxs)("ul",{className:We.a.menuList,children:[Object(a.jsx)(Se,{link:"/feed",name:"Feed",icon:"feedIcon"}),Object(a.jsx)(Se,{link:"/users",name:"Users",icon:"usersIcon"}),Object(a.jsx)(Se,{link:"/messages",name:"Messages",icon:"messagesIcon"}),Object(a.jsx)(Se,{link:"/photos",name:"Photos",icon:"photosIcon"}),Object(a.jsx)(Se,{link:"/audio",name:"Audio",icon:"audioIcon"}),Object(a.jsx)(Se,{link:"/video",name:"Video",icon:"videoIcon"})]})})}}]),s}(r.a.Component),Ce=function(e){return Object(a.jsxs)("aside",{className:"".concat(ue.a.wrapper," ").concat(e.active?ue.a.active:null),children:[Object(a.jsx)(_e,{}),Object(a.jsx)(Fe,{})]})},ye=s(27),Le=s.n(ye),Te=function(e){return Object(a.jsx)(o.b,{to:"/messages/".concat(e.userId),className:Le.a.profileLink,activeClassName:Le.a.active,children:Object(a.jsxs)("article",{className:Le.a.wrapper,children:[Object(a.jsx)("img",{src:"https://7sisters.ru/wp-content/uploads/2020/05/tiran.jpg?resize=%2C",alt:"Profile image",className:Le.a.profileImage}),Object(a.jsxs)("div",{className:Le.a.messageWraper,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:Le.a.profileName,children:e.userName}),Object(a.jsxs)("p",{className:Le.a.message,children:[e.message," "]})]}),Object(a.jsx)("i",{className:Le.a.sendTime,children:"10:52"})]})]})})},Ae=s(36),Ue=s.n(Ae),Me=s(28),Ee=s.n(Me),De=s(44),He=s.n(De),Re=function(e){return Object(a.jsxs)("li",{className:"".concat(He.a.messageWrapper," ").concat(e.sender?He.a.sender:""),children:[Object(a.jsx)("p",{className:He.a.messageText,children:e.text}),Object(a.jsx)("span",{className:He.a.metaWrapper,children:Object(a.jsx)("i",{className:He.a.messageTime,children:e.time})})]})},Be=s(264),Ge=function(e){return Object(a.jsxs)("div",{className:Ee.a.wrapper,children:[Object(a.jsx)("div",{className:Ee.a.messageWrapper,children:Object(a.jsx)("ul",{className:Ee.a.messageList,children:e.messages.map((function(e){return Object(a.jsx)(Re,{sender:e.sender,text:e.text,time:e.time},e.id)}))})}),Object(a.jsxs)("form",{className:Ee.a.messageArea,onSubmit:e.handleSubmit(e.onSubmit),children:[Object(a.jsx)("label",{htmlFor:"messageFile",className:Ee.a.messageAttachment,children:"Test"}),Object(a.jsx)(Be.a,{type:"file",component:"input",className:"visuallyHidden",name:"messageFile",id:"message-file"}),Object(a.jsx)("div",{className:Ee.a.textWrapper,children:Object(a.jsx)(Be.a,{className:Ee.a.messageText,component:"textarea",name:"messageText"})}),Object(a.jsx)("button",{className:Ee.a.buttonSend,children:"Send"})]})]})},Je=s(263),Ke=Object(u.d)(Object(Je.a)({form:"DialogWindowForm"}),Object(fe.b)((function(e){return{messages:e.messagesPage.messages,defaultValue:e.messagesPage.defaultMessageValue}}),(function(e){return{onSubmit:function(t){e(function(e){var t=new Date;return{type:p,isSender:!0,currentTime:"".concat(("0"+t.getHours()).slice(-2),":").concat(("0"+t.getMinutes()).slice(-2)),value:e}}(t.messageText))}}})))(Ge),qe=function(e){return Object(a.jsxs)("main",{className:Ue.a.mainWrapper,children:[Object(a.jsxs)("aside",{className:Ue.a.asideWrapper,children:[Object(a.jsxs)("header",{className:Ue.a.searchWrapper,children:[Object(a.jsx)("input",{type:"search",name:"Search",id:"message-search",placeholder:"Search",className:Ue.a.messagesSearch}),Object(a.jsx)("button",{className:Ue.a.createButton,children:Object(a.jsx)("img",{src:"https://raw.githubusercontent.com/ivaschenkoo/ivaschenko.github.io/33e60e444e15a280c9b3e6524e738103111ab0d0/fi-rr-plus-small.svg",alt:""})})]}),e.dialogs]}),Object(a.jsx)(Ke,{className:Ue.a.messagesWrapper})]})},Ve=function(e){var t=function(t){Object(Ne.a)(n,t);var s=Object(Ie.a)(n);function n(){return Object(xe.a)(this,n),s.apply(this,arguments)}return Object(ve.a)(n,[{key:"render",value:function(){return this.props.isAuth?Object(a.jsx)(e,Object(j.a)({},this.props)):Object(a.jsx)(oe.a,{to:"/login"})}}]),n}(r.a.Component);return Object(fe.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)},ze=Object(u.d)(Ve,Object(fe.b)((function(e){return{dialogs:e.messagesPage.dialogs.map((function(e){return Object(a.jsx)(Te,{userId:e.userId,userName:e.name,message:e.message},e.userId)}))}}),{}))(qe),Ye=s(22),Xe=s.n(Ye),Ze=s(37),Qe=s.n(Ze),$e=function(e){return Object(a.jsxs)("li",{className:Qe.a.userItem,children:[Object(a.jsx)(o.b,{to:"/profile/".concat(e.id),children:Object(a.jsx)("img",{src:e.photoUrl,className:Qe.a.userPhoto,alt:"#",width:"50px"})}),Object(a.jsx)("div",{className:Qe.a.userDescriptionWrapper,children:Object(a.jsx)(o.b,{to:"/profile/".concat(e.id),className:Qe.a.userLink,children:Object(a.jsx)("h3",{className:Qe.a.userName,children:e.fullName})})}),Object(a.jsx)("button",{className:Qe.a.button,onClick:function(){e.friendToggle(e.id)},disabled:e.followInProgress.some((function(t){return t===e.id})),children:e.isFriend?"Unfriend":"Add Friend"})]})},et=s(128),tt=s.n(et),st=function(e){return Object(a.jsx)("aside",{className:tt.a.wrapper,children:"filter"})},at=s.p+"static/media/l-0.df890b88.svg",nt=s.p+"static/media/l-1.7fbf1c88.svg",rt=s.p+"static/media/r-1.1fbba48b.svg",ct=s.p+"static/media/r-0.3a16acb2.svg",it=s(129),ot=s.n(it),lt=function(e){return Object(a.jsx)(a.Fragment,{children:e.isFetching?Object(a.jsxs)("div",{className:ot.a.ldsRoller,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]}):null})},ut=function(e){return Object(a.jsxs)("div",{className:Xe.a.wrapper,children:[Object(a.jsx)("div",{className:Xe.a.preloaderWrapper,children:Object(a.jsx)(lt,{isFetching:e.isFetching})}),Object(a.jsx)("div",{className:Xe.a.mainWrapper,children:Object(a.jsxs)("div",{className:Xe.a.mainContent,children:[Object(a.jsx)("ul",{className:Xe.a.usersList,children:e.users.map((function(t){return Object(a.jsx)($e,{id:t.id,fullName:"".concat(t.name),photoUrl:t.photos.small?t.photos.small:ge,isFriend:t.followed,subscribe:e.subscribe,friendToggle:e.friendToggle,followInProgress:e.followInProgress},t.id)}))}),Object(a.jsxs)("ul",{className:Xe.a.navList,children:[Object(a.jsx)("li",{className:Xe.a.navItem,children:Object(a.jsx)("button",{disabled:e.currentPage<=10,onClick:function(){e.changePage(e.currentPage-10)},children:Object(a.jsx)("img",{src:at,alt:"arrowLeft",width:"18px",height:"auto"})})}),Object(a.jsx)("li",{className:Xe.a.navItem,children:Object(a.jsx)("button",{disabled:e.currentPage<=1,onClick:function(){e.changePage(e.currentPage-1)},children:Object(a.jsx)("img",{src:nt,alt:"arrowLeft",width:"18px",height:"auto"})})}),Object(a.jsx)("li",{className:Xe.a.navItem,children:Object(a.jsx)("button",{className:Xe.a.nonActiveButton,children:e.currentPage})}),Object(a.jsx)("li",{className:Xe.a.navItem,children:Object(a.jsx)("button",{disabled:e.currentPage===e.countOfPages,onClick:function(){e.changePage(e.currentPage+1)},children:Object(a.jsx)("img",{src:rt,alt:"arrowLeft",width:"18px",height:"auto"})})}),Object(a.jsx)("li",{className:Xe.a.navItem,children:Object(a.jsx)("button",{disabled:e.currentPage>=e.countOfPages-9,onClick:function(){e.changePage(e.currentPage+10)},children:Object(a.jsx)("img",{src:ct,alt:"arrowLeft",width:"18px",height:"auto"})})})]})]})}),Object(a.jsx)(st,{})]})},dt=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(){return Object(xe.a)(this,s),t.apply(this,arguments)}return Object(ve.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,10)}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ut,{users:this.props.users,currentPage:this.props.currentPage,countOfPages:this.props.countOfPages,isFetching:this.props.isFetching,followInProgress:this.props.followInProgress,friendToggle:this.props.friendToggle.bind(this),changePage:this.props.changePage.bind(this)})})}}]),s}(r.a.Component),jt=Object(u.d)(Ve,Object(fe.b)((function(e){return{users:e.usersPage.users,currentPage:e.usersPage.currentPage,countOfPages:Math.ceil(e.usersPage.allUsersCount/10),isFetching:e.usersPage.isFetching,followInProgress:e.usersPage.followInProgress}}),{getUsers:function(e,t){return function(s){s(M(!0)),f(e,t).then((function(e){s(A(e.items)),s(U(e.totalCount)),s(M(!1))}))}},friendToggle:function(e){return function(t){t(E(e,!0)),g(e).then((function(s){s?_(e).then((function(s){0===s.resultCode&&t(T(e))})):O(e).then((function(s){0===s.resultCode&&t(T(e))}))})),t(E(e,!1))}},changePage:function(e){return function(t){t(M(!0)),t(function(e){return{type:F,currentPage:e}}(e)),f(e,10).then((function(e){t(A(e.items)),t(U(e.totalCount)),t(M(!1))}))}}}))(dt),pt=s(11),mt=s.n(pt),bt=s(130),ht=s.n(bt),ft=function(e){return Object(a.jsx)("p",{className:ht.a.userStatus,children:e.profileStatus?e.profileStatus:null})},gt=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(e){var a;return Object(xe.a)(this,s),(a=t.call(this,e)).activateEdit=function(){a.setState({editMode:!0})},a.deactivateEdit=function(){a.setState({editMode:!1}),a.props.changeUserStatus(a.state.statusText)},a.changeStatusText=function(e){a.setState({statusText:e.target.value})},a.state={editMode:!1,statusText:a.props.profileStatus},a}return Object(ve.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.profileStatus!==this.props.profileStatus&&this.setState({statusText:this.props.profileStatus})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:this.state.editMode?Object(a.jsx)("input",{autoFocus:!0,onBlur:this.deactivateEdit,onChange:function(t){return e.changeStatusText(t)},value:this.state.statusText}):Object(a.jsx)("span",{onClick:this.activateEdit,children:Object(a.jsx)(ft,{profileStatus:this.props.profileStatus})})})}}]),s}(r.a.Component),Ot=function(e){return Object(a.jsxs)(a.Fragment,{children:[e.isFetching?Object(a.jsx)("div",{className:mt.a.preloader,children:Object(a.jsx)(lt,{isFetching:e.isFetching})}):null,Object(a.jsxs)("div",{className:mt.a.mainWrapper,children:[Object(a.jsxs)("header",{className:mt.a.headerWrapper,children:[Object(a.jsx)(o.b,{to:"#",children:Object(a.jsx)("img",{src:e.profile.photos.large||ge,alt:"#",width:"200px",height:"auto",className:mt.a.headerImage})}),Object(a.jsxs)("div",{className:mt.a.userInfo,children:[Object(a.jsx)("h3",{className:mt.a.userName,children:e.profile.fullName}),Object(a.jsx)(gt,{profileStatus:e.profileStatus,changeUserStatus:e.changeUserStatus})]})]}),Object(a.jsxs)("main",{className:mt.a.descriptionWrapper,children:[Object(a.jsxs)("section",{className:mt.a.about,children:[Object(a.jsx)("h4",{children:"About me"}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:e.profile.aboutMe})})]}),Object(a.jsxs)("section",{className:mt.a.job,children:[Object(a.jsx)("h4",{children:"Job"}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("i",{children:["\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443: ",e.profile.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"]}),Object(a.jsx)("p",{children:e.profile.lookingForAJobDescription})]})]}),Object(a.jsxs)("section",{className:mt.a.contacts,children:[Object(a.jsx)("h4",{children:"Contacts"}),Object(a.jsxs)("ul",{className:mt.a.linkList,children:[Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"github"}),Object(a.jsx)("a",{href:e.profile.contacts.github,children:"github"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"mainLink"}),Object(a.jsx)("a",{href:e.profile.contacts.mainLink,children:"mainLink"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"facebook"}),Object(a.jsx)("a",{href:e.profile.contacts.facebook,children:"facebook"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"instagram"}),Object(a.jsx)("a",{href:e.profile.contacts.instagram,children:"instagram"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"vk"}),Object(a.jsx)("a",{href:e.profile.contacts.vk,children:"vk"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"website"}),Object(a.jsx)("a",{href:e.profile.contacts.website,children:"website"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"youtube"}),Object(a.jsx)("a",{href:e.profile.contacts.youtube,children:"youtube"})]}),Object(a.jsxs)("li",{className:mt.a.linkItem,children:[Object(a.jsx)("p",{children:"twitter"}),Object(a.jsx)("a",{href:e.profile.contacts.twitter,children:"twitter"})]})]})]})]})]})]})},_t=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(){return Object(xe.a)(this,s),t.apply(this,arguments)}return Object(ve.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(a.jsx)(Ot,{profile:this.props.profile,profileStatus:this.props.profileStatus,isFetching:this.props.isFetching,changeUserStatus:this.props.changeUserStatus})}}]),s}(r.a.Component),xt=Object(u.d)(oe.f,Ve,Object(fe.b)((function(e){return{profile:e.profilePage.profile,profileStatus:e.profilePage.profileStatus,isFetching:e.profilePage.isFetching}}),{getUserProfile:function(e){return function(t){t(K(!0)),x(e).then((function(e){t(function(e){return{type:H,data:e}}(e))}))}},getUserStatus:function(e){return function(t){v(e).then((function(e){t(J(e)),t(K(!1))}))}},changeUserStatus:function(e){return function(t){N(e).then((function(s){0===s.resultCode&&t(J(e))}))}}}))(_t),vt=s(38),Nt=s.n(vt),It=(s(93),function(e){return Object(a.jsxs)("header",{className:Nt.a.wrapper,children:[Object(a.jsx)("button",{className:"".concat(Nt.a.menu," ").concat(e.active?Nt.a.active:null),onClick:function(){e.setActive(!e.active)},children:Object(a.jsx)("span",{className:"visuallyHidden",children:"Show menu"})}),Object(a.jsxs)("div",{className:Nt.a.searchWrapper,children:[Object(a.jsx)("label",{htmlFor:"main-search",className:Nt.a.searchIcon}),Object(a.jsx)("input",{id:"main-search",type:"search",name:"Search",placeholder:"Search...",className:Nt.a.search})]})]})}),wt=Object(fe.b)((function(e){return{login:e.auth.data.login}}),{getAuthUser:Q})((function(e){return Object(n.useEffect)((function(){e.getAuthUser()})),Object(a.jsx)(It,Object(j.a)({},e))})),Pt=s(45),St=s.n(Pt),kt=function(e){if(!e)return"required"},Wt=s(135),Ft=s(68),Ct=s.n(Ft),yt=(ne="input",function(e){var t=e.input,s=e.meta,n=Object(Wt.a)(e,["input","meta"]),r=s.touched&&s.error&&!s.active;return Object(a.jsxs)("div",{className:Ct.a.inputWrapper,children:[Object(a.jsx)(ne,Object(j.a)(Object(j.a)(Object(j.a)({},t),n),{},{className:n.className+(r?" ".concat(Ct.a.formError):"")})),r&&Object(a.jsx)("span",{className:Ct.a.errorMessage,children:s.error})]})}),Lt=(re=4,function(e){if((null===e||void 0===e?void 0:e.length)<re)return"value must be ".concat(re," or longer")}),Tt=function(e){return Object(a.jsx)("div",{className:St.a.wrapper,children:Object(a.jsxs)("form",{onSubmit:e.handleSubmit(e.onSubmit),children:[Object(a.jsx)(Be.a,{name:"email",className:St.a.inputForm,component:yt,placeholder:"Email",type:"email",validate:[kt,Lt]}),Object(a.jsx)(Be.a,{name:"password",className:St.a.inputForm,component:yt,placeholder:"Password",type:"password",validate:[kt,Lt]}),Object(a.jsxs)("div",{className:St.a.adWrapper,children:[Object(a.jsxs)("span",{children:[Object(a.jsx)(Be.a,{name:"rememberMe",component:"input",type:"checkbox"})," Remember Me"]}),e.error?Object(a.jsx)("div",{children:1===e.error?"incorrect email or password":10===e.error?"captcha is required":11===e.error?"undefined error":null}):null,Object(a.jsx)("button",{className:St.a.button,children:"Submit"})]})]})})},At=s(131),Ut=s.n(At),Mt=function(e){return e.isAuth?Object(a.jsx)(oe.a,{to:"/profile/".concat(e.userId)}):Object(a.jsx)("aside",{className:Ut.a.wrapper,children:Object(a.jsx)(Tt,Object(j.a)(Object(j.a)({},e),{},{onSubmit:e.onSubmit}))})},Et=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(){var e;Object(xe.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onSubmit=function(t){var s=t.email,a=t.password,n=t.rememberMe;e.props.postUserData(s,a,n)},e}return Object(ve.a)(s,[{key:"render",value:function(){return Object(a.jsx)(Mt,Object(j.a)(Object(j.a)({},this.props),{},{onSubmit:this.onSubmit}))}}]),s}(r.a.Component),Dt=Object(u.d)(Object(Je.a)({form:"login"}),Object(fe.b)((function(e){return{isAuth:e.auth.isAuth,userId:e.auth.data.id,error:e.auth.errorCode}}),{postUserData:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(a){w(e,t,s).then((function(e){0===e.resultCode?a(Q()):1===e.resultCode?a(Z(1)):10===e.resultCode?a(Z(10)):a(Z(11))}))}}}))(Et),Ht=s(94),Rt=s.n(Ht),Bt=s(29),Gt=s.n(Bt),Jt=function(e){return Object(a.jsx)("div",{className:Gt.a.postWrapper,children:Object(a.jsxs)("div",{className:Gt.a.inputWrapper,children:[Object(a.jsx)("img",{className:Gt.a.profileImage,src:"https://7sisters.ru/wp-content/uploads/2020/05/tiran.jpg?resize=%2C",alt:"",width:"45px",height:"45px"}),Object(a.jsxs)("form",{className:Gt.a.postForm,children:[Object(a.jsx)("textarea",{className:Gt.a.textInput,name:"post-text",id:"text",placeholder:"What`s new, John?"}),Object(a.jsxs)("div",{className:Gt.a.addItem,children:[Object(a.jsx)("label",{htmlFor:"file",className:Gt.a.attachment,children:"Test"}),Object(a.jsx)("input",{className:"visuallyHidden",type:"file",name:"post-file",id:"file"}),Object(a.jsx)("button",{className:Gt.a.button,type:"submit",children:"Post"})]})]})]})})},Kt=s(132),qt=s.n(Kt),Vt=function(e){return Object(a.jsxs)("article",{children:[Object(a.jsx)("img",{src:"",alt:""}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"John Doe"}),Object(a.jsx)("p",{children:"posted"}),Object(a.jsx)("button",{children:"options"})]}),Object(a.jsx)("i",{children:"2 hours, 1 minute ago"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:qt.a.postContent,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{children:"like"}),Object(a.jsx)("button",{children:"comment"})]})]})]})},zt=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"#",children:"All"}),Object(a.jsx)("a",{href:"#",children:"Groups"}),Object(a.jsx)("a",{href:"#",children:"Friends"})]}),Object(a.jsx)(Vt,{}),Object(a.jsx)(Vt,{}),Object(a.jsx)(Vt,{}),Object(a.jsx)(Vt,{})]})},Yt=function(e){return Object(a.jsxs)("section",{className:Rt.a.wrapper,children:[Object(a.jsx)("div",{className:Rt.a.newPost,children:Object(a.jsx)(Jt,{})}),Object(a.jsx)(zt,{})]})},Xt=s(133),Zt=s.n(Xt),Qt=function(e){return Object(a.jsx)("aside",{children:"filter"})},$t=function(e){return Object(a.jsxs)("main",{className:Zt.a.wrapper,children:[Object(a.jsx)(Yt,{}),Object(a.jsx)(Qt,{})]})},es=function(e){Object(Ne.a)(s,e);var t=Object(Ie.a)(s);function s(){return Object(xe.a)(this,s),t.apply(this,arguments)}return Object(ve.a)(s,[{key:"render",value:function(){return Object(a.jsx)($t,{})}}]),s}(r.a.Component),ts=Object(u.d)(Ve,Object(fe.b)((function(e){return{}}),{}))(es),ss=function(e){var t=Object(n.useState)(!1),s=Object(ie.a)(t,2),r=s[0],c=s[1];return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(Ce,{active:r,setActive:c}),Object(a.jsxs)("div",{className:"contentWrapper ".concat(r?"menuActive":""),children:[Object(a.jsx)(wt,{active:r,setActive:c}),Object(a.jsx)(oe.b,{path:"/profile/:userId?",render:function(){return Object(a.jsx)(xt,{})}}),Object(a.jsx)(oe.b,{path:"/feed",render:function(){return Object(a.jsx)(ts,{})}}),Object(a.jsx)(oe.b,{path:"/messages",render:function(){return Object(a.jsx)(ze,{})}}),Object(a.jsx)(oe.b,{path:"/users",render:function(){return Object(a.jsx)(jt,{})}}),Object(a.jsx)(oe.b,{path:"/login",render:function(){return Object(a.jsx)(Dt,{})}})]})]})};i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(fe.a,{store:ce,children:Object(a.jsx)(ss,{})})}),document.getElementById("root")),l()},27:function(e,t,s){e.exports={profileLink:"Dialog_profileLink__3VEnG",active:"Dialog_active__3wZJ0",wrapper:"Dialog_wrapper__21sAm",messageWraper:"Dialog_messageWraper__2Ekfd",profileImage:"Dialog_profileImage__1001o",profileName:"Dialog_profileName__2NfOJ",message:"Dialog_message__jW7_V",sendTime:"Dialog_sendTime__beYq4"}},28:function(e,t,s){e.exports={wrapper:"DialogWindow_wrapper__3oiy0",messageWrapper:"DialogWindow_messageWrapper__148M7",messageList:"DialogWindow_messageList__2V25F",messageArea:"DialogWindow_messageArea__2H1vT",textWrapper:"DialogWindow_textWrapper__3bxGe",messageText:"DialogWindow_messageText__25Pn4",messageAttachment:"DialogWindow_messageAttachment__2FIdr",smileButton:"DialogWindow_smileButton__15Lrf",buttonSend:"DialogWindow_buttonSend__1LRe7"}},29:function(e,t,s){e.exports={postWrapper:"CreatePost_postWrapper__3TFao",inputWrapper:"CreatePost_inputWrapper__2EkWR",profileImage:"CreatePost_profileImage__RHAOE",postForm:"CreatePost_postForm__1ZBtM",textInput:"CreatePost_textInput__KmR_m",addItem:"CreatePost_addItem__3pIpx",attachment:"CreatePost_attachment__2-0wY",button:"CreatePost_button__yooJg"}},33:function(e,t,s){e.exports={container:"SidebarProfile_container__2Gway",wrapper:"SidebarProfile_wrapper__2DG5n",imageLink:"SidebarProfile_imageLink__2JKRN",nameLink:"SidebarProfile_nameLink__j-GGL",aboutWrapper:"SidebarProfile_aboutWrapper__3l2k3",profileName:"SidebarProfile_profileName__3k5Y1",button:"SidebarProfile_button__3ww-e"}},36:function(e,t,s){e.exports={mainWrapper:"Messages_mainWrapper__1upB6",asideWrapper:"Messages_asideWrapper__dnbBH",searchWrapper:"Messages_searchWrapper__1R-Tx",messagesSearch:"Messages_messagesSearch__3sjTa",createButton:"Messages_createButton__2OK2l",messagesWrapper:"Messages_messagesWrapper__J2_gq"}},37:function(e,t,s){e.exports={userItem:"User_userItem__iCIgT",userPhoto:"User_userPhoto__2jsaA",userDescriptionWrapper:"User_userDescriptionWrapper__34cfU",userLink:"User_userLink__WtGiM",userName:"User_userName__2BknS",button:"User_button__25nrJ"}},38:function(e,t,s){e.exports={wrapper:"Header_wrapper__2AvKZ",menu:"Header_menu__3ObBA",search:"Header_search__60QCB",searchWrapper:"Header_searchWrapper__16E-s",searchIcon:"Header_searchIcon__N30t1",linkWrapper:"Header_linkWrapper__2ofFS",active:"Header_active__zmXzW"}},43:function(e,t,s){e.exports={menuItem:"MenuItem_menuItem__3aNuK",menuLink:"MenuItem_menuLink__3lirq",activeLink:"MenuItem_activeLink__1YFbe",icon:"MenuItem_icon__X9xxW",feedIcon:"MenuItem_feedIcon__upBKr",usersIcon:"MenuItem_usersIcon__2lpFB",messagesIcon:"MenuItem_messagesIcon__1FhwT",photosIcon:"MenuItem_photosIcon__2vous",audioIcon:"MenuItem_audioIcon__3bfDd",videoIcon:"MenuItem_videoIcon__19CZg"}},44:function(e,t,s){e.exports={messageWrapper:"Message_messageWrapper__hHlHl",messageText:"Message_messageText__2uPEh",metaWrapper:"Message_metaWrapper__xNPI-",messageTime:"Message_messageTime__wO9a8",sender:"Message_sender__2iAB4"}},45:function(e,t,s){e.exports={wrapper:"LoginForm_wrapper__2KW8M",inputForm:"LoginForm_inputForm__11VGm",adWrapper:"LoginForm_adWrapper__1dKDL",button:"LoginForm_button__2dAR5"}},66:function(e,t,s){e.exports={container:"SidebarHeader_container__3s8QT",logoLink:"SidebarHeader_logoLink__3XdLG",logoImage:"SidebarHeader_logoImage__2AS8d"}},68:function(e,t,s){e.exports={inputWrapper:"FieldsCreators_inputWrapper__3EeV4",formError:"FieldsCreators_formError__2MDAI",errorMessage:"FieldsCreators_errorMessage__1sbrF"}},87:function(e,t,s){e.exports={wrapper:"Sidebar_wrapper__3JIhy",active:"Sidebar_active__2DxlO"}},90:function(e,t,s){e.exports={wrapper:"SidebarNav_wrapper__3FvaX",menuList:"SidebarNav_menuList__2A9Mr"}},93:function(e,t,s){e.exports={item:"HeaderItem_item__zPHV-",notification:"HeaderItem_notification__1cpeq"}},94:function(e,t,s){e.exports={wrapper:"ContentFeed_wrapper__2-OXN",newPost:"ContentFeed_newPost__3HjZT"}}},[[262,1,2]]]);
//# sourceMappingURL=main.b0b432c4.chunk.js.map