import React from "react";
import { connect } from "react-redux";

const ContentInput = (props) => {
  let { contValue, contChange } = props;
  return (
    <div>
      <label>Content:</label>
      <textarea value={contValue} onChange={contChange} />
    </div>
  );
};
const stateToProps = (state) => {
  return {
    contValue: state.content,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    contChange(e) {
      let action = {
        type: "change_cont",
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(ContentInput);
