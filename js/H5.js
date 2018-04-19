(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"H5_atlas_P_", frames: [[0,0,750,1010]]},
		{name:"H5_atlas_P_2", frames: [[0,0,745,933]]},
		{name:"H5_atlas_P_3", frames: [[0,0,750,894]]},
		{name:"H5_atlas_P_4", frames: [[0,0,750,704]]},
		{name:"H5_atlas_P_5", frames: [[0,0,517,1004]]},
		{name:"H5_atlas_P_6", frames: [[0,0,728,600]]},
		{name:"H5_atlas_P_7", frames: [[0,0,440,974],[442,0,562,756]]},
		{name:"H5_atlas_P_8", frames: [[535,0,368,937],[0,0,533,745]]},
		{name:"H5_atlas_P_9", frames: [[384,0,351,862],[0,0,382,801]]},
		{name:"H5_atlas_P_10", frames: [[330,0,279,909],[611,0,314,698],[0,0,328,810]]},
		{name:"H5_atlas_P_11", frames: [[0,0,272,722],[698,0,301,589],[274,0,422,424],[274,591,673,255]]},
		{name:"H5_atlas_P_12", frames: [[455,319,453,338],[0,0,453,361],[0,363,226,619],[228,659,452,278],[455,0,493,317]]},
		{name:"H5_atlas_P_13", frames: [[0,0,353,332],[677,0,171,619],[355,0,287,387],[0,389,675,161],[0,552,452,239]]},
		{name:"H5_atlas_P_14", frames: [[346,543,241,346],[589,543,233,348],[824,352,195,290],[179,203,165,579],[0,784,183,238],[179,0,481,201],[824,644,182,283],[0,0,177,558],[346,203,641,147],[346,352,452,189]]},
		{name:"H5_atlas_P_15", frames: [[145,291,158,227],[642,555,194,140],[445,819,159,164],[159,93,193,196],[0,0,157,272],[0,274,143,288],[859,291,94,241],[159,0,434,91],[0,564,159,215],[606,885,370,64],[161,555,479,64],[161,753,443,64],[161,621,479,64],[354,225,552,64],[305,489,516,64],[161,687,479,64],[354,93,589,64],[305,291,552,64],[354,159,589,64],[305,357,552,64],[595,0,406,64],[0,819,443,64],[606,753,406,64],[0,885,443,64],[0,951,443,64],[305,423,552,64],[606,819,406,64],[606,951,370,64]]},
		{name:"H5_atlas_P_16", frames: [[959,684,60,60],[576,612,93,91],[867,684,55,83],[975,31,23,24],[733,693,65,55],[268,482,129,99],[217,649,107,50],[90,482,176,76],[0,323,231,75],[233,330,230,74],[465,334,230,74],[116,626,99,66],[507,410,137,99],[887,251,112,81],[908,601,112,81],[825,387,145,106],[821,132,162,117],[226,406,189,74],[0,466,88,153],[0,692,69,52],[908,495,110,104],[475,666,84,59],[417,410,88,156],[507,511,67,153],[975,0,30,29],[733,612,82,79],[670,132,149,134],[825,495,81,147],[924,684,33,131],[671,612,60,122],[817,644,48,115],[326,649,43,114],[399,568,74,126],[1007,0,9,75],[749,0,224,64],[0,400,224,64],[1018,0,3,14],[1019,16,5,5],[697,334,320,51],[0,198,365,57],[0,0,412,52],[576,563,212,47],[598,268,287,64],[0,626,114,64],[414,0,333,64],[0,54,333,64],[90,560,150,64],[367,198,297,64],[242,583,150,64],[0,257,297,64],[335,66,333,64],[670,66,333,64],[0,120,333,64],[335,132,333,64],[299,264,297,64],[576,514,213,47],[697,387,126,125]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._19 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1500);


(lib._10 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._111 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._112 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._15 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._16 = function() {
	this.spriteSheet = ss["H5_atlas_P_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._17 = function() {
	this.spriteSheet = ss["H5_atlas_P_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._18 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._19_1 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._20 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.initialize(img._22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib._23 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._24 = function() {
	this.spriteSheet = ss["H5_atlas_P_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._25 = function() {
	this.spriteSheet = ss["H5_atlas_P_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._26 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._27 = function() {
	this.spriteSheet = ss["H5_atlas_P_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._28 = function() {
	this.spriteSheet = ss["H5_atlas_P_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._3png复制 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._30 = function() {
	this.spriteSheet = ss["H5_atlas_P_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._31 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._32 = function() {
	this.spriteSheet = ss["H5_atlas_P_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,88);


(lib._4_1 = function() {
	this.spriteSheet = ss["H5_atlas_P_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._40 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._41 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._42 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._43 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._44 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._45 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib._46 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib._47 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib._48 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._50 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib._51 = function() {
	this.spriteSheet = ss["H5_atlas_P_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._52 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._53 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._54 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._55 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._56 = function() {
	this.spriteSheet = ss["H5_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._57 = function() {
	this.spriteSheet = ss["H5_atlas_P_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._58 = function() {
	this.spriteSheet = ss["H5_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._59 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib._60 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib._63 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib._64 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib._66 = function() {
	this.spriteSheet = ss["H5_atlas_P_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._67 = function() {
	this.spriteSheet = ss["H5_atlas_P_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._68 = function() {
	this.spriteSheet = ss["H5_atlas_P_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._69 = function() {
	this.initialize(img._69);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,488,1064);


(lib._7 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib._70 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib._71 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib._72 = function() {
	this.spriteSheet = ss["H5_atlas_P_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._73 = function() {
	this.spriteSheet = ss["H5_atlas_P_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._75 = function() {
	this.initialize(img._75);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,1178);


(lib._76 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib._77 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib._78 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.男主 = function() {
	this.spriteSheet = ss["H5_atlas_P_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib._80 = function() {
	this.spriteSheet = ss["H5_atlas_P_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._81 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib._82 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib._83 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib._84 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib._85 = function() {
	this.spriteSheet = ss["H5_atlas_P_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._86 = function() {
	this.spriteSheet = ss["H5_atlas_P_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._87 = function() {
	this.spriteSheet = ss["H5_atlas_P_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._88 = function() {
	this.initialize(img._88);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib._89 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib._90 = function() {
	this.spriteSheet = ss["H5_atlas_P_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._91 = function() {
	this.spriteSheet = ss["H5_atlas_P_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._92 = function() {
	this.spriteSheet = ss["H5_atlas_P_13"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._93 = function() {
	this.spriteSheet = ss["H5_atlas_P_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._94 = function() {
	this.spriteSheet = ss["H5_atlas_P_14"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._95 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._96 = function() {
	this.spriteSheet = ss["H5_atlas_P_12"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap100 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap101 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap102 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap103 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap69 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap71 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap73 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap75 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap76 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap77 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap78 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap79 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap80 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap81 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap82 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap83 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap84 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap85 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap89 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap90 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap91 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap92 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap93 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap94 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap96 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap97 = function() {
	this.spriteSheet = ss["H5_atlas_P_15"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap98 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap99 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.guang = function() {
	this.spriteSheet = ss["H5_atlas_P_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.loading = function() {
	this.initialize(img.loading);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.P1 = function() {
	this.initialize(img.P1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1250);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.P10 = function() {
	this.initialize(img.P10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p11 = function() {
	this.initialize(img.p11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,794,1250);


(lib.p12 = function() {
	this.initialize(img.p12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p13 = function() {
	this.initialize(img.p13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p201 = function() {
	this.initialize(img.p201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1250);


(lib.p2_1 = function() {
	this.initialize(img.p2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p41 = function() {
	this.initialize(img.p41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p7 = function() {
	this.initialize(img.p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.p8 = function() {
	this.initialize(img.p8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.P9 = function() {
	this.initialize(img.P9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.独一无二laoding页 = function() {
	this.spriteSheet = ss["H5_atlas_P_16"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.on('click', function () {
			root.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhJwBvmMAAAjfLMCThAAAMAAADfLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-472.1,-714.1,944.3,1428.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.on('click', function () {
			root.gotoAndStop('menu')
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.008)").s().p("EhKKBqGMAAAjULMCUVAAAMAAADULg");
	this.shape.setTransform(474.7,679);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,949.4,1358), null);


(lib.补间1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._19();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.补间20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap63();
	this.instance.parent = this;
	this.instance.setTransform(-146,-22.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-22.8,292,45.6);


(lib.补间19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap76();
	this.instance.parent = this;
	this.instance.setTransform(-107,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107,-24,212,47);


(lib.补间18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap64();
	this.instance.parent = this;
	this.instance.setTransform(-164.8,-20.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.8,-20.8,329.6,41.6);


(lib.补间17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap77();
	this.instance.parent = this;
	this.instance.setTransform(-195,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-13,406,64);


(lib.补间15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap78();
	this.instance.parent = this;
	this.instance.setTransform(-136,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,1,287,64);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._91();
	this.instance.parent = this;
	this.instance.setTransform(-337.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.5,-80.5,675,161);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._91();
	this.instance.parent = this;
	this.instance.setTransform(-337.5,-80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.5,-80.5,675,161);


(lib.补间10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._87();
	this.instance.parent = this;
	this.instance.setTransform(-550.9,-553.5,2.611,2.611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.9,-553.5,1101.9,1107.2);


(lib.补间9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._87();
	this.instance.parent = this;
	this.instance.setTransform(-550.9,-553.5,2.611,2.611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.9,-553.5,1101.9,1107.2);


(lib.补间8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._73();
	this.instance.parent = this;
	this.instance.setTransform(-364,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-300,728,600);


(lib.补间7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._73();
	this.instance.parent = this;
	this.instance.setTransform(-364,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-300,728,600);


(lib.补间5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._59();
	this.instance.parent = this;
	this.instance.setTransform(-160,-504.6,1.809,1.809);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-504.6,320.1,1009.2);


(lib.元件229 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件229, new cjs.Rectangle(0,0,406,64), null);


(lib.元件228 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap89();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件228, new cjs.Rectangle(0,0,552,64), null);


(lib.元件227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap88();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件227, new cjs.Rectangle(0,0,443,64), null);


(lib.元件226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap87();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件226, new cjs.Rectangle(0,0,150,64), null);


(lib.元件225 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件225, new cjs.Rectangle(0,0,150,64), null);


(lib.元件224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap83();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件224, new cjs.Rectangle(0,0,406,64), null);


(lib.元件223 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap85();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件223, new cjs.Rectangle(0,0,297,64), null);


(lib.元件222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap86();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件222, new cjs.Rectangle(0,0,443,64), null);


(lib.元件221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap82();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件221, new cjs.Rectangle(0,0,443,64), null);


(lib.元件220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件220, new cjs.Rectangle(0,0,333,64), null);


(lib.元件219 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件219, new cjs.Rectangle(0,0,333,64), null);


(lib.元件217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.guang();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,704);


(lib.元件215 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p3();
	this.instance.parent = this;
	this.instance.setTransform(1,2);

	this.instance_1 = new lib.p2_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.p1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewY:0,x:1}}]}).to({state:[{t:this.instance_1,p:{skewY:0,x:0}}]},4).to({state:[{t:this.instance_2,p:{skewY:0,x:0}}]},4).to({state:[{t:this.instance,p:{skewY:180,x:750}}]},4).to({state:[{t:this.instance_1,p:{skewY:180,x:751}}]},4).to({state:[{t:this.instance_2,p:{skewY:180,x:751}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,2,750,1250);


(lib.元件214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.独一无二laoding页();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126,125);


(lib.元件212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap94();
	this.instance.parent = this;
	this.instance.setTransform(70,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,51,333,64);


(lib.元件211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap93();
	this.instance.parent = this;
	this.instance.setTransform(70,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70,23,333,64);


(lib.元件210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap92();
	this.instance.parent = this;
	this.instance.setTransform(72,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(72,7,333,64);


(lib.元件209 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap91();
	this.instance.parent = this;
	this.instance.setTransform(88,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88,-15,297,64);


(lib.元件200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap79();
	this.instance.parent = this;
	this.instance.setTransform(76,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76,-35,114,64);


(lib.元件199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap72();
	this.instance.parent = this;
	this.instance.setTransform(-21,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-10,589,64);


(lib.元件198 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.Bitmap69();
	this.instance.parent = this;
	this.instance.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,0,552,64);


(lib.元件197 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap103();
	this.instance.parent = this;
	this.instance.setTransform(-5,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件197, new cjs.Rectangle(-5,-9,479,64), null);


(lib.元件196 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap102();
	this.instance.parent = this;
	this.instance.setTransform(42,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件196, new cjs.Rectangle(42,-16,370,64), null);


(lib.元件195 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap101();
	this.instance.parent = this;
	this.instance.setTransform(118,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件195, new cjs.Rectangle(118,-19,224,64), null);


(lib.元件194 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap100();
	this.instance.parent = this;
	this.instance.setTransform(118,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件194, new cjs.Rectangle(118,-14,224,64), null);


(lib.元件193 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap99();
	this.instance.parent = this;
	this.instance.setTransform(125,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件193, new cjs.Rectangle(125,-19,213,47), null);


(lib.元件192 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap98();
	this.instance.parent = this;
	this.instance.setTransform(84,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件192, new cjs.Rectangle(84,-22,297,64), null);


(lib.元件191 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap97();
	this.instance.parent = this;
	this.instance.setTransform(55,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件191, new cjs.Rectangle(55,-24,370,64), null);


(lib.元件190 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap96();
	this.instance.parent = this;
	this.instance.setTransform(73,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件190, new cjs.Rectangle(73,-28,333,64), null);


(lib.元件188 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._111();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件188, new cjs.Rectangle(0,0,58.8,57.5), null);


(lib.元件184 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.P9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件184, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap75();
	this.instance.parent = this;
	this.instance.setTransform(-49,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件181, new cjs.Rectangle(-49,-9,552,64), null);


(lib.元件180 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap74();
	this.instance.parent = this;
	this.instance.setTransform(-48,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件180, new cjs.Rectangle(-48,0,589,64), null);


(lib.元件179 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap73();
	this.instance.parent = this;
	this.instance.setTransform(-177,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件179, new cjs.Rectangle(-177,0,552,64), null);


(lib.元件177 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._96();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,493,317);


(lib.元件175 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._95();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159,215);


(lib.元件172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#16003B").s().p("Eg6lBhqMAAAjDTMB1LAAAMAAADDTg");
	this.shape.setTransform(375,625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._94();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,189);


(lib.元件167 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._92();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,239);


(lib.元件166 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._93();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,278);


(lib.元件165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._90();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,673,255);


(lib.元件160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._89();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434,91);


(lib.元件157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._88();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._86();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.6,367.6);


(lib.元件153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._85();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226,619);


(lib.元件152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._81();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,131);


(lib.元件151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._82();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,122);


(lib.元件150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._80();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,619);


(lib.元件149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._83();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48,115);


(lib.元件148 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._84();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,114);


(lib.元件144 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,1250);


(lib.元件142 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6lBhqMAAAjDTMB1LAAAMAAADDTg");
	this.shape.setTransform(375,625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件141 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._77();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,134);


(lib.元件140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._78();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,641,147);


(lib.元件137 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._76();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,79);


(lib.元件135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._75();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,654,1178);


(lib.元件134 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.男主();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,562,756);


(lib.元件131 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._63();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件131, new cjs.Rectangle(0,0,110,104), null);


(lib.元件129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._64();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件129, new cjs.Rectangle(0,0,84,59), null);


(lib.元件128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._66();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件128, new cjs.Rectangle(0,0,272,722), null);


(lib.元件127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._67();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件127, new cjs.Rectangle(0,0,382,801), null);


(lib.元件126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._68();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件126, new cjs.Rectangle(0,0,533,745), null);


(lib.元件124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._69();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件124, new cjs.Rectangle(0,0,488,1064), null);


(lib.元件121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._70();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件121, new cjs.Rectangle(0,0,67,153), null);


(lib.元件114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._60();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件114, new cjs.Rectangle(0,0,69,52), null);


(lib.元件112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4081E7").s().p("AiiBTIAnjWIEdAuIgfDZg");
	this.shape.setTransform(16.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件112, new cjs.Rectangle(0,0,32.5,26.4), null);


(lib.元件107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件107, new cjs.Rectangle(0,0,143,288), null);


(lib.元件105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._53();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件105, new cjs.Rectangle(0,0,157,272), null);


(lib.元件103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._55();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件103, new cjs.Rectangle(0,0,94,241), null);


(lib.元件102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._52();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件102, new cjs.Rectangle(0,0,182,283), null);


(lib.元件99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._50();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件99, new cjs.Rectangle(0,0,189,74), null);


(lib.元件97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._57();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.427,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件97, new cjs.Rectangle(0,0,1070,894), null);


(lib.元件96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._56();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.427,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件96, new cjs.Rectangle(0,0,1070,1010), null);


(lib.元件91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件91, new cjs.Rectangle(0,0,320,51), null);


(lib.元件85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._48();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件85, new cjs.Rectangle(0,0,162,117), null);


(lib.元件84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._47();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件84, new cjs.Rectangle(0,0,145,106), null);


(lib.元件83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._44();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件83, new cjs.Rectangle(0,0,137,99), null);


(lib.元件82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件82, new cjs.Rectangle(0,0,112,81), null);


(lib.元件81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._46();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件81, new cjs.Rectangle(0,0,112,81), null);


(lib.元件79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._42();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件79, new cjs.Rectangle(0,0,193,196), null);


(lib.元件78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件78, new cjs.Rectangle(0,0,3,14), null);


(lib.元件77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件77, new cjs.Rectangle(0,0,5,5), null);


(lib.元件76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(12,0,0.567,0.857,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件76, new cjs.Rectangle(0,0,12,1.7), null);


(lib.元件74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._43();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件74, new cjs.Rectangle(0,0,99,66), null);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._41();
	this.instance.parent = this;
	this.instance.setTransform(336,0);

	this.instance_1 = new lib._40();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件68, new cjs.Rectangle(0,0,566,74), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p41();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件58, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p201();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件55, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._31();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件54, new cjs.Rectangle(0,0,231,75), null);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._32();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件53, new cjs.Rectangle(0,0,453,338), null);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._24();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.012,1.015);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(302.9,146.8,1,1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件44, new cjs.Rectangle(0,0,318.9,708.8), null);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._28();
	this.instance.parent = this;
	this.instance.setTransform(328,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件43, new cjs.Rectangle(0,0,328,810), null);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._27();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件42, new cjs.Rectangle(0,0,351,862), null);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._25();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件40, new cjs.Rectangle(0,0,353,332), null);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._23();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件36, new cjs.Rectangle(0,0,183,238), null);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-375,0,2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-375,0,1500,88), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._16();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(0,0,517,1004), null);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.p201();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件32, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._20();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件30, new cjs.Rectangle(0,0,194,140), null);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap71();
	this.instance.parent = this;
	this.instance.setTransform(-9,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件29, new cjs.Rectangle(-9,-16,479,64), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._19_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件28, new cjs.Rectangle(0,0,165,579), null);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3png复制();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,176,76), null);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._17();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(0,0,279,909), null);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap68();
	this.instance.parent = this;
	this.instance.setTransform(-34,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(-34,-7,482,71), null);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._18();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(0,0,65,55), null);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.104,0.104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,93.7,156.1), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-270,5,1.811,1.811);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-270,5,871.1,364), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap67();
	this.instance.parent = this;
	this.instance.setTransform(-128,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-128,0,443,64), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(107,0,0.608,0.658,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,107,50), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,129,99), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg6lBhqMAAAjDTMB1LAAAMAAADDTg");
	this.shape.setTransform(375,625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.Bitmap70();
	this.instance.parent = this;
	this.instance.setTransform(-153,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-153,-17,516,64), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib._15();
	this.instance.parent = this;
	this.instance.setTransform(545,692,2.752,2.752);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib._1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,900,1500), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._4_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.759,1.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,647.3,1648.1), null);


(lib.透明播放按钮copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.on('click', function () {
			root.gotoAndPlay(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhJwBvmMAAAjfLMCThAAAMAAADfLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.透明播放按钮copy5, new cjs.Rectangle(-472.1,-714.1,944.3,1428.4), null);


(lib.透明播放按钮copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.on('click', function () {
			root.share.visible=true;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhJwBvmMAAAjfLMCThAAAMAAADfLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.透明播放按钮copy4, new cjs.Rectangle(-472.1,-714.1,944.3,1428.4), null);


(lib.透明播放按钮copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.on('click', function () {
			window.location.href = 'http://cuxiao.m.suning.com/duyiwuer.html';
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhJwBvmMAAAjfLMCThAAAMAAADfLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.透明播放按钮copy3, new cjs.Rectangle(-472.1,-714.1,944.3,1428.4), null);


(lib.透明播放按钮copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.on('click', function () {
			root.gotoAndPlay('找回本我');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhJwBvmMAAAjfLMCThAAAMAAADfLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.透明播放按钮copy2, new cjs.Rectangle(-472.1,-714.1,944.3,1428.4), null);


(lib.透明播放按钮copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.on('click', function () {
			root.gotoAndPlay('浇灭火焰');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("EhJwBvmMAAAjfLMCThAAAMAAADfLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.透明播放按钮copy, new cjs.Rectangle(-472.1,-714.1,944.3,1428.4), null);


(lib.声音控制按钮 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},38).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.元件218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件200("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60,29.9,1,1,0,0,0,136,-5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件218, new cjs.Rectangle(0,0,114,64), null);


(lib.元件213 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件214("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(375,839.5,1,1,0,0,0,63,62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:63.1,regY:62.7,scaleX:1.2,scaleY:1.2,x:375.2,y:839.7},15,cjs.Ease.get(1)).to({regX:63,regY:62.5,scaleX:1,scaleY:1,x:375,y:839.5},14,cjs.Ease.get(-1)).wait(1));

	// 图层 1
	this.instance_1 = new lib.loading();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件189 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件188();
	this.instance.parent = this;
	this.instance.setTransform(29.4,28.8,1,1,0,0,0,29.4,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,57.5);


(lib.元件176 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件177("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(246.5,158.5,1,1,0,0,0,246.5,158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.488},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,493,317);


(lib.元件174 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件176("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.5,-145.7,1,1,0,0,0,246.5,158.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-142.5},24).to({y:-145.7},25).to({y:-148.9},25).to({y:-145.7},25).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件175("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(79.5,107.5,1,1,0,0,0,79.5,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:110.7},24).to({y:107.5},25).to({y:104.3},25).to({y:107.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-304.2,609,519.2);


(lib.元件171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件168("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226,94.5,1,1,0,0,0,226,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:100.9},24).to({y:94.5},25).to({y:88.1},25).to({y:94.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,189);


(lib.元件170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件167("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226,119.5,1,1,0,0,0,226,119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:125.9},24).to({y:119.5},25).to({y:113.1},25).to({y:119.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,239);


(lib.元件169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件166("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226,139,1,1,0,0,0,226,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:145.4},24).to({y:139},25).to({y:132.6},25).to({y:139},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,452,278);


(lib.元件159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件152("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(253.1,209.1,1,0.822,-131.3,0,0,16.4,0.1);

	this.instance_1 = new lib.元件151("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(199.9,143.9,1,1,-15,0,0,-5.2,29.9);

	this.instance_2 = new lib.元件148("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(60.3,215.7,1,1,20.7,0,0,21.4,0.1);

	this.instance_3 = new lib.元件149("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(90.8,147.6,1,1,7.6,0,0,45.6,33.5);

	this.instance_4 = new lib.元件150("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(146.5,309.5,1,1,0,0,0,85.5,309.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344.8,619);


(lib.元件158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件157("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(375,0,1,1,0,0,0,375,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9,alpha:0.211},39).to({scaleX:1,scaleY:1,alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(551,553.6);

	this.instance_1 = new lib.补间10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(551,553.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},199).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1101.9,1107.2);


(lib.元件154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件144("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(397,625,1,1,0,0,0,397,625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,1250);


(lib.元件147 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件152("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(189.1,208,1,0.841,0,0,0,16.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0.1,scaleX:1,scaleY:0.83,rotation:-65.7,x:190,y:205.4},29).to({regX:16.4,scaleX:1,scaleY:0.82,rotation:-131.3,x:192.1,y:209.1},32).wait(244));

	// 图层 4
	this.instance_1 = new lib.元件151("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(138.8,143.8,1,1,0,0,0,-5.2,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:29.9,rotation:-15,x:138.9,y:143.9},61).wait(244));

	// 图层 3
	this.instance_2 = new lib.元件148("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.7,219.4,1,1,0,0,0,21.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:21.4,regY:0.1,rotation:20.7,x:-0.7,y:215.7},61).wait(244));

	// 图层 2
	this.instance_3 = new lib.元件149("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.6,151.5,1,1,0,0,0,45.6,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.6,x:29.8,y:147.6},61).wait(244));

	// 图层 1
	this.instance_4 = new lib.元件150("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(85.5,309.5,1,1,0,0,0,85.5,309.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,0,221.6,619);


(lib.元件146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bitmap 11
	this.instance = new lib.元件197();
	this.instance.parent = this;
	this.instance.setTransform(358,421.5,1,1,0,0,0,228,22.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(203).to({_off:false},0).to({y:390.7,alpha:1},9).to({y:82.9},96).to({y:55.5,alpha:0},8).to({_off:true},1).wait(86));

	// Bitmap 10
	this.instance_1 = new lib.元件196();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358,421.5,1,1,0,0,0,228,19);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181).to({_off:false},0).to({y:390.7,alpha:1},9).to({y:82.9},95).to({y:55.5,alpha:0},8).to({_off:true},1).wait(109));

	// Bitmap 9
	this.instance_2 = new lib.元件195();
	this.instance_2.parent = this;
	this.instance_2.setTransform(358,421.5,1,1,0,0,0,228,21.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(159).to({_off:false},0).to({y:390.7,alpha:1},9).to({y:82.9},95).to({y:55.5,alpha:0},8).to({_off:true},1).wait(131));

	// Bitmap 8
	this.instance_3 = new lib.元件194();
	this.instance_3.parent = this;
	this.instance_3.setTransform(344.5,421.5,1,1,0,0,0,214.5,22.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(137).to({_off:false},0).to({y:390.7,alpha:1},9).to({y:82.9},95).to({y:55.5,alpha:0},8).to({_off:true},1).wait(153));

	// Bitmap 7
	this.instance_4 = new lib.元件193();
	this.instance_4.parent = this;
	this.instance_4.setTransform(358,421.5,1,1,0,0,0,228,18);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(115).to({_off:false},0).to({y:400.7,alpha:1},9).to({y:82.9},95).to({y:55.5,alpha:0},8).to({_off:true},1).wait(175));

	// Bitmap 6
	this.instance_5 = new lib.元件192();
	this.instance_5.parent = this;
	this.instance_5.setTransform(358,421.5,1,1,0,0,0,228,23.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:false},0).to({y:400.7,alpha:1},9).to({y:82.9},95).to({y:55.5,alpha:0},8).to({_off:true},1).wait(197));

	// Bitmap 5
	this.instance_6 = new lib.元件191();
	this.instance_6.parent = this;
	this.instance_6.setTransform(358,421.5,1,1,0,0,0,228,21.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({y:400.7,alpha:1},9).to({y:82.9},100).to({y:55.5,alpha:0},8).to({_off:true},1).wait(214));

	// Bitmap 4
	this.instance_7 = new lib.元件190();
	this.instance_7.parent = this;
	this.instance_7.setTransform(358,421.5,1,1,0,0,0,228,20);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(49).to({_off:false},0).to({y:390.7,alpha:1},9).to({y:82.9},95).to({y:55.5,alpha:0},8).to({_off:true},1).wait(241));

	// 图层 7
	this.instance_8 = new lib.元件158("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(62).to({_off:false},0).wait(341));

	// 90.png
	this.instance_9 = new lib.元件161("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(369.5,722.5,1,1,0,0,0,336.5,127.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(347).to({_off:false},0).to({alpha:1},16).wait(40));

	// 89.png
	this.instance_10 = new lib.元件160("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(370,415.5,1,1,0,0,0,217,45.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(317).to({_off:false},0).to({alpha:1},15).wait(71));

	// 图层 6
	this.instance_11 = new lib.元件156("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(477.5,531.8,1,1,0,0,0,136.3,183.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).to({alpha:1},24).wait(11).to({startPosition:0},0).to({regX:136.4,scaleX:0.22,scaleY:0.22,x:397.9,y:621.2},194).wait(86));

	// 图层 2
	this.instance_12 = new lib.元件147("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(311.3,940.5,1,1,0,0,0,85.5,309.5);
	this.instance_12._off = true;

	this.instance_13 = new lib.元件159("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(401.2,710.1,1,1,0,0,0,172.4,309.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(21).to({_off:false},0).to({x:375.3,y:710.5,startPosition:26},26).to({_off:true},41).wait(315));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(88).to({_off:false},0).wait(35).to({startPosition:0},0).to({regX:172.7,regY:309.8,scaleX:0.22,scaleY:0.22,x:380.9,y:661.2},194).wait(86));

	// 图层 5
	this.instance_14 = new lib.元件155("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(375,1494.6,1,1,0,0,0,551,553.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(21).to({_off:false},0).wait(102).to({startPosition:191},0).to({regX:551.7,regY:554.1,scaleX:0.12,scaleY:0.12,y:782.4,startPosition:46},194).wait(86));

	// 91.png
	this.instance_15 = new lib.补间11("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(368.5,597.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.补间12("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(368.5,597.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},332).to({state:[{t:this.instance_16}]},15).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(332).to({_off:false},0).to({_off:true,alpha:1},15).wait(56));

	// 图层 3
	this.instance_17 = new lib.元件153("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(322,940.5,1,1,0,0,0,113,309.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},21).to({_off:true},1).wait(381));

	// 图层 1
	this.instance_18 = new lib.元件154("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(397,625,1,1,0,0,0,397,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(21).to({regY:1250,y:1250},0).to({alpha:0},26).to({_off:true},1).wait(355));

	// 图层 4
	this.instance_19 = new lib.p12();
	this.instance_19.parent = this;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(21).to({_off:false},0).wait(382));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,1250);


(lib.元件145 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件212("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(420,317.5,1,1,0,0,0,235,25.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({y:301.8,alpha:1},6).to({y:178.4},57).to({y:160,alpha:0},7).to({_off:true},1).wait(40));

	// 图层 4
	this.instance_1 = new lib.元件211("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(420,321,1,1,0,0,0,235,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({y:305.3,alpha:1},6).to({y:181.9},57).to({y:163.5,alpha:0},7).to({_off:true},1).wait(59));

	// 图层 3
	this.instance_2 = new lib.元件210("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(420,322.5,1,1,0,0,0,235,28.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({y:306.8,alpha:1},6).to({y:183.4},57).to({y:165,alpha:0},7).to({_off:true},1).wait(77));

	// 图层 2
	this.instance_3 = new lib.元件209("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(420,318,1,1,0,0,0,235,23);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:302.3,alpha:1},6).to({y:178.9},57).to({y:160.5,alpha:0},7).to({_off:true},1).wait(100));

	// 图层 1
	this.instance_4 = new lib.元件144("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(397,625,1,1,0,0,0,397,625);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},29).to({x:441},110).to({_off:true},4).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,794,1250);


(lib.元件139 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件141("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(74.5,67,1,1,0,0,0,74.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149,134);


(lib.元件138 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 140
	this.instance = new lib.元件140("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(115.3,-13.5,1,1,0,0,0,320.5,73.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({x:928.1,y:1701.7},99).wait(2));

	// 元件 139
	this.instance_1 = new lib.元件139("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.3,-275,1,1,0,0,0,74.5,67);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).to({x:466.8,y:210.1},28).to({x:928.1,y:1440.2},71).wait(2));

	// 元件 137
	this.instance_2 = new lib.元件137("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-106.2,-440.5,1,1,0,0,0,41,39.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({x:706.6,y:1274.7},99).wait(2));

	// 元件 140
	this.instance_3 = new lib.元件140("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.3,-13.5,1,1,0,0,0,320.5,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:928.1,y:1701.7},99).to({_off:true},2).wait(28));

	// 元件 139
	this.instance_4 = new lib.元件139("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(115.3,-275,1,1,0,0,0,74.5,67);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:466.8,y:210.1},28).to({x:928.1,y:1440.2},71).to({_off:true},2).wait(28));

	// 元件 137
	this.instance_5 = new lib.元件137("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-106.2,-440.5,1,1,0,0,0,41,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:706.6,y:1274.7},99).to({_off:true},2).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.2,-480,641,540);


(lib.元件136 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件135("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(327,589,1,1,0,0,0,327,589);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.352},24).to({alpha:0.602},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,654,1178);


(lib.元件133 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件136("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(327,589,1,1,0,0,0,327,589);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({regX:0,regY:0,x:0,y:0,startPosition:29},0).to({_off:true},39).wait(1));

	// 图层 5
	this.instance_1 = new lib.元件142("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({_off:true},24).wait(1));

	// 图层 4
	this.instance_2 = new lib.元件138("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(156,-69.7,1,1,0,0,0,41,39.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({_off:true},114).wait(1));

	// 图层 13
	this.instance_3 = new lib.元件229();
	this.instance_3.parent = this;
	this.instance_3.setTransform(305.5,437.2,1,1,0,0,0,203,32);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).to({x:305,y:405,alpha:1},10).to({_off:true},59).wait(1));

	// 图层 12
	this.instance_4 = new lib.元件228();
	this.instance_4.parent = this;
	this.instance_4.setTransform(378.2,362.2,1,1,0,0,0,276.2,32.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).to({x:377.8,y:330.1,alpha:1},10).to({_off:true},74).wait(1));

	// 图层 11
	this.instance_5 = new lib.元件227();
	this.instance_5.parent = this;
	this.instance_5.setTransform(324,287.2,1,1,0,0,0,221.5,32);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({_off:false},0).to({x:323.5,y:255,alpha:1},10).to({_off:true},89).wait(1));

	// 图层 10
	this.instance_6 = new lib.元件226();
	this.instance_6.parent = this;
	this.instance_6.setTransform(177.5,211.2,1,1,0,0,0,75,32);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({x:177,y:179,alpha:1},10).to({_off:true},104).wait(1));

	// 图层 2
	this.instance_7 = new lib.元件134("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(492.4,872,1,1,0,0,0,281,378);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:374},80).to({_off:true},64).wait(1));

	// 图层 1
	this.instance_8 = new lib.P10();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},144).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,773.4,1250);


(lib.元件130 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件129();
	this.instance.parent = this;
	this.instance.setTransform(42,29.5,1,1,0,0,0,42,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-414.1,y:310.5},49).to({x:-879.6,y:467.9},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,59);


(lib.元件125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 68.png
	this.instance = new lib.元件126();
	this.instance.parent = this;
	this.instance.setTransform(578,0,1,1,0,0,0,489,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:489.1,scaleY:1.05,skewX:9.3,x:578.1},24).to({regX:489,scaleY:1,skewX:0,x:578},25).wait(1));

	// 67.png
	this.instance_1 = new lib.元件127();
	this.instance_1.parent = this;
	this.instance_1.setTransform(578,0,1,1,0,0,0,370,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.05,skewX:4.6},19).to({scaleY:1.02,skewX:0.6},15).to({scaleY:1.05,skewX:4.6},15).wait(1));

	// 66.png
	this.instance_2 = new lib.元件128();
	this.instance_2.parent = this;
	this.instance_2.setTransform(750,0,1,1,0,0,0,272,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.12,skewX:5.7},24).to({scaleY:1,skewX:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89,0,661,801);


(lib.元件123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件124();
	this.instance.parent = this;
	this.instance.setTransform(244,532,1,1,0,0,0,244,532);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.621},35).to({alpha:1},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,488,1064);


(lib.元件122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgBdAmYQomAAmFrQQmFrOAAv6QAAv5GFrPQGFrPImAAQImAAHyLGQHzLGgiP8QghP7nRLWQnRLWomAAIAAAAg");
	mask.setTransform(19.3,144.5);

	// 图层 2
	this.instance = new lib._71();
	this.instance.parent = this;
	this.instance.setTransform(-8,130);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// 图层 1
	this.instance_1 = new lib.元件121();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.5,146.6,0.666,0.666,45,0,0,7.9,142.1);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:1125},79).wait(1));

	// 图层 1
	this.instance_2 = new lib.元件121();
	this.instance_2.parent = this;
	this.instance_2.setTransform(7.9,142.1,1,1,0,0,0,7.9,142.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:360},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,0,109.3,179.5);


(lib.元件120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件122();
	this.instance.parent = this;
	this.instance.setTransform(149,217.5,0.692,1,0,0,0,33.6,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106));

	// 图层 1
	this.instance_1 = new lib._72();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301,589);


(lib.元件117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件189();
	this.instance.parent = this;
	this.instance.setTransform(46.7,47,1.694,1.694,0,0,0,29.3,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.instance_1 = new lib._112();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件117, new cjs.Rectangle(-3,-1.6,124,165.6), null);


(lib.元件115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件114();
	this.instance.parent = this;
	this.instance.setTransform(34.5,26,1,1,0,0,0,34.5,26);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:34.6,rotation:45,x:-238.4,y:152.6},34).to({rotation:30,x:-122.7,y:269.1},14).to({regX:34.5,rotation:-15,x:-299.1,y:747.1},36).to({rotation:0,x:-783.1,y:1254.8},46).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件114();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-61.5,-134,1,1,0,0,0,34.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-354.3,y:138.6},34).to({x:-357.9,y:260.3},14).to({x:-643.2,y:454.3},36).to({x:-914.3,y:659.6},46).to({_off:true},1).wait(5));

	// 图层 1
	this.instance_2 = new lib.元件114();
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.5,26,1,1,0,0,0,34.5,26);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regY:25.9,rotation:-30,x:-238.4,y:232.1},34).to({regY:26,rotation:0,x:-261.9,y:321.1},14).to({rotation:30,x:-499.2,y:729.5},36).to({rotation:0,x:-783.1,y:1059.6},46).wait(1));

	// 图层 1
	this.instance_3 = new lib.元件114();
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.5,26,1,1,0,0,0,34.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-258.3,y:298.6},34).to({x:-261.9,y:420.3},14).to({x:-547.2,y:614.3},36).to({x:-818.3,y:819.6},46).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-160,165,212);


(lib.元件111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件112();
	this.instance.parent = this;
	this.instance.setTransform(16.3,13.2,1,1,0,0,0,16.3,13.2);
	this.instance.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.102},14).to({alpha:0.301},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.5,26.4);


(lib.元件110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件111();
	this.instance.parent = this;
	this.instance.setTransform(168.7,819.9,1,1,75,0,0,16.3,13.1);

	this.instance_1 = new lib.元件111();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.9,828.7,1,1,75,0,0,16.3,13.1);

	this.instance_2 = new lib.元件111();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105.7,865.5,1,1,75,0,0,16.3,13.1);

	this.instance_3 = new lib.元件111();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.7,855.1,1,1,75,0,0,16.3,13.1);

	this.instance_4 = new lib.元件111();
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.9,886,1,1,75,0,0,16.3,13.1);

	this.instance_5 = new lib.元件111();
	this.instance_5.parent = this;
	this.instance_5.setTransform(142.1,914.8,1,1,75,0,0,16.3,13.1);

	this.instance_6 = new lib.元件111();
	this.instance_6.parent = this;
	this.instance_6.setTransform(126.5,946.8,1,1,75,0,0,16.3,13.1);

	this.instance_7 = new lib.元件111();
	this.instance_7.parent = this;
	this.instance_7.setTransform(502.5,796.4,1,1,0,0,0,16.3,13.2);

	this.instance_8 = new lib.元件111();
	this.instance_8.parent = this;
	this.instance_8.setTransform(544.1,802.8,1,1,0,0,0,16.3,13.2);

	this.instance_9 = new lib.元件111();
	this.instance_9.parent = this;
	this.instance_9.setTransform(624.1,815.6,1,1,0,0,0,16.3,13.2);

	this.instance_10 = new lib.元件111();
	this.instance_10.parent = this;
	this.instance_10.setTransform(618.5,849.2,1,1,0,0,0,16.3,13.2);

	this.instance_11 = new lib.元件111();
	this.instance_11.parent = this;
	this.instance_11.setTransform(538.5,838,1,1,0,0,0,16.3,13.2);

	this.instance_12 = new lib.元件111();
	this.instance_12.parent = this;
	this.instance_12.setTransform(572.9,878,1,1,0,0,0,16.3,13.2);

	this.instance_13 = new lib.元件111();
	this.instance_13.parent = this;
	this.instance_13.setTransform(528.9,906,1,1,0,0,0,16.3,13.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 1
	this.instance_14 = new lib.p8();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件110, new cjs.Rectangle(0,0,750,1250), null);


(lib.元件108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件107();
	this.instance.parent = this;
	this.instance.setTransform(37.1,280,1,1,0,0,0,37.1,280);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.7,y:280.1},14).to({rotation:0,y:280},15).to({rotation:-1.5,x:37.2,y:280.1},15).to({rotation:0,x:37.1,y:280},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,288);


(lib.元件106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件105();
	this.instance.parent = this;
	this.instance.setTransform(20.1,228.8,1,1,0,0,0,20.1,228.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2.2,x:20.2},39).to({rotation:0,x:20.1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,272);


(lib.元件104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件103();
	this.instance.parent = this;
	this.instance.setTransform(80.6,198.9,1,1,0,0,0,80.6,198.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.5,x:80.7},19).to({rotation:0,x:80.6},20).to({rotation:3,x:80.7,y:199},20).to({rotation:0,x:80.6,y:198.9},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,241);


(lib.元件101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件102();
	this.instance.parent = this;
	this.instance.setTransform(129.4,266.3,1,1,0,0,0,129.4,266.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.5,x:129.5,y:266.4},34).to({rotation:0,x:129.4,y:266.3},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,283);


(lib.元件100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件99();
	this.instance.parent = this;
	this.instance.setTransform(116.1,5,1,1,0,0,0,116.1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:116.2,scaleY:1.14,skewX:14.3,x:116.2},29).to({regX:116.1,scaleY:1,skewX:0,x:116.1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,74);


(lib.元件98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6Vf1QoMiekUjmQkTjlAGiLQAGiKgFhDIAohMQhciMh4iPQjwkchGglQhGgkhMmMQgYh8gViRIgRh6IFIuQQAAgBIIkjQIIkjAAgBQAAgBR4inQR3inAAgBQAAgBKwAlQKwAlAAgBQMQK6AAAGQAAADDoCNQDoCNAAADQAAADEwENQEwENAAADQAAADlIKwQlIKxAAADIgICgIAAGQQhjFXnJDkQlsC1pBBlQmVBHnkAbQmLAOgCADQwBgZqRjGg");
	mask.setTransform(350.8,193.8);

	// 图层 10
	this.instance = new lib._59();
	this.instance.parent = this;
	this.instance.setTransform(64,170);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 8
	this.instance_1 = new lib._51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(177,73);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 7
	this.instance_2 = new lib.元件108();
	this.instance_2.parent = this;
	this.instance_2.setTransform(450.5,162,1,1,0,0,0,71.5,144);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 6
	this.instance_3 = new lib.元件106();
	this.instance_3.parent = this;
	this.instance_3.setTransform(593.1,203,1,1,0,0,0,78.5,136);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 图层 5
	this.instance_4 = new lib.元件104();
	this.instance_4.parent = this;
	this.instance_4.setTransform(231,138.5,1,1,0,0,0,47,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 图层 3
	this.instance_5 = new lib.元件101();
	this.instance_5.parent = this;
	this.instance_5.setTransform(143,360.7,1,1,0,0,0,111,252.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// 图层 2
	this.instance_6 = new lib.元件100();
	this.instance_6.parent = this;
	this.instance_6.setTransform(278.5,471,1,1,0,0,0,94.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// 图层 1
	this.instance_7 = new lib._58();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件98, new cjs.Rectangle(0,0,745,933), null);


(lib.元件95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件97();
	this.instance.parent = this;
	this.instance.setTransform(535,527,1,1,0,0,0,535,447);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:215},99).to({x:535},100).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件96();
	this.instance_1.parent = this;
	this.instance_1.setTransform(215,505,1,1,0,0,0,535,505);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:535},99).to({x:215},100).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,0,1390,1010);


(lib.元件94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件95();
	this.instance.parent = this;
	this.instance.setTransform(375,505,1,1,0,0,0,375,505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib.p7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件94, new cjs.Rectangle(-320,0,1390,1250), null);


(lib.元件92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件91();
	this.instance.parent = this;
	this.instance.setTransform(160.5,26,1,1,0,0,0,160.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.2,scaleY:1.2},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,51);


(lib.元件90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件83();
	this.instance.parent = this;
	this.instance.setTransform(68.5,49.5,1,1,0,0,0,68.5,49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},19).to({alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,99);


(lib.元件89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件82();
	this.instance.parent = this;
	this.instance.setTransform(56,40.5,1,1,0,0,0,56,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},34).to({alpha:1},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,81);


(lib.元件88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件81();
	this.instance.parent = this;
	this.instance.setTransform(56,40.5,1,1,0,0,0,56,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},24).to({alpha:1},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,81);


(lib.元件87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件85();
	this.instance.parent = this;
	this.instance.setTransform(81,58.5,1,1,0,0,0,81,58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},39).to({alpha:1},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,117);


(lib.元件86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件84();
	this.instance.parent = this;
	this.instance.setTransform(72.5,53,1,1,0,0,0,72.5,53);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.801},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,106);


(lib.元件80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件79();
	this.instance.parent = this;
	this.instance.setTransform(138.3,138.6,1,1,0,0,0,138.3,138.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193,196);


(lib.元件75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件76();
	this.instance.parent = this;
	this.instance.setTransform(1,13.8,1,1,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1080},119).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件78();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,13.9,1,1,0,0,0,1,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360},119).wait(1));

	// 图层 3
	this.instance_2 = new lib.元件77();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.5,14.5,1,1,0,0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,14,17);


(lib.元件73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件74();
	this.instance.parent = this;
	this.instance.setTransform(49.5,33,1,1,0,0,0,49.5,33);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,66);


(lib.元件72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.元件80();
	this.instance.parent = this;
	this.instance.setTransform(74.1,1020.3,1.124,1,0,0,0,2.2,110.3);

	this.instance_1 = new lib.元件80();
	this.instance_1.parent = this;
	this.instance_1.setTransform(570.7,961.3,1.028,1,0,0,0,2.1,110.3);

	this.instance_2 = new lib.元件80();
	this.instance_2.parent = this;
	this.instance_2.setTransform(326.5,1117,1.148,1,0,0,0,2.1,110.3);

	this.instance_3 = new lib.元件80();
	this.instance_3.parent = this;
	this.instance_3.setTransform(301.8,848.2,1.091,1,0,0,0,2,110.3);

	this.instance_4 = new lib.元件80();
	this.instance_4.parent = this;
	this.instance_4.setTransform(43.7,743.6,1.153,1,0,0,0,2,110.3);

	this.instance_5 = new lib.元件80();
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.2,221.2,1.071,1,0,0,0,0.4,109.3);

	this.instance_6 = new lib.元件80();
	this.instance_6.parent = this;
	this.instance_6.setTransform(175.3,74.9,1.071,1,0,0,0,0.4,109.3);

	this.instance_7 = new lib.元件80();
	this.instance_7.parent = this;
	this.instance_7.setTransform(405.6,170.9,1.109,1,0,0,0,0.3,109.3);

	this.instance_8 = new lib.元件80();
	this.instance_8.parent = this;
	this.instance_8.setTransform(484.2,413.3,0.995,1,0,0,0,0.3,109.3);

	this.instance_9 = new lib.元件80();
	this.instance_9.parent = this;
	this.instance_9.setTransform(234.4,318.2,1.071,1,0,0,0,0.2,109.3);

	this.instance_10 = new lib.元件80();
	this.instance_10.parent = this;
	this.instance_10.setTransform(14.1,490.1,1.104,1,0,0,0,0.2,109.3);

	this.instance_11 = new lib.元件80();
	this.instance_11.parent = this;
	this.instance_11.setTransform(386.3,613.6,1,1,0,0,0,138.3,138.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 3
	this.instance_12 = new lib.元件75();
	this.instance_12.parent = this;
	this.instance_12.setTransform(229.1,31.7,0.785,1,0,0,0,6.5,7);

	this.instance_13 = new lib.元件75();
	this.instance_13.parent = this;
	this.instance_13.setTransform(345.7,1085.3,0.785,1,0,0,0,6.5,7);

	this.instance_14 = new lib.元件75();
	this.instance_14.parent = this;
	this.instance_14.setTransform(36.6,440.9,0.785,1,0,0,0,6.5,7);

	this.instance_15 = new lib.元件75();
	this.instance_15.parent = this;
	this.instance_15.setTransform(502.5,381.4,0.785,1,0,0,0,6.5,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(1));

	// 图层 2
	this.instance_16 = new lib.元件73();
	this.instance_16.parent = this;
	this.instance_16.setTransform(580.5,743.6,1,1,0,0,0,49.5,33);

	this.instance_17 = new lib.元件73();
	this.instance_17.parent = this;
	this.instance_17.setTransform(695.5,304,1,1,0,0,0,49.5,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(1));

	// 图层 1
	this.instance_18 = new lib.p6();
	this.instance_18.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件72, new cjs.Rectangle(0,-34.4,767,1284.5), null);


(lib.元件71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 9
	this.instance = new lib.元件217("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(380,344,1,1,0,0,0,375,352);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(107).to({_off:false},0).to({alpha:1},11).wait(100));

	// 图层 7
	this.instance_1 = new lib.元件91();
	this.instance_1.parent = this;
	this.instance_1.setTransform(372.5,479,0.27,0.27,0,0,0,160.8,26.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.元件92();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.5,479,1,1,0,0,0,160.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},201).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(201).to({_off:false},0).to({regX:160.5,regY:26,scaleX:1.18,scaleY:1.18},6).to({scaleX:1,scaleY:1},3).to({_off:true},1).wait(7));

	// 图层 6
	this.instance_3 = new lib.元件85();
	this.instance_3.parent = this;
	this.instance_3.setTransform(603.5,628.7,0.4,0.4,0,0,0,81.2,58.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.元件87();
	this.instance_4.parent = this;
	this.instance_4.setTransform(645,577.5,1,1,0,0,0,81,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},185).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_4}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(185).to({_off:false},0).to({regX:81,regY:58.5,scaleX:1,scaleY:1,x:645,y:577.5,alpha:1},11).to({_off:true},1).wait(21));

	// 图层 5
	this.instance_5 = new lib.元件84();
	this.instance_5.parent = this;
	this.instance_5.setTransform(395,319.8,0.4,0.4,0,0,0,72.7,53.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.元件86();
	this.instance_6.parent = this;
	this.instance_6.setTransform(460.5,267,1,1,0,0,0,72.5,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},169).to({state:[{t:this.instance_5}]},11).to({state:[{t:this.instance_6}]},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(169).to({_off:false},0).to({regX:72.5,regY:53,scaleX:1,scaleY:1,x:460.5,y:267,alpha:1},11).to({_off:true},1).wait(37));

	// 图层 4
	this.instance_7 = new lib.元件83();
	this.instance_7.parent = this;
	this.instance_7.setTransform(476.2,835.3,0.4,0.4,0,0,0,68.7,49.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.元件90();
	this.instance_8.parent = this;
	this.instance_8.setTransform(514.5,782.5,1,1,0,0,0,68.5,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},152).to({state:[{t:this.instance_7}]},11).to({state:[{t:this.instance_8}]},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(152).to({_off:false},0).to({regX:68.5,regY:49.5,scaleX:1,scaleY:1,x:514.5,y:782.5,alpha:1},11).to({_off:true},1).wait(54));

	// 图层 3
	this.instance_9 = new lib.元件82();
	this.instance_9.parent = this;
	this.instance_9.setTransform(198.5,736.7,0.4,0.4,0,0,0,56.1,40.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.元件89();
	this.instance_10.parent = this;
	this.instance_10.setTransform(232,701.5,1,1,0,0,0,56,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},135).to({state:[{t:this.instance_9}]},12).to({state:[{t:this.instance_10}]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(135).to({_off:false},0).to({regX:56,regY:40.5,scaleX:1,scaleY:1,x:232,y:701.5,alpha:1},12).to({_off:true},1).wait(70));

	// 图层 2
	this.instance_11 = new lib.元件81();
	this.instance_11.parent = this;
	this.instance_11.setTransform(182.5,461,0.4,0.4,0,0,0,56.1,40.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.元件88();
	this.instance_12.parent = this;
	this.instance_12.setTransform(232,406.5,1,1,0,0,0,56,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},118).to({state:[{t:this.instance_11}]},11).to({state:[{t:this.instance_12}]},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(118).to({_off:false},0).to({regX:56,regY:40.5,scaleX:1,scaleY:1,x:232,y:406.5,alpha:1},11).to({_off:true},1).wait(88));

	// 图层 1
	this.instance_13 = new lib.元件72();
	this.instance_13.parent = this;
	this.instance_13.setTransform(499.3,700.9,3.5,3.5,0,0,0,375,624.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:624.8,scaleX:1,scaleY:1,x:375,y:624.8},118).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-813.2,-1606.7,2684.3,4495.4);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件58();
	this.instance.parent = this;
	this.instance.setTransform(375,709.1,1,1,0,0,0,375,709.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:374.9,regY:709,scaleX:1.27,scaleY:1.27,x:374.9,y:709,alpha:0.449},74).to({regX:375,regY:709.1,scaleX:1,scaleY:1,x:375,y:709.1,alpha:1},75).wait(1));

	// 图层 1
	this.instance_1 = new lib.p41();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 14
	this.instance = new lib.补间15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(387,344.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({y:329.9,alpha:1},6).to({y:153},73).to({_off:true},6).wait(22));

	// 图层 13
	this.instance_1 = new lib.补间17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(386.8,343.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.补间18("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(386.8,137.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},43).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},73).to({state:[{t:this.instance_2}]},6).to({state:[]},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).to({y:329.3,alpha:1},6).to({y:152.4},73).to({_off:true,y:137.8,alpha:0},6).wait(40));

	// 图层 12
	this.instance_3 = new lib.补间19("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(387,343.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.补间20("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(387,137.8);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_3}]},6).to({state:[{t:this.instance_3}]},73).to({state:[{t:this.instance_4}]},6).to({state:[]},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({y:329.3,alpha:1},6).to({y:152.4},73).to({_off:true,y:137.8,alpha:0},6).wait(58));

	// 图层 6
	this.instance_5 = new lib.元件68();
	this.instance_5.parent = this;
	this.instance_5.setTransform(378,1094,1,1,0,0,0,283,37);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(123).to({_off:false},0).to({_off:true},23).wait(22));

	// 图层 7
	this.instance_6 = new lib.元件215("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(375.1,625,0.255,0.255,0,0,0,375,625);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({regX:375.2,regY:625.1,scaleX:0.42,scaleY:0.42,alpha:1},19).to({regX:375,regY:625,scaleX:1,scaleY:1,x:375},78).wait(1).to({mode:"independent"},0).to({_off:true},23).wait(22));

	// 图层 1
	this.instance_7 = new lib.元件57();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},146).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件42();
	this.instance.parent = this;
	this.instance.setTransform(812.1,201.1,0.466,0.466,0,0,0,175.4,431.3);

	this.instance_1 = new lib.元件43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(489.9,229.6,0.533,0.533,0,0,0,164.1,405.1);

	this.instance_2 = new lib.元件42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(648.5,217.1,0.466,0.466,0,0,0,175.4,431.3);

	this.instance_3 = new lib.元件44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(332.1,227.7,0.535,0.535,0,0,0,159.4,354.5);

	this.instance_4 = new lib._30();
	this.instance_4.parent = this;
	this.instance_4.setTransform(274.5,24,0.404,0.404,0,0,180);

	this.instance_5 = new lib.元件42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(78.4,244.9,0.447,0.447,0,0,0,175.3,431.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(0,0,894,445.5), null);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._30();
	this.instance.parent = this;
	this.instance.setTransform(737,0);

	this.instance_1 = new lib._30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,44);

	this.instance_2 = new lib.元件43();
	this.instance_2.parent = this;
	this.instance_2.setTransform(673.5,560.3,1.189,1.189,0,0,180,164,405.1);

	this.instance_3 = new lib.元件44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(460.4,479.2,1.227,1.227,0,0,180,159.3,354.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件46, new cjs.Rectangle(0,0,1177,1041.6), null);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件43();
	this.instance.parent = this;
	this.instance.setTransform(273.1,343.8,0.798,0.798,0,0,180,164,405);

	this.instance_1 = new lib.元件43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(613.6,343.8,0.798,0.798,0,0,180,164,405);

	this.instance_2 = new lib.元件44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(490.1,286.8,0.809,0.809,0,0,180,159.3,354.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_3 = new lib.元件42();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122.7,301,0.698,0.698,0,0,180,175.3,431.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件45, new cjs.Rectangle(0,0,744.5,667), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件40();
	this.instance.parent = this;
	this.instance.setTransform(176.5,166,1,1,0,0,0,176.5,166);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.602},29).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,353,332);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib._24();
	this.instance.parent = this;
	this.instance.setTransform(55,-30,1.987,1.993);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 4
	this.instance_1 = new lib._26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(525,235);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 2
	this.instance_2 = new lib.元件39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(484.5,210,1,1,0,0,0,176.5,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件38, new cjs.Rectangle(55,-30,629,1391), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 文案
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(375,123,1,1,0,0,0,99,33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.元件29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(373.5,125,1,1,0,0,0,225.5,33);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.元件199("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(353,143,1,1,0,0,0,253,28);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({_off:false},0).to({alpha:1},15).wait(55).to({alpha:0},12).to({_off:true},1).wait(215));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).to({alpha:1},16).wait(45).to({alpha:0},17).to({_off:true},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).to({alpha:1},16).to({_off:true},70).wait(18));

	// 图层 8
	this.instance_3 = new lib.元件30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(455.1,740.2,0.256,0.256,0,0,0,97,70);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(142).to({_off:false},0).to({scaleX:1,scaleY:1,x:355,y:658,alpha:1},14).wait(30).to({alpha:0},20).to({_off:true},1).wait(125));

	// 三班
	this.instance_4 = new lib.元件27();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-128.6,353.7,1.47,1.47,0,0,0,88,38);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:88,y:530},37).wait(45).to({regX:87.8,scaleX:0.56,scaleY:0.56,x:-114.1,y:774.6},20).to({_off:true},1).wait(125));

	// 门
	this.instance_5 = new lib.元件33();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1290.8,1250,1,1,0,0,0,517,1004);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:790,y:1248},34,cjs.Ease.get(1)).to({x:750},70).to({scaleX:0.81,scaleY:0.81,x:828.2,y:1250},37).wait(45).to({regX:517.1,regY:1004.3,scaleX:0.28,scaleY:0.28,x:871.2,y:1060.4},20).to({_off:true},1).wait(125));

	// 图层 14
	this.instance_6 = new lib.元件36();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-73.1,1393.5,1.741,1.741,0,0,0,91.5,119);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(228).to({_off:false},0).to({scaleX:1,scaleY:1,x:91.5,y:1131},48).wait(38).to({regX:0,regY:238,x:0,y:1250},0).to({scaleX:1.5,scaleY:1.5},17).wait(1));

	// 黑钢
	this.instance_7 = new lib.元件34();
	this.instance_7.parent = this;
	this.instance_7.setTransform(324.9,1094.2,1.45,0.949,0,0,0,374.9,44.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(206).to({_off:false},0).to({regX:375,regY:44,scaleX:1,scaleY:1,x:435.2,y:931,alpha:1},10).to({regX:375.1,scaleX:0.5,scaleY:0.5,x:375.1,y:853.7},60).to({_off:true},38).wait(18));

	// 女生
	this.instance_8 = new lib.元件28();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-185.2,986.7,1.47,1.47,0,0,0,82.5,289.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:49.5,y:960.5},37).wait(45).to({regX:82.7,regY:289.8,scaleX:0.39,scaleY:0.39,x:164.6,y:808.6},30).to({regY:289.9,scaleX:0.19,scaleY:0.19,x:239.8,y:792.5},60).wait(38).to({alpha:0},17).wait(1));

	// 男生
	this.instance_9 = new lib.元件25();
	this.instance_9.parent = this;
	this.instance_9.setTransform(912.5,1250,1,1,0,0,0,139.5,740);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:404.5},34,cjs.Ease.get(1)).to({x:372.5},70).to({regX:139.6,regY:740.1,scaleX:0.72,scaleY:0.72,x:553,y:1145.4},37).wait(45).to({regX:139.7,regY:740.4,scaleX:0.25,scaleY:0.25,x:572.7,y:877.1},30).to({regX:140.3,regY:740.7,scaleX:0.13,scaleY:0.13,x:443.8,y:826.8},60).wait(38).to({alpha:0},17).wait(1));

	// BG
	this.instance_10 = new lib.p201();
	this.instance_10.parent = this;

	this.instance_11 = new lib.元件32();
	this.instance_11.parent = this;
	this.instance_11.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},186).to({state:[{t:this.instance_11}]},30).to({state:[]},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(186).to({_off:false},0).to({alpha:0},30).to({_off:true},1).wait(115));

	// 图层 13
	this.instance_12 = new lib.元件35();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1960.7,2907.4,4.084,4.084,0,0,0,749.8,1249.9);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(186).to({_off:false},0).to({regX:750,regY:1250,scaleX:2,scaleY:2,x:1185.2,y:1723.5},30).to({scaleX:1,scaleY:1,x:750,y:1250},60).wait(38).to({alpha:0},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1290.8,1419);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件20();
	this.instance.parent = this;
	this.instance.setTransform(4,17.5,1,1,0,0,0,4,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.9,regY:17.4,scaleX:1.18,skewY:10.3,x:3.9,y:17.4},20).to({regY:17.6,scaleX:0.97,skewY:-8.4,x:4,y:17.6},20).to({regY:17.7,scaleX:1.27,skewY:-16.6,y:17.7},20).to({regX:4,regY:17.5,scaleX:1,skewY:0,y:17.5},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,55);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件21();
	this.instance.parent = this;
	this.instance.setTransform(700,472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 3
	this.instance_1 = new lib.p2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1250);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 2
	this.instance_2 = new lib.P1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 4
	this.instance_3 = new lib.p2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,1174,1,1.061);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,1500,2500.2), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 7
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(210.2,500.2,0.47,0.47,23,0,0,107.2,25.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regY:25.2,scaleX:1,scaleY:1,rotation:2.7,x:122.2,y:452.2},15).to({rotation:-37.6,x:-1.9,y:536.3,alpha:0},14).to({_off:true},1).wait(6));

	// 图层 6
	this.instance_1 = new lib.元件6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200.6,522.7,0.365,0.365,45,0,0,121.7,8.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regY:8.6,scaleX:1,scaleY:1,rotation:11.3,x:122.6,y:507.7},15).to({regX:121.8,rotation:-18.7,x:30.5,y:589.9,alpha:0},14).to({_off:true},1).wait(15));

	// 图层 7
	this.instance_2 = new lib.元件7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(210.2,500.2,0.47,0.47,23,0,0,107.2,25.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({regY:25.2,scaleX:1,scaleY:1,rotation:2.7,x:122.2,y:452.2},15).to({rotation:-37.6,x:-1.9,y:536.3,alpha:0},14).to({_off:true},1).wait(26));

	// 图层 6
	this.instance_3 = new lib.元件6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(200.6,522.7,0.365,0.365,45,0,0,121.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:8.6,scaleX:1,scaleY:1,rotation:11.3,x:122.6,y:507.7},15).to({regX:121.8,rotation:-18.7,x:30.5,y:589.9,alpha:0},14).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(145.8,489.1,58.9,58.9);


(lib._3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件131();
	this.instance.parent = this;
	this.instance.setTransform(557.4,-124,1,1,0,0,180,55,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:1460},129,cjs.Ease.get(-1)).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件131();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55,52,1,1,0,0,0,55,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:1636},129,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-176,612.4,280);


(lib.声音控制元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.on('click',function(){
				if(this.currentFrame==0){
					createjs.Sound.stop();
					this.gotoAndStop(1);
				}else{
					playSound('bg',-1);
					this.gotoAndStop(0);
				}
			}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 3
	this.instance = new lib.声音控制按钮();
	this.instance.parent = this;
	this.instance.setTransform(35.1,34);

	this.instance_1 = new lib._19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("AlsFoIAArPILaAAIAALPg");
	this.shape.setTransform(33.6,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-4.1,73.1,72.1);


(lib.补间6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件189();
	this.instance.parent = this;
	this.instance.setTransform(21.4,-343.2,1,1,0,0,0,29.4,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.instance_1 = new lib._59();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-160,-504.6,1.809,1.809);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-504.6,320.1,1009.2);


(lib.元件173 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.on('click',function(){root.share.visible=false;});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 3
	this.instance = new lib.元件174("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(243.5,385.5,1,1,0,0,0,79.5,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.instance_1 = new lib.元件170("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(253,588.5,1,1,0,0,0,226,119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 图层 1
	this.instance_2 = new lib.元件172("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_2.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26.2,773,1276.2);


(lib.元件163 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 161
	this.instance = new lib.元件161("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(338.5,352.5,1,1,0,0,0,336.5,127.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 元件 160
	this.instance_1 = new lib.元件160("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(339,45.5,1,1,0,0,0,217,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 元件 156
	this.instance_2 = new lib.元件156("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(366.9,251.2,0.224,0.224,0,0,0,136.4,183.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 元件 159
	this.instance_3 = new lib.元件159("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(349.9,291.2,0.224,0.224,0,0,0,172.7,309.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// 元件 155
	this.instance_4 = new lib.元件155("synched",46);
	this.instance_4.parent = this;
	this.instance_4.setTransform(344,412.4,0.123,0.123,0,0,0,551.7,554.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 补间 12
	this.instance_5 = new lib.补间12("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(337.5,227.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,675,487.6);


(lib.元件162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 93.png
	this.instance = new lib.元件166("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1037.4,-315.8,1.742,1.742,0,0,0,226.1,139);
	this.instance._off = true;

	this.instance_1 = new lib.元件169("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(464,237,1,1,0,0,0,226,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},54).to({state:[{t:this.instance_1}]},35).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true,regX:226,scaleX:1,scaleY:1,x:464,y:237},35).wait(6));

	// 94.png
	this.instance_2 = new lib.元件168("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1037.4,1414.6,1.742,1.742,0,0,0,226.1,94.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.元件171("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(524,866.5,1,1,0,0,0,226,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},54).to({state:[{t:this.instance_3}]},35).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({_off:true,regX:226,scaleX:1,scaleY:1,x:524,y:866.5},35).wait(6));

	// 92.png
	this.instance_4 = new lib.元件167("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-509.8,856.3,1.742,1.742,0,0,0,226,119.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.元件170("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(253,588.5,1,1,0,0,0,226,119.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},54).to({state:[{t:this.instance_5}]},35).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:253,y:588.5},35).wait(6));

	// 图层 1
	this.instance_6 = new lib.元件163("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(368.5,613.8,1,1,0,0,0,337.5,243.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:337.4,scaleX:1.94,scaleY:1.94,x:368.4,y:613.9,alpha:0},34).to({_off:true},1).wait(60));

	// 图层 2
	this.instance_7 = new lib.元件164("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({startPosition:0},0).to({alpha:0},30).to({_off:true},1).wait(40));

	// 图层 3
	this.instance_8 = new lib.元件165("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1250);


(lib.元件119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 13
	this.instance = new lib.元件222();
	this.instance.parent = this;
	this.instance.setTransform(310.5,468,1,1,0,0,0,221.5,32);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).to({alpha:1},11).to({_off:true},98).wait(65));

	// 图层 12
	this.instance_1 = new lib.元件223();
	this.instance_1.parent = this;
	this.instance_1.setTransform(237.5,397,1,1,0,0,0,148.5,32);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({alpha:1},11).to({_off:true},116).wait(65));

	// 图层 11
	this.instance_2 = new lib.元件224();
	this.instance_2.parent = this;
	this.instance_2.setTransform(292,330,1,1,0,0,0,203,32);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({alpha:1},11).to({_off:true},134).wait(65));

	// 图层 10
	this.instance_3 = new lib.元件225();
	this.instance_3.parent = this;
	this.instance_3.setTransform(164,266,1,1,0,0,0,75,32);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({y:264,alpha:1},11).to({_off:true},150).wait(65));

	// 图层 4
	this.instance_4 = new lib.元件123();
	this.instance_4.parent = this;
	this.instance_4.setTransform(374,568,1,1,0,0,0,244,532);
	this.instance_4.alpha = 0.328;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({scaleX:3.32,scaleY:3.32,x:605.2,y:-114},44).to({_off:true},19).wait(2));

	// 图层 5
	this.instance_5 = new lib.元件125();
	this.instance_5.parent = this;
	this.instance_5.setTransform(266.5,400.5,1,1,0,0,0,266.5,400.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(180).to({scaleX:3.32,scaleY:3.32,x:248,y:-670.5},44).to({_off:true},19).wait(2));

	// 图层 7
	this.instance_6 = new lib._3_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(124,-102,1,1,0,0,0,55,52);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},225).wait(20));

	// 图层 2
	this.instance_7 = new lib.补间7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(433,950);

	this.instance_8 = new lib.补间8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(369,950);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,x:369},159).wait(86));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},159).wait(21).to({startPosition:0},0).to({scaleX:3.32,scaleY:3.32,x:588.6,y:1155.2},44).to({_off:true},19).wait(2));

	// 图层 3
	this.instance_9 = new lib.元件120();
	this.instance_9.parent = this;
	this.instance_9.setTransform(307.1,816.5,1,1,0,0,0,150.5,294.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:329.5},159).wait(21).to({scaleX:3.32,scaleY:3.32,x:457.3,y:711.5},44).to({_off:true},19).wait(2));

	// 图层 8
	this.instance_10 = new lib.元件120();
	this.instance_10.parent = this;
	this.instance_10.setTransform(329.5,816.5,1,1,0,0,0,150.5,294.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(159).to({_off:false},0).to({alpha:1},21).to({scaleX:3.32,scaleY:3.32,x:457.3,y:711.5},44).to({_off:true},19).wait(2));

	// 图层 6
	this.instance_11 = new lib.元件130();
	this.instance_11.parent = this;
	this.instance_11.setTransform(864,243.5,1,1,0,0,0,42,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},225).wait(20));

	// 图层 1
	this.instance_12 = new lib.P9();
	this.instance_12.parent = this;

	this.instance_13 = new lib.元件184();
	this.instance_13.parent = this;
	this.instance_13.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},180).to({state:[{t:this.instance_13}]},44).to({state:[{t:this.instance_13}]},5).to({state:[]},14).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(180).to({_off:false},0).to({scaleX:3.32,scaleY:3.32,x:608.5,y:75.4},44).to({alpha:0},5).to({_off:true},14).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-330,906,1580);


(lib.元件113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件117();
	this.instance.parent = this;
	this.instance.setTransform(392.5,730.9,0.356,0.356,0,0,0,60.6,82.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({alpha:1},20).to({scaleX:5.08,scaleY:5.08,x:522.8,y:749.9},39).to({scaleX:17.18,scaleY:17.18,x:569.6,y:1226.8},13).to({alpha:0},20).wait(1));

	// 图层 11
	this.instance_1 = new lib.元件221();
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.5,593,1,1,0,0,0,221.5,32);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({y:565,alpha:1},11).to({_off:true},44).wait(72));

	// 图层 7
	this.instance_2 = new lib.元件220();
	this.instance_2.parent = this;
	this.instance_2.setTransform(379.5,525,1,1,0,0,0,166.5,32);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({y:497,alpha:1},11).to({_off:true},62).wait(72));

	// 图层 10
	this.instance_3 = new lib.元件219();
	this.instance_3.parent = this;
	this.instance_3.setTransform(379.5,451,1,1,0,0,0,166.5,32);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({y:423,alpha:1},11).to({_off:true},81).wait(72));

	// 图层 6
	this.instance_4 = new lib.元件218();
	this.instance_4.parent = this;
	this.instance_4.setTransform(377,383,1,1,0,0,0,57,32);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:355,alpha:1},11).to({_off:true},98).wait(72));

	// 图层 3
	this.instance_5 = new lib.元件115();
	this.instance_5.parent = this;
	this.instance_5.setTransform(795.3,-35.2,1,1,0,0,0,34.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},118).wait(72));

	// 图层 2
	this.instance_6 = new lib.补间6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(375,917.8,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(117).to({startPosition:0},0).to({scaleX:5.4,scaleY:5.4,y:2371},52).to({_off:true},1).wait(20));

	// 图层 1
	this.instance_7 = new lib.元件110();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(117).to({scaleX:6.61,scaleY:6.61,x:375.1,y:-36.2},37).to({scaleX:9.31,scaleY:9.31,y:-354.6},15).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-221.2,829.8,1471.2);


(lib.元件109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件94();
	this.instance.parent = this;
	this.instance.setTransform(695,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件109, new cjs.Rectangle(0,0,1390,1250), null);


(lib.元件93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.补间5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(273.5,878.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.补间6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,917.8,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},90).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},25).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({_off:false},0).to({alpha:1},30).to({_off:true,scaleX:0.58,scaleY:0.58,x:375,y:917.8},25).wait(1));

	// 图层 2
	this.instance_2 = new lib.元件98();
	this.instance_2.parent = this;
	this.instance_2.setTransform(372.5,1250,1,1,0,0,0,372.5,933);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},24).to({scaleX:1.81,scaleY:1.81,x:671.3,y:1755.6},66).to({alpha:0},30).to({_off:true},1).wait(25));

	// 图层 1
	this.instance_3 = new lib.元件109();
	this.instance_3.parent = this;
	this.instance_3.setTransform(375,625,1,1,0,0,0,695,625);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},24).to({scaleX:1.81,scaleY:1.81,x:675.8},66).to({alpha:0},30).to({_off:true},1).wait(25));

	// 图层 5
	this.instance_4 = new lib.元件110();
	this.instance_4.parent = this;
	this.instance_4.setTransform(275.9,557.8,1.401,1.401,0,0,0,375,625);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).wait(30).to({scaleX:1,scaleY:1,x:375,y:625},25).wait(1));

	// 图层 4
	this.instance_5 = new lib.p7();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},91).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,0,1390,1250);


(lib.元件69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.instance = new lib.元件68();
	this.instance.parent = this;
	this.instance.setTransform(378,1094,1,1,0,0,0,283,37);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(39));

	// 图层 5
	this.instance_1 = new lib.元件215();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(39));

	// 图层 6
	this.instance_2 = new lib.元件57();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,1252);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件42();
	this.instance.parent = this;
	this.instance.setTransform(-138.7,435.2,0.904,0.904,0,0,0,175.3,431.3);

	this.instance_1 = new lib.元件43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-763.1,490.6,1.033,1.033,0,0,0,164.1,405.1);

	this.instance_2 = new lib.元件42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-455.8,466.2,0.904,0.904,0,0,0,175.3,431.3);

	this.instance_3 = new lib.元件44();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1069.2,486.9,1.037,1.037,0,0,0,159.4,354.5);

	this.instance_4 = new lib._30();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1180.7,92,0.782,0.782,0,0,180);

	this.instance_5 = new lib.元件42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1560.9,520.2,0.867,0.867,0,0,0,175.3,431.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 1
	this.instance_6 = new lib.元件43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(345.6,398.5,0.934,0.934,0,0,0,164.1,405);

	this.instance_7 = new lib.元件38();
	this.instance_7.parent = this;
	this.instance_7.setTransform(517.5,205.7,0.51,0.51,0,0,0,334.6,373.6);

	this.instance_8 = new lib.元件42();
	this.instance_8.parent = this;
	this.instance_8.setTransform(801.7,411,0.907,0.907,0,0,0,175.5,431);

	this.instance_9 = new lib.元件43();
	this.instance_9.parent = this;
	this.instance_9.setTransform(153.3,452.5,0.934,0.934,0,0,0,164.1,405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// 图层 3
	this.instance_10 = new lib._30();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1393.3,-25,0.782,0.782,0,0,180);

	this.instance_11 = new lib.元件42();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1012.6,403.5,0.867,0.867,0,0,0,175.3,431.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// 图层 4
	this.instance_12 = new lib.元件43();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1716.9,410.6,1.033,1.033,0,0,0,164.1,405.1);

	this.instance_13 = new lib.元件44();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1410.8,406.9,1.037,1.037,0,0,0,159.4,354.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件52, new cjs.Rectangle(-1712.9,-25,3599.1,934), null);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件45();
	this.instance.parent = this;
	this.instance.setTransform(1077.4,333.5,1,1,0,0,0,372.3,333.5);

	this.instance_1 = new lib.元件45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(372.3,333.5,1,1,0,0,0,372.3,333.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib.元件45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-260.6,333.5,1,1,0,0,0,372.3,333.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(-632.9,0,2082.5,667), null);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件43();
	this.instance.parent = this;
	this.instance.setTransform(2834.6,560.3,1.189,1.189,0,0,180,164,405.1);

	this.instance_1 = new lib.元件44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2621.5,479.2,1.227,1.227,0,0,180,159.3,354.5);

	this.instance_2 = new lib.元件46();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2018.6,520.8,1,1,0,0,0,588.5,520.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 1
	this.instance_3 = new lib.元件43();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1404.5,560.3,1.189,1.189,0,0,180,164,405.1);

	this.instance_4 = new lib.元件44();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1191.4,479.2,1.227,1.227,0,0,180,159.3,354.5);

	this.instance_5 = new lib.元件46();
	this.instance_5.parent = this;
	this.instance_5.setTransform(588.5,520.8,1,1,0,0,0,588.5,520.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件50, new cjs.Rectangle(0,0,3029.6,1041.6), null);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件44();
	this.instance.parent = this;
	this.instance.setTransform(1157.3,195.7,0.535,0.535,0,0,0,159.4,354.5);

	this.instance_1 = new lib._30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1099.7,-8,0.404,0.404,0,0,180);

	this.instance_2 = new lib.元件42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(903.6,212.9,0.447,0.447,0,0,0,175.3,431.2);

	this.instance_3 = new lib._30();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.6,24,0.404,0.404,0,0,180);

	this.instance_4 = new lib.元件42();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-145.9,244.9,0.447,0.447,0,0,0,175.3,431.2);

	this.instance_5 = new lib.元件47();
	this.instance_5.parent = this;
	this.instance_5.setTransform(446.9,222.7,1,1,0,0,0,446.9,222.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(-224.3,-8,1466.9,453.5), null);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件42();
	this.instance.parent = this;
	this.instance.setTransform(-1061,161.3,0.374,0.374,0,0,0,175.3,431.3);

	this.instance_1 = new lib.元件43();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1157.2,184.3,0.428,0.428,0,0,0,164.1,405.2);

	this.instance_2 = new lib.元件44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1283.8,182.7,0.429,0.429,0,0,0,159.3,354.5);

	this.instance_3 = new lib.元件47();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-654.9,178.7,0.802,0.802,0,0,0,446.9,222.7);

	this.instance_4 = new lib.元件42();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47.5,161.3,0.374,0.374,0,0,0,175.3,431.3);

	this.instance_5 = new lib.元件43();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-143.7,184.3,0.428,0.428,0,0,0,164.1,405.2);

	this.instance_6 = new lib.元件44();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-270.4,182.7,0.429,0.429,0,0,0,159.3,354.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件48, new cjs.Rectangle(-1352.2,0,1370.4,357.4), null);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件179();
	this.instance.parent = this;
	this.instance.setTransform(375.5,132,1,1,0,0,0,98.5,33);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.元件180();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375,148,1,1,0,0,0,246,33);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.元件181();
	this.instance_2.parent = this;
	this.instance_2.setTransform(374,110.5,1,1,0,0,0,227,25.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},15).wait(46).to({alpha:0},15).to({_off:true},2).wait(323));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({alpha:1},13).wait(40).to({y:128,alpha:0},15).to({_off:true},1).wait(254));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(269).to({_off:false},0).to({y:130.5,alpha:1},21).wait(58).to({y:110.5,alpha:0},21).to({_off:true},1).wait(50));

	// 图层 3
	this.instance_3 = new lib.元件36();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,1250,1.5,1.5,0,0,0,0,238);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(61).to({regY:238.1,scaleX:1.15,scaleY:1.15,x:-216.3,y:1378.3},40).to({_off:true},1).wait(299));

	// 图层 9
	this.instance_4 = new lib.元件46();
	this.instance_4.parent = this;
	this.instance_4.setTransform(647.5,1239,1,1,0,0,0,588.5,520.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.元件50();
	this.instance_5.parent = this;
	this.instance_5.setTransform(417.2,1239.8,1,1,0,0,0,588.5,520.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).to({x:417.2,y:1239.8,alpha:1},34).to({_off:true},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(185).to({_off:false},0).to({x:297.2},45).to({regX:588.7,scaleX:0.42,scaleY:0.42,x:209,y:1072.7},52).to({x:118.9},77).to({regX:588.6,regY:521,x:110.9,alpha:0.98},20).to({_off:true},36).wait(5));

	// 图层 5
	this.instance_6 = new lib.元件43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-283.5,1139.1,1.729,1.729,0,0,0,164,405.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.元件52();
	this.instance_7.parent = this;
	this.instance_7.setTransform(400.8,754.4,1,1,0,0,0,480.4,415.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({x:-57.7,y:1153.2},21).to({regX:164.1,regY:405,scaleX:1.43,scaleY:1.43,x:134.7,y:1141.4},40).to({x:174.7},30).to({scaleX:0.93,scaleY:0.93,x:186,y:737.5},34).wait(1).to({x:266},45).to({_off:true,regX:480.4,regY:415.4,scaleX:1,scaleY:1,x:400.8,y:754.4},1).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(230).to({_off:false},1).to({regX:480.5,scaleX:0.42,scaleY:0.42,x:514.5,y:867.5},51).to({x:588.6},77).to({regX:480.6,regY:415.6,x:596.7,y:867.6,alpha:0.969},20).to({x:604.7,alpha:0},34).to({_off:true},1).wait(6));

	// 主
	this.instance_8 = new lib.元件38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-334.5,876.5,1,1,0,0,0,334.5,373.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:20.1},19).to({x:218.3},61).to({regX:334.4,regY:373.6,scaleX:0.78,scaleY:0.78,x:330.4,y:876.6},40).to({x:370.4},30).to({regX:334.6,scaleX:0.51,scaleY:0.51,x:357.9,y:544.7},34).wait(1).to({x:437.9},45).to({_off:true},1).wait(189));

	// 图层 4
	this.instance_9 = new lib.元件42();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1028.3,1156.2,1.585,1.585,0,0,0,175.6,431.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({x:705.5},20).to({x:692.6},1).to({regX:175.5,regY:431,scaleX:1.39,scaleY:1.39,x:640.3,y:1160.6},40).to({x:680.3},30).to({scaleX:0.91,scaleY:0.91,x:642.1,y:750},34).wait(1).to({x:722.1},45).to({_off:true},1).wait(189));

	// 图层 7
	this.instance_10 = new lib.元件43();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.3,791.5,0.934,0.934,0,0,0,164.1,405);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150).to({_off:false},0).to({alpha:1},34).wait(1).to({x:73.7},45).to({_off:true},1).wait(189));

	// 图层 8
	this.instance_11 = new lib.元件45();
	this.instance_11.parent = this;
	this.instance_11.setTransform(409.2,527.9,1,1,0,0,0,372.3,333.5);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.instance_12 = new lib.元件51();
	this.instance_12.parent = this;
	this.instance_12.setTransform(309.2,527.9,1,1,0,0,0,372.3,333.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150).to({_off:false},0).to({x:309.2,alpha:1},34).to({_off:true},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(185).to({_off:false},0).to({x:229.2},45).to({regX:372.4,scaleX:0.42,scaleY:0.42,x:372.1,y:771.7},52).to({x:286},77).to({regX:372.5,regY:333.6,x:278,alpha:0.961},20).to({x:270,alpha:0},29).to({_off:true},1).wait(11));

	// 图层 10
	this.instance_13 = new lib.元件47();
	this.instance_13.parent = this;
	this.instance_13.setTransform(345,222.7,1,1,0,0,0,446.9,222.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.instance_14 = new lib.元件49();
	this.instance_14.parent = this;
	this.instance_14.setTransform(405,222.7,1,1,0,0,0,446.9,222.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150).to({_off:false},0).to({x:405,alpha:1},34).to({_off:true},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(185).to({_off:false},0).to({x:485},45).to({scaleX:0.42,scaleY:0.42,x:294.6,y:642.7},52).to({x:344.6,y:646.7},77).to({regX:447.1,regY:222.8,x:352.7,alpha:0.961},20).to({regX:446.9,regY:222.7,x:344.6,alpha:0},24).to({_off:true},1).wait(16));

	// 图层 11
	this.instance_15 = new lib.元件47();
	this.instance_15.parent = this;
	this.instance_15.setTransform(325.1,-97.3,0.802,0.802,0,0,0,446.9,222.7);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.instance_16 = new lib.元件48();
	this.instance_16.parent = this;
	this.instance_16.setTransform(694.2,555.2,0.423,0.423,0,0,0,358.7,178.7);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(150).to({_off:false},0).to({x:385.1},34).to({_off:true},1).wait(235));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(253).to({_off:false},0).to({x:734.2,alpha:1},29).to({x:764.2},77).to({regX:358.8,regY:178.8,x:772.2,alpha:0.949},20).to({x:784.2,alpha:0},19).to({_off:true},1).wait(21));

	// 图层 12
	this.instance_17 = new lib.元件53();
	this.instance_17.parent = this;
	this.instance_17.setTransform(434.5,476,1,1,0,0,0,226.5,169);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(269).to({_off:false},0).to({alpha:1},28).wait(62).to({alpha:0.949},20).to({alpha:0},19).to({_off:true},1).wait(21));

	// 图层 13
	this.instance_18 = new lib.元件54();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-132.2,442.5,1,1,0,0,0,115.5,37.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(282).to({_off:false},0).to({x:336.5},77).to({alpha:0.949},20).to({alpha:0},19).to({_off:true},1).wait(21));

	// 图层 1
	this.instance_19 = new lib.p201();
	this.instance_19.parent = this;

	this.instance_20 = new lib.元件55();
	this.instance_20.parent = this;
	this.instance_20.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_20}]},399).to({state:[]},16).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-614,0,1364,1864);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 8
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(181,97.9,0.078,0.078,0,0,180,175,519.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 元件 8
	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153.6,97.9,0.078,0.078,0,0,0,176.3,519.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 7.png
	this.instance_2 = new lib.元件14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.9,133.1,0.786,0.786,0,0,0,46.9,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 10.png
	this.instance_3 = new lib._10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.752,0.752);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(0,0,205.7,260.3), null);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 8
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(226.1,122.3,0.098,0.098,0,0,180,174.3,519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 元件 8
	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(191.9,122.3,0.098,0.098,0,0,0,175.9,519);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// 7.png
	this.instance_2 = new lib._8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 10.png
	this.instance_3 = new lib._10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-6,0.94,0.94);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件18, new cjs.Rectangle(0,-6,248,325.2), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(142.3,83.7,0.067,0.067,0,0,180,175,518.9);

	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119,83.7,0.067,0.067,0,0,0,176.5,518.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib._7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(102,63,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 1
	this.instance_3 = new lib._12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18,-8,1.032,1.032);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(-18,-8,177.7,234.2), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(231.6,131.1,0.104,0.104,0,0,180,174.9,519);

	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195.2,131.1,0.104,0.104,0,0,0,175.9,519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib._6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(170,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 1
	this.instance_3 = new lib._11();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(0,0,258,348), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(240.6,130.1,0.104,0.104,0,0,180,174.9,519);

	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(204.2,130.1,0.104,0.104,0,0,0,175.9,519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib._7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(178,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 1
	this.instance_3 = new lib._10();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件15, new cjs.Rectangle(0,0,266,346), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(220.6,132.6,0.104,0.104,0,0,180,174.9,519);

	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.2,132.6,0.104,0.104,0,0,0,175.9,519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 3
	this.instance_2 = new lib.元件14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.8,178.5,1,1,0,0,0,46.8,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 1
	this.instance_3 = new lib._12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-18,0,1.524,1.524);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(-18,0,269.6,346), null);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件8();
	this.instance.parent = this;
	this.instance.setTransform(195.9,111.7,0.103,0.103,0,0,180,174.8,518.4);

	this.instance_1 = new lib.元件8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.2,111.7,0.103,0.103,0,180,0,175.7,518.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层 2
	this.instance_2 = new lib._9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// 图层 1
	this.instance_3 = new lib._13();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,218,290), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 进场
	this.instance = new lib.元件5();
	this.instance.parent = this;
	this.instance.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({_off:true},1).wait(290));

	// 文案
	this.instance_1 = new lib.元件9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(378,106.5,1,1,0,0,0,89,33.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.元件22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(384,115,1,1,0,0,0,213,33);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.元件198("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(358.5,137.5,1,1,0,0,0,181.5,27.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},12).wait(34).to({alpha:0},15).to({_off:true},1).wait(229));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({y:113,alpha:1},25).wait(40).to({alpha:0},21).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(230).to({_off:false},0).to({alpha:1},15).to({_off:true},43).wait(17));

	// 其他人物-遮挡
	this.instance_4 = new lib.元件16();
	this.instance_4.parent = this;
	this.instance_4.setTransform(412.2,1688.7,2.525,2.525,0,0,0,116.6,174.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(177).to({_off:false},0).to({regX:116.5,regY:174,scaleX:1,scaleY:1,x:361.5,y:1130},68).wait(43).to({_off:true},16).wait(1));

	// 其他人物-遮挡
	this.instance_5 = new lib.元件13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-214.2,1539.7,2.525,2.525,0,0,0,111.5,173.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177).to({_off:false},0).to({regY:173,scaleX:1,scaleY:1,x:113.5,y:1071},68).wait(43).to({_off:true},16).wait(1));

	// 父亲
	this.instance_6 = new lib.元件2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-428.8,777.6,1.622,1.622,0,0,0,323.6,824);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(60).to({regX:323.7,regY:824.3,scaleX:0.57,scaleY:0.57,x:269.1,y:655.4},45).wait(25).to({regY:824.4,scaleX:0.37,scaleY:0.37,x:227.3,y:920.1},47).to({regX:324.2,regY:824.9,scaleX:0.18,scaleY:0.18,x:304.7,y:805.8},68).wait(43).to({_off:true},16).wait(1));

	// 眼泪-右
	this.instance_7 = new lib.元件8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(700.4,28,1,1,0,0,180);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(46).to({regX:175.2,regY:518.5,x:525.2,y:546.5},0).to({regX:175.1,regY:518.7,scaleX:0.35,scaleY:0.35,x:591.3,y:599.4},45).wait(25).to({regX:175.2,regY:518.9,scaleX:0.23,scaleY:0.23,x:435.7,y:883.9},47).to({regX:174.8,regY:519.3,scaleX:0.11,scaleY:0.11,x:403.9,y:788.5},68).wait(43).to({_off:true},16).wait(1));

	// 眼泪-左
	this.instance_8 = new lib.元件8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(175.2,546.5,1,1,0,0,0,175.2,518.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(46).to({regX:175.6,regY:518.7,scaleX:0.35,scaleY:0.35,x:468.4,y:599.4},45).wait(25).to({regX:175.8,regY:518.9,scaleX:0.23,scaleY:0.23,x:356.3,y:883.9},47).to({regX:176.2,regY:519.3,scaleX:0.11,scaleY:0.11,x:366.1,y:788.5},68).wait(43).to({_off:true},16).wait(1));

	// 小男孩
	this.instance_9 = new lib.元件3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(374,988,1,1,0,0,0,450,750);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({regX:450.4,regY:750.5,scaleX:0.35,scaleY:0.35,x:538.2,y:754.5},45).wait(25).to({regY:750.6,scaleX:0.23,scaleY:0.23,x:401.4,y:984.2},47).to({regY:750.9,scaleX:0.11,scaleY:0.11,x:387.6,y:836.3},68).wait(43).to({_off:true},16).wait(1));

	// 影子
	this.instance_10 = new lib.元件10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-317.1,2026.2,2.95,2.95,0,0,0,299.9,140.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60).to({_off:false},0).to({regX:300,regY:140.5,scaleX:1,scaleY:1,x:300,y:1109.5},45).wait(25).to({regX:299.9,scaleX:0.65,scaleY:0.65,x:247.2,y:1213.9},47).to({regX:300.2,regY:140.8,scaleX:0.31,scaleY:0.31,x:314.3,y:945.6},68).wait(43).to({_off:true},16).wait(1));

	// 元件 16
	this.instance_11 = new lib.元件16();
	this.instance_11.parent = this;
	this.instance_11.setTransform(76.6,-460,1.763,1.763,0,0,0,116.6,174.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(130).to({_off:false},0).to({scaleX:0.95,scaleY:0.95,x:186,y:141.3,alpha:1},47).to({regX:116.5,scaleX:0.46,scaleY:0.46,x:287.5,y:416.7},68).wait(43).to({_off:true},16).wait(1));

	// 元件 16
	this.instance_12 = new lib.元件16();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-955.5,80.7,2.411,2.411,0,0,0,116.3,174.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(130).to({_off:false},0).to({scaleX:1.3,scaleY:1.3,x:-369.6,y:432.4,alpha:1},47).to({regX:116.5,regY:174.1,scaleX:0.63,scaleY:0.63,x:17.4,y:558.2},68).wait(43).to({_off:true},16).wait(1));

	// 元件 17
	this.instance_13 = new lib.元件17();
	this.instance_13.parent = this;
	this.instance_13.setTransform(332.1,74.9,3.821,3.821,0,0,0,80.5,110.8);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(130).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:323.5,y:429.3,alpha:1},47).to({regX:80.3,regY:110.7,scaleX:1,scaleY:1,x:354.3,y:556.7},68).wait(43).to({_off:true},16).wait(1));

	// 元件 12
	this.instance_14 = new lib.元件12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(816.8,-252.1,2.055,2.055,0,0,0,97.7,145.3);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(130).to({_off:false},0).to({scaleX:1.11,scaleY:1.11,x:584.4,y:253.2,alpha:1},47).to({regX:97.5,regY:145.1,scaleX:0.54,scaleY:0.54,x:481.2,y:471.1},68).wait(43).to({_off:true},16).wait(1));

	// 元件 18
	this.instance_15 = new lib.元件18();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-797.1,1071.4,3.821,3.821,0,0,0,124.9,162.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(130).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:-284.4,y:965.8,alpha:1},47).to({regX:125,regY:162.6,scaleX:1,scaleY:1,x:58.9,y:817.4},68).wait(43).to({_off:true},16).wait(1));

	// 元件 15
	this.instance_16 = new lib.元件15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(1138.7,1791.9,3.821,3.821,0,0,0,120.6,173.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(130).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:757.8,y:1353.6,alpha:1},47).to({regX:120.5,regY:173,scaleX:1,scaleY:1,x:565.5,y:1006},68).wait(43).to({_off:true},16).wait(1));

	// 元件 12
	this.instance_17 = new lib.元件12();
	this.instance_17.parent = this;
	this.instance_17.setTransform(848.3,679.8,3.821,3.821,0,0,0,97.6,145.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(130).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:601.4,y:755,alpha:1},47).to({regX:97.5,regY:145,scaleX:1,scaleY:1,x:489.5,y:715},68).wait(43).to({_off:true},16).wait(1));

	// 元件 19
	this.instance_18 = new lib.元件19();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-427.5,248.4,3.821,3.821,0,0,0,100,130.2);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(130).to({_off:false},0).to({scaleX:2.06,scaleY:2.06,x:-85.4,y:522.7,alpha:1},47).to({regX:100.1,scaleX:1,scaleY:1,x:155.6,y:602.2},68).wait(43).to({_off:true},16).wait(1));

	// 元件 15
	this.instance_19 = new lib.元件15();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1483.9,1016.9,2.874,2.874,0,0,0,120.7,173.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(130).to({_off:false},0).to({scaleX:1.55,scaleY:1.55,x:943.6,y:936.4,alpha:1},47).to({regY:173.1,scaleX:0.75,scaleY:0.75,x:655.9,y:803.3},68).wait(43).to({_off:true},16).wait(1));

	// 元件 15
	this.instance_20 = new lib.元件15();
	this.instance_20.parent = this;
	this.instance_20.setTransform(1366,180.2,2.233,2.233,0,0,0,120.7,173.3);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(130).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:880.1,y:485.9,alpha:1},47).to({regX:120.6,regY:173.1,scaleX:0.59,scaleY:0.59,x:625,y:584.2},68).wait(43).to({_off:true},16).wait(1));

	// BG
	this.instance_21 = new lib.元件11();
	this.instance_21.parent = this;
	this.instance_21.setTransform(378,1250,1,1,0,0,0,750,2500);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(60).to({scaleX:0.9,scaleY:0.9},45).wait(25).to({regX:749.9,scaleX:0.7,scaleY:0.7,x:376.5},47).to({scaleX:0.5,scaleY:0.5,x:375,y:1249.9},68).wait(43).to({_off:true},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-953.7,-1250,2713.8,3364.4);


