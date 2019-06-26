window.onload = function(){
  document.getElementById('btn').onclick = function(){
    //現在挿入されているリストを全て削除
    deleteAllErrorMessages();

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
  };
  //半角数字ならTrueを返すメソッド
  function checkCharTypeNumeric(input){
    for(let i = 0; i < input.length; i++){
      if(!input.charAt(i).match(/^[0-9]+$/)){
        return false;
      }
    }
    return true
  };
  //エラーメッセージを全て削除する
  function deleteAllErrorMessages(){
    while(document.getElementById('errorMessages').children.length > 0){
      document.getElementById('errorMessages').removeChild(document.getElementById('errorMessages').children[0]);
    }
  };
  //指定した文字をエラーメッセージとして追加するメソッド
  function addErrorMessage(message){
    let errorMessages = document.getElementsByTagName('ul');
    let newErrorMessageElement = document.createElement('li');
    newErrorMessageElement.innerHTML = message;
    errorMessages[0].appendChild(newErrorMessageElement);
  };
};

//名前　動的チェック
function familyNameCheck($this){
  deleteErrorMessages('familyNameMessage');
  if($this.value == ''){
    let newErrorMessage = '名前(氏)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'familyNameMessage')
  }else{
    if(alertLength($this, 50) != null){
      let newErrorMessage = '名前(氏)は' + alertLength($this, 50);
      addErrorMessageWithId(newErrorMessage, 'familyNameMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = '名前(氏)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'familyNameMessage');
    }
  }
}
function firstNameCheck($this){
  deleteErrorMessages('firstNameMessage');
  if($this.value == ''){
    let newErrorMessage = '名前(名)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'firstNameMessage')
  }else{
    if(alertLength($this, 50) != null){
      let newErrorMessage = '名前(名)は' + alertLength($this, 50);
      addErrorMessageWithId(newErrorMessage, 'firstNameMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = '名前(名)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'firstNameMessage');
    }
  }
}
function kanaFamilyNameCheck($this){
  deleteErrorMessages('kanaFamilyNameMessage');
  if($this.value == ''){
    let newErrorMessage = 'フリガナ(氏)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'kanaFamilyNameMessage')
  }else{
    if(alertLength($this, 50) != null){
      let newErrorMessage = 'フリガナ(氏)は' + alertLength($this, 50);
      addErrorMessageWithId(newErrorMessage, 'kanaFamilyNameMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = 'フリガナ(氏)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'kanaFamilyNameMessage');
    }
  }
}
function kanaFirstNameCheck($this){
  deleteErrorMessages('kanaFirstNameMessage');
  if($this.value == ''){
    let newErrorMessage = 'フリガナ(名)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'kanaFirstNameMessage')
  }else{
    if(alertLength($this, 50) != null){
      let newErrorMessage = 'フリガナ(名)は' + alertLength($this, 50);
      addErrorMessageWithId(newErrorMessage, 'kanaFirstNameMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = 'フリガナ(名)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'kanaFirstNameMessage');
    }
  }
}
//メール　動的チェック
function alertMail($this){
  deleteErrorMessages('mailMessage');
  if(!$this.value.match(/.+@.+\..+/)){
    if($this.value == ''){
      newErrorMessage = 'メールアドレスを入力してください。';
    }else{
      newErrorMessage = 'メールアドレスの形式が不適切です。';
    }
    addErrorMessageWithId(newErrorMessage, 'mailMessage');
  }
}
//お問い合わせカテゴリ　動的チェック
function alertCategory($this){
  deleteErrorMessages('categoryMessage');
  if($this.value == ''){
    newErrorMessage = 'お問い合わせカテゴリを選択してください';
    addErrorMessageWithId(newErrorMessage, 'categoryMessage');
  }
  if($this.value == 3){
    window.alert("採用についてが選択されました。住所を入力してください");
    document.getElementById('address').style.visibility = 'visible'
  }else{
    document.getElementById('address').style.visibility = 'hidden'
    deleteErrorMessages('postNumberMessage');
    deleteErrorMessages('addressMessage');
  }
}
//郵便番号　動的チェック
function alertPostNumber($this){
  deleteErrorMessages('postNumberMessage');
  if($this.value == ''){
    newErrorMessage = '郵便番号は必須項目です';
    addErrorMessageWithId(newErrorMessage, 'postNumberMessage');
  }else{
    if(alertNumber($this) != null){
      newErrorMessage = '郵便番号は' + alertNumber($this);
      addErrorMessageWithId(newErrorMessage, 'postNumberMessage');
    }else if($this.value.length != 7){
      newErrorMessage = '郵便番号は半角数字7桁で入力してください';
      addErrorMessageWithId(newErrorMessage, 'postNumberMessage');
    }
  }
}
//住所　動的チェック
function alertAddress($this){
  deleteErrorMessages('addressMessage');
  if($this.value == ''){
    let newErrorMessage = '住所は必須項目です';
    addErrorMessageWithId(newErrorMessage, 'addressMessage');
  }else if(alertLength($this, 100) != null){
    let newErrorMessage = '住所は' + alertLength($this, 100);
    addErrorMessageWithId(newErrorMessage, 'addressMessage')
  }
}

//お問い合わせ内容　動的チェック
function alertContent($this){
  deleteErrorMessages('contentMessage');
  if(alertLength($this, 1000) != null){
    let newErrorMessage = 'お問い合わせ内容は' + alertLength($this, 1000);
    addErrorMessageWithId(newErrorMessage, 'contentMessage')
  }else if($this.value == ''){
    newErrorMessage = 'お問い合わせ内容は必須項目です';
    addErrorMessageWithId(newErrorMessage, 'contentMessage')
  }
}

//エラーメッセージを返すメソッド
//文字数チェック
function alertLength($this ,length){
  if($this.value.length > length ){
    return length + '文字以内で入力してください';
  }
  return null;
};
//全角チェック
function alertCharTypeZenkaku($this){
  for(let i = 0; i < $this.value.length; i++){
    if(!$this.value.charAt(i).match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
      return '全角で入力してください';
    }
  }
  return null;
};
//数字チェック
function alertNumber($this){
  for(let i = 0; i < $this.value.length; i++){
    if(!$this.value.charAt(i).match(/^[0-9]+$/)){
      return '半角数字で入力してください';
    }
  }
  return null;
}

//指定した文字をエラーメッセージとして追加するメソッド(id指定あり)
function addErrorMessageWithId(message, id){
  let errorMessages = document.getElementsByTagName('ul');
  let newErrorMessageElement = document.createElement('li');
  newErrorMessageElement.setAttribute("id", id);
  newErrorMessageElement.innerHTML = message;
  errorMessages[0].appendChild(newErrorMessageElement);
}

//エラーメッセージを削除する(id指定)
function deleteErrorMessages(id){
  if(document.getElementById(id)){
    document.getElementById('errorMessages').removeChild(document.getElementById(id));
  }
}
