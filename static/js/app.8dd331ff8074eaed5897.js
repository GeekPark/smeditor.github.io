webpackJsonp([1],{"+Yzm":function(e,t){},CpeF:function(e,t){},"H7/9":function(e,t){},NHnr:function(e,t,n){"use strict";function i(e){n("H7/9")}function o(e){n("c9KF")}function s(e){n("oMMC")}function r(e){n("w0iy")}function c(e){n("sS2A")}function a(e){n("k3MO")}function l(e){Ie().onfocus=function(t){e.closeAlert()},Fe(".input-area"),Ie().onkeypress=function(e){var t=m();return 13===e.keyCode&&u(t)?(document.execCommand("removeFormat",!1,""),this.innerHTML=this.innerHTML+"<p><br></p>",document.getSelection().collapse(this,this.childNodes.length-1),!1):13===e.keyCode&&"blockquote"===t.className&&"<br>"===t.lastChild.innerHTML?(t.lastChild.innerHTML="",document.execCommand("removeFormat",!1,""),this.innerHTML=this.innerHTML+"<p></p>",document.getSelection().collapse(this,this.childNodes.length-1),!1):13===e.keyCode&&"pre"===t.localName&&"<br>"===t.lastChild.innerHTML?(t.lastChild.innerHTML="",document.execCommand("removeFormat",!1,""),this.innerHTML=this.innerHTML+"<p><span><br></span></p>",document.getSelection().collapse(this,this.childNodes.length-1),!1):void 0},Ie().onkeydown=function(e){var t=m();return 8===e.keyCode&&d(t)?(t.innerHTML="<p></p>",!1):t.innerHTML.length<=1&&8===e.keyCode&&u(t)?(t.innerHTML="",!1):void 0},Ie().addEventListener("paste",function(t){t.preventDefault();var n=(t.clipboardData||t.originalEvent.clipboardData).items;for(var i in n){var o=n[i];if("file"===o.kind){var s=o.getAsFile();e.upload(s,function(t){e.insertImageHtml(t)})}}},!1)}function u(e){return"image-caption"===e.className}function d(e){return"image-desc"===e.className}function m(){if(document.selection)return document.selection.createRange().parentElement();var e=window.getSelection();return e.rangeCount>0?e.getRangeAt(0).startContainer.parentNode:void 0}function f(e){e.closeAlert(),e.isInsertLinkShow=!1,Ie().focus();var t=e.cursor;if(window.getSelection){var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(t)}else document.createRange?window.getSelection().addRange(t):document.selection&&t.select()}function p(e){n("+Yzm")}function v(e){n("m4rd")}function h(e){n("CpeF")}function k(e){n("g4YQ")}function g(e){n("ihk8")}Object.defineProperty(t,"__esModule",{value:!0});var C=n("7+uW"),_={name:"app",mounted:function(){var e=document.createElement("link");e.href="https://ws3.sinaimg.cn/large/006tNc79ly1fnyr74sc8ej305m05mmx9.jpg",e.rel="shortcut icon",document.head.appendChild(e),document.title="SMEditor (石墨文档编辑器)"}},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},w=[],x={render:b,staticRenderFns:w},S=x,L=n("VU/8"),y=i,P=L(_,S,!1,y,null,null),F=P.exports,I=n("/ocq"),H=n("c/Tr"),M=n.n(H),z=function(e){return"https://om4m02471.qnssl.com/2018/editor/"+e+".svg?1"},T=["bold","italic","underline","strikethrough","color","listOrdered","listUnordered","listCheck","indent","outdent","alignLeft","alignCenter","alignRight","undo","redo","removeFormat","insertVideo","insertLink","insertImage","insertLine","insertQuote","insertBlock"],N={};T.forEach(function(e){N[e]=z(e.toLowerCase())});var V=N,A={name:"ColorPicker",data:function(){return{selectColor:"#ffffff",names:["白","漆黑","红","橙","黄","葱绿","湖蓝","天色","紫","白练","鼠","虹","薄卵","蒸栗","白绿","蓝白","天空","紫水晶","白鼠","墨","甚三红","雄黄","金子","薄青","白群","薄花","紫苑","灰青","石墨","红绯","红金","枯茶","绿青","浅葱","薄缥","紫霞","薄钝","黑","朱绯","褐","黑茶","深绿","苍蓝","琉璃","葡萄"],colors:["#ffffff","#0d0015","#fe2c23","#ff9900","#ffd900","#a3e043","#37d9f0","#4da8ee","#aa17d0","#f3f3f1","#949494","#fcdbd6","#fde9d0","#fff0cf","#d4e9d6","#def3f3","#cee0ef","#dfdbec","#dcdedd","#595856","#ee837d","#f8c387","#e6b322","#9abd9d","#83ccd2","#89b0ce","#9389b1","#c1c6ca","#41464b","#d51228","#cf770b","#8d634a","#557b5c","#01a3b0","#3776a6","#765c83","#adadad","#2b2b2b","#a91913","#884702","#563725","#00552e","#00767a","#194e77","#530e6f"]}},props:["ColorPickerClick"],methods:{handleColorHover:function(e){this.selectColor=this.colors[e]},handleColorClick:function(e){this.selectColor=this.colors[e],this.ColorPickerClick(this.selectColor)}}},E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"color-picker-options"},[e._l(e.colors,function(t,i){return n("span",{staticClass:"ql-picker-item ql-primary",style:{backgroundColor:t},attrs:{"data-light":"light","data-value":t,title:e.names[i]},on:{click:function(t){e.handleColorClick(i)},mouseover:function(t){e.handleColorHover(i)}}})}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectColor,expression:"selectColor"}],staticClass:"color-input",attrs:{type:"text",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false",maxlength:"6"},domProps:{value:e.selectColor},on:{input:function(t){t.target.composing||(e.selectColor=t.target.value)}}})],2)},R=[],j={render:E,staticRenderFns:R},$=j,U=n("VU/8"),q=o,O=U(A,$,!1,q,null,null),B=O.exports,Q={name:"FontSizePicker",data:function(){return{sizes:[10,13,16,18,24,32,48],fontSize:16}},props:["FontSizePickerClick"],methods:{handleFontSizeClick:function(e,t){this.fontSize=e,this.FontSizePickerClick(e,t)}}},W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"font-size-picker-options"},[n("ul",e._l(e.sizes,function(t,i){return n("li",{class:{fontSizeActive:e.fontSize===t},on:{click:function(n){e.handleFontSizeClick(t,i)}}},[e._v(e._s(t))])}))])},D=[],K={render:W,staticRenderFns:D},Y=K,J=n("VU/8"),X=s,G=J(Q,Y,!1,X,null,null),Z=G.exports,ee={name:"InsertLink",data:function(){return{link:"",text:""}},props:["insertLink","cancel"],methods:{conformClick:function(){this.insertLink(this.link,this.text)},cancelClick:function(){this.cancel()}}},te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"insert-link"},[n("div",{staticClass:"insert-link-box"},[n("span",{staticClass:"cancel",on:{click:e.cancelClick}},[e._v("X")]),e._v(" "),n("p",[e._v("插入链接")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],attrs:{type:"text",name:"link",placeholder:"链接地址"},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",name:"text",placeholder:"链接文本"},domProps:{value:e.text},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.conformClick(t)},input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.conformClick}},[e._v(" 确认")])])])},ne=[],ie={render:te,staticRenderFns:ne},oe=ie,se=n("VU/8"),re=r,ce=se(ee,oe,!1,re,null,null),ae=ce.exports,le={name:"InsertVideo",data:function(){return{text:""}},props:["insertVideo","cancel"],methods:{conformClick:function(){this.insertVideo(this.text)},cancelClick:function(){this.cancel()}}},ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"insert-video"},[n("div",{staticClass:"insert-video-box"},[n("span",{staticClass:"cancel",on:{click:e.cancelClick}},[e._v("X")]),e._v(" "),n("p",[e._v("插入视频")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",name:"text",placeholder:"视频地址 <iframe src='...'></iframe>"},domProps:{value:e.text},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.conformClick(t)},input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.conformClick}},[e._v(" 确认")])])])},de=[],me={render:ue,staticRenderFns:de},fe=me,pe=n("VU/8"),ve=c,he=pe(le,fe,!1,ve,null,null),ke=he.exports,ge={name:"Insert",data:function(){return{icons:V,labels:["图片","分割线","视频","引用","代码块"],names:["insertImage","insertLine","insertVideo","insertQuote","insertBlock"]}},props:["insertImageClick","insertLink","insertLine","insertVideo","insertQuote","insertBlock","uploadImages"],methods:{handleFileChange:function(){var e=this.$refs.input[0],t=e.files;this.uploadImages(t)},insertClick:function(e,t){this[e]&&this[e]()}}},Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"insert-options-items"},[n("ul",e._l(e.names,function(t,i){return n("li",{on:{click:function(n){e.insertClick(t,i)}}},[0===i?n("input",{ref:"input",refInFor:!0,attrs:{id:"images_upload",type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",multiple:"multiple"},on:{change:e.handleFileChange}}):e._e(),e._v(" "),n("img",{class:t,attrs:{src:e.icons[t]}}),e._v(" "),n("span",[e._v(e._s(e.labels[i]))])])}))])},_e=[],be={render:Ce,staticRenderFns:_e},we=be,xe=n("VU/8"),Se=a,Le=xe(ge,we,!1,Se,null,null),ye=Le.exports,Pe=function(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)},Fe=function(e){document.querySelector(e).focus()},Ie=function(){return document.querySelector(".smeditor .input-area")},He={name:"smeditor",components:{"color-picker":B,"font-size-picker":Z,"insert-options":ye,"insert-link":ae,"insert-video":ke},props:["config"],data:function(){return{icons:V,styles:[],basicIcons:["bold","underline","italic","strikethrough"],basicStyleNames:["粗体","斜体","下划线","中划线"],isColorPickerShow:!1,isFontSizePickerShow:!1,isInsertShow:!1,isInsertLinkShow:!1,isInsertVideoShow:!1,selectWords:"",fontSize:16,cursor:{}}},methods:{kenter:function(e){if(e.stopPropagation(),0===this.styles.length)return!1},mouseup:function(){var e=this,t=window.getSelection().toString();if(t.length<1)return!1;this.selectWords=t,setTimeout(function(){e.selectWords=""},1500)},mouseover:function(e){var t="";e.path.forEach(function(e){"button"===e.localName&&""===t&&(t=e)})},redo:function(){document.execCommand("redo")},undo:function(){document.execCommand("undo")},removeFormat:function(){document.execCommand("removeFormat"),this.styles=[],this.FontSize=16},FontSizePickerClick:function(e,t){document.execCommand("FontSize",!1,t+1),this.fontSize=e,this.closeAlert()},basicStyleClick:function(e){document.execCommand(e,!1,null),-1===this.styles.indexOf(e)?this.styles.push(e):Pe(this.styles,e)},ColorPickerClick:function(e){document.execCommand("forecolor",!1,e),this.closeAlert()},insertImageClick:function(e,t){this.closeAlert()},uploadImages:function(e){var t=this;M()(e).forEach(function(e){t.upload(e,function(e){t.insertImageHtml(e)})})},upload:function(e,t){var n=this.config.uploadUrl,i=new XMLHttpRequest,o=new FormData,s=this;o.append(this.config.uploadName,e),i.open("POST",n,!0),i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=JSON.parse(i.responseText),n=s.config.uploadCallback(e);t(n)}else{if(s.config.uploadFailed&&s.config.uploadFailed(i.responseText),location.href.indexOf("ericjj.com/smeditor.github.io")>0){var o=s.config.uploadCallback("");t(o)}alert("upload failed!")}},i.send(o)},insertImageHtml:function(e){document.execCommand("insertHTML",!1,'\n              <br><div class="image-desc" style="text-align: center; color: #333;">\n                <img class="uploaded-img" src='+e+' max-width="100%" width="auto" height="auto">\n                <br>\n                <div class="image-caption" style="min-width: 20%; max-width: 80%; height: 35px; display: inline-block; padding: 10px 10px 0px 10px; margin: 0 auto; border-bottom: 1px solid #d9d9d9; font-size: 16px; color: #999; content: "";"></div>\n              </div>')},insertLinkClick:function(){this.closeAlert(),this.cursor=window.getSelection().getRangeAt(0),this.isInsertLinkShow=!0},insertLink:function(e,t){f(this),document.execCommand("insertHTML",!1,"<a href="+e+' target="_blank">'+t+"</>")},insertLinkCancel:function(){this.closeAlert(),this.isInsertLinkShow=!1},insertVideoClick:function(){this.closeAlert(),this.cursor=window.getSelection().getRangeAt(0),this.isInsertVideoShow=!0},insertVideo:function(e){f(this),document.execCommand("insertHTML",!1,e)},insertVideoCancel:function(){this.closeAlert(),this.isInsertVideoShow=!1},insertLine:function(){this.closeAlert(),document.execCommand("insertHTML",!1,"<p><hr></p>")},insertBlock:function(){this.closeAlert(),document.execCommand("insertHTML",!1,"<pre><code><span><br><span></code></pre>")},insertQuote:function(){document.execCommand("insertHTML",!1,'<div class="blockquote"><blockquote style="color: #B2B2B2; padding-left: 15px; border-left: 5px solid #B2B2B2; margin-top: 0px; margin-bottom: 0px;"><span><br></span></blockquote></div>')},insertList:function(e){this.closeAlert(),document.execCommand("insert"+e,!1,"")},insertCheck:function(){this.closeAlert(),document.execCommand("insertHTML",!1,'\n        <ul class="unchecked-list"><li class="unchecked">&nbsp</li></ul>\n      '),document.querySelectorAll(".unchecked-list").forEach(function(e){e.childNodes.forEach(function(e){e.onclick=function(e){var t="unchecked"===e.target.className?"checked":"unchecked";e.target.className=t,console.log(e.target.className)}})})},indent:function(){document.execCommand("indent",!1,null)},outdent:function(){document.execCommand("outdent",!1,null)},align:function(e){document.execCommand("Justify"+e)},backupClick:function(){window.localStorage.setItem("smeditor",Ie().innerHTML)},restoreClick:function(){Ie().innerHTML=window.localStorage.getItem("smeditor")||""},previewClick:function(){window.localStorage.setItem("smeditorPreview",Ie().innerHTML);var e=this.$router.resolve({name:"Preview"}),t=e.href;window.open(t,"_blank")},closeAlert:function(){var e=this;setTimeout(function(){e.isFontSizePickerShow=!1,e.isInsertShow=!1,e.isColorPickerShow=!1},200)}},mounted:function(){document.execCommand("insertHTML",!1,"<p><br></p>"),l(this)}},Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"smeditor",attrs:{id:"smeditor"}},[n("div",{staticClass:"buttons"},[n("button",{staticClass:"undo",attrs:{title:"撤销"},on:{click:e.undo,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.undo}})]),e._v(" "),n("button",{staticClass:"redo",attrs:{title:"重做"},on:{click:e.redo,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.redo}})]),e._v(" "),n("button",{staticClass:"remove-format",attrs:{title:"清式"},on:{click:e.removeFormat,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.removeFormat}})]),e._v(" "),n("button",{staticClass:"font-size",attrs:{title:"字号"},on:{click:function(t){e.isFontSizePickerShow=!e.isFontSizePickerShow},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("span",[e._v(" "+e._s(e.fontSize)+" ")]),e._v(" "),n("font-size-picker",{directives:[{name:"show",rawName:"v-show",value:e.isFontSizePickerShow,expression:"isFontSizePickerShow"}],attrs:{FontSizePickerClick:e.FontSizePickerClick}})],1),e._v(" "),e._l(e.basicIcons,function(t,i){return n("button",{class:{buttonsActive:e.styles.indexOf(t)>-1},attrs:{title:e.basicStyleNames[Object.keys(e.basicIcons).indexOf(t)]},on:{click:function(n){e.basicStyleClick(t)},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons[t]}})])}),e._v(" "),n("button",{attrs:{title:"文本颜色"},on:{mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.color},on:{click:function(t){e.isColorPickerShow=!e.isColorPickerShow}}}),e._v(" "),n("color-picker",{directives:[{name:"show",rawName:"v-show",value:e.isColorPickerShow,expression:"isColorPickerShow"}],attrs:{ColorPickerClick:e.ColorPickerClick}})],1),e._v(" "),n("button",{staticClass:"indent",attrs:{title:"增加缩进"},on:{click:e.indent,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.indent}})]),e._v(" "),n("button",{staticClass:"outdent",attrs:{title:"减少缩进"},on:{click:e.outdent,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.outdent}})]),e._v(" "),n("button",{staticClass:"insert-ol",attrs:{title:"有序列表"},on:{click:function(t){e.insertList("OrderedList")},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.listOrdered}})]),e._v(" "),n("button",{staticClass:"insert-ul",attrs:{title:"无序列表"},on:{click:function(t){e.insertList("UnorderedList")},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.listUnordered}})]),e._v(" "),n("button",{staticClass:"align-left",attrs:{title:"左对齐"},on:{click:function(t){e.align("Left")},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.alignLeft}})]),e._v(" "),n("button",{staticClass:"align-center",attrs:{title:"居中对齐"},on:{click:function(t){e.align("Center")},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.alignCenter}})]),e._v(" "),n("button",{staticClass:"align-right",attrs:{title:"右对齐"},on:{click:function(t){e.align("Right")},mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.alignRight}})]),e._v(" "),n("button",{staticClass:"insert-link",attrs:{title:"插入链接"},on:{click:e.insertLinkClick,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}},[n("img",{attrs:{src:e.icons.insertLink}})]),e._v(" "),n("button",{staticClass:"insert-options",on:{click:function(t){e.isInsertShow=!e.isInsertShow}}},[n("span",{staticClass:"insert-options-label"}),e._v(" "),n("insert-options",{directives:[{name:"show",rawName:"v-show",value:e.isInsertShow,expression:"isInsertShow"}],attrs:{insertImage:e.insertImageClick,insertLink:e.insertLink,insertLine:e.insertLine,insertVideo:e.insertVideoClick,insertQuote:e.insertQuote,insertBlock:e.insertBlock,uploadImages:e.uploadImages}})],1),e._v(" "),n("button",{staticClass:"backup",attrs:{title:"Ctrl + S"},on:{click:e.backupClick,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}}),e._v(" "),n("button",{staticClass:"restore",on:{click:e.restoreClick}}),e._v(" "),n("button",{staticClass:"preview",attrs:{title:"Ctrl + P"},on:{click:e.previewClick,mouseover:function(t){t.stopPropagation(),e.mouseover(t)}}})],2),e._v(" "),n("div",{staticClass:"input-area",attrs:{contenteditable:"true",autocorrect:"off",autocomplete:"off",spellcheck:"false",id:"input-area"},on:{mouseup:e.mouseup,keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.kenter(t)},function(t){return("button"in t||83===t.keyCode)&&t.ctrlKey?void e.backupClick(t):null},function(t){return("button"in t||80===t.keyCode)&&t.ctrlKey?void e.previewClick(t):null}]}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.selectWords,expression:"selectWords"}],staticClass:"select-words"},[e._v(e._s(e.selectWords.length)+"个字")]),e._v(" "),e.isInsertLinkShow?n("insert-link",{attrs:{insertLink:e.insertLink,cancel:e.insertLinkCancel}}):e._e(),e._v(" "),e.isInsertVideoShow?n("insert-video",{attrs:{insertVideo:e.insertVideo,cancel:e.insertVideoCancel}}):e._e()],1)},ze=[],Te={render:Me,staticRenderFns:ze},Ne=Te,Ve=n("VU/8"),Ae=p,Ee=Ve(He,Ne,!1,Ae,null,null),Re=Ee.exports,je={},$e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vfooter"},[n("li",[e._v("@2018")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("li",[n("router-link",{attrs:{to:"donation",target:"_blank"}},[e._v("捐助")])],1)])},Ue=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"https://github.com/ericjjj/smeditor",target:"_blank"}},[e._v("Github")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"https://github.com/ericjjj/smeditor/issues",target:"_blank"}},[e._v("反馈")])])}],qe={render:$e,staticRenderFns:Ue},Oe=qe,Be=n("VU/8"),Qe=v,We=Be(je,Oe,!1,Qe,null,null),De=We.exports,Ke={uploadUrl:"https://jsonplaceholder.typicode.com/posts/",uploadName:"",uploadParams:{},uploadCallback:function(e){return console.log(e),"blob:https://fiddle.jshell.net/00a0b0b4-d19a-4860-9796-137692aef36f"},uploadFailed:function(e){console.log(e+"仅供测试, 并非真正上传")}},Ye={name:"app",components:{smeditor:Re,vfooter:De},data:function(){return{config:Ke}}},Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),e._v(" "),n("div",{staticClass:"bg"}),e._v(" "),n("smeditor",{staticClass:"smeditor-wrapper",attrs:{config:e.config}}),e._v(" "),n("vfooter")],1)},Xe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e._v("SMEditor\n    "),n("span",[e._v("(石墨文档编辑器)")])])}],Ge={render:Je,staticRenderFns:Xe},Ze=Ge,et=n("VU/8"),tt=h,nt=et(Ye,Ze,!1,tt,null,null),it=nt.exports,ot={},st=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},rt=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"donation"},[n("img",{attrs:{src:"https://ws4.sinaimg.cn/large/006tNc79ly1fnyqbykokqj30w00w0wh9.jpg"}})])}],ct={render:st,staticRenderFns:rt},at=ct,lt=n("VU/8"),ut=k,dt=lt(ot,at,!1,ut,null,null),mt=dt.exports,ft={data:function(){return{content:""}},mounted:function(){this.content=window.localStorage.getItem("smeditorPreview")}},pt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("div",{staticClass:"preview-wrapper",domProps:{innerHTML:e._s(e.content)}})])},vt=[],ht={render:pt,staticRenderFns:vt},kt=ht,gt=n("VU/8"),Ct=g,_t=gt(ft,kt,!1,Ct,null,null),bt=_t.exports;C.a.use(I.a);var wt=new I.a({mode:"history",routes:[{path:"/",name:"Home",component:it},{path:"/preview",name:"Preview",component:bt},{path:"/donation",name:"Donation",component:mt}]});C.a.config.productionTip=!1,new C.a({el:"#app",router:wt,template:"<App/>",components:{App:F}})},c9KF:function(e,t){},g4YQ:function(e,t){},ihk8:function(e,t){},k3MO:function(e,t){},m4rd:function(e,t){},oMMC:function(e,t){},sS2A:function(e,t){},w0iy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8dd331ff8074eaed5897.js.map