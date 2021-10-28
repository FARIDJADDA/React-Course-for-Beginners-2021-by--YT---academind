function Modal(props) {
  const closeModal = props.onClick;
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt"onClick={closeModal}>Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;