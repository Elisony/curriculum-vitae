/* DaTouWang URL: www.datouwang.com */
!function () {
    var cssCode = window.cssCode = `
/*你好，我是李义，一名前端工程师。
请允许我做一个简单的自我介绍，但是纯文字太单调，所以我想来点特别的。
首先我准备一下样式。*/
*{
	transition: all .5s;
}
/*白色伤眼睛，来点暗色系的背景吧！*/
html{
	background: #333034;
}
/*让我们给它加一个边框吧*/
#code{
    border: 2px solid #00FF1B;
    padding: 20px;
}
/*代码看不清楚？来点高亮吧！*/
.token.selector{
    color: #a6e22e;
}
.token.property{
    color: #f92672;
}
.token.punctuation{
    color: #f8f8f2;
}
.token.function{
    color: red;
}
#code{
    color: #f8f8f2;
}
/*来点动画吧*/
#code{
    animation: breath 4s linear infinite;
}
/*现在开始写简历吧*/
/*首先我需要一张纸*/
`
    var htmlCode = window.htmlCode = `
#code{
    display: inline-block;
    position: fixed;
    right: 0;
    width: 50%;
    height: 80%;
    margin-right: 20px;
}
#paper{
    position: fixed;
    left: 0;
    width: 45%;
    height: 80%;
    background: linear-gradient(to bottom, #f4f39e, #f5da41); 
    padding: 20px;
    margin-left: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    margin-top: 30%;
    
}
/*掉下去了！怎么办？*/
/*没关系，再用胶带粘住它*/
#paper:after {
    width: 25%;
    height: 5%;
    content: " ";
    margin-left: -90px;
    border: 1px solid rgba(200, 200, 200, .8);
    background: rgba(254, 254, 254, .6);
    box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
    transform: rotate(-5deg);
    position: absolute;
    left: 50%;
    top:-15px;
}
#paper{
    margin-top: 0;
}
`
    var markdown = window.markdown = `

## 基本资料

**姓名：李义**
**年龄：25**
**坐标：北京**
**邮箱: 15696801082@163.com**
**手机/微信：15696801082**
**工作年限：3年**
**Github:https://github.com/Elisony**

## 技能介绍

1 熟悉W3C 标准，熟练掌握 HTML5 +CSS3 页面布局，熟练掌握原生 JS，熟悉使用 Bootstrap 等第三方类库。
2 熟练编写html、CSS、JavaScript代码，了解相关技术的最新标准；
3 掌握localStorage、sessionStorage等前端存储方案，记录用户操作习惯或常用数据，从而降低HTTP请求，提升用户体验；
4 熟练掌握vue.js框架以及element-ui相应插件，如vue-cli、axios、vue-router、vuex等；
5 熟悉Ajax与后台数据进行交互，与后端工作有效对接，优化网站前端性
6 熟练使用微信小程序
7 熟悉使用git代码管理
8 熟练使用uni-App框架
`
    var changeCode = window.changeCode = `
/*这样看起来很不舒服？让我们把简历转换成更易读的显示方式吧*/
`
    var conclusion = window.conclusion = `
/*好了，这个就是我的初步简历了。如果您想要更多了解的话，请联系我哦*/
`
}.call()