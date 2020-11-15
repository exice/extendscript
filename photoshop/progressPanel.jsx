#target photoshop

//処理中レイヤー名を表示するウィンドウ
function progressPanel(){
    var _pal = new Window("palette","スクリプト処理中",[100,140,420,200]);
    _pal.grp = _pal.add("group",[10,10,310,50]);
    _pal.grp.sText = _pal.grp.add("statictext",[0,0,300,15], "処理開始");
    _pal.show();
    _pal.count = 0;
    _pal.name = "";
    
    //表示テキストupdate
    _pal.update = function(name){
        _pal.name = name;
        _pal.count++;
        try {
            //updateProgress;
            _pal.grp.remove(_pal.grp.sText); // 処理進捗(プログレス)バー用の文字列を一度削除
            var _txt = "処理中: " + _pal.count + "/ " + _pal.name;
            _pal.grp.sText = _pal.grp.add("statictext",[0,0,300,15], _txt); // 処理進捗文字列更新
        }
        catch(x_x){
          $.writeln([
            x_x.message,
            x_x.line,
            $.stack,
            ].join("\n"));
        }
    }
    return _pal;
}

//how to use;
var lay = app.activeDocument.layers;
var layersName = [];

//宣言
var pal = progressPanel();

//全レイヤー名取得
searchName(lay);
function searchName(layer){
    for (var i = 0; i < layer.length; i++) {
        l = layer[i];
        layersName.push(l.name);
        //レイヤー名入力
        pal.update(l.name);
        if(l.layers){
            searchName(l.layers);
        }
    }
}
alert(layersName.join("\n"));

