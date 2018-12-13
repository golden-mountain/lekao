import React, { Component } from "react";
import "./App.css";
const units = {
  unit1: {
    running: "跑步",
    basketball: "篮球",
    "roller skating": "滑旱冰",
    "jumping rope": "跳绳",
    "ping-pong": "乒乓球",
    "what about": "怎么样",
    interesting: "有趣的",
    often: "经常",
    "be good at": "擅长",
    late: "晚",
    swim: "游泳",
    friend: "朋友",
    father: "父亲",
    "get up": "起床"
  },
  unit2: {
    "Visit one's grandparents": "看望(外)祖父母",
    "go to a drawing club": "去绘画俱乐部",
    "climb a hill": "爬山",
    "pick fruit": "采摘水果",
    "play computer games": "玩电脑游戏",
    "go fishiing": "钓鱼",
    "go to the cinema": "看电影",
    "on the weekend": "在周末",
    fun: "有趣的",
    always: "总是",
    step: "踏,踩",
    paint: "颜料",
    evening: "傍晚;黄昏",
    dirty: "脏的",
    their: "他们的",
    house: "房子",
    poor: "可怜的;贫穷的",
    hope: "希望",
    so: "那么",
    Saturday: "星期六",
    near: "靠近",
    day: "白天"
  },
  unit3: {
    usually: "通常",
    "by bus": "乘公交车",
    "by boat": "乘小船",
    "by ship": "乘轮船",
    "by car": "乘小汽车",
    "by taxi": "乘出租车",
    "by bike": "骑自行车",
    "on foot": "步行",
    "by school bus": "乘校车",
    "by subway": "乘地铁",
    "by plane": "乘飞机",
    "by train": "乘火车",
    garden: "花园",
    "meeting place": "集合地点",
    gate: "大门",
    transportation: "交通",
    film: "电影",
    earth: "地球;世界",
    snow: "雪",
    theatre: "剧场",
    come: "来",
    enjoy: "欣赏",
    park: "公园",
    apple: "苹果"
  },
  unit4: {
    pen: "钢笔",
    knife: "小刀",
    eraser: "橡皮",
    crayon: "蜡笔",
    scissors: "剪刀",
    "glue stick": "胶棒",
    paper: "纸",
    use: "使用",
    please: "请",
    find: "寻找",
    "Information Center": "咨询中心",
    "Execute me.": "对不起,打扰一下",
    phone: "电话",
    dad: "爷爷",
    hamburger: "汉堡包",
    ruler: "尺子",
    pencil: "铅笔",
    schoolbag: "书包",
    shop: "商店"
  },
  unit5: {
    "climb on the window ledge": "爬窗台",
    dangerous: "危险的",
    "play with fire": "玩火",
    "Be careful!": "当心!",
    "run down the stairs": "跑下楼梯",
    sidewalk: "人行道",
    "wait for": "等待",
    safe: "安全的",
    stop: "停",
    street: "街道",
    "safety rule": "安全规则",
    green: "绿色的",
    red: "红色的",
    "play football": "玩足球"
  },
  unit6: {
    nurse: "护士",
    cook: "厨师",
    doctor: "医生",
    "bus driver": "公交司机",
    "police officer": "警官",
    "taxi driver": "出租司机",
    farmer: "农民",
    worker: "工人",
    "in the future": "将来",
    great: "好极了",
    job: "工作",
    sick: "有病的",
    people: "人们",
    teach: "教",
    just: "只是",
    myself: "我自己",
    sound: "听起来",
    Monday: "星期一",
    Tuesday: "星期二",
    Wednesday: "星期三",
    Thursday: "星期四",
    Friday: "星期五",
    teacher: "老师"
  },
  人称: {
    we: "我们",
    me: "我(放后面)",
    our: "我们的",
    their: "他们的",
    them: "他们",
    she: "她",
    her: "她的",
    he: "他",
    him: "他(放后面)",
    his: "他的",
    you: "你",
    your: "你们",
    yourself: "你(们)自己",
    myself: "我自己",
    herself: "她自己",
    himself: "他自己",
    ourselves: "我们自己",
    thes: "他们自己"
  },
  介词: {
    on: "在上面",
    in: "在里面",
    at: "在..某个地方",
    under: "在下面",
    side: "边上",
    top: "上面",
    bottom: "下面",
    left: "左边",
    right: "右边",
    about: "关于",
    with: "和",
    from: "从",
    to: "到"
  },
  常用词: {
    yes: "是的",
    no: "不是",
    the: "那个",
    do: "做",
    "don't": "不做",
    does: "第三人称 做",
    "doesn't": "第三人称 不做",
    am: "是,放在I后",
    is: "是,放在第三人称单数后,如it, apple",
    are: "是, 放在复数后, you后",
    good: "好",
    bad: "坏",
    like: "喜欢",
    love: "爱",
    there: "那里",
    here: "这里",
    where: "哪里",
    why: "为什么",
    when: "什么时候",
    what: "什么事",
    whether: "是否"
  },
  数字: {
    one: "一",
    two: "二",
    three: "三",
    four: "四",
    five: "五",
    six: "六",
    seven: "七",
    eight: "八",
    nine: "九",
    ten: "十"
  },
  提问: {
    "Yes, I do": "Do you have breakfirst?",
    "No, I don't": "Do you like you classmate?",
    "Yes, I am": "Are you good at it?",
    "No, I am not": "Are you from USA?",
    "No, she doesn't": "does she like running?",
    "Yes, she does": "does she have dinner?",
    "Yes, it is": "is it a ball?",
    "No, she is not": "is she a girl?",
    "No, I can't help you": "can you help me?",
    "Yes, I can": "can you play ping-pong?"
  }
};

