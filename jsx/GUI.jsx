import Area from "./Area";
import ForceRearrange from "./ForceRearrange";

const { Component } = React;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default class GUI extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange(value) {
    if (!value) return;
    this.setState({ text: GUI.letterRearranger(value) });
  }

  static letterRearranger(str) {
    if (!str) return "";
    return str.replace(/[a-z]{3,}/ig, word => {
      const [, first, middle, last] = word.match(/^(.)(.+)(.)$/);
      const middleRearranged = shuffleArray(middle.split("")).join("");
      return first + middleRearranged + last;
    });
  }

  render() {
    return <div id="gui">
      <Area text="Normal" handleChange={e => this.handleChange(e.target.value)} />
      <Area text="Rearranged" maxInp="0" val={this.state.text} />
      <ForceRearrange
        handleClick={() => this.handleChange((document.getElementById("areaNormal") || {}).value)} />
    </div>
  }
}
