(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),u=n.n(a),o=(n(15),n(2)),s=n(3),i=n(5),l=n(4),d=n(6),b=(n(17),n(1)),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).getSecondAngle=n.getSecondAngle.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getSecondAngle",value:function(){return 270+6*this.props.currSecond}},{key:"render",value:function(){var e={transform:"rotate("+this.getSecondAngle()+"deg)"};return c.a.createElement("div",{className:"clock-second-hand",style:e})}}]),t}(r.Component),h=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).getMinuteAngle=n.getMinuteAngle.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getMinuteAngle",value:function(){return 270+6*this.props.currMinute}},{key:"render",value:function(){var e={transform:"rotate("+this.getMinuteAngle()+"deg)"};return c.a.createElement("div",{className:"clock-minute-hand",style:e})}}]),t}(r.Component),m=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).getHourAngle=n.getHourAngle.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getHourAngle",value:function(){return 270+30*this.props.currHour}},{key:"render",value:function(){var e={transform:"rotate("+this.getHourAngle()+"deg)"};return c.a.createElement("div",{className:"clock-hour-hand",style:e})}}]),t}(r.Component),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={seconds:0,minutes:0,hours:0},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var t=new Date;e.setState({seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours()>12?t.getHours()-12:t.getHours()})},1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"clock-container"},c.a.createElement("div",{className:"clock-base"},c.a.createElement("div",{className:"clock-center"}),c.a.createElement(g,{currSecond:this.state.seconds}),c.a.createElement(h,{currMinute:this.state.minutes}),c.a.createElement(m,{currHour:this.state.hours})))}}]),t}(r.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(j,null))}}]),t}(r.Component);u.a.render(c.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.a7686b94.chunk.js.map