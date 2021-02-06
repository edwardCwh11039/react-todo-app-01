import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Information = (props) => {
  let { list } = props;
  let item = list[props.match.params.id];
  let history = useHistory();
  return (
    <div>
      <div>
        <div>Description: {item.desc}</div>
        <div>Category: {item.category}</div>
        <div>Content: {item.content}</div>
      </div>
      <button onClick={()=>history.goBack()}>Back</button>
    </div>
  );
};
const stateToProps = (state) => {
  return {
    list: state.list,
  };
};
export default connect(stateToProps)(Information);