// stage content:
(lib.独一无二 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{找回本我:1354,menu:1137,浇灭火焰:1138});

	// timeline functions:
	this.frame_0 = function() {
		root=this;
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_1137 = function() {
		this.stop();
	}
	this.frame_1353 = function() {
		this.stop();
	}
	this.frame_2676 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1136).call(this.frame_1137).wait(216).call(this.frame_1353).wait(1323).call(this.frame_2676).wait(1));

	// 标签
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(364.1,662.1);

	this.instance_1 = new lib.透明播放按钮copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(562.9,1107.6,0.313,0.147);

	this.instance_2 = new lib.透明播放按钮copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(204.4,1091.6,0.313,0.147);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(386.6,679,1,1,0,0,0,474.7,679);

	this.instance_4 = new lib.透明播放按钮copy5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(522.2,866.3,0.355,0.159);

	this.instance_5 = new lib.透明播放按钮copy3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(460.2,243.4,0.355,0.159);

	this.instance_6 = new lib.透明播放按钮copy4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(242.5,580.8,0.355,0.159);

	this.share = new lib.元件173();
	this.share.parent = this;
	this.share.setTransform(375,625,1,1,0,0,0,375,625);
	this.share.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_2},{t:this.instance_1}]},1135).to({state:[]},1).to({state:[{t:this.instance_3}]},215).to({state:[]},1).to({state:[{t:this.share},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},1321).wait(2));

	// 首页
	this.instance_7 = new lib.元件213();
	this.instance_7.parent = this;
	this.instance_7.setTransform(375,625,1,1,0,0,0,375,625);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},2).wait(2675));

	// Layer 1
	this.instance_8 = new lib.声音控制元件();
	this.instance_8.parent = this;
	this.instance_8.setTransform(669.4,77.5,1,1,0,0,0,33.5,31.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).wait(2675));

	// P1
	this.instance_9 = new lib.元件1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({_off:true},304).wait(2371));

	// P2
	this.instance_10 = new lib.元件24("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(288).to({_off:false},0).to({_off:true},332).wait(2057));

	// P3
	this.instance_11 = new lib.元件37("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(601).to({_off:false},0).to({_off:true},415).wait(1661));

	// P4
	this.instance_12 = new lib.元件56("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(991).to({_off:false},0).to({_off:true},146).wait(1540));

	// stop帧
	this.instance_13 = new lib.元件69("synched",0);
	this.instance_13.parent = this;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1137).to({_off:false},0).to({_off:true},1).wait(1539));

	// P5
	this.instance_14 = new lib.元件71("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1138).to({_off:false},0).to({_off:true},216).wait(1323));

	// P6
	this.instance_15 = new lib.元件93("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1354).to({_off:false},0).to({_off:true},145).wait(1178));

	// P7
	this.instance_16 = new lib.元件113("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1499).to({_off:false},0).to({_off:true},190).wait(988));

	// P8
	this.instance_17 = new lib.元件119("synched",0);
	this.instance_17.parent = this;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1670).to({_off:false},0).to({_off:true},243).wait(764));

	// P9
	this.instance_18 = new lib.元件133("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1893).to({_off:false},0).to({_off:true},144).wait(640));

	// P10
	this.instance_19 = new lib.元件145("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(353,625,1,1,0,0,0,397,625);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2037).to({_off:false},0).to({_off:true},143).wait(497));

	// p11
	this.instance_20 = new lib.元件146("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(397,625,1,1,0,0,0,397,625);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2179).to({_off:false},0).to({_off:true},403).wait(95));

	// P12
	this.instance_21 = new lib.元件162("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(375,625,1,1,0,0,0,375,625);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2582).to({_off:false},0).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267,573,944.3,1428.4);
// library properties:
lib.properties = {
	width: 750,
	height: 1250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	 manifest: [
            {src:"//2016.ithinky.com/suning171019/images/_1.png", id:"_1"},
            {src:"//2016.ithinky.com/suning171019/images/_22.jpg", id:"_22"},
            {src:"//2016.ithinky.com/suning171019/images/_4.jpg", id:"_4"},
            {src:"//2016.ithinky.com/suning171019/images/_69.png", id:"_69"},
            {src:"//2016.ithinky.com/suning171019/images/_75.png", id:"_75"},
            {src:"//2016.ithinky.com/suning171019/images/_88.png", id:"_88"},
            {src:"//2016.ithinky.com/suning171019/images/loading.jpg", id:"loading"},
            {src:"//2016.ithinky.com/suning171019/images/P1.jpg", id:"P1"},
            {src:"//2016.ithinky.com/suning171019/images/p1.png", id:"p1"},
            {src:"//2016.ithinky.com/suning171019/images/P10.jpg", id:"P10"},
            {src:"//2016.ithinky.com/suning171019/images/p11.jpg", id:"p11"},
            {src:"//2016.ithinky.com/suning171019/images/p12.jpg", id:"p12"},
            {src:"//2016.ithinky.com/suning171019/images/p13.jpg", id:"p13"},
            {src:"//2016.ithinky.com/suning171019/images/p201.jpg", id:"p201"},
            {src:"//2016.ithinky.com/suning171019/images/p2.jpg", id:"p2"},
            {src:"//2016.ithinky.com/suning171019/images/p2_1.png", id:"p2_1"},
            {src:"//2016.ithinky.com/suning171019/images/p3.png", id:"p3"},
            {src:"//2016.ithinky.com/suning171019/images/p41.jpg", id:"p41"},
            {src:"//2016.ithinky.com/suning171019/images/p6.jpg", id:"p6"},
            {src:"//2016.ithinky.com/suning171019/images/p7.jpg", id:"p7"},
            {src:"//2016.ithinky.com/suning171019/images/p8.png", id:"p8"},
            {src:"//2016.ithinky.com/suning171019/images/P9.jpg", id:"P9"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_.png", id:"H5_atlas_P_"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_2.png", id:"H5_atlas_P_2"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_3.png", id:"H5_atlas_P_3"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_4.png", id:"H5_atlas_P_4"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_5.png", id:"H5_atlas_P_5"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_6.png", id:"H5_atlas_P_6"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_7.png", id:"H5_atlas_P_7"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_8.png", id:"H5_atlas_P_8"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_9.png", id:"H5_atlas_P_9"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_10.png", id:"H5_atlas_P_10"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_11.png", id:"H5_atlas_P_11"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_12.png", id:"H5_atlas_P_12"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_13.png", id:"H5_atlas_P_13"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_14.png", id:"H5_atlas_P_14"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_15.png", id:"H5_atlas_P_15"},
            {src:"//2016.ithinky.com/suning171019/images/H5_atlas_P_16.png", id:"H5_atlas_P_16"}
        ],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;