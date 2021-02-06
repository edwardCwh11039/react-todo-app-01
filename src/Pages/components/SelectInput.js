import React from "react";
import { connect } from "react-redux";

const SelectInput = (props) => {
  let { catValue, catChange } = props;
  return (
    <div>
      <label>Category:</label>
      <select value={catValue} onChange={catChange}>
        <option value=""></option>
        <option value="JS">JS</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
      </select>
    </div>
  );
};
const stateToProps = (state) => {
  return {
    catValue: state.category,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    catChange(e) {
      let action = {
        type: "change_cat",
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(SelectInput);
