goog.provide('com.wsscode.pathom.viz.query_editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.pathom.viz.codemirror');
goog.require('com.wsscode.pathom.viz.helpers');
goog.require('com.wsscode.pathom.viz.trace');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');

com.wsscode.pathom.viz.query_editor.remote_key = new cljs.core.Keyword(null,"pathom-query-editor-remote","pathom-query-editor-remote",-1506466221);
com.wsscode.pathom.viz.query_editor.safe_read = (function com$wsscode$pathom$viz$query_editor$safe_read(s){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}catch (e57429){var _ = e57429;
return null;
}});
com.wsscode.pathom.viz.query_editor.indexes = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","indexes","com.wsscode.pathom.viz.query-editor/indexes",-1925947531,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null)], null),(function com$wsscode$pathom$viz$query_editor$indexes(p__57430,_){
var map__57431 = p__57430;
var map__57431__$1 = (((((!((map__57431 == null))))?(((((map__57431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57431):map__57431);
var client_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57431__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659));
var G__57433 = cljs.core.PersistentArrayMap.EMPTY;
var G__57434 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401)], null)], null)], null);
return (client_parser.cljs$core$IFn$_invoke$arity$2 ? client_parser.cljs$core$IFn$_invoke$arity$2(G__57433,G__57434) : client_parser.call(null,G__57433,G__57434));
}));
com.wsscode.pathom.viz.query_editor.run_query = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798)], null)], null),(function com$wsscode$pathom$viz$query_editor$run_query(p__57436,p__57437){
var map__57438 = p__57436;
var map__57438__$1 = (((((!((map__57438 == null))))?(((((map__57438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57438):map__57438);
var client_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57438__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659));
var map__57439 = p__57437;
var map__57439__$1 = (((((!((map__57439 == null))))?(((((map__57439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57439):map__57439);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57439__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57439__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347));
var request_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57439__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__57438,map__57438__$1,client_parser,map__57439,map__57439__$1,id,query,request_trace_QMARK_){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__57438,map__57438__$1,client_parser,map__57439,map__57439__$1,id,query,request_trace_QMARK_){
return (function (state_57470){
var state_val_57471 = (state_57470[(1)]);
if((state_val_57471 === (1))){
var inst_57447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57448 = [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)];
var inst_57449 = (new cljs.core.PersistentVector(null,1,(5),inst_57447,inst_57448,null));
var inst_57451 = com.wsscode.pathom.viz.query_editor.safe_read(query);
var state_57470__$1 = (function (){var statearr_57473 = state_57470;
(statearr_57473[(7)] = inst_57449);

(statearr_57473[(8)] = inst_57451);

return statearr_57473;
})();
if(cljs.core.truth_(request_trace_QMARK_)){
var statearr_57474_57565 = state_57470__$1;
(statearr_57474_57565[(1)] = (2));

} else {
var statearr_57475_57566 = state_57470__$1;
(statearr_57475_57566[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57471 === (2))){
var inst_57451 = (state_57470[(8)]);
var inst_57453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_57451,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
var state_57470__$1 = state_57470;
var statearr_57476_57567 = state_57470__$1;
(statearr_57476_57567[(2)] = inst_57453);

(statearr_57476_57567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57471 === (3))){
var inst_57451 = (state_57470[(8)]);
var state_57470__$1 = state_57470;
var statearr_57477_57568 = state_57470__$1;
(statearr_57477_57568[(2)] = inst_57451);

(statearr_57477_57568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57471 === (4))){
var inst_57456 = (state_57470[(2)]);
var inst_57457 = cljs.core.PersistentHashMap.EMPTY;
var inst_57458 = (client_parser.cljs$core$IFn$_invoke$arity$2 ? client_parser.cljs$core$IFn$_invoke$arity$2(inst_57457,inst_57456) : client_parser.call(null,inst_57457,inst_57456));
var state_57470__$1 = state_57470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57470__$1,(5),inst_57458);
} else {
if((state_val_57471 === (5))){
var inst_57449 = (state_57470[(7)]);
var inst_57460 = (state_57470[(2)]);
var inst_57461 = [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)];
var inst_57462 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,inst_57460,inst_57449);
var inst_57463 = com.wsscode.pathom.viz.helpers.pprint(inst_57462);
var inst_57464 = [id,inst_57463,null];
var inst_57465 = cljs.core.PersistentHashMap.fromArrays(inst_57461,inst_57464);
var inst_57466 = cljs.core.select_keys(inst_57460,inst_57449);
var inst_57467 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57465,inst_57466], 0));
var state_57470__$1 = state_57470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57470__$1,inst_57467);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,map__57438,map__57438__$1,client_parser,map__57439,map__57439__$1,id,query,request_trace_QMARK_))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__57438,map__57438__$1,client_parser,map__57439,map__57439__$1,id,query,request_trace_QMARK_){
return (function() {
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto____0 = (function (){
var statearr_57478 = [null,null,null,null,null,null,null,null,null];
(statearr_57478[(0)] = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto__);

(statearr_57478[(1)] = (1));

return statearr_57478;
});
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto____1 = (function (state_57470){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_57470);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e57479){if((e57479 instanceof Object)){
var ex__38790__auto__ = e57479;
var statearr_57480_57572 = state_57470;
(statearr_57480_57572[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57573 = state_57470;
state_57470 = G__57573;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto__ = function(state_57470){
switch(arguments.length){
case 0:
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto____1.call(this,state_57470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto____0;
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto____1;
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__57438,map__57438__$1,client_parser,map__57439,map__57439__$1,id,query,request_trace_QMARK_))
})();
var state__39086__auto__ = (function (){var statearr_57481 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_57481[(6)] = c__39084__auto__);

return statearr_57481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__57438,map__57438__$1,client_parser,map__57439,map__57439__$1,id,query,request_trace_QMARK_))
);

return c__39084__auto__;
}));
/**
 * Returns a new parser that will use the card-parser setting the client
 *   parser to be `client-parser`.
 */
com.wsscode.pathom.viz.query_editor.client_card_parser = (function com$wsscode$pathom$viz$query_editor$client_card_parser(var_args){
var G__57483 = arguments.length;
switch (G__57483) {
case 1:
return com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$1 = (function (client_parser){
return com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2(client_parser,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2 = (function (client_parser,p__57484){
var map__57485 = p__57484;
var map__57485__$1 = (((((!((map__57485 == null))))?(((((map__57485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57485):map__57485);
var wrap_run_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57485__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","wrap-run-query","com.wsscode.pathom.viz.query-editor/wrap-run-query",1107576422));
var card_parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.request_cache_plugin,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.indexes,(function (){var G__57487 = com.wsscode.pathom.viz.query_editor.run_query;
if(cljs.core.truth_(wrap_run_query)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__57487,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),wrap_run_query);
} else {
return G__57487;
}
})()], null)], null)),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),com.wsscode.pathom.core.trace_plugin], null)], null));
return ((function (card_parser,map__57485,map__57485__$1,wrap_run_query){
return (function (env,tx){
var G__57488 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659),client_parser);
var G__57489 = tx;
return (card_parser.cljs$core$IFn$_invoke$arity$2 ? card_parser.cljs$core$IFn$_invoke$arity$2(G__57488,G__57489) : card_parser.call(null,G__57488,G__57489));
});
;})(card_parser,map__57485,map__57485__$1,wrap_run_query))
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$lang$maxFixedArity = 2;

fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__57490 = fulcro_incoming_env;
var map__57490__$1 = (((((!((map__57490 == null))))?(((((map__57490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57490):map__57490);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57490__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57490__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pathom-query-editor-remote","pathom-query-editor-remote",-1506466221),fulcro.client.mutations.returning(ast,state,com.wsscode.pathom.viz.query_editor.TransactionResponse)], null);
})()], 0));
}));
com.wsscode.pathom.viz.query_editor.load_indexes = (function com$wsscode$pathom$viz$query_editor$load_indexes(app_or_reconciler){
var reconciler = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_or_reconciler);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return app_or_reconciler;
}
})();
var root_ident = new cljs.core.Keyword("ui","root","ui/root",-448656785).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,root_ident,com.wsscode.pathom.viz.query_editor.QueryEditor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.viz.query_editor.remote_key], null));
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.TransactionResponse !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.TransactionResponse = (function com$wsscode$pathom$viz$query_editor$TransactionResponse(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57494_57580 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
var G__57495_57581 = React.Component.prototype;
var G__57496_57582 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57494_57580,G__57495_57581,G__57496_57582);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","TransactionResponse","com.wsscode.pathom.viz.query-editor/TransactionResponse",-1437901883),com.wsscode.pathom.viz.query_editor.TransactionResponse);

var x57497_57583 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
x57497_57583.render = ((function (x57497_57583){
return (function (){
var this__42008__auto__ = this;
var _ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57498 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57499 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57500 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57501 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57502 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57503 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57504 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57505 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57506 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57507 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57503;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57504;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57505;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57506;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57507;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57502;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57501;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57500;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57499;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57498;
}});})(x57497_57583))
;


