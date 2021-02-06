const defaultState = {
  descInput: "",
  category: "",
  content: "",
  checkAll: false,
  list: [],
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "change_desc":
      newState.descInput = action.value;
      return newState;
    case "change_cat":
      newState.category = action.value;
      return newState;
    case "change_cont":
      newState.content = action.value;
      return newState;
    case "button_click":
      newState.list.push({
        desc: newState.descInput,
        category: newState.category,
        content: newState.content,
        isChecked: false,
      });
      newState.descInput = "";
      newState.category = "";
      newState.content = "";
      return newState;
    case "delete_item":
      newState.list.splice(action.index, 1);
      return newState;
    case "select_item":
      console.log(action);
      return {
        ...newState,
        list: newState.list.map((item, i) =>
          i === action.index ? { ...item, isChecked: action.value } : item
        ),
      };
    case "select_all":
      console.log(action);
      return {
        ...newState,
        checkAll: !newState.checkAll,
        list: newState.list.map((item) =>
          item.isChecked === newState.checkAll
            ? { ...item, isChecked: !newState.checkAll }
            : item
        ),
      };
    case "delete_selected_item":
      return {
        ...newState,
        list: newState.list.filter((item) => item.isChecked === false),
      };
    default:
      return state;
  }
};
