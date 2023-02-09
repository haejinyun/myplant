function Modal({ detail, setModalOpen }) {
	console.log(detail.detailData);

	const closeModal = () => {
		setModalOpen(false);
	};
	return (
		<>
			<div>
				<button onClick={closeModal}>X</button>
				<p>모달창입니다.</p>
			</div>
		</>
	);
}

export default Modal;
