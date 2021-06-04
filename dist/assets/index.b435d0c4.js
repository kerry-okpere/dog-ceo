import{r as e,a as t,b as l,o as a,c as s,d as n,e as r,t as o,f as d,g as c,h as u,i,j as g,k as m,p,l as h,m as v,u as y,n as b,w as f,q as _,F as x,s as w,v as k,x as S,y as B,z as C,A as z,B as T,C as V,D as E,E as M,G as I,H as L,I as q,T as P,J as A}from"./vendor.cae0d1db.js";const $={components:{"info-icon":e,"err-icon":t,"success-icon":l},props:{title:{type:String,reauired:!0},variant:{type:String,default:"warning",validator:function(e){return-1!==["success","warning","error"].indexOf(e)}}}},D={class:"text-sm"};$.render=function(e,t,l,c,u,i){const g=d("success-icon"),m=d("err-icon"),p=d("info-icon");return a(),s("div",{class:["flex py-4 px-12 justify-center space-x-6 items-center max-w-7xl rounded-sm","success"===l.variant?"bg-green-100":"error"===l.variant?"bg-red-100":"bg-yellow-100"]},[n("span",{class:["h-6 w-8 sm:w-8 md:w-6 self-center","success"===l.variant?"text-green-600":"error"===l.variant?"text-red-600":"text-yellow-600"]},[r(e.$slots,"default",{},(()=>["success"===l.variant?(a(),s(g,{key:0})):"error"===l.variant?(a(),s(m,{key:1})):(a(),s(p,{key:2}))]))],2),n("p",D,o(l.title),1)],2)};const O={},j={class:"my-16 text-center"},H=n("div",{class:"my-4 mx-auto animate-zoom h-32 w-32 bg-blue-500 bg-opacity-50 rounded-full flex items-center justify-center"},[n("span",{class:"text-7xl"},"🐶")],-1),K=c("Loading...");O.render=function(e,t,l,o,d,c){return a(),s("div",j,[H,n("p",null,[r(e.$slots,"default",{},(()=>[K]))])])};const F={props:{lazy:{type:Boolean,default:!0},img:{type:String,required:!0},alt:{type:String},isClickable:{type:Boolean,default:!0},size:{type:String,default:"medium",validator:function(e){return-1!==["small","medium"].indexOf(e)}}},emits:["click"],setup(e,{emit:t}){const l=y(),a=u(null),s=u(!1),n=u({});b();const r=i((()=>s.value?e.img:""));g((()=>{if(n.value=(e=>{let t=e.split("breeds/")[1].split("/")[0].split("-"),l=t.length>1&&t[1];return{breed:t[0],subBreed:l}})(e.img),e.lazy){new IntersectionObserver(o).observe(a.value)}else s.value=!0})),m((()=>{}));const o=e=>{e[0].isIntersecting&&(s.value=!0)};return{navigate:()=>{if(e.isClickable){let t={breed:n.value.breed,img:e.img};n.subBreed&&(t.subBreed=n.value.subBreed),l.push({name:"dog",params:{id:"profile"},query:t})}t("click")},image:a,imgSrc:r,info:n}}},U=f();p("data-v-de3cd0e4");const W={class:"card__title"},G={key:0};h();const J=U(((e,t,l,r,d,c)=>(a(),s("figure",{onClick:t[1]||(t[1]=(...e)=>r.navigate&&r.navigate(...e)),class:["card","small"===l.size?"card__small":"card__medium"]},[n("div",{class:["card__content",{"animate-pulse":!r.imgSrc}]},[n("img",{class:"card__content-img",src:r.imgSrc,alt:l.alt,loading:"lazy",ref:"image",height:"100",width:"1000"},null,8,["src","alt"])],2),n("figcaption",W,[n("p",{class:l.isClickable?"text-blue-500":"text-gray-600"},[r.info.breed?(a(),s("span",G,o(r.info.breed),1)):v("",!0)],2)])],2))));F.render=J,F.__scopeId="data-v-de3cd0e4";const N={components:{SearchIcon:_},props:{modelValue:{type:String,required:!0},placeholder:{type:String,default:"Search Dogs"}},emits:["update:modelValue"]},Y={class:"inline-flex border border-gray-200 rounded-sm h-12 space-x-2 items-center px-3"};N.render=function(e,t,l,r,o,c){const u=d("search-icon");return a(),s("span",Y,[n("input",{type:"search",value:l.modelValue,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value)),placeholder:l.placeholder,class:"h-full outline-none"},null,40,["value","placeholder"]),n(u,{class:"h-5 w-5 text-gray-400"})])};const Q={props:{placeholder:{type:String,default:"Select..."},options:{type:Array},title:{type:String},modelValue:{type:String,required:!0},err:{type:String}}},R={class:"border relative inline-block w-48 px-3 pb-2 pt-1 rounded-sm"},X={class:"mx-3 text-xs text-gray-400"},Z={key:0,value:"null"},ee={class:"text-xs absolute -bottom-2 text-yellow-300"};Q.render=function(e,t,l,r,d,c){return a(),s("fieldset",R,[n("legend",X,o(l.title),1),n("select",{class:"h-full w-full outline-none",value:l.modelValue,onInput:t[1]||(t[1]=t=>e.$emit("update:modelValue",t.target.value))},[l.placeholder?(a(),s("option",Z,o(l.placeholder),1)):v("",!0),(a(!0),s(x,null,w(l.options,((t,l)=>(a(),s("option",{key:l,value:t,onClick:l=>e.$emit("select",t)},o(t),9,["value","onClick"])))),128))],40,["value"]),n("p",ee,o(l.err),1)])};const te={emits:["click"],props:{shape:{type:String,default:"square",validator:function(e){return-1!==["square","circle"].indexOf(e)}}}},le=c(" Button ");te.render=function(e,t,l,n,o,d){return a(),s("button",{class:["bg-blue-600 hover:bg-blue-700 transition-colors text-white","circle"===l.shape?"rounded-full p-3":"rounded-sm py-3 px-4"],onClick:t[1]||(t[1]=t=>e.$emit("click"))},[r(e.$slots,"default",{},(()=>[le]))],2)};const ae={props:{width:{type:String,default:"200px"},height:{type:String,default:"200px"}}},se=n("g",null,[n("g",null,[n("path",{d:"M478.775,203.031L252.504,2.085c-3.127-2.78-7.84-2.78-10.967,0L15.266,203.031c-0.039,0.039-0.077,0.072-0.116,0.11\r\n\t\t\tc-5.858,5.406-7.746,13.769-4.801,21.295c2.973,7.586,9.91,12.299,18.113,12.299h5.505c14.782,0,29.371-5.368,41.158-15.2\r\n\t\t\tL247.037,74.184l172.527,147.423c11.704,9.755,26.288,15.129,41.07,15.129h5.505c8.071,0,15.123-4.96,17.959-12.64\r\n\t\t\tC486.917,216.481,484.781,208.179,478.775,203.031z M468.617,218.364c-0.204,0.562-0.859,1.855-2.472,1.855h-5.505\r\n\t\t\tc-10.923,0-21.757-4.013-30.417-11.231L252.399,57.04c-1.547-1.321-3.457-1.982-5.368-1.982c-1.916,0-3.832,0.666-5.373,1.993\r\n\t\t\tL64.468,208.922c-8.743,7.284-19.577,11.297-30.5,11.297h-5.505c-1.343,0-2.257-0.606-2.72-1.795\r\n\t\t\tc-0.176-0.44-0.633-1.949,0.578-3.111L247.031,19.312l220.892,196.168C468.81,216.239,469.047,217.208,468.617,218.364z"})])],-1),ne=n("g",null,[n("g",null,[n("path",{d:"M412.193,198.198c-4.558,0-8.258,3.694-8.258,8.258v289.032H90.128V206.456c0-4.564-3.694-8.258-8.258-8.258\r\n\t\t\tc-4.564,0-8.258,3.694-8.258,8.258v297.29c0,4.558,3.694,8.258,8.258,8.258h330.323c4.558,0,8.258-3.7,8.258-8.258v-297.29\r\n\t\t\tC420.451,201.892,416.751,198.198,412.193,198.198z"})])],-1),re=n("g",null,[n("g",null,[n("path",{d:"M247.031,275.273c-50.088,0-90.839,40.751-90.839,90.839v137.634c0,4.558,3.694,8.258,8.258,8.258\r\n\t\t\tc4.564,0,8.258-3.7,8.258-8.258V366.112c0-40.982,33.341-74.323,74.323-74.323c40.982,0,74.323,33.341,74.323,74.323v137.634\r\n\t\t\tc0,4.558,3.7,8.258,8.258,8.258s8.258-3.7,8.258-8.258V366.112C337.87,316.024,297.119,275.273,247.031,275.273z"})])],-1),oe=n("g",null,[n("g",null,[n("path",{d:"M497.779,458.69c-3.138-1.244-6.766-0.413-9.1,2.042c-0.275,0.292-6.997,7.229-20.887,7.229\r\n\t\t\tc-14.127,0-21.867-7.146-22.291-7.553c-2.356-2.312-5.88-3-8.941-1.729c-3.089,1.283-5.098,4.294-5.098,7.63v37.437\r\n\t\t\tc0,4.558,3.7,8.258,8.258,8.258h55.054c4.558,0,8.258-3.7,8.253-8.253v-37.437C503.026,462.935,500.917,459.945,497.779,458.69z\r\n\t\t\t M486.515,495.488h-38.538h-0.005v-14.716c5.252,2.076,11.897,3.705,19.819,3.705c7.515,0,13.758-1.464,18.724-3.408V495.488z"})])],-1),de=n("g",null,[n("g",null,[n("path",{d:"M247.031,165.165c-19.731,0-35.785,16.054-35.785,35.785s16.054,35.785,35.785,35.785s35.785-16.054,35.785-35.785\r\n\t\t\tS266.763,165.165,247.031,165.165z M247.031,220.219c-10.625,0-19.269-8.643-19.269-19.269s8.643-19.269,19.269-19.269\r\n\t\t\tc10.62,0,19.269,8.643,19.269,19.269S257.657,220.219,247.031,220.219z"})])],-1),ce=n("g",null,[n("g",null,[n("path",{d:"M233.268,137.639c-12.145,0-22.022,9.877-22.022,22.021c0,12.145,9.877,22.022,22.022,22.022\r\n\t\t\tc12.139,0,22.021-9.877,22.021-22.022C255.289,147.515,245.413,137.639,233.268,137.639z M233.268,165.165\r\n\t\t\tc-3.034,0-5.505-2.472-5.505-5.505c0-3.033,2.472-5.505,5.505-5.505c3.033,0,5.505,2.472,5.505,5.505\r\n\t\t\tC238.773,162.694,236.301,165.165,233.268,165.165z"})])],-1),ue=n("g",null,[n("g",null,[n("path",{d:"M260.795,137.639c-12.145,0-22.021,9.877-22.021,22.021c0,12.145,9.877,22.022,22.021,22.022\r\n\t\t\tc12.145,0,22.021-9.877,22.021-22.022C282.816,147.515,272.94,137.639,260.795,137.639z M260.795,165.165\r\n\t\t\tc-3.033,0-5.505-2.472-5.505-5.505c0-3.033,2.472-5.505,5.505-5.505s5.505,2.472,5.505,5.505\r\n\t\t\tC266.3,162.694,263.828,165.165,260.795,165.165z"})])],-1),ie=n("g",null,[n("g",null,[n("path",{d:"M288.322,165.165c-12.145,0-22.021,9.877-22.021,22.021c0,12.145,9.877,22.021,22.021,22.021\r\n\t\t\tc12.145,0,22.022-9.877,22.022-22.021S300.467,165.165,288.322,165.165z M288.322,192.692c-3.039,0-5.505-2.472-5.505-5.505\r\n\t\t\ts2.466-5.505,5.505-5.505c3.034,0,5.505,2.472,5.505,5.505S291.361,192.692,288.322,192.692z"})])],-1),ge=n("g",null,[n("g",null,[n("path",{d:"M136.924,220.219c-4.564,0-8.258,3.694-8.258,8.258v55.054c0,4.558,3.694,8.258,8.258,8.258\r\n\t\t\tc4.558,0,8.258-3.7,8.258-8.258v-55.054C145.182,223.913,141.488,220.219,136.924,220.219z"})])],-1),me=n("g",null,[n("g",null,[n("path",{d:"M109.397,302.8c-4.564,0-8.258,3.7-8.258,8.258v165.161c0,4.558,3.694,8.258,8.258,8.258c4.558,0,8.258-3.7,8.258-8.258\r\n\t\t\tV311.058C117.655,306.499,113.961,302.8,109.397,302.8z"})])],-1),pe=n("g",null,[n("g",null,[n("path",{d:"M357.139,220.219c-4.558,0-8.258,3.694-8.258,8.258v110.107c0,4.558,3.7,8.258,8.258,8.258c4.558,0,8.258-3.7,8.258-8.258\r\n\t\t\tV228.477C365.397,223.913,361.697,220.219,357.139,220.219z"})])],-1),he=n("g",null,[n("g",null,[n("path",{d:"M384.666,385.38c-4.558,0-8.258,3.7-8.258,8.258v82.581c0,4.558,3.7,8.258,8.258,8.258c4.558,0,8.258-3.7,8.258-8.258\r\n\t\t\tv-82.581C392.924,389.08,389.224,385.38,384.666,385.38z"})])],-1),ve=n("g",null,null,-1),ye=n("g",null,null,-1),be=n("g",null,null,-1),fe=n("g",null,null,-1),_e=n("g",null,null,-1),xe=n("g",null,null,-1),we=n("g",null,null,-1),ke=n("g",null,null,-1),Se=n("g",null,null,-1),Be=n("g",null,null,-1),Ce=n("g",null,null,-1),ze=n("g",null,null,-1),Te=n("g",null,null,-1),Ve=n("g",null,null,-1),Ee=n("g",null,null,-1);ae.render=function(e,t,l,n,r,o){return a(),s("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:l.width,height:l.height,"xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.004 512.004",style:{"enable-background":"new 0 0 512.004 512.004"},"xml:space":"preserve"},[se,ne,re,oe,de,ce,ue,ie,ge,me,pe,he,ve,ye,be,fe,_e,xe,we,ke,Se,Be,Ce,ze,Te,Ve,Ee],8,["width","height"])};const Me={},Ie={class:"px-4 py-2 my-4 bg-blue-50 bg-opacity-50 rounded-md shadow-lg inline-block text-xs"},Le=n("p",null,[c("Made by "),n("span",{class:"text-blue-500"},"Kerry"),c(" with 💚")],-1);Me.render=function(e,t){return a(),s("div",Ie,[Le])};const qe=f();p("data-v-3c28e64a");const Pe={class:"home"},Ae={class:"home__header"},$e={class:"home__header-search"},De=c("Search"),Oe={class:"home__header-select"},je=n("p",null,"Sort By:",-1),He={key:0,class:"home__body-err"},Ke={key:1,class:"home__body"},Fe={class:"home__body-refresh"},Ue={class:"home__body-info"},We=n("p",null,"All Dogs",-1),Ge={class:"text-gray-500 text-xs"},Je=n("p",{class:"home__body-loading-txt"},"Loading all you favorite dog images🐩...",-1),Ne={key:1},Ye={key:0,class:"home__body-dogs"},Qe={key:1,class:"home__body-empty"},Re=n("p",null,"Oops, we couldn't find you any dog.",-1),Xe={class:"text-center pt-5"};h();const Ze={expose:[],setup(e){const t=b(),l=u(!1),r=u(!1),d=u(""),c=u(""),m=u(""),p=u([]);i((()=>t.state.breed.dogs)),i((()=>t.state.subBreed.dogs));const h=i({get:()=>Object.keys(t.state.breedList),set:e=>Object.keys(e)}),v=i((()=>t.state.breedList[c.value]));k((()=>{t.state.hasFetched?(p.value=t.state.dogs,h.value=t.state.breedList):_()})),g((()=>{t.state.breed.name="",t.state.breed.dogs=[]}));const y=()=>{t.state.breed.name!==d.value&&(r.value={},h.value.includes(d.value)?(c.value=d.value,T(d.value)):(p.value=[],r.value={show:!0,msg:"We couldn't find any dog under this breed, Please try again."}))},f=()=>{_(),d.value="",c.value=m.value="",t.state.breed=t.state.subBreed={name:"",dogs:[]}},_=()=>{l.value=!0,Promise.all([z("fetchDogs"),z("fetchBreed")]).finally((()=>{l.value=!1,t.commit("SET_STATES",{key:"hasFetched",payload:!0})}))},z=(e,l)=>(r.value={},new Promise(((a,s)=>{t.dispatch(e,l).then((l=>{"fetchDogs"==e&&(p.value=t.state.dogs),"fetchByBreed"==e&&(p.value=t.state.breed.dogs),"fetchBySubBreed"==e&&(p.value=t.state.subBreed.dogs),a()})).catch((e=>{r.value={show:!0,msg:"We encountered an issue while fetch the data, Please try again later."},s()}))}))),T=async e=>{c.value=e,l.value=!0,z("fetchByBreed",{breed:c.value,length:100}).then((()=>l.value=!1))},V=async e=>{m.value=e,l.value=!0,z("fetchBySubBreed",{breed:c.value,subBreed:e}).then((()=>l.value=!1))};return(e,t)=>(a(),s("div",Pe,[n("header",Ae,[n("div",$e,[n(N,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=e=>d.value=e),onKeydown:S(y,["enter"])},null,8,["modelValue","onKeydown"]),n(te,{onClick:t[2]||(t[2]=e=>y(d.value))},{default:qe((()=>[De])),_:1})]),n("div",Oe,[je,n("div",null,[n(Q,{modelValue:c.value,"onUpdate:modelValue":T,options:B(h),title:"Breed",class:"home__header-selector"},null,8,["modelValue","options"]),n(Q,{err:B(v)&&B(v).length?"":"No sub breed available",modelValue:m.value,"onUpdate:modelValue":V,options:B(v),title:"Sub Breed",class:"home__header-selector"},null,8,["err","modelValue","options"])])])]),n($,{class:"home__alert",title:"Kindly note that this API can only display a maximum of 50 random pictures at a time, It can display up to 100 Dog Images when you query by breed."}),r.value.show?(a(),s("div",He,[n($,{class:"home__alert",variant:"error",title:r.value.msg},null,8,["title"])])):(a(),s("section",Ke,[n("div",null,[n("div",Fe,[n(te,{class:"home__body-refresh-icon",shape:"circle",onClick:f},{default:qe((()=>[n(B(C))])),_:1})]),n("div",Ue,[We,n("p",Ge,o(p.value.length)+" Dogs",1)]),l.value?(a(),s(O,{key:0,class:"home__body-loading"},{default:qe((()=>[Je])),_:1})):(a(),s("div",Ne,[p.value.length?(a(),s("div",Ye,[(a(!0),s(x,null,w(p.value,((e,t)=>(a(),s(F,{img:e.url,alt:e.altText,key:t},null,8,["img","alt"])))),128))])):(a(),s("div",Qe,[n(ae,{class:"home__body-empty-icon"}),Re]))]))])])),n("div",Xe,[n(Me)])]))},__scopeId:"data-v-3c28e64a"};const et={components:{Loading:O,ArrowLeftIcon:z,Alert:$,Card:F},setup(){const e=T(),t=u(!1),l=u({}),a=b(),s=u(!1),n=u([]);u([]);const r=i((()=>e.query.breed)),o=i((()=>e.query.img)),d=i((()=>{let t=[{name:"Breed",category:e.query.breed}];return e.query.subBreed&&t.push({name:"Sub Breed",category:e.query.subBreed}),t}));k((()=>{a.state.breed.name!==e.query.breed?c("fetchByBreed",{breed:e.query.breed,length:5}).then((()=>t.value=!1)):n.value=a.state.breed.dogs.slice(0,5)}));const c=(e,t)=>(l.value={},new Promise(((s,r)=>{a.dispatch(e,t).then((t=>{"fetchDogs"==e&&(n.value=a.state.dogs),"fetchByBreed"==e&&(n.value=a.state.breed.dogs),"fetchBySubBreed"==e&&(n.value=a.state.subBreed.dogs),s()})).catch((e=>{l.value={show:!0,msg:"We encountered an issue while fetch the data, Please try again later."},r()}))})));return{loading:t,isError:l,img:o,dogs:n,info:d,breed:r,isEmpty:s}}},tt=f();p("data-v-80490cfa");const lt={class:"dog "},at={class:"dog__nav"},st=n("span",null,"Go Back",-1),nt=n("h1",{class:"dog__nav-title"},"Dog Page",-1),rt={key:0},ot={key:1,class:"dog__detail"},dt={class:"dog__detail-info"},ct=n("div",{class:"dog__detail-label"},[n("span",null,"🐾")],-1),ut={class:"dog__detail-heading"},it={class:"dog__detail-breed"},gt={class:"dog__others"},mt=c(" Loading similar breeds... "),pt={key:1},ht=n("p",{class:"dog__others-heading"},"You might also like:",-1),vt={key:0,class:"dog__others-cardGroup"},yt={key:1};h();const bt=tt(((e,t,l,r,c,u)=>{const i=d("arrow-left-icon"),g=d("router-link"),m=d("alert"),p=d("Loading"),h=d("Card");return a(),s("div",lt,[n("header",null,[n("nav",at,[n(g,{to:"/",class:"dog__nav-link"},{default:tt((()=>[n(i,{class:"dog__nav-icon"}),st])),_:1}),nt])]),n(m,{class:"dog__alert",title:"Please note that this API does not support querying by a specific dog Id. The only information it retrieves is the dog breed name or dog Image."}),r.isError.show?(a(),s("div",rt,[n(m,{class:"dog__alert",variant:"error",title:r.isError.msg},null,8,["title"])])):(a(),s("section",ot,[n("div",dt,[n("img",{class:"dog__detail-img",src:r.img,alt:"breed dog",width:"300"},null,8,["src"]),n("div",null,[n("p",null,"Hi i am a "+o(r.breed)+" dog. Know more about me:",1),(a(!0),s(x,null,w(r.info,((e,t)=>(a(),s("div",{class:"dog__detail-item",key:t},[ct,n("div",null,[n("p",ut,o(e.name),1),n("p",it,o(e.category),1)])])))),128))])]),n("div",gt,[r.loading?(a(),s(p,{key:0},{default:tt((()=>[mt])),_:1})):(a(),s("div",pt,[ht,r.isEmpty?(a(),s("div",yt," We don't have any dogs under this breed ")):(a(),s("div",vt,[(a(!0),s(x,null,w(r.dogs,((e,t)=>(a(),s(h,{class:"dog__others-card",size:"small",lazy:!1,isClickable:!1,info:{breed:e.altText},img:e.url,alt:e.altText,key:t},null,8,["info","img","alt"])))),128))]))]))])]))])}));et.render=bt,et.__scopeId="data-v-80490cfa";const ft={components:{Empty:ae}},_t={class:"h-screen flex flex-col items-center justify-center"},xt=n("h1",{class:"text-3xl text-blue-500 mt-6"},"404",-1),wt=n("p",null,"Page not found.",-1);ft.render=function(e,t,l,r,o,c){const u=d("empty");return a(),s("div",_t,[n(u),xt,wt])};const kt=[{path:"/",name:"Home",component:Ze},{path:"/dog/:id",name:"dog",component:et},{path:"/:afterUser(.*)",component:ft}],St=V({history:E(),routes:kt});var Bt=M({state:()=>({hasFetched:!1,dogs:[],breed:{name:"",dogs:[]},subBreed:{name:"",dogs:[]},breedList:[]}),mutations:{SET_STATES(e,t){const{key:l,payload:a}=t;e[l]=a}},actions:{fetchDogs:({commit:e},t)=>new Promise(((t,l)=>{I.get("https://dog.ceo/api/breeds/image/random/100/alt").then((l=>{e("SET_STATES",{key:"dogs",payload:l.data.message}),t(l)})).catch((e=>{l(e)}))})),fetchBreed:({commit:e},t)=>new Promise(((t,l)=>{I.get("https://dog.ceo/api/breeds/list/all").then((l=>{e("SET_STATES",{key:"breedList",payload:l.data.message}),t(l)})).catch((e=>{l(e)}))})),fetchByBreed:({commit:e,state:t},l)=>new Promise(((t,a)=>{I.get(`https://dog.ceo/api/breed/${l.breed}/images/random/${l.length}/alt`).then((a=>{e("SET_STATES",{key:"breed",payload:{name:l.breed,dogs:a.data.message}}),t(a)})).catch((e=>{a(e)}))})),fetchBySubBreed:({commit:e,state:t},l)=>new Promise(((t,a)=>{I.get(`https://dog.ceo/api/breed/${l.breed}/${l.subBreed}/images/random/100/alt`).then((a=>{e("SET_STATES",{key:"subBreed",payload:{name:l.subBreed,dogs:a.data.message}}),t(a)})).catch((e=>{a(e)}))}))},modules:{}});const Ct=f(),zt={expose:[],setup(e){const t=u(""),l=T();return L((()=>l.name),((e,l)=>{"dog"===l?t.value="slideIn":"Home"===l&&(t.value="slideOut")})),(e,l)=>{const r=d("router-view");return a(),s(r,null,{default:Ct((({Component:e})=>[n(P,{mode:"out-in",name:t.value},{default:Ct((()=>[(a(),s(q(e)))])),_:2},1032,["name"])])),_:1})}},__scopeId:"data-v-6d2d4bff"};A(zt).use(St).use(Bt).mount("#app");