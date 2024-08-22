export const MSG = {
  NEW_RECORD: '新規作成しますか？\nDo you create new sheet?',
  REVUP_SAVED: 'RevUp保存しました。\nIt saved by new version',
  DELETE_RECORD: '削除しますか？\nDelete this sheet?',
  CANNOT_REPORT: '承認者が設定されていないため、上申できません。\nThis data cannot be Report.',
  CANNOT_RECOGNITION: 'このデータは承認できません。\nThis data cannot be Recognition.',
  CANNOT_REJECT: 'このデータは否認できません。\nThis data cannot be Returns to Reviewer.',
  CANNOT_RELATION: '未入力のFactがあるため、紐づけできません。\nRelation not allowed, Because there is fact of non-input',
  CANNOT_ADD: '追加できません。\nIt cannot add',
  CANNOT_MOVE: '移動できません。\nIt cannot move',
  DELETE_FACT: '2.観察事実の({0})を削除しますか？\nIs an observation example deleted?',
  DELETE_CONCLUSION: '3.結論の({0})を削除しますか？\nIs an Conclusion deleted?',
  EMPTY_PASSWORD_FIELD: 'fields can not be empty',
  NOT_MAP_PASSWORD: 'new password and confirm password not map',
  LOGIN_REQUIRED_HEADER: 'Login Required - Use Peer Review No and Three Initials and Password',
  LOGIN_REQUIRED_MSG: 'データベースを使用するには、ログインが必要です。\nUser must login to use the database!',
  VERIFY_LOGIN: 'パスワードを確認し、再度ログインしてください。<br/>Please verify login password, then login again and complete the user information form',
  VERIFY_CONNECT_DESTINATION: '接続先が未入力です。\nConnection destination has not been entered!',
  VERIFY_INITIAL: 'イニシャルを確認し、再度ログインしてください。\nPlease verify login initials\n then login again and complete the user information form ',
  VERIFY_PASSWORD: 'パスワードを確認し、再度ログインしてください。\nPlease verify login password\n then login again and complete the user information form ',
  RELATED_AREA_NOT_FILLED: '提供先分野が未入力の事実があります。\n"Related Area" is not filled in. OK?',
  RELATED_POC_NOT_FILLED: '提供先PO&Cが未入力の事実があります。\n"Related PO&C" is not filled in. OK?',
  DATA_SAVED: '上書き保存しました。\nData was saved.',
  DATA_SAVED_TRANS_REQUEST: '上書き保存しました。翻訳依頼は忘れていませんか？\nData was saved. Have you forgotten your translation request?',
  INITIAL_BAD_REQUEST_MSG: 'Login must be 3 characters in length, but not \'ZZZ\'.(User ESC to clear the login box)',
  CANNOT_EDIT: 'このデータは編集できません。\nThis data cannot be edited.',
  REPORT_CONFIRM: '上申してよろしいですか？\nDo you Report?',
  REPORT_WITHOUT_TRANS_REQUEST: '上申してよろしいですか？  翻訳依頼は忘れていませんか？\nDo you Report? Have you forgotten your translation request?',
  GFA_WORD_CREATE: 'フォーカスエリア分析シート一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  PFA_WORD_CREATE: 'プラスフォーカスエリア分析シート一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  AFI_WORD_CREATE: '要改善事項一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  BP_WORD_CREATE: '有益事例一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  OBS_WORD_CREATE: '観察シート一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  PD_WORD_CREATE: '軽微な問題点一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  STR_WORD_CREATE: '良好事例一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
  SOI_WORD_CREATE: '改善状況評価シート一覧をワードファイルにして「Docs in Word」フォルダに保存します。\nRequested files will be saved in "Docs in Word" folder located in FND folder as MS-word file.',
};

export const CONST = {
  MODAL_YES: 'はい(Y)',
  MODAL_NO: 'いいえ(N)',
  MODAL_NO_EN: 'cancel',
  MODAL_OK: 'OK',
  MODAL_CANCEL: 'キャンセル',
  MODAL_TITLE_INFO: 'Information',
  MODAL_TITLE_WARNING: 'Warning',
};

export const format = (msg, arr) => {
  let result = msg;
  for (let i = 0; i < arr.length; i++) {
    result = result.replace(`{${i}}`, arr[i]);
  }
  return result;
};