com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.constructor = com.wsscode.pathom.viz.query_editor.TransactionResponse;

com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/TransactionResponse";

com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.fulcro$isComponent = true;

var x57508_57584 = com.wsscode.pathom.viz.query_editor.TransactionResponse;
x57508_57584.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57508_57584.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57508_57584){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57508_57584))
;

x57508_57584.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57508_57584.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57508_57584){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x57508_57584))
;


var x57509_57585 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
x57509_57585.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57509_57585.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57509_57585){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57509_57585))
;

x57509_57585.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57509_57585.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57509_57585){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x57509_57585))
;


com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/TransactionResponse";

com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.query-editor/TransactionResponse");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.Button !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.Button = (function com$wsscode$pathom$viz$query_editor$Button(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57512_57602 = com.wsscode.pathom.viz.query_editor.Button.prototype;
var G__57513_57603 = React.Component.prototype;
var G__57514_57604 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57512_57602,G__57513_57603,G__57514_57604);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","Button","com.wsscode.pathom.viz.query-editor/Button",1064206500),com.wsscode.pathom.viz.query_editor.Button);

var x57515_57605 = com.wsscode.pathom.viz.query_editor.Button.prototype;
x57515_57605.render = ((function (x57515_57605){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57516 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57517 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57518 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57519 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57520 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57521 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57522 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57523 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57524 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57525 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57521;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57522;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57523;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57524;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57525;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),props,fulcro.client.primitives.children(this$)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57520;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57519;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57518;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57517;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57516;
}});})(x57515_57605))
;


