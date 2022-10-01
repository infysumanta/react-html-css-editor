import React from "react";
import Header from "./Header";
import Editor from "./Editor";
import Preview from "./Preview";

class App extends React.Component {
  state = {
    html: '<center>\n  <img src="https://cutt.ly/JbMvJKT" />\n  <h1>Hello World!</h1>\n</center>',
    css: "h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: auto;\n  border-radius: 20px;\n}",
  };

  handleChange = (value, language) => {
    this.setState({ [language]: value });
  };

  render() {
    let { html, css } = this.state;
    return (
      <div className="view">
        <Header />
        <div className="wrapper">
          <div style={{ marginRight: "1rem" }}>
            <Editor
              language="xml"
              value={html}
              displayLabel="html"
              handleChange={this.handleChange}
            />
            <Editor
              language="css"
              className="m-top"
              value={css}
              handleChange={this.handleChange}
            />
          </div>
          <Preview text="OUTPUT" html={html} css={css} />
        </div>
      </div>
    );
  }
}

export default App;
