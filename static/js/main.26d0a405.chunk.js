(this["webpackJsonpcyberpunk-countdown-2.0"]=this["webpackJsonpcyberpunk-countdown-2.0"]||[]).push([[0],{193:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(18),r=a.n(o),s=a(59),A=a(4),c=a(54),i=a(55),m=a(61),u=a(60),d=(a(193),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={releaseDate:new Date("Nov 19, 2020 00:00:00").getTime(),daysToRelease:null,hoursToRelease:null,minutesToRelease:null,secondsToRelease:null,loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){var t=(new Date).getTime(),a=e.state.releaseDate-t;a<=0&&(clearInterval(e.interval),e.props.releaseHandler(!0)),e.setState({daysToRelease:Math.floor(a/864e5),hoursToRelease:Math.floor(a%864e5/36e5),minutesToRelease:Math.floor(a%36e5/6e4),secondsToRelease:Math.floor(a%6e4/1e3),loading:!1})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",{className:"Countdown"},this.state.loading?l.a.createElement(A.Loading,{animate:!0}):l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,this.state.daysToRelease)," Days"),l.a.createElement("li",null,l.a.createElement("span",null,this.state.hoursToRelease)," Hours"),l.a.createElement("li",null,l.a.createElement("span",null,this.state.minutesToRelease)," Minutes"),l.a.createElement("li",null,l.a.createElement("span",null,this.state.secondsToRelease)," Seconds")))}}]),a}(n.Component));function p(){return l.a.createElement("div",{className:"ReleaseMsg"},l.a.createElement(A.Logo,{animate:!0,size:200}),l.a.createElement(A.Link,{style:{margin:"0px 20px 0px 20px"},href:"https://store.steampowered.com/app/1091500/Cyberpunk_2077/"},"Buy it now!!!"),l.a.createElement(A.Logo,{animate:!0,size:200}))}a(194);var g=a(56),h=a.n(g),E=a(57),v=a.n(E),w=a(58),b={shared:{volume:1},players:{deploy:{sound:{src:[a.n(w).a]}}}};var y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1];return l.a.createElement(A.ThemeProvider,{theme:Object(A.createTheme)()},l.a.createElement(A.SoundsProvider,{sounds:Object(A.createSounds)(b)},l.a.createElement(A.Arwes,{background:h.a,pattern:v.a,animate:!0},l.a.createElement(A.Header,{animate:!0},l.a.createElement("h1",{style:{textShadow:"0 0 4px rgba(161,236,251,0.65)",textAlign:"center",marginTop:"50px"}},"Cyberpunk 2077 Release")),l.a.createElement("div",{className:"App"},l.a.createElement(A.Frame,{level:3,corners:4,layer:"primary",style:{margin:"auto"}},a?l.a.createElement(p,null):l.a.createElement(d,{releaseHandler:function(e){o(e)}})),l.a.createElement(A.Footer,{style:{bottom:0}},l.a.createElement(A.Link,{href:"https://github.com/v-glb/cyberpunk2077-countdown"},"Built by V"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){e.exports=a.p+"static/media/cyber-bg.cd067082.png"},57:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QMaAyMA1SdmlAAAAVRJREFUeNrt26FOw2AUhuFTElzrETNLMNPtJVRVVFbtlnYXKGQFqldANo3EoLDUITazzCxBTNBk53lv4M+XJ/ndKZ52L9uft9eP+Oeqbtgs8O7+cbWO36/PiIgmwd4ojsdIU9n2l7XzNBYZNj9Eos6oTRbcdMAZAwxYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmABBizAAqwFgZ/fv+slHl7q3aobNpn2proujIgo276ep/HgixZgARZgARZgAQYswAIswAIswAIswIAFWIAFWIAFWIABC7AAC7AAC7D+AHZdeN97XRf6ogVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAqxrYNeF973XdaEvWoAFWIAFWIAFGLAAC7AAC7AACzBgARZgARZgARZgAQYswAIswAKsW0p1m1S2/WXtPI1Fhs0nxU1Jj2yxm2sAAAAASUVORK5CYII="},58:function(e,t,a){e.exports=a.p+"static/media/deploy.dd97fbdc.mp3"},62:function(e,t,a){e.exports=a(196)}},[[62,1,2]]]);
//# sourceMappingURL=main.26d0a405.chunk.js.map