(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){e.exports=a(399)},393:function(e,t,a){},397:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(194),l=a.n(c),i=a(12),s=a(36),o={authError:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),Object(s.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log("login error"),Object(s.a)({},e,{authError:"Login failed"});case"SIGNOUT_SUCCESS":return console.log("sign out success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(s.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(s.a)({},e,{authError:t.err.message});default:return e}},m={},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT_SUCCESS":return console.log("create project success",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),e;default:return e}},h=a(24),p=a(57),E=Object(i.c)({auth:u,project:d,firebase:h.firebaseReducer,firestore:p.firestoreReducer}),f=a(8),b=a(197),g=a(82),N=a.n(g);a(386),a(391);N.a.initializeApp({apiKey:"AIzaSyDkZ3pN-yzvmzawL63NEVpvuP6w8YpLQPE",authDomain:"schedule-planner-c324b.firebaseapp.com",databaseURL:"https://schedule-planner-c324b.firebaseio.com",projectId:"schedule-planner-c324b",storageBucket:"schedule-planner-c324b.appspot.com",messagingSenderId:"956351763235"}),N.a.firestore().settings({timestampsInSnapshots:!0});var v=N.a,j=(a(393),a(17)),O=a(18),y=a(20),C=a(19),S=a(21),w=a(403),R=a(404),F=a(400),x=a(396),P=a(401),I=Object(f.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(P.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(P.a,{to:"/",className:"btn btn-floating green lighten-1"},e.profile.initials))))}),U=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(P.a,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(P.a,{to:"/signin"},"Login"))))},k=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(I,{profile:a}):r.a.createElement(U,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",null,r.a.createElement(x.a,{to:"/",className:"brand-logo center"},"Planner"),n))}),A=a(43),_=a.n(A),L=function(e){var t=e.project;return r.a.createElement("div",{className:"card project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},_()(t.createdAt.toDate()).calendar())))},G=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(x.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(L,{project:e}))}))},T=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"online-users"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"red-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"note-date grey-text"},_()(e.time.toDate()).fromNow()))})))))},D=a(402),J=function(e){function t(){return Object(j.a)(this,t),Object(y.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(G,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(T,{notifications:n})))):r.a.createElement(D.a,{to:"/signin"})}}]),t}(n.Component),z=Object(i.d)(Object(f.b)(function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(h.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(J),B=Object(i.d)(Object(f.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(h.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey grey-text lighten-4"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,_()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading projects...")):r.a.createElement(D.a,{to:"/signin"})}),W=a(28),K=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={eamil:"",password:""},a.handleChange=function(e){a.setState(Object(W.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(D.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn teal lighten-1"},"Login"),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),Q=Object(f.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR"},t)})}));var a}}})(K),V=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={eamil:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(W.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(D.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"Last name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn teal lighten-1"},"Sign Up"),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),Y=Object(f.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return i.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR"},t)})}));var a}}})(V),Z=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(y.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(W.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a new project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Project title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn teal lighten-1"},"Create")))):r.a.createElement(D.a,{to:"/signin"})}}]),t}(n.Component),$=Object(f.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(s.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT_SUCCESS"})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR"},e)})}}(t))}}})(Z),q=(a(397),function(e){function t(){return Object(j.a)(this,t),Object(y.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(R.a,null,r.a.createElement(F.a,{exact:!0,path:"/",component:z}),r.a.createElement(F.a,{path:"/project/:id",component:B}),r.a.createElement(F.a,{path:"/signin",component:Q}),r.a.createElement(F.a,{path:"/signup",component:Y}),r.a.createElement(F.a,{path:"/create",component:$}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=Object(i.e)(E,Object(i.d)(Object(i.a)(b.a.withExtraArgument({getFirebase:h.getFirebase,getFirestore:p.getFirestore})),Object(h.reactReduxFirebase)(v,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0}),Object(p.reduxFirestore)(v)));H.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(f.a,{store:H},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[198,2,1]]]);
//# sourceMappingURL=main.636cc0d6.chunk.js.map