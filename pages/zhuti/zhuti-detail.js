require("../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
e = require("../../@babel/runtime/helpers/asyncToGenerator"),
a = require("../../api/area"),
n = require("./position"),
o = require("../../utils/storage");
// 黄色 whhm
// 蓝色 zlfz
// 绿色 xczx
// 红色 hsyx
var line_list = [
  {
    "id": 1,
    "title": "路线五：红色党史教育",
    "name": "路线五：红色党史教育",
    "mapurl": "https://djditu.oss-cn-qingdao.aliyuncs.com/line/luxian5.png",
    "desc1": "红色党史教育",
    "desc2": "分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）\n\n1.乘车前往沣水镇红色东高革命教育基地。早8:30从分局乘车出发，前往沣水镇红色东高革命教育基地，大约9:10到达。 2.参观沣水镇红色东高革命教育基地。9:30开始参观，大约10:10结束。",
    "desc3": "【沣水镇红色东高革命教育基地】位于山东淄博市张店区沣水镇东高村。东高村是沣水镇“革命第一村”，是张店区重要的党性教育基地，同时也是革命传统教育和爱国主义教育的重要场所。基地包含红色东高纪念馆、赵克岭和曹文故居、红色文化广场三部分。红色东高纪念馆在沣水地区第一个党支部旧址上修缮扩建，由岗哨楼、红色东高纪念馆、致合堂药店遗址和党支部秘密活动室组成，集中展示了从东高村走出的10名高级将领和20多名抗日志士的事迹、资料、遗物等。赵克岭、曹文故居主要介绍两名烈士英勇牺牲的革命历史。主要包含以下看点：故居院内与党支部联络地道；赵克岭、曹文烈士故居；具有八百年历史的国槐，曹文烈士被捕后被吊在古槐上严刑拷打，最终被敌人残忍杀害。红色文化广场主要介绍沣水镇、东高村建村发展史。\n【淄博知青博物馆】位于淄博市经开区沣水镇张一村工业园一路，于2019年建立，占地面积约1500亩，该馆共收集淄博知青在各个不同时期的文件、图片、资料一千六百多件，知青使用过的生活物品、乐器、书籍等各类实物近千件。以知青下乡地点为脉络，用质朴自然的展陈形式，客观真实地反映了当年淄博知青的生活情景和广大知情战斗天地的精神风貌。\n【红军师师史馆】位于山东淄博张店区人民西路48号。71345部队前身为中国工农红军第一方面军第一军团第一师，在开国大典上代表人民解放军陆军主力组建12支步兵方队，被誉为“开国大典红一师”。红军师师史馆馆名由开国上将杨成武将军亲提，馆内由序幕厅、第一展厅、第二展厅和黑陶画厅组成，展示了“开国大典红一师”的诞生、战斗历程和精神风貌。",
    "code": "hsyx",
    "progress": 4,
    "total": 5
  },
  {
    "id": 1,
    "title": "路线五：红色党史教育",
    "name": "路线五：红色党史教育",
    "mapurl": "https://djditu.oss-cn-qingdao.aliyuncs.com/line/luxian5.png",
    "desc1": "红色党史教育",
    "desc2": "分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）\n\n1.乘车前往沣水镇红色东高革命教育基地。早8:30从分局乘车出发，前往沣水镇红色东高革命教育基地，大约9:10到达。 2.参观沣水镇红色东高革命教育基地。9:30开始参观，大约10:10结束。",
    "desc3": "【沣水镇红色东高革命教育基地】位于山东淄博市张店区沣水镇东高村。东高村是沣水镇“革命第一村”，是张店区重要的党性教育基地，同时也是革命传统教育和爱国主义教育的重要场所。基地包含红色东高纪念馆、赵克岭和曹文故居、红色文化广场三部分。红色东高纪念馆在沣水地区第一个党支部旧址上修缮扩建，由岗哨楼、红色东高纪念馆、致合堂药店遗址和党支部秘密活动室组成，集中展示了从东高村走出的10名高级将领和20多名抗日志士的事迹、资料、遗物等。赵克岭、曹文故居主要介绍两名烈士英勇牺牲的革命历史。主要包含以下看点：故居院内与党支部联络地道；赵克岭、曹文烈士故居；具有八百年历史的国槐，曹文烈士被捕后被吊在古槐上严刑拷打，最终被敌人残忍杀害。红色文化广场主要介绍沣水镇、东高村建村发展史。\n【淄博知青博物馆】位于淄博市经开区沣水镇张一村工业园一路，于2019年建立，占地面积约1500亩，该馆共收集淄博知青在各个不同时期的文件、图片、资料一千六百多件，知青使用过的生活物品、乐器、书籍等各类实物近千件。以知青下乡地点为脉络，用质朴自然的展陈形式，客观真实地反映了当年淄博知青的生活情景和广大知情战斗天地的精神风貌。\n【红军师师史馆】位于山东淄博张店区人民西路48号。71345部队前身为中国工农红军第一方面军第一军团第一师，在开国大典上代表人民解放军陆军主力组建12支步兵方队，被誉为“开国大典红一师”。红军师师史馆馆名由开国上将杨成武将军亲提，馆内由序幕厅、第一展厅、第二展厅和黑陶画厅组成，展示了“开国大典红一师”的诞生、战斗历程和精神风貌。",
    "code": "zlfz",
    "progress": 4,
    "total": 5
  }
]

Page({
  data: {
    info: {},
    lineId: -1,
    postShare: !1,
    nowTouchArea: [],
    nowLightLogo: [],
    nowNameCard: [],
    lightCount: -2,
    postInfo: {
      uuid: "",
      url: ""
    },
    firstLoaded: !1,
    postTip: !1,
    shareTip: !1
  },
  closePostShare: function() {
    this.setData({
      postShare: !1
    })
  },
  postImgLoaded: function(t) {
    console.log("postInfo loaded", t.detail),
    this.setData({
      postInfo: t.detail
    })
  },
  showPostShare: function() {
    this.setData({
      postShare: !0,
      postTip: !1,
      shareTip: !0
    })
  },
  closeMask: function() {
    console.log("closeMask"),
    this.setData({
      postTip: !1,
      shareTip: !1
    }),
    o.set(o.LINE_SHARE_TIP_CLOSE + this.data.info.id, !0)
  },
  _loadLineInfo: function(o) {
    var i = this;
    return e(t().mark((function e() {
      var r, s;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          // return wx.showLoading({
          //   title:
          //   "加载中..."
          // }),
          return 1,
          t.prev = 1,
          t.next = 4,
          (0, a.getLineInfo)(o || i.data.lineId);
        case 4:
          r = t.sent,
          s = r.data,
          i.setData({
            info: s,
            nowTouchArea: n.allTouchArea[s.code],
            nowNameCard: n.allNameCard[s.code]
          }),
          t.next = 11;
          break;
        case 9:
          t.prev = 9,
          t.t0 = t.
          catch(1);
        case 11:
          return t.prev = 11,
          wx.hideLoading(),
          t.finish(11);
        case 14:
        case "end":
          return t.stop()
        }
      }), e, null, [[1, 9, 11, 14]])
    })))()
  },
  _loadLightArea: function(i) {
    var r = this;
    return e(t().mark((function e() {
      var s, d, c, l;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          return console.log("_loadLightArea"),
          // wx.showLoading({
          //   title: "加载中..."
          // }),
          1,
          t.next = 4,
          (0, a.getLightList)(i || r.data.lineId);
        case 4:
          s = t.sent,
          d = s.data,
          console.log("lightList", d),
          (c = n.allLightLogo[r.data.info.code]).forEach((function(t) {
            d.includes(t.code) && (t.light = !0)
          })),
          (l = n.allNameCard[r.data.info.code]).forEach((function(t) {
            d.includes(t.code) && (t.light = !0)
          })),
          r.setData({
            nowLightLogo: c,
            nowNameCard: l,
            lightCount: d.length
          },
          (function() {
            r.data.info.totalArea == r.data.lightCount && r.data.firstLoaded && (o.get(o.LINE_SHARE_TIP_CLOSE + r.data.info.id, !1) || r.setData({
              postTip: !0
            }))
          })),
          wx.hideLoading();
        case 13:
        case "end":
          return t.stop()
        }
      }), e)
    })))()
  },
  onLoad: function(a) {
    console.log("测试！！！！！" + a.id);
    if(a.id == 1){
      this.setData({info: line_list[0]});
    }
    var n = this;
    return e(t().mark((function e() {
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          return console.log("option", a),
          n.setData({
            lineId: a.id
          }),
          t.next = 4,
          n._loadLineInfo(a.id);
        case 4:
          if ("1" != a.postshare) {
            t.next = 8;
            break
          }
          n.setData({
            shareTip: !1,
            postTip: !1
          }),
          t.next = 10;
          break;
        case 8:
          return t.next = 10,
          n._loadLightArea(null);
        case 10:
        case "end":
          return t.stop()
        }
      }), e)
    })))()
  },
  nothing: function() {},
  handleAreaTap: function(t) {
    console.log(t.currentTarget.dataset.code),
    wx.navigateTo({
      url: "/pages/zhendi/zhendi-detail?code=" + t.currentTarget.dataset.code
    })
  },
  onReady: function() {},
  onShow: function() {
    this.data.firstLoaded ? this._loadLightArea(null) : this.setData({
      firstLoaded: !0
    })
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {
    return {
      title: "来打卡淄博监管分局“".concat(this.data.info.title, "”主题路线，可获得“").concat(this.data.info.tips, "”勋章！"),
      path: "/pages/zhuti/zhuti-detail?id=" + this.data.lineId,
      imageUrl: this.data.info.mapurl
    }
  },
  onShareTimeline: function() {
    return this.data.postInfo.uuid ? ((0, a.sharePostImg)(null, this.data.info.id).then((function(t) {
      console.log("打卡了"),
      wx.showModal({
        title: "恭喜您已获得3个积分！",
        icon: "none"
      })
    })), {
      title: "我已成功打卡淄博监管分局“".concat(this.data.info.title.replace("线", ""), "”主题路线，获得“").concat(this.data.info.tips, "”勋章！"),
      query: "uuid=".concat(this.data.postInfo.uuid, "&postshare=1&id=").concat(this.data.lineId),
      imageUrl: this.data.info.mapurl
    }) : {
      title: "来打卡淄博监管分局“".concat(this.data.info.title.replace("线", ""), "”主题路线，可获得“").concat(this.data.info.tips, "”勋章！"),
      query: "id=" + this.data.lineId,
      imageUrl: this.data.info.mapurl
    }
  }
});