import React from "react";
import { connect } from "react-redux";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import ContentInput from "./ContentInput";

const Form = (props) => {
  let { submmitForm } = props;
  return (
    <div className="form">
      <TextInput />
      <SelectInput />
      <ContentInput />
      <button onClick={submmitForm} className="btn-btm">Submit</button>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    submmitForm(e) {
      let action = {
        type: "button_click",
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(Form);
