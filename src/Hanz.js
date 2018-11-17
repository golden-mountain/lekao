import React, { Component } from "react";
import axios from "axios";
import "./App.css";
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
  ]
};

class Hanz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: units.unit7,
      closeWords: false
    };
    console.log("test");
  }

  componentWillMount() {
    const baiduTokenURL =
      "https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=9SObrq7yGXGVjSGmkRr1zybz&client_secret=UTlFBedcnmuyjFLDmuZbdsZm6KFE35h4";
    axios
      .get(baiduTokenURL)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onTingXie() {
    let closeWords = this.state.closeWords;
    this.setState({ closeWords: !closeWords });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onTingXie.bind(this)}>
          {this.state.closeWords ? "复习模式" : "听写模式"}
        </button>
        <header>四年级语文汉字拼音</header>

        {this.state.words.map(v => {
          return (
            <div style={{ float: "left", margin: "20px 5px 5px 25px" }}>
              {v.split("").map((w, k) => {
                return (
                  <div style={{ float: "left" }}>
                    <div style={{ fontSize: "5em", marginBottom: 20 }}>
                      {fromHZ(w)}
                    </div>
                    <div
                      contentEditable
                      onFocus={e => {
                        e.currentTarget.innerText = "";
                      }}
                      key={k}
                      style={{
                        display: "inline-block",
                        fontSize: "10em",
                        border: "1px solid #aaa",
                        padding: "20px",
                        margin: 10,
                        lineHeight: "1em",
                        width: "1em",
                        height: "1em"
                      }}
                    >
                      {this.state.closeWords ? "" : w}
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
