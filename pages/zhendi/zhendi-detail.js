var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../api/area"),
  n = require("../../utils/storage"),
  i = require("../../wxParse/wxParse.js"),
  o = require("../../utils/qr2detail");

// var zhendi_info = [{
//   'areaCode': 'hongjunshi',
//   'areaName': {
//     'first': '红军师师史馆',
//     'last': '张店区'
//   },
//   'info': {
//     'id': 1,
//     'code': 'hongjunshi',
//     'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/hongjunshi_head.jpg',
//     'name': '红军师师史馆',
//     'info': '位于山东淄博张店区人民西路48号。71345部队前身为中国工农红军第一方面军第一军团第一师，在开国大典上代表人民解放军陆军主力组建12支步兵方队，被誉为“开国大典红一师”。红军师师史馆馆名由开国上将杨成武将军亲提，馆内由序幕厅、第一展厅、第二展厅和黑陶画厅组成，展示了“开国大典红一师”的诞生、战斗历程和精神风貌。',
//     'concatPerson': 15205332001,
//     'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/hongjunshi_head.jpg'],
//     'notice': '为保证参观效果，建议参观人数控制在40人内；红军师师史馆受部队管控，不允许在馆内、门口拍摄照片，不允许拍摄集体合照、不允许进行任何宣传。提前准备事项：参观红军师师史馆需提前发函，列明参观单位名称、时间、人数、事由，并附表列明姓名、职务等信息。',
//     'line': '分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）'
//   },
//   'callout': {
//     'id': 1,
//     'latitude': 36.81465,
//     'longitude': 118.040405
//   }
// }, {
//   'areaCode': 'zhiqing',
//   'areaName': {
//     'first': '知青博物馆',
//     'last': '张店区'
//   },
//   'info': {
//     'id': 2,
//     'code': 'zhiqing',
//     'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_head.jpg',
//     'name': '淄博知青博物馆',
//     'info': '位于淄博市经开区沣水镇张一村工业园一路，于2019年建立，占地面积约1500亩，该馆共收集淄博知青在各个不同时期的文件、图片、资料一千六百多件，知青使用过的生活物品、乐器、书籍等各类实物近千件。以知青下乡地点为脉络，用质朴自然的展陈形式，客观真实地反映了当年淄博知青的生活情景和广大知情战斗天地的精神风貌。',
//     'concatPerson': 15205332002,
//     'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_2.jpg'],
//     'notice': '为保证参观效果，建议参观人数控制在20人内；建议在淄博知青博物馆展馆前拍一张集体合照。提前准备事项：参观红色东高革命教育基地和淄博知青博物馆需提前电话预约。',
//     'line': '分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）'
//   },
//   'callout': {
//     'id': 1,
//     'latitude': 36.775708,
//     'longitude': 118.103451
//   }
// }, {
//   'areaCode': 'fengshuizhen',
//   'areaName': {
//     'first': '沣水镇红色东高革命教育基地',
//     'last': '张店区'
//   },
//   'info': {
//     'id': 1,
//     'code': 'fengshuizhen',
//     'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/fengshuizhen_head.jpg',
//     'name': '沣水镇红色东高革命教育基地',
//     'info': '位于山东淄博市张店区沣水镇东高村。东高村是沣水镇“革命第一村”，是张店区重要的党性教育基地，同时也是革命传统教育和爱国主义教育的重要场所。基地包含红色东高纪念馆、赵克岭和曹文故居、红色文化广场三部分。红色东高纪念馆在沣水地区第一个党支部旧址上修缮扩建，由岗哨楼、红色东高纪念馆、致合堂药店遗址和党支部秘密活动室组成，集中展示了从东高村走出的10名高级将领和20多名抗日志士的事迹、资料、遗物等。赵克岭、曹文故居主要介绍两名烈士英勇牺牲的革命历史。主要包含以下看点：故居院内与党支部联络地道；赵克岭、曹文烈士故居；具有八百年历史的国槐，曹文烈士被捕后被吊在古槐上严刑拷打，最终被敌人残忍杀害。红色文化广场主要介绍沣水镇、东高村建村发展史。',
//     'concatPerson': 15205332003,
//     'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/fengshuizhen_head.jpg'],
//     'notice': '为保证参观效果，建议参观人数控制在20人内；建议在东高村委和红色文化广场各拍一张集体合照；可视参观时间在东高村内自由参观。',
//     'line': '分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）'
//   },
//   'callout': {
//     'id': 1,
//     'latitude': 36.757827,
//     'longitude': 118.124872
//   }
// }]

