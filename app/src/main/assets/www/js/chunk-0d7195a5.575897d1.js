(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d7195a5"],{"707d":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"base-select",class:[this.selType,{on:1==t.onChange}]},[e("button",{staticClass:"base-select__btn",attrs:{disabled:this.disabled,"aria-expanded":"false"},on:{click:t.onSet}},[e("span",[t._v(t._s(this.default))])]),e("div",{staticClass:"base-select__option"},[e("div",{staticClass:"inner"},["type2"===this.type?[t._t("default")]:t.optList?[e("p",{staticClass:"title"},[t._v(t._s(this.ph))]),e("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:this.optClose}},[t._v("닫기")]),e("div",{staticClass:"scrollWrap"},t._l(t.items,(function(s,i){return e("button",{key:i,staticClass:"btn",class:{checked:!0===s.checked},attrs:{type:"button"},on:{click:function(e){return t.btnEvent(s,i)}}},[e("span",[t._v(t._s(s.txt))])])})),0)]:[e("p",{staticClass:"title"},[t._v(t._s(this.ph))]),e("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:this.optClose}},[t._v("닫기")]),e("div",{staticClass:"scrollWrap"},[t._t("default")],2)]],2)])])},n=[],a=(e("4160"),e("d3b7"),e("159b"),e("4795"),e("5391")),o={props:{ph:null,type:null,optList:null,disabled:{type:Boolean,default:!1},confirm:{type:Boolean,default:!1},multiSelect:{type:Boolean,default:!1}},data:function(){return{items:this.optList,selType:this.type?this.type:"type1",default:this.ph,current:null,currentTxt:null,currentIdx:0,openState:!1,onChange:!1,value:null,scrollLock:null}},updated:function(){this.optList!=this.items&&(this.items=this.optList,this.btnSet()),this.$emit("onUpdate",this)},mounted:function(){this.wrap=this.$el,this.btn=this.wrap.querySelector(".base-select__btn"),this.optWrap=this.wrap.querySelector(".base-select__option"),this.option=this.optWrap.querySelector(".inner"),null==this.optList?this.optSet():this.btnSet()},methods:{btnSet:function(){var t=this,s=!1;this.optList.forEach((function(e,i){1==e.checked&&(s=!0,t.current=i,t["default"]=e.txt,t.value=e.txt,t.onChange=!0)})),!1===s&&(this.current=null,this.value=null,this.onChange=!1)},btnEvent:function(t,s){null!==this.current&&(this.items[this.current].checked=!1),this.items[s].checked=!0,this.current=s,this["default"]=this.items[s].txt,this.multiSelect||this.optClose(),this.onChange=!0,this.$emit("changedItem",t)},onSet:function(){event.preventDefault(),this.openState?this.optClose():this.optOpen()},clickChk:function(){var t=a["c"].parent(event.target,"base-select");t!=this.wrap&&this.optClose()},scrollUnLock:function(){document.removeEventListener("touchmove",this.scrollCancel),document.querySelector("html").classList.remove("scrollLock")},open:function(){var t=this;document.querySelector("html").classList.contains("scrollLock")&&(this.scrollLock=!0),this.optWrap.classList.add("ready"),setTimeout((function(){t.optWrap.classList.add("show"),t.scrollLock||(document.addEventListener("touchmove",t.scrollCancel=function(){event.preventDefault()},{passive:!1}),document.querySelector("html").classList.add("scrollLock")),t.$el.querySelector(".scrollWrap").addEventListener("touchmove",(function(t){t.stopPropagation()})),t.openState=!0}),10)},close:function(){var t=this;this.scrollLock||this.scrollUnLock(),this.optWrap.classList.remove("show"),setTimeout((function(){t.optWrap.classList.remove("ready"),t.openState=!1}),300)},optOpen:function(){var t=this;!0!==this.openState&&(this.btn.ariaExpanded=!0,"type2"===this.type?(a["g"].open(this.optWrap,300,"open"),document.addEventListener("click",this.clickChk),setTimeout((function(){t.openState=!0}),300)):this.open())},optClose:function(){var t=this;!1!==this.openState&&(this.btn.ariaExpanded=!1,"type2"===this.type?(a["g"].close(this.optWrap,300,"open"),setTimeout((function(){t.openState=!1}),300),document.removeEventListener("click",this.clickChk)):this.close())},confirmChk:function(t){event.preventDefault(),this.currentIdx=t,this.$emit("onConfirm")},optEvent:function(t){var s=t.currentTarget,e=0;for(var i in this.options)s===this.options[i]["input"]&&this.optChange(e),e++},optSet:function(){var t=this,s={};this.options=this.option.querySelectorAll("label"),this.options.forEach((function(e,i){s["opt"+i]={},s["opt"+i]["input"]=e.querySelector("input"),s["opt"+i]["val"]=s["opt"+i]["input"].value,s["opt"+i]["html"]=e.querySelector("span").innerHTML,s["opt"+i]["txt"]=e.querySelector("span").innerText,1==t.confirm&&e.addEventListener("click",(function(){t.confirmChk(i)})),s["opt"+i]["input"].addEventListener("click",t.optEvent),1==s["opt"+i]["input"].checked&&(t.currentIdx=i,t.onChange=!0,t.btn.querySelector("span").innerHTML=s["opt"+i]["html"],t.value=s["opt"+i]["input"].value)})),this.options=s},optChange:function(t){var s=this.options["opt"+t];this.btn.querySelector("span").innerHTML=s["html"],this.value=s["input"].value,this.current=s["html"],this.currentTxt=s["txt"],s["input"].checked=!0,this.optClose(),this.onChange=!0,this.$emit("onChange",this)}}},l=o,r=e("2877"),c=Object(r["a"])(l,i,n,!1,null,null,null);s["a"]=c.exports},"7c6b":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container"},[e("div",{staticClass:"list-head"},[e("h2",{staticClass:"title"},[e("Select",{ref:"nodeTitle",attrs:{type:"type-bot",ph:"선택"},on:{onChange:t.titleChange}},[e("label",[e("input",{attrs:{type:"radio",name:"radio",checked:""}}),e("span",{attrs:{"data-me":"true"}},[t._v("업무공유시스템 개발 노드")])]),e("label",[e("input",{attrs:{type:"radio",name:"radio"}}),e("span",[t._v("업무공유시스템 개발 노드 업무공유시스템 개발 노드업무공유시스템 개발 노드")])]),e("label",[e("input",{attrs:{type:"radio",name:"radio"}}),e("span",[t._v("노드명3")])])]),e("i",{staticClass:"hide"},[t._v("비공개")])],1),e("div",{staticClass:"info"},[e("p",{staticClass:"member"},[t._v("김한화 외 3명")]),e("div",{staticClass:"snippet"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"members"},[t.list.length>5?e("ul",[t._l(5,(function(s,i){return e("li",{key:i,class:{owner:1==t.list[i].owner}},[t._m(0,!0),e("span",{staticClass:"name"},[t._v(t._s(t.list[i].name))])])})),e("li",{on:{click:t.memberListShow}},[e("span",{staticClass:"num"},[t._v(" +"+t._s(t.list.length-5)+" ")])])],2):e("ul",t._l(t.list,(function(s,i){return e("li",{key:i,class:{owner:1==s.owner}},[t._m(1,!0),e("span",{staticClass:"name"},[t._v(t._s(s.name))])])})),0)]),t._m(2),e("div",{staticClass:"btn"},[e("BaseButton",{class:"btn-new_task",attrs:{styles:["type1","size-s"]}},[t._v("New Task")])],1)])])]),t._m(3),e("button",{staticClass:"btn-toggle",attrs:{type:"button"},on:{click:t.infoToggle}},[e("span",[t._v("펼쳐보기")])])]),e("List",{on:{modGuideShow:t.modGuideShow}}),e("MemberList",{ref:"memberList"}),!0===this.guide?e("div",{staticClass:"use-guide use-guide__add",on:{click:t.guideOff}},[t._m(4),e("div",{staticClass:"btn"},[e("BaseButton",{class:"btn-add_task",attrs:{styles:["type2","size-s"]}},[t._v("Add Task")])],1)]):t._e(),!0===this.modGuide?e("div",{staticClass:"use-guide use-guide__mod",on:{click:t.guideOff}},[t._m(5),t._m(6)]):t._e()],1)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"img"},[i("img",{attrs:{src:e("581c"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"img"},[i("img",{attrs:{src:e("581c"),alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"direction"},[e("p",{staticClass:"direction-title"},[t._v("Direction")]),e("p",{staticClass:"txt"},[t._v(" 디렉션 문구가 표시됩니다. 개인과 회사가 직접 연결될 수 있는 업무 및 정보 시스템 구축 개인과 회사가 직접 연결될 수 있는 업무 및 정보 시스템 구축 ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"count"},[e("span",[t._v("Total "),e("strong",[t._v("3,452")])]),e("span",[t._v("Today "),e("strong",[t._v("21")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"txt"},[t._v("팀(노드)의 목표를 달성하기 위해"),e("br"),t._v("수행해야할 "),e("strong",[t._v("나만의 업무를 추가")]),t._v("해보세요")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"txt"},[t._v("리스트를 스와이프하여"),e("br"),e("strong",[t._v("편집 기능")]),t._v("을 활용해 보세요")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cont"},[e("div",{staticClass:"bg"}),e("div",{staticClass:"btn"},[e("div",{staticClass:"important"},[e("span",[t._v("중점"),e("br"),t._v("on/off")])]),e("div",{staticClass:"mode"},[e("span",[t._v("수정")])]),e("div",{staticClass:"del"},[e("span",[t._v("삭제")])])])])}],a=e("a099"),o=e("a1be"),l=e("707d"),r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list-body"},[e("div",{staticClass:"list-util"},[e("div",{staticClass:"date"},[e("div",{staticClass:"current"},[t._v("This week")]),e("Datepicker",{attrs:{type:"type2",typePeriod:!0,disabled:!1,seletedPeriod:{from:"202112110",to:"202112130"}}})],1),e("button",{directives:[{name:"show",rawName:"v-show",value:!t.list.mod,expression:"!list.mod"}],staticClass:"list-mod",attrs:{type:"button"},on:{click:t.modSet}},[e("span",[t._v("설정")])])]),t.data.length<1?e("p",{staticClass:"no-data"},[t._v(" Task가 없어요!"),e("br"),t._v(" Task를 등록해주세요. ")]):t._e(),t.data?e("ul",{staticClass:"node-list",class:{mod:t.list.mod}},t._l(t.data,(function(s,i){return e("li",{key:i},[e("div",{staticClass:"node-list__box--move"},[e("span",{on:{touchstart:t.listMovStart,touchmove:t.listMov,touchend:t.listMovEnd}},[t._v("이동")])]),e("div",{staticClass:"node-list__box",on:{touchstart:t.boxMovStart,touchmove:t.boxMov,touchend:t.boxMovEnd}},[e("div",{staticClass:"node-list__box--inner"},[e("div",{staticClass:"node-list__box--txt"},[s.state?e("span",{staticClass:"icon-state",class:[{state01:"설정필요"===s.state},{state02:"미흡"===s.state},{state03:"보통"===s.state},{state04:"좋음"===s.state}]},[t._v(" "+t._s(s.state)+" ")]):t._e(),e("div",{staticClass:"title"},[t._v(t._s(s.title))])]),s.task?e("button",{staticClass:"node-list__btn-toggle open",on:{click:t.taskToggle}},[t._v("목록 보기")]):t._e()]),e("div",{staticClass:"node-list__box__fold open"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"node-list__box__snippet"},[e("div",{staticClass:"str"},[e("div",{staticClass:"date"},[t._v(t._s(s.date))])]),t._m(0,!0)]),s.task?e("div",{staticClass:"node-list__task-list"},[t._l(s.task,(function(s,i){return e("div",{key:i,staticClass:"task"},[e("input",{staticClass:"base-chk type2",attrs:{type:"checkbox",disabled:s.com},domProps:{checked:s.com}}),e("div",{staticClass:"txt"},[e("router-link",{attrs:{to:"#"}},[s.flag?e("span",{staticClass:"icon-flag"},[t._v("중요")]):t._e(),s.lock?e("span",{staticClass:"icon-lock"},[t._v("비공개")]):t._e(),t._v(" "+t._s(s.txt)+" ")]),e("div",[s.update?e("span",{staticClass:"icon-update"},[t._v("업데이트")]):t._e(),s.delay?e("span",{staticClass:"icon-delay"},[t._v("딜레이")]):t._e()])],1),e("router-link",{staticClass:"name",attrs:{to:"#"}},[t._v(" "+t._s(s.name)+" ")])],1)})),e("div",{staticClass:"btn"},[e("BaseButton",{class:"btn-add_task",attrs:{styles:["type2","size-s"]}},[t._v("Add Task")])],1)],2):t._e()])])]),e("div",{staticClass:"node-list__btn"},[e("button",{staticClass:"node-list__btn-important",class:{on:!0===s.important},attrs:{type:"button"},on:{click:function(s){return t.importToggle(i)}}},[t._v("중요")]),e("button",{staticClass:"node-list__btn-mode",attrs:{type:"button"}},[t._v("수정")]),e("button",{staticClass:"node-list__btn-del",attrs:{type:"button"}},[t._v("삭제")])])])})),0):t._e(),e("div",{staticClass:"btn-mod_com"},[e("BaseButton",{attrs:{styles:["type1","size-l"]},on:{click:t.modSet}},[e("i",{staticClass:"icon-com"}),t._v("완료")])],1)])},c=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"members"},[i("span",{staticClass:"picture"},[i("img",{attrs:{src:e("581c"),alt:""}})]),i("span",{staticClass:"number"},[t._v("+21")])])}],u=(e("4795"),e("4160"),e("d3b7"),e("159b"),e("e9c4"),e("a434"),e("36dd")),d=e("5391"),p={data:function(){return{list:{mod:!1,els:[],targetIdx:null,current:{el:null,idx:null},box:null,boxClone:null,target:null,posX:null,posY:null,timer:null,movNum:0,maxNum:-164,scrollCancel:null,scrollState:!1},backupData:[],data:[{state:"좋음",title:"ㄱㄱㄱㄱㄱㄱㄱㄱㄱ 111111111111111111111111",date:"2021. 01. 01 ~ 2021. 12. 31",important:!0,task:[{com:!0,flag:!0,lock:!0,delay:!0,txt:"A사 비즈니스 모델 분석니스 모델 분석",name:"김이름"},{com:!1,flag:!1,update:!0,txt:"B사 비즈니스니스 모델 분석 모델 분석",name:"김이름"},{com:!1,flag:!0,txt:"B사 비즈니스 모델 분석",name:"김이름"}]},{state:"보통",title:"ㄴㄴㄴㄴㄴㄴㄴㄴㄴ 2222222222222222222222",date:"2021. 01. 01 ~ 2021. 12. 31",important:!1,task:[{com:!1,flag:!0,txt:"B사 비즈니스 모델 분석",name:"김이름"}]},{state:"미흡",title:"ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ 33333333333333333333333333333",date:"2021. 01. 01 ~ 2021. 12. 31",important:!1,task:[{com:!1,flag:!0,txt:"B사 비즈니스 모델 분석",name:"김이름"}]}]}},components:{BaseButton:a["a"],Datepicker:u["a"]},methods:{importToggle:function(t){!0===this.data[t].important?this.data[t].important=!1:this.data[t].important=!0},modSet:function(){this.list.mod?(this.list.els.forEach((function(t){var s=t.el.querySelector(".node-list__box");s.style.cssText=""})),this.list.mod=!1):(this.list.mod=!0,setTimeout(this.listPosSet,300),this.backupData=this.data,this.list.els.forEach((function(t){var s=t.el.querySelector(".node-list__btn-toggle"),e=t.el.querySelector(".node-list__box__fold");s.classList.contains("open")&&s.classList.remove("open"),e.classList.contains("open")&&e.classList.remove("open")})),this.$emit("modGuideShow"))},taskToggle:function(){var t=d["c"].parent(event.currentTarget,"node-list__box"),s=t.querySelector(".node-list__box__fold");event.currentTarget.classList.toggle("open"),d["g"].toggle(s,300,"open")},listPosSet:function(){var t=this;this.list.els=[];var s=document.querySelectorAll(".node-list li");s.forEach((function(s){var e={el:s,top:s.getBoundingClientRect().top+window.scrollY};t.list.els.push(e)}))},changeArrayOrder:function(t,s,e){if(!(t.length<0)){var i=s+e;if(!(i<0||i>=t.length)){var n=JSON.parse(JSON.stringify(t)),a=n.splice(s,1)[0];return n.splice(i,0,a),n}}},listMovStart:function(){var t=this,s=event.changedTouches[0];this.list.box=d["c"].parent(s.target,"li"),this.list.posY=event.changedTouches[0].pageY,this.list.scrollY=window.scrollY,document.querySelector("html").classList.add("userSelectLock"),this.list.timer=setTimeout((function(){for(var s=0;s<t.list.els.length;s++)t.list.els[s].el===t.list.box&&(t.list.targetIdx=s);t.list.boxClone=t.list.box.cloneNode(!0),t.list.box.insertAdjacentElement("afterend",t.list.boxClone),t.list.boxClone.classList.add("clone"),t.list.boxClone.style.top="".concat(t.list.box.getBoundingClientRect().top-15,"px")}),300)},listMov:function(){var t=event.changedTouches[0],s=t.pageY-this.list.posY;if(this.list.boxClone){this.list.boxClone.style.transform="translateY(".concat(.1*s,"rem)"),this.scrollState||(this.scrollState=!0,document.addEventListener("touchmove",this.scrollCancel=function(){event.preventDefault()},{passive:!1}));for(var e=0;e<this.list.els.length-1;e++)this.list.els[e].top<t.pageY&&t.pageY<this.list.els[e+1].top?this.list.els[e].el!==this.list.current.el&&(null!==this.list.current.el&&this.list.current.el.classList.remove("over"),this.list.current.el=this.list.els[e].el,this.list.current.el.classList.add("over"),this.list.current.idx=e):t.pageY<this.list.els[0].top?(null!==this.list.current.el&&this.list.current.el.classList.remove("over"),this.list.current.idx=-1):t.pageY>this.list.els[this.list.els.length-1].top+this.list.els[this.list.els.length-1].el.clientHeight&&(null!==this.list.current.el&&this.list.current.el.classList.remove("over"),this.list.current.idx=this.list.els.length-1)}},listMovEnd:function(){if(clearTimeout(this.list.timer),document.querySelector("html").classList.remove("userSelectLock"),null!==this.list.current.el&&this.list.boxClone){this.list.boxClone.remove(),this.list.current.el.classList.remove("over"),this.list.timer=null,this.list.boxClone=null,this.scrollState=!1,document.removeEventListener("touchmove",this.scrollCancel);var t=this.list.current.idx-this.list.targetIdx;this.list.current.idx-this.list.targetIdx<0&&(t+=1),this.data=this.changeArrayOrder(this.data,this.list.targetIdx,t)}},boxMovStart:function(){if(1==this.list.mod){var t=event.changedTouches[0];this.list.box=d["c"].parent(t.target,"li"),this.list.target=this.list.box.querySelector(".node-list__box"),this.list.posX=event.changedTouches[0].pageX}},boxMov:function(){var t=this;if(1==this.list.mod){var s=event.changedTouches[0],e=s.pageX-this.list.posX,i=function(){if(t.list.movNum=e+50,t.scrollState||(t.scrollState=!0,document.addEventListener("touchmove",t.scrollCancel=function(){event.preventDefault()},{passive:!1})),t.list.timer&&clearTimeout(t.list.timer),t.list.box.classList.contains("open")){var s=t.list.maxNum+t.list.movNum-100;0>s&&(t.list.target.style.cssText="transform: translateX(".concat(.1*s,"rem)"))}else t.list.maxNum<t.list.movNum&&(t.list.target.style.cssText="transform: translateX(".concat(.1*t.list.movNum,"rem)"))};if(this.list.box.classList.contains("open")){if(!(e>50))return;i()}else{if(!(e<-50))return;i()}}},boxMovEnd:function(){var t=this;1==this.list.mod&&(this.list.box.classList.contains("open")?Math.abs(this.list.maxNum)>=Math.abs(this.list.movNum)?this.list.target.style.cssText="transform: translateX(".concat(.1*this.list.maxNum,"rem); transition: transform .3s;"):(this.list.target.style.cssText="transform: translateX(0); transition: transform .3s;",this.list.box.classList.remove("open")):50<=Math.abs(this.list.movNum)?(this.list.target.style.cssText="transform: translateX(".concat(.1*this.list.maxNum,"rem); transition: transform .3s;"),this.list.box.classList.add("open")):this.list.target.style.cssText="transform: translateX(0); transition: transform .3s;",0!==this.list.movNum&&(this.list.timer=setTimeout((function(){t.list.movNum=0,t.list.posX=0,t.scrollState=!1,document.removeEventListener("touchmove",t.scrollCancel)}),100)))}},mounted:function(){var t=this;this.listPosSet(),window.addEventListener("scroll",(function(){t.list.timer&&clearTimeout(t.list.timer),t.list.boxClone&&t.list.boxClone.remove()}))}},h=p,m=e("2877"),v=Object(m["a"])(h,r,c,!1,null,null,null),_=v.exports,f={created:function(){this.$emit("pageSet",this.pageInfo)},data:function(){return{pageInfo:{headerType:"main",className:"bgWrap",title:"업무공유시스템 개발 노드"},guide:!0,modGuide:!1,list:[{name:"임한화",owner:!0},{name:"김하늘",owner:!0},{name:"윤여름"},{name:"임한화"},{name:"김하늘"},{name:"윤여름"},{name:"임한화"},{name:"김하늘"},{name:"윤여름"},{name:"임한화"},{name:"김하늘"},{name:"윤여름"}]}},components:{Select:l["a"],List:_,BaseButton:a["a"],MemberList:o["a"]},methods:{guideOff:function(){this.guide=!1,this.modGuide=!1},modGuideShow:function(){this.modGuide=!0},memberListShow:function(){this.$refs.memberList.state=!0},titleChange:function(){this.pageInfo.title=this.$refs.nodeTitle.current},infoToggle:function(){var t=d["c"].parent(event.currentTarget,"list-head");t.classList.toggle("open")}}},g=f,b=(e("8208"),Object(m["a"])(g,i,n,!1,null,"9421206c",null));s["default"]=b.exports},8208:function(t,s,e){"use strict";e("d613")},a1be:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return this.state?i("Layer",{ref:"layer",attrs:{layerTitle:t.layerTitle,layerType:"bot"},on:{close:this.close}},[t.edit?i("BaseButton",{class:"btn-memeber_edit",attrs:{styles:["type2","size-xs"]},on:{click:t.memberEdit}},[t._v("Edit")]):t._e(),i("div",{staticClass:"scrollWrap"},[i("ul",{staticClass:"member-list"},t._l(t.list,(function(s,n){return i("li",{key:n,on:{click:t.layerClose}},[i("div",{staticClass:"member-list__snippet__pic",class:{owner:"owner"===s.type}},[i("img",{attrs:{src:e("581c"),alt:s.name}})]),i("div",{staticClass:"member-list__snippet"},[i("div",{staticClass:"member-list__snippet__name"},[i("span",[i("span",[t._v(t._s(s.name))]),t._v(" "+t._s(s.grade)+" ")]),i("span",[t._v(t._s(s.pos))])]),i("div",{staticClass:"member-list__snippet__group"},[i("span",[t._v(t._s(s.group1))]),i("span",[t._v(t._s(s.group2))])])])])})),0)])],1):t._e()},n=[],a=e("2058"),o=e("a099"),l={props:{edit:{type:Boolean,default:!1}},data:function(){return{state:!1,layerTitle:null,list:[{type:"owner",name:"임한화",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"윤여름",grade:"과장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"도겨울",grade:"대리",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"도겨울",grade:"대리",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"}]}},components:{Layer:a["a"],BaseButton:o["a"]},mounted:function(){this.layerTitle="멤버("+this.list.length+")"},methods:{open:function(){this.state=!0},close:function(){this.state=!1},layerClose:function(){this.$refs.layer.close()},memberEdit:function(){this.$emit("memberEdit")}}},r=l,c=e("2877"),u=Object(c["a"])(r,i,n,!1,null,null,null);s["a"]=u.exports},a434:function(t,s,e){"use strict";var i=e("23e7"),n=e("da84"),a=e("23cb"),o=e("5926"),l=e("07fa"),r=e("7b0b"),c=e("65f0"),u=e("8418"),d=e("1dde"),p=d("splice"),h=n.TypeError,m=Math.max,v=Math.min,_=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!p},{splice:function(t,s){var e,i,n,d,p,g,b=r(this),C=l(b),y=a(t,C),x=arguments.length;if(0===x?e=i=0:1===x?(e=0,i=C-y):(e=x-2,i=v(m(o(s),0),C-y)),C+e-i>_)throw h(f);for(n=c(b,i),d=0;d<i;d++)p=y+d,p in b&&u(n,d,b[p]);if(n.length=i,e<i){for(d=y;d<C-i;d++)p=d+i,g=d+e,p in b?b[g]=b[p]:delete b[g];for(d=C;d>C-i+e;d--)delete b[d-1]}else if(e>i)for(d=C-i;d>y;d--)p=d+i-1,g=d+e-1,p in b?b[g]=b[p]:delete b[g];for(d=0;d<e;d++)b[d+y]=arguments[d+2];return b.length=C-i+e,n}})},d613:function(t,s,e){},e9c4:function(t,s,e){var i=e("23e7"),n=e("da84"),a=e("d066"),o=e("2ba4"),l=e("e330"),r=e("d039"),c=n.Array,u=a("JSON","stringify"),d=l(/./.exec),p=l("".charAt),h=l("".charCodeAt),m=l("".replace),v=l(1..toString),_=/[\uD800-\uDFFF]/g,f=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,b=function(t,s,e){var i=p(e,s-1),n=p(e,s+1);return d(f,t)&&!d(g,n)||d(g,t)&&!d(f,i)?"\\u"+v(h(t,0),16):t},C=r((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&i({target:"JSON",stat:!0,forced:C},{stringify:function(t,s,e){for(var i=0,n=arguments.length,a=c(n);i<n;i++)a[i]=arguments[i];var l=o(u,null,a);return"string"==typeof l?m(l,_,b):l}})}}]);