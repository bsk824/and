(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36a1e339"],{"16e1":function(t,s,e){"use strict";e("85b7")},"3ea6":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("button",{staticClass:"btn-all_reply",class:{show:1==this.topShow},attrs:{type:"button"}},[e("span",[t._v("의견 작성")])])])},a=[],o={data:function(){return{topShow:!1}},mounted:function(){window.addEventListener("scroll",this.scrollChk)},destroyed:function(){window.removeEventListener("scroll",this.scrollChk)},methods:{scrollChk:function(){window.scrollY>100?this.topShow=!0:this.topShow=!1}}},i=o,r=e("2877"),l=Object(r["a"])(i,n,a,!1,null,null,null);s["a"]=l.exports},"4af4":function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return this.state?e("div",{staticClass:"editor",style:"bottom:"+this.bottom},[t._m(0)]):t._e()},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"file"},[e("div",{staticClass:"option"},[e("button",{staticClass:"img",attrs:{type:"button"}},[t._v("이미지 삽입")]),e("button",{staticClass:"file",attrs:{type:"button"}},[t._v("파일 추가")]),e("button",{staticClass:"link",attrs:{type:"button"}},[t._v("협업보드 링크")])])])}],o={props:{bottom:null},data:function(){return{state:!1}},methods:{}},i=o,r=(e("16e1"),e("2877")),l=Object(r["a"])(i,n,a,!1,null,"5c6ebb56",null);s["a"]=l.exports},"4de4":function(t,s,e){"use strict";var n=e("23e7"),a=e("b727").filter,o=e("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"5d10":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"container board-content"},[e("Header",{attrs:{pageInfo:this.pageSet}}),e("div",{staticClass:"task-log__util"},[e("DropDowns",[e("span",{staticClass:"util-btn util-btn--menu",attrs:{slot:"btn"},slot:"btn"},[t._v("메뉴")]),e("ul",{attrs:{slot:"menu"},slot:"menu"},[e("li",[e("button",{staticClass:"toggle-com",attrs:{type:"button"},on:{click:t.stateToggle}},[e("span",[t._v("완료")])])]),e("li",[e("button",{staticClass:"toggle-impt",attrs:{type:"button"},on:{click:t.stateToggle}},[e("span",[t._v("중요")])])]),e("li",{staticClass:"line"},[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("활동 내역")])])]),e("li",[e("button",{attrs:{type:"button"},on:{click:t.urlCopy}},[e("span",[t._v("url 복사")])])]),e("li",[e("button",{attrs:{type:"button"},on:{click:t.delTask}},[e("span",[t._v("삭제")])])])])])],1),e("div",{staticClass:"task-log__head"},[e("div",{staticClass:"task-log__head__state"},[e("Select",{attrs:{type:"type2",disabled:!0}},[e("label",[e("input",{attrs:{type:"radio",name:"nodeState",value:"on"}}),e("span",[e("i",{staticClass:"icon icon-lock"}),t._v(" 공개")])]),e("label",[e("input",{attrs:{type:"radio",name:"nodeState",value:"off",checked:""}}),e("span",[e("i",{staticClass:"icon icon-lock"}),t._v(" 비공개")])])]),e("Select",{ref:"groupName",class:"task-log__head--group-sel",attrs:{type:"type-bot",ph:"변경",confirm:!0},on:{onConfirm:t.groupSelConfirm}},[e("label",[e("input",{attrs:{type:"radio",name:"radio",checked:""}}),e("span",[t._v("테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의 그룹명테스크의그룹명")])]),e("label",[e("input",{attrs:{type:"radio",name:"radio"}}),e("span",[t._v("그룹명1")])]),e("label",[e("input",{attrs:{type:"radio",name:"radio"}}),e("span",[t._v("그룹명2")])])])],1),e("input",{staticClass:"task-log__head--name",attrs:{type:"text",value:"입력된 테스크명이 이곳에 보여집니다."}}),e("p",{staticClass:"task-log__head--period"},[e("span",{staticClass:"date"},[t._v(t._s(t.dayGet(this.period.from)))]),e("span",{staticClass:"hypon"},[t._v("-")]),e("span",{staticClass:"date"},[t._v(t._s(t.dayGet(this.period.to)))]),e("button",{staticClass:"btn-cal",attrs:{type:"button"},on:{click:t.dateSel}},[t._v("기간 설정")])])]),e("div",{attrs:{id:"content-editor"}},[e("div",[e("div",{staticClass:"task-log__content owner"},[e("div",{staticClass:"task-log__content__inner",attrs:{contenteditable:"true"},on:{click:t.modChange}},[e("p",{staticClass:"ph"},[t._v("테스크 로그를 작성해보세요.")])]),t._m(0)])]),e("div",[e("div",{staticClass:"task-log__content another"},[e("div",{staticClass:"task-log__content__inner",attrs:{contenteditable:"false"},on:{click:t.modChange}},[e("p",{staticClass:"ph"},[t._v("테스크 로그를 작성해보세요.")]),t._v(" 화면 꽉 차게 작성합니다."),e("br"),t._v(" 한 줄의 최대길이까지 작성 가능합니다."),e("br"),t._v(" 작성자가 줄바꿈을 하지 않으면 한줄의 최대 길이까지 작성됩니다. 최대길이까지작성완료 "),e("br"),e("br"),t._v(" - 디폴트 바디 스타일 입니다."),e("br"),t._v(" - 비즈니스 모델 사례조사 필요"),e("br"),t._v(" - 해당 보드의 담당자만 입력 가능합니다."),e("br"),t._v(" 화면 꽉 차게 작성합니다. 한 줄의 최대길이까지 작성 가능합니다. 작성자가 줄바꿈을 하지 않으면 한줄의 최대 길이까지 작성됩니다. 최대길이까지 작성완료 ")]),e("div",{staticClass:"task-log__snippet"},[e("p",{staticClass:"task-log__snippet--user"},[t._v("이생명")]),e("button",{staticClass:"task-log__snippet--reply",attrs:{type:"button"},on:{click:function(s){return t.replyShow("block")}}},[t._m(1)])])])]),e("div",[e("div",{staticClass:"task-log__content nobody"},[e("div",{staticClass:"task-log__content__inner",attrs:{contenteditable:"false"},on:{click:t.modChange}},[e("p",{staticClass:"ph"},[t._v("테스크 로그를 작성해보세요.")]),t._v(" 화면 꽉 차게 작성합니다."),e("br"),t._v(" 한 줄의 최대길이까지 작성 가능합니다."),e("br"),t._v(" 작성자가 줄바꿈을 하지 않으면 한줄의 최대 길이까지 작성됩니다. 최대길이까지작성완료 "),e("br"),e("br"),t._v(" - 디폴트 바디 스타일 입니다."),e("br"),t._v(" - 비즈니스 모델 사례조사 필요"),e("br"),t._v(" - 해당 보드의 담당자만 입력 가능합니다."),e("br"),t._v(" 화면 꽉 차게 작성합니다. 한 줄의 최대길이까지 작성 가능합니다. 작성자가 줄바꿈을 하지 않으면 한줄의 최대 길이까지 작성됩니다. 최대길이까지 작성완료 ")]),e("div",{staticClass:"task-log__snippet"},[e("p",{staticClass:"task-log__snippet--user"},[t._v("이생명")]),e("button",{staticClass:"task-log__snippet--reply",attrs:{type:"button"},on:{click:function(s){return t.replyShow("block")}}},[t._m(2)])])])]),e("div",[e("div",{staticClass:"task-log__meeting-files"},[e("p",{staticClass:"task-log__meeting--title"},[t._v("2021.05.30 회의 내용 반영")]),e("div",{staticClass:"task-log__meeting__file-list"},[e("div",{staticClass:"task-log__widget"},[t._m(3),e("DropDowns",[e("span",{staticClass:"icon-mod",attrs:{slot:"btn"},slot:"btn"},[t._v("편집")]),e("ul",{attrs:{slot:"menu"},slot:"menu"},[e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("다운로드")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 교체")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 복사")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 삭제")])])])])])],1),e("div",{staticClass:"task-log__widget"},[t._m(4),e("DropDowns",[e("span",{staticClass:"icon-mod",attrs:{slot:"btn"},slot:"btn"},[t._v("편집")]),e("ul",{attrs:{slot:"menu"},slot:"menu"},[e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("다운로드")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 교체")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 복사")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 삭제")])])])])])],1),e("div",{staticClass:"task-log__widget"},[t._m(5),e("DropDowns",[e("span",{staticClass:"icon-mod",attrs:{slot:"btn"},slot:"btn"},[t._v("편집")]),e("ul",{attrs:{slot:"menu"},slot:"menu"},[e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("다운로드")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 교체")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 복사")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 삭제")])])])])])],1)]),e("div",{staticClass:"task-log__snippet"},[e("button",{staticClass:"task-log__snippet--reply",attrs:{type:"button"},on:{click:function(s){return t.replyShow("block")}}},[t._m(6)])])])]),e("div",[e("section",{staticClass:"task-log__foot"},[e("h5",{staticClass:"task-log__foot--title"},[t._v("글자스타일 H5 적용")]),t._m(7),e("div",{staticClass:"task-log__foot__link"},[e("div",{staticClass:"task-log__widget type-img"},[t._m(8),e("div",{staticClass:"txt"},[e("p",[t._v("https://타이틀명을 못불러울 경우 URL명이 표시됨.com")]),e("DropDowns",[e("span",{staticClass:"icon-mod",attrs:{slot:"btn"},slot:"btn"},[t._v("편집")]),e("ul",{attrs:{slot:"menu"},slot:"menu"},[e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 복사")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 수정")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 삭제")])])])])])],1)]),e("div",{staticClass:"task-log__widget type-img"},[t._m(9),e("div",{staticClass:"txt"},[e("p",[t._v("스크린샷 2021-09-11 오후 13:50.jpg")]),e("DropDowns",[e("span",{staticClass:"icon-mod",attrs:{slot:"btn"},slot:"btn"},[t._v("편집")]),e("ul",{attrs:{slot:"menu"},slot:"menu"},[e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("다운로드")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("URL 복사")])])]),e("li",[e("button",{attrs:{type:"button"}},[e("span",[t._v("파일 삭제")])])])])])],1)])]),e("div",{staticClass:"task-log__snippet"},[e("button",{staticClass:"task-log__snippet--reply",attrs:{type:"button"},on:{click:function(s){return t.replyShow("block")}}},[t._m(10)])])])])]),e("TaskReply",{ref:"taskReply"}),e("Datepicker",{ref:"date",attrs:{type:"type3",typePeriod:!0,seletedPeriod:{from:this.period.from,to:this.period.to}},on:{onChange:t.dateChange}}),e("Confirm",{ref:"delTask",attrs:{txt:"테스크 삭제 시, 복구가 불가능합니다.<br>삭제하시겠습니까?"}}),e("Confirm",{ref:"delWidget",attrs:{txt:"선택한 위젯을 삭제하시겠습니까?"}}),e("Confirm",{ref:"groupChange",attrs:{txt:"그룹을 변경하시겠습니까?",btn:{confirm:"확인",cancel:"취소"}},on:{confirm:t.groupChangeCom}}),e("Reply"),e("Editor",{ref:"editor",attrs:{bottom:"0"}}),e("Footer",{attrs:{pageInfo:this.pageSet}}),!0===this.guide?e("div",{staticClass:"use-guide use-guide__reply",on:{click:t.guideOff}},[e("div",{staticClass:"box"},[t._m(11),e("div",{staticClass:"btn"},[e("button",{staticClass:"task-log__snippet--reply",attrs:{type:"button"},on:{click:function(s){return t.replyShow("block")}}},[t._m(12)])])]),t._m(13)]):t._e()],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"task-log__snippet"},[e("p",{staticClass:"task-log__snippet--user"},[t._v("이생명")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("span",{staticClass:"icon-reply"},[t._v("의견")]),t._v(" 12")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("span",{staticClass:"icon-reply"},[t._v("의견")]),t._v(" 12")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"filename"},[e("i",{staticClass:"icon-file icon-file--ppt"}),t._v(" 한화생명_ppt파일_첨부시이렇게 보여집니다.pptx ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"filename"},[e("i",{staticClass:"icon-file icon-file--zip"}),t._v(" 압축본_비즈니스 모델 사례.zip ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"filename"},[e("i",{staticClass:"icon-file icon-file--link"}),t._v(" 협업보드 주간보고 리포트 ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("span",{staticClass:"icon-reply"},[t._v("의견")]),t._v(" 12")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"task-log__foot__txt-wrap"},[e("p",[t._v(" 제가 찾은 레퍼런스 사이트입니다. 한번 봐주세요!"),e("br"),t._v(" 특히 아래 사이트가 가장 좋았습니다."),e("br"),t._v(" 우리 사이트에서도 구현할수 있는제 체크 부탁드립니다.(특히 회원가입 프로세스 체크) ")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"bi"},[n("img",{attrs:{src:e("8671"),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"img"},[n("img",{attrs:{src:e("8671"),alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("span",{staticClass:"icon-reply"},[t._v("의견")]),t._v(" 12")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"txt"},[t._v("블럭별 의견을 작성하거나"),e("br"),e("strong",[t._v("등록된 의견을 조회")]),t._v("할 수 있어요")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("span",{staticClass:"icon-reply"},[t._v("의견")]),t._v(" 12")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"box"},[e("p",{staticClass:"txt"},[t._v("아이콘을 선택하여"),e("br"),e("strong",[t._v("전체의견을 작성")]),t._v("해 보세요")]),e("div",{staticClass:"btn"},[e("button",{staticClass:"btn-all_reply",attrs:{type:"button"}},[e("span",[t._v("의견 작성")])])])])}],o=(e("99af"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"header"},["main"==t.pageInfo.headerType?e("h1",{staticClass:"logo"},[t._v("업무공유시스템")]):t._e(),t.pageInfo.title&&"main"!=t.pageInfo.headerType?e("h2",{staticClass:"page-title",class:{type2:"sub2"==t.pageInfo.headerType}},[e("span",[t._v(t._s(t.pageInfo.title))])]):t._e(),"main"!=t.pageInfo.headerType?e("button",{staticClass:"btn-back",attrs:{type:"button"},on:{click:function(s){return t.$router.go(-1)}}},[e("span",[t._v("뒤로가기")])]):t._e(),"main"==t.pageInfo.headerType?e("div",{staticClass:"header-util"},[e("router-link",{staticClass:"btn-search",attrs:{to:"#"}},[e("span",[t._v("검색")])]),e("router-link",{staticClass:"btn-alert",attrs:{to:"#"}},[e("span",[t._v("알림"),e("span",{staticClass:"num"},[t._v("+99")])])])],1):t._e(),"sub"==t.pageInfo.headerType?e("div",{staticClass:"header-util"},[e("router-link",{staticClass:"btn-map",attrs:{to:"/main"}},[e("span",[t._v("전사 바로가기")])])],1):t._e()])}),i=[],r={props:{pageInfo:null},data:function(){return{headerPos:null}},mounted:function(){this.headerPosY=this.$el.getBoundingClientRect().top,window.addEventListener("scroll",this.scrollChk)},destroyed:function(){window.removeEventListener("scroll",this.scrollChk)},methods:{scrollChk:function(){window.scrollY>this.headerPosY?this.$el.classList.contains("isScroll")||this.$el.classList.add("isScroll"):this.$el.classList.contains("isScroll")&&this.$el.classList.remove("isScroll")}}},l=r,c=e("2877"),p=Object(c["a"])(l,o,i,!1,null,null,null),u=p.exports,_=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer"},["main"==this.pageInfo.headerType||"sub3"==this.pageInfo.headerType?e("nav",{staticClass:"footer__nav"},[e("router-link",{staticClass:"footer__nav--btn footer__nav--home",attrs:{to:"#"}},[t._v("홈")]),e("router-link",{staticClass:"footer__nav--btn footer__nav--share",attrs:{to:"/share/list"}},[t._v("정보공유")]),e("router-link",{staticClass:"footer__nav--btn footer__nav--my",attrs:{to:"/my/myInfo"}},[t._v("My")]),e("router-link",{staticClass:"footer__nav--btn footer__nav--node",attrs:{to:"/node"}},[t._v("Node")]),e("router-link",{staticClass:"footer__nav--btn footer__nav--map",attrs:{to:"/map"}},[t._v("Map")]),e("button",{staticClass:"footer__nav--btn footer__nav--menu",attrs:{type:"button"}},[t._v("메뉴")])],1):t._e()])},d=[],v={props:{pageInfo:null},data:function(){return{topShow:!1,currentScroll:window.scrollY}},mounted:function(){window.addEventListener("scroll",this.scrollChk)},destroyed:function(){window.removeEventListener("scroll",this.scrollChk)},methods:{scrollChk:function(){this.currentScroll>window.scrollY&&window.scrollY+window.innerHeight<document.body.offsetHeight||window.scrollY<=0?document.body.classList.contains("isFooterHide")&&document.body.classList.remove("isFooterHide"):document.body.classList.contains("isFooterHide")||document.body.classList.add("isFooterHide"),window.scrollY>100?this.topShow=!0:this.topShow=!1,this.currentScroll=window.scrollY},scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},f=v,h=Object(c["a"])(f,_,d,!1,null,null,null),m=h.exports,b=e("707d"),g=e("f1e6"),C=e("36dd"),y=e("2161"),k=e("5391"),w=e("c0cd"),$=e("4af4"),S=e("3ea6"),L={data:function(){return{guide:!0,pageSet:{},period:{from:"20210101",to:"20211231"}}},components:{Header:u,Footer:m,Datepicker:C["a"],Select:b["a"],DropDowns:g["a"],Confirm:y["a"],TaskReply:w["a"],Editor:$["a"],Reply:S["a"]},methods:{guideOff:function(){this.guide=!1},groupChangeCom:function(){var t=this.$refs.groupName;t.optChange(t.currentIdx)},groupSelConfirm:function(){this.$refs.groupChange.open()},modChange:function(){var t=this,s=event.currentTarget,e=k["c"].parent(s,"task-log__content"),n=s.querySelector(".ph"),a=function(t){n.classList.add("hidden")};e.classList.contains("another")||(s.setAttribute("contenteditable",!0),s.focus(),e.classList.add("owner"),this.$refs.editor.state=!0,s.addEventListener("keydown",a),s.addEventListener("focusout",(function(){s.setAttribute("contenteditable",!1),e.classList.remove("owner"),t.$refs.editor.state=!1,s.removeEventListener("keydown",a)})))},delTask:function(){this.$refs.delTask.state=!0},dayGet:function(t){var s=t.substring(0,4),e=t.substring(4,6),n=t.substring(6,8),a="".concat(s,".").concat(e,".").concat(n);return a},dateSel:function(){this.$refs.date.open()},dateChange:function(t){this.period.from=t.from,this.period.to=t.to},stateToggle:function(){event.currentTarget.classList.toggle("on")},replyShow:function(t){this.$refs.taskReply.block="block"==t,this.$refs.taskReply.state=!0},urlCopy:function(){Object(k["h"])("URL이 복사되었습니다.")}}},E=L,x=(e("d5c0"),Object(c["a"])(E,n,a,!1,null,"624627a0",null));s["default"]=x.exports},"85b7":function(t,s,e){},8671:function(t,s,e){t.exports=e.p+"img/bi.b904e553.png"},c5fa:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,n=t._self._c||s;return 1==t.state?n("div",{staticClass:"mention-member-sel"},[t.noti?n("p",{staticClass:"mention-noti"},[t._v("권한이 있는 구성원만 요청가능합니다.")]):t._e(),n("div",{staticClass:"scrollWrap"},[t.allChk?n("p",{staticClass:"membe-chk-all"},[t._v(" All Member "),n("input",{staticClass:"base-chk type2",attrs:{type:"checkbox"}})]):t._e(),t.sortInfo?n("div",{staticClass:"mention-sort-info"},[t._m(0),t._m(1)]):t._e(),n("ul",{staticClass:"member-list"},t._l(t.list,(function(s,a){return n("li",{key:a},[n("button",{attrs:{type:"button"},on:{click:function(e){return t.addSelList(s)}}},[n("div",{staticClass:"member-list__snippet__pic"},[n("img",{attrs:{src:e("581c"),alt:s.name}})]),n("div",{staticClass:"member-list__snippet"},[n("div",{staticClass:"member-list__snippet__name"},[n("span",[n("span",[t._v(t._s(s.name))]),t._v(" "+t._s(s.grade)+" ")]),n("span",[t._v(t._s(s.pos))])]),n("div",{staticClass:"member-list__snippet__group"},[n("span",[t._v(t._s(s.group1))]),n("span",[t._v(t._s(s.group2))])])])])])})),0)])]):t._e()},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("업무공유시스템구축노드")]),e("span",[t._v("소속부분명 / 소속클러스터명")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("노드명")]),e("span",[t._v("소속부분명 / 소속클러스터명")])])}],o=(e("4160"),e("d3b7"),e("159b"),e("4de4"),e("5391")),i={props:{sortInfo:{type:Boolean,default:!1},allChk:{type:Boolean,default:!1},noti:{type:Boolean,default:!1}},data:function(){return{state:!1,selList:[],list:[{name:"임한화",grade:"Assistant Manager",pos:"Assistant Manager",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"윤여름",grade:"과장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"도겨울",grade:"대리",pos:"직책",group1:"부문명",group2:"노드명"},{name:"임한화",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"윤여름",grade:"과장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"도겨울",grade:"대리",pos:"직책",group1:"부문명",group2:"노드명"},{name:"임한화",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"김하늘",grade:"차장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"윤여름",grade:"과장",pos:"직책",group1:"부문명",group2:"노드명"},{name:"도겨울",grade:"대리",pos:"직책",group1:"부문명",group2:"노드명"}]}},updated:function(){1==this.state&&o["g"].open(this.$el,300,"open")},methods:{open:function(){this.state=!0},close:function(){var t=this;o["g"].close(this.$el,300,"open",(function(){t.state=!1}))},addSelList:function(t){var s=!1;this.selList.length?(this.selList.forEach((function(e){e===t&&(s=!0)})),s||this.selList.push(t),this.$emit("returnList",this.selList)):this.selList.push(t)},selListDel:function(t){var s=this.selList.filter((function(s){return s!==t}));this.selList=s}}},r=i,l=e("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);s["a"]=c.exports},cd19:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 1==this.state?e("div",{staticClass:"reply-write"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"textarea",attrs:{contenteditable:"true"},on:{input:t.mention}},[this.mt?[e("span",{staticClass:"mention"},[t._v("@"+t._s(this.mt))])]:[e("p",{staticClass:"ph"},[t._v(t._s(this.ph))])]],2),t._m(0),e("div",{staticClass:"btn"},[e("span",[e("button",{attrs:{type:"button"},on:{click:t.close}},[e("span",[t._v("취소")])])]),t._m(1)])]),e("div",{ref:"ammWrap",staticClass:"AddMentionMemberWrap"},[e("AddMentionMember",{ref:"amm",attrs:{noti:!0,allChk:!0}})],1)]):t._e()},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"error-msg",staticStyle:{display:"none"}},[t._v("입력 가능한 글자수를 초과하였습니다. "),e("span",[t._v("(530/500)")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("button",{staticClass:"reg",attrs:{type:"button"}},[e("span",[t._v("등록")])])])}],o=e("c5fa"),i={props:{mt:{type:String,default:null},lock:{type:Boolean,default:!1}},data:function(){return{state:!1,mentionMember:"hide",ph:this.lock?"의견을 입력하세요.(Side Task 비공개 상태일 때는 @요청 기능 사용이 제한됩니다.)":"의견을 입력하고, ‘@사용자이름’으로 대상자를 지정해서 요청하세요."}},components:{AddMentionMember:o["a"]},updated:function(){if(1==this.state){var t=this.$el.querySelector(".textarea");t.focus()}},methods:{open:function(){this.state=!0},close:function(){this.state=!1,this.$emit("close")},mentionMemberShow:function(){this.$refs.amm.open()},mention:function(){if("@"==event.data){var t=window.getSelection(),s=t.getRangeAt(0);t.addRange(s);var e=document.createElement("span");s.insertNode(e),this.mentionTop=e.getBoundingClientRect().top-event.currentTarget.getBoundingClientRect().top,e.getBoundingClientRect().top+window.scrollY<400?this.$refs.ammWrap.classList.add("top"):this.$refs.ammWrap.classList.remove("top"),e.remove(),this.$refs.amm.open(),this.$refs.ammWrap.style.cssText="margin-top:".concat(this.mentionTop,"px;")}}}},r=i,l=e("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);s["a"]=c.exports},d5c0:function(t,s,e){"use strict";e("e119")},e119:function(t,s,e){},f1e6:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"base-dropdown",class:["pos-"+this.posY,"pos-"+this.posX]},[e("button",{staticClass:"base-dropdown__btn",attrs:{type:"button"},on:{click:t.open}},[t._t("btn")],2),e("div",{staticClass:"base-dropdown__layer"},[e("div",{staticClass:"inner"},[t._t("menu",null,{prop:this})],2)])])},a=[],o=(e("4795"),e("5391")),i={props:{openChk:{default:!1,type:Boolean}},data:function(){return{openState:!1,posY:"top",posX:"left"}},mounted:function(){this.wrap=this.$el,this.btn=this.wrap.querySelector(".base-dropdown__btn"),this.layer=this.wrap.querySelector(".base-dropdown__layer"),this.menu=this.layer.querySelectorAll("button")},methods:{clickChk:function(){var t=o["c"].parent(event.target,"base-dropdown");t!=this.wrap&&this.close()},open:function(t){var s=this;if(!1===this.openChk||!0===t){var e=this.wrap.getBoundingClientRect(),n=window.innerHeight-window.innerHeight/3;e.left>window.innerWidth/2&&(this.posX="right"),e.top>=n?this.posY="bottom":this.posY="top",!0!==this.openState?(o["g"].open(this.layer,300,"open"),this.btn.ariaExpanded=!0,document.addEventListener("click",this.clickChk),setTimeout((function(){s.openState=!0}),300)):this.close()}else this.$emit("openChk",this)},close:function(){var t=this;!1!==this.openState&&(o["g"].close(this.layer,300,"open"),this.btn.ariaExpanded=!1,setTimeout((function(){t.openState=!1}),300),document.removeEventListener("click",this.clickChk))}}},r=i,l=e("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);s["a"]=c.exports}}]);