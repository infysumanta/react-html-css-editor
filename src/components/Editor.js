import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closetag";

class Editor extends React.Component {
  render() {
    return (
      <div className={this.props.className + " window"}>
        <div className="window-header">
          <div className="action-buttons"></div>
          <p className="language">
            {this.props.displayLabel || this.props.language}
          </p>
        </div>
        <div className="window-body">
          <CodeMirror
            value={this.props.value}
            onBeforeChange={(_editor, _data, value) =>
              this.props.handleChange(value, this.props.language)
            }
            options={{
              lineWrapping: true,
              lint: true,
              mode: this.props.language,
              lineNumbers: true,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Editor;
