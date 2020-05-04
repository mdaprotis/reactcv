(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n,i=t(0),l=t.n(i),o=t(12),r=t.n(o),s=t(11),c=t(129),d=t(154),m=t(155),u=t(156),p=t(131),b=t(130),g=t(70),v=t(128),f="dark",y="light",h=t(7),E=t(126),k=t(127),_=(n={},Object(h.a)(n,y,{palette:{type:"light",primary:{light:E.a[700],main:E.a[800],dark:E.a[900]},secondary:{light:k.a[600],main:k.a[700],dark:k.a[800]},text:{secondary:E.a[900]}}}),Object(h.a)(n,f,{palette:{type:"dark",primary:{light:E.a[600],main:E.a[700],dark:E.a[800]},secondary:{light:k.a[600],main:k.a[700],dark:k.a[800]},text:{secondary:E.a[400]}}}),n),w=Object(i.createContext)(),C=function(e){var a=Object(i.useState)(f),t=Object(s.a)(a,2),n=t[0],o=t[1],r=Object(g.a)(_[n]);return l.a.createElement(w.Provider,{value:{theme:n,toggleTheme:function(){o(n===y?f:y)}}},l.a.createElement(v.a,{theme:r},e.children))},x=t(132),S=t(157),j=t(133),O=t(105),N=t(160),F=t(134),T=t(29),I=t(27),A=t(46);Object(T.setTranslations)({EN:I,SP:A}),Object(T.setDefaultLanguage)("SP"),Object(T.setLanguageCookie)();var P=Object(i.createContext)(),R=function(e){var a=Object(i.useState)("EN"),t=Object(s.a)(a,2),n=t[0],o=t[1];return l.a.createElement(P.Provider,{value:{lang:n,handleClickLang:function(e){o("SP"===n?"EN":"SP"),Object(T.setLanguage)(n)}}},e.children)},B=Object(c.a)((function(e){return{title:{flexGrow:1},container:{margin:"auto",maxWidth:"70%"},topic:{margin:"auto",paddingTop:"100px"},small:{width:e.spacing(2.5),height:e.spacing(2.5)}}}));function z(e){var a=e.t,t=e.handleClickTab,n=e.tabValue,o=B(),r=l.a.useState("brightness_2"),c=Object(s.a)(r,2),d=c[0],m=c[1],g=Object(i.useContext)(w),v=g.test,f=g.toggleTheme,y=Object(i.useContext)(P).handleClickLang;return l.a.createElement("div",null,v,l.a.createElement(b.a,{position:"fixed",color:"primary"},l.a.createElement(p.a,{varian:"condense",className:o.titlebar},l.a.createElement(x.a,{container:!0,direction:"row",justify:"space-between"},l.a.createElement(x.a,{item:!0,xs:9},l.a.createElement(u.a,{display:"flex",justifyContent:"flex-start"},l.a.createElement(S.a,{value:n,indicatorColor:"secondary",onChange:t,variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},l.a.createElement(j.a,{label:a("navbar.profile")}),l.a.createElement(j.a,{label:a("navbar.about_me")}),l.a.createElement(j.a,{label:a("navbar.knowledge")}),l.a.createElement(j.a,{label:a("navbar.work")})))),l.a.createElement(x.a,{item:!0,xs:3},l.a.createElement(u.a,{display:"flex",justifyContent:"flex-end"},l.a.createElement(O.a,{onClick:y},l.a.createElement(N.a,{className:o.small},l.a.createElement(u.a,{fontWeight:"fontWeightBold",fontSize:12,m:1},"SP"===a("lang")?"EN":"SP"))),l.a.createElement(O.a,null,l.a.createElement(F.a,{onClick:function(e){f(),m("brightness_7"===d?"brightness_2":"brightness_7")}},d))))))))}var D=t(161),W=t(135),q=t(136),L=t(25),M=t(137),H=t(138),U=t(162),V=t(139),G=t(140),J=t(141),Q=t(142),K=t(158),X=t(65),Y=t.n(X),Z=t(63),$=t.n(Z),ee=t(64),ae=t.n(ee),te=t(143),ne=t(144),ie=t(145),le=t(146),oe=t(147),re=t(148),se=t(149),ce=t(150),de=Object(c.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},center:{margin:"auto"},card:{minWidth:e.spacing(50)},avatar:{marginTop:e.spacing(20)},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:"330px",height:"330px",margin:"auto"},divisor:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},iconShare:{marginLeft:"10px"}}}));var me=function(e){var a=e.t,t=de(),n=window.location.href,i="CV Daprotis Martin";return l.a.createElement(x.a,{container:!0,direction:"row-reverse",justify:"space-between",alignItems:"flex-start"},l.a.createElement(x.a,{item:!0,xs:!0,sm:!0},l.a.createElement(u.a,{display:"flex",justifyContent:"center",className:t.avatar},l.a.createElement(N.a,{alt:"Remy Sharp",src:$.a,className:"".concat(t.avatar," ").concat(t.large)}))),l.a.createElement(x.a,{item:!0,xs:!0,sm:!0},l.a.createElement(u.a,{display:"flex",justifyContent:"flex-start",m:1,p:1},l.a.createElement(D.a,{icon:l.a.createElement(Y.a,null),label:a("hi"),color:"primary"})),l.a.createElement(u.a,{display:"flex",justifyContent:"center",m:1,p:1,className:t.card},l.a.createElement(W.a,null,l.a.createElement(q.a,{title:l.a.createElement(L.a,{gutterBottom:!0,variant:"h2",fontWeight:"fontWeightBold"},"Daprotis Mart\xedn")}),l.a.createElement(M.a,null,l.a.createElement(L.a,{className:t.pos,variant:"h4",color:"textSecondary"},a("study.university.degree")),l.a.createElement(L.a,{className:t.pos,variant:"h5",color:"textSecondary"},a("study.university.institution"))),l.a.createElement(M.a,null,l.a.createElement(H.a,{className:t.divisor},l.a.createElement(U.a,null,l.a.createElement(V.a,null,l.a.createElement(N.a,null,l.a.createElement(F.a,null,"calendar_today"))),l.a.createElement(G.a,{primary:a("personal_data.bday"),secondary:a("personal_data.bdate")})),l.a.createElement(J.a,{variant:"inset",component:"li"}),l.a.createElement(U.a,null,l.a.createElement(V.a,null,l.a.createElement(N.a,null,l.a.createElement(F.a,null,"email"))),l.a.createElement(G.a,{primary:"mdaprotis@hotmail.com"})),l.a.createElement(J.a,{variant:"inset",component:"li"}),l.a.createElement(U.a,null,l.a.createElement(V.a,null,l.a.createElement(N.a,null,l.a.createElement(F.a,null,"location_on"))),l.a.createElement(G.a,{primary:a("personal_data.city")+" - ( "+a("personal_data.country")+" )"})))),l.a.createElement(Q.a,{disableSpacing:!0},l.a.createElement(O.a,{"aria-label":"add to favorites",href:"https://www.linkedin.com/in/martin-daprotis/",style:{marginBottom:"5px"}},l.a.createElement("i",{className:"cib-linkedin"})),l.a.createElement(te.a,{url:n,title:i},l.a.createElement(ne.a,{size:32,round:!0})),l.a.createElement(ie.a,{className:t.iconShare,url:n,appId:"521270401588372"},l.a.createElement(le.a,{size:32,round:!0})),l.a.createElement(oe.a,{className:t.iconShare,url:n,quote:i},l.a.createElement(re.a,{size:32,round:!0})),l.a.createElement(se.a,{className:t.iconShare,url:n},l.a.createElement(ce.a,{size:32,round:!0})),l.a.createElement(K.a,{title:"Descargar CV","aria-label":"descargar"},l.a.createElement(O.a,{href:ae.a,target:"_blank"},l.a.createElement(F.a,null,"get_app_icon"))))))))};var ue=function(e){var a=e.t;return l.a.createElement(u.a,null,l.a.createElement(u.a,{display:"flex",justifyContent:"center",m:1,p:1,fontWeight:"fontWeightBold"},l.a.createElement(L.a,{variant:"h4"},a("navbar.about_me")," ")),l.a.createElement(u.a,{display:"flex"},l.a.createElement(u.a,null,a("profile"))))},pe=t(151),be=Object(c.a)({root:function(e){return{height:10,backgroundColor:"#bdbdbd",borderRadius:20}},bar:{borderRadius:20,backgroundColor:function(e){return e.bgColor}}}),ge=Object(c.a)((function(e){return{root:{flexGrow:1},margin:{margin:e.spacing(1)}}}));function ve(e){var a=Object.assign({},e),t=ge(),n=be(a);return l.a.createElement("div",{className:" ".concat(t.root)},l.a.createElement(pe.a,{classes:{root:n.root,bar:n.bar},variant:"determinate",value:a.value}))}var fe=t(8),ye=Object(c.a)({avatar:{color:"#FFFFFF",backgroundColor:function(e){return Object(fe.a)(e.bgColor,.5)}},icon:{color:"#FFFFFF"}});function he(e){var a=Object.assign({},e),t=ye(a),n=a.icon;return l.a.createElement(D.a,{avatar:l.a.createElement(N.a,null,"null"===n?"":""===n?a.title:l.a.createElement("span",{className:n,style:{fontSize:"1.3em",color:"#FFF"}})),label:a.title,clickable:!1,classes:{icon:t.icon,avatar:t.avatar},size:"small",variant:"outlined"})}t(62);var Ee=t(68),ke=Object(c.a)((function(e){return{circular_style:{marginTop:e.spacing(2)},knowledgeSubt:{color:e.palette.text.secondary}}}));function _e(e){var a=e.t,t=e.elems,n=ke();return l.a.createElement("div",{style:{padding:"40px"}},l.a.createElement(x.a,{container:!0,justify:"center"},t.map((function(e,t){return l.a.createElement(x.a,{key:"ps_".concat(t),item:!0,xs:12,sm:6},l.a.createElement(u.a,{display:"flex",justifyContent:"center",style:{width:"50%",margin:"auto"}},l.a.createElement(x.a,{item:!0,className:n.circular_style},l.a.createElement(Ee.a,{value:e.value,text:"".concat(e.value,"%")}))),l.a.createElement(u.a,{display:"flex",justifyContent:"center",m:1,p:1},l.a.createElement(L.a,{varian:"subtitle2",className:n.knowledgeSubt},a("work_translation.".concat(e.title)))))}))))}var we=Object(c.a)((function(e){return{root:{flexGrow:1},item:{color:e.palette.text.primary},knowledgeSubt:{color:e.palette.text.secondary}}}));function Ce(e){var a=e.t,t=we();function n(e){var n=e.items;e.bgColor;return l.a.createElement(l.a.Fragment,null,n.map((function(e,n){return l.a.createElement(x.a,{container:!0,key:e.title,item:!0,style:{marginBottom:"10px",paddingLeft:"15px"}},l.a.createElement(x.a,{item:!0,xs:6,className:t.item},l.a.createElement(he,{title:a(e.title),bgColor:"#dce775",icon:e.icon})),l.a.createElement(x.a,{item:!0,xs:6},l.a.createElement(L.a,{align:"right"},e.value,"%")),l.a.createElement(x.a,{item:!0,xs:12,style:{marginTop:"5px"}},l.a.createElement(ve,{value:e.value,bgColor:"#dce775"})))})))}return l.a.createElement("div",{className:t.root},l.a.createElement(x.a,{container:!0,spacing:3},l.a.createElement(x.a,{item:!0,xs:12,sm:6},l.a.createElement(u.a,{display:"flex",justifyContent:"center",m:1,p:1,fontWeight:"fontWeightBold"},l.a.createElement(L.a,{variant:"h4"},a("work_translation.technical_skills"))),I.knowledge.work_related.map((function(e,i){return l.a.createElement("div",{key:a("work_translation."+e.title)},l.a.createElement(u.a,{display:"flex",justifyContent:"start",m:1,p:1},l.a.createElement(L.a,{varian:"subtitle2",className:t.knowledgeSubt},a("work_translation."+e.title))),l.a.createElement(n,{items:e.list,bgColor:e.bgColor}))}))),l.a.createElement(x.a,{item:!0,xs:12,sm:6},l.a.createElement(x.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},l.a.createElement(u.a,{display:"flex",justifyContent:"center",m:1,p:1,fontWeight:"fontWeightBold"},l.a.createElement(L.a,{variant:"h4"},a("work_translation.professional_skills"))),l.a.createElement(_e,{t:a,elems:I.knowledge.professional_skills.list})))))}var xe=t(159),Se=t(152),je=t(153),Oe=t(69),Ne=t.n(Oe),Fe=Object(c.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,float:"right"},position:{color:e.palette.text.secondary}}}));function Te(e){var a=e.t,t=Fe(),n=l.a.useState(!1),o=Object(s.a)(n,2),r=o[0],c=o[1],d="EN"===Object(i.useContext)(P).lang?A:I,m=function(e){return function(a,t){c(!!t&&e)}};function p(e){var a=e.panel,n=e.place,i=e.from,o=e.until,s=e.pos,c=e.description;return l.a.createElement(xe.a,{expanded:r==="panel"+a,onChange:m("panel"+a)},l.a.createElement(Se.a,{expandIcon:l.a.createElement(Ne.a,null),"aria-controls":"panelbh-content",id:"panelbh-header"},l.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},l.a.createElement(L.a,{className:t.heading,variant:"h6"},n),s?l.a.createElement(u.a,{fontStyle:"oblique",m:1},l.a.createElement(L.a,{variant:"h6",className:t.position},s)):""),l.a.createElement(x.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center"},l.a.createElement(L.a,{className:t.secondaryHeading,display:"block",align:"right"},i," - ",o))),l.a.createElement(je.a,null,l.a.createElement(L.a,{variant:"subtitle1"},c)))}return l.a.createElement("div",{className:t.root},l.a.createElement(u.a,{display:"flex",justifyContent:"center",m:1,p:1,fontWeight:"fontWeightBold"},l.a.createElement(L.a,{variant:"h4"},a("navbar.work"))),d.work.map((function(e,a){return l.a.createElement(p,{key:"work_".concat(a),place:e.place,from:e.from,until:e.until,description:e.description,pos:e.position,panel:a})})))}var Ie=Object(c.a)((function(e){return{topic:{margin:"auto",paddingTop:"100px",paddingBottom:"100px"}}}));var Ae=Object(T.translate)((function(e){var a=e.t,t=Ie(),n=l.a.useState(0),o=Object(s.a)(n,2),r=o[0],c=o[1],p=[Object(i.useRef)(null),Object(i.useRef)(null),Object(i.useRef)(null),Object(i.useRef)(null)];return l.a.createElement(d.a,null,l.a.createElement(z,{t:a,handleClickTab:function(e,a){p[a].current.scrollIntoView({block:"start",behavior:"smooth"}),c(a)},tabValue:r}),l.a.createElement(m.a,null,l.a.createElement(u.a,{justifyContent:"center"},l.a.createElement(u.a,{className:t.topic,ref:p[0]},l.a.createElement(me,{t:a})),l.a.createElement(u.a,{className:t.topic,ref:p[1]},l.a.createElement(ue,{t:a})),l.a.createElement(u.a,{className:t.topic,ref:p[2]},l.a.createElement(Ce,{t:a})),l.a.createElement(u.a,{className:t.topic,ref:p[3]},l.a.createElement(Te,{t:a})))))})),Pe=document.getElementById("root");r.a.render(l.a.createElement((function(){return l.a.createElement(C,null,l.a.createElement(R,null,l.a.createElement(Ae,null)))}),null),Pe)},27:function(e){e.exports=JSON.parse('{"hi":"Hello, I\'m","lang":"EN","navbar":{"title":"My CV","about_me":"About Me","profile":"Profile","knowledge":"Knowledge","work":"Work Experience"},"personal_data":{"name":"Mart\xedn","surname":"Daprotis","dni":32838127,"bdate":"February 16th, 1987","bday":"Birthday","country":"Argentine","city":"Bah\xeda Blanca","contact":{"linkedind":"","phone":"299-4568950","email":"mdaprotis@hotmail.com"}},"profile":" I am a System Engineer graduated from Universidad Nacional del Sur in 2014 familiarized with a variety of programming languages for web-development and embedded systems.\\n I am a Full-Stack developer with 5+ years of experience in both Back-end and Front-end, gathering requirements, designing UI, developing, testing and debugging our Systems.","study":{"primary":{"from":"","until":"","institution":"","title":"","description":"","status":0},"secondary":{"from":"","until":"","institution":"","title":"","description":"","status":0},"university":{"from":"2007","until":"2014","institution":"Universidad Nacional del Sur","degree":"Computer Systems Engineer","description":"","status":1},"courses":[{"from":"","until":"","institution":"","title":"","description":"","status":0}]},"work":[{"from":"2015-01-05","until":"Present","place":"Cooperativa Obrera LTDA","position":"Full-Stack Developer","description":"I am currently working as a Full Stack developer at Cooperativa Obrera LTDA, I frequently work in both front-end and back-end development, deploying web pages for different areas in the company such as HHRR, Accounting, Safety and Health, marketing, logistics, etc. \\n Commonly I begin by gathering the users requirements and helping them realize what they really want, then I list the necessities to prioritize them and start working on it, finally I do the testing and deploy the website. We also take care of the maintenance and client support of those pages.","status":1},{"from":"2014-04-01","until":"2015-01-01","place":"Alas Ingenier\xeda","position":"","description":"In this 6-month project, we migrated the Smart Plant Foundation database from PROFERTIL, it was done with Oracle and some scripts because the system did not have its own tool to do it.","status":1},{"from":"2014-02-01","until":"2014-04-01","place":"MG Consultora","position":"","description":"An embedded system was developed, which allowed the users to improve their cognitive habilities by playing games. The system was developed in Arduino and the the Atmega328 was separated later to make a standalone circuit independent of the Arduino module.","status":1}],"knowledge":{"work_related":[{"title":"web_development","bgColor":"#ef5350","list":[{"title":"JavaScript","icon":"devicons devicons-javascript","value":80},{"title":"React","icon":"cib-react","value":40},{"title":"Jquery","icon":"devicons devicons-jquery","value":80},{"title":"ES6+","icon":"","value":50},{"title":"PHP","icon":"devicons devicons-php","value":90},{"title":"Python","icon":"devicons devicons-python","value":50}]},{"title":"web_design","bgColor":"#cebe32","list":[{"title":"CSS","icon":"devicons devicons-css3","value":60},{"title":"SASS","icon":"devicons devicons-sass","value":40},{"title":"HTML5","icon":"devicons devicons-html5","value":70},{"title":"Bootstrap","icon":"cib-bootstrap ","value":30}]},{"title":"csv","bgColor":"#4db6ac","list":[{"title":"GIT","icon":"devicons devicons-git_branch","value":80}]},{"title":"db","bgColor":"#8bc34a","list":[{"title":"MySQL","icon":"cib-mysql","value":90},{"title":"Oracle","icon":"devicons devicons-database","value":30},{"title":"Informix","icon":"devicons devicons-database","value":70}]},{"title":"embedded_sistems","bgColor":"#3283ce","list":[{"title":"Arduino","icon":"cib-arduino","value":40}]},{"title":"frameworks","bgColor":"#3283ce","list":[{"title":"CodeIgniter","icon":"cib-codeigniter","value":80},{"title":"Redux","icon":"cib-redux ","value":40}]},{"title":"project_managment","bgColor":"#3283ce","list":[{"title":"Agile/SCRUM","icon":"null","value":40}]},{"title":"other_technologies","bgColor":"#3283ce","list":[{"title":"Docker","icon":"cib-docker","value":40}]}],"professional_skills":{"bgColor":"#fba661","list":[{"title":"ps_communication","icon":"","value":80},{"title":"ps_team_work","icon":"","value":90},{"title":"ps_responsability","icon":"","value":100},{"title":"ps_creativity","icon":"","value":70},{"title":"ps_confidentiality","icon":"","value":100},{"title":"ps_pressure","icon":"","value":70},{"title":"ps_adaptability","icon":"","value":90},{"title":"ps_desition_making","icon":"","value":80}]}},"skills":[],"work_translation":{"technical_skills":"Technical Skills","professional_skills":"Professional Skills","web_development":"Web Development","web_design":"Web Design","frameworks":"Frameworks","other_technologies":"Other Technologies","project_managment":"Project Managment","csv":"CVS","db":"DataBase","embedded_sistems":"Embedded Systems","ps_communication":"Communication","ps_team_work":"Team Work","ps_responsability":"Responsability","ps_creativity":"Creativity","ps_confidentiality":"Confidentiality","ps_pressure":"Working Under Pressure","ps_adaptability":"Adaptability","ps_desition_making":"Desition Making"}}')},46:function(e){e.exports=JSON.parse('{"hi":"Hola, soy","lang":"SP","navbar":{"title":"Mi CV","about_me":"Acerca de Mi","profile":"Perfil","knowledge":"Conocimientos","work":"Experiencia Laboral"},"personal_data":{"name":"Mart\xedn","surname":"Daprotis","dni":32838127,"bdate":"16 Feb. 1987","bday":"Fecha de Nacimiento","country":"Argentina","city":"Bah\xeda Blanca","contact":{"linkedind":"","phone":"299-4568950","email":"mdaprotis@hotmail.com"}},"profile":"Soy Ingeniero en Sistemas graduado de la Universidad Nacional del Sur en el a\xf1o 2014, estoy familiarizado con distintos lenguajes de programaci\xf3n tanto de desarrollo web como de sistemas embebidos.\\nActualmente trabajo como Full-Stack developer hace mas de 5 a\xf1os, me desempe\xf1o realizando el an\xe1lisis de requerimientos, dise\xf1ando interfaces de Usuario, desarrollando tanto en Back-end como Front-end y haciendo el testeo y debuggeo de nuestros sistemas.","study":{"primary":{"from":"","until":"","institution":"","title":"","description":"","status":0},"secondary":{"from":"","until":"","institution":"","title":"","description":"","status":0},"university":{"from":"2007","until":"2014","institution":"Universidad Nacional del Sur","degree":"Ing. en Sistemas de Computaci\xf3n","description":"Ingenieria en ciencias de la computaci\xf3n orientada tanto en electr\xf3nica como en el area de computaci\xf3n.","status":1},"courses":[{"from":"","until":"","institution":"","title":"","description":"","status":0}]},"work":[{"from":"2015-01-05","until":"Presente","place":"Cooperativa Obrera LTDA","position":"Full-Stack Developer","description":"Actualmente estoy trabajando como Full Stack developer en Cooperativa Obrera LTDA, normalmente me dedico a hacer los sistema de forma integral, tanto la parte del front-end  como del back-end, realizando los sistemas que se utilizan en las distintas \xe1reas de la empresa como RRHH, el \xc1rea de Contadur\xeda, Seguridad e Higiene, Comercializaci\xf3n, Log\xedstica entre otros. \\n     Com\xfanmente comienzo recabando la informaci\xf3n necesaria de los requerimientos del sistema y ayudando a los futuros usuarios a darse una idea de lo que realmente est\xe1n solicitando. Luego listo las necesidades para priorizarlas y comenzar el desarrollo, esto lo hacemos tambi\xe9n con la practica de desarrollo \xc1gil, lo cual nos permite tener un seguimiento continuo y los usuarios pueden ver el avance que se lleva a cabo de forma constante. Finalmente se realizan los testeos y se pone en producci\xf3n el sistema. Tambi\xe9n cabe destacar que realizamos el mantenimiento y soporte de aquellos sistemas que desarrollamos.","status":1},{"from":"2014-04-01","until":"2015-01-01","place":"Alas Ingenier\xeda","position":"","description":"En este proyecto de 6 meses se realiz\xf3 la migraci\xf3n de la Base de Datos de Smart Plant Foundation para la Empresa PORFERTIL, se llevo a cabo haciendo uso de scripts y la base de datos ORACLE dado que no contaba con una herramienta propia para hacerlo.","status":1},{"from":"2014-02-01","until":"2014-04-01","place":"MG Consultora","position":"","description":"Se desarrollo un sistema embebido el cual permiti\xf3 mejorar las habilidades cognitivas de los usuarios de forma l\xfadica. El sistema fue desarrollado en Arduino y luego se imprimi\xf3 el circuito posteriormente a separar el Atmega328  para que funcione independiente del modulo de Arduino.","status":1}],"knowledge":{"work_related":[{"title":"web_development","color":"#ef5350","list":[{"title":"JavaScript","icon":"devicons devicons-javascript","value":80},{"title":"React","icon":"cib-react","value":40},{"title":"Jquery","icon":"devicons devicons-jquery","value":80},{"title":"ES6+","icon":"","value":50},{"title":"PHP","icon":"devicons devicons-php","value":90},{"title":"Python","icon":"devicons devicons-python","value":50}]},{"title":"web_design","color":"#cebe32","list":[{"title":"CSS","icon":"devicons devicons-css3","value":60},{"title":"SASS","icon":"devicons devicons-sass","value":40},{"title":"HTML5","icon":"devicons devicons-html5","value":70},{"title":"Bootstrap","icon":"cib-bootstrap ","value":30}]},{"title":"csv","color":"#4db6ac","list":[{"title":"GIT","icon":"devicons devicons-git_branch","value":80}]},{"title":"db","color":"#8bc34a","list":[{"title":"MySQL","icon":"cib-mysql","value":90},{"title":"Oracle","icon":"devicons devicons-database","value":30},{"title":"Informix","icon":"devicons devicons-database","value":70}]},{"title":"embedded_sistems","color":"#3283ce","list":[{"title":"Arduino","icon":"cib-arduino","value":40}]},{"title":"frameworks","bgColor":"#3283ce","list":[{"title":"CodeIgniter","icon":"cib-codeigniter ","value":80},{"title":"Redux","icon":"cib-redux ","value":40}]},{"title":"project_managment","bgColor":"#3283ce","list":[{"title":"Agile/SCRUM","icon":"null","value":40}]},{"title":"other_technologies","bgColor":"#3283ce","list":[{"title":"Docker","icon":"cib-docker","value":40}]}],"professional_skills":{"bgColor":"#fba661","list":[{"title":"ps_communication","icon":"","value":80},{"title":"ps_team_work","icon":"","value":90},{"title":"ps_responsability","icon":"","value":100},{"title":"ps_creativity","icon":"","value":70},{"title":"ps_confidentiality","icon":"","value":100},{"title":"ps_pressure","icon":"","value":70},{"title":"ps_adaptability","icon":"","value":90},{"title":"ps_desition_making","icon":"","value":80}]}},"skills":[],"work_translation":{"technical_skills":"Habilidades T\xe9cnicas","professional_skills":"Habilidades Profesionales","web_development":"Desarrollo Web","web_design":"Dise\xf1o Web","frameworks":"Frameworks","other_technologies":"Otras Tecnolog\xedas","project_managment":"Gestion de Proyectos","csv":"CVS","db":"Base de Datos","embedded_sistems":"Sistemas Embebidos","ps_communication":"Comunicaci\xf3n","ps_team_work":"Trabajo en Equipo","ps_responsability":"Responsabilidad","ps_creativity":"Creatividad","ps_confidentiality":"Confiabilidad","ps_pressure":"Trabajo bajo presi\xf3n","ps_adaptability":"Adaptabilidad","ps_desition_making":"Toma de Decisiones"}}')},63:function(e,a,t){e.exports=t.p+"static/media/pic4.f374d503.png"},64:function(e,a,t){e.exports=t.p+"static/media/cv.3c0c3a3a.pdf"},78:function(e,a,t){e.exports=t(103)}},[[78,1,2]]]);
//# sourceMappingURL=main.b2c53bc7.chunk.js.map