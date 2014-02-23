/* 写真のタグを格納しているクラスを取り出す */
var tagNode = document.getElementsByClassName('meshi_photo_tags');
//console.log(tagNode);

/* クラスを指定する */
var tagObject = tagNode.item(0);
//console.log(tagObject);

/* <a>タグ要素を抽出する -> タグ以外のものを取り除く的なー？ちょーナウーい */
var Tags = tagObject.getElementsByTagName('a');
//console.log(Tags);

/* 王道を往く、文字列で抜く */
//console.log(Tags.item(0).firstChild.nodeValue);

/* 寿司画像を選択 */
/* サイトレイアウト変わったらたぶんち～ん（笑） */
var sushi = window.document.images[0];

/* 寿司タグが含まれてたら実行しちゃうゾ */
var keyword = /寿司|すし/; 	// 正規表現
for ( var i=0; i<Tags.length; i++) {
	var str = Tags.item(i).firstChild.nodeValue;

	if (str.match(keyword)) {
		//画像を回転させるコード
		// ref:http://code.google.com/p/jqueryrotate/wiki/Documentation
		// ref:http://code.google.com/p/jqueryrotate/wiki/Examples
		// マウスオーバー時は回転、マウスアウト時は一時停止
		var angle=0;
		$(sushi).rotate({
			bind:{
				mouseover : function() {
					$(this).rotate({
					duration:1000000,
					//angle: 0,
					animateTo: 36000
					})
				},
				mouseout : function() {$(this).stopRotate()}
			}
		});

		// 画像回転コード 終わり
		break;	// 1個でも当てはまったらもう探さなくて良いよね
	}
}