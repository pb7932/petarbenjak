(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{5820:(e,l,t)=>{Promise.resolve().then(t.bind(t,7536)),Promise.resolve().then(t.bind(t,7397)),Promise.resolve().then(t.bind(t,305)),Promise.resolve().then(t.bind(t,8419)),Promise.resolve().then(t.bind(t,5561))},6745:(e,l,t)=>{"use strict";t.d(l,{A:()=>r});var s=t(2115);let r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{threshold:.2},l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"slide-top",[t,r]=(0,s.useState)(!1),a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let l=new IntersectionObserver(e=>{let[l]=e;l.isIntersecting&&!t&&r(!0)},e);return a.current&&l.observe(a.current),()=>{a.current&&l.unobserve(a.current)}},[a,e,t]),[a,"animate-div ".concat(t?l:"".concat(l,"-pre"))]}},7536:(e,l,t)=>{"use strict";t.d(l,{default:()=>a});var s=t(5155);t(2115);var r=t(6745);let a=e=>{let{t:l}=e;l=l.education;let[t,a]=(0,r.A)({threshold:.1},"slide-top"),[i,n]=(0,r.A)({threshold:.1},"slide-in-left"),[d,c]=(0,r.A)({threshold:.1},"slide-top"),[o,x]=(0,r.A)({threshold:.1},"slide-in-right");return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center max-container",children:[(0,s.jsx)("h2",{ref:t,className:"slide-top-pre ".concat(a," font-inter text-4xl mb-24"),children:l.h}),(0,s.jsxs)("div",{className:"w-full flex flex-col lg:flex-row justify-center items-center gap-24  flex-wrap",children:[(0,s.jsxs)("div",{ref:i,className:"slide-in-left-pre ".concat(n," card-blob"),children:[(0,s.jsxs)("div",{className:"card-blob-bg p-4 flex flex-col justify-start items-start leading-none",children:[(0,s.jsx)("h4",{className:"text-lg",children:l["h1-field"]}),(0,s.jsx)("h3",{className:"text-3xl font-semibold",children:l["h1-level"]}),(0,s.jsx)("h4",{className:"text-sm",children:l["h1-fac"]}),(0,s.jsx)("p",{className:"text-md opacity-60 mt-20",children:l["h1-date"]}),(0,s.jsx)("img",{className:"absolute bottom-0 right-0 w-16 h-auto",src:"fer-logo.png",alt:"FER logo",width:64,height:48})]}),(0,s.jsx)("div",{className:"blob"})]}),(0,s.jsxs)("div",{ref:d,className:"slide-in-top-pre ".concat(c," card-blob"),children:[(0,s.jsxs)("div",{className:"card-blob-bg p-4 flex flex-col justify-start items-start leading-none",children:[(0,s.jsx)("h4",{className:"text-lg",children:l["h2-field"]}),(0,s.jsx)("h3",{className:"text-3xl font-semibold",children:l["h2-level"]}),(0,s.jsx)("h4",{className:"text-sm",children:l["h2-fac"]}),(0,s.jsx)("p",{className:"text-md opacity-60 mt-20",children:l["h2-date"]}),(0,s.jsx)("img",{className:"absolute bottom-0 right-0 w-16 h-auto",src:"ku-leuven-logo.png",alt:"KU Leuven logo",width:64,height:48})]}),(0,s.jsx)("div",{className:"blob"})]}),(0,s.jsxs)("div",{ref:o,className:"slide-in-right-pre ".concat(x," card-blob"),children:[(0,s.jsxs)("div",{className:"card-blob-bg p-4 flex flex-col justify-start items-start leading-none",children:[(0,s.jsx)("h4",{className:"text-lg",children:l["h3-field"]}),(0,s.jsx)("h3",{className:"text-3xl font-semibold",children:l["h3-level"]}),(0,s.jsx)("h4",{className:"text-sm",children:l["h3-fac"]}),(0,s.jsx)("p",{className:"text-md opacity-60 mt-20",children:l["h3-date"]}),(0,s.jsx)("img",{className:"absolute bottom-0 right-0 w-16 h-auto",src:"fer-logo2.png",alt:"FER logo",width:64,height:48})]}),(0,s.jsx)("div",{className:"blob"})]})]})]})}},7397:(e,l,t)=>{"use strict";t.d(l,{default:()=>c});var s=t(5155),r=t(2115),a=t(6745),i=t(5565);let n={src:"/_next/static/media/question-mark.6378f29b.svg",height:256,width:256,blurWidth:0,blurHeight:0},d=e=>{let{q:l,a:t}=e,[a,d]=(0,r.useState)("question-pre");return(0,s.jsxs)("div",{className:"w-full border-b-2 border-purple px-4 py-4",children:[(0,s.jsxs)("div",{className:"flex flex-row justify-start items-center gap-4 cursor-pointer",onClick:()=>{"question-pre"===a?d("question"):d("question-pre")},children:[(0,s.jsx)(i.default,{className:"w-6 h-6",src:n,alt:"Question mark"}),(0,s.jsx)("p",{className:"text-xl font-semibold",dangerouslySetInnerHTML:{__html:l}})]}),(0,s.jsx)("p",{className:"".concat(a," transition-all duration-0 ease-in-out pl-10"),children:t})]})},c=e=>{let{t:l}=e;l=l.faq;let[t,r]=(0,a.A)({threshold:.1},"slide-top");return(0,s.jsxs)("div",{className:"max-container flex flex-col justify-center items-center",children:[(0,s.jsx)("h2",{ref:t,className:"slidetoppre ".concat(r," font-inter text-4xl mb-24 text-center"),children:l.h}),(0,s.jsx)("div",{className:"w-full max-w-3xl",children:(0,s.jsx)(d,{q:l.q1,a:l.a1})}),(0,s.jsx)("div",{className:"w-full max-w-3xl",children:(0,s.jsx)(d,{q:l.q2,a:l.a2})}),(0,s.jsx)("div",{className:"w-full max-w-3xl",children:(0,s.jsx)(d,{q:l.q3,a:l.a3})}),(0,s.jsx)("div",{className:"w-full max-w-3xl",children:(0,s.jsx)(d,{q:l.q4,a:l.a4})})]})}},305:(e,l,t)=>{"use strict";t.d(l,{default:()=>x});var s=t(5155),r=t(2115),a=t(5565);let i=e=>{let{end:l=0,label:t,delay:a=0,decimalPlaces:i=0}=e,[n,d]=(0,r.useState)(0),c=(0,r.useRef)(null),[o,x]=(0,r.useState)(!1),[m,h]=(0,r.useState)(!1),u=l/25;return(0,r.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{x(e.isIntersecting)})},{threshold:.5});return c.current&&e.observe(c.current),()=>{c.current&&e.unobserve(c.current)}},[c]),(0,r.useEffect)(()=>{let e=null;if(o&&!m){let t=setTimeout(()=>{h(!0),e=setInterval(()=>{d(e=>{let t;return 0==i?l<10?(i=1,t=Number((e+u).toFixed(i))):t=Math.ceil(e+u):t=Number((e+u).toFixed(i)),t<l?t:l})},100)},a);return()=>{clearTimeout(t)}}return o||(d(0),h(!1),clearInterval(e)),()=>{clearInterval(e)}},[o,m,l,u]),(0,s.jsxs)("div",{ref:c,children:[n,t,"+"]})};var n=t(6745);let d={src:"/_next/static/media/dumbbell.bbf690d6.svg",height:256,width:256,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/maths.79206367.svg",height:256,width:256,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/run.ac6e2fbb.svg",height:256,width:256,blurWidth:0,blurHeight:0},x=e=>{let{t:l}=e,[t,r]=(0,n.A)({threshold:.1},"slide-top"),[x,m]=(0,n.A)({threshold:.1},"slide-in-left-200"),[h,u]=(0,n.A)({threshold:.1},"slide-in-left-400"),[f,p]=(0,n.A)({threshold:.1},"slide-in-left-600"),[b,j]=(0,n.A)({threshold:.1},"scale-in-center"),[g,v]=(0,n.A)({threshold:.1},"scale-in-center"),[w,N]=(0,n.A)({threshold:.1},"scale-in-center"),[y,k]=(0,n.A)({threshold:.1},"scale-in-center"),[A,_]=(0,n.A)({threshold:.1},"scale-in-center");return l=l.hero,(0,s.jsxs)("div",{className:"w-full flex flex-col justify-center items-center max-container xl:min-h-[90vh]",children:[(0,s.jsxs)("div",{className:"flex-2 w-full py-0 md:py-24 flex flex-col  lg:flex-row justify-between items-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{ref:t,className:"slide-top-pre ".concat(r," text-6xl font-inter lg:mt-24 leading-none ml-0 pl-0"),children:l.h}),(0,s.jsxs)("div",{ref:x,className:"slide-in-left-pre ".concat(m," max-w-2xl pt-24 text-2xl flex flex-row justify-start items-center gap-4"),children:[(0,s.jsx)(a.default,{className:"w-8 h-auto",src:c,alt:"Mathematics icon"}),(0,s.jsx)("p",{children:l.l1})]}),(0,s.jsxs)("div",{ref:h,className:"slide-in-left-pre ".concat(u," max-w-2xl pt-4 text-2xl flex flex-row justify-start items-center gap-4"),children:[(0,s.jsx)(a.default,{className:"w-8 h-auto",src:d,alt:"Dumbell icon"}),(0,s.jsx)("p",{children:l.l2})]}),(0,s.jsxs)("div",{ref:f,className:"slide-in-left-pre ".concat(p," max-w-2xl pt-4 text-2xl flex flex-row justify-start items-center gap-4"),children:[(0,s.jsx)(a.default,{className:"w-8 h-auto",src:o,alt:"Running icon"}),(0,s.jsx)("p",{children:l.l3})]})]}),(0,s.jsxs)("div",{className:"max-lg:scale-in-center-100-12 lg:scale-in-center-600 relative flex-1 flex flex-row justify-end items-center max-md:self-end",children:[(0,s.jsx)("img",{className:"z-10 max-h-[640px] object-fill md:ml-32 self-end xl:ml-0 mt-24 xl:mt-0",src:"Petar Benjak cropped2.png",alt:"Petar Benjak",width:200,height:400}),(0,s.jsxs)("div",{className:"w-96 h-96 rounded-md border-2 border-purple absolute bottom-0 lg:left-[44%] bg-purple-op",children:[(0,s.jsx)("div",{className:"dot"}),(0,s.jsxs)("div",{className:"w-80 h-80 rounded-md border-2 border-purple absolute bottom-4 left-8 bg-black",children:[(0,s.jsx)("div",{className:"dot dot-2"}),(0,s.jsxs)("div",{className:"w-64 h-64 rounded-md border-2 border-purple absolute bottom-4 left-8 bg-purple-op",children:[(0,s.jsx)("div",{className:"dot dot-3"}),(0,s.jsx)("div",{className:"w-48 h-48 rounded-md border-2 border-purple absolute bottom-4 left-8 bg-black",children:(0,s.jsx)("div",{className:"dot dot-4"})})]})]})]})]})]}),(0,s.jsxs)("div",{className:"hidden lg:flex flex-col lg:flex-row justify-center items-center gap-16 mt-32 lg:mt-0",children:[(0,s.jsxs)("div",{className:"lg:scale-in-center-100 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md",children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:3.7,delay:1800,label:l.label2})}),(0,s.jsx)("p",{children:l.data1})]}),(0,s.jsxs)("div",{className:"lg:scale-in-center-200 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md",children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:5,delay:2e3,label:l.label1})}),(0,s.jsx)("p",{children:l.data2})]}),(0,s.jsxs)("div",{className:"lg:scale-in-center-300 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md",children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:10,delay:2200,label:l.label1})}),(0,s.jsx)("p",{children:l.data3})]}),(0,s.jsxs)("div",{className:"lg:scale-in-center-400 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md",children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:3,delay:2400,label:l.label1})}),(0,s.jsx)("p",{children:l.data4})]}),(0,s.jsxs)("div",{className:"lg:scale-in-center-500 counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md",children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:60,label:"",delay:2600})}),(0,s.jsx)("p",{children:l.data5})]})]}),(0,s.jsxs)("div",{className:"lg:hidden flex flex-col lg:flex-row justify-center items-center gap-24 mt-32 lg:mt-0",children:[(0,s.jsxs)("div",{ref:b,className:"scale-in-center-pre ".concat(j," counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md"),children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:3.7,label:l.label2,decimalPlaces:2})}),(0,s.jsx)("p",{children:l.data1})]}),(0,s.jsxs)("div",{ref:g,className:"scale-in-center-pre ".concat(v," counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md"),children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:5,label:l.label1})}),(0,s.jsx)("p",{children:l.data2})]}),(0,s.jsxs)("div",{ref:w,className:"scale-in-center-pre ".concat(N," counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md"),children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:10,label:l.label1})}),(0,s.jsx)("p",{children:l.data3})]}),(0,s.jsxs)("div",{ref:y,className:"scale-in-center-pre ".concat(k," counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md"),children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:3,label:l.label1})}),(0,s.jsx)("p",{children:l.data4})]}),(0,s.jsxs)("div",{ref:A,className:"scale-in-center-pre ".concat(_," counter-card glow-sm px-6 py-3 text-lg flex flex-col justify-center items-start leading-normal rounded-md w-full max-w-md"),children:[(0,s.jsx)("div",{className:"font-semibold text-2xl",children:(0,s.jsx)(i,{end:60,label:""})}),(0,s.jsx)("p",{children:l.data5})]})]})]})}},8419:(e,l,t)=>{"use strict";t.d(l,{default:()=>o});var s=t(5155);t(2115);var r=t(6745),a=t(5565);let i=e=>{let{t:l,title:t,alt:i,text:n,icon:d,link:c=""}=e;l=l["side-quests"];let[o,x]=(0,r.A)({threshold:.1},"slide-in-left");return(0,s.jsxs)("div",{ref:o,className:"slide-in-left-pre ".concat(x," flex flex-col justify-between items-start w-fit min-h-[100%] max-w-xl bg-gradient-to-l from-purple to-gray-900 p-4 gap-4 rounded-lg shadow-md"),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-xl font-bold rounded-md",children:t}),(0,s.jsx)("div",{className:"rounded-md text-sm mt-2",children:n})]}),(0,s.jsxs)("div",{className:"w-full flex flex-row justify-between items-center",children:[(0,s.jsx)("button",{className:"rounded-md bg-purple hover:bg-purple-bright hover:text-slate-200 duration-300 p-2",children:(0,s.jsx)(a.default,{className:"w-8 h-auto",src:d,alt:i})}),c?(0,s.jsx)("a",{href:c,target:"_blank",children:(0,s.jsxs)("button",{className:"relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"}),(0,s.jsx)("p",{className:"relative z-10 font-medium tracking-wide",children:"visit"})]})}):""]})]})},n={src:"/_next/static/media/game-controller.871a954b.svg",height:256,width:256,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/process.c8e0051e.svg",height:256,width:256,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/dollar.2254754c.svg",height:256,width:256,blurWidth:0,blurHeight:0},o=e=>{let{t:l}=e;l=l["side-quests"];let[t,a]=(0,r.A)({threshold:.1},"slide-top");return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center max-container",children:[(0,s.jsx)("h2",{ref:t,className:"slide-top-pre ".concat(a," font-inter text-4xl mb-24"),children:l.h}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-stretch gap-12",children:[(0,s.jsx)(i,{t:l,icon:c,alt:"Piggy bank icon",title:l.h1,text:l.p1,link:"https://plkgalacticos.hr/"}),(0,s.jsx)(i,{t:l,icon:n,alt:"Game controller icon",title:l.h2,text:l.p2}),(0,s.jsx)(i,{t:l,icon:d,alt:"Process icon",title:l.h3,text:l.p3})]})]})}},5561:(e,l,t)=>{"use strict";t.d(l,{default:()=>i});var s=t(5155);t(2115);var r=t(6745);let a=e=>{let{heading:l,subheading:t,text:a,buttonLabel:i}=e,[n,d]=(0,r.A)({threshold:.1},"tilt-in-left");return(0,s.jsx)("div",{ref:n,className:"tilt-in-left-pre ".concat(d),children:(0,s.jsxs)("div",{className:"relative h-full w-full max-w-[30em] border-2 border-purple rounded-[1.5em] bg-gradient-to-br from-purple via-purple-700/80 to-[rgba(75,30,133,0.2)] text-white font-montserrat p-[1.5em] flex justify-center items-left flex-col gap-[1em] backdrop-blur-[12px] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group/card hover:-translate-y-1",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[1.5em]"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,190,0.1),transparent_60%)] group-hover/card:animate-pulse"}),(0,s.jsxs)("div",{className:"absolute top-4 right-4 flex gap-2",children:[(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-purple-300/50"}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-purple-300/30"}),(0,s.jsx)("div",{className:"w-2 h-2 rounded-full bg-purple-300/10"})]}),(0,s.jsxs)("div",{className:"relative z-10 transition-transform duration-300 group-hover/card:translate-y-[-2px] space-y-3",children:[(0,s.jsx)("h2",{className:"font-semibold",children:t}),(0,s.jsx)("h1",{className:"font-nunito text-[2.2em] font-bold bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent",children:l}),(0,s.jsx)("p",{className:"text-[0.9em] text-purple-100/90 leading-relaxed font-light",children:a})]}),(0,s.jsxs)("button",{className:"relative h-fit w-fit px-[1.4em] py-[0.7em] mt-2 border-[1px] border-purple-300/30 rounded-full flex justify-center items-center gap-[0.7em] overflow-hidden group/btn hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300 backdrop-blur-[12px] bg-purple-500/10",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600/40 via-fuchsia-500/40 to-purple-600/40 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"}),(0,s.jsx)("p",{className:"relative z-10 font-medium tracking-wide",children:i})]}),(0,s.jsx)("div",{className:"absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-sm group-hover/card:animate-pulse"})]})})},i=e=>{let{t:l}=e;l=l["work-experience"];let[t,i]=(0,r.A)({threshold:.1},"slide-top");return(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center max-container",children:[(0,s.jsx)("h2",{ref:t,className:"slide-top-pre ".concat(i," font-inter text-4xl mb-24 text-center"),children:l.h}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center gap-24 flex-wrap",children:[(0,s.jsx)(a,{heading:l["h1-job"],subheading:l["h1-company"],text:l.p1,buttonLabel:l.date1}),(0,s.jsx)(a,{heading:l["h2-job"],subheading:l["h2-company"],text:l.p2,buttonLabel:l.date2}),(0,s.jsx)(a,{heading:l["h3-job"],subheading:l["h3-company"],text:l.p3,buttonLabel:l.date3})]})]})}}}]);