"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[509],{613:(e,a,s)=>{s.d(a,{Z:()=>c});const r=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var t=s(184);const c=()=>(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})},851:(e,a,s)=>{s.r(a),s.d(a,{default:()=>w});var r=s(791),t=s(270),c=s(394),n=s(613),i=s(557),l=s(87);const o=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var d=s(184);const h=e=>{let{char:a}=e;const{name:s,description:r,thumbnail:t,wiki:c}=a;let n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(n={objectFit:"contain"}),(0,d.jsxs)("div",{className:"randomchar__block",children:[(0,d.jsx)("img",{src:t,alt:"Random character",className:"randomchar__img",style:n}),(0,d.jsxs)("div",{className:"randomchar__info",children:[(0,d.jsx)("p",{className:"randomchar__name",children:s}),(0,d.jsx)("p",{className:"randomchar__descr",children:r}),(0,d.jsxs)("div",{className:"randomchar__btns",children:[(0,d.jsx)(l.rU,{to:"/characters/".concat(a.id),className:"button button__main",children:(0,d.jsx)("div",{className:"inner",children:"homepage"})}),(0,d.jsx)("a",{href:c,className:"button button__secondary",children:(0,d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},m=()=>{const[e,a]=(0,r.useState)(null),{loading:s,error:t,getCharacter:l,clearError:m}=(0,i.Z)();(0,r.useEffect)((()=>{p();const e=setInterval(p,6e5);return()=>{clearInterval(e)}}),[]);const u=e=>{a(e)},p=()=>{m();const e=Math.floor(400*Math.random())+1011e3;l(e).then(u)},j=t?(0,d.jsx)(n.Z,{}):null,_=s?(0,d.jsx)(c.Z,{}):null,x=s||t||!e?null:(0,d.jsx)(h,{char:e});return(0,d.jsxs)("div",{className:"randomchar",children:[j,_,x,(0,d.jsxs)("div",{className:"randomchar__static",children:[(0,d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,d.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,d.jsx)("button",{onClick:p,className:"button button__main",children:(0,d.jsx)("div",{className:"inner",children:"try it"})}),(0,d.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})};var u=s(983),p=s(255);const j=e=>{const[a,s]=(0,r.useState)([]),[t,l]=(0,r.useState)(!1),[o,h]=(0,r.useState)(210),[m,j]=(0,r.useState)(!1),{loading:_,error:x,getAllCharacters:b}=(0,i.Z)();(0,r.useEffect)((()=>{v(o,!0)}),[]);const v=(e,a)=>{l(!a),b(e).then(g)},g=async e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),l((e=>!1)),h((e=>e+9)),j((e=>a))},N=(0,r.useRef)([]),f=e=>{N.current.forEach((e=>e.classList.remove("char__item_selected"))),N.current[e].classList.add("char__item_selected"),N.current[e].focus()};const y=function(a){const s=a.map(((a,s)=>{let r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(r={objectFit:"unset"}),(0,d.jsx)(u.Z,{timeout:500,classNames:"char__item",children:(0,d.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>N.current[s]=e,onClick:()=>{e.onCharSelected(a.id),f(s)},onKeyPress:r=>{" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(a.id),f(s))},children:[(0,d.jsx)("img",{src:a.thumbnail,alt:a.name,style:r}),(0,d.jsx)("div",{className:"char__name",children:a.name})]},a.id)})}));return(0,d.jsx)("ul",{className:"char__grid",children:(0,d.jsx)(p.Z,{component:null,children:s})})}(a),k=x?(0,d.jsx)(n.Z,{}):null,w=_&&!t?(0,d.jsx)(c.Z,{}):null;return(0,d.jsxs)("div",{className:"char__list",children:[k,w,y,(0,d.jsx)("button",{className:"button button__main button__long",disabled:t,style:{display:m?"none":"block"},onClick:()=>v(o),children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},_=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,d.jsxs)("div",{className:"skeleton",children:[(0,d.jsxs)("div",{className:"pulse skeleton__header",children:[(0,d.jsx)("div",{className:"pulse skeleton__circle"}),(0,d.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,d.jsx)("div",{className:"pulse skeleton__block"}),(0,d.jsx)("div",{className:"pulse skeleton__block"}),(0,d.jsx)("div",{className:"pulse skeleton__block"})]})]}),x=e=>{let{char:a}=e;const{name:s,description:r,thumbnail:t,wiki:c,comics:n}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t&&(i={objectFit:"contain"}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"char__basics",children:[(0,d.jsx)("img",{style:i,src:t,alt:s}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"char__info-name",children:s}),(0,d.jsxs)("div",{className:"char__btns",children:[(0,d.jsx)(l.rU,{to:"/characters/".concat(a.id),className:"button button__main",children:(0,d.jsx)("div",{className:"inner",children:"homepage"})}),(0,d.jsx)("a",{href:c,className:"button button__secondary",children:(0,d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,d.jsx)("div",{className:"char__descr",children:r}),(0,d.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,d.jsxs)("ul",{className:"char__comics-list",children:[n.length>0?null:"There are no comics with this character",n.map(((e,a)=>{if(!(a>9))return(0,d.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},b=e=>{const[a,s]=(0,r.useState)(null),{loading:t,error:l,clearError:o,getCharacter:h}=(0,i.Z)();(0,r.useEffect)((()=>{m()}),[e.charId]);const m=()=>{const{charId:a}=e;a&&(o(),h(a).then(u))},u=e=>{s(e)},p=a||t||l?null:(0,d.jsx)(_,{}),j=l?(0,d.jsx)(n.Z,{}):null,b=t?(0,d.jsx)(c.Z,{}):null,v=t||l||!a?null:(0,d.jsx)(x,{char:a});return(0,d.jsxs)("div",{className:"char__info",children:[p,j,b,v]})};var v=s(705),g=s(267);const N=()=>{const[e,a]=(0,r.useState)(null),{loading:s,error:t,getCharacterByName:c,clearError:o}=(0,i.Z)(),h=e=>{a(e)},m=t?(0,d.jsx)(n.Z,{}):null,u=e?e.length>0?(0,d.jsxs)("div",{className:"search-wrapper search-wrapper__result",children:[(0,d.jsxs)("p",{className:"search__success",children:["The character was found! Visit ",e[0].name," page?"]}),(0,d.jsx)(l.rU,{to:"/characters/".concat(e[0].id),className:"button button__secondary",children:(0,d.jsx)("div",{className:"inner",children:"TO PAGE"})})]}):(0,d.jsx)("div",{className:"search-wrapper search-wrapper__result",children:(0,d.jsx)("p",{className:"search__error",children:"The character was not found. Check the name and try again"})}):null;return(0,d.jsxs)("div",{className:"search",children:[(0,d.jsx)(v.J9,{initialValues:{charName:""},validationSchema:g.Ry({charName:g.Z_().min(2,"Minimum 2 symbols required").required("This field is required")}),onSubmit:e=>{let{charName:a}=e;var s;s=a,o(),c(s).then(h)},children:(0,d.jsxs)(v.l0,{children:[(0,d.jsx)("div",{className:"search__heading",children:"Or find a character by name:"}),(0,d.jsxs)("div",{className:"search-wrapper",children:[(0,d.jsx)(v.gN,{className:"search__input",type:"text",name:"charName",id:"charName",placeholder:"Enter name"}),(0,d.jsx)("button",{type:"submit",className:"button button__main",disabled:s,children:(0,d.jsx)("div",{className:"inner",children:"find"})})]}),(0,d.jsx)("div",{className:"search-wrapper search-wrapper__result",children:(0,d.jsx)(v.Bc,{component:"div",className:"search__error",name:"charName"})})]})}),u,m]})};class f extends r.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,d.jsx)(n.Z,{}):this.props.children}}const y=f,k=s.p+"static/media/vision.067d4ae1936d64a577ce.png",w=()=>{const[e,a]=(0,r.useState)(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,d.jsx)("title",{children:"Marvel information portal"})]}),(0,d.jsx)(y,{children:(0,d.jsx)(m,{})}),(0,d.jsxs)("div",{className:"char__content",children:[(0,d.jsx)(y,{children:(0,d.jsx)(j,{onCharSelected:e=>{a(e)}})}),(0,d.jsxs)("div",{children:[(0,d.jsx)(y,{children:(0,d.jsx)(b,{charId:e})}),(0,d.jsx)(y,{children:(0,d.jsx)(N,{})})]})]}),(0,d.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})}},557:(e,a,s)=>{s.d(a,{Z:()=>t});var r=s(791);const t=()=>{const{loading:e,error:a,request:s,clearError:t}=(()=>{const[e,a]=(0,r.useState)(!1),[s,t]=(0,r.useState)(null);return{loading:e,request:(0,r.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const t=await fetch(e,{method:s,body:r,headers:c});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));const n=await t.json();return a(!1),n}catch(n){throw a(!1),t(n.message),n}}),[]),error:s,clearError:(0,r.useCallback)((()=>t(null)),[])}})(),c=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),n=e=>{var a;return{id:e.id,name:e.title,img:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:(null===(a=e.textObjects[0])||void 0===a?void 0:a.language)||"en-us"}};return{loading:e,error:a,clearError:t,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await s("https://gateway.marvel.com:443/v1/public/characters?orderBy=modified&limit=9&offset=".concat(e,"&apikey=fb362d4261f1e307fa153563545a7b83"))).data.results.map(c)},getCharacter:async e=>{const a=await s("https://gateway.marvel.com:443/v1/public/characters/".concat(e,"?apikey=fb362d4261f1e307fa153563545a7b83"));return c(a.data.results[0])},getCharacterByName:async e=>(await s("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=".concat(e,"&apikey=fb362d4261f1e307fa153563545a7b83"))).data.results.map(c),getAllComics:async()=>(await s("https://gateway.marvel.com:443/v1/public/comics?apikey=fb362d4261f1e307fa153563545a7b83\n        ")).data.results.map(n),getComic:async e=>{const a=await s("https://gateway.marvel.com:443/v1/public/comics/".concat(e,"?apikey=fb362d4261f1e307fa153563545a7b83"));return n(a.data.results[0])}}}}}]);
//# sourceMappingURL=509.01fc66ed.chunk.js.map