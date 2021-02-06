import React from "react";
import { connect } from "react-redux";

const TextInput = (props) => {
  let { descValue, descChange } = props;
  return (
    <div>
      <label>Description:</label>
      <input type="text" value={descValue} onChange={descChange} />
    </div>
  );
};
const stateToProps = (state) => {
  return {
    descValue: state.descInput,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    descChange(e) {
      let action = {
        type: "change_desc",
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TextInput);
