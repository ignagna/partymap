var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};	var __vd_version_info__ = __vd_version_info__ || {};
/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+''])return p+'';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showAct']])
Z([[8],'wxParseData',[[6],[[7],[3,'actHtml']],[3,'nodes']]])
Z([3,'wxParse'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'rule-text-c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'identity-selector-wrap from'],[[7],[3,'from']]])
Z([[7],[3,'showIdentitySelector']])
Z([[7],[3,'showDangyuantypeSelector']])
Z([[2,'!='],[[7],[3,'from']],[1,'user']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'nothing'])
Z([3,'post-page'])
Z([[7],[3,'showShareTip']])
Z([3,'closeShareTip'])
Z([3,'mask-tip'])
Z([3,'ctx share-tip'])
Z([[7],[3,'zhendi']])
Z([[2,'!'],[[7],[3,'zhendi']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'rule-text'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'org'])
Z([[2,'=='],[[7],[3,'step']],[1,1]])
Z([[2,'=='],[[7],[3,'step']],[1,2]])
Z([[7],[3,'showList']])
Z([3,'id'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'id']],[1,999]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'question-result'])
Z([[2,'!='],[1,'result'],[[7],[3,'mode']]])
Z([3,'btn-area'])
Z([3,'handleRetry'])
Z([3,'重新挑战'])
Z([3,'268rpx'])
Z([3,'handleStop'])
Z([3,'结束挑战'])
Z(z[5])
Z([[7],[3,'postShare']])
Z([[7],[3,'areaCode']])
Z([3,'closePostShare'])
Z([3,'postImgLoaded'])
Z([[7],[3,'lineId']])
Z([[7],[3,'postShareEntrance']])
Z([[6],[[7],[3,'postInfo']],[3,'uuid']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'question '],[[7],[3,'mode']]])
Z([[4],[[5],[[5],[[5],[[5],[1,'A']],[1,'B']],[1,'C']],[1,'D']]])
Z([3,'*this'])
Z([[6],[[6],[[7],[3,'questionList']],[[7],[3,'nowIndex']]],[[2,'+'],[1,'option'],[[7],[3,'item']]]])
Z([[2,'!='],[1,'result'],[[7],[3,'mode']]])
Z([3,'btn-area'])
Z([[2,'>='],[[7],[3,'nowIndex']],[1,1]])
Z([3,'handlePrev'])
Z([3,'prev-btn'])
Z([3,'上一题'])
Z([3,'268rpx'])
Z([[2,'<'],[[7],[3,'nowIndex']],[1,4]])
Z([3,'handleNext'])
Z([3,'next-btn'])
Z([[2,'!'],[[6],[[7],[3,'answerList']],[[7],[3,'nowIndex']]]])
Z([3,'下一题'])
Z(z[10])
Z([[2,'=='],[[7],[3,'nowIndex']],[1,4]])
Z([3,'handleStop'])
Z(z[13])
Z(z[14])
Z([3,'结束挑战'])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'rank'])
Z([[2,'=='],[[7],[3,'active']],[1,'all']])
Z([[7],[3,'list']])
Z([3,'uid'])
Z([3,'mine item-card'])
Z([[2,'>'],[[7],[3,'index']],[1,2]])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'preventTouchMove'])
Z([3,'canvasMain'])
Z([[2,'!'],[[6],[[7],[3,'posterDatas']],[3,'show']]])
Z([[2,'=='],[[6],[[7],[3,'posterDatas']],[3,'buttonType']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'posterDatas']],[3,'buttonType']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'posterDatas']],[3,'buttonType']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-info'])
Z([3,'ctx'])
Z([a,[3,'top: '],[[2,'+'],[[7],[3,'titleTop']],[[7],[3,'menuHeight']]],[3,'px;']])
Z([3,'card'])
Z([[2,'==='],[[6],[[7],[3,'userInfo']],[3,'nickname']],[1,null]])
Z([[6],[[6],[[7],[3,'userInfo']],[3,'userMedal']],[3,'length']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'orgStatus']],[1,'P']],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'userType']],[1,'D']]])
Z([[7],[3,'showIdentitySelector']])
Z([3,'handleIdentitySelected'])
Z([3,'user'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'updateUserMedalWear'])
Z([[2,'?:'],[[6],[[7],[3,'medalInfo']],[3,'wear']],[1,'卸下'],[1,'装备']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'user-login '],[[7],[3,'type']]])
Z([[2,'=='],[[7],[3,'type']],[1,'guest']])
Z([[2,'!='],[[7],[3,'type']],[1,'guest']])
Z(z[2])
Z([3,'handleSelectOrg'])
Z([3,'item'])
Z([[2,'!'],[[7],[3,'dangOrgName']]])
Z([[7],[3,'dangOrgName']])
Z([[2,'=='],[[7],[3,'type']],[1,'houjie']])
Z([[2,'=='],[[7],[3,'from']],[1,'user']])
Z([3,'handleDakaBtnClick'])
Z([3,'daka-btn'])
Z([3,'保存'])
Z(z[10])
Z(z[11])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'zhendi-detail line'],[[7],[3,'currentLineId']]])
Z([3,'main-card'])
Z([[6],[[7],[3,'areaName']],[3,'last']])
Z([[2,'&&'],[1,false],[[6],[[7],[3,'info']],[3,'concatPerson']]])
Z([[8],'wxParseData',[[6],[[7],[3,'tourHtml']],[3,'nodes']]])
Z([3,'wxParse'])
Z([[2,'&&'],[[7],[3,'activies']],[[6],[[6],[[7],[3,'activies']],[1,0]],[3,'name']]])
Z([[6],[[7],[3,'info']],[3,'openTime']])
Z([[8],'wxParseData',[[6],[[7],[3,'openTimeHtml']],[3,'nodes']]])
Z(z[5])
Z([[6],[[7],[3,'info']],[3,'name']])
Z([[7],[3,'showMap']])
Z([1,false])
Z([[8],'wxParseData',[[6],[[7],[3,'busStationrHtml']],[3,'nodes']]])
Z(z[5])
Z([3,'btn-group'])
Z([a,[[2,'?:'],[[2,'=='],[[6],[[7],[3,'info']],[3,'dakaStatus']],[1,1]],[1,'display: flex;'],[1,'']],[3,' ']])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'dakaStatus']],[1,0]])
Z([3,'handleDakaBtnClick'])
Z([3,'daka-btn'])
Z([3,'310rpx'])
Z([[2,'=='],[[6],[[7],[3,'info']],[3,'dakaStatus']],[1,1]])
Z([3,'handleShareClick'])
Z(z[19])
Z([3,'分享海报'])
Z(z[20])
Z(z[21])
Z([3,'handleToQuestion'])
Z(z[19])
Z([3,'前往答题'])
Z(z[20])
Z([[2,'&&'],[[7],[3,'showAlert']],[[7],[3,'alertText']]])
Z([3,'closeAlert'])
Z([[7],[3,'alertText']])
Z([[7],[3,'showIdentitySelector']])
Z([3,'handleIdentitySelected'])
Z([3,'detail'])
Z([[2,'&&'],[[7],[3,'showMask']],[[2,'!'],[[7],[3,'showSignSuccess']]]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'info']],[3,'id']],[[2,'-'],[1,1]]],[[7],[3,'showSignSuccess']]])
Z([[7],[3,'areaCode']])
Z([[6],[[7],[3,'info']],[3,'id']])
Z([3,'closeSignSuccess'])
Z([[6],[[7],[3,'info']],[3,'lineId']])
Z([[7],[3,'postShare']])
Z(z[39])
Z([3,'closePostShare'])
Z([3,'postImgLoaded'])
Z(z[0][2])
Z([[7],[3,'showShareTip']])
Z([[6],[[7],[3,'postInfo']],[3,'uuid']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'zhendi'])
Z([3,'my-map'])
Z([[7],[3,'showRule']])
Z([3,'closeRule'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[3,'zhuti-detail '],[[6],[[7],[3,'info']],[3,'code']]])
Z(z[0][2])
Z([[6],[[7],[3,'info']],[3,'tips']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'info']],[3,'totalArea']],[[7],[3,'lightCount']]],[[2,'!'],[[7],[3,'postShare']]]])
Z([3,'showPostShare'])
Z([3,'post-btn'])
Z([3,'生成勋章海报'])
Z([[7],[3,'postShare']])
Z([3,'closePostShare'])
Z([3,'postImgLoaded'])
Z([[7],[3,'lineId']])
Z([[7],[3,'shareTip']])
Z([[6],[[7],[3,'postInfo']],[3,'uuid']])
Z([[7],[3,'postTip']])
Z([3,'closeMask'])
Z([3,'nothing'])
Z([3,'mask-tip'])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'zhutiList']])
Z([3,'id'])
Z([3,'handleItemClick'])
Z([a,[3,'zhuti-list-item '],[[6],[[7],[3,'item']],[3,'code']]])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([3,'star-wrap'])
Z([3,'num'])
Z([[6],[[7],[3,'item']],[3,'progress']])
Z([3,'*this'])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'progress']],[1,0]])
Z(z[6])
Z([[2,'-'],[[6],[[7],[3,'item']],[3,'total']],[[6],[[7],[3,'item']],[3,'progress']]])
Z(z[8])
Z([[2,'>'],[[2,'-'],[[6],[[7],[3,'item']],[3,'total']],[[6],[[7],[3,'item']],[3,'progress']]],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wxParseVideo'])
Z([3,'wxParseImg'])
Z([3,'WxEmojiView'])
Z([3,'WxParseBr'])
Z([3,'wxParse'])
Z([[7],[3,'wxParseData']])
Z([3,''])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'wxParse0'])
Z(z[8])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'element']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'button']])
Z([3,'item'])
Z([[6],[[7],[3,'item']],[3,'nodes']])
Z(z[6])
Z(z[7])
Z([3,'wxParse1'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'li']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'video']])
Z(z[7])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'img']])
Z(z[7])
Z(z[1])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'a']])
Z([3,'wxParseTagATap'])
Z([a,[3,'wxParse-inline '],[[6],[[7],[3,'item']],[3,'classStr']],[3,' wxParse-'],[[6],[[7],[3,'item']],[3,'tag']]])
Z([[6],[[6],[[7],[3,'item']],[3,'attr']],[3,'href']])
Z([[6],[[7],[3,'item']],[3,'styleStr']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'table']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'br']])
Z(z[3])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'block']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'text']])
Z(z[7])
Z(z[2])
Z(z[16])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse2'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[68])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse3'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[114])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse4'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[160])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse5'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[206])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse6'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[252])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse7'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[298])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse8'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[344])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse9'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[390])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse10'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[436])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse11'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[482])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse12'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[58])
Z(z[7])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/acvtivity-info/acvtivity-info','../../wxParse/wxParse','./components/daka-success/daka-success','./components/game-rule/game-rule-text','./components/game-rule/game-rule','./components/identity-selector/identity-selector','./components/map/map','./components/my-alert/my-alert','./components/my-button/my-button','./components/post-share/post-share','./components/scan-icon/scan-icon','./pages/bus/bus','./pages/game-rule/game-rule','./pages/org/org-selector','./pages/question/question-result','./pages/question/question','./pages/rank/rank','./pages/share/share','./pages/test/test','./pages/user/info','./pages/user/medal-detail','./pages/user/medal','./pages/user/user-login','./pages/zhendi/zhendi-detail','./pages/zhendi/zhendi','./pages/zhuti/zhuti-detail','./pages/zhuti/zhuti','./wxParse/wxParse'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
var xC=_v()
_(r,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=_oz(z,2,e,s,gg)
var cF=_gd(x[0],fE,e_,d_)
if(cF){
var hG=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[0],8,24)
}
xC.wxXCkey=1
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var lK=_mz(z,'game-rule-text',['antiphase',-1,'class',0],[],e,s,gg)
_(r,lK)
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var tM=_n('view')
_rz(z,tM,'class',0,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,1,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,2,e,s,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,3,e,s,gg)){oP.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
_(r,tM)
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hU=_mz(z,'view',['catchtouchmove',0,'class',1],[],e,s,gg)
var oV=_v()
_(hU,oV)
if(_oz(z,2,e,s,gg)){oV.wxVkey=1
var cW=_mz(z,'view',['bindtap',3,'class',1],[],e,s,gg)
var oX=_n('view')
_rz(z,oX,'class',5,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,6,e,s,gg)){lY.wxVkey=1
}
var aZ=_v()
_(oX,aZ)
if(_oz(z,7,e,s,gg)){aZ.wxVkey=1
}
lY.wxXCkey=1
aZ.wxXCkey=1
_(cW,oX)
_(oV,cW)
}
oV.wxXCkey=1
_(r,hU)
return r
}
e_[x[9]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[10]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[11]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o4=_n('game-rule-text')
_rz(z,o4,'class',0,e,s,gg)
_(r,o4)
return r
}
e_[x[12]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,1,e,s,gg)){f7.wxVkey=1
}
var c8=_v()
_(o6,c8)
if(_oz(z,2,e,s,gg)){c8.wxVkey=1
var h9=_v()
_(c8,h9)
var o0=function(oBB,cAB,lCB,gg){
var tEB=_v()
_(lCB,tEB)
if(_oz(z,5,oBB,cAB,gg)){tEB.wxVkey=1
}
tEB.wxXCkey=1
return lCB
}
h9.wxXCkey=2
_2z(z,3,o0,e,s,gg,h9,'item','index','id')
}
f7.wxXCkey=1
c8.wxXCkey=1
_(r,o6)
return r
}
e_[x[13]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var bGB=_n('view')
_rz(z,bGB,'class',0,e,s,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,1,e,s,gg)){oHB.wxVkey=1
var oJB=_n('view')
_rz(z,oJB,'class',2,e,s,gg)
var fKB=_mz(z,'my-button',['plain',-1,'bindtap',3,'text',1,'width',2],[],e,s,gg)
_(oJB,fKB)
var cLB=_mz(z,'my-button',['bindtap',6,'text',1,'width',2],[],e,s,gg)
_(oJB,cLB)
_(oHB,oJB)
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,9,e,s,gg)){xIB.wxVkey=1
var hMB=_mz(z,'post-share',['zhendi',-1,'areaCode',10,'bind:close',1,'bind:loaded',2,'lineId',3,'noCancel',4,'uuid',5],[],e,s,gg)
_(xIB,hMB)
}
oHB.wxXCkey=1
oHB.wxXCkey=3
xIB.wxXCkey=1
xIB.wxXCkey=3
_(r,bGB)
return r
}
e_[x[14]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var cOB=_n('view')
_rz(z,cOB,'class',0,e,s,gg)
var lQB=_v()
_(cOB,lQB)
var aRB=function(eTB,tSB,bUB,gg){
var xWB=_v()
_(bUB,xWB)
if(_oz(z,3,eTB,tSB,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
return bUB
}
lQB.wxXCkey=2
_2z(z,1,aRB,e,s,gg,lQB,'item','index','*this')
var oPB=_v()
_(cOB,oPB)
if(_oz(z,4,e,s,gg)){oPB.wxVkey=1
var oXB=_n('view')
_rz(z,oXB,'class',5,e,s,gg)
var fYB=_v()
_(oXB,fYB)
if(_oz(z,6,e,s,gg)){fYB.wxVkey=1
var o2B=_mz(z,'my-button',['bindtap',7,'class',1,'text',2,'width',3],[],e,s,gg)
_(fYB,o2B)
}
var cZB=_v()
_(oXB,cZB)
if(_oz(z,11,e,s,gg)){cZB.wxVkey=1
var c3B=_mz(z,'my-button',['bindtap',12,'class',1,'disabled',2,'text',3,'width',4],[],e,s,gg)
_(cZB,c3B)
}
var h1B=_v()
_(oXB,h1B)
if(_oz(z,17,e,s,gg)){h1B.wxVkey=1
var o4B=_mz(z,'my-button',['bindtap',18,'class',1,'disabled',2,'text',3,'width',4],[],e,s,gg)
_(h1B,o4B)
}
fYB.wxXCkey=1
fYB.wxXCkey=3
cZB.wxXCkey=1
cZB.wxXCkey=3
h1B.wxXCkey=1
h1B.wxXCkey=3
_(oPB,oXB)
}
oPB.wxXCkey=1
oPB.wxXCkey=3
_(r,cOB)
return r
}
e_[x[15]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var a6B=_n('view')
_rz(z,a6B,'class',0,e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,1,e,s,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(a6B,e8B)
var b9B=function(xAC,o0B,oBC,gg){
var cDC=_n('view')
_rz(z,cDC,'class',4,xAC,o0B,gg)
var hEC=_v()
_(cDC,hEC)
if(_oz(z,5,xAC,o0B,gg)){hEC.wxVkey=1
}
var oFC=_v()
_(cDC,oFC)
if(_oz(z,6,xAC,o0B,gg)){oFC.wxVkey=1
}
var cGC=_v()
_(cDC,cGC)
if(_oz(z,7,xAC,o0B,gg)){cGC.wxVkey=1
}
hEC.wxXCkey=1
oFC.wxXCkey=1
cGC.wxXCkey=1
_(oBC,cDC)
return oBC
}
e8B.wxXCkey=2
_2z(z,2,b9B,e,s,gg,e8B,'item','index','uid')
t7B.wxXCkey=1
_(r,a6B)
return r
}
e_[x[16]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lIC=_mz(z,'view',['catchtouchmove',0,'class',1,'hidden',1],[],e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,3,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(lIC,tKC)
if(_oz(z,4,e,s,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(lIC,eLC)
if(_oz(z,5,e,s,gg)){eLC.wxVkey=1
}
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
_(r,lIC)
return r
}
e_[x[17]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[18]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xOC=_n('view')
_rz(z,xOC,'class',0,e,s,gg)
var fQC=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var hSC=_n('view')
_rz(z,hSC,'class',3,e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,4,e,s,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,5,e,s,gg)){cUC.wxVkey=1
}
oTC.wxXCkey=1
cUC.wxXCkey=1
_(fQC,hSC)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,6,e,s,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
_(xOC,fQC)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,7,e,s,gg)){oPC.wxVkey=1
var oVC=_mz(z,'identity-selector',['bind:selected',8,'from',1],[],e,s,gg)
_(oPC,oVC)
}
oPC.wxXCkey=1
oPC.wxXCkey=3
_(r,xOC)
return r
}
e_[x[19]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var aXC=_mz(z,'my-button',['plain',-1,'bindtap',0,'text',1],[],e,s,gg)
_(r,aXC)
return r
}
e_[x[20]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[21]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,1,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(b1C,x3C)
if(_oz(z,2,e,s,gg)){x3C.wxVkey=1
var c6C=_v()
_(x3C,c6C)
if(_oz(z,3,e,s,gg)){c6C.wxVkey=1
var h7C=_mz(z,'view',['bindtap',4,'class',1],[],e,s,gg)
var o8C=_v()
_(h7C,o8C)
if(_oz(z,6,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(h7C,c9C)
if(_oz(z,7,e,s,gg)){c9C.wxVkey=1
}
o8C.wxXCkey=1
c9C.wxXCkey=1
_(c6C,h7C)
}
c6C.wxXCkey=1
}
var o4C=_v()
_(b1C,o4C)
if(_oz(z,8,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(b1C,f5C)
if(_oz(z,9,e,s,gg)){f5C.wxVkey=1
var o0C=_mz(z,'my-button',['bindtap',10,'class',1,'text',2],[],e,s,gg)
_(f5C,o0C)
}
else{f5C.wxVkey=2
var lAD=_mz(z,'my-button',['bindtap',13,'class',1],[],e,s,gg)
_(f5C,lAD)
}
o2C.wxXCkey=1
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
f5C.wxXCkey=3
f5C.wxXCkey=3
_(r,b1C)
return r
}
e_[x[22]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var tCD=e_[x[23]].i
_ai(tCD,x[1],e_,x[23],1,1)
var eDD=_n('view')
_rz(z,eDD,'class',0,e,s,gg)
var cJD=_n('view')
_rz(z,cJD,'class',1,e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,2,e,s,gg)){hKD.wxVkey=1
}
var oLD=_v()
_(cJD,oLD)
if(_oz(z,3,e,s,gg)){oLD.wxVkey=1
}
var tQD=_v()
_(cJD,tQD)
var eRD=_oz(z,5,e,s,gg)
var bSD=_gd(x[23],eRD,e_,d_)
if(bSD){
var oTD=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
tQD.wxXCkey=3
bSD(oTD,oTD,tQD,gg)
gg.f=cur_globalf
}
else _w(eRD,x[23],49,22)
var cMD=_v()
_(cJD,cMD)
if(_oz(z,6,e,s,gg)){cMD.wxVkey=1
}
var oND=_v()
_(cJD,oND)
if(_oz(z,7,e,s,gg)){oND.wxVkey=1
var xUD=_v()
_(oND,xUD)
var oVD=_oz(z,9,e,s,gg)
var fWD=_gd(x[23],oVD,e_,d_)
if(fWD){
var cXD=_1z(z,8,e,s,gg) || {}
var cur_globalf=gg.f
xUD.wxXCkey=3
fWD(cXD,cXD,xUD,gg)
gg.f=cur_globalf
}
else _w(oVD,x[23],75,22)
}
var lOD=_v()
_(cJD,lOD)
if(_oz(z,10,e,s,gg)){lOD.wxVkey=1
var hYD=_v()
_(lOD,hYD)
if(_oz(z,11,e,s,gg)){hYD.wxVkey=1
}
hYD.wxXCkey=1
}
var aPD=_v()
_(cJD,aPD)
if(_oz(z,12,e,s,gg)){aPD.wxVkey=1
}
var oZD=_v()
_(cJD,oZD)
var c1D=_oz(z,14,e,s,gg)
var o2D=_gd(x[23],c1D,e_,d_)
if(o2D){
var l3D=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
oZD.wxXCkey=3
o2D(l3D,l3D,oZD,gg)
gg.f=cur_globalf
}
else _w(c1D,x[23],107,22)
var a4D=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,17,e,s,gg)){t5D.wxVkey=1
var o8D=_mz(z,'my-button',['bindtap',18,'class',1,'width',2],[],e,s,gg)
_(t5D,o8D)
}
var e6D=_v()
_(a4D,e6D)
if(_oz(z,21,e,s,gg)){e6D.wxVkey=1
var x9D=_mz(z,'my-button',['bindtap',22,'class',1,'text',2,'width',3],[],e,s,gg)
_(e6D,x9D)
}
var b7D=_v()
_(a4D,b7D)
if(_oz(z,26,e,s,gg)){b7D.wxVkey=1
var o0D=_mz(z,'my-button',['blue',-1,'bindtap',27,'class',1,'text',2,'width',3],[],e,s,gg)
_(b7D,o0D)
}
t5D.wxXCkey=1
t5D.wxXCkey=3
e6D.wxXCkey=1
e6D.wxXCkey=3
b7D.wxXCkey=1
b7D.wxXCkey=3
_(cJD,a4D)
hKD.wxXCkey=1
oLD.wxXCkey=1
cMD.wxXCkey=1
oND.wxXCkey=1
lOD.wxXCkey=1
aPD.wxXCkey=1
_(eDD,cJD)
var bED=_v()
_(eDD,bED)
if(_oz(z,31,e,s,gg)){bED.wxVkey=1
var fAE=_mz(z,'my-alert',['bind:close',32,'text',1],[],e,s,gg)
_(bED,fAE)
}
var oFD=_v()
_(eDD,oFD)
if(_oz(z,34,e,s,gg)){oFD.wxVkey=1
var cBE=_mz(z,'identity-selector',['bind:selected',35,'from',1],[],e,s,gg)
_(oFD,cBE)
}
var xGD=_v()
_(eDD,xGD)
if(_oz(z,37,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(eDD,oHD)
if(_oz(z,38,e,s,gg)){oHD.wxVkey=1
var hCE=_mz(z,'daka-success',['areaCode',39,'areaid',1,'bind:close',2,'lineid',3],[],e,s,gg)
_(oHD,hCE)
}
var fID=_v()
_(eDD,fID)
if(_oz(z,43,e,s,gg)){fID.wxVkey=1
var oDE=_mz(z,'post-share',['zhendi',-1,'areaCode',44,'bind:close',1,'bind:loaded',2,'lineId',3,'showShareTip',4,'uuid',5],[],e,s,gg)
_(fID,oDE)
}
bED.wxXCkey=1
bED.wxXCkey=3
oFD.wxXCkey=1
oFD.wxXCkey=3
xGD.wxXCkey=1
oHD.wxXCkey=1
oHD.wxXCkey=3
fID.wxXCkey=1
fID.wxXCkey=3
_(r,eDD)
tCD.pop()
return r
}
e_[x[23]]={f:m22,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[24]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oFE=_n('view')
_rz(z,oFE,'class',0,e,s,gg)
var aHE=_n('my-map')
_rz(z,aHE,'class',1,e,s,gg)
_(oFE,aHE)
var lGE=_v()
_(oFE,lGE)
if(_oz(z,2,e,s,gg)){lGE.wxVkey=1
var tIE=_mz(z,'game-rule',['antiphase',-1,'bind:close',3],[],e,s,gg)
_(lGE,tIE)
}
var eJE=_n('acvtivity-info')
_(oFE,eJE)
var bKE=_n('scan-icon')
_(oFE,bKE)
lGE.wxXCkey=1
lGE.wxXCkey=3
_(r,oFE)
return r
}
e_[x[24]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var xME=_n('view')
_rz(z,xME,'class',0,e,s,gg)
var oNE=_v()
_(xME,oNE)
if(_oz(z,1,e,s,gg)){oNE.wxVkey=1
}
var fOE=_v()
_(xME,fOE)
if(_oz(z,2,e,s,gg)){fOE.wxVkey=1
}
var cPE=_v()
_(xME,cPE)
if(_oz(z,3,e,s,gg)){cPE.wxVkey=1
var cSE=_mz(z,'my-button',['catchtap',4,'class',1,'text',2],[],e,s,gg)
_(cPE,cSE)
}
var hQE=_v()
_(xME,hQE)
if(_oz(z,7,e,s,gg)){hQE.wxVkey=1
var oTE=_mz(z,'post-share',['bind:close',8,'bind:loaded',1,'lineId',2,'showShareTip',3,'uuid',4],[],e,s,gg)
_(hQE,oTE)
}
var oRE=_v()
_(xME,oRE)
if(_oz(z,13,e,s,gg)){oRE.wxVkey=1
var lUE=_mz(z,'view',['catchtap',14,'catchtouchmove',1,'class',2],[],e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,17,e,s,gg)){aVE.wxVkey=1
}
aVE.wxXCkey=1
_(oRE,lUE)
}
oNE.wxXCkey=1
fOE.wxXCkey=1
cPE.wxXCkey=1
cPE.wxXCkey=3
hQE.wxXCkey=1
hQE.wxXCkey=3
oRE.wxXCkey=1
_(r,xME)
return r
}
e_[x[25]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var eXE=_v()
_(r,eXE)
var bYE=function(x1E,oZE,o2E,gg){
var c4E=_mz(z,'view',['catchtap',2,'class',1,'data-ztid',2],[],x1E,oZE,gg)
var h5E=_n('view')
_rz(z,h5E,'class',5,x1E,oZE,gg)
var o6E=_v()
_(h5E,o6E)
var c7E=function(l9E,o8E,a0E,gg){
var eBF=_v()
_(a0E,eBF)
if(_oz(z,9,l9E,o8E,gg)){eBF.wxVkey=1
}
eBF.wxXCkey=1
return a0E
}
o6E.wxXCkey=2
_2z(z,7,c7E,x1E,oZE,gg,o6E,'num','index','*this')
var bCF=_v()
_(h5E,bCF)
var oDF=function(oFF,xEF,fGF,gg){
var hIF=_v()
_(fGF,hIF)
if(_oz(z,13,oFF,xEF,gg)){hIF.wxVkey=1
}
hIF.wxXCkey=1
return fGF
}
bCF.wxXCkey=2
_2z(z,11,oDF,x1E,oZE,gg,bCF,'num','index','*this')
_(c4E,h5E)
_(o2E,c4E)
return o2E
}
eXE.wxXCkey=2
_2z(z,0,bYE,e,s,gg,eXE,'item','index','id')
return r
}
e_[x[26]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
d_[x[27]]["wxParseVideo"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParseVideo'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParseImg"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParseImg'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["WxEmojiView"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':WxEmojiView'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["WxParseBr"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':WxParseBr'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_oz(z,8,fE,oD,gg)
var oJ=_gd(x[27],cI,e_,d_)
if(oJ){
var lK=_1z(z,7,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[27],43,18)
return cF
}
oB.wxXCkey=2
_2z(z,5,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse0"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse0'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,10,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,11,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,16,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,15,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],56,24)
return oH
}
oD.wxXCkey=2
_2z(z,13,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,17,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,22,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,21,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],69,28)
return oR
}
eN.wxXCkey=2
_2z(z,19,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,23,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,25,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],78,20)
}
else if(_oz(z,26,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,28,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,27,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],83,20)
}
else if(_oz(z,29,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',30,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,38,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,37,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],90,24)
return cAB
}
f7.wxXCkey=2
_2z(z,35,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,39,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,44,oJB,xIB,gg)
var cOB=_gd(x[27],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,43,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[27],97,24)
return fKB
}
bGB.wxXCkey=2
_2z(z,41,oHB,e,s,gg,bGB,'item','index','')
}
else if(_oz(z,45,e,s,gg)){xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=_oz(z,46,e,s,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB={}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],103,20)
}
else if(_oz(z,47,e,s,gg)){xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,52,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,51,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],109,24)
return fYB
}
bUB.wxXCkey=2
_2z(z,49,oVB,e,s,gg,bUB,'item','index','')
}
else{xC.wxVkey=9
var l5B=_v()
_(xC,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_v()
_(b9B,xAC)
var oBC=_oz(z,57,e8B,t7B,gg)
var fCC=_gd(x[27],oBC,e_,d_)
if(fCC){
var cDC=_1z(z,56,e8B,t7B,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[27],117,22)
return b9B
}
l5B.wxXCkey=2
_2z(z,54,a6B,e,s,gg,l5B,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,58,e,s,gg)){oB.wxVkey=2
var hEC=_v()
_(oB,hEC)
var oFC=_oz(z,60,e,s,gg)
var cGC=_gd(x[27],oFC,e_,d_)
if(cGC){
var oHC=_1z(z,59,e,s,gg) || {}
var cur_globalf=gg.f
hEC.wxXCkey=3
cGC(oHC,oHC,hEC,gg)
gg.f=cur_globalf
}
else _w(oFC,x[27],126,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse1"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse1'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,62,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,63,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,68,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,67,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],141,24)
return oH
}
oD.wxXCkey=2
_2z(z,65,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,69,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,74,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,73,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],154,28)
return oR
}
eN.wxXCkey=2
_2z(z,71,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,75,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,77,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,76,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],163,20)
}
else if(_oz(z,78,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,80,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,79,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],168,20)
}
else if(_oz(z,81,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',82,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,90,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,89,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],175,24)
return cAB
}
f7.wxXCkey=2
_2z(z,87,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,91,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,92,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],181,20)
}
else if(_oz(z,93,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,98,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,97,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],187,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,95,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,103,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,102,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],195,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,100,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,104,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,106,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,105,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],204,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse2"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse2'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,108,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,109,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,114,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,113,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],218,24)
return oH
}
oD.wxXCkey=2
_2z(z,111,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,115,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,120,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,119,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],231,28)
return oR
}
eN.wxXCkey=2
_2z(z,117,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,121,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,123,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,122,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],240,20)
}
else if(_oz(z,124,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,126,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,125,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],245,20)
}
else if(_oz(z,127,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',128,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,136,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,135,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],252,24)
return cAB
}
f7.wxXCkey=2
_2z(z,133,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,137,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,138,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],258,20)
}
else if(_oz(z,139,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,144,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,143,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],264,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,141,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,149,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,148,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],272,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,146,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,150,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,152,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,151,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],281,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse3"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse3'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,154,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,155,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,160,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,159,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],294,24)
return oH
}
oD.wxXCkey=2
_2z(z,157,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,161,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,166,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,165,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],307,28)
return oR
}
eN.wxXCkey=2
_2z(z,163,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,167,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,169,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,168,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],316,20)
}
else if(_oz(z,170,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,172,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,171,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],321,20)
}
else if(_oz(z,173,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',174,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,182,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,181,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],328,24)
return cAB
}
f7.wxXCkey=2
_2z(z,179,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,183,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,184,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],334,20)
}
else if(_oz(z,185,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,190,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,189,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],340,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,187,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,195,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,194,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],348,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,192,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,196,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,198,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,197,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],357,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse4"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse4'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,200,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,201,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,206,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,205,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],370,24)
return oH
}
oD.wxXCkey=2
_2z(z,203,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,207,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,212,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,211,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],383,28)
return oR
}
eN.wxXCkey=2
_2z(z,209,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,213,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,215,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,214,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],392,20)
}
else if(_oz(z,216,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,218,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,217,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],397,20)
}
else if(_oz(z,219,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',220,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,228,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,227,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],404,24)
return cAB
}
f7.wxXCkey=2
_2z(z,225,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,229,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,230,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],410,20)
}
else if(_oz(z,231,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,236,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,235,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],416,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,233,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,241,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,240,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],424,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,238,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,242,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,244,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,243,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],433,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse5"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse5'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,246,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,247,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,252,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,251,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],446,24)
return oH
}
oD.wxXCkey=2
_2z(z,249,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,253,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,258,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,257,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],459,28)
return oR
}
eN.wxXCkey=2
_2z(z,255,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,259,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,261,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,260,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],468,20)
}
else if(_oz(z,262,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,264,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,263,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],473,20)
}
else if(_oz(z,265,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',266,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,274,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,273,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],480,24)
return cAB
}
f7.wxXCkey=2
_2z(z,271,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,275,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,276,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],486,20)
}
else if(_oz(z,277,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,282,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,281,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],492,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,279,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,287,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,286,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],500,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,284,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,288,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,290,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,289,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],509,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse6"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse6'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,292,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,293,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,298,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,297,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],522,24)
return oH
}
oD.wxXCkey=2
_2z(z,295,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,299,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,304,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,303,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],535,28)
return oR
}
eN.wxXCkey=2
_2z(z,301,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,305,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,307,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,306,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],544,20)
}
else if(_oz(z,308,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,310,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,309,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],549,20)
}
else if(_oz(z,311,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',312,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,320,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,319,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],556,24)
return cAB
}
f7.wxXCkey=2
_2z(z,317,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,321,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,322,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],562,20)
}
else if(_oz(z,323,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,328,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,327,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],568,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,325,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,333,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,332,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],576,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,330,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,334,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,336,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,335,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],585,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse7"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse7'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,338,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,339,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,344,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,343,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],597,24)
return oH
}
oD.wxXCkey=2
_2z(z,341,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,345,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,350,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,349,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],610,28)
return oR
}
eN.wxXCkey=2
_2z(z,347,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,351,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,353,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,352,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],619,20)
}
else if(_oz(z,354,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,356,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,355,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],624,20)
}
else if(_oz(z,357,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',358,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,366,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,365,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],631,24)
return cAB
}
f7.wxXCkey=2
_2z(z,363,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,367,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,368,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],637,20)
}
else if(_oz(z,369,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,374,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,373,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],643,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,371,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,379,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,378,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],651,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,376,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,380,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,382,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,381,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],660,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse8"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse8'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,384,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,385,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,390,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,389,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],673,24)
return oH
}
oD.wxXCkey=2
_2z(z,387,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,391,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,396,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,395,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],686,28)
return oR
}
eN.wxXCkey=2
_2z(z,393,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,397,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,399,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,398,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],695,20)
}
else if(_oz(z,400,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,402,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,401,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],700,20)
}
else if(_oz(z,403,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',404,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,412,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,411,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],707,24)
return cAB
}
f7.wxXCkey=2
_2z(z,409,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,413,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,414,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],713,20)
}
else if(_oz(z,415,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,420,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,419,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],719,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,417,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,425,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,424,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],727,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,422,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,426,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,428,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,427,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],736,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse9"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse9'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,430,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,431,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,436,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,435,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],749,24)
return oH
}
oD.wxXCkey=2
_2z(z,433,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,437,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,442,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,441,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],762,28)
return oR
}
eN.wxXCkey=2
_2z(z,439,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,443,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,445,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,444,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],771,20)
}
else if(_oz(z,446,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,448,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,447,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],776,20)
}
else if(_oz(z,449,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',450,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,458,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,457,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],783,24)
return cAB
}
f7.wxXCkey=2
_2z(z,455,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,459,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,460,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],789,20)
}
else if(_oz(z,461,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,466,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,465,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],795,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,463,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,471,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,470,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],803,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,468,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,472,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,474,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,473,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],812,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse10"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse10'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,476,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,477,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,482,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,481,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],825,24)
return oH
}
oD.wxXCkey=2
_2z(z,479,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,483,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,488,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,487,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],838,28)
return oR
}
eN.wxXCkey=2
_2z(z,485,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,489,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,491,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,490,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],847,20)
}
else if(_oz(z,492,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,494,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,493,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],852,20)
}
else if(_oz(z,495,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',496,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,504,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,503,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],859,24)
return cAB
}
f7.wxXCkey=2
_2z(z,501,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,505,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,506,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],865,20)
}
else if(_oz(z,507,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,512,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,511,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],871,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,509,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,517,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,516,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],879,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,514,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,518,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,520,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,519,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],888,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[27]]["wxParse11"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[27]+':wxParse11'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse"],"",1)
if(p_[b]){_wl(b,x[27]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,522,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,523,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,528,hG,cF,gg)
var aL=_gd(x[27],lK,e_,d_)
if(aL){
var tM=_1z(z,527,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[27],901,24)
return oH
}
oD.wxXCkey=2
_2z(z,525,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,529,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,534,xQ,oP,gg)
var oV=_gd(x[27],hU,e_,d_)
if(oV){
var cW=_1z(z,533,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[27],914,28)
return oR
}
eN.wxXCkey=2
_2z(z,531,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,535,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,537,e,s,gg)
var aZ=_gd(x[27],lY,e_,d_)
if(aZ){
var t1=_1z(z,536,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[27],923,20)
}
else if(_oz(z,538,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,540,e,s,gg)
var o4=_gd(x[27],b3,e_,d_)
if(o4){
var x5=_1z(z,539,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[27],928,20)
}
else if(_oz(z,541,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',542,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,550,o0,h9,gg)
var tEB=_gd(x[27],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,549,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[27],935,24)
return cAB
}
f7.wxXCkey=2
_2z(z,547,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,551,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,552,e,s,gg)
var xIB=_gd(x[27],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[27],941,20)
}
else if(_oz(z,553,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,558,oNB,hMB,gg)
var tSB=_gd(x[27],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,557,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[27],947,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,555,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,563,oXB,xWB,gg)
var c3B=_gd(x[27],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,562,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[27],955,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,560,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,564,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,566,e,s,gg)
var t7B=_gd(x[27],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,565,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[27],964,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[27]]={f:m26,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
__wxAppCode__['app.json'] = {"pages":["pages/zhendi/zhendi","pages/zhendi/zhendi-detail","pages/rank/rank","pages/zhuti/zhuti","pages/test/test","pages/share/share","pages/user/info","pages/zhuti/zhuti-detail","pages/question/question","pages/user/user-login","pages/org/org-selector","pages/question/question-result","pages/user/medal","pages/user/medal-detail","pages/game-rule/game-rule","pages/bus/bus"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"党建地图","navigationBarTextStyle":"black"},"sitemapLocation":"sitemap.json","permission":{"scope.userLocation":{"desc":"你的位置信息将用于定位打卡"}},"requiredPrivateInfos":["getLocation"],"tabBar":{"custom":false,"color":"#575757","selectedColor":"#FF5733","backgroundColor":"#ffffff","borderStyle":"white","list":[{"pagePath":"pages/zhuti/zhuti","iconPath":"assets/images/icon/zhuti.png","selectedIconPath":"assets/images/icon/zhuti-selected.png","text":"主题路线推荐"},{"pagePath":"pages/zhendi/zhendi","iconPath":"assets/images/icon/zhendi.png","selectedIconPath":"assets/images/icon/zhendi-selected.png","text":"阵地打卡"},{"pagePath":"pages/user/info","iconPath":"assets/images/icon/user.png","selectedIconPath":"assets/images/icon/user-selected.png","text":"个人中心"}]},"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['app'] = [$gwx, './app'];else __wxAppCode__['app'] = $gwx( './app' );
  __wxAppCode__['components/acvtivity-info/acvtivity-info.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/acvtivity-info/acvtivity-info'] = [$gwx, './components/acvtivity-info/acvtivity-info'];else __wxAppCode__['components/acvtivity-info/acvtivity-info'] = $gwx( './components/acvtivity-info/acvtivity-info' );
  __wxAppCode__['components/daka-success/daka-success.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/daka-success/daka-success'] = [$gwx, './components/daka-success/daka-success'];else __wxAppCode__['components/daka-success/daka-success'] = $gwx( './components/daka-success/daka-success' );
  __wxAppCode__['components/game-rule/game-rule-text.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/game-rule/game-rule-text'] = [$gwx, './components/game-rule/game-rule-text'];else __wxAppCode__['components/game-rule/game-rule-text'] = $gwx( './components/game-rule/game-rule-text' );
  __wxAppCode__['components/game-rule/game-rule.json'] = {"component":true,"usingComponents":{"game-rule-text":"./game-rule-text"}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/game-rule/game-rule'] = [$gwx, './components/game-rule/game-rule'];else __wxAppCode__['components/game-rule/game-rule'] = $gwx( './components/game-rule/game-rule' );
  __wxAppCode__['components/identity-selector/identity-selector.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/identity-selector/identity-selector'] = [$gwx, './components/identity-selector/identity-selector'];else __wxAppCode__['components/identity-selector/identity-selector'] = $gwx( './components/identity-selector/identity-selector' );
  __wxAppCode__['components/map/map.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/map/map'] = [$gwx, './components/map/map'];else __wxAppCode__['components/map/map'] = $gwx( './components/map/map' );
  __wxAppCode__['components/my-alert/my-alert.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/my-alert/my-alert'] = [$gwx, './components/my-alert/my-alert'];else __wxAppCode__['components/my-alert/my-alert'] = $gwx( './components/my-alert/my-alert' );
  __wxAppCode__['components/my-button/my-button.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/my-button/my-button'] = [$gwx, './components/my-button/my-button'];else __wxAppCode__['components/my-button/my-button'] = $gwx( './components/my-button/my-button' );
  __wxAppCode__['components/post-share/post-share.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/post-share/post-share'] = [$gwx, './components/post-share/post-share'];else __wxAppCode__['components/post-share/post-share'] = $gwx( './components/post-share/post-share' );
  __wxAppCode__['components/scan-icon/scan-icon.json'] = {"component":true,"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['components/scan-icon/scan-icon'] = [$gwx, './components/scan-icon/scan-icon'];else __wxAppCode__['components/scan-icon/scan-icon'] = $gwx( './components/scan-icon/scan-icon' );
  __wxAppCode__['pages/bus/bus.json'] = {"usingComponents":{},"navigationBarTitleText":"特色公交专线"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/bus/bus'] = [$gwx, './pages/bus/bus'];else __wxAppCode__['pages/bus/bus'] = $gwx( './pages/bus/bus' );
  __wxAppCode__['pages/game-rule/game-rule.json'] = {"usingComponents":{"game-rule-text":"../../components/game-rule/game-rule-text"},"navigationBarTitleText":"活动规则"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/game-rule/game-rule'] = [$gwx, './pages/game-rule/game-rule'];else __wxAppCode__['pages/game-rule/game-rule'] = $gwx( './pages/game-rule/game-rule' );
  __wxAppCode__['pages/org/org-selector.json'] = {"usingComponents":{},"navigationBarTitleText":"选择所属党组织"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/org/org-selector'] = [$gwx, './pages/org/org-selector'];else __wxAppCode__['pages/org/org-selector'] = $gwx( './pages/org/org-selector' );
  __wxAppCode__['pages/question/question-result.json'] = {"usingComponents":{"my-button":"../../components/my-button/my-button","post-share":"../../components/post-share/post-share"},"navigationBarTitleText":"挑战任务"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/question/question-result'] = [$gwx, './pages/question/question-result'];else __wxAppCode__['pages/question/question-result'] = $gwx( './pages/question/question-result' );
  __wxAppCode__['pages/question/question.json'] = {"usingComponents":{"my-button":"../../components/my-button/my-button"},"navigationBarTitleText":"挑战任务"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/question/question'] = [$gwx, './pages/question/question'];else __wxAppCode__['pages/question/question'] = $gwx( './pages/question/question' );
  __wxAppCode__['pages/rank/rank.json'] = {"usingComponents":{},"navigationBarTitleText":"排行榜"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/rank/rank'] = [$gwx, './pages/rank/rank'];else __wxAppCode__['pages/rank/rank'] = $gwx( './pages/rank/rank' );
  __wxAppCode__['pages/share/share.json'] = {"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/share/share'] = [$gwx, './pages/share/share'];else __wxAppCode__['pages/share/share'] = $gwx( './pages/share/share' );
  __wxAppCode__['pages/test/test.json'] = {"usingComponents":{}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/test/test'] = [$gwx, './pages/test/test'];else __wxAppCode__['pages/test/test'] = $gwx( './pages/test/test' );
  __wxAppCode__['pages/user/info.json'] = {"usingComponents":{"identity-selector":"../../components/identity-selector/identity-selector"},"navigationStyle":"custom","navigationBarTextStyle":"white","navigationBarTitleText":"个人中心"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/info'] = [$gwx, './pages/user/info'];else __wxAppCode__['pages/user/info'] = $gwx( './pages/user/info' );
  __wxAppCode__['pages/user/medal-detail.json'] = {"usingComponents":{"my-button":"../../components/my-button/my-button"},"navigationBarTitleText":"勋章墙"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/medal-detail'] = [$gwx, './pages/user/medal-detail'];else __wxAppCode__['pages/user/medal-detail'] = $gwx( './pages/user/medal-detail' );
  __wxAppCode__['pages/user/medal.json'] = {"usingComponents":{},"navigationBarTitleText":"勋章墙"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/medal'] = [$gwx, './pages/user/medal'];else __wxAppCode__['pages/user/medal'] = $gwx( './pages/user/medal' );
  __wxAppCode__['pages/user/user-login.json'] = {"usingComponents":{"my-button":"../../components/my-button/my-button"},"navigationBarTitleText":"登录"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/user-login'] = [$gwx, './pages/user/user-login'];else __wxAppCode__['pages/user/user-login'] = $gwx( './pages/user/user-login' );
  __wxAppCode__['pages/zhendi/zhendi-detail.json'] = {"usingComponents":{"my-button":"../../components/my-button/my-button","my-alert":"../../components/my-alert/my-alert","daka-success":"../../components/daka-success/daka-success","identity-selector":"../../components/identity-selector/identity-selector","post-share":"../../components/post-share/post-share"},"navigationBarTitleText":"阵地详情"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zhendi/zhendi-detail'] = [$gwx, './pages/zhendi/zhendi-detail'];else __wxAppCode__['pages/zhendi/zhendi-detail'] = $gwx( './pages/zhendi/zhendi-detail' );
  __wxAppCode__['pages/zhendi/zhendi.json'] = {"usingComponents":{"scan-icon":"../../components/scan-icon/scan-icon","my-map":"../../components/map/map","game-rule":"../../components/game-rule/game-rule","acvtivity-info":"../../components/acvtivity-info/acvtivity-info"},"navigationBarTitleText":"淄博监管分局党建地图"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zhendi/zhendi'] = [$gwx, './pages/zhendi/zhendi'];else __wxAppCode__['pages/zhendi/zhendi'] = $gwx( './pages/zhendi/zhendi' );
  __wxAppCode__['pages/zhuti/zhuti-detail.json'] = {"usingComponents":{"post-share":"../../components/post-share/post-share","my-button":"../../components/my-button/my-button"},"navigationBarTitleText":"路线详情"};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zhuti/zhuti-detail'] = [$gwx, './pages/zhuti/zhuti-detail'];else __wxAppCode__['pages/zhuti/zhuti-detail'] = $gwx( './pages/zhuti/zhuti-detail' );
  __wxAppCode__['pages/zhuti/zhuti.json'] = {"usingComponents":{},"navigationBarTitleText":"主题路线推荐","enablePullDownRefresh":false};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/zhuti/zhuti'] = [$gwx, './pages/zhuti/zhuti'];else __wxAppCode__['pages/zhuti/zhuti'] = $gwx( './pages/zhuti/zhuti' );
  __wxAppCode__['project.config.json'] = {"miniprogramRoot":"","__compileDebugInfo__":{"useSummer":true}};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['project.config'] = [$gwx, './project.config'];else __wxAppCode__['project.config'] = $gwx( './project.config' );
  __wxAppCode__['sitemap.json'] = {"desc":"关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html","rules":[{"action":"allow","page":"*"}]};
  if (__vd_version_info__.delayedGwx) __wxAppCode__['sitemap'] = [$gwx, './sitemap'];else __wxAppCode__['sitemap'] = $gwx( './sitemap' );

define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}}); 
     }); 
  define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
module.exports=function(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}; 
     }); 
  define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(n){return void o(n)}c.done?t(v):Promise.resolve(v).then(r,e)}module.exports=function(t){return function(){var o=this,r=arguments;return new Promise((function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)}))}}; 
     }); 
  define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./unsupportedIterableToArray");module.exports=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=r(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var o=0,a=function(){};return{s:a,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,f=!1;return{s:function(){t=t.call(n)},n:function(){var r=t.next();return u=r.done,r},e:function(r){f=!0,i=r},f:function(){try{u||null==t.return||t.return()}finally{if(f)throw i}}}}; 
     }); 
  define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var e=require("./toPropertyKey");module.exports=function(r,t,n){return(t=e(t))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}; 
     }); 
  define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var e=require("./defineProperty");function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}module.exports=function(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}; 
     }); 
  define("@babel/runtime/helpers/regeneratorRuntime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var t=require("./typeof");function e(){module.exports=e=function(){return r},module.exports.__esModule=!0,module.exports.default=module.exports;var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),u=new k(n||[]);return i(a,"_invoke",{value:E(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};h(g,u,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(G([])));w&&w!==n&&o.call(w,u)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,a,u,c){var l=s(e[i],e,a);if("throw"!==l.type){var h=l.arg,f=h.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){h.value=t,u(h)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},L(b.prototype),h(b.prototype,c,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),h(x,l,"Generator"),h(x,u,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}module.exports=e,module.exports.__esModule=!0,module.exports.default=module.exports; 
     }); 
  define("@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./typeof");module.exports=function(e,t){if("object"!==r(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}; 
     }); 
  define("@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./typeof"),e=require("./toPrimitive");module.exports=function(i){var t=e(i,"string");return"symbol"===r(t)?t:String(t)}; 
     }); 
  define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
