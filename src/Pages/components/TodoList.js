import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const TodoList = (props) => {
  let {
    checkAll,
    list,
    deleteItem,
    deleteSelectedItem,
    checkBox,
    checkBoxAll,
  } = props;
  let history = useHistory();
  const viewItem = (index) => {
    history.push(`/todo/${index}`);
  };
  return (
    <div className="tableList">
      <div>
        <button onClick={deleteSelectedItem} className="btn-top">
          Delete selected
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="checkBoxes_all"
                checked={checkAll}
                onChange={(event) => checkBoxAll(event)}
              />
            </th>
            <th>Description</th>
            <th>Category</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    id="check"
                    checked={item.isChecked}
                    onChange={(event) => checkBox(event, index)}
                  />
                </td>
                <td onClick={() => viewItem(index)}>{item.desc}</td>
                <td onClick={() => viewItem(index)}>{item.category}</td>
                <td
                  className="dltBtn"
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    checkAll: state.checkAll,
    list: state.list,
  };
};
const dispatchToProps = (dispatch) => {
  return {
    deleteItem(index) {
      let action = {
        type: "delete_item",
        index: index,
      };
      dispatch(action);
    },
    checkBox(e, index) {
      let action = {
        type: "select_item",
        value: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        index: index,
      };
      dispatch(action);
    },
    checkBoxAll(e) {
      let action = {
        type: "select_all",
      };
      dispatch(action);
    },
    deleteSelectedItem(e) {
      let action = {
        type: "delete_selected_item",
      };
      dispatch(action);
    },
  };
};
export default connect(stateToProps, dispatchToProps)(TodoList);
