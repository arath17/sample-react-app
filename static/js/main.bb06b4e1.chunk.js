(this["webpackJsonpsample-react-app"]=this["webpackJsonpsample-react-app"]||[]).push([[0],{65:function(e,n,c){},67:function(e,n,c){},68:function(e,n,c){"use strict";c.r(n),c.d(n,"msalInstance",(function(){return N}));var t=c(1),i=c.n(t),o=c(26),s=c.n(o),r=c(75),a=c(20),l=c(19),u=c(2),j=c(36),d=c(39),b={signIn:{authority:"https://xIAMASPAC0.b2clogin.com/xIAMASPAC0.onmicrosoft.com/b2c_1a_signin_scdf"},changePassword:{authority:"https://xIAMASPAC0.b2clogin.com/xIAMASPAC0.onmicrosoft.com/b2c_1a_change_password_scdf"},changeEmail:{authority:"https://xIAMASPAC0.b2clogin.com/xIAMASPAC0.onmicrosoft.com/b2c_1a_change_email_scdf"},signup:{authority:"https://xIAMASPAC0.b2clogin.com/xIAMASPAC0.onmicrosoft.com/b2c_1a_signup_scdf"}},h="xIAMASPAC0.b2clogin.com",g={auth:{clientId:"7433bc91-dca1-462a-ac1a-4106c8ace13d",authority:b.signIn.authority,knownAuthorities:[h],postLogoutRedirectUri:"/",navigateToLoginRequestUrl:!0},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,n,c){if(!c)switch(e){case d.a.Error:return void console.error(n);case d.a.Info:return void console.info(n);case d.a.Verbose:return void console.debug(n);case d.a.Warning:return void console.warn(n)}}}}},m={scopes:[]},x=c(40),p=c(74),O=c(55),f=c(76),A=c(7),k=function(){var e=Object(l.d)().instance;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(l.a,{children:Object(A.jsxs)("div",{className:"ml-auto",children:[Object(A.jsx)(x.a,{variant:"info",onClick:function(){return e.loginPopup(b.changeEmail)},className:"ml-auto",children:"Change Email"}),Object(A.jsx)(x.a,{variant:"info",onClick:function(){return e.loginPopup(b.changePassword)},className:"ml-auto",children:"Change Password"}),Object(A.jsxs)(p.a,{variant:"warning",className:"ml-auto",drop:"left",title:"Sign Out",children:[Object(A.jsx)(O.a.Item,{as:"button",onClick:function(){return e.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"})},children:"Sign out using Popup"}),Object(A.jsx)(O.a.Item,{as:"button",onClick:function(){return e.logoutRedirect({postLogoutRedirectUri:"/"})},children:"Sign out using Redirect"})]})]})}),Object(A.jsxs)(l.c,{children:[Object(A.jsx)(x.a,{variant:"info",onClick:function(){return e.loginPopup(b.signup)},className:"ml-auto",children:"Sign Up"}),Object(A.jsxs)(p.a,{variant:"secondary",className:"ml-auto",drop:"left",title:"Sign In",children:[Object(A.jsx)(O.a.Item,{as:"button",onClick:function(){return e.loginPopup()},children:"Sign in using Popup"}),Object(A.jsx)(O.a.Item,{as:"button",onClick:function(){return e.loginRedirect(m)},children:"Sign in using Redirect"})]})]})]})},C=function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(f.a,{bg:"primary",variant:"dark",children:[Object(A.jsx)("a",{className:"navbar-brand",href:"/",children:"Microsoft identity platform"}),Object(A.jsx)(k,{})]}),Object(A.jsx)("br",{}),Object(A.jsx)("h5",{children:Object(A.jsx)("center",{children:"Welcome to the Microsoft Authentication Library For React Tutorial"})}),Object(A.jsx)("br",{}),e.children,Object(A.jsx)("br",{}),Object(A.jsx)(l.a,{children:Object(A.jsx)("footer",{children:Object(A.jsxs)("center",{children:["How did we do?",Object(A.jsx)("a",{href:"https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu",target:"_blank",children:" Share your experience!"})]})})})]})},v=function(e){return Object(A.jsxs)("div",{id:"token-div",children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Audience: "})," ",e.idTokenClaims.aud]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Issuer: "})," ",e.idTokenClaims.iss]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"OID: "})," ",e.idTokenClaims.oid]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"UPN: "})," ",e.idTokenClaims.preferred_username]})]})},I=(c(65),function(){var e=Object(l.d)().accounts,n=Object(t.useState)(null),c=Object(a.a)(n,2),i=c[0],o=c[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("h5",{className:"card-title",children:["Welcome ",e[0].name]}),i?Object(A.jsx)(v,{idTokenClaims:i}):Object(A.jsx)(x.a,{variant:"secondary",onClick:function(){o(e[0].idTokenClaims)},children:"View ID Token Claims"})]})}),P=function(){var e=Object(l.d)(),n=e.instance,c=e.inProgress,i=e.accounts,o=Object(t.useState)(null),s=Object(a.a)(o,1)[0];return Object(t.useEffect)((function(){if(!s&&c===u.f.None){var e={scopes:["user.read"],account:i[0]};n.acquireTokenSilent(e).then((function(e){var n=e.accessToken;console.log(n)})).catch((function(c){c instanceof j.a&&n.acquireTokenPopup(e).then((function(e){var n=e.accessToken;console.log(n)})).catch((function(e){console.log(e)})),console.log(c)}))}})),Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(l.a,{children:Object(A.jsx)(I,{})}),Object(A.jsx)(l.c,{children:Object(A.jsx)("h5",{className:"card-title",children:"Please sign-in to see your profile information."})})]})};function S(e){var n=e.msalInstance;return Object(A.jsx)(l.b,{instance:n,children:Object(A.jsx)(C,{children:Object(A.jsx)(P,{})})})}c(66),c(67);var N=new r.a(g);s.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)(S,{msalInstance:N})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.bb06b4e1.chunk.js.map