function RandomNumBoth(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range); //四舍五入
  return num;
}

function generateWords(orgWords, level = 2) {
  let blanks = [];
  let toFillWords = orgWords.map((words, index) => {
    // caculate move out numbers
    let numBlanks = RandomNumBoth(1, level);
    let leftLength = words.length;
    let lastPos = 0;
    let returnWords = words.split("");
    for (let i = 0; i < numBlanks; i++) {
      let blankLength;
      if (level >= leftLength) {
        blankLength = RandomNumBoth(1, leftLength);
      } else {
        blankLength = RandomNumBoth(1, level);
      }
      //console.log('blank length', blankLength);

      let blankPos = lastPos + RandomNumBoth(1, level);
      if (blankPos + blankLength > words.length) break;
      //console.log('blank pos', blankPos);

      // cacualte move out length , save to array
      let blank = words.substr(blankPos, blankLength);
      // console.log(
      //   "pos:" + blankPos + ",length:" + blankLength + ",blank:" + blank
      // );
      for (let k = 0; k < blankLength; k++) {
        // if (returnWords[k + blankPos] !== " ") {
        returnWords[k + blankPos] = "_";
        // }
      }
      if (!blanks[index]) {
        blanks[index] = [];
      }
      blanks[index].push(blank);
      leftLength -= blankLength;
      lastPos += blankPos + 1;
    }
    return returnWords;
  });
  return [toFillWords, blanks];
}

// console.log(generateWords(unit1["require"]));

class App extends Component {
  constructor(props) {
    super(props);
    // this.reset("unit1");
    const unit = "unit1";
    const words = Object.keys(units[unit]);
    const chinese = Object.values(units[unit]);
    this.state = {
      words: generateWords(words),
      orgWords: words,
      orgChinese: chinese,
      answers: [],
      checks: [],
      views: [],
      unit,
      units: Object.keys(units)
    };
  }

  reset(unit) {
    unit = unit || this.state.unit;
    // console.log(unit);
    const words = Object.keys(units[unit]);
    const chinese = Object.values(units[unit]);
    // console.log(words);
    this.setState({
      words: generateWords(words),
      orgWords: words,
      orgChinese: chinese,
      answers: [],
      checks: [],
      views: [],
      unit,
      units: Object.keys(units)
    });
  }

  refresh() {
    return () => this.reset(this.state.unit);
  }

  change(i, k) {
    const orgAnswers = this.state.words[1];
    const checks = this.state.checks;
    return e => {
      // console.log(this.state.answers);
      const answers = this.state.answers;

      if (!this.state.answers[i]) {
        answers[i] = [];
      }
      // console.log(answers[i], "...");
      answers[i][k] = e.currentTarget.innerText;
      this.setState({ answers });

      const a = answers[i].filter(v => v);
      const b = orgAnswers[i].filter(v => v);

      // console.log(
      //   b.join("").replace(" ", ""),
      //   a.join("").replace(" ", ""),
      //   b,
      //   a
      // );
      checks[i] = b.join("").replace(" ", "") === a.join("").replace(" ", "");
      this.setState({ checks });
    };
  }

  setViews(i) {
    return () => {
      const views = this.state.views;
      views[i] = !!!views[i];
      this.setState({ views });
    };
  }

  changeUnit(e) {
    // console.log(e.currentTarget.value, "unit name");
    const unit = e.currentTarget.value;
    this.reset(unit);
    // const words = Object.keys(units[unit]);
    // const chinese = Object.values(units[unit]);

    // this.setState({
    //   unit,
    //   org: words,
    //   words: generateWords(words),
    //   orgWords: words,
    //   orgChinese: chinese,
    //   checks: [],
    //   answers: []
    // });
  }

  render() {
    const [blankWords] = this.state.words;
    const rightAnswers = this.state.checks.filter(v => v);
    return (
      <div className="App">
        <header>四年级英语测试题</header>
        <div>
          成绩: {Math.floor((rightAnswers.length / blankWords.length) * 100)}{" "}
          (正确: {rightAnswers.length} 错误:
          {blankWords.length - rightAnswers.length})
        </div>
        <select onChange={this.changeUnit.bind(this)}>
          {this.state.units.map((unitName, key) => {
            return (
              <option value={unitName} key={key}>
                {unitName}
              </option>
            );
          })}
        </select>
        <button onClick={this.refresh.bind(this)}>重做一遍</button>
        <ol>
          {blankWords.map((words, i) => {
            return (
              <li className="tester" key={"word" + i}>
                <div className="word">
                  {words.map((w, k) => {
                    if (w === "_") {
                      return (
                        <div
                          key={"w" + k}
                          contentEditable="true"
                          className="editable"
                          onBlur={this.change(i, k)}
                          onFocus={e => {
                            e.currentTarget.innerText = "";
                          }}
                        />
                      );
                    } else {
                      return w;
                    }
                  })}
                  [ {this.state.orgChinese[i]} ]
                </div>
                <div className="answer">
                  [
                  {this.state.checks[i] ? (
                    <span className="good">Good</span>
                  ) : (
                    <span className="wrong">Wrong</span>
                  )}
                  ]
                </div>
                <div className="answer">
                  <button onClick={this.setViews(i)}>?</button>
                  {this.state.views[i] ? (
                    <span>{this.state.orgWords[i]}</span>
                  ) : (
                    ""
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