function o(t){return module.exports=o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}module.exports=o; 
     }); 
  define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
var r=require("./arrayLikeToArray");module.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}; 
     }); 
  define("api/area.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addLocationSign=function(t,r,n,o,u){return(0,e.request)({url:"/sign/location",method:"POST",data:{areaId:t,latitude:r,longitude:n,distance:o,channel:u}})},exports.addQuestionSign=function(t,r,n){return(0,e.request)({url:"/sign/question",method:"POST",data:{areaId:t,answerCorrectCount:r,channel:n}})},exports.getAreaInfo=function(t){return(0,e.request)({url:"/area/"+t,method:"GET"})},exports.getLightList=function(t){return(0,e.request)({url:"/light"+(null==t?"":"?lineId=".concat(t)),method:"GET"})},exports.getLineInfo=function(t){return(0,e.request)({url:"/line/"+t,method:"GET"})},exports.getLineList=function(){return(0,e.request)({url:"/line",method:"GET"})},exports.getPostPic=function(t,r){return console.log("lineId,areaCode",t,r),(0,e.request)({url:"/post/draw"+(null==t||-1==t?"":"?lineId=".concat(t))+(r&&""!=r?"&areaCode=".concat(r):""),method:"GET"})},exports.getPostPicByUUID=function(t){return(0,e.request)({url:"/post/img/"+t,method:"GET"})},exports.sharePostImg=function(t,r){var n="areaId=".concat(t);r&&(n="lineId=".concat(r));return(0,e.request)({url:"/postshare?"+n,method:"POST"})};var e=require("../utils/request"); 
     }); 
  define("api/file.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadToWx=function(r){return(0,e.uploadFile)({filePath:r,url:"/file/upload/wx/pic",name:"file"})};var e=require("../utils/request"); 
     }); 
  define("api/org.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOrgList=function(){return(0,e.request)({url:"/org/list",method:"GET"})};var e=require("../utils/request"); 
     }); 
  define("api/question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getQuestionList=function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,e.request)({url:"/question/random?lineId=".concat(t,"&limit=").concat(o,"&excludeIds=").concat(r.join(",")),method:"GET"})};var e=require("../utils/request"); 
     }); 
  define("api/user.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.code2Token=function(t){return(0,e.request)({url:"/user/token?code="+t,method:"GET"})},exports.getActivityInfo=function(){return(0,e.request)({url:"/user/activity",method:"GET"})},exports.getRankList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";return(0,e.request)({url:"/user/rank/"+t,method:"GET"})},exports.getUserInfo=function(){return(0,e.request)({url:"/user/info",method:"GET"})},exports.getUserMedal=function(){return(0,e.request)({url:"/user/medal",method:"GET"})},exports.updateUserInfo=function(t){return(0,e.request)({url:"/user/update",method:"PUT",data:t})},exports.updateUserMedalWear=function(t,r){return(0,e.request)({url:"/user/medal/".concat(t,"?medalName=").concat(r),method:"PUT"})};var e=require("../utils/request"); 
     }); 
  define("pages/zhuti/position.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.allTouchArea=exports.allNameCard=exports.allLightLogo=void 0;exports.allTouchArea={hsyx:[{code:"XWY",x:154,y:104,w:125,h:194},{code:"SSGY",x:483,y:80,w:136,h:200},{code:"ZWDX",x:305,y:225,w:158,h:167},{code:"DJWHY",x:58,y:318,w:134,h:187},{code:"ZFJGXFJY",x:401,y:407,w:243,h:155},{code:"XZZXXFJY",x:52,y:548,w:227,h:153},{code:"HSZTGY",x:318,y:634,w:211,h:230}],zlfz:[{code:"XYSP",x:56,y:51,w:333,h:184},{code:"HJXZ",x:412,y:58,w:239,h:202},{code:"MSJK",x:90,y:268,w:440,h:160},{code:"YGY",x:33,y:441,w:326,h:155},{code:"ZHZX",x:389,y:441,w:256,h:161},{code:"JBYL",x:33,y:607,w:276,h:200},{code:"BTSQ",x:323,y:647,w:251,h:191}],whhm:[{code:"XYSP",x:38,y:100,w:339,h:187},{code:"YKSQ",x:377,y:100,w:267,h:179},{code:"WHFWZX",x:29,y:302,w:295,h:188},{code:"ATSY",x:348,y:295,w:212,h:171},{code:"HJXZ",x:29,y:500,w:264,h:202},{code:"SJZX",x:330,y:475,w:324,h:167},{code:"MSJK",x:150,y:702,w:443,h:175}],xczx:[{code:"BTASQ",x:103,y:65,w:257,h:191},{code:"XTSQ",x:369,y:65,w:273,h:167},{code:"HJSQ",x:61,y:267,w:247,h:169},{code:"YKSQ",x:360,y:245,w:247,h:160},{code:"BTSQ",x:61,y:445,w:271,h:193},{code:"CWSQ",x:350,y:413,w:233,h:152},{code:"HGSQ",x:61,y:657,w:242,h:174},{code:"XWSQ",x:310,y:643,w:239,h:161}]};exports.allLightLogo={hsyx:[{code:"XWY",x:245,y:111,light:!1},{code:"SSGY",x:570,y:73,light:!1},{code:"ZWDX",x:420,y:245,light:!1},{code:"DJWHY",x:136,y:300,light:!1},{code:"ZFJGXFJY",x:566,y:390,light:!1},{code:"XZZXXFJY",x:239,y:520,light:!1},{code:"HSZTGY",x:400,y:620,light:!1}],zlfz:[{code:"XYSP",x:275,y:78,light:!1},{code:"HJXZ",x:580,y:91,light:!1},{code:"MSJK",x:362,y:245,light:!1},{code:"YGY",x:250,y:425,light:!1},{code:"ZHZX",x:542,y:412,light:!1},{code:"JBYL",x:210,y:601,light:!1},{code:"BTSQ",x:490,y:630,light:!1}],whhm:[{code:"XYSP",x:263,y:127,light:!1},{code:"YKSQ",x:560,y:115,light:!1},{code:"WHFWZX",x:230,y:305,light:!1},{code:"ATSY",x:485,y:282,light:!1},{code:"HJXZ",x:225,y:520,light:!1},{code:"SJZX",x:570,y:460,light:!1},{code:"MSJK",x:410,y:680,light:!1}],xczx:[{code:"BTASQ",x:269,y:76,light:!1},{code:"XTSQ",x:558,y:73,light:!1},{code:"HJSQ",x:235,y:255,light:!1},{code:"YKSQ",x:530,y:235,light:!1},{code:"BTSQ",x:250,y:432,light:!1},{code:"CWSQ",x:530,y:407,light:!1},{code:"HGSQ",x:230,y:648,light:!1},{code:"XWSQ",x:492,y:623,light:!1}]};exports.allNameCard={hsyx:[{code:"XWY",x:218,y:345,light:!1},{code:"SSGY",x:640,y:316,light:!1},{code:"ZWDX",x:360,y:472,light:!1},{code:"DJWHY",x:61,y:617,light:!1},{code:"ZFJGXFJY",x:529,y:693,light:!1},{code:"XZZXXFJY",x:61,y:875,light:!1},{code:"HSZTGY",x:349,y:1091,light:!1}],zlfz:[{code:"XYSP",x:77,y:259,light:!1},{code:"HJXZ",x:551,y:293,light:!1},{code:"MSJK",x:139,y:510,light:!1},{code:"YGY",x:42,y:739,light:!1},{code:"ZHZX",x:527,y:739,light:!1},{code:"JBYL",x:41,y:968,h:72,light:!1},{code:"BTSQ",x:434,y:1008,h:72,alias:"BTSQ-SHZL",light:!1}],whhm:[{code:"XYSP",x:52,y:328,alias:"XYSP-3",light:!1},{code:"YKSQ",x:520,y:273,h:72,alias:"YKSQ-HYGY",light:!1},{code:"WHFWZX",x:43,y:591,light:!1},{code:"ATSY",x:497,y:557,light:!1},{code:"HJXZ",x:64,y:880,alias:"HJXZ-3",light:!1},{code:"SJZX",x:438,y:795,light:!1},{code:"MSJK",x:203,y:1104,alias:"MSJK-3",light:!1}],xczx:[{code:"BTASQ",x:153,y:282,light:!1},{code:"XTSQ",x:526,y:251,light:!1},{code:"HJSQ",x:83,y:523,light:!1},{code:"YKSQ",x:491,y:446,light:!1},{code:"BTSQ",x:112,y:745,light:!1},{code:"CWSQ",x:482,y:695,light:!1},{code:"HGSQ",x:83,y:1048,light:!1},{code:"XWSQ",x:420,y:1012,light:!1}]}; 
     }); 
  define("utils/qr2detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=void 0;exports.parse=function(e){if(!e)return null;var r=e.split("#/")[1];if(!r)return null;var t=r.split("_");return t&&4==t.length?{areaId:t[0],areaCode:t[1],lineId:parseInt(t[2].substr(1)),version:parseInt(t[3].substr(1))}:null}; 
     }); 
  define("utils/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.uploadFile=exports.request=void 0;var e=require("../@babel/runtime/helpers/objectSpread2"),t=require("./storage"),o=wx.getAccountInfoSync().miniProgram.envVersion;console.log("当前环境："+o);var s="http://192.168.111.67:11993/houjie-api";"develop"==o?(s="http://192.168.111.67:11993/houjie-api",s="https://houjiedaka.hiyun.site/houjie-api"):s="https://houjiedaka.hiyun.site/houjie-api";exports.request=function(o){var r=t.get(t.USER_JWT_KEY);return r&&(o.header=e(e({},o.header),{},{Authorization:"Bearer "+r})),o.timeout=6e4,o.url&&!o.url.startsWith("http")&&(o.url=s+(o.url.startsWith("/")?o.url:"/"+o.url)),new Promise((function(r,a){wx.request(e(e({},o),{},{success:function(e){console.log("req",e),200!==e.statusCode&&(wx.showToast({title:"请求失败[".concat(e.statusCode,"],请稍后重试！"),icon:"error"}),a("请求失败[".concat(e.statusCode,"],请稍后重试！"))),"200"==e.data.code?(e.data&&e.data.data&&e.data.data.token&&t.set(t.USER_JWT_KEY,e.data.data.token,259200),r(e.data)):"401"==e.data.code?wx.login({success:function(e){e.code?(console.log("res.code",e.code),wx.request({url:s+"/user/token?code="+e.code,method:"GET",success:function(e){var o=e.data;console.log("login",o),o.data&&o.data.userInfo?(t.set(t.USER_INFO_KEY,o.data.userInfo,259200),"P"==o.data.userInfo.orgStatus?t.set(t.SHOW_RANK,!0):t.set(t.SHOW_RANK,!1)):wx.showToast({title:"[5]登录失败，请重新进入小程序！",icon:"none"})}})):console.log("登录失败！"+e.errMsg)},fail:function(){wx.showToast({title:"未登录,请重新打开小程序！",icon:"none"}),console.log("未登录，尝试登录")},complete:function(){wx.hideLoading()}}):(wx.showToast({title:e.data.msg||"操作失败，请稍后再试！",icon:"error"}),a(e.data.msg||"操作失败，请稍后再试！"))},fail:function(e){console.error(e),a("请求失败[".concat(e.errMsg,"],请稍后重试！"))}}))}))};exports.uploadFile=function(o){var r=t.get(t.USER_JWT_KEY);return r&&(o.header=e(e({},o.header),{},{Authorization:"Bearer "+r})),o.timeout=6e4,o.url&&!o.url.startsWith("http")&&(o.url=s+(o.url.startsWith("/")?o.url:"/"+o.url)),new Promise((function(t,s){wx.uploadFile(e(e({},o),{},{success:function(e){console.log("res",e),200!==e.statusCode&&(wx.showToast({title:"上传失败[".concat(e.statusCode,"],请稍后重试！"),icon:"error"}),s("上传失败[".concat(e.statusCode,"],请稍后重试！")));var o=JSON.parse(e.data);console.log("res",o),"200"==o.code?t(o):"401"==o.code?wx.showToast({title:"未登录,请重新打开小程序！",icon:"none"}):(wx.showToast({title:o.msg||"上传失败，请稍后再试！",icon:"error"}),s(o.msg||"上传失败，请稍后再试！"))},fail:function(e){console.error(e),s("上传失败[".concat(e.errMsg,"],请稍后重试！"))}}))}))}; 
     }); 
  define("utils/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.set=exports.remove=exports.get=exports.WX_USER_INFO=exports.USER_JWT_KEY=exports.USER_INFO_KEY=exports.SIGN_DATA=exports.SHOW_RANK=exports.QUESTION_RESULT=exports.QUESTION_LIST=exports.LINE_SHARE_TIP_CLOSE=exports.CONFIG=exports.CHANNEL=void 0;exports.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=wx.getStorageSync("S:"+e);if(!r)return t;var o=JSON.parse(r);if(o&&o.expireIn){if(-1==o.expireIn||o.expireIn>parseInt((new Date).getTime()/1e3+""))return JSON.parse(o.val);wx.removeStorageSync("S:"+e)}return t};exports.set=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;-1!=r&&(r=parseInt((new Date).getTime()/1e3+"")+r),wx.setStorageSync("S:"+e,JSON.stringify({val:JSON.stringify(t),expireIn:r}))};exports.remove=function(e){wx.removeStorageSync("S:"+e)};exports.USER_INFO_KEY="userInfo";exports.USER_JWT_KEY="usertoken";exports.SHOW_RANK="showRank";exports.WX_USER_INFO="wxUserInfo";exports.QUESTION_LIST="questionList";exports.QUESTION_RESULT="questionResult";exports.CHANNEL="channel";exports.SIGN_DATA="signdata:";exports.LINE_SHARE_TIP_CLOSE="lineShareTipClose:";exports.CONFIG="CONFIG:"; 
     }); 
  define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.formatTime=void 0;exports.formatTime=function(t){var r=t.getFullYear(),o=t.getMonth()+1,n=t.getDate(),i=t.getHours(),a=t.getMinutes(),u=t.getSeconds();return[r,o,n].map(e).join("/")+" "+[i,a,u].map(e).join(":")};var e=function(e){var t=e.toString();return t[1]?t:"0"+t}; 
     }); 
  define("wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="",t="",r={},s=require("./wxDiscode.js"),n=require("./htmlparser.js"),o=(l("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),l("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),a=l("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),i=l("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");l("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),l("wxxxcode-style,script,style,view,scroll-view,block");function l(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}function d(s){var n=[];if(0==e.length||!r)return(d={node:"text"}).text=s,a=[d];s=s.replace(/\[([^\[\]]+)\]/g,":$1:");for(var o=new RegExp("[:]"),a=s.split(o),i=0;i<a.length;i++){var l=a[i],d={};r[l]?(d.node="element",d.tag="emoji",d.text=r[l],d.baseSrc=t):(d.node="text",d.text=l),n.push(d)}return n}module.exports={html2json:function(e,t){e=function(e){return e.replace(/\r?\n+/g,"").replace(/<!--.*?-->/gi,"").replace(/\/\*.*?\*\//gi,"").replace(/[ ]+</gi,"<")}(e=function(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<.*!doctype.*\>\n/,"").replace(/<.*!DOCTYPE.*\>\n/,"")}(e)),e=s.strDiscode(e);var r=[],l={node:t,nodes:[],images:[],imageUrls:[]},c=0;return n(e,{start:function(e,n,d){var u,p={node:"element",tag:e};0===r.length?(p.index=c.toString(),c+=1):(void 0===(u=r[0]).nodes&&(u.nodes=[]),p.index=u.index+"."+u.nodes.length);if(o[e]?p.tagType="block":a[e]?p.tagType="inline":i[e]&&(p.tagType="closeSelf"),0!==n.length&&(p.attr=n.reduce((function(e,t){var r=t.name,s=t.value;return"class"==r&&(console.dir(s),p.classStr=s),"style"==r&&(console.dir(s),p.styleStr=s),s.match(/ /)&&(s=s.split(" ")),e[r]?Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]:e[r]=s,e}),{})),"img"===p.tag){p.imgIndex=l.images.length;var g=p.attr.src;""==g[0]&&g.splice(0,1),g=s.urlToHttpUrl(g,"https"),p.attr.src=g,p.from=t,l.images.push(p),l.imageUrls.push(g)}if("font"===p.tag){var m=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],h={color:"color",face:"font-family",size:"font-size"};for(var f in p.attr.style||(p.attr.style=[]),p.styleStr||(p.styleStr=""),h)if(p.attr[f]){var v="size"===f?m[p.attr[f]-1]:p.attr[f];p.attr.style.push(h[f]),p.attr.style.push(v),p.styleStr+=h[f]+": "+v+";"}}("source"===p.tag&&(l.source=p.attr.src),d)?(void 0===(u=r[0]||l).nodes&&(u.nodes=[]),u.nodes.push(p)):r.unshift(p)},end:function(e){var t=r.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),"video"===t.tag&&l.source&&(t.attr.src=l.source,delete l.source),0===r.length)l.nodes.push(t);else{var s=r[0];void 0===s.nodes&&(s.nodes=[]),s.nodes.push(t)}},chars:function(e){var t={node:"text",text:e,textArray:d(e)};if(0===r.length)t.index=c.toString(),c+=1,l.nodes.push(t);else{var s=r[0];void 0===s.nodes&&(s.nodes=[]),t.index=s.index+"."+s.nodes.length,s.nodes.push(t)}},comment:function(e){}}),l},emojisInit:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",o=arguments.length>2?arguments[2]:void 0;e=s,t=n,r=o}}; 
     }); 
  define("wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,t=/^<\/([-A-Za-z0-9_]+)[^>]*>/,r=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=c("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),a=c("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),n=c("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),i=c("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),o=c("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),l=c("wxxxcode-style,script,style,view,scroll-view,block");function c(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}module.exports=function(c,d){var f,p,u,h=[],b=c;for(h.last=function(){return this[this.length-1]};c;){if(p=!0,h.last()&&l[h.last()])c=c.replace(new RegExp("([\\s\\S]*?)</"+h.last()+"[^>]*>"),(function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),d.chars&&d.chars(t),""})),v("",h.last());else if(0==c.indexOf("\x3c!--")?(f=c.indexOf("--\x3e"))>=0&&(d.comment&&d.comment(c.substring(4,f)),c=c.substring(f+3),p=!1):0==c.indexOf("</")?(u=c.match(t))&&(c=c.substring(u[0].length),u[0].replace(t,v),p=!1):0==c.indexOf("<")&&(u=c.match(e))&&(c=c.substring(u[0].length),u[0].replace(e,g),p=!1),p){f=c.indexOf("<");for(var m="";0===f;)m+="<",f=(c=c.substring(1)).indexOf("<");m+=f<0?c:c.substring(0,f),c=f<0?"":c.substring(f),d.chars&&d.chars(m)}if(c==b)throw"Parse Error: "+c;b=c}function g(e,t,l,c){if(t=t.toLowerCase(),a[t])for(;h.last()&&n[h.last()];)v("",h.last());if(i[t]&&h.last()==t&&v("",t),(c=s[t]||!!c)||h.push(t),d.start){var f=[];l.replace(r,(function(e,t){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:o[t]?t:"";f.push({name:t,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')})})),d.start&&d.start(t,f,c)}}function v(e,t){if(t){t=t.toLowerCase();for(r=h.length-1;r>=0&&h[r]!=t;r--);}else var r=0;if(r>=0){for(var s=h.length-1;s>=r;s--)d.end&&d.end(h[s]);h.length=r}}v()}; 
     }); 
  define("wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/typeof");function r(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}var t={},n={},s={},a=r(!0),o={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:r(!0)};function i(r,n){var s=n?"Error in "+n+" extension->":"Error in unnamed extension",a={valid:!0,error:""};t.helper.isArray(r)||(r=[r]);for(var o=0;o<r.length;++o){var i=s+" sub-extension "+o+": ",l=r[o];if("object"!==e(l))return a.valid=!1,a.error=i+"must be an object, but "+e(l)+" given",a;if(!t.helper.isString(l.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+e(l.type)+" given",a;var c=l.type=l.type.toLowerCase();if("language"===c&&(c=l.type="lang"),"html"===c&&(c=l.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return a.valid=!1,a.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===c){if(t.helper.isUndefined(l.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(t.helper.isUndefined(l.filter)&&t.helper.isUndefined(l.regex))return a.valid=!1,a.error=i+c+' extensions must define either a "regex" property or a "filter" method',a;if(l.listeners){if("object"!==e(l.listeners))return a.valid=!1,a.error=i+'"listeners" property must be an object but '+e(l.listeners)+" given",a;for(var u in l.listeners)if(l.listeners.hasOwnProperty(u)&&"function"!=typeof l.listeners[u])return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+e(l.listeners[u])+" given",a}if(l.filter){if("function"!=typeof l.filter)return a.valid=!1,a.error=i+'"filter" must be a function, but '+e(l.filter)+" given",a}else if(l.regex){if(t.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!l.regex instanceof RegExp)return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+e(l.regex)+" given",a;if(t.helper.isUndefined(l.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}function l(e,r){return"~E"+r.charCodeAt(0)+"E"}t.helper={},t.extensions={},t.setOption=function(e,r){return a[e]=r,this},t.getOption=function(e){return a[e]},t.getOptions=function(){return a},t.resetOptions=function(){a=r(!0)},t.setFlavor=function(e){if(o.hasOwnProperty(e)){var r=o[e];for(var t in r)r.hasOwnProperty(t)&&(a[t]=r[t])}},t.getDefaultOptions=function(e){return r(e)},t.subParser=function(e,r){if(t.helper.isString(e)){if(void 0===r){if(n.hasOwnProperty(e))return n[e];throw Error("SubParser named "+e+" not registered!")}n[e]=r}},t.extension=function(e,r){if(!t.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=t.helper.stdExtName(e),t.helper.isUndefined(r)){if(!s.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return s[e]}"function"==typeof r&&(r=r()),t.helper.isArray(r)||(r=[r]);var n=i(r,e);if(!n.valid)throw Error(n.error);s[e]=r},t.getAllExtensions=function(){return s},t.removeExtension=function(e){delete s[e]},t.resetExtensions=function(){s={}},t.validateExtension=function(e){var r=i(e,null);return!!r.valid||(console.warn(r.error),!1)},t.hasOwnProperty("helper")||(t.helper={}),t.helper.isString=function(e){return"string"==typeof e||e instanceof String},t.helper.isFunction=function(e){return e&&"[object Function]"==={}.toString.call(e)},t.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},t.helper.isArray=function(e){return e.constructor===Array},t.helper.isUndefined=function(e){return void 0===e},t.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},t.helper.escapeCharactersCallback=l,t.helper.escapeCharacters=function(e,r,t){var n="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";t&&(n="\\\\"+n);var s=new RegExp(n,"g");return e=e.replace(s,l)};var c=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};t.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=c(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},t.helper.replaceRecursiveRegExp=function(e,r,n,s,a){if(!t.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,n,s,a),l=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),l=p.join("")}return l},t.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),t.Converter=function(r){var n={},l=[],c=[],u={};function p(e,r){if(r=r||null,t.helper.isString(e)){if(r=e=t.helper.stdExtName(e),t.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void function(e,r){"function"==typeof e&&(e=e(new t.Converter));t.helper.isArray(e)||(e=[e]);var n=i(e,r);if(!n.valid)throw Error(n.error);for(var s=0;s<e.length;++s)switch(e[s].type){case"lang":l.push(e[s]);break;case"output":c.push(e[s]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}(t.extensions[e],e);if(t.helper.isUndefined(s[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=s[e]}"function"==typeof e&&(e=e()),t.helper.isArray(e)||(e=[e]);var n=i(e,r);if(!n.valid)throw Error(n.error);for(var a=0;a<e.length;++a){switch(e[a].type){case"lang":l.push(e[a]);break;case"output":c.push(e[a])}if(e[a].hasOwnProperty(u))for(var o in e[a].listeners)e[a].listeners.hasOwnProperty(o)&&h(o,e[a].listeners[o])}}function h(r,n){if(!t.helper.isString(r))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+e(r)+" given");if("function"!=typeof n)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+e(n)+" given");u.hasOwnProperty(r)||(u[r]=[]),u[r].push(n)}!function(){for(var s in r=r||{},a)a.hasOwnProperty(s)&&(n[s]=a[s]);if("object"!==e(r))throw Error("Converter expects the passed parameter to be an object, but "+e(r)+" was passed instead.");for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o]);n.extensions&&t.helper.forEach(n.extensions,p)}(),this._dispatch=function(e,r,t,n){if(u.hasOwnProperty(e))for(var s=0;s<u[e].length;++s){var a=u[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return h(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:l,outputModifiers:c,converter:this,ghCodeBlocks:[]};return e=(e=(e=(e=e.replace(/~/g,"~T")).replace(/\$/g,"~D")).replace(/\r\n/g,"\n")).replace(/\r/g,"\n"),n.smartIndentationFix&&(e=function(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}(e)),e=e,e=t.subParser("detab")(e,n,r),e=t.subParser("stripBlankLines")(e,n,r),t.helper.forEach(l,(function(s){e=t.subParser("runExtension")(s,e,n,r)})),e=t.subParser("hashPreCodeTags")(e,n,r),e=t.subParser("githubCodeBlocks")(e,n,r),e=t.subParser("hashHTMLBlocks")(e,n,r),e=t.subParser("hashHTMLSpans")(e,n,r),e=t.subParser("stripLinkDefinitions")(e,n,r),e=t.subParser("blockGamut")(e,n,r),e=t.subParser("unhashHTMLSpans")(e,n,r),e=(e=(e=t.subParser("unescapeSpecialChars")(e,n,r)).replace(/~D/g,"$$")).replace(/~T/g,"~"),t.helper.forEach(c,(function(s){e=t.subParser("runExtension")(s,e,n,r)})),e},this.setOption=function(e,r){n[e]=r},this.getOption=function(e){return n[e]},this.getOptions=function(){return n},this.addExtension=function(e,r){p(e,r=r||null)},this.useExtension=function(e){p(e)},this.setFlavor=function(e){if(o.hasOwnProperty(e)){var r=o[e];for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])}},this.removeExtension=function(e){t.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var n=e[r],s=0;s<l.length;++s)l[s]===n&&l[s].splice(s,1);for(;0<c.length;++s)c[0]===n&&c[0].splice(s,1)}},this.getAllExtensions=function(){return{language:l,output:c}}},t.subParser("anchors",(function(e,r,n){var s=function(e,r,s,a,o,i,l,c){t.helper.isUndefined(c)&&(c=""),e=r;var u=s,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,t.helper.isUndefined(n.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=n.gUrls[p],t.helper.isUndefined(n.gTitles[p])||(d=n.gTitles[p]);var f='<a href="'+(h=t.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=t.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=(e=(e=n.converter._dispatch("anchors.before",e,r,n)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,s)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s)).replace(/(\[([^\[\]]+)])()()()()()/g,s),e=n.converter._dispatch("anchors.after",e,r,n)})),t.subParser("autoLinks",(function(e,r,n){function s(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,r){var n=t.subParser("unescapeSpecialChars")(r);return t.subParser("encodeEmailAddress")(n)}return e=(e=(e=n.converter._dispatch("autoLinks.before",e,r,n)).replace(/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,s)).replace(/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,a),r.simplifiedAutoLink&&(e=(e=e.replace(/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,s)).replace(/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,a)),e=n.converter._dispatch("autoLinks.after",e,r,n)})),t.subParser("blockGamut",(function(e,r,n){e=n.converter._dispatch("blockGamut.before",e,r,n),e=t.subParser("blockQuotes")(e,r,n),e=t.subParser("headers")(e,r,n);var s=t.subParser("hashBlock")("<hr />",r,n);return e=(e=(e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,s)).replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,s)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,s),e=t.subParser("lists")(e,r,n),e=t.subParser("codeBlocks")(e,r,n),e=t.subParser("tables")(e,r,n),e=t.subParser("hashHTMLBlocks")(e,r,n),e=t.subParser("paragraphs")(e,r,n),e=n.converter._dispatch("blockGamut.after",e,r,n)})),t.subParser("blockQuotes",(function(e,r,n){return e=(e=n.converter._dispatch("blockQuotes.before",e,r,n)).replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,(function(e,s){var a=s;return a=(a=(a=a.replace(/^[ \t]*>[ \t]?/gm,"~0")).replace(/~0/g,"")).replace(/^[ \t]+$/gm,""),a=t.subParser("githubCodeBlocks")(a,r,n),a=(a=(a=t.subParser("blockGamut")(a,r,n)).replace(/(^|\n)/g,"$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,(function(e,r){var t=r;return t=(t=t.replace(/^  /gm,"~0")).replace(/~0/g,"")})),t.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,n)})),e=n.converter._dispatch("blockQuotes.after",e,r,n)})),t.subParser("codeBlocks",(function(e,r,n){e=n.converter._dispatch("codeBlocks.before",e,r,n);return e=(e=(e+="~0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,(function(e,s,a){var o=s,i=a,l="\n";return o=t.subParser("outdent")(o),o=t.subParser("encodeCode")(o),o=(o=(o=t.subParser("detab")(o)).replace(/^\n+/g,"")).replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",t.subParser("hashBlock")(o,r,n)+i}))).replace(/~0/,""),e=n.converter._dispatch("codeBlocks.after",e,r,n)})),t.subParser("codeSpans",(function(e,r,n){return void 0===(e=n.converter._dispatch("codeSpans.before",e,r,n))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,(function(e,r,n,s){var a=s;return a=(a=a.replace(/^([ \t]*)/g,"")).replace(/[ \t]*$/g,""),r+"<code>"+(a=t.subParser("encodeCode")(a))+"</code>"})),e=n.converter._dispatch("codeSpans.after",e,r,n)})),t.subParser("detab",(function(e){return e=(e=(e=(e=(e=e.replace(/\t(?=\t)/g,"    ")).replace(/\t/g,"~A~B")).replace(/~B(.+?)~A/g,(function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}))).replace(/~A/g,"    ")).replace(/~B/g,"")})),t.subParser("encodeAmpsAndAngles",(function(e){return e=(e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;")).replace(/<(?![a-z\/?\$!])/gi,"&lt;")})),t.subParser("encodeBackslashEscapes",(function(e){return e=(e=e.replace(/\\(\\)/g,t.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+-.!])/g,t.helper.escapeCharactersCallback)})),t.subParser("encodeCode",(function(e){return e=(e=(e=e.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),e=t.helper.escapeCharacters(e,"*_{}[]\\",!1)})),t.subParser("encodeEmailAddress",(function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e=(e='<a href="'+(e=(e="mailto:"+e).replace(/./g,(function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e})))+'">'+e+"</a>").replace(/">.+:/g,'">')})),t.subParser("escapeSpecialCharsWithinTagAttributes",(function(e){return e=e.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi,(function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=t.helper.escapeCharacters(r,"\\`*_",!1)}))})),t.subParser("githubCodeBlocks",(function(e,r,n){return r.ghCodeBlocks?(e=n.converter._dispatch("githubCodeBlocks.before",e,r,n),e=(e=(e+="~0").replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,(function(e,s,a){var o=r.omitExtraWLInCodeBlocks?"":"\n";return a=t.subParser("encodeCode")(a),a="<pre><code"+(s?' class="'+s+" language-"+s+'"':"")+">"+(a=(a=(a=t.subParser("detab")(a)).replace(/^\n+/g,"")).replace(/\n+$/g,""))+o+"</code></pre>",a=t.subParser("hashBlock")(a,r,n),"\n\n~G"+(n.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}))).replace(/~0/,""),n.converter._dispatch("githubCodeBlocks.after",e,r,n)):e})),t.subParser("hashBlock",(function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"})),t.subParser("hashElement",(function(e,r,t){return function(e,r){var n=r;return n=(n=(n=n.replace(/\n\n/g,"\n")).replace(/^\n/,"")).replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}})),t.subParser("hashHTMLBlocks",(function(e,r,n){for(var s=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=function(e,r,t,s){var a=e;return-1!==t.search(/\bmarkdown\b/)&&(a=t+n.converter.makeHtml(r)+s),"\n\n~K"+(n.gHtmlBlocks.push(a)-1)+"K\n\n"},o=0;o<s.length;++o)e=t.helper.replaceRecursiveRegExp(e,a,"^(?: |\\t){0,3}<"+s[o]+"\\b[^>]*>","</"+s[o]+">","gim");return e=(e=(e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,t.subParser("hashElement")(e,r,n))).replace(/(<!--[\s\S]*?-->)/g,t.subParser("hashElement")(e,r,n))).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,t.subParser("hashElement")(e,r,n))})),t.subParser("hashHTMLSpans",(function(e,r,n){for(var s=t.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<s.length;++a)e=e.replace(s[a][0],"~L"+(n.gHtmlSpans.push(s[a][0])-1)+"L");return e})),t.subParser("unhashHTMLSpans",(function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e})),t.subParser("hashPreCodeTags",(function(e,r,n){return e=t.helper.replaceRecursiveRegExp(e,(function(e,r,s,a){var o=s+t.subParser("encodeCode")(r)+a;return"\n\n~G"+(n.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"}),"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")})),t.subParser("headers",(function(e,r,n){e=n.converter._dispatch("headers.before",e,r,n);var s=r.prefixHeaderId,a=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),o=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,i=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;function l(e){var r,a=e.replace(/[^\w]/g,"").toLowerCase();return n.hashLinkCounts[a]?r=a+"-"+n.hashLinkCounts[a]++:(r=a,n.hashLinkCounts[a]=1),!0===s&&(s="section"),t.helper.isString(s)?s+r:r}return e=(e=(e=e.replace(o,(function(e,s){var o=t.subParser("spanGamut")(s,r,n),i=r.noHeaderId?"":' id="'+l(s)+'"',c="<h"+a+i+">"+o+"</h"+a+">";return t.subParser("hashBlock")(c,r,n)}))).replace(i,(function(e,s){var o=t.subParser("spanGamut")(s,r,n),i=r.noHeaderId?"":' id="'+l(s)+'"',c=a+1,u="<h"+c+i+">"+o+"</h"+c+">";return t.subParser("hashBlock")(u,r,n)}))).replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,(function(e,s,o){var i=t.subParser("spanGamut")(o,r,n),c=r.noHeaderId?"":' id="'+l(o)+'"',u=a-1+s.length,p="<h"+u+c+">"+i+"</h"+u+">";return t.subParser("hashBlock")(p,r,n)})),e=n.converter._dispatch("headers.after",e,r,n)})),t.subParser("images",(function(e,r,n){function s(e,r,s,a,o,i,l,c){var u=n.gUrls,p=n.gTitles,h=n.gDimensions;if(s=s.toLowerCase(),c||(c=""),""===a||null===a){if(""!==s&&null!==s||(s=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+s,t.helper.isUndefined(u[s]))return e;a=u[s],t.helper.isUndefined(p[s])||(c=p[s]),t.helper.isUndefined(h[s])||(o=h[s].width,i=h[s].height)}r=r.replace(/"/g,"&quot;"),r=t.helper.escapeCharacters(r,"*_",!1);var d='<img src="'+(a=t.helper.escapeCharacters(a,"*_",!1))+'" alt="'+r+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=t.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}return e=(e=(e=n.converter._dispatch("images.before",e,r,n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g,s)).replace(/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,s),e=n.converter._dispatch("images.after",e,r,n)})),t.subParser("italicsAndBold",(function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)})),t.subParser("lists",(function(e,r,n){function s(e,s){n.gListLevel++,e=e.replace(/\n{2,}$/,"\n");var a=/\n[ \t]*\n(?!~0)/.test(e+="~0");return e=(e=e.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,(function(e,s,o,i,l,c,u){u=u&&""!==u.trim();var p=t.subParser("outdent")(l,r,n),h="";return c&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,(function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"}))),s||p.search(/\n{2,}/)>-1?(p=t.subParser("githubCodeBlocks")(p,r,n),p=t.subParser("blockGamut")(p,r,n)):(p=(p=t.subParser("lists")(p,r,n)).replace(/\n$/,""),p=a?t.subParser("paragraphs")(p,r,n):t.subParser("spanGamut")(p,r,n)),p="\n<li"+h+">"+p+"</li>\n"}))).replace(/~0/g,""),n.gListLevel--,s&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var n="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(n)){!function e(a){var i=a.search(n);-1!==i?(o+="\n\n<"+r+">"+s(a.slice(0,i),!!t)+"</"+r+">\n\n",n="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+s(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+s(e,!!t)+"</"+r+">\n\n";return o}e=n.converter._dispatch("lists.before",e,r,n),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return n.gListLevel?e=e.replace(o,(function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)})):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,(function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")}))),e=e.replace(/~0/,""),e=n.converter._dispatch("lists.after",e,r,n)})),t.subParser("outdent",(function(e){return e=(e=e.replace(/^(\t|[ ]{1,4})/gm,"~0")).replace(/~0/g,"")})),t.subParser("paragraphs",(function(e,r,n){for(var s=(e=(e=(e=n.converter._dispatch("paragraphs.before",e,r,n)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=s.length,i=0;i<o;i++){var l=s[i];l.search(/~(K|G)(\d+)\1/g)>=0||(l=(l=t.subParser("spanGamut")(l,r,n)).replace(/^([ \t]*)/g,"<p>"),l+="</p>"),a.push(l)}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?n.gHtmlBlocks[d]:p?t.subParser("encodeCode")(n.ghCodeBlocks[d].text):n.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=(e=(e=a.join("\n\n")).replace(/^\n+/g,"")).replace(/\n+$/g,""),n.converter._dispatch("paragraphs.after",e,r,n)})),t.subParser("runExtension",(function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r})),t.subParser("spanGamut",(function(e,r,n){return e=n.converter._dispatch("spanGamut.before",e,r,n),e=t.subParser("codeSpans")(e,r,n),e=t.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,n),e=t.subParser("encodeBackslashEscapes")(e,r,n),e=t.subParser("images")(e,r,n),e=t.subParser("anchors")(e,r,n),e=t.subParser("autoLinks")(e,r,n),e=t.subParser("encodeAmpsAndAngles")(e,r,n),e=t.subParser("italicsAndBold")(e,r,n),e=(e=t.subParser("strikethrough")(e,r,n)).replace(/  +\n/g," <br />\n"),e=n.converter._dispatch("spanGamut.after",e,r,n)})),t.subParser("strikethrough",(function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e})),t.subParser("stripBlankLines",(function(e){return e.replace(/^[ \t]+$/gm,"")})),t.subParser("stripLinkDefinitions",(function(e,r,n){return e=(e=(e+="~0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm,(function(e,s,a,o,i,l,c){return s=s.toLowerCase(),n.gUrls[s]=t.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(n.gTitles[s]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(n.gDimensions[s]={width:o,height:i}),"")}))).replace(/~0/,"")})),t.subParser("tables",(function(e,r,n){if(!r.tables)return e;function s(e,s){return"<td"+s+">"+t.subParser("spanGamut")(e,r,n)+"</td>\n"}return e=(e=n.converter._dispatch("tables.before",e,r,n)).replace(/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm,(function(e){var a,o=e.split("\n");for(a=0;a<o.length;++a)/^[ \t]{0,3}\|/.test(o[a])&&(o[a]=o[a].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(o[a])&&(o[a]=o[a].replace(/\|[ \t]*$/,""));var i,l,c,u,p=o[0].split("|").map((function(e){return e.trim()})),h=o[1].split("|").map((function(e){return e.trim()})),d=[],f=[],g=[],b=[];for(o.shift(),o.shift(),a=0;a<o.length;++a)""!==o[a].trim()&&d.push(o[a].split("|").map((function(e){return e.trim()})));if(p.length<h.length)return e;for(a=0;a<h.length;++a)g.push((i=h[a],/^:[ \t]*--*$/.test(i)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(i)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(i)?' style="text-align:center;"':""));for(a=0;a<p.length;++a)t.helper.isUndefined(g[a])&&(g[a]=""),f.push((l=p[a],c=g[a],u=void 0,u="",l=l.trim(),r.tableHeaderId&&(u=' id="'+l.replace(/ /g,"_").toLowerCase()+'"'),"<th"+u+c+">"+(l=t.subParser("spanGamut")(l,r,n))+"</th>\n"));for(a=0;a<d.length;++a){for(var v=[],m=0;m<f.length;++m)t.helper.isUndefined(d[a][m]),v.push(s(d[a][m],g[m]));b.push(v)}return function(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}(f,b)})),e=n.converter._dispatch("tables.after",e,r,n)})),t.subParser("unescapeSpecialChars",(function(e){return e=e.replace(/~E(\d+)E/g,(function(e,r){var t=parseInt(r);return String.fromCharCode(t)}))})),module.exports=t; 
     }); 
  define("wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={strDiscode:function(e){return e=function(e){return e=(e=(e=e.replace(/\r\n/g,"")).replace(/\n/g,"")).replace(/code/g,"wxxxcode-style")}(e=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/&OElig;/g,"Œ")).replace(/&oelig;/g,"œ")).replace(/&Scaron;/g,"Š")).replace(/&scaron;/g,"š")).replace(/&Yuml;/g,"Ÿ")).replace(/&fnof;/g,"ƒ")).replace(/&circ;/g,"ˆ")).replace(/&tilde;/g,"˜")).replace(/&ensp;/g,"")).replace(/&emsp;/g,"")).replace(/&thinsp;/g,"")).replace(/&zwnj;/g,"")).replace(/&zwj;/g,"")).replace(/&lrm;/g,"")).replace(/&rlm;/g,"")).replace(/&ndash;/g,"–")).replace(/&mdash;/g,"—")).replace(/&lsquo;/g,"‘")).replace(/&rsquo;/g,"’")).replace(/&sbquo;/g,"‚")).replace(/&ldquo;/g,"“")).replace(/&rdquo;/g,"”")).replace(/&bdquo;/g,"„")).replace(/&dagger;/g,"†")).replace(/&Dagger;/g,"‡")).replace(/&bull;/g,"•")).replace(/&hellip;/g,"…")).replace(/&permil;/g,"‰")).replace(/&prime;/g,"′")).replace(/&Prime;/g,"″")).replace(/&lsaquo;/g,"‹")).replace(/&rsaquo;/g,"›")).replace(/&oline;/g,"‾")).replace(/&euro;/g,"€")).replace(/&trade;/g,"™")).replace(/&larr;/g,"←")).replace(/&uarr;/g,"↑")).replace(/&rarr;/g,"→")).replace(/&darr;/g,"↓")).replace(/&harr;/g,"↔")).replace(/&crarr;/g,"↵")).replace(/&lceil;/g,"⌈")).replace(/&rceil;/g,"⌉")).replace(/&lfloor;/g,"⌊")).replace(/&rfloor;/g,"⌋")).replace(/&loz;/g,"◊")).replace(/&spades;/g,"♠")).replace(/&clubs;/g,"♣")).replace(/&hearts;/g,"♥")).replace(/&diams;/g,"♦")).replace(/&#39;/g,"'")}(e=function(e){return e=(e=(e=(e=(e=(e=e.replace(/&nbsp;/g," ")).replace(/&quot;/g,"'")).replace(/&amp;/g,"&")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&#8226;/g,"•")}(e=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/&Alpha;/g,"Α")).replace(/&Beta;/g,"Β")).replace(/&Gamma;/g,"Γ")).replace(/&Delta;/g,"Δ")).replace(/&Epsilon;/g,"Ε")).replace(/&Zeta;/g,"Ζ")).replace(/&Eta;/g,"Η")).replace(/&Theta;/g,"Θ")).replace(/&Iota;/g,"Ι")).replace(/&Kappa;/g,"Κ")).replace(/&Lambda;/g,"Λ")).replace(/&Mu;/g,"Μ")).replace(/&Nu;/g,"Ν")).replace(/&Xi;/g,"Ν")).replace(/&Omicron;/g,"Ο")).replace(/&Pi;/g,"Π")).replace(/&Rho;/g,"Ρ")).replace(/&Sigma;/g,"Σ")).replace(/&Tau;/g,"Τ")).replace(/&Upsilon;/g,"Υ")).replace(/&Phi;/g,"Φ")).replace(/&Chi;/g,"Χ")).replace(/&Psi;/g,"Ψ")).replace(/&Omega;/g,"Ω")).replace(/&alpha;/g,"α")).replace(/&beta;/g,"β")).replace(/&gamma;/g,"γ")).replace(/&delta;/g,"δ")).replace(/&epsilon;/g,"ε")).replace(/&zeta;/g,"ζ")).replace(/&eta;/g,"η")).replace(/&theta;/g,"θ")).replace(/&iota;/g,"ι")).replace(/&kappa;/g,"κ")).replace(/&lambda;/g,"λ")).replace(/&mu;/g,"μ")).replace(/&nu;/g,"ν")).replace(/&xi;/g,"ξ")).replace(/&omicron;/g,"ο")).replace(/&pi;/g,"π")).replace(/&rho;/g,"ρ")).replace(/&sigmaf;/g,"ς")).replace(/&sigma;/g,"σ")).replace(/&tau;/g,"τ")).replace(/&upsilon;/g,"υ")).replace(/&phi;/g,"φ")).replace(/&chi;/g,"χ")).replace(/&psi;/g,"ψ")).replace(/&omega;/g,"ω")).replace(/&thetasym;/g,"ϑ")).replace(/&upsih;/g,"ϒ")).replace(/&piv;/g,"ϖ")).replace(/&middot;/g,"·")}(e=function(e){return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.replace(/&forall;/g,"∀")).replace(/&part;/g,"∂")).replace(/&exists;/g,"∃")).replace(/&empty;/g,"∅")).replace(/&nabla;/g,"∇")).replace(/&isin;/g,"∈")).replace(/&notin;/g,"∉")).replace(/&ni;/g,"∋")).replace(/&prod;/g,"∏")).replace(/&sum;/g,"∑")).replace(/&minus;/g,"−")).replace(/&lowast;/g,"∗")).replace(/&radic;/g,"√")).replace(/&prop;/g,"∝")).replace(/&infin;/g,"∞")).replace(/&ang;/g,"∠")).replace(/&and;/g,"∧")).replace(/&or;/g,"∨")).replace(/&cap;/g,"∩")).replace(/&cap;/g,"∪")).replace(/&int;/g,"∫")).replace(/&there4;/g,"∴")).replace(/&sim;/g,"∼")).replace(/&cong;/g,"≅")).replace(/&asymp;/g,"≈")).replace(/&ne;/g,"≠")).replace(/&le;/g,"≤")).replace(/&ge;/g,"≥")).replace(/&sub;/g,"⊂")).replace(/&sup;/g,"⊃")).replace(/&nsub;/g,"⊄")).replace(/&sube;/g,"⊆")).replace(/&supe;/g,"⊇")).replace(/&oplus;/g,"⊕")).replace(/&otimes;/g,"⊗")).replace(/&perp;/g,"⊥")).replace(/&sdot;/g,"⋅")}(e)))))},urlToHttpUrl:function(e,a){return new RegExp("^//").test(e)&&(e=a+":"+e),e}}; 
     }); 
  define("wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../@babel/runtime/helpers/defineProperty"),t=require("../@babel/runtime/helpers/createForOfIteratorHelper"),a=r(require("./showdown.js")),i=r(require("./html2json.js"));function r(e){return e&&e.__esModule?e:{default:e}}var n=0,d=0;function o(e){var t=e.target.dataset.src,a=e.target.dataset.from;void 0!==a&&a.length>0&&wx.previewImage({current:t,urls:this.data[a].imageUrls})}function s(a){var i=a.target.dataset.from,r=a.target.dataset.idx;void 0!==i&&i.length>0&&function(a,i,r,o){var s,l=r.data[o];if(!l||0==l.images.length)return;var g,h=l.images,m=function(e,t,a,i){var r,o=0,s=0,l={},g=a.data[i].view.imagePadding;d,e>(r=n-2*g)?(s=(o=r)*t/e,l.imageWidth=o,l.imageheight=s):(l.imageWidth=e,l.imageheight=t);return l}(a.detail.width,a.detail.height,r,o),v=h[i].index,u="".concat(o),f=t(v.split("."));try{for(f.s();!(g=f.n()).done;){var w=g.value;u+=".nodes[".concat(w,"]")}}catch(e){f.e(e)}finally{f.f()}var c=u+".width",x=u+".height";r.setData((e(s={},c,m.imageWidth),e(s,x,m.imageheight),s))}(a,r,this,i)}wx.getSystemInfo({success:function(e){n=e.windowWidth,d=e.windowHeight}}),module.exports={wxParse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wxParseData",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'<div class="color:red;">数据不能为空</div>',n=arguments.length>3?arguments[3]:void 0,d=arguments.length>4?arguments[4]:void 0,l=n,g={};if("html"==t)g=i.default.html2json(r,e);else if("md"==t||"markdown"==t){var h=new a.default.Converter,m=h.makeHtml(r);g=i.default.html2json(m,e)}g.view={},g.view.imagePadding=0,void 0!==d&&(g.view.imagePadding=d);var v={};v[e]=g,l.setData(v),l.wxParseImgLoad=s,l.wxParseImgTap=o},wxParseTemArray:function(e,t,a,i){for(var r=[],n=i.data,d=null,o=0;o<a;o++){var s=n[t+o].nodes;r.push(s)}e=e||"wxParseTemArray",(d=JSON.parse('{"'+e+'":""}'))[e]=r,i.setData(d)},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",a=arguments.length>2?arguments[2]:void 0;i.default.emojisInit(e,t,a)}}; 
     }); 
  define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("@babel/runtime/helpers/regeneratorRuntime"),n=require("@babel/runtime/helpers/asyncToGenerator"),o=require("./api/user"),t=require("./utils/storage");function r(){return new Promise((function(e,n){wx.showLoading({title:"正在登录"}),wx.login({success:function(r){r.code?(console.log("res.code",r.code),(0,o.code2Token)(r.code).then((function(o){if(console.log("login",o),o.data&&o.data.userInfo){if(t.set(t.USER_INFO_KEY,o.data.userInfo,259200),"P"==o.data.userInfo.orgStatus?t.set(t.SHOW_RANK,!0):t.set(t.SHOW_RANK,!1),o.data.configs&&0!=o.data.configs.length)for(var r=o.data.configs,a=0;a<r.length;a++){var i=r[a];t.set(t.CONFIG+i.key,i.val,259200)}setTimeout((function(){e(o.data)}),500),wx.hideLoading()}else wx.showToast({title:"[2]登录失败，请重新进入小程序！",icon:"none"}),n("[2]登录失败，请重新进入小程序！")})).catch((function(e){n(e.message)}))):(console.log("登录失败！"+r.errMsg),n(r.errMsg))},fail:function(){wx.hideLoading()},complete:function(){}})}))}App({globalData:{login:r},onLaunch:function(){return n(e().mark((function n(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:case"end":return e.stop()}}),n)})))()}}); 
     }); 	require("app.js");
   __wxRoute = 'components/acvtivity-info/acvtivity-info';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/acvtivity-info/acvtivity-info.js';	define("components/acvtivity-info/acvtivity-info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../api/user"),n=require("../../wxParse/wxParse.js");Component({properties:{},data:{actInfo:{id:-1,content:"",areaId:-1,areaCode:"",lineId:-1},showAct:!1},lifetimes:{ready:function(){this._loadAct()}},methods:{_loadAct:function(){var n=this;return t(e().mark((function t(){var r,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return /*wx.showLoading({title:"加载中..."})*/ 1,e.next=3,(0,a.getActivityInfo)();case 3:r=e.sent,o=r.data,console.log("actInfo",o),o&&-1!=o.id&&(wx.hideLoading(),n.setData({actInfo:o,showAct:!0}),n.handleHtml(o.content));case 7:case"end":return e.stop()}}),t)})))()},go:function(){this.close(),wx.navigateTo({url:"/pages/zhendi/zhendi-detail?code=".concat(this.data.actInfo.areaCode,"&lineId=").concat(this.data.actInfo.lineId)})},close:function(){this.setData({showAct:!1})},handleHtml:function(e){n.wxParse("actHtml","html",e.replaceAll("\n","<br/>"),this,5)}}}); 
     }); 	require("components/acvtivity-info/acvtivity-info.js");
   __wxRoute = 'components/daka-success/daka-success';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/daka-success/daka-success.js';	define("components/daka-success/daka-success.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{areaid:{type:Number,value:-1},lineid:{type:Number,value:-1},areaCode:{type:String,value:""}},data:{},lifetimes:{ready:function(){-1==this.properties.areaid&&wx.showToast({title:"未设置地点ID",icon:"error"}),-1==this.properties.lineid&&wx.showToast({title:"未设置线路ID",icon:"error"})}},methods:{nothing:function(){},handleClose:function(){this.triggerEvent("close")},toQuestion:function(){wx.redirectTo({url:"/pages/question/question?areaId="+this.properties.areaid+"&lineId="+this.properties.lineid+"&areaCode="+this.properties.areaCode})}}}); 
     }); 	require("components/daka-success/daka-success.js");
   __wxRoute = 'components/game-rule/game-rule-text';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/game-rule/game-rule-text.js';	define("components/game-rule/game-rule-text.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{antiphase:{type:Boolean,value:!1}},data:{},methods:{}}); 
     }); 	require("components/game-rule/game-rule-text.js");
   __wxRoute = 'components/game-rule/game-rule';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/game-rule/game-rule.js';	define("components/game-rule/game-rule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{antiphase:{type:Boolean,value:!1}},data:{},methods:{nothing:function(){},close:function(){this.triggerEvent("close")}}}); 
     }); 	require("components/game-rule/game-rule.js");
   __wxRoute = 'components/identity-selector/identity-selector';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/identity-selector/identity-selector.js';	define("components/identity-selector/identity-selector.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),r=require("../../@babel/runtime/helpers/asyncToGenerator"),t=require("../../api/user"),n=require("../../utils/storage");Component({properties:{from:{type:String,value:"detail"}},data:{showIdentitySelector:!0,showDangyuantypeSelector:!1},methods:{handleSelect:function(a){var o=this;return r(e().mark((function r(){var s,i,u;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.currentTarget.dataset.type,wx.showLoading({title:"加载中..."}),e.prev=2,e.next=5,wx.getUserProfile({desc:"用于完善会员资料"});case 5:if(i=e.sent,console.log(i.userInfo),"微信用户"!=i.userInfo.nickName){e.next=11;break}o._toTrggerEvent(s),e.next=18;break;case 11:return n.set(n.WX_USER_INFO,i.userInfo),e.next=14,(0,t.updateUserInfo)({userType:"guest"==s?"G":"houjie"==s?"D":"O",nickname:i.userInfo.nickName,avatar:i.userInfo.avatarUrl});case 14:(u=e.sent).data&&n.set(n.USER_INFO_KEY,u.data),"houjie"!=s&&"user"!=o.data.from||o._toTrggerEvent(s),o.triggerEvent("selected",s);case 18:e.next=25;break;case 20:e.prev=20,e.t0=e.catch(2),console.error(e.t0),wx.showToast({title:"获取身份信息失败",icon:"none"}),o._toTrggerEvent(s);case 25:return e.prev=25,wx.hideLoading(),e.finish(25);case 28:case"end":return e.stop()}}),r,null,[[2,20,25,28]])})))()},_toTrggerEvent:function(e){console.log("_toTrggerEvent",e),this.triggerEvent("selected",e),wx.navigateTo({url:"/pages/user/user-login?type="+e+"&from="+this.data.from})},nothing:function(){}}}); 
     }); 	require("components/identity-selector/identity-selector.js");
   __wxRoute = 'components/map/map';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/map/map.js';	define("components/map/map.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../api/area"),o=wx.getSystemInfoSync(),h=require("../../utils/storage");Component({properties:{},data:{scale:1,width:o.windowWidth,height:o.windowHeight,mapUrl:"https://mmbiz.qpic.cn/mmbiz_png/IVre43raEsp06HO2ysAG9OXSrvzPR8tOShzSlGWjkzhZVlpaiaR3UpxUkSc4g6Kp98OHG7ia5DSVvJlicDOGLVXMg/0?wx_fmt=png",originImgW:0,originImgH:0,originImg:{width:0,height:0},x:300,y:300,pixelRatio:3,iconWidth:75,iconHeight:85.5,touchList:[{code:"BUS",x:3489,y:2668,w:379,h:296},{code:"YKSQ",x:916,y:2212,w:397,h:258},{code:"DJWHY",x:2020,y:875,w:355,h:135},{code:"DJWHY",x:2121,y:1010,w:145,h:187},{code:"BTSQ",x:1570,y:712,w:386,h:298},{code:"ZWDX",x:1769,y:1010,w:352,h:352},{code:"SSGY",x:1855,y:1243,w:266,h:252},{code:"XWY",x:1458,y:1293,w:397,h:128},{code:"XWY",x:1562,y:1421,w:161,h:203},{code:"ATSY",x:1219,y:1508,w:283,h:276},{code:"HJSQ",x:1512,y:1681,w:367,h:237},{code:"WHFWZX",x:1723,y:1508,w:444,h:80},{code:"ZFJGXFJY",x:2044,y:1588,w:447,h:262},{code:"CWSQ",x:2423,y:438,w:379,h:265},{code:"JBYL",x:2906,y:294,w:469,h:418},{code:"ZHZX",x:2463,y:1121,w:369,h:90},{},{code:"ZHZX",x:2557,y:1211,w:180,h:158},{code:"XZZXXFJY",x:2737,y:1211,w:479,h:192},{code:"SJZX",x:2500,y:1403,w:464,h:250},{code:"HJXZ",x:2737,y:2240,w:377,h:330},{code:"MSJK",x:3114,y:2181,w:404,h:389},{code:"HGSQ",x:3610,y:1905,w:406,h:349},{code:"YGY",x:4641,y:2458,w:403,h:351},{code:"XWSQ",x:4178,y:2925,w:441,h:270},{code:"HSZTGY",x:5162,y:2395,w:418,h:371},{code:"XTSQ",x:1339,y:3158,w:404,h:270},{code:"XYSP",x:1432,y:3660,w:342,h:365},{code:"BTASQ",x:1774,y:3517,w:375,h:341}],iconList:[{code:"YKSQ",x:1087,y:2159,light:!1},{code:"DJWHY",x:2162,y:828,light:!1},{code:"BTSQ",x:1719,y:656,light:!1},{code:"ZWDX",x:1925,y:972,light:!1},{code:"SSGY",x:1938,y:1215,light:!1},{code:"XWY",x:1640,y:1240,light:!1},{code:"ATSY",x:1333,y:1457,light:!1},{code:"HJSQ",x:1656,y:1632,light:!1},{code:"WHFWZX",x:1913,y:1457,light:!1},{code:"ZFJGXFJY",x:2236,y:1539,light:!1},{code:"CWSQ",x:2581,y:393,light:!1},{code:"JBYL",x:3098,y:252,light:!1},{code:"ZHZX",x:2628,y:1075,light:!1},{code:"XZZXXFJY",x:2951,y:1172,light:!1},{code:"SJZX",x:2706,y:1357,light:!1},{code:"HJXZ",x:2899,y:2195,light:!1},{code:"MSJK",x:3258,y:2135,light:!1},{code:"HGSQ",x:3786,y:1863,light:!1},{code:"YGY",x:4803,y:2412,light:!1},{code:"XWSQ",x:4360,y:2872,light:!1},{code:"HSZTGY",x:5346,y:2351,light:!1},{code:"XTSQ",x:1511,y:3115,light:!1},{code:"XYSP",x:1572,y:3612,light:!1},{code:"BTASQ",x:1921,y:3468,light:!1}],lightList:[]},lifetimes:{ready:function(){},attached:function(){var e=this;console.log("device",o,750/o.screenWidth),this.setData({pixelRatio:750/o.screenWidth}),o.screenHeight<800&&this.setData({iconWidth:20}),wx.showLoading({title:"地图绘制中..."}),console.log("开始赋值当前屏幕大小",this.data),wx.getImageInfo({src:this.data.mapUrl,success:function(t){console.log("resopne",t);var i=t.width/t.height;i<e.data.width/e.data.height?e.setData({originImg:{width:e.data.width,height:e.data.width/i},originImgW:e.data.width,originImgH:e.data.width/i}):e.setData({originImg:{height:e.data.height,width:e.data.height*i},originImgH:e.data.height,originImgW:e.data.height*i}),console.log("originImg",e.data.originImg),wx.hideLoading()},fail:function(e){console.log("err",e)}}),this.setData({width:o.windowWidth,height:o.windowHeight})}},methods:{_loadLightArea:function(){var o=this;return t(e().mark((function t(){var h,d,a,c,n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中..."}),e.next=3,(0,i.getLightList)(null);case 3:for(h=e.sent,d=h.data,console.log("lightList",d),a=o.data.iconList,c=0;c<a.length;c++)n=a[c],-1!=d.indexOf(n.code)&&(a[c].light=!0);o.setData({lightList:d,iconList:a}),wx.hideLoading(),o._loadMapUrl();case 11:case"end":return e.stop()}}),t)})))()},_loadMapUrl:function(){var e=h.get("CONFIG:MAP_URL","");e&&this.setData({mapUrl:e})},onChange:function(e){},onScale:function(e){},handleImgErr:function(e){console.log("handleImgErr",e)},handleImgLoad:function(){console.log("handleImgLoad")},handleIconClick:function(e){console.log("e",e.currentTarget.dataset);var t=e.currentTarget.dataset;"BUS"==t.name?wx.navigateTo({url:"/pages/bus/bus"}):wx.navigateTo({url:"/pages/zhendi/zhendi-detail?code="+t.name})}}}); 
     }); 	require("components/map/map.js");
   __wxRoute = 'components/my-alert/my-alert';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/my-alert/my-alert.js';	define("components/my-alert/my-alert.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{text:{type:String,value:""}},data:{},methods:{nothing:function(){},handleConfirm:function(){this.triggerEvent("close")}}}); 
     }); 	require("components/my-alert/my-alert.js");
   __wxRoute = 'components/my-button/my-button';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/my-button/my-button.js';	define("components/my-button/my-button.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{text:{type:String,value:"立即打卡"},disabled:{type:Boolean,value:!1},blue:{type:Boolean,value:!1},width:{type:String,value:"365rpx"},plain:{type:Boolean,value:!1}},data:{},methods:{}}); 
     }); 	require("components/my-button/my-button.js");
   __wxRoute = 'components/post-share/post-share';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/post-share/post-share.js';	define("components/post-share/post-share.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),o=require("../../api/area");Component({properties:{lineId:{type:Number,value:-1},areaCode:{type:String,value:""},uuid:{type:String,value:""},showShareTip:{type:Boolean,value:!1},noCancel:{type:Boolean,value:!1},zhendi:{type:Boolean,value:!1},nextPage:{type:String,value:""}},data:{postUrl:"",uuid:"",showPyqTip:!1},lifetimes:{ready:function(){var a=this;return t(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(wx.showLoading({title:"生成中..."}),""==a.data.uuid){e.next=7;break}return e.next=4,(0,o.getPostPicByUUID)(a.data.uuid);case 4:n=e.sent,e.next=10;break;case 7:return e.next=9,(0,o.getPostPic)(a.data.lineId,a.data.areaCode);case 9:n=e.sent;case 10:n=n.data,console.log("postpic",n),a.setData({postUrl:n.url,uuid:n.uuid}),a.triggerEvent("loaded",n),wx.hideLoading();case 15:case"end":return e.stop()}}),t)})))()}},methods:{nothing:function(){},shareFirend:function(){wx.downloadFile({url:this.data.postUrl,success:function(e){wx.showShareImageMenu({path:e.tempFilePath})},fail:function(e){wx.showModal({title:"提示",content:e.errMsg})}})},downloadImg:function(){wx.showLoading({title:"加载中..."}),wx.downloadFile({url:this.data.postUrl,success:function(e){wx.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(e){wx.hideLoading(),wx.showToast({title:"保存成功"})},fail:function(e){"saveImageToPhotosAlbum:fail:auth denied"!==e.errMsg&&"saveImageToPhotosAlbum:fail auth deny"!==e.errMsg&&"saveImageToPhotosAlbum:fail authorize no response"!==e.errMsg||wx.showModal({title:"提示",content:"需要您授权保存相册",modalType:!1,success:function(e){wx.openSetting({success:function(e){console.log("settingdata",e),e.authSetting["scope.writePhotosAlbum"]?wx.showModal({title:"提示",content:"获取权限成功,再次点击图片即可保存",modalType:!1}):wx.showModal({title:"提示",content:"获取权限失败，将无法保存到相册哦~",modalType:!1})},fail:function(e){console.log("failData",e)},complete:function(e){console.log("finishData",e)}})}})},complete:function(e){wx.hideLoading()}})}})},showSharePyqTip:function(){var e=getCurrentPages(),t=e[e.length-1];if(console.log("route",t.route),this.data.zhendi&&!t.route.includes("zhendi-detail"))return console.log("要跳转"),void wx.redirectTo({url:"/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode,"&lineId=").concat(this.data.lineId,"&postcard=1&uuid=").concat(this.data.uuid)});console.log("本页面"),this.setData({showPyqTip:!0,showShareTip:!0})},closeShareTip:function(){this.setData({showPyqTip:!1,showShareTip:!1})},handleClose:function(){this.data.noCancel?wx.switchTab({url:"/miniprogram/pages/zhendi/zhendi"}):this.triggerEvent("close")}}}); 
     }); 	require("components/post-share/post-share.js");
   __wxRoute = 'components/scan-icon/scan-icon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/scan-icon/scan-icon.js';	define("components/scan-icon/scan-icon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{},data:{},methods:{handleClick:function(){wx.scanCode({success:function(e){console.log(e),"QR_CODE"==e.scanType?e.result.includes("/hjqr.html#/")?(console.log("阵地二维码","/pages/zhendi/zhendi-detail?q=".concat(encodeURIComponent(e.result),"&scancode_time=").concat(parseInt((new Date).getTime()/1e3+""))),wx.navigateTo({url:"/pages/zhendi/zhendi-detail?q=".concat(encodeURIComponent(e.result),"&scancode_time=").concat(parseInt((new Date).getTime()/1e3+""))})):wx.showToast({title:"暂不支持扫码此二维码~",icon:"none"}):"WX_CODE"==e.scanType&&(console.log("res.path",e.path),e.path&&(wx.showLoading({title:"正在跳转..."}),wx.navigateTo({url:"/"+e.path})))}})}}}); 
     }); 	require("components/scan-icon/scan-icon.js");
   __wxRoute = 'pages/zhendi/zhendi';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zhendi/zhendi.js';	define("pages/zhendi/zhendi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../api/user");Page({data:{showRule:!1,activityInfo:{}},closeRule:function(){this.setData({showRule:!1})},showRule:function(){this.setData({showRule:!0})},_loadActivityInfo:function(){var o=this;return e(t().mark((function e(){var a,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:wx.showLoading({title:"加载中..."}),a=(0,n.getActivityInfo)(),i=a.data,o.setData({activityInfo:i}),wx.hideLoading();case 4:case"end":return t.stop()}}),e)})))()},onLoad:function(){this._loadActivityInfo()},onReady:function(){},onShow:function(){"function"==typeof this.getTabBar&&this.getTabBar()&&this.getTabBar().setData({active:"zhendi"}),this.selectComponent(".my-map")._loadLightArea()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/zhendi/zhendi.js");
   __wxRoute = 'pages/zhendi/zhendi-detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zhendi/zhendi-detail.js';	define("pages/zhendi/zhendi-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../api/area"),n=require("../../utils/storage"),i=require("../../wxParse/wxParse.js"),o=require("../../utils/qr2detail");Page({data:{areaCode:"",areaName:{first:"",last:""},info:{id:-1,code:"",mainPic:"",dakaStatus:0,name:"",info:"",bannerList:[""],concatPerson:"",openTime:"",tips:"",latitude:22.72174,longitude:114.06031,addrText:"",tour:"",lineId:-1,busStation:"",boardPosition:"",actName:"",actInfo:"",reservationWay:""},callout:{id:1,latitude:22.72174,longitude:114.06031,iconPath:"/assets/images/location.png",width:"80rpx",height:"90rpx",callout:{content:"",color:"#000",fontSize:10,borderWidth:1,borderRadius:10,borderColor:"#000000",bgColor:"#fff",padding:2,display:"ALWAYS",textAlign:"center"}},currentLineId:-1,alertText:"",showAlert:!1,showMask:!1,showIdentitySelector:!0,showSignSuccess:!1,postShare:!1,postInfo:{uuid:"",url:""},postShareEntrance:!1,channel:"Q",showMap:!0,showShareTip:!1,activies:[{name:"",info:"",reservationWay:""}]},closeSignSuccess:function(){this.setData({showSignSuccess:!1})},showSignSuccess:function(){this.setData({showSignSuccess:!0})},handleToQuestion:function(){wx.redirectTo({url:"/pages/question/question?areaId="+this.data.info.id+"&lineId="+this.data.currentLineId+"&areaCode="+this.data.areaCode})},handleDakaBtnClick:function(i){var o,r=this;wx.showLoading({title:"定位中..."}),wx.getLocation({type:"gcj02",success:(o=e(t().mark((function e(i){var o,s,c,d,l;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=i.latitude,s=i.longitude,console.log("当前用户：lat,lon",o,s),c=r.getDistance(o,s,r.data.info.latitude,r.data.info.longitude),console.log("用户距离dis",c),wx.hideLoading(),d=parseInt(n.get(n.CONFIG+"SIGN_MAXIMUM_DISTANCE","100")),!(c>d)){t.next=12;break}return r.showAlert("在打卡点".concat(d,"米内范围才能打卡哦！")),t.abrupt("return");case 12:if((l=n.get(n.USER_INFO_KEY))&&"C"==l.infoStatus){t.next=17;break}return r.setData({showIdentitySelector:!0}),n.set(n.SIGN_DATA+r.data.areaCode,{id:r.data.info.id,channel:n.get(n.CHANNEL,""),latitude:o,longitude:s,dis:c},86400),t.abrupt("return");case 17:return t.prev=17,wx.showLoading({title:"数据上传中..."}),t.next=21,(0,a.addLocationSign)(r.data.info.id,o,s,c,r.data.channel);case 21:wx.hideLoading(),r.showSignSuccess(),r._loadAreaInfo(),t.next=28;break;case 26:t.prev=26,t.t0=t.catch(17);case 28:return t.prev=28,t.finish(28);case 30:case"end":return t.stop()}}),e,null,[[17,26,28,30]])}))),function(t){return o.apply(this,arguments)}),fail:function(t){console.error(t),r.showAlert("定位失败，请稍后再试！"),wx.hideLoading()}})},handleShareClick:function(){this.setData({postShare:!0})},closePostShare:function(){this.setData({postShare:!1})},postImgLoaded:function(t){console.log("postInfo loaded",t.detail),this.setData({postInfo:t.detail})},handleBusClick:function(){wx.navigateTo({url:"/pages/bus/bus"})},getDistance:function(t,e,a,n){var i=t*Math.PI/180,o=a*Math.PI/180,r=i-o,s=e*Math.PI/180-n*Math.PI/180,c=2*Math.asin(Math.sqrt(Math.pow(Math.sin(r/2),2)+Math.cos(i)*Math.cos(o)*Math.pow(Math.sin(s/2),2)));return c*=6378.137,c=Math.round(1e5*c)/100},closeAlert:function(){this.setData({showAlert:!1,alertText:""})},showAlert:function(t){this.setData({showAlert:!0,alertText:t})},closeMask:function(){this.setData({showMask:!1})},showMask:function(){this.setData({showMask:!0})},nothing:function(){},handleIdentitySelected:function(){this.setData({showMask:!1,showIdentitySelector:!1}),this._checkTempSignData()},_loadAreaInfo:function(){var o=this;return e(t().mark((function e(){var r,s,c,d,l,u,h,f,p,g;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("_loadAreaInfo"),t.prev=1,wx.showLoading({title:"加载中..."}),o.data.postShareEntrance||n.get(n.USER_JWT_KEY,!1)){t.next=6;break}return t.next=6,getApp().globalData.login();case 6:return t.next=8,(0,a.getAreaInfo)(o.data.areaCode);case 8:if(r=t.sent,s=r.data,console.log("areaInfo",s),c={id:1,latitude:parseFloat(s.latitude),longitude:parseFloat(s.longitude),iconPath:"/assets/images/location.png",width:"80rpx",height:"90rpx",callout:{content:s.name,color:"#000",fontSize:10,borderWidth:1,borderRadius:10,borderColor:"#000000",bgColor:"#fff",padding:4,display:"ALWAYS",textAlign:"center"}},-1!=s.name.indexOf("（")&&-1==s.name.indexOf("小坞园")?o.setData({areaName:{first:s.name.split("（")[0],last:"（"+s.name.split("（")[1]}}):o.setData({areaName:{first:s.name,last:""}}),s.openTime&&i.wxParse("openTimeHtml","html",s.openTime.replaceAll("\n","<br/>"),o,5),s.tour&&i.wxParse("tourHtml","html",s.tour.replaceAll("\n","<br/>"),o,5),s.busStation&&i.wxParse("busStationrHtml","html",s.busStation.replaceAll("\n","<br/>"),o,5),d=[{name:"",info:"",reservationWay:""}],s.actName)for(l=s.actName?s.actName.split("||"):[],u=s.actInfo?s.actInfo.split("||"):[],h=s.reservationWay?s.reservationWay.split("||"):[],f=0,p=l.length;f<p;f++)try{g={name:l[f],info:u[f],reservationWay:h[f]},d[f]=g}catch(t){console.error("解析活动列表失败",t)}o.setData({info:s,callout:c,activies:d,currentLineId:-1==o.data.currentLineId?s.lineId:o.data.currentLineId}),wx.hideLoading(),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(1),wx.navigateBack();case 25:return t.prev=25,t.finish(25);case 27:case"end":return t.stop()}}),e,null,[[1,22,25,27]])})))()},handleMapClick:function(){wx.openLocation({latitude:this.data.callout.latitude,longitude:this.data.callout.longitude,scale:14,name:this.data.info.name,address:this.data.info.addrText})},handleAddTextClick:function(){var t=this;this.setData({showMap:!1},(function(){t.setData({showMap:!0})}))},onLoad:function(t){var e=this;if(console.log("option",t),t.lineId&&this.setData({currentLineId:parseInt(t.lineId),channel:"Z"}),t.q){var a=o.parse(decodeURIComponent(t.q));if(null==a)return void wx.showToast({title:"非法入口！",icon:"error"});console.log("扫码进来的","url信息",a),t.code=a.areaCode,this.setData({channel:"S",currentLineId:a.lineId})}t.channel&&this.setData({channel:t.channel}),t.postshare?this.setData({postShareEntrance:!0,areaCode:t.code}):t.postcard&&(t.uuid&&this.setData({postInfo:{uuid:t.uuid+"",url:""}}),this.setData({postShareEntrance:!1,areaCode:t.code,currentLineId:t.lineId,postShare:!0,showShareTip:!0})),t.code?this.setData({areaCode:t.code},(function(){e._loadAreaInfo()})):wx.showToast({title:"未找到此地点"})},onShow:function(){var a=this;return e(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.setData({showIdentitySelector:!1,showMask:!1,showAlert:!1}),!a.data.postShareEntrance){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,a._checkTempSignData();case 5:case"end":return t.stop()}}),e)})))()},_checkTempSignData:function(){var i=this;return e(t().mark((function e(){var o,r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n.get(n.SIGN_DATA+i.data.areaCode,null),r=n.get(n.USER_INFO_KEY),!o||!r||"C"!=r.infoStatus){t.next=16;break}return t.prev=3,wx.showLoading({title:"数据上传中..."}),t.next=7,(0,a.addLocationSign)(o.id,o.latitude,o.longitude,o.dis,n.get(n.CHANNEL,""));case 7:wx.hideLoading(),n.remove(n.SIGN_DATA+i.data.areaCode),i.showSignSuccess(),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(3);case 14:return t.prev=14,t.finish(14);case 16:case"end":return t.stop()}}),e,null,[[3,12,14,16]])})))()},onShareAppMessage:function(){return{title:"红色引领，全域提升！一起来打卡".concat(this.data.info.name.includes("淄博监管分局")?"":"淄博监管分局镇").concat(this.data.info.name,"！"),path:"/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode,"&lineId=").concat(this.data.currentLineId),imageUrl:this.data.info.mainPic}},onShareTimeline:function(){return this.data.postInfo.uuid?((0,a.sharePostImg)(this.data.info.id,null).then((function(t){wx.showModal({title:"恭喜您获得3个积分！",icon:"none"})})),{title:"红色引领，全域提升！我已成功打卡".concat(this.data.info.name.includes("淄博监管分局")?"":"淄博监管分局镇").concat(this.data.info.name,"！"),query:"uuid=".concat(this.data.postInfo.uuid,"&postshare=1&code=").concat(this.data.areaCode,"&lineId=").concat(this.data.currentLineId),imageUrl:this.data.info.mainPic}):{title:"红色引领，全域提升！一起来打卡".concat(this.data.info.name.includes("淄博监管分局")?"":"淄博监管分局镇").concat(this.data.info.name,"！"),query:"code=".concat(this.data.areaCode,"&lineId=").concat(this.data.currentLineId),imageUrl:this.data.info.mainPic}}}); 
     }); 	require("pages/zhendi/zhendi-detail.js");
   __wxRoute = 'pages/rank/rank';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/rank/rank.js';	define("pages/rank/rank.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/asyncToGenerator"),t=require("../../api/user"),n=require("../../utils/storage"),r=n.get(n.USER_INFO_KEY);Page({data:{active:"all",list:[],mine:{avatar:"",lastScoreTime:null,medalCount:0,nickname:"",orgName:"暂未上榜",rank:"/",score:0,uid:-1}},onLoad:function(){this._loadRankList()},_loadRankList:function(){var i=this;return a(e().mark((function a(){var o,s,c,u,l;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中..."}),e.prev=1,e.next=4,(0,t.getRankList)(i.data.active);case 4:if(o=e.sent,s=o.data,i.setData({list:s}),c=!1,console.log("userInfo",r),r||(r=n.get(n.USER_INFO_KEY)),e.prev=10,!s){e.next=22;break}u=0;case 13:if(!(u<s.length)){e.next=22;break}if((l=s[u]).uid!=r.id){e.next=19;break}return i.setData({mine:l}),c=!0,e.abrupt("break",22);case 19:u++,e.next=13;break;case 22:c||i.setData({mine:{avatar:r.avatar,lastScoreTime:null,medalCount:r.medalCount,nickname:r.nickname,orgName:"暂未上榜",rank:"/",score:r.score,uid:r.id}}),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(10),console.log("userinfo err",e.t0),i.setData({mine:{avatar:"",lastScoreTime:null,medalCount:0,nickname:"暂未上榜",orgName:"暂未上榜",rank:"/",score:0,uid:-1}});case 29:wx.hideLoading(),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(1),console.error(e.t1);case 35:return e.prev=35,e.finish(35);case 37:case"end":return e.stop()}}),a,null,[[1,32,35,37],[10,25]])})))()},handleTabbarClick:function(e){var a=this;e.currentTarget.dataset.name&&e.currentTarget.dataset.name!=this.data.active&&this.setData({active:e.currentTarget.dataset.name},(function(){a._loadRankList()}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/rank/rank.js");
   __wxRoute = 'pages/zhuti/zhuti';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zhuti/zhuti.js';	define("pages/zhuti/zhuti.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../api/area");Page({data:{zhutiList:[]},_loadList:function(){var a=this;return e(t().mark((function e(){var r,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wx.showLoading({title:"加载中..."}),t.next=3,(0,n.getLineList)();case 3:r=t.sent,i=r.data,console.log("lineInfoList",i),a.setData({zhutiList:i}),wx.hideLoading();case 8:case"end":return t.stop()}}),e)})))()},handleItemClick:function(t){console.log("handleItemClick",t.currentTarget.dataset),wx.navigateTo({url:"./zhuti-detail?id="+t.currentTarget.dataset.ztid})},handleAwardTap:function(n){var a=this;return e(t().mark((function e(){var r,i;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleItemClick",n.currentTarget.dataset),t.next=3,a._loadList();case 3:if(0!=(r=a.data.zhutiList.filter((function(t){return t.id==n.currentTarget.dataset.ztid}))).length){t.next=7;break}return wx.showToast({title:"操作失败，无此线路："+n.currentTarget.dataset.ztid,icon:"none"}),t.abrupt("return");case 7:(i=r[0]).total==i.progress?wx.showToast({title:"勋章已发放，请前往个人中心-勋章墙佩戴！",icon:"none",duration:3e3}):wx.showToast({title:"失败: 未完成此线路打卡",icon:"none"});case 9:case"end":return t.stop()}}),e)})))()},onLoad:function(){},onReady:function(){},onShow:function(){"function"==typeof this.getTabBar&&this.getTabBar()&&this.getTabBar().setData({active:"zhuti"}),this._loadList()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){var n=this;return e(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._loadList();case 2:wx.stopPullDownRefresh();case 3:case"end":return t.stop()}}),e)})))()},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/zhuti/zhuti.js");
   __wxRoute = 'pages/test/test';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/test/test.js';	define("pages/test/test.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},computeDis:function(){var o=this;console.log("computeDis"),wx.getLocation({type:"gcj02",success:function(n){var t=n.latitude,a=n.longitude;console.log("lat,lon",t,a);var e=o.getDistance(t,a,22.66417,114.002872);console.log("dis",e),wx.showToast({title:e+"m",icon:"none"})},fail:function(o){console.log("getLocation err",o),wx.showToast({title:"定位失败，请稍后重试！",icon:"error"})}})},openLocation:function(){wx.openLocation({latitude:22.66417,longitude:114.002872,scale:18})},getDistance:function(o,n,t,a){var e=o*Math.PI/180,i=t*Math.PI/180,c=e-i,s=n*Math.PI/180-a*Math.PI/180,u=2*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(e)*Math.cos(i)*Math.pow(Math.sin(s/2),2)));return u*=6378.137,u=Math.round(1e5*u)/100},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/test/test.js");
   __wxRoute = 'pages/share/share';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/share/share.js';	define("pages/share/share.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util"),e=null,a=null,s=1,o=10,i=[0];Page({data:{posterDatas:{width:750,height:1045,pic:"",buttonType:1,show:!1,success:!1},postImg:""},onReady:function(){o=10,this.initCavans()},onShow:function(){o=10,console.log("onShow this.data.postImg",this.data.postImg),this.data.postImg||this.onBuildPosterSaveAlbum()},initCavans:function(){console.log("initCavans");var t=this.data.posterDatas;wx.createSelectorQuery().select("#firstCanvas").fields({node:!0,size:!0}).exec((function(o){console.log("res",o),e=o[0].node,a=e.getContext("2d"),s=wx.getSystemInfoSync().pixelRatio,e.width=t.width*s,e.height=t.height*s,a.scale(s,s),console.log("海报初始化 成功！",e,a)}))},onBuildPosterSaveAlbum:function(){var s=this,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],h=this.data.posterDatas;h.show=!0,this.setData({posterDatas:h}),n&&wx.showLoading({title:"海报生成中",mask:!0});var l=new Promise((function(t,a){var s=e.createImage();s.src="../../assets/images/share-bg.png",s.onload=function(){t(s)}})),r=new Promise((function(t,a){var s=e.createImage();s.src="../../assets/images/xcxqr.png",s.onload=function(){t(s)}}));Promise.all([l,r]).then((function(o){a.fillStyle="#ffffff",a.fillRect(0,0,e.width,e.height),a.drawImage(o[0],0,0,h.width,h.height),a.drawImage(o[1],h.width-200,h.height-200,180,180),a.font="bold 30px Arial",a.fillStyle="#fff",a.textAlign="left",a.fillText("恭喜XXX已成功完成打卡！",20,50),a.font="bold 30px Arial",a.fillStyle="#fff",a.textAlign="left",a.fillText("完成时间"+(0,t.formatTime)(new Date),20,h.height-100),n&&wx.hideLoading(),h.success=!0,s.setData({posterDatas:h})})).catch((function(t){i[o]=setInterval((function(){(--o<=0||s.data.posterDatas.success)&&(i.forEach((function(t){return t&&clearInterval(t)})),o=-99,wx.hideLoading()),console.log("重试"+o),s.onBuildPosterSaveAlbum(!1)}),500),o<=0&&(i.forEach((function(t){return t&&clearInterval(t)})),wx.hideLoading(),wx.showToast({icon:"none",title:"资源正在加载中,请再试一次."}),h.show=!1,s.setData({posterDatas:h}))}))},onCanvasBuildImges:function(){var t=this,a=this.data.posterDatas;wx.canvasToTempFilePath({canvas:e,width:a.width,height:a.height,destWidth:3*a.width,destHeight:3*a.height,success:function(e){a.pic=e.tempFilePath,t.setData({posterDatas:a}),t.onDownloadImges()},fail:function(){wx.hideLoading(),wx.showToast({icon:"none",title:"保存失败,请稍后再试."})}})},onDownloadImges:function(){var t=this;wx.showLoading({title:"保存中",mask:!0});var e=this.data.posterDatas;e.pic?wx.saveImageToPhotosAlbum({filePath:e.pic,success:function(a){wx.hideLoading(),wx.showToast({icon:"none",title:"已保存到相册，快去分享吧"}),e.buttonType=2,t.setData({posterDatas:e})},fail:function(a){wx.hideLoading(),wx.showToast({icon:"none",title:"进入设置页，开启“保存到相册”"}),e.buttonType=3,t.setData({posterDatas:e})}}):this.onCanvasBuildImges()},onBindOpenSetting:function(){var t=this.data.posterDatas;t.buttonType=1,this.setData({posterDatas:t})},onIsCanvas:function(){var t=this.data.posterDatas;t.buttonType=1,t.show=!1,this.setData({posterDatas:t})},preventTouchMove:function(){console.log("preventTouchMove"),this.data.posterDatas.show&&(this.data.posterDatas.show=!1,this.setData({posterDatas:this.data.posterDatas}))},onShareAppMessage:function(){return{title:"自定义转发标题",path:"/page/test/test?id=123",promise:new Promise((function(t){setTimeout((function(){t({title:"自定义转发标题"})}),2e3)}))}},onShareTimeline:function(){return{title:"朋友圈自定义转发标题",query:"id=456"}}}); 
     }); 	require("pages/share/share.js");
   __wxRoute = 'pages/user/info';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/info.js';	define("pages/user/info.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../api/user"),a=require("../../utils/storage");Page({data:{titleTop:44,menuHeight:40,textAlign:"center",pixelRatio:2,showIdentitySelector:!1,userInfo:{id:-1,openid:"",nickname:"",avatar:"",realName:"",phone:"",dangOrgId:"",userType:"",status:"",createTime:"",infoStatus:"",orgStatus:"",score:0,dangOrg:"",userMedal:[]}},onLoad:function(){this._setNaviStyle()},onShow:function(){this._loadUserInfo(),this.setData({showIdentitySelector:!1})},handlePannelItemClick:function(e){var t=e.currentTarget.dataset.action;if(console.log("点击："+t),"profile"==t){var n=this.data.userInfo;if(!n||"C"!=n.infoStatus)return void this.setData({showIdentitySelector:!0});wx.navigateTo({url:"/pages/user/user-login?type="+("D"==n.userType?"houjie":"O"==n.userType?"other":"guest")+"&from=user"})}else"rank"==t?wx.navigateTo({url:"/pages/rank/rank"}):"medal"==t?wx.navigateTo({url:"/pages/user/medal"}):"rule"==t?wx.navigateTo({url:"/pages/game-rule/game-rule"}):"bus"==t&&wx.navigateTo({url:"/pages/bus/bus?line=-1"})},_loadUserInfo:function(){var r=this;return t(e().mark((function t(){var o,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中..."}),e.next=3,(0,n.getUserInfo)();case 3:o=e.sent,s=o.data,r.setData({userInfo:s}),console.log("userInfo",s),a.set(a.USER_INFO_KEY,s),wx.hideLoading();case 9:case"end":return e.stop()}}),t)})))()},_setNaviStyle:function(){var e=this;wx.getSystemInfo({success:function(t){var n=t,a=wx.getMenuButtonBoundingClientRect(),r=n.statusBarHeight,o=2*(a.top-n.statusBarHeight)+a.height;console.log(n),console.log(r),console.log(o),e.setData({titleTop:r,menuHeight:o,textAlign:"android"==n.platform?"left":"center",pixelRatio:n.pixelRatio})}})},handleIdentitySelected:function(){this.setData({showIdentitySelector:!1})},onPullDownRefresh:function(){var n=this;return t(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._loadUserInfo();case 2:wx.stopPullDownRefresh();case 3:case"end":return e.stop()}}),t)})))()},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/user/info.js");
   __wxRoute = 'pages/zhuti/zhuti-detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/zhuti/zhuti-detail.js';	define("pages/zhuti/zhuti-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../api/area"),n=require("./position"),o=require("../../utils/storage");Page({data:{info:{title:"",mapurl:"",desc:"",tips:"",code:"",totalArea:-1,id:-1},lineId:-1,postShare:!1,nowTouchArea:[],nowLightLogo:[],nowNameCard:[],lightCount:-2,postInfo:{uuid:"",url:""},firstLoaded:!1,postTip:!1,shareTip:!1},closePostShare:function(){this.setData({postShare:!1})},postImgLoaded:function(t){console.log("postInfo loaded",t.detail),this.setData({postInfo:t.detail})},showPostShare:function(){this.setData({postShare:!0,postTip:!1,shareTip:!0})},closeMask:function(){console.log("closeMask"),this.setData({postTip:!1,shareTip:!1}),o.set(o.LINE_SHARE_TIP_CLOSE+this.data.info.id,!0)},_loadLineInfo:function(o){var i=this;return e(t().mark((function e(){var r,s;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wx.showLoading({title:"加载中..."}),t.prev=1,t.next=4,(0,a.getLineInfo)(o||i.data.lineId);case 4:r=t.sent,s=r.data,i.setData({info:s,nowTouchArea:n.allTouchArea[s.code],nowNameCard:n.allNameCard[s.code]}),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:return t.prev=11,wx.hideLoading(),t.finish(11);case 14:case"end":return t.stop()}}),e,null,[[1,9,11,14]])})))()},_loadLightArea:function(i){var r=this;return e(t().mark((function e(){var s,d,c,l;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("_loadLightArea"),wx.showLoading({title:"加载中..."}),t.next=4,(0,a.getLightList)(i||r.data.lineId);case 4:s=t.sent,d=s.data,console.log("lightList",d),(c=n.allLightLogo[r.data.info.code]).forEach((function(t){d.includes(t.code)&&(t.light=!0)})),(l=n.allNameCard[r.data.info.code]).forEach((function(t){d.includes(t.code)&&(t.light=!0)})),r.setData({nowLightLogo:c,nowNameCard:l,lightCount:d.length},(function(){r.data.info.totalArea==r.data.lightCount&&r.data.firstLoaded&&(o.get(o.LINE_SHARE_TIP_CLOSE+r.data.info.id,!1)||r.setData({postTip:!0}))})),wx.hideLoading();case 13:case"end":return t.stop()}}),e)})))()},onLoad:function(a){var n=this;return e(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("option",a),n.setData({lineId:a.id}),t.next=4,n._loadLineInfo(a.id);case 4:if("1"!=a.postshare){t.next=8;break}n.setData({shareTip:!1,postTip:!1}),t.next=10;break;case 8:return t.next=10,n._loadLightArea(null);case 10:case"end":return t.stop()}}),e)})))()},nothing:function(){},handleAreaTap:function(t){console.log(t.currentTarget.dataset.code),wx.navigateTo({url:"/pages/zhendi/zhendi-detail?code="+t.currentTarget.dataset.code})},onReady:function(){},onShow:function(){this.data.firstLoaded?this._loadLightArea(null):this.setData({firstLoaded:!0})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"来打卡淄博监管分局“".concat(this.data.info.title,"”主题路线，可获得“").concat(this.data.info.tips,"”勋章！"),path:"/pages/zhuti/zhuti-detail?id="+this.data.lineId,imageUrl:this.data.info.mapurl}},onShareTimeline:function(){return this.data.postInfo.uuid?((0,a.sharePostImg)(null,this.data.info.id).then((function(t){console.log("打卡了"),wx.showModal({title:"恭喜您已获得3个积分！",icon:"none"})})),{title:"我已成功打卡淄博监管分局“".concat(this.data.info.title.replace("线",""),"”主题路线，获得“").concat(this.data.info.tips,"”勋章！"),query:"uuid=".concat(this.data.postInfo.uuid,"&postshare=1&id=").concat(this.data.lineId),imageUrl:this.data.info.mapurl}):{title:"来打卡淄博监管分局“".concat(this.data.info.title.replace("线",""),"”主题路线，可获得“").concat(this.data.info.tips,"”勋章！"),query:"id="+this.data.lineId,imageUrl:this.data.info.mapurl}}}); 
     }); 	require("pages/zhuti/zhuti-detail.js");
   __wxRoute = 'pages/question/question';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/question/question.js';	define("pages/question/question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("../../api/question"),n=require("../../api/area"),r=require("../../utils/storage"),i=[];Page({data:{questionList:[{answer:"",id:-1,optionA:"",optionB:"",optionC:"",optionD:"",question:""}],answerList:[{correct:"",error:"",selected:""}],nowIndex:0,mode:"answer",areaId:-1,areaCode:"",lineId:-1,channel:""},onLoad:function(e){if(console.log("option",e),e.mode&&"result"==e.mode){var t=r.get(r.QUESTION_LIST),a=r.get(r.QUESTION_RESULT);if(!t||!a)return void wx.showToast({title:"加载异常，请重新进入！",icon:"error"});this.setData({mode:e.mode,questionList:t,answerList:a,nowIndex:parseInt(e.nowIndex)})}else{if(!e.areaId||-1==e.areaId||-1==e.lineId)return wx.showToast({title:"非法入口",icon:"error"}),void wx.navigateBack();this.setData({areaId:e.areaId,lineId:e.lineId,areaCode:e.areaCode}),r.remove(r.QUESTION_LIST),r.remove(r.QUESTION_RESULT),this._loadList()}},handleOptionClick:function(e){if("result"!=this.data.mode){console.log("e",e.currentTarget.dataset.option);var t=e.currentTarget.dataset.option,a=this.data.questionList[this.data.nowIndex].answer;t==a?(this.data.answerList[this.data.nowIndex]={correct:a,error:"",selected:t},this.setData({answerList:this.data.answerList})):(this.data.answerList[this.data.nowIndex]={correct:a,error:t,selected:t},this.setData({answerList:this.data.answerList}))}},handleNext:function(){this.data.nowIndex<4&&this.setData({nowIndex:this.data.nowIndex+1})},handlePrev:function(){this.data.nowIndex>0&&this.setData({nowIndex:this.data.nowIndex-1})},handleStop:function(){var a=this;return t(e().mark((function t(){var i,s;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r.set(r.QUESTION_LIST,a.data.questionList),r.set(r.QUESTION_RESULT,a.data.answerList),i=a.data.questionList.length,s=0;s<a.data.answerList.length;s++)a.data.answerList[s].error&&i--;return wx.showLoading({title:"正在阅卷..."}),e.next=7,(0,n.addQuestionSign)(a.data.areaId,i,a.data.channel);case 7:wx.hideLoading(),wx.redirectTo({url:"./question-result?areaId=".concat(a.data.areaId,"&lineId=").concat(a.data.lineId,"&areaCode=").concat(a.data.areaCode)});case 9:case"end":return e.stop()}}),t)})))()},_loadList:function(){var n=this;return t(e().mark((function t(){var r,s,o,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中..."}),e.prev=1,e.next=4,(0,a.getQuestionList)(n.data.lineId,5,i);case 4:for(r=e.sent,s=r.data,i=[],o=0;o<s.length;o++)d=s[o],i.push(d.id);n.setData({questionList:s,answerList:[]}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:return e.prev=13,wx.hideLoading(),e.finish(13);case 16:case"end":return e.stop()}}),t,null,[[1,11,13,16]])})))()},onReady:function(){},onShow:function(){}}); 
     }); 	require("pages/question/question.js");
   __wxRoute = 'pages/user/user-login';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/user-login.js';	define("pages/user/user-login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/defineProperty"),r=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../api/file"),o=require("../../api/user"),i="https://file.hiyun.site/pxg-file/houjie/xcx/default-user-logo.png",s=require("../../utils/storage");Page({data:{userInfo:{avatar:i,nickname:"",realName:"",phone:"",dangOrgId:""},dangOrgName:"",type:"guest",from:"detail"},onChooseAvatar:function(e){var o=this;return r(t().mark((function r(){var i,s,u;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return wx.showLoading({title:"加载中"}),i=e.detail.avatarUrl,t.prev=2,t.next=5,(0,n.uploadToWx)(i);case 5:s=t.sent,u=s.data,console.log("fileUrl",u),o.setData(a({},"userInfo.avatar",u)),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(2);case 13:return t.prev=13,wx.hideLoading(),t.finish(13);case 16:case"end":return t.stop()}}),r,null,[[2,11,13,16]])})))()},handleNicknameInput:function(e){this.setData(a({},"userInfo.nickname",e.detail.value))},handleRealnameInput:function(e){this.setData(a({},"userInfo.realName",e.detail.value))},handlePhoneInput:function(e){this.setData(a({},"userInfo.phone",e.detail.value))},handleSelectOrg:function(){console.log("handleSelectOrg"),wx.navigateTo({url:"/pages/org/org-selector?key=orgTempSelect"})},handleDakaBtnClick:function(){var a=this;return r(t().mark((function r(){var n,u,l;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="",n="guest"==a.data.type?"G":"houjie"==a.data.type?"D":"O",(u=a.data.userInfo).avatar&&u.avatar!=i){t.next=6;break}return wx.showToast({title:"头像不能为空",icon:"error"}),t.abrupt("return");case 6:if("houjie"!=a.data.type&&"other"!=a.data.type){t.next=19;break}if(u.nickname){t.next=10;break}return wx.showToast({title:"昵称不能为空",icon:"error"}),t.abrupt("return");case 10:if(u.realName){t.next=13;break}return wx.showToast({title:"姓名不能为空",icon:"error"}),t.abrupt("return");case 13:if(u.phone){t.next=16;break}return wx.showToast({title:"电话不能为空",icon:"error"}),t.abrupt("return");case 16:if("houjie"!=a.data.type||u.dangOrgId){t.next=19;break}return wx.showToast({title:"所属党组织不能为空",icon:"error"}),t.abrupt("return");case 19:return wx.showLoading({title:"加载中..."}),t.prev=20,t.next=23,(0,o.updateUserInfo)(e(e({},u),{},{userType:n}));case 23:(l=t.sent).data&&s.set(s.USER_INFO_KEY,l.data),"user"==a.data.from?(wx.showToast({title:"修改成功",icon:"success"}),wx.switchTab({url:"/pages/user/info"})):wx.redirectTo({url:"/pages/question/question"}),t.next=30;break;case 28:t.prev=28,t.t0=t.catch(20);case 30:return t.prev=30,wx.hideLoading(),t.finish(30);case 33:case"end":return t.stop()}}),r,null,[[20,28,30,33]])})))()},onLoad:function(e){var n=this;return r(t().mark((function r(){var i,u,l,c,p;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("option",e),e.type&&("user"==e.from?wx.setNavigationBarTitle({title:"我的资料"}):("guest"==e.type&&wx.setNavigationBarTitle({title:"游客登录"}),"other"==e.type?wx.setNavigationBarTitle({title:"非淄博监管分局党员登录"}):wx.setNavigationBarTitle({title:"党员登录"})),n.setData({type:e.type,from:e.from||"detail"})),(i=s.get(s.WX_USER_INFO))&&n.setData((a(u={},"userInfo.nickname",i.nickName),a(u,"userInfo.avatar",i.avatarUrl),u)),!e.refresh){t.next=12;break}return t.next=7,(0,o.getUserInfo)();case 7:l=t.sent,c=l.data,n.setData({userInfo:c,dangOrgName:c.dangOrg}),t.next=14;break;case 12:(p=s.get(s.USER_INFO_KEY))&&n.setData({userInfo:p,dangOrgName:p.dangOrg});case 14:case"end":return t.stop()}}),r)})))()},onShow:function(){console.log("onShow");var e,t=s.get("orgTempSelect");(console.log("orgSelected",t),t)&&(this.setData((a(e={},"userInfo.dangOrgId",t.id),a(e,"dangOrgName",t.title),e)),s.remove("orgTempSelect"))},onShareAppMessage:function(){}}); 
     }); 	require("pages/user/user-login.js");
   __wxRoute = 'pages/org/org-selector';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/org/org-selector.js';	define("pages/org/org-selector.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../api/org"),e=[],a="orgTempSelect",o=require("../../utils/storage");Page({data:{showList:[],keyWord:"",step:1,noHoujie:{id:999,title:"本人党组织关系不属于淄博监管分局镇"}},onLoad:function(o){var i=this;o.key&&(a=o.key),(0,t.getOrgList)().then((function(t){console.log("res",t),(e=t.data).sort((function(t,e){return e.sort-t.sort})),i.setData({showList:e})}))},handleKeywordInput:function(t){var a=t.detail.value;console.log("allList",e),this.setData({keyWord:t.detail.value,showList:e.filter((function(t){return-1!==t.title.indexOf(a)}))})},handleItemClick:function(t){console.log(t.currentTarget.dataset.item),o.set(a,t.currentTarget.dataset.item),wx.navigateBack()},toStep2:function(){this.setData({step:2})}}); 
     }); 	require("pages/org/org-selector.js");
   __wxRoute = 'pages/question/question-result';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/question/question-result.js';	define("pages/question/question-result.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../api/area"),a=require("../../utils/storage");Page({data:{answerList:[{correct:"",error:""}],correctNum:0,score:0,correctRate:0,starLightWidth:0,areaId:-1,lineId:-1,areaCode:"",postInfo:{uuid:"",url:""},postShare:!1,postShareEntrance:!1},onLoad:function(e){if(console.log("option"),this.setData({areaId:e.areaId,lineId:e.lineId,areaCode:e.areaCode}),e.postshare)this.setData({postShareEntrance:!0,postInfo:{uuid:e.uuid+"",url:""},areaCode:e.code,postShare:!0});else{var t=a.get(a.QUESTION_RESULT);if(t){this.setData({answerList:t});for(var o=5,n=5,i=0,r=0;r<t.length;r++){t[r].error&&(o--,n--)}for(var d=[140,130,152,130,143],s=0;s<o;s++)i+=d[s];var c=parseInt(o/t.length*100+"");this.setData({correctNum:o,score:n,correctRate:c,starLightWidth:i})}else wx.redirectTo({url:"./question?areaId=".concat(this.data.areaId,"&lineId=").concat(this.data.lineId)})}},postImgLoaded:function(e){console.log("postInfo loaded",e.detail),this.setData({postInfo:e.detail})},closePostShare:function(){wx.redirectTo({url:"/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode,"&lineId=").concat(this.data.lineId)})},handleRetry:function(){wx.redirectTo({url:"./question?areaId=".concat(this.data.areaId,"&lineId=").concat(this.data.lineId,"&areaCode=").concat(this.data.areaCode)})},handleStop:function(){wx.redirectTo({url:"/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode,"&lineId=").concat(this.data.lineId,"&postcard=1")})},handleQuestionClick:function(e){console.log(e.currentTarget.dataset.index),wx.navigateTo({url:"./question?mode=result&nowIndex=".concat(e.currentTarget.dataset.index)})},onReady:function(){},onShareAppMessage:function(){return{title:"来跟我一起打卡吧！",path:"/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode,"&lineId=").concat(this.data.lineId)}},onShareTimeline_bak:function(){return console.log("打卡了222"),this.data.postInfo.uuid?((0,e.sharePostImg)(this.data.areaId,null).then((function(e){console.log("打卡了111"),wx.showModal({title:"恭喜您获得3个积分！",icon:"none"})})),{title:"我完成了阵地打卡！",query:"uuid=".concat(this.data.postInfo.uuid,"&postshare=1&code=").concat(this.data.areaCode,"&lineId=").concat(this.data.lineId)}):{title:"暂不支持分享！"}}}); 
     }); 	require("pages/question/question-result.js");
   __wxRoute = 'pages/user/medal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/medal.js';	define("pages/user/medal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../api/user");Page({data:{lightCount:0,medalList:[{name:"hscx",text:"红色初心践行者",light:!1,wear:!1,lightTime:null}]},handleMedalClick:function(e){console.log(e.currentTarget.dataset);var t=e.currentTarget.dataset.item;if(!t.light)return console.log("暂未点亮"),void wx.showToast({title:"暂未获得此勋章！",icon:"none"});wx.navigateTo({url:"./medal-detail?item="+encodeURIComponent(JSON.stringify(t))})},onLoad:function(){},_loadList:function(){var o=this;return t(e().mark((function t(){var a,i,r,l;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中..."}),e.next=3,(0,n.getUserMedal)();case 3:for(a=e.sent,i=a.data,console.log("medalList",i),r=0,l=0;l<i.length;l++)i[l].light&&r++;o.setData({lightCount:r,medalList:i}),wx.hideLoading();case 10:case"end":return e.stop()}}),t)})))()},onShow:function(){this._loadList()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/user/medal.js");
   __wxRoute = 'pages/user/medal-detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/user/medal-detail.js';	define("pages/user/medal-detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),a=require("../../@babel/runtime/helpers/objectSpread2"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),n=require("../../api/user");Page({data:{medalInfo:{name:"whhm",text:"文化惠民引领者",light:!0,wear:!0,lightTime:"2022-10-02 19:36:39"}},onLoad:function(e){e.item||(wx.showToast({title:"非法入口",icon:"error"}),wx.navigateBack());var a=JSON.parse(decodeURIComponent(e.item));a.lightTime=a.lightTime.split(" ")[0],this.setData({medalInfo:a})},updateUserMedalWear:function(){var r=this;return t(e().mark((function t(){var o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"操作中..."}),o=r.data.medalInfo.wear?"REMOVE":"WEAR",e.prev=2,e.next=5,(0,n.updateUserMedalWear)(o,r.data.medalInfo.name);case 5:wx.hideLoading(),r.setData({medalInfo:a(a({},r.data.medalInfo),{},{wear:!r.data.medalInfo.wear})}),wx.showToast({title:"操作成功",icon:"success"}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),t,null,[[2,10]])})))()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/user/medal-detail.js");
   __wxRoute = 'pages/game-rule/game-rule';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/game-rule/game-rule.js';	define("pages/game-rule/game-rule.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/game-rule/game-rule.js");
   __wxRoute = 'pages/bus/bus';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/bus/bus.js';	define("pages/bus/bus.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
     }); 	require("pages/bus/bus.js");
 