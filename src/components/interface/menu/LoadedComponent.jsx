function LoadedComponent(props) {
  return (
    <div className="d-flex align-items-end">
      <p
        className={`w-100 text-center ${
          props.urls.length !== 0 ? " text-white fw-bold" : " opacity-0"
        }`}>
        Данные загружены
      </p>
    </div>
  );
}

export default LoadedComponent;
