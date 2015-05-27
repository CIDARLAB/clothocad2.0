/**
 * 
 * Nested Sortable Plugin for jQuery/Interface.
 * 
 * Version 1.0.1
 *  
 *Change Log:
 * 1.0 
 *       Initial Release
 * 1.0.1
 *       Added noNestingClass option to prevent nesting in some elements.
 *
 * Copyright (c) 2007 Bernardo de Padua dos Santos
 * Dual licensed under the MIT (MIT-LICENSE.txt) 
 * and GPL (GPL-LICENSE.txt) licenses.
 * 
 * http://code.google.com/p/nestedsortables/
 * 
 * Compressed using Dean Edwards' Packer (http://dean.edwards.name/packer/)
 * 
 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2.6={28:9(e,o){5(e.L){2.6.1R(e);8 2.6.1K(e)}r{8 2.6.1D(e,o)}},1D:2.p.2b,1K:9(e){5(!2.v.A){8}5(!(e.1q.1r.1k()>0)){8}5(!e.3.Z){2.p.2n(e);e.3.Z=C}7 a=2.6.1A(e);7 b=2.6.1v(e,a);7 c=(!a)?2.6.24(e):n;7 d=n;5(a){5(e.3.1m===a&&e.3.1W===b){d=C}}r 5(e.3.1m===a&&e.3.1V===c){d=C}e.3.1m=a;e.3.1W=b;e.3.1V=c;5(d){8}5(a!==N){5(b){2.6.1U(e,a)}r{2.6.1Q(e,a)}}r 5(c){2.6.1P(e)}},1R:9(e){5(!e.3.16){8 n}7 a=e.3.15;7 b=e.3.14;7 c=2.v.A.B.2o;7 d=2.1i.1L();5((c.y-d.M)-d.t>-a){1H.1F(0,b)}5(c.y-d.t<a){1H.1F(0,-b)}},18:9(a){2.6.1C(a);8 2.6.1B(a)},1B:2.p.18,1C:9(a){5(2.6.S&&2.6.D){2.6.D.1y(2.6.S);2.6.D=N;2.6.S=""}5(2.1d.1w.L){2.1d.1w.3.Z=n}},X:9(s){5(2(\'#\'+s).q(0).L){8 2.6.27(s)}r{8 2.6.29(s)}},29:2.p.X,27:9(s){7 i;7 h=\'\';7 j=\'\';7 o={};7 e;7 k=9(f){7 g=[];1X=2(f).J(\'.\'+2.p.1b[s]);1X.1p(9(i){7 a=2.2s(m,\'1l\');5(a&&a.1S){a=a.1S(e.3.11)[0]}5(h.I>0){h+=\'&\'}h+=s+j+\'[\'+i+\'][1l]=\'+a;g[i]={1l:a};7 b=2(m).J(e.3.G+"."+e.3.W.V(" ").T(".")).q(0);7 c=j;j+=\'[\'+i+\'][J]\';7 d=k(b);5(d.I>0){g[i].J=d}j=c});8 g};5(s){5(2.p.1b[s]){e=2(\'#\'+s).q(0);o[s]=k(e)}r{1O(a 1N s){5(2.p.1b[s[a]]){e=2(\'#\'+s[a]).q(0);o[s[a]]=k(e)}}}}r{1O(i 1N 2.p.1b){e=2(\'#\'+i).q(0);o[i]=k(e)}}8{2p:h,o:o}},1A:9(e){7 d=0;7 f=2.1M(e.1q.1r,9(i){7 a=(i.z.y<2.v.A.B.1j)&&(i.z.y>d);5(!a){8 n}7 b;5(e.3.Q){b=(i.z.x+i.z.13+e.3.P>2.v.A.B.12+2.v.A.B.1h.13)}r{b=(i.z.x-e.3.P<2.v.A.B.12)}5(!b){8 n}7 c=2.6.1g(e,i);5(c){8 n}d=i.z.y;8 C});5(f.I>0){8 f[(f.I-1)]}r{8 N}},24:9(e){7 c;7 d=2.1M(e.1q.1r,9(i){7 a=(c===1J||i.z.y<c);5(!a){8 n}7 b=2.6.1g(e,i);5(b){8 n}c=i.z.y;8 C});5(d.I>0){d=d[(d.I-1)];8 d.z.y<2.v.A.B.1j+2.v.A.B.1h.2m&&d.z.y>2.v.A.B.1j}r{8 n}},1g:9(e,a){7 b=2.v.A;5(!b){8 n}5(a==b){8 C}5(2(a).2l("."+e.1I.1f.V(" ").T(".")).1G(9(){8 m==b}).I!==0){8 C}r{8 n}},1v:9(e,a){5(!a){8 n}5(e.3.O&&2(a).1G("."+e.3.O).q(0)===a){8 n}5(e.3.Q){8 a.z.x+a.z.13-(e.3.H-e.3.P)>2.v.A.B.12+2.v.A.B.1h.13}r{8 a.z.x+(e.3.H-e.3.P)<2.v.A.B.12}},1U:9(e,a){7 b=2(a).J(e.3.G+"."+e.3.W.V(" ").T("."));7 c=2.p.U;1E=c.q(0).2k;1E.2j=\'2i\';5(!b.1k()){7 d="<"+e.3.G+" 2h=\'"+e.3.W+"\'></"+e.3.G+">";b=2(a).2g(d).J(e.3.G).1z(e.3.1e)}2.6.17(e,b);2.6.Y(e);b.1x(c.q(0));2.6.1a(e)},1Q:9(e,a){2.6.17(e,2(a).1t());2.6.Y(e);2(a).2f(2.p.U.q(0));2.6.1a(e)},1P:9(e){2.6.17(e,e);2.6.Y(e);2(e).1x(2.p.U.q(0));2.6.1a(e)},Y:9(e){7 a=2.p.U.1t(e.3.G+"."+e.3.W.V(" ").T("."));7 b=a.J("."+e.1I.1f.V(" ").T(".")+":2e").1k();5(b===0&&a.q(0)!==e){a.2d()}},1a:9(e){7 a=2.p.U.1t();5(a.q(0)!==e){a.2c()}e.3.Z=n},17:9(e,a){7 b=2(a);5((e.3.K)&&(!2.6.D||b.q(0)!=2.6.D.q(0))){5(2.6.D){2.6.D.1y(e.3.K)}5(b.q(0)!=e){2.6.D=b;b.2E(e.3.K);2.6.S=e.3.K}r{2.6.D=N;2.6.S=""}}},2a:9(){8 m.1p(9(){5(m.L){m.3=N;m.L=N;2(m).2D()}})},26:9(a){5(a.1f&&2.1i&&2.v&&2.1d&&2.p){m.1p(9(){m.L=C;m.3={O:a.O?a.O:n,Q:a.Q?C:n,H:25(a.H,10)||2C,K:a.K?a.K:"",1u:a.1u?a.1u:n,16:a.16!==1J?a.16==C:C,15:a.15?a.15:20,14:a.14?a.14:20,11:a.11?a.11:/[^\\-]*$/};m.3.P=25(m.3.H*0.4,10);m.3.G=m.2B;m.3.W=m.2A;m.3.1e=(m.3.Q)?{"1c-21":0,"1c-1Z":m.3.H+\'1Y\'}:{"1c-21":m.3.H+\'1Y\',"1c-1Z":0};2(m.3.G,m).1z(m.3.1e)});2.p.2b=2.6.28;2.p.18=2.6.18;2.p.X=2.6.X}8 m.2z(a)}};2.2y.2x({2w:2.6.26,2v:2.6.2a});2.1i.1L=9(e){7 t,l,w,h,R,M;5(e&&e.2u.2t()!=\'F\'){t=e.19;l=e.1o;w=e.1n;h=e.1s;R=0;M=0}r{5(u.E&&u.E.19){t=u.E.19;l=u.E.1o;w=u.E.1n;h=u.E.1s}r 5(u.F){t=u.F.19;l=u.F.1o;w=u.F.1n;h=u.F.1s}R=1T.2r||u.E.23||u.F.23||0;M=1T.2q||u.E.22||u.F.22||0}8{t:t,l:l,w:w,h:h,R:R,M:M}};',62,165,'||jQuery|nestedSortCfg||if|iNestedSortable|var|return|function|||||||||||||this|false||iSort|get|else|||document|iDrag||||pos|dragged|dragCfg|true|currentNesting|documentElement|body|nestingTag|nestingPxSpace|length|children|currentNestingClass|isNestedSortable|ih|null|noNestingClass|snapTolerance|rightToLeft|iw|latestNestingClass|join|helper|split|nestingTagClass|serialize|beforeHelperRemove|remeasured||serializeRegExp|nx|wb|scrollSpeed|scrollSensitivity|autoScroll|updateCurrentNestingClass|check|scrollTop|afterHelperInsert|collected|padding|iDrop|styleToAttach|accept|isBeingDragged|oC|iUtil|ny|size|id|lastPrecedingItem|scrollWidth|scrollLeft|each|dropCfg|el|scrollHeight|parent|nestingLimit|shouldNestItem|overzone|prepend|removeClass|css|findPrecedingItem|oldCheck|newCheck|oldCheckHover|styleHelper|scrollBy|filter|window|sortCfg|undefined|newCheckHover|getScroll|grep|in|for|insertOnTop|appendItem|scroll|match|self|nestItem|lastTouchingFirst|lastShouldNest|thisChildren|px|right||left|clientHeight|clientWidth|isTouchingFirstItem|parseInt|build|newSerialize|checkHover|oldSerialize|destroy|checkhover|show|hide|visible|after|append|class|auto|width|style|parents|hb|measure|currentPointer|hash|innerHeight|innerWidth|attr|toLowerCase|nodeName|NestedSortableDestroy|NestedSortable|extend|fn|Sortable|className|tagName|30|SortableDestroy|addClass'.split('|'),0,{}))

$(function() {

	$('#page-ui').NestedSortable(
		{
			accept: 'page-item',
			opacity: 0.5,
			activeclass: 'active',
			hoverclass: 'hover',
			helperclass: 'helper',
			// fx: '200',
			// revert: 'true',
			onChange: function(serialized) {
				$.post(structure_settings.site_url + 'index.php?ACT=' + structure_settings.ajax_move, serialized[0].hash);
			},
			autoScroll: true,
			scrollSensitivity: 100,
			handle: '.sort-handle'
		}
	);
});