com.wsscode.pathom.viz.query_editor.Button.prototype.constructor = com.wsscode.pathom.viz.query_editor.Button;

com.wsscode.pathom.viz.query_editor.Button.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/Button";

com.wsscode.pathom.viz.query_editor.Button.prototype.fulcro$isComponent = true;

var x57526_57609 = com.wsscode.pathom.viz.query_editor.Button;
x57526_57609.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57526_57609.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57526_57609){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5","#fff","center","middle","nowrap","#4b5b6d","pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b0c1d6",new cljs.core.Keyword(null,"color","color",1011675173),"#eaeaea"], null)], null)], null)], null);
});})(x57526_57609))
;

x57526_57609.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57526_57609){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57526_57609))
;


var x57527_57617 = com.wsscode.pathom.viz.query_editor.Button.prototype;
x57527_57617.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57527_57617.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57527_57617){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5","#fff","center","middle","nowrap","#4b5b6d","pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b0c1d6",new cljs.core.Keyword(null,"color","color",1011675173),"#eaeaea"], null)], null)], null)], null);
});})(x57527_57617))
;

x57527_57617.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57527_57617){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x57527_57617))
;


com.wsscode.pathom.viz.query_editor.Button.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.Button.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/Button";

com.wsscode.pathom.viz.query_editor.Button.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.query-editor/Button");
});
com.wsscode.pathom.viz.query_editor.button = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.Button);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.QueryEditor !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.QueryEditor = (function com$wsscode$pathom$viz$query_editor$QueryEditor(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__57533_57638 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
var G__57534_57639 = React.Component.prototype;
var G__57535_57640 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__57533_57638,G__57534_57639,G__57535_57640);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","QueryEditor","com.wsscode.pathom.viz.query-editor/QueryEditor",-147278935),com.wsscode.pathom.viz.query_editor.QueryEditor);

var x57536_57642 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
x57536_57642.render = ((function (x57536_57642){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__57537 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__57538 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__57539 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__57540 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__57541 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__57542 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__57543 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__57544 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__57545 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__57546 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__57542;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__57543;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__57544;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__57545;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__57546;

try{var map__57547 = fulcro.client.primitives.props(this$);
var map__57547__$1 = (((((!((map__57547 == null))))?(((((map__57547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57547):map__57547);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798));
var request_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
var query_running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var map__57548 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__57548__$1 = (((((!((map__57548 == null))))?(((((map__57548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57548):map__57548);
var default_trace_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57548__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","default-trace-size","com.wsscode.pathom.viz.query-editor/default-trace-size",1888578783),(400));
var editor_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57548__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","editor-props","com.wsscode.pathom.viz.query-editor/editor-props",-223318753));
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.query_editor.QueryEditor);
var run_query = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"run-query","run-query",-1834614852));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),request_trace_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
});})(run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642))
], null)], 0)),"Request trace"], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__57551 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642){
return (function (){
return com.wsscode.pathom.viz.query_editor.load_indexes(fulcro.client.primitives.get_reconciler(this$));
});})(run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"6px"], null)], null);
var G__57552 = "Refresh index";
return (com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2(G__57551,G__57552) : com.wsscode.pathom.viz.query_editor.button.call(null,G__57551,G__57552));
})(),(function (){var G__57553 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),run_query,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),query_running_QMARK_], null);
var G__57554 = "Run query";
return (com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2(G__57553,G__57554) : com.wsscode.pathom.viz.query_editor.button.call(null,G__57553,G__57554));
})()], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".query-row",".query-row",-936435707),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?com.wsscode.pathom.viz.codemirror.pathom(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"query-width","query-width",1236835238));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (400);
}
})()),"px"].join('')], null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),((cljs.core.map_QMARK_(indexes))?com.wsscode.pathom.core.elide_not_found(indexes):null),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),new cljs.core.PersistentArrayMap(null, 5, ["Cmd-Enter",run_query,"Ctrl-Enter",run_query,"Shift-Enter",run_query,"Cmd-J","pathomJoin","Ctrl-Space","autocomplete"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642){
return (function (p1__57528_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),p1__57528_SHARP_);
});})(run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642))
], null),editor_props], 0))):null),com.wsscode.pathom.viz.helpers.drag_resize(this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"query-width","query-width",1236835238),new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"default","default",-1987822328),(400),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"divisor-v","divisor-v",-1483808443).cljs$core$IFn$_invoke$arity$1(css)], null)], null),fulcro.client.localized_dom.div()),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?com.wsscode.pathom.viz.codemirror.clojure(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"value","value",305978217),result,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","readOnly","com.wsscode.pathom.viz.codemirror/readOnly",-9416564),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true], null)], null),editor_props], 0))):null)], 0)),(cljs.core.truth_(trace)?com.wsscode.pathom.viz.helpers.drag_resize(this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"trace-height","trace-height",-1848631945),new cljs.core.Keyword(null,"default","default",-1987822328),default_trace_size,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"divisor-h","divisor-h",965004412).cljs$core$IFn$_invoke$arity$1(css)], null)], null),fulcro.client.localized_dom.div()):null),(cljs.core.truth_(trace)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"trace-height","trace-height",-1848631945));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_trace_size;
}
})()),"px"].join('')], null)], null),(function (){var G__57555 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.trace","trace-data","com.wsscode.pathom.viz.trace/trace-data",-1057203590),trace,new cljs.core.Keyword("com.wsscode.pathom.viz.trace","on-show-details","com.wsscode.pathom.viz.trace/on-show-details",-1635963710),((function (run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642){
return (function (p1__57529_SHARP_){
return console.log(p1__57529_SHARP_);
});})(run_query,map__57547,map__57547__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__57548,map__57548__$1,default_trace_size,editor_props,css,_STAR_reconciler_STAR__orig_val__57537,_STAR_depth_STAR__orig_val__57538,_STAR_shared_STAR__orig_val__57539,_STAR_instrument_STAR__orig_val__57540,_STAR_parent_STAR__orig_val__57541,_STAR_reconciler_STAR__temp_val__57542,_STAR_depth_STAR__temp_val__57543,_STAR_shared_STAR__temp_val__57544,_STAR_instrument_STAR__temp_val__57545,_STAR_parent_STAR__temp_val__57546,this$,this__42008__auto__,x57536_57642))
], null);
return (com.wsscode.pathom.viz.trace.d3_trace.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.trace.d3_trace.cljs$core$IFn$_invoke$arity$1(G__57555) : com.wsscode.pathom.viz.trace.d3_trace.call(null,G__57555));
})()], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__57541;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__57540;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__57539;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__57538;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__57537;
}});})(x57536_57642))
;

