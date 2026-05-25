export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="nav-text">
          <img
            src="./src/assets/images/extension logo.png"
            className="nav-img"
          />
          <p className="extension-text">Extensions</p>
        </div>
        <div className="setting">
          <img src="./src/assets/images/icon-sun.svg" className="nav-setting" />
        </div>
      </div>
    </>
  );
}
