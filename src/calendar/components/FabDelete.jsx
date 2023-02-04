import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { startdelingEvent, hasEventSelected } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const onClick = () => {
    startdelingEvent();
  };
  return (
    <button
      onClick={onClick}
      style={{ display: hasEventSelected && !isDateModalOpen ? "" : "none" }}
      className="btn btn-danger fab-danger"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
