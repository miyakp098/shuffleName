document.addEventListener('DOMContentLoaded', (event) => {
    //名前ボックスの追加
    const button = document.getElementById('addButton');
    button.addEventListener('click', addTextBox); 

    //名前ボックスの削除
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', deleteTextBox);
    
    //名前のシャッフル
    const shuffleButton = document.getElementById('shuffleButton');
    shuffleButton.addEventListener('click', shuffleTextBox);

});

//テキストボックスを追加する関数
function addTextBox(){
    // コンテナ要素を取得
    const container = document.getElementById('container');
    // テキストボックスを作成
    const textBox = document.createElement('input');
    // 入力ボックスのタイプをテキストに変更
    textBox.type = 'text';
    textBox.placeholder = '名前を入力';
    // コンテナに新しいテキストボックスを追加
    container.appendChild(textBox);
}

function deleteTextBox() {
    // コンテナ要素を取得
    const container = document.getElementById('container');
    //inputタグの入力ボックスを取得
    const testBoxes = container.getElementsByTagName('input');

    //最後の追加されたテキストボックスを削除
    if (testBoxes.length > 0) {
        container.removeChild(testBoxes[testBoxes.length - 1]);
    }
}

function shuffleTextBox() {
    // コンテナ要素を取得
    const container = document.getElementById('container');
    // テキストボックスのすべての input 要素を取得
    const testBoxes = container.getElementsByTagName('input');
    
    // 入力ボックスの値を取得
    let values = [];
    for (let textBox of testBoxes) {
        values.push(textBox.value);
    }

    // 値をシャッフル
    for (let i = values.length - 1; i > 0; i--) {
        //0〜1未満の範囲で数値をランダムに取得,
        // i+1」の値を掛けることで、0〜5未満（未満なので0〜4の間）の浮動小数点数を取得
        // ,Math.floorメソッドを使って小数点以下を切り捨て
        const j = Math.floor(Math.random() * (i + 1));

        // 要素の並び替え
        [values[i], values[j]] = [values[j], values[i]];
    }

    // シャッフルされた値を再びテキストボックスに割り当て
    for (let i = 0; i < testBoxes.length; i++) {
        testBoxes[i].value = values[i];
    }

}