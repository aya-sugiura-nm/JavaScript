const maxLength = {
  name: 50,
  address: 100,
  content: 1000
}
const postNumberLength = 7;

//名前　動的チェック
function familyNameCheck($this){
  deleteErrorMessages('familyNameMessage');
  deleteErrorMessages('familyNameLengthMessage');
  if($this.value == ''){
    let newErrorMessage = '名前(氏)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'familyNameLengthMessage')
  }else{
    if(alertLength($this, maxLength.name) != null){
      let newErrorMessage = '名前(氏)は' + alertLength($this, maxLength.name);
      addErrorMessageWithId(newErrorMessage, 'familyNameLengthMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = '名前(氏)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'familyNameMessage');
    }
  }
}
function firstNameCheck($this){
  deleteErrorMessages('firstNameMessage');
  deleteErrorMessages('firstNameLengthMessage');
  if($this.value == ''){
    let newErrorMessage = '名前(名)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'firstNameLengthMessage')
  }else{
    if(alertLength($this, maxLength.name) != null){
      let newErrorMessage = '名前(名)は' + alertLength($this, maxLength.name);
      addErrorMessageWithId(newErrorMessage, 'firstNameLengthMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = '名前(名)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'firstNameMessage');
    }
  }
}
function kanaFamilyNameCheck($this){
  deleteErrorMessages('kanaFamilyNameMessage');
  deleteErrorMessages('kanaFamilyNameLengthMessage');
  if($this.value == ''){
    let newErrorMessage = 'フリガナ(氏)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'kanaFamilyNameLengthMessage')
  }else{
    if(alertLength($this, maxLength.name) != null){
      let newErrorMessage = 'フリガナ(氏)は' + alertLength($this, maxLength.name);
      addErrorMessageWithId(newErrorMessage, 'kanaFamilyNameLengthMessage')
    }
    if(alertCharTypeZenkaku($this) != null){
      let newErrorMessage = 'フリガナ(氏)は' + alertCharTypeZenkaku($this);
      addErrorMessageWithId(newErrorMessage, 'kanaFamilyNameMessage');
    }
  }
}
function kanaFirstNameCheck($this){
  deleteErrorMessages('kanaFirstNameMessage');
  deleteErrorMessages('kanaFirstNameLengthMessage');
  if($this.value == ''){
    let newErrorMessage = 'フリガナ(名)は必須項目です'
    addErrorMessageWithId(newErrorMessage, 'kanaFirstNameLengthMessage')
  }else{
    if(alertLength($this, maxLength.name) != null){
      let newErrorMessage = 'フリガナ(名)は' + alertLength($this, maxLength.name);
      addErrorMessageWithId(newErrorMessage, 'kanaFirstNameLengthMessage')
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
  if($this.value == ''){
    newErrorMessage = 'メールアドレスを入力してください。';
    addErrorMessageWithId(newErrorMessage, 'mailMessage');
  }else if(alertMailStyle($this) != null){
    newErrorMessage = alertMailStyle($this);
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
    }else if($this.value.length != postNumberLength){
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
  }else if(alertLength($this, maxLength.address) != null){
    let newErrorMessage = '住所は' + alertLength($this, 100);
    addErrorMessageWithId(newErrorMessage, 'addressMessage')
  }
}
//お問い合わせ内容　動的チェック
function alertContent($this){
  deleteErrorMessages('contentMessage');
  if(alertLength($this, maxLength.content) != null){
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
//メアド形式チェック
function alertMailStyle($this){
  if(!$this.value.match(/.+@.+\..+/)){
    return 'メールアドレスの形式が不適切です';
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
