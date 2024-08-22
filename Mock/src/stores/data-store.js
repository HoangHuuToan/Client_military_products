import { defineStore } from 'pinia';
import { clone } from 'utilities/common';

export const useDataStore = defineStore('dataStore', () => {
  const userList = [
    {
      id: 1,
      initial: 'EC',
      name: 'EC site shop',
      password: '123',
      roleKbn: 99,
      token: 'temp_token',
      field: 'ZZ',
    },
  ];

  const plantList = [
    {
      id: 1, code: '23D001', name: 'FND調査1', type: 'A',
    },
    {
      id: 2, code: '23D002', name: 'FND調査2', type: 'P',
    },
    {
      id: 3, code: '23D003', name: 'FND調査3', type: 'A',
    },
    // {
    //   id: 4, code: '21D032', name: '美浜PR/Mihama PS', type: 'A',
    // },
    // {
    //   id: 5, code: '21SA31', name: 'セルフアセス（高浜PR）', type: 'A',
    // },
    // {
    //   id: 7, code: '21D031', name: '高浜PR/Takahama PS', type: 'A',
    // },
    // {
    //   id: 8, code: '20M027', name: 'JNFLPR', type: 'A',
    // },
    // {
    //   id: 9, code: '21D030', name: '玄海PR/Genkai', type: 'A',
    // },
    // {
    //   id: 10, code: '21SA30', name: 'セルフアセス（玄海PR）', type: 'A',
    // },
    // {
    //   id: 11, code: '21D029', name: '大飯PR/Ohi PS', type: 'A',
    // },
    // {
    //   id: 12, code: '21SA29', name: 'SelfAssess（大飯PR）', type: 'A',
    // },
    // {
    //   id: 13, code: '21D028', name: '女川PR/Onagawa NPS', type: 'A',
    // },
    // {
    //   id: 14, code: '21S001', name: '浜岡レビュー', type: 'A',
    // },
    // {
    //   id: 15, code: '21SA28', name: 'SelfAssess（女川PR/OnagawaNPS）', type: 'A',
    // },
    // {
    //   id: 16, code: '21M026', name: 'NDCPR', type: 'A',
    // },
    // {
    //   id: 17, code: '21M024', name: 'JAEA核サ研', type: 'A',
    // },
  ];

  const obsList = [
    {
      id: 1,
      title: '<p>結論なしのＯＢＳ</p>',
      titleText: '結論なしのＯＢＳ',
      approvalSateTL: '【審１】承認',
      approveRq: false,
      editor: 'AAA',
      valState: '完了',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/08/15 09:30',
      finalVer: false,
      pkgExclude: false,
      field: 'ZZ',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 1,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],

    },
    {
      id: 2,
      title: '<p>結論を削除するＯＢＳ</p>',
      titleText: '結論を削除するＯＢＳ',
      approvalSateTL: '【審１】承認',
      approveRq: true,
      editor: 'AAA',
      valState: '完了',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/10/02 14:20',
      finalVer: false,
      pkgExclude: false,
      field: 'ZZ',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 2,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 3,
      title: '<p><br></p>',
      titleText: '',
      approvalSateTL: '',
      approveRq: false,
      editor: 'AAA',
      valState: '未完',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/12/05 17:55',
      finalVer: false,
      pkgExclude: false,
      field: 'ZZ',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 3,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 4,
      title: '<p>事象Ａ－２</p>',
      titleText: '事象Ａ－２',
      approvalSateTL: '【審１】承認',
      approveRq: false,
      editor: 'AAD',
      valState: '完了',
      transRange: '全文',
      transRq: true,
      lastUpdate: '2023/09/18 08:10',
      finalVer: false,
      pkgExclude: false,
      field: 'OP',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 4,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 5,
      title: '<p>事象Ｂ</p>',
      titleText: '事象Ｂ',
      approvalSateTL: '',
      approveRq: false,
      editor: 'AAD',
      valState: '未完',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/11/30 12:25',
      finalVer: false,
      pkgExclude: false,
      field: 'OP',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 5,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 6,
      title: '<p>事象Ｃ</p>',
      titleText: '事象Ｃ',
      approvalSateTL: '',
      approveRq: true,
      editor: 'AAD',
      valState: '未完',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/07/01 16:40',
      finalVer: false,
      pkgExclude: false,
      field: 'OP',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 6,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 7,
      title: '<p>事象Ｄ</p>',
      titleText: '事象Ｄ',
      approvalSateTL: '',
      approveRq: false,
      editor: 'AAD',
      valState: '完了',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/06/12 10:15',
      finalVer: false,
      pkgExclude: true,
      field: 'OP',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 7,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 8,
      title: '<p>ＷＣからＯＢＳへ転送された事象</p>',
      titleText: 'ＷＣからＯＢＳへ転送された事象',
      approvalSateTL: '',
      approveRq: false,
      editor: 'AAD',
      valState: '未完',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/04/28 20:05',
      finalVer: false,
      pkgExclude: false,
      field: 'OP',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 8,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 9,
      title: '<p>ＡＡＣ作成のＯＢＳ</p>',
      titleText: 'ＡＡＣ作成のＯＢＳ',
      approvalSateTL: '',
      approveRq: true,
      editor: 'AAC',
      valState: '未完',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/03/09 13:50',
      finalVer: false,
      pkgExclude: false,
      field: 'TL',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 9,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
    {
      id: 10,
      title: '<p>ＡＡＣ作成のＯＢＳ２</p>',
      titleText: 'ＡＡＣ作成のＯＢＳ２',
      approvalSateTL: '',
      approveRq: false,
      editor: 'AAC',
      valState: '未完',
      transRange: '全文',
      transRq: false,
      transTime: null,
      lastUpdate: '2023/02/22 07:00',
      finalVer: false,
      pkgExclude: false,
      field: 'TL',
      transLang: '',
      summary: '',
      nextApprover: '',
      plantName: '23D002',
      observationTarget: '',
      author: '',
      revisionNum: 0,
      revisionGroup: 10,
      newestFlag: true,
      scope: {
        id: 1,
        scope: '<p><br></p>',
        scopeText: '',
        scopeTrans: '',
        comment: '<p><br></p>',
      },
      facts: [{
        id: 1,
        fact: '<p><br></p>',
        factText: '',
        factTrans: '',
        valComp: false,
        photoNum: 0,
        plus_neutral_delta: 3,
        offerFields: '',
        poCs: '',
        safetyCultures: '',
        comment: '<p><br></p>',
        photo: [
          {
            id: 1,
            alt: 'image',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png',
          },
        ],
        selectedImage: {
          photo: 1, representPhoto: 1,
        },
      }],
      conclusions: [{
        id: 1,
        conclusion: '<p><br></p>',
        conclusionTrans: '',
        comment: '<p><br></p>',
      }],
    },
  ];

  const obsTargetList = [
    '個人のメモ／Personal Notes',
    'プラントインスペクション／Inspection & Tours',
    '机上教育／Classroom Training',
    'OJT／TPE',
    '書類／Document Review',
    '事前分析／Analysis',
    'インタビュー／Interview',
    '現場作業／Field Activity',
    '会議視察',
    '中央制御室／Control Room',
    '訓練視察',
    'シミュレータ／Simulator',
    'その他／Other',
    'SOER',
  ];

  const pocList = [
    { code: 'SC.1', name: '原子力安全文化', nameEn: 'Nuclear Safety Culture' },
    { code: 'NP.1', name: '原子力従事者', nameEn: 'Nuclear Professionals' },
    { code: 'LF.1', name: 'リーダーシップ', nameEn: 'Leadership Fundamentals' },
    { code: 'OR.1', name: 'マネジメントシステム', nameEn: 'Management Systems' },
    { code: 'OR.2', name: 'マネージャーの有効性', nameEn: 'Manager Effectiveness' },
    { code: 'OR.3', name: '独立オーバーサイト', nameEn: 'Independent Oversight' },
    { code: 'RM.1', name: '統合リスクマネジメント', nameEn: 'Integrated Risk Management' },
    { code: 'PI.1', name: 'パフォーマンスの改善', nameEn: 'Performance Improvement' },
    { code: 'OE.1', name: '運転経験', nameEn: 'Operating Experience' },
    { code: 'TR.1', name: '訓練の基本', nameEn: 'Training Fundamentals' },
    { code: 'TR.2', name: '訓練の実施', nameEn: 'Conduct of Training' },
    { code: 'HU.1', name: 'ヒューマンパフォーマンス', nameEn: 'Human Performance' },
    { code: 'OP.1', name: '運転の基本', nameEn: 'Operations Fundamentals' },
    { code: 'OP.2', name: '運転の実施', nameEn: 'Conduct of Operations' },
  ];

  const safetyCultureList = [
    { code: 'PA.1', name: '個人の責務：基準', nameEn: 'Personal Accountability：Standards' },
    { code: 'PA.2', name: '個人の責務：業務への当事者意識', nameEn: 'Personal Accountability：Job Ownership' },
    { code: 'PA.3', name: '個人の責務：チームワーク', nameEn: 'Personal Accountability：Teamwork' },
    { code: 'QA.1', name: '問いかける姿勢：原子力発電が特別で独特なものであるとの理解', nameEn: 'Questioning Attitude：Nuclear is Recognised as Special and Unique' },
    { code: 'QA.2', name: '問いかける姿勢：未知なことに疑いの念を持つこと', nameEn: 'Questioning Attitude：Challenge the Unknown' },
    { code: 'QA.3', name: '問いかける姿勢：前提に疑いの念を持つこと', nameEn: 'Questioning Attitude：Challenge Assumptions' },
    { code: 'QA.4', name: '問いかける姿勢：自己満足に陥らないこと', nameEn: 'Questioning Attitude：Avoid Complacency' },
    { code: 'CO.1', name: '安全に関するコミュニケーション：業務プロセスにおけるコミュニケーション', nameEn: 'Safety Communication：Work Process Communications' },
    { code: 'CO.2', name: '安全に関するコミュニケーション：方針の根拠', nameEn: 'Safety Communication：Bases for Decisions' },
    { code: 'CO.3', name: '安全に関するコミュニケーション：情報の自由な流れ', nameEn: 'Safety Communication：Free Flow of Information' },
    { code: 'CO.4', name: '安全に関するコミュニケーション：期待事項', nameEn: 'Safety Communication：Expectations' },
  ];

  const fieldList = [
    {
      id: 1, code: 'OP', name: '運転', nameEn: 'Operation',
    },
    {
      id: 2, code: 'MA', name: '保修', nameEn: 'Maintenance',
    },
    {
      id: 3, code: 'ES', name: '技術支援', nameEn: 'Engineering Support',
    },
  ];

  const initialList = [
    { id: 1, code: 'AAA', name: 'FND調査１' },
    { id: 2, code: 'AAD', name: 'FND調査３' },
    { id: 3, code: 'AAC', name: 'ND調査１ー３' },
  ];

  const getOBSList = (condition) => {
    let data = JSON.parse(JSON.stringify(obsList));
    data = data.filter((x) => x.newestFlag);
    if (condition.approvedTL) {
      data = data.filter((x) => x.approveRq);
    }
    if (condition.field) {
      data = data.filter((x) => x.field === condition.field);
    }
    if (condition.initial) {
      data = data.filter((x) => x.editor === condition.initial);
    }
    if (condition.freeWord) {
      data = data.filter((x) => x.title.includes(condition.freeWord));
    }
    return data;
  };

  const getOBS = (id) => {
    const data = obsList.find((x) => x.id === +id);
    if (!data) return data;
    return clone(data);
  };

  const getUser = (data) => {
    if (data.token) return userList.find((x) => x.token === data.token);
    return userList.find((x) => x.initial === data.initial && x.password === data.password);
  };

  const getFieldList = () => fieldList;

  const getInitialList = () => initialList;

  const deleteOBS = (id) => {
    const index = obsList.findIndex((x) => x.id === +id);
    obsList.splice(index, 1);
  };

  const createOBS = (data) => {
    const maxId = Math.max(...obsList.map((x) => x.id));
    const item = clone(data);
    item.id = maxId + 1;
    obsList.push(item);
  };

  const editOBS = (data) => {
    const index = obsList.findIndex((x) => x.id === +data.id);
    obsList[index] = clone(data);
  };

  const getPlantList = () => plantList;

  const getPlant = (code) => {
    const result = plantList.find((x) => x.code === code);
    return result;
  };

  const getOBSTargetList = () => obsTargetList;

  const getPOCList = () => pocList;

  const getSafetyCultureList = () => safetyCultureList;

  const getRevisionList = (revisionGroup) => {
    const result = obsList.filter((x) => x.revisionGroup === revisionGroup);
    result.pop();
    return clone(result);
  };

  const getMaxRevisionGroup = () => {
    const maxId = Math.max(...obsList.map((x) => x.revisionGroup));
    return maxId;
  };

  const getMaxOBSId = () => {
    const maxId = Math.max(...obsList.map((x) => x.id));
    return maxId;
  };

  return {
    getUser,
    getOBSList,
    getFieldList,
    getInitialList,
    getOBS,
    deleteOBS,
    createOBS,
    editOBS,
    getPlantList,
    getPlant,
    getOBSTargetList,
    getPOCList,
    getRevisionList,
    getMaxRevisionGroup,
    getMaxOBSId,
    getSafetyCultureList,
  };
});