var zhendi_info = [{
	'areaCode': 'hongjunshi',
	'areaName': {
		'first': '红军师师史馆',
		'last': '张店区'
	},
	'info': {
		'id': 1,
		'code': 'hongjunshi',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/hongjunshi_head.jpg',
		'name': '红军师师史馆',
		'info': '位于山东淄博张店区人民西路48号。71345部队前身为中国工农红军第一方面军第一军团第一师，在开国大典上代表人民解放军陆军主力组建12支步兵方队，被誉为“开国大典红一师”。红军师师史馆馆名由开国上将杨成武将军亲提，馆内由序幕厅、第一展厅、第二展厅和黑陶画厅组成，展示了“开国大典红一师”的诞生、战斗历程和精神风貌。',
		'concatPerson': 15205332001,
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/hongjunshi_head.jpg'],
		'notice': '为保证参观效果，建议参观人数控制在40人内；红军师师史馆受部队管控，不允许在馆内、门口拍摄照片，不允许拍摄集体合照、不允许进行任何宣传。提前准备事项：参观红军师师史馆需提前发函，列明参观单位名称、时间、人数、事由，并附表列明姓名、职务等信息。',
		'line': '分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.81465,
		'longitude': 118.040405
	}
}, {
	'areaCode': 'zhiqing',
	'areaName': {
		'first': '知青博物馆',
		'last': '张店区'
	},
	'info': {
		'id': 1,
		'code': 'zhiqing',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_head.jpg',
		'name': '淄博知青博物馆',
		'info': '位于淄博市经开区沣水镇张一村工业园一路，于2019年建立，占地面积约1500亩，该馆共收集淄博知青在各个不同时期的文件、图片、资料一千六百多件，知青使用过的生活物品、乐器、书籍等各类实物近千件。以知青下乡地点为脉络，用质朴自然的展陈形式，客观真实地反映了当年淄博知青的生活情景和广大知情战斗天地的精神风貌。',
		'concatPerson': 15205332002,
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_2.jpg'],
		'notice': '为保证参观效果，建议参观人数控制在20人内；建议在淄博知青博物馆展馆前拍一张集体合照。提前准备事项：参观红色东高革命教育基地和淄博知青博物馆需提前电话预约。',
		'line': '分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.775708,
		'longitude': 118.103451
	}
}, {
	'areaCode': 'fengshuizhen',
	'areaName': {
		'first': '沣水镇红色东高革命教育基地',
		'last': '张店区'
	},
	'info': {
		'id': 1,
		'code': 'fengshuizhen',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/fengshuizhen_head.jpg',
		'name': '沣水镇红色东高革命教育基地',
		'info': '位于山东淄博市张店区沣水镇东高村。东高村是沣水镇“革命第一村”，是张店区重要的党性教育基地，同时也是革命传统教育和爱国主义教育的重要场所。基地包含红色东高纪念馆、赵克岭和曹文故居、红色文化广场三部分。红色东高纪念馆在沣水地区第一个党支部旧址上修缮扩建，由岗哨楼、红色东高纪念馆、致合堂药店遗址和党支部秘密活动室组成，集中展示了从东高村走出的10名高级将领和20多名抗日志士的事迹、资料、遗物等。赵克岭、曹文故居主要介绍两名烈士英勇牺牲的革命历史。主要包含以下看点：故居院内与党支部联络地道；赵克岭、曹文烈士故居；具有八百年历史的国槐，曹文烈士被捕后被吊在古槐上严刑拷打，最终被敌人残忍杀害。红色文化广场主要介绍沣水镇、东高村建村发展史。',
		'concatPerson': 15205332003,
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/fengshuizhen_head.jpg'],
		'notice': '为保证参观效果，建议参观人数控制在20人内；建议在东高村委和红色文化广场各拍一张集体合照；可视参观时间在东高村内自由参观。',
		'line': '分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.757827,
		'longitude': 118.124872
	}
}, {
	'areaCode': 'zhuyanfu',
	'areaName': {
		'first': '朱彦夫事迹宣传教育基地',
		'last': '沂源县'
	},
	'info': {
		'id': 2,
		'code': 'zhuyanfu',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhuyanfu_head.jpg',
		'name': '朱彦夫事迹宣传教育基地',
		'info': '朱彦夫事迹党性教育基地，位于沂源县张家泉村。基地始建于2014年2月，后于2017年重新改造提升，2018年6月29日正式对外免费开放。自新馆开馆以来，先后接待省、市、县各类团体、班次500余个，人数达到1.8万余人次，取得了良好的培训效果。基地主要包括：朱彦夫事迹展览馆、多功能报告厅、夜校、旧居、棚沟造地、友谊机灌站、红山梯田、大寨田等教学点。朱彦夫事迹展馆面积700平方米，布展面积415平方米。展馆共分六个展区，分别是：序厅（前言），第一部分（保家卫国 身残志坚），第二部分（不忘初心 勇于担当），第三部分（中国保尔 极限人生），第四部分（时代楷模 光耀千秋），尾厅（结束语）。展馆内展出图片2200余幅，实物860件。采用声、光、电等现代化的表现手法，让人以身临其境的感觉。展馆内既有雕塑、微缩景观、场景还原，又有动漫视频、同期视频，还有电子翻页书屏、触摸屏等。向人们生动地再现了朱彦夫在解放战争和抗美援朝战场上英勇杀敌；回村后带领群众战天斗地、脱贫致富；为教育激励后人，用嘴衔笔、残肢抱笔，顽强创作的一个个动人场景。先后被命名为“淄博市退役军人教育实践基地” “山东省退役军人思想政治教育基地”。 ',
		'concatPerson': '0533-3341006、15866264448',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhuyanfu_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhuyanfu_2.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhuyanfu_3.jpg'],
		'notice': '开放时间为周二至周日9-11 13：30-16：30，无需对公材料，提前电话预约。参观免费，讲解费用200元，25人以内效果最佳。',
		'line': '分局出发（车程140分钟）——朱彦夫事迹党性教育基地（60分钟）—（车程35分钟）—万祥山红色记忆馆（50分钟）——返回（车程120分钟），或者分局出发（车程140分钟）——朱彦夫事迹党性教育基地（60分钟）—（车程70分钟）—618战备电台旧址（70分钟）——返回（车程90分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.00971,
		'longitude': 118.25
	}
}, {
	'areaCode': 'wangyuyang',
	'areaName': {
		'first': '王渔洋政德教育基地',
		'last': '桓台县'
	},
	'info': {
		'id': 8,
		'code': 'wangyuyang',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/wangyuyangzhengdejiaoyujidi_head.jpg',
		'name': '王渔洋政德教育基地',
		'info': '王渔洋政德教育基地位于桓台县新城镇，于1986年12月开始对外开放，目前已打造形成忠勤祠、王渔洋故居、四世宫保砖坊等现场教学区。其中，忠勤祠现占地10000多平方米，是省级重点文物保护单位；王渔洋故居占地15000余平方米，是全国重点文物保护单位；四世宫保砖坊是全国重点文物保护单位',
		'concatPerson': '13706430939\n0533-8886806',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/wangyuyangzhengdejiaoyujidi_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/wangyuyangzhengdejiaoyujidi_2.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/wangyuyangzhengdejiaoyujidi_3.jpg'],
		'notice': '开放时间：上午8:30-11:30下午13:30-16:30。可扫码预约，微信小程序搜索“云游齐鲁",搜索“王渔洋故居“。为保证参观效果，建议每30人配一名讲解员。',
		'line': '分局出发（车程36分钟）——王渔洋政德教育基地（参观150分钟）——返回（车程36分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.95025,
		'longitude': 117.941211
	}
}, {
	'areaCode': 'qiyunhuanghe',
	'areaName': {
		'first': '齐韵黄河文化展馆',
		'last': '高青县'
	},
	'info': {
		'id': 9,
		'code': 'qiyunhuanghe',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/qiyunhuanghewenhuazhanguan_head.jpg',
		'name': '齐韵黄河文化展馆',
		'info': '齐韵黄河文化展馆位于淄博市高青县黄河建设管理基地，是一座历史文化馆，同时也是一座原创艺术馆，馆内有浮雕4幅、瓷板画4幅、雕塑7组、绘画28组，均为原创。展馆从“中华文化根和魂”的高度，系统展示黄河文化与齐文化的关系，黄河文明与流域文明的关系，进而唤起人们对洪水的警觉、对水资源的珍爱、对黄河流域生态保护和高质量发展的理解、重视和支持。展馆历时近2年建成，面积700余平方米、分八个展区，运用雕塑、文字图片、重彩绘画、场景复原、刻瓷壁画、光电视频等综合手段，展示黄河对流域文明发生、发展、繁荣的巨大影响，展现具有齐文化特色的黄河文化，成为黄河岸边璀璨的“文化明珠”。',
		'concatPerson': 18553388804,
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/qiyunhuanghewenhuazhanguan_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/qiyunhuanghewenhuazhanguan_2.jpg'],
		'notice': '需要联系淄博市黄河河务局办公室李伟波18553388804预约',
		'line': '分局出发（车程60分钟）——齐韵黄河文化展馆（参观60分钟）——返回（60分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 37.258872,
		'longitude': 117.887088
	}
}, {
	'areaCode': 'qiwenhua',
	'areaName': {
		'first': '齐文化博物馆',
		'last': '临淄区'
	},
	'info': {
		'id': 10,
		'code': 'qiwenhua',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/qiwenhuabowuguan_head.jpg',
		'name': '齐文化博物馆',
		'info': '位于淄博市临淄区临淄大道308号，国家AAA级景区,是一座集文物收藏、展陈、保护、研究、教育、休闲功能于一体的综合博物馆。主要包括四个展厅：基本陈列展厅、特色陈列展厅、专题陈列展厅、临时展厅。基本陈列展厅是以齐国故都八百年的兴衰变迁为基点，分为先齐文明、西周之齐、春秋齐国、战国之齐、秦汉齐风、稷下学宫、余韵传承等八个部分。特色陈列厅包括齐地考古、煌煌齐都、稷下学宫、石刻等厅。专题陈列厅包括临淄党史、廉政教育、陶拍、瓷器、书画等厅（目前党史、廉政展厅在维修，暂不对外开放）。',
		'concatPerson': '0533-6292898',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/qiwenhuabowuguan_1.jpg'],
		'notice': '周一闭馆（法定节假日除外），9：00-17：00（16：30停止入场），通过“齐文化博物馆”微信公众号预约（分时段预约），门票免费，讲解需提前预约。',
		'line': '分局出发（车程35分钟）——齐文化博物馆（60-120分钟）—返回（车程35分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.81949,
		'longitude': 118.37148
	}
}, {
	'areaCode': 'jiaoyulu',
	'areaName': {
		'first': '焦裕禄纪念馆',
		'last': '博山区'
	},
	'info': {
		'id': 11,
		'code': 'jiaoyulu',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/jiaoyulujinianguan_head.jpg',
		'name': '焦裕禄纪念馆',
		'info': '焦裕禄纪念馆位于山东省淄博市博山区北固山村，始建于1966年5月，1967年1月正式开馆，是全国最早建立的焦裕禄纪念馆。纪念馆由胡乔木同志题写馆名，占地面积10000平方米，建筑面积约3600平方米，包括焦裕禄生平事迹展厅、焦裕禄故居、多功能影像厅等部分，生动展示了焦裕禄同志全心全意为人民服务，鞠躬尽瘁、死而后已的光辉一生。',
		'concatPerson': '0533-4820152',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/jiaoyulujinianguan_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/jiaoyulujinianguan_2.jpg'],
		'notice': '开放时间：上午9:00-下午16:00。\n可以关注“博山焦裕禄纪念馆”公众号预约，预约后电话联系。',
		'line': '分局出发（车程70分钟）——焦裕禄纪念馆（60分钟）—（车程16分钟）—山东原山艰苦创业纪念馆（90分钟）——返回（车程70分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.44333,
		'longitude': 117.99846
	}
}, {
	'areaCode': 'zhoucungu',
	'areaName': {
		'first': '周村古商城',
		'last': '周村区'
	},
	'info': {
		'id': 12,
		'code': 'zhoucungu',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhoucungushangcheng_head.jpg',
		'name': '周村古商城',
		'info': '周村古商城其历史最早可以追溯至明永乐八年（1410年）兴建的古商业街。周村古商城历经数百年风雨仍保留完好，素有“旱码头”“金周村”“丝绸之乡”“天下第一村”的美誉，被中国古建筑保护委员会的专家誉为“中国活着的古商业建筑博物馆群”。\n周村古商城内分布着千佛寺庙群、三益堂印刷展馆、谦祥益、瑞蚨祥、历史文化展览馆、丝绸文化体验馆、英美烟草公司展览馆、状元府、票证博物馆、票号展览馆、杨家大院、大染坊、魁星阁庙群、淄博艺术博物馆等10多处具有较强的知识性和趣味性的景点。',
		'concatPerson': '0533-6450097',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhoucungushangcheng_1.jpg'],
		'notice': '24小时营业',
		'line': '分局出发（车程45分钟）——周村古商城（参观120分钟）——返回（45分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.80462,
		'longitude': 117.84852
	}
}, {
	'areaCode': 'pusongling',
	'areaName': {
		'first': '蒲松龄纪念馆',
		'last': '淄川区'
	},
	'info': {
		'id': 13,
		'code': 'pusongling',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/pusonglingjinianguan_head.jpg',
		'name': '蒲松龄纪念馆',
		'info': '六个小院、七个展室，占地面积5000多平方米、展览面积2000多平方米，陈列体系完备、展览内容 丰富。蒲松龄纪念馆先后获得省级爱国主义教育基地、省级青年文明号、市级文明单位、花园式单位、青年文明示范岗等荣誉称号。',
		'concatPerson': '0533-5810168',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/pusonglingjinianguan_1.jpg'],
		'notice': '09:00:00-17:00',
		'line': '分局出发（车程60分钟）——蒲松龄纪念馆（60分钟）——返回（60分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.63658,
		'longitude': 118.01546
	}
}, {
	'areaCode': 'liuyiba',
	'areaName': {
		'first': '六一八备战电台旧址',
		'last': '沂源县'
	},
	'info': {
		'id': 14,
		'code': 'liuyiba',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/jiaoyulujinianguan_head.jpg',
		'name': '六一八备战电台旧址',
		'info': '位于山东淄博沂源县鲁村镇峨峪村。该旧址曾是华东地区规模最大、保存最完整的战备电台此电台是二十世纪六十年代为适应国防需要，由时任济南军区司令员的杨德志将军亲自选址兴建的，能够覆盖淄博、临沂、潍坊、泰安等 13 个市县。幽深的山中说道、老式的广播设备、浓郁的军事战备色彩、神秘的洞中生活，对于探寻历史遗迹，缅怀峥嵘岁月，有着强烈的启示借鉴作用',
		'concatPerson': '0533-6241618',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/jiaoyulujinianguan_1.jpg', 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/jiaoyulujinianguan_2.jpg'],
		'notice': '8:30-17:00',
		'line': '分局出发（车程90分钟）——六一八战备电台旧址（参观70分钟）——返程（90分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.23596,
		'longitude': 118.00831
	}
}, {
	'areaCode': 'heitieshan',
	'areaName': {
		'first': '黑铁山抗日武装起义纪念馆',
		'last': '张店区'
	},
	'info': {
		'id': 15,
		'code': 'heitieshan',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhoucungushangcheng_head.jpg',
		'name': '黑铁山抗日武装起义纪念馆',
		'info': '黑铁山抗日武装起义纪念馆位于山东淄博高新区太平村，为纪念黑铁山抗日武装起义而建立。“九一八”事变后，中国共产党领导群众在黑铁山太平庄发动起义，成功打响了鲁中地区抗日的“第一枪”。该馆建筑面积 1200 平方米分上下两层，馆内陈列了从黑铁山抗日武装起义爆发到它不断整编转战的全部过程',
		'concatPerson': '0533-3781453',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhoucungushangcheng_1.jpg'],
		'notice': '周二到周日   8：30-11：30  13：30-17：30',
		'line': '分局出发（车程20分钟）——黑铁山抗日武装起义纪念馆（参观45分钟）——返程（20分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.85007,
		'longitude': 118.16673
	}
}, {
	'areaCode': 'zibomeikuang',
	'areaName': {
		'first': '淄博煤矿博物馆',
		'last': '淄川区'
	},
	'info': {
		'id': 16,
		'code': 'zibomeikuang',
		'mainPic': 'https://djditu.oss-cn-qingdao.aliyuncs.com/area/pusonglingjinianguan_head.jpg',
		'name': '淄博煤矿博物馆',
		'info': '淄博煤矿博物馆分上下两层，由13个展室和1个矿工墓组成。中共一大代表王尽美、邓恩铭曾长期深入淄博矿区，开展工人运动，发展党的组织。进入博物馆后，聆听讲解员的个绍，观看馆内的历史文献、照片资料、实物资料等，深入了解淄矿背后那段波澜壮阔的历史:之后在讲解员的引导下，全体党员在党旗前宣誓，重温入党誓词，感悟初心使命。',
		'concatPerson': '0533-5850485',
		'bannerList': ['https://djditu.oss-cn-qingdao.aliyuncs.com/area/pusonglingjinianguan_1.jpg'],
		'notice': '周一到周五   9:00-12:00      14:00-17:00',
		'line': '分局出发（车程50分钟）——淄博煤矿博物馆（参观60分钟）——返程（50分钟）'
	},
	'callout': {
		'id': 1,
		'latitude': 36.64443,
		'longitude': 117.99596
	}
}]

