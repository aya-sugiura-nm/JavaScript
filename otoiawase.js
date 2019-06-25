window.onload = function(){
  document.getElementById('btn').onclick = function(){
    //現在挿入されているリストを全て削除
    while(document.getElementById('errorMessages').children.length > 0){
      document.getElementById('errorMessages').removeChild(document.getElementById('errorMessages').children[0]);
    }
    //名前のバリデーション
    let familyName = document.getElementById('frm').familyName.value;
    if(familyName == ''){
      newErrorMessageElement = '名前(氏)は必須項目です';
      addErrorMessage(newErrorMessageElement);
    }
    if(!checkCharTypeZenkaku(familyName)){
      newErrorMessageElement = '名前(氏)は全角のみの入力です';
      addErrorMessage(newErrorMessageElement);
    }
    if(familyName.length > 50){
      newErrorMessageElement = '名前(氏)は全角50文字以内で入力してください';
      addErrorMessage(newErrorMessageElement);
    }

    let firstName = document.getElementById('frm').firstName.value;
    if(firstName == ''){
      newErrorMessageElement = '名前(名)は必須項目です';
      addErrorMessage(newErrorMessageElement);
    }
    if(!checkCharTypeZenkaku(firstName)){
      newErrorMessageElement = '名前(名)は全角のみの入力です';
      addErrorMessage(newErrorMessageElement);
    }
    if(firstName.length > 50){
      newErrorMessageElement = '名前(名)は全角50文字以内で入力してください';
      addErrorMessage(newErrorMessageElement);
    }

    let kanaFamilyName = document.getElementById('frm').kanaFamilyName.value;
    if(kanaFamilyName == ''){
      newErrorMessageElement = 'フリガナ(氏)は必須項目です';
      addErrorMessage(newErrorMessageElement);
    }
    if(!checkCharTypeZenkaku(kanaFamilyName)){
      newErrorMessageElement = 'フリガナ(氏)は全角のみの入力です';
      addErrorMessage(newErrorMessageElement);
    }
    if(kanaFamilyName.length > 100){
      newErrorMessageElement = 'フリガナ(氏)は全角100文字以内で入力してください';
      addErrorMessage(newErrorMessageElement);
    }

    let kanaFirstName = document.getElementById('frm').kanaFirstName.value;
    if(kanaFirstName == ''){
      newErrorMessageElement = 'フリガナ(名)は必須項目です';
      addErrorMessage(newErrorMessageElement);
    }
    if(!checkCharTypeZenkaku(kanaFirstName)){
      newErrorMessageElement = 'フリガナ(名)は全角のみの入力です';
      addErrorMessage(newErrorMessageElement);
    }
    if(kanaFirstName.length > 100){
      newErrorMessageElement = 'フリガナ(名)は全角100文字以内で入力してください';
      addErrorMessage(newErrorMessageElement);
    }

    //メールアドレス
    let mail = document.getElementById('frm').mail.value;
    if(mail == ''){
      newErrorMessageElement = 'メールアドレスは必須項目です';
      addErrorMessage(newErrorMessageElement);
    }else if(mail != ''){
      if(!mail.match(/.+@.+\..+/)){
        newErrorMessageElement = 'メールアドレスの形式が不適切です。';
        addErrorMessage(newErrorMessageElement);
      }
    }

    //お問い合わせカテゴリ
    let category = document.getElementById('frm').category.value;
    if(category == ''){
      newErrorMessageElement = 'お問い合わせカテゴリを選択してください';
      addErrorMessage(newErrorMessageElement);
    }
    if(category == 3){
      if(document.getElementById('frm').address.value == ''){
        window.alert("採用についてが選択されました。住所を入力してください");
        document.getElementById('address').style.visibility = 'visible'
        newErrorMessageElement = '住所は必須項目です';
        addErrorMessage(newErrorMessageElement);
      }
    }

    //郵便番号
    let postNumber = document.getElementById('frm').postNumber.value;
    if(postNumber != ''){
      if(!checkCharTypeNumeric(postNumber) || postNumber.length != 7){
        newErrorMessageElement = '郵便番号は半角数字7桁で入力してください(ハイフン無し)';
        addErrorMessage(newErrorMessageElement);
      }
    }

    //住所
    let address = document.getElementById('frm').address.value;
    if(address.length > 100){
      newErrorMessageElement = '住所は100文字以内で入力してください';
      addErrorMessage(newErrorMessageElement);
    }

    //お問い合わせ内容
    let content = document.getElementById('frm').content.value;
    if(content == ''){
      newErrorMessageElement = 'お問い合わせ内容は必須項目です';
      addErrorMessage(newErrorMessageElement);
    }else if(content.length > 1000){
      newErrorMessageElement = 'お問い合わせ内容は1000文字以内で入力してください';
      addErrorMessage(newErrorMessageElement);
    }
  };

  //全て全角ならTrueを返すメソッド
  function checkCharTypeZenkaku(input){
    for(let i = 0; i < input.length; i++){
      if(!input.charAt(i).match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
        return false;
      }
    }
    return true
  }
  //半角数字ならTrueを返すメソッド
  function checkCharTypeNumeric(input){
    for(let i = 0; i < input.length; i++){
      if(!input.charAt(i).match(/^[0-9]+$/)){
        return false;
      }
    }
    return true
  }
  //指定した文字をエラーメッセージとして追加するメソッド
  function addErrorMessage(message){
    let errorMessages = document.getElementsByTagName('ul');
    let newErrorMessageElement = document.createElement('li');
    newErrorMessageElement.innerHTML = message;
    errorMessages[0].appendChild(newErrorMessageElement);
  }
};
