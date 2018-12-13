import React, { Component } from "react";
import axios from "axios";
import { Icon } from "antd";
import { fromHZ } from "./libraries/hanzi.js";
// console.log(generateWords(unit1["require"]));

const units = {
  unit7: [
    "允许",
    "悲哀",
    "诱惑",
    "余地",
    "道德",
    "实施",
    "骄傲",
    "界栏",
    "横穿",
    "顺序",
    "抢座",
    "满不在乎",
    "方便",
    "规则",
    "翻越",
    "喂养",
    "搁在"
  ],
  unit9: [
    "自豪",
    "侵占",
    "振奋人心",
    "歌词",
    "弹琴",
    "催人奋进",
    "尤其",
    "豁然开朗",
    "贝多芬",
    "激动",
    "卷起",
    "乌云",
    "仿佛",
    "安详",
    "奏乐",
    "清脆",
    "猫头鹰",
    "异想天开",
    "竟然",
    "不折不扣",
    "油然而生",
    "万众一心",
    "勇往直前",
    "居安思危",
    "倾注",
    "鼓舞",
    "丝毫",
    "豪言壮语",
    "占领",
    "站立",
    "究竟",
    "竞赛",
    "骄傲",
    "娇柔"
  ],
  unit10: [
    "金币",
    "懒惰",
    "省吃俭用",
    "挣钱",
    "筋疲力尽",
    "列车",
    "挤歪",
    "手疾眼快",
    "战士",
    "拒绝",
    "众目睽睽",
    "夸奖",
    "国旗",
    "满头大汗",
    "熊熊大火",
    "大喊大叫",
    "喜气洋洋",
    "人来人往",
    "千恩万谢",
    "秋高气爽",
    "撕破",
    "好心肠",
    "捏着",
    "欠债",
    "慈和",
    "风霜",
    "接纳",
    "当牛做马",
    "辛勤",
    "坚决",
    "辩解",
    "拾金不昧",
    "散落",
    "启动",
    "遗憾",
    "感叹",
    "栉风沐雨",
    "珍惜",
    "体谅",
    "浮现"
  ]
};

class Hanz extends Component {
  audios = {
    good:
      "http://boscdn.bpc.baidu.com/v1/developer/7c91da04-8cae-4833-9b45-636c01caee68.mp3",
    bad:
      "http://boscdn.bpc.baidu.com/v1/developer/0371bff2-9f37-4f12-b7ed-c04ccbffe4c9.mp3"
  };

  constructor(props) {
    super(props);
    this.state = {
      units: Object.keys(units),
      words: units.unit9,
      wordsStatus: {},
      hideWords: false,
      currentUnit: "unit9"
    };
    this.audioRef = React.createRef();
    this.rootRef = React.createRef();
  }

  componentWillMount() {
    // const baiduTokenURL =
    //   "https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=9SObrq7yGXGVjSGmkRr1zybz&client_secret=UTlFBedcnmuyjFLDmuZbdsZm6KFE35h4";
    // axios
    //   .get(baiduTokenURL)
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }

  onTingXie() {
    let hideWords = this.state.hideWords;
    this.setState({ hideWords: !hideWords, wordsStatus: {} });
  }

  change(words, word) {
    const wordsStatus = this.state.wordsStatus;
    if (!wordsStatus[words]) wordsStatus[words] = {};
    if (!wordsStatus[words][word])
      wordsStatus[words][word] = { status: false, word };
    return e => {
      const w = e.currentTarget.innerText.trim();
      if (w) {
        wordsStatus[words][word] = {
          status: e.currentTarget.innerText === word,
          word: w
        };
        this.setState({ wordsStatus });
        const currentAudio = this.audioRef.current;
        if (wordsStatus[words][word]["status"]) {
          currentAudio.src = this.audios.good;
        } else {
          currentAudio.src = this.audios.bad;
        }
        currentAudio.play();
        // console.log(currentAudio);
      }
    };
  }

  focus(words, word) {
    const wordsStatus = this.state.wordsStatus;
    if (!wordsStatus[words]) wordsStatus[words] = {};
    if (!wordsStatus[words][word])
      wordsStatus[words][word] = { status: false, word: "" };
    return e => {
      const w = e.currentTarget.innerText.trim();
      if (w) {
        wordsStatus[words][word] = { status: false, word: "" };
        e.currentTarget.innerText = "";
        this.setState({ wordsStatus });
      }
    };
  }

  reset(elementID, words) {
    // const document = document.getElementById("word-" + k);
    // console.log(document);
    // console.log(this.rootRef);
    return () => {
      const dom = document.getElementById(elementID);
      dom.innerText = words;
    };
  }

  changeUnit(e) {
    // console.log(e.currentTarget.value, "unit name");
    const unit = e.currentTarget.value;
    // this.reset(unit);
    // const words = Object.keys(units[unit]);
    // const chinese = Object.values(units[unit]);

    this.setState({
      words: units[unit],
      wordsStatus: {}
    });
  }

  render() {
    return (
      <div className="App" ref={this.rootRef}>
        <button onClick={this.onTingXie.bind(this)}>
          {this.state.hideWords ? "复习模式" : "听写模式"}
        </button>
        <select onChange={this.changeUnit.bind(this)}>
          {this.state.units.map((unitName, key) => {
            return (
              <option value={unitName} key={key}>
                {unitName}
              </option>
            );
          })}
        </select>
        <header>四年级语文汉字拼音</header>

        {this.state.words.map((v, i) => {
          return (
            <div
              style={{ float: "left", margin: "20px 5px 5px 25px" }}
              key={"w" + i}
            >
              {v.split("").map((w, k) => {
                return (
                  <div style={{ float: "left" }} key={k}>
                    <div style={{ fontSize: "5em", marginBottom: 20 }}>
                      {fromHZ(w)}
                    </div>
                    <div
                      contentEditable
                      onFocus={this.focus(v, w)}
                      onBlur={this.change(v, w)}
                      id={"word-" + i + "-" + k}
                      style={{
                        display: "inline-block",
                        fontSize: "10em",
                        border: "1px solid #aaa",
                        padding: "20px",
                        margin: 10,
                        lineHeight: "1.2em",
                        width: "1.5em",
                        height: "1.5em"
                      }}
                    >
                      {this.state.hideWords ? "" : w}
                    </div>
                    <div className="icons-list">
                      <audio ref={this.audioRef} src={this.audios.good} />
                      <button onClick={this.reset("word-" + i + "-" + k, w)}>
                        <Icon type="redo" />
                      </button>
                      <span style={{ marginLeft: 5 }}>
                        {this.state.wordsStatus[v] &&
                        this.state.wordsStatus[v][w] &&
                        this.state.wordsStatus[v][w].status ? (
                          <strong style={{ color: "green" }}>
                            很棒，再接再厉
                          </strong>
                        ) : (
                          <strong style={{ color: "red" }}>加油哦</strong>
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Hanz;
