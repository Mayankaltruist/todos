import { ALL, ACTIVE, COMPLETE } from "../constants";

function generateId() {
  return String(Math.floor(Math.random() * 100000));
}

function getNoTodoMessage(currentTabId) {
  switch (currentTabId) {
    case ACTIVE:
      return "No active items";
    case COMPLETE:
      return "No complete items";
    case ALL:
    default:
      return "No items";
  }
}

export { generateId, getNoTodoMessage };
