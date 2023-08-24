"use strict";(self.webpackChunk_pixi_layout=self.webpackChunk_pixi_layout||[]).push([[151],{"./src/stories/styles/ConditionalStylesMin.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Min:()=>Min,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/argTypes.ts"),_pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var args={minWidth:500,minHeight:500,minWidthColor:"red",minHeightColor:"blue"},LayoutStory=function(){function LayoutStory(props){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,LayoutStory),_defineProperty(this,"view",new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2),this.props=props,this.content=new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.xv(this.generateText(0,0)),this.layout=new _Layout__WEBPACK_IMPORTED_MODULE_2__.A({content:this.content,styles:{padding:50,fontSize:20,position:"center",overflow:"hidden",borderRadius:20,background:"white",maxWidth:"100%",maxHeight:"100%",min:{width:_defineProperty({},props.minWidth,{background:props.minWidthColor}),height:_defineProperty({},props.minHeight,{background:props.minHeightColor})}}}),this.resize(this.w,this.h),this.view.addChild(this.layout)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(LayoutStory,[{key:"generateText",value:function generateText(w,h){var _this$props,_this$props2;return null!==(_this$props=this.props)&&void 0!==_this$props&&_this$props.minWidth||null!==(_this$props2=this.props)&&void 0!==_this$props2&&_this$props2.minHeight?"For width more than ".concat(this.props.minWidth," color will be ").concat(this.props.minWidthColor,".\nFor height more than ").concat(this.props.minHeight," color will be ").concat(this.props.minHeightColor,".\n\nIf non is applied, color will be white\n\nWidth: ").concat(w,"\nHeight: ").concat(h,".\n\n* width styles always will have priority over height styles"):""}},{key:"resize",value:function resize(w,h){var _this$layout;this.w=w,this.h=h,this.props&&(this.content.text=this.generateText(w,h)),null===(_this$layout=this.layout)||void 0===_this$layout||_this$layout.resize(w,h)}}]),LayoutStory}(),Min=function Min(params){return new LayoutStory(params)};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Layout } from '../../Layout';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { Container } from '@pixi/display';\nimport { Text } from '@pixi/text';\n\nconst args = {\n    minWidth: 500,\n    minHeight: 500,\n    minWidthColor: 'red',\n    minHeightColor: 'blue',\n};\n\ntype Props = {\n    minWidth: number,\n    minHeight: number,\n    minWidthColor: string,\n    minHeightColor: string\n};\n\nclass LayoutStory\n{\n    private layout: Layout;\n    private props: Props;\n    view = new Container();\n    w: number;\n    h: number;\n    content: Text;\n\n    constructor(props)\n    {\n        this.props = props;\n\n        this.content = new Text(this.generateText(0, 0));\n\n        this.layout = new Layout({\n            content: this.content,\n            styles: {\n                padding: 50,\n                fontSize: 20,\n                position: 'center',\n                overflow: 'hidden',\n                borderRadius: 20,\n                background: 'white',\n                maxWidth: '100%',\n                maxHeight: '100%',\n                min: {\n                    width: {\n                        [props.minWidth]: {\n                            background: props.minWidthColor,\n                        },\n                    },\n                    height: {\n                        [props.minHeight]: {\n                            background: props.minHeightColor,\n                        },\n                    }\n                }\n            },\n        });\n\n        this.resize(this.w, this.h);\n\n        this.view.addChild(this.layout);\n    }\n\n    private generateText(w: number, h: number)\n    {\n        if (!this.props?.minWidth && !this.props?.minHeight) return '';\n\n        return `For width more than ${this.props.minWidth} color will be ${this.props.minWidthColor}.\nFor height more than ${this.props.minHeight} color will be ${this.props.minHeightColor}.\n\nIf non is applied, color will be white\n\nWidth: ${w}\nHeight: ${h}.\n\n* width styles always will have priority over height styles`;\n    }\n\n    resize(w: number, h: number)\n    {\n        this.w = w;\n        this.h = h;\n\n        if (this.props)\n        {\n            this.content.text = this.generateText(w, h);\n        }\n\n        this.layout?.resize(w, h);\n    }\n}\n\nexport const Min = (params: any) => new LayoutStory(params);\n\nexport default {\n    title: 'Styles',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{min:{startLoc:{col:19,line:95},endLoc:{col:59,line:95},startBody:{col:19,line:95},endBody:{col:59,line:95}}}}},title:"Styles",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_3__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_3__.V)(args)};var __namedExportsOrder=["Min"]}}]);