// Compiled by ClojureScript 1.8.34 {}
goog.provide('chart.core');
goog.require('cljs.core');
goog.require('chart.data');
goog.require('cljsjs.jquery');
goog.require('cljsjs.c3');
chart.core.generate_chart = (function chart$core$generate_chart(){
var el = document.getElementById("grafic");
var d = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.concat.call(null,cljs.core.interpose.call(null,"x",chart.data.countries),"x")),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x"], null),chart.data.years))], null),chart.data.pop_data_per_country))], null),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(2249),new cljs.core.Keyword(null,"width","width",-384071477),(4000)], null),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(70)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"rescale","rescale",-687376694),true], null)], null));
return c3.generate(d);
});
chart.core.main = (function chart$core$main(_AMPERSAND_args){
return chart.core.generate_chart.call(null);
});
goog.exportSymbol('chart.core.main', chart.core.main);

//# sourceMappingURL=core.js.map