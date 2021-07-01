import Background from './src/img/backgfx.jpg';

var sectionStyle = {
  backgroundImage: "url(" + { Background } + ")"
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}