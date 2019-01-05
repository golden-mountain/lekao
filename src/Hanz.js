import React, { Component } from "react";
import axios from "axios";
import { Icon, Checkbox } from "antd";
import { fromHZ } from "./libraries/hanzi.js";
// console.log(generateWords(unit1["require"]));

import units from "./chinese";

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

  setMyState(o) {
    this.setState(o);
    // localStorage.setItem("words_state", JSON.stringify(o));
  }

  onTingXie() {
    let hideWords = this.state.hideWords;
    this.setMyState({ hideWords: !hideWords, wordsStatus: {} });
  }

  _getUnknownWords(wordsStatus) {
    let words = [];
    // console.log(Object.values(wordsStatus));
    for (var w in wordsStatus) {
      if (!wordsStatus[w]["status"]) {
        words.push(w);
      }
    }
    return words;
  }

  onShowWords() {
    let showAllWords = this.state.showAllWords;
    let words = [];
    let wordsStatus = this.state.wordsStatus;
    if (!showAllWords) {
      // console.log(Object.values(wordsStatus));
      words = this._getUnknownWords(wordsStatus);
    } else {
      words = units[this.state.currentUnit];
    }
    this.setMyState({ showAllWords: !showAllWords, words });
  }

  change(words, word) {
    const wordsStatus = this.state.wordsStatus;
    // if (!wordsStatus[words]) wordsStatus[words] = {};
    if (!wordsStatus[word]) wordsStatus[word] = { status: false, word };
    return e => {
      const w = e.currentTarget.innerText.trim();
      if (w) {
        wordsStatus[word] = {
          status: e.currentTarget.innerText === word,
          word: w
        };
        this.setMyState({ wordsStatus });
        const currentAudio = this.audioRef.current;
        if (wordsStatus[word]["status"]) {
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
    // if (!wordsStatus[words]) wordsStatus[words] = {};
    if (!wordsStatus[word]) wordsStatus[word] = { status: false, word: "" };
    return e => {
      const w = e.currentTarget.innerText.trim();
      if (w) {
        wordsStatus[word] = { status: false, word: "" };
        e.currentTarget.innerText = "";
        this.setMyState({ wordsStatus });
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

  setCollect(words, word) {
    let wordsStatus = this.state.wordsStatus;
    let that = this;
    return () => {
      wordsStatus[word] = {
        status: !wordsStatus[word]["status"],
        word
      };
      let words = that._getUnknownWords(wordsStatus);
      that.setMyState({ wordsStatus, words });
    };
  }

  changeUnit(e) {
    // console.log(e.currentTarget.value, "unit name");
    const unit = e.currentTarget.value;
    // this.reset(unit);
    // const words = Object.keys(units[unit]);
    // const chinese = Object.values(units[unit]);

    this.setMyState({
      currentUnit: unit,
      words: units[unit],
      wordsStatus: {}
    });
  }

  render() {
    return (
      <div className="App" ref={this.rootRef}>
        <select onChange={this.changeUnit.bind(this)}>
          {this.state.units.map((unitName, key) => {
            return (
              <option value={unitName} key={key}>
                {unitName}
              </option>
            );
          })}
        </select>

        <button onClick={this.onShowWords.bind(this)}>
          {this.state.showAllWords ? "显示所有字" : "只显示不会写的字"}
        </button>
        <button onClick={this.onTingXie.bind(this)}>
          {this.state.hideWords ? "复习模式" : "听写模式"}
        </button>
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

                      {this.state.wordsStatus &&
                      this.state.wordsStatus[w].status ? (
                        <span style={{ marginLeft: 5 }}>
                          <strong style={{ color: "green" }}>
                            很棒，再接再厉
                          </strong>
                          <button onClick={this.setCollect(v, w)}>
                            <Icon type="close" />
                            还不会写了
                          </button>
                        </span>
                      ) : (
                        <span style={{ marginLeft: 5 }}>
                          <strong style={{ color: "red" }}>加油哦</strong>
                          <button onClick={this.setCollect(v, w)}>
                            <Icon type="check" />
                            会写了
                          </button>
                        </span>
                      )}
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
