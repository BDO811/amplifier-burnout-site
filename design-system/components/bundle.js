/* @ds-bundle: {"format": 4, "namespace": "AmplifierBurnout", "components": [{"name": "Button"}, {"name": "Kicker"}, {"name": "NavBar"}, {"name": "Hero"}, {"name": "StatCard"}, {"name": "FeatureCard"}, {"name": "StateChip"}, {"name": "TrendChart"}, {"name": "SnapshotPanel"}, {"name": "PricingCard"}, {"name": "Step"}, {"name": "CheckItem"}, {"name": "Footer"}]} */
(function(){
var React=window.React,h=React.createElement;
function cx(){return Array.prototype.filter.call(arguments,Boolean).join(' ');}
function Button(p){var v=p.variant||'primary';var tag=p.href?'a':'button';
 return h(tag,{className:cx('ab-btn','ab-btn-'+v,p.className),href:p.href,type:p.href?undefined:(p.type||'button'),onClick:p.onClick,disabled:p.disabled},p.children);}
function Kicker(p){return h('span',{className:'ab-kicker','data-accent':p.accent||'brand'},p.children);}
function NavBar(p){var links=p.links||[];
 return h('header',{className:'ab-nav'},
  h('span',{className:'ab-wordmark'},p.brand||'Amplifier'),
  h('nav',{className:'ab-nav-links','aria-label':'Sections'},links.map(function(l){return h('a',{key:l.label,href:l.href||'#'},l.label);})),
  h('span',{className:'ab-nav-actions'},p.actions));}
function Hero(p){return h('section',{className:'ab-hero'},
  p.kicker&&h(Kicker,{accent:p.accent},p.kicker),
  h('h1',{className:'ab-display'},p.line1,p.line2&&h('em',null,h('br'),p.line2)),
  p.lede&&h('p',{className:'ab-lede'},p.lede),
  p.actions&&h('div',{className:'ab-row'},p.actions));}
function StatCard(p){return h('figure',{className:'ab-stat'},
  h('div',{className:'ab-stat-value'},p.value),
  h('figcaption',null,p.label,p.source&&h('span',{className:'ab-stat-src'},p.source)));}
function FeatureCard(p){return h('article',{className:'ab-card'},
  p.kicker&&h(Kicker,{accent:p.accent},p.kicker),
  h('h3',{className:'ab-h3'},p.title),h('p',{className:'ab-body'},p.children));}
var STATES={baseline:'Baseline',watch:'Watch',elevated:'Elevated',high:'High'};
function StateChip(p){var s=p.state||'baseline';
 return h('span',{className:'ab-chip','data-state':s},h('i',{'aria-hidden':'true'}),p.label||STATES[s]);}
function pts(a,w,hh,pad){var n=a.length;return a.map(function(v,i){var x=pad+i*(w-2*pad)/(n-1);var y=hh-pad-v*(hh-2*pad);return x.toFixed(1)+','+y.toFixed(1);}).join(' ');}
function TrendChart(p){var w=p.width||360,hh=p.height||160,pad=8;var band=p.band||[0.4,0.6];
 var y1=hh-pad-band[1]*(hh-2*pad),y2=hh-pad-band[0]*(hh-2*pad);
 return h('figure',{className:'ab-trend'},
  h('svg',{viewBox:'0 0 '+w+' '+hh,width:'100%',role:'img','aria-label':p.label||'Fatigue and stress trend against your baseline'},
   h('rect',{x:0,y:y1,width:w,height:y2-y1,className:'ab-band'}),
   h('line',{x1:0,x2:w,y1:(y1+y2)/2,y2:(y1+y2)/2,className:'ab-mid'}),
   h('polyline',{points:pts(p.fatigue,w,hh,pad),className:'ab-line-fatigue',fill:'none'}),
   h('polyline',{points:pts(p.stress,w,hh,pad),className:'ab-line-stress',fill:'none'})),
  h('figcaption',{className:'ab-legend'},
   h('span',null,h('svg',{width:22,height:6,'aria-hidden':'true'},h('line',{x1:0,x2:22,y1:3,y2:3,className:'ab-line-fatigue'})),' Fatigue'),
   h('span',null,h('svg',{width:22,height:6,'aria-hidden':'true'},h('line',{x1:0,x2:22,y1:3,y2:3,className:'ab-line-stress'})),' Stress'),
   h('span',null,h('i',{className:'ab-swatch-band','aria-hidden':'true'}),' Your baseline')));}
function SnapshotPanel(p){return h('aside',{className:'ab-panel'},
  h('span',{className:'ab-panel-label'},p.title||'Live vocal signal'),
  (p.rows||[]).map(function(r){return h('div',{className:'ab-panel-row',key:r.label},h('span',null,r.label),h('em',{'data-tone':r.tone||'good'},r.value));}));}
function PricingCard(p){return h('article',{className:cx('ab-card','ab-price',p.featured&&'is-featured')},
  h('span',{className:'ab-panel-label ab-price-name'},p.name),
  h('div',{className:'ab-price-amount'},p.price,p.per&&h('small',null,p.per)),
  h('p',{className:'ab-body'},p.detail),
  p.cta&&h('div',null,p.cta));}
function Step(p){return h('li',{className:'ab-step'},h('span',{className:'ab-step-n'},p.n),h('div',null,h('h3',{className:'ab-h3'},p.title),h('p',{className:'ab-body'},p.children)));}
function CheckItem(p){return h('li',{className:'ab-check'},h('svg',{width:18,height:18,viewBox:'0 0 18 18','aria-hidden':'true'},h('path',{d:'M3 9.5l4 4 8-9',fill:'none',stroke:'currentColor',strokeWidth:2})),h('span',null,p.children));}
function Footer(p){return h('footer',{className:'ab-footer'},h('span',null,'AMPLIFIER HEALTH'),h('span',null,p.note||'WELLNESS SIGNAL, NOT A DIAGNOSIS'));}
window.AmplifierBurnout={Button:Button,Kicker:Kicker,NavBar:NavBar,Hero:Hero,StatCard:StatCard,FeatureCard:FeatureCard,StateChip:StateChip,TrendChart:TrendChart,SnapshotPanel:SnapshotPanel,PricingCard:PricingCard,Step:Step,CheckItem:CheckItem,Footer:Footer};
})();
