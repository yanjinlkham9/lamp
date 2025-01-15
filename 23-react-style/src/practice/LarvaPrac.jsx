import "../style/larva.scss";
import grass from "../assets/grass.png";
export default function LarvaPrac() {
  return (
    <>
      <h4></h4>
      <div className="larva">
        <div className="body body1">
          <div className="eye eye-white">
            <div className="eye eye-black"></div>
          </div>
        </div>
        <div className="body body2"></div>
        <div className="body body3"></div>
        <div className="body body4"></div>
        <div className="body body5"></div>
        <div className="grass">
          <img src={grass} alt="" />
        </div>
      </div>
    </>
  );
}
