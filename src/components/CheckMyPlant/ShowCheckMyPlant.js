function ShowCheckMyPlant() {
  //localStorage.getItem('MyPickImgs');
  //localStorage.getItem('MyPickNames');
  const storagetest = () => {
    console.log(localStorage.getItem('MyPickImgs'));
    console.log(localStorage.getItem('MyPickNames'));
  };

  return (
    <>
      <button onClick={storagetest}>test</button>
    </>
  );
}

export default ShowCheckMyPlant;