x57536_57642.componentDidMount = ((function (x57536_57642){
return (function (){
var this__41992__auto__ = this;
var this$ = this__41992__auto__;
var reconciler__41993__auto__ = fulcro.client.primitives.get_reconciler(this__41992__auto__);
var lifecycle__41994__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__41993__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__41995__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__41993__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__41992__auto__,"fulcro$mounted",true);

if((indexer__41995__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__41995__auto__,this__41992__auto__);
}

if(cljs.core.truth_(lifecycle__41994__auto__)){
var G__57556_57709 = this__41992__auto__;
var G__57557_57710 = new cljs.core.Keyword(null,"mount","mount",-1560582470);
(lifecycle__41994__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__41994__auto__.cljs$core$IFn$_invoke$arity$2(G__57556_57709,G__57557_57710) : lifecycle__41994__auto__.call(null,G__57556_57709,G__57557_57710));
} else {
}

return setTimeout(((function (this$,reconciler__41993__auto__,lifecycle__41994__auto__,indexer__41995__auto__,this__41992__auto__,x57536_57642){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render?","render?",-1838581524),true], null));
});})(this$,reconciler__41993__auto__,lifecycle__41994__auto__,indexer__41995__auto__,this__41992__auto__,x57536_57642))
,(100));
});})(x57536_57642))
;

