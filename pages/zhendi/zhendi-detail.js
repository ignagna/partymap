var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
e = require("../../@babel/runtime/helpers/asyncToGenerator"),
a = require("../../api/area"),
n = require("../../utils/storage"),
i = require("../../wxParse/wxParse.js"),
o = require("../../utils/qr2detail");
Page({
  data: {
    
  },
  closeSignSuccess: function() {
    this.setData({
      showSignSuccess: !1
    })
  },
  showSignSuccess: function() {
    this.setData({
      showSignSuccess: !0
    })
  },
  handleToQuestion: function() {
    wx.redirectTo({
      url: "/pages/question/question?areaId=" + this.data.info.id + "&lineId=" + this.data.currentLineId + "&areaCode=" + this.data.areaCode
    })
  },
  handleDakaBtnClick: function(i) {
    var o, r = this;
    wx.showLoading({
      title: "定位中..."
    }),
    wx.getLocation({
      type: "gcj02",
      success: (o = e(t().mark((function e(i) {
        var o, s, c, d, l;
        return t().wrap((function(t) {
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
        }), e, null, [[17, 26, 28, 30]])
      }))),
      function(t) {
        return o.apply(this, arguments)
      }),
      fail: function(t) {
        console.error(t),
        r.showAlert("定位失败，请稍后再试！"),
        wx.hideLoading()
      }
    })
  },
  handleShareClick: function() {
    this.setData({
      postShare: !0
    })
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
  handleBusClick: function() {
    wx.navigateTo({
      url: "/pages/bus/bus"
    })
  },
  getDistance: function(t, e, a, n) {
    var i = t * Math.PI / 180,
    o = a * Math.PI / 180,
    r = i - o,
    s = e * Math.PI / 180 - n * Math.PI / 180,
    c = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(i) * Math.cos(o) * Math.pow(Math.sin(s / 2), 2)));
    return c *= 6378.137,
    c = Math.round(1e5 * c) / 100
  },
  closeAlert: function() {
    this.setData({
      showAlert: !1,
      alertText: ""
    })
  },
  showAlert: function(t) {
    this.setData({
      showAlert: !0,
      alertText: t
    })
  },
  closeMask: function() {
    this.setData({
      showMask: !1
    })
  },
  showMask: function() {
    this.setData({
      showMask: !0
    })
  },
  nothing: function() {},
  handleIdentitySelected: function() {
    this.setData({
      showMask: !1,
      showIdentitySelector: !1
    }),
    this._checkTempSignData()
  },
  _loadAreaInfo: function() {
    var o = this;
    return e(t().mark((function e() {
      var r, s, c, d, l, u, h, f, p, g;
      return t().wrap((function(t) {
        for (;;) switch (t.prev = t.next) {
        case 0:
          if (console.log("_loadAreaInfo"), t.prev = 1, 
          // wx.showLoading({
          //   title: "加载中..."
          // }), 
          1,o.data.postShareEntrance || n.get(n.USER_JWT_KEY, !1)) {
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
          }], s.actName) for (l = s.actName ? s.actName.split("||") : [], u = s.actInfo ? s.actInfo.split("||") : [], h = s.reservationWay ? s.reservationWay.split("||") : [], f = 0, p = l.length; f < p; f++) try {
            g = {
              name: l[f],
              info: u[f],
              reservationWay: h[f]
            },
            d[f] = g
          } catch(t) {
            // t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            // console.error("解析活动列表失败", t)
          }
          o.setData({
            info: s,
            callout: c,
            activies: d,
            currentLineId: -1 == o.data.currentLineId ? s.lineId: o.data.currentLineId
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
      }), e, null, [[1, 22, 25, 27]])
    })))()
  },
  handleMapClick: function() {
    wx.openLocation({
      latitude: this.data.callout.latitude,
      longitude: this.data.callout.longitude,
      scale: 14,
      name: this.data.info.name,
      address: this.data.info.addrText
    })
  },
  handleAddTextClick: function() {
    var t = this;
    this.setData({
      showMap: !1
    },
    (function() {
      t.setData({
        showMap: !0
      })
    }))
  },
  onLoad: function(t) {
    console.log("测试！！！！！" + t.code);
    if(t.code == "zhiqing") {
      this.setData({
        areaCode: "zhiqing",
        areaName: {
          first: "知青博物馆",
          last: "张店区"
        },
        info: {
          "id": 114,
            "code": "zhiqing",
            "mainPic": "https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_head.jpg",
            "name": "淄博知青博物馆",
            "info": "位于淄博市经开区沣水镇张一村工业园一路，于2019年建立，占地面积约1500亩，该馆共收集淄博知青在各个不同时期的文件、图片、资料一千六百多件，知青使用过的生活物品、乐器、书籍等各类实物近千件。以知青下乡地点为脉络，用质朴自然的展陈形式，客观真实地反映了当年淄博知青的生活情景和广大知情战斗天地的精神风貌。",
            "openTime": "为保证参观效果，建议参观人数控制在20人内；建议在淄博知青博物馆展馆前拍一张集体合照。提前准备事项：参观红色东高革命教育基地和淄博知青博物馆需提前电话预约。",
            "tour": "分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）",
            "location": "22.918485,113.643705",
            "addrText": "淄博知青博物馆",
            "bannerList": [
                "https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_1.jpg",
                "https://djditu.oss-cn-qingdao.aliyuncs.com/area/zhiqing_2.jpg"
            ],
            "latitude": "36.775708",
            "longitude": "118.103451",
            "dakaStatus": 0,
            "questionStatus": 0
        },
        callout: {
          id: 1,
          width:10,
          height: 10,
          "latitude": "36.775708",
          "longitude": "118.103451",
        }
      });
    } else if(t.code == "hongjunshi") {
      this.setData({
        areaCode: "hongjunshi",
        areaName: {
          first: "红军师师史馆",
          last: "张店区"
        },
        info: {
          "id": 115,
            "code": "hongjunshi",
            "mainPic": "https://djditu.oss-cn-qingdao.aliyuncs.com/area/hongjunshi_head.jpg",
            "name": "红军师师史馆",
            "info": "位于山东淄博张店区人民西路48号。71345部队前身为中国工农红军第一方面军第一军团第一师，在开国大典上代表人民解放军陆军主力组建12支步兵方队，被誉为“开国大典红一师”。红军师师史馆馆名由开国上将杨成武将军亲提，馆内由序幕厅、第一展厅、第二展厅和黑陶画厅组成，展示了“开国大典红一师”的诞生、战斗历程和精神风貌。",
            "openTime": "为保证参观效果，建议参观人数控制在40人内；红军师师史馆受部队管控，不允许在馆内、门口拍摄照片，不允许拍摄集体合照、不允许进行任何宣传。提前准备事项：参观红军师师史馆需提前发函，列明参观单位名称、时间、人数、事由，并附表列明姓名、职务等信息。",
            "tour": "分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）",
            "location": "22.918485,113.643705",
            "addrText": "红军师师史馆",
            "bannerList": [
                "https://djditu.oss-cn-qingdao.aliyuncs.com/area/hongjunshi_head.jpg"
            ],
            "latitude": "36.81465",
            "longitude": "118.040405",
            "dakaStatus": 0,
            "questionStatus": 0
        },
        callout: {
          id: 1,
          width:10,
          height: 10,
          "latitude": "36.81465",
          "longitude": "118.040405",
        }});
    } else if(t.code == "fengshuizhen") {
      this.setData({
        areaCode: "fengshuizhen",
        areaName: {
          first: "沣水镇红色东高革命教育基地",
          last: "张店区"
        },
        info: {
          "id": 116,
            "code": "fengshuizhen",
            "mainPic": "https://djditu.oss-cn-qingdao.aliyuncs.com/area/fengshuizhen_head.jpg",
            "name": "沣水镇红色东高革命教育基地",
            "info": "位于山东淄博市张店区沣水镇东高村。东高村是沣水镇“革命第一村”，是张店区重要的党性教育基地，同时也是革命传统教育和爱国主义教育的重要场所。基地包含红色东高纪念馆、赵克岭和曹文故居、红色文化广场三部分。红色东高纪念馆在沣水地区第一个党支部旧址上修缮扩建，由岗哨楼、红色东高纪念馆、致合堂药店遗址和党支部秘密活动室组成，集中展示了从东高村走出的10名高级将领和20多名抗日志士的事迹、资料、遗物等。赵克岭、曹文故居主要介绍两名烈士英勇牺牲的革命历史。主要包含以下看点：故居院内与党支部联络地道；赵克岭、曹文烈士故居；具有八百年历史的国槐，曹文烈士被捕后被吊在古槐上严刑拷打，最终被敌人残忍杀害。红色文化广场主要介绍沣水镇、东高村建村发展史。",
            "bannerList": [
                "https://djditu.oss-cn-qingdao.aliyuncs.com/area/fengshuizhen_head.jpg"
            ],
            "openTime": "为保证参观效果，建议参观人数控制在20人内；建议在东高村委和红色文化广场各拍一张集体合照；可视参观时间在东高村内自由参观。",
            "tour": "分局出发（车程40分钟）——沣水镇红色东高革命教育基地（40分钟）—（车程15分钟）—淄博知青博物馆（30分钟）—（车程30分钟）—红军师师史馆（40分钟）——返回（车程10分钟）",
            latitude: "36.757827",
            longitude: "118.124872",
            "dakaStatus": 0,
            "questionStatus": 0
        },
        callout: {
          id: 1,
          width:10,
          height: 10,
          latitude: "36.757827",
          longitude: "118.124872",
        }});
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
    (function() {
      e._loadAreaInfo()
    })) : wx.showToast({
      title: "未找到此地点"
    })
  },
  onShow: function() {
    var a = this;
    return e(t().mark((function e() {
      return t().wrap((function(t) {
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
  _checkTempSignData: function() {
    var i = this;
    return e(t().mark((function e() {
      var o, r;
      return t().wrap((function(t) {
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
      }), e, null, [[3, 12, 14, 16]])
    })))()
  },
  onShareAppMessage: function() {
    return {
      title: "红色引领，全域提升！一起来打卡".concat(this.data.info.name.includes("淄博监管分局") ? "": "淄博监管分局镇").concat(this.data.info.name, "！"),
      path: "/pages/zhendi/zhendi-detail?code=".concat(this.data.areaCode, "&lineId=").concat(this.data.currentLineId),
      imageUrl: this.data.info.mainPic
    }
  },
  onShareTimeline: function() {
    return this.data.postInfo.uuid ? ((0, a.sharePostImg)(this.data.info.id, null).then((function(t) {
      wx.showModal({
        title: "恭喜您获得3个积分！",
        icon: "none"
      })
    })), {
      title: "红色引领，全域提升！我已成功打卡".concat(this.data.info.name.includes("淄博监管分局") ? "": "淄博监管分局镇").concat(this.data.info.name, "！"),
      query: "uuid=".concat(this.data.postInfo.uuid, "&postshare=1&code=").concat(this.data.areaCode, "&lineId=").concat(this.data.currentLineId),
      imageUrl: this.data.info.mainPic
    }) : {
      title: "红色引领，全域提升！一起来打卡".concat(this.data.info.name.includes("淄博监管分局") ? "": "淄博监管分局镇").concat(this.data.info.name, "！"),
      query: "code=".concat(this.data.areaCode, "&lineId=").concat(this.data.currentLineId),
      imageUrl: this.data.info.mainPic
    }
  }
});