Page({
  data: {

  },
  closeSignSuccess: function () {
    this.setData({
      showSignSuccess: !1
    })
  },
  showSignSuccess: function () {
    this.setData({
      showSignSuccess: !0
    })
  },
  handleToQuestion: function () {
    wx.redirectTo({
      url: "/pages/question/question?areaId=" + this.data.info.id + "&lineId=" + this.data.currentLineId + "&areaCode=" + this.data.areaCode
    })
  },
  handleDakaBtnClick: function (i) {
    var o, r = this;
    wx.showLoading({
        title: "定位中..."
      }),
      wx.getLocation({
        type: "gcj02",
        success: (o = e(t().mark((function e(i) {
            var o, s, c, d, l;
            return t().wrap((function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (o = i.latitude, s = i.longitude, console.log("当前用户：lat,lon", o, s), c = r.getDistance(o, s, r.data.info.latitude, r.data.info.longitude), console.log("用户距离dis", c), wx.hideLoading(), d = parseInt(n.get(n.CONFIG + "SIGN_MAXIMUM_DISTANCE", "100")), !(c > d)) {
                    t.next = 12;
                    break
                  }
                  return r.showAlert("在打卡点".concat(d, "米内范围才能打卡哦！")),
                    t.abrupt("return");
                case 12:
                  if ((l = n.get(n.USER_INFO_KEY)) && "C" == l.infoStatus) {
                    t.next = 17;
                    break
                  }
                  return r.setData({
                      showIdentitySelector: !0
                    }),
                    n.set(n.SIGN_DATA + r.data.areaCode, {
                        id: r.data.info.id,
                        channel: n.get(n.CHANNEL, ""),
                        latitude: o,
                        longitude: s,
                        dis: c
                      },
                      86400),
                    t.abrupt("return");
                case 17:
                  return t.prev = 17,
                    wx.showLoading({
                      title: "数据上传中..."
                    }),
                    t.next = 21,
                    (0, a.addLocationSign)(r.data.info.id, o, s, c, r.data.channel);
                case 21:
                  wx.hideLoading(),
                    r.showSignSuccess(),
                    r._loadAreaInfo(),
                    t.next = 28;
                  break;
                case 26:
                  t.prev = 26,
                    t.t0 = t.
                  catch(17);
                case 28:
                  return t.prev = 28,
                    t.finish(28);
                case 30:
                case "end":
                  return t.stop()
              }
            }), e, null, [
              [17, 26, 28, 30]
            ])
          }))),
          function (t) {
            return o.apply(this, arguments)
          }),
        fail: function (t) {
          console.error(t),
            r.showAlert("定位失败，请稍后再试！"),
            wx.hideLoading()
        }
      })
  },
  handleShareClick: function () {
    this.setData({
      postShare: !0
    })
  },
  closePostShare: function () {
    this.setData({
      postShare: !1
    })
  },
  postImgLoaded: function (t) {
    console.log("postInfo loaded", t.detail),
      this.setData({
        postInfo: t.detail
      })
  },
  handleBusClick: function () {
    wx.navigateTo({
      url: "/pages/bus/bus"
    })
  },
  getDistance: function (t, e, a, n) {
    var i = t * Math.PI / 180,
      o = a * Math.PI / 180,
      r = i - o,
      s = e * Math.PI / 180 - n * Math.PI / 180,
      c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(i) * Math.cos(o) * Math.pow(Math.sin(s / 2), 2)));
    return c *= 6378.137,
      c = Math.round(1e5 * c) / 100
  },
  closeAlert: function () {
    this.setData({
      showAlert: !1,
      alertText: ""
    })
  },
  showAlert: function (t) {
    this.setData({
      showAlert: !0,
      alertText: t
    })
  },
  closeMask: function () {
    this.setData({
      showMask: !1
    })
  },
  showMask: function () {
    this.setData({
      showMask: !0
    })
  },
  nothing: function () {},
  handleIdentitySelected: function () {
    this.setData({
        showMask: !1,
        showIdentitySelector: !1
      }),
      this._checkTempSignData()
  },
  _loadAreaInfo: function () {
    var o = this;
    return e(t().mark((function e() {
      var r, s, c, d, l, u, h, f, p, g;
      return t().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (console.log("_loadAreaInfo"), t.prev = 1,
              // wx.showLoading({
              //   title: "加载中..."
              // }), 
              1, o.data.postShareEntrance || n.get(n.USER_JWT_KEY, !1)) {
              t.next = 6;
              break
            }
            return t.next = 6,
              getApp().globalData.login();
          case 6:
            return t.next = 8,
              (0, a.getAreaInfo)(o.data.areaCode);
          case 8:
            if (r = t.sent, s = r.data, console.log("areaInfo", s), c = {
                id: 1,
                latitude: parseFloat(s.latitude),
                longitude: parseFloat(s.longitude),
                iconPath: "/assets/images/location.png",
                width: "80rpx",
                height: "90rpx",
                callout: {
                  content: s.name,
                  color: "#000",
                  fontSize: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#000000",
                  bgColor: "#fff",
                  padding: 4,
                  display: "ALWAYS",
                  textAlign: "center"
                }
              },
              -1 != s.name.indexOf("（") && -1 == s.name.indexOf("小坞园") ? o.setData({
                areaName: {
                  first: s.name.split("（")[0],
                  last: "（" + s.name.split("（")[1]
                }
              }) : o.setData({
                areaName: {
                  first: s.name,
                  last: ""
                }
              }), s.openTime && i.wxParse("openTimeHtml", "html", s.openTime.replaceAll("\n", "<br/>"), o, 5), s.tour && i.wxParse("tourHtml", "html", s.tour.replaceAll("\n", "<br/>"), o, 5), s.busStation && i.wxParse("busStationrHtml", "html", s.busStation.replaceAll("\n", "<br/>"), o, 5), d = [{
                name: "",
                info: "",
                reservationWay: ""
              }], s.actName)
              for (l = s.actName ? s.actName.split("||") : [], u = s.actInfo ? s.actInfo.split("||") : [], h = s.reservationWay ? s.reservationWay.split("||") : [], f = 0, p = l.length; f < p; f++) try {
                g = {
                    name: l[f],
                    info: u[f],
                    reservationWay: h[f]
                  },
                  d[f] = g
              } catch (t) {
                // t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                // console.error("解析活动列表失败", t)
              }
            o.setData({
                info: s,
                callout: c,
                activies: d,
                currentLineId: -1 == o.data.currentLineId ? s.lineId : o.data.currentLineId
              }),
              wx.hideLoading(),
              t.next = 25;
            break;
          case 22:
            t.prev = 22,
              t.t0 = t.
            catch(1),
              //wx.navigateBack();
              1;
          case 25:
            return t.prev = 25,
              t.finish(25);
          case 27:
          case "end":
            return t.stop()
        }
      }), e, null, [
        [1, 22, 25, 27]
      ])
    })))()
  },
  handleMapClick: function () {
    wx.openLocation({
      latitude: this.data.callout.latitude,
      longitude: this.data.callout.longitude,
      scale: 14,
      name: this.data.info.name,
      address: this.data.info.addrText
    })
  },
  handleAddTextClick: function () {
    var t = this;
    this.setData({
        showMap: !1
      },
      (function () {
        t.setData({
          showMap: !0
        })
      }))
  },
  onLoad: function (t) {
    // console.log("测试！！！！！" + t.code);
    if (t.code == "hongjunshi") {
      this.setData(zhendi_info[0]);
    } else if (t.code == "zhiqing") {
      this.setData(zhendi_info[1]);
    } else if (t.code == "fengshuizhen") { 
      this.setData(zhendi_info[2]);
    } else if (t.code == "zhuyanfu") { 
      this.setData(zhendi_info[3]);
    } else if (t.code == "wangyuyang") { 
      this.setData(zhendi_info[4]);
    } else if (t.code == "qiyunhuanghe") { 
      this.setData(zhendi_info[5]);
    } else if (t.code == "qiwenhua") { 
      this.setData(zhendi_info[6]);
    } else if (t.code == "jiaoyulu") { 
      this.setData(zhendi_info[7]);
    } else if (t.code == "zhoucungu") { 
      this.setData(zhendi_info[8]);
    } else if (t.code == "pusongling") { 
      this.setData(zhendi_info[9]);
    } else if (t.code == "liuyiba") { 
      this.setData(zhendi_info[10]);
    } else if (t.code == "heitieshan") { 
      this.setData(zhendi_info[11]);
    } else if (t.code == "zibomeikuang") { 
      this.setData(zhendi_info[12]);
    }
    var e = this;
    if (console.log("option", t), t.lineId && this.setData({
        currentLineId: parseInt(t.lineId),
        channel: "Z"
      }), t.q) {
      var a = o.parse(decodeURIComponent(t.q));
      if (null == a) return void wx.showToast({
        title: "非法入口！",
        icon: "error"
      });
      console.log("扫码进来的", "url信息", a),
        t.code = a.areaCode,
        this.setData({
          channel: "S",
          currentLineId: a.lineId
        })
    }
    t.channel && this.setData({
        channel: t.channel
      }),
      t.postshare ? this.setData({
        postShareEntrance: !0,
        areaCode: t.code
      }) : t.postcard && (t.uuid && this.setData({
        postInfo: {
          uuid: t.uuid + "",
          url: ""
        }
      }), this.setData({
        postShareEntrance: !1,
        areaCode: t.code,
        currentLineId: t.lineId,
        postShare: !0,
        showShareTip: !0
      })),
      t.code ? this.setData({
          areaCode: t.code
        },
        (function () {
          e._loadAreaInfo()
        })) : wx.showToast({
        title: "未找到此地点"
      })
  },
  onShow: function () {
    var a = this;
    return e(t().mark((function e() {
      return t().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (a.setData({
                showIdentitySelector:
                  !1,
                showMask: !1,
                showAlert: !1
              }), !a.data.postShareEntrance) {
              t.next = 3;
              break
            }
            return t.abrupt("return");
          case 3:
            return t.next = 5,
              a._checkTempSignData();
          case 5:
          case "end":
            return t.stop()
        }
      }), e)
    })))()
  },
  _checkTempSignData: function () {
    var i = this;
    return e(t().mark((function e() {
      var o, r;
      return t().wrap((function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (o = n.get(n.SIGN_DATA + i.data.areaCode, null), r = n.get(n.USER_INFO_KEY), !o || !r || "C" != r.infoStatus) {
              t.next = 16;
              break
            }
            return t.prev = 3,
              wx.showLoading({
                title: "数据上传中..."
              }),
              t.next = 7,
              (0, a.addLocationSign)(o.id, o.latitude, o.longitude, o.dis, n.get(n.CHANNEL, ""));
          case 7:
            wx.hideLoading(),
              n.remove(n.SIGN_DATA + i.data.areaCode),
              i.showSignSuccess(),
              t.next = 14;
            break;
          case 12:
            t.prev = 12,
              t.t0 = t.
            catch(3);
          case 14:
            return t.prev = 14,
              t.finish(14);
          case 16:
          case "end":
            return t.stop()
        }
      }), e, null, [
        [3, 12, 14, 16]
      ])
    })))()
  },
  onShareAppMessage: function () {
    return {
      title: "红色引领，全域提升！一起来打卡".concat(this.data.info.name.includes("淄博监管分局") ? "" : "淄博监管分局").concat(this.data.info.name, "！"),
      path: "/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode, "&lineId=").concat(this.data.currentLineId),
      imageUrl: this.data.info.mainPic
    }
  },
  onShareTimeline: function () {
    return this.data.postInfo.uuid ? ((0, a.sharePostImg)(this.data.info.id, null).then((function (t) {
      wx.showModal({
        title: "恭喜您获得3个积分！",
        icon: "none"
      })
    })), {
      title: "红色引领，全域提升！我已成功打卡".concat(this.data.info.name.includes("淄博监管分局") ? "" : "淄博监管分局镇").concat(this.data.info.name, "！"),
      query: "uuid=".concat(this.data.postInfo.uuid, "&postshare=1&code=").concat(this.data.areaCode, "&lineId=").concat(this.data.currentLineId),
      imageUrl: this.data.info.mainPic
    }) : {
      title: "红色引领，全域提升！一起来打卡".concat(this.data.info.name.includes("淄博监管分局") ? "" : "淄博监管分局镇").concat(this.data.info.name, "！"),
      query: "code=".concat(this.data.areaCode, "&lineId=").concat(this.data.currentLineId),
      imageUrl: this.data.info.mainPic
    }
  }
});