x57536_57642.initLocalState = ((function (x57536_57642){
return (function (){
var this$ = this;
var ret__41983__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-query","run-query",-1834614852),((function (this$,x57536_57642){
return (function (){
var map__57558 = fulcro.client.primitives.props(this$);
var map__57558__$1 = (((((!((map__57558 == null))))?(((((map__57558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57558):map__57558);
var props = map__57558__$1;
var query_running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57558__$1,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539));
if(cljs.core.not(query_running_QMARK_)){
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),null,(1),null)),(new cljs.core.List(null,props,null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
} else {
return null;
}
});})(this$,x57536_57642))
], null);
var obj57561 = ({"fulcro$state":ret__41983__auto__});
return obj57561;
});})(x57536_57642))
;


com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.constructor = com.wsscode.pathom.viz.query_editor.QueryEditor;

com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/QueryEditor";

com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.fulcro$isComponent = true;

var x57562_57718 = com.wsscode.pathom.viz.query_editor.QueryEditor;
x57562_57718.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57562_57718.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57562_57718){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100% !important",new cljs.core.Keyword(null,"width","width",-384071477),"100% !important",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute !important",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-ident","$cm-atom-ident",-1918959628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#219",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror-hint","$CodeMirror-hint",673243748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query-row",".query-row",-936435707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#eeeeee",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-h",".divisor-h",-75539445),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"0",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"18px"], null)], null)], null);
});})(x57562_57718))
;

x57562_57718.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57562_57718){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.trace.D3Trace,com.wsscode.pathom.viz.query_editor.Button], null);
});})(x57562_57718))
;

x57562_57718.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x57562_57718.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x57562_57718){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),true,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),"[]",new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),""], null);
});})(x57562_57718))
;

x57562_57718.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57562_57718.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57562_57718){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57562_57718))
;

x57562_57718.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57562_57718.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57562_57718){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x57562_57718))
;


var x57563_57724 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
x57563_57724.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x57563_57724.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x57563_57724){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100% !important",new cljs.core.Keyword(null,"width","width",-384071477),"100% !important",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute !important",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-ident","$cm-atom-ident",-1918959628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#219",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror-hint","$CodeMirror-hint",673243748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query-row",".query-row",-936435707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#eeeeee",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-h",".divisor-h",-75539445),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"0",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"18px"], null)], null)], null);
});})(x57563_57724))
;

x57563_57724.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x57563_57724){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.trace.D3Trace,com.wsscode.pathom.viz.query_editor.Button], null);
});})(x57563_57724))
;

x57563_57724.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x57563_57724.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x57563_57724){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),true,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),"[]",new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),""], null);
});})(x57563_57724))
;

x57563_57724.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x57563_57724.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x57563_57724){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x57563_57724))
;

x57563_57724.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x57563_57724.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x57563_57724){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x57563_57724))
;


com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/QueryEditor";

com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.viz.query-editor/QueryEditor");
});
com.wsscode.pathom.viz.query_editor.query_editor = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor);

//# sourceMappingURL=com.wsscode.pathom.viz.query_editor.js.map
