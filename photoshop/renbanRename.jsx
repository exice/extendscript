//子レイヤーのレイヤー名を「親レイヤーフォルダ名＋連番＋拡張子」にする
#target photoshop

var lay = app.activeDocument.activeLayer;

//拡張指定用
const ext = ".png";

if (lay.typename == "LayerSet"){
    main();
}else{
    alert("レイヤーフォルダを選択してください");
}

function main(){
    var layers = lay.layers;
    var parName = lay.name;
    //逆順処理
    var count = layers.length;
    for (var i = 0; i < layers.length; i++){
        var name = parName + '_';
        if (count < 10){
            name += '0';
        } 
        name += count + ext;
        layers[i].name = name;
        count--;
    }
}