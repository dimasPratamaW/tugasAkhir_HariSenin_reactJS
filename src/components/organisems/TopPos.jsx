import Profile from "../../assets/icon/profil.png";
import Ping from "../../assets/icon/ping.svg";
import Exit from "../../assets/icon/exit.png";

export default function TopPos() {
  return (
    <>
      <div className="flex h-9 items-center font-serif gap-3 mb-5">
        <div className="grow">
          <p className="pl-5 font-bold text-lg text-[#878787]">
            <span className="text-[#724b68] text-2xl">o</span>
            <span className="text-2xl">doo</span>
          </p>
        </div>

        <div>
          <div>
            <img className="h-7" src={Profile} alt="" />
          </div>
        </div>

        <div className="-ml-2 text-[#3d444e]">
          <p>Harisenin Group7</p>
        </div>

        <div className="mr-5">
          <img className="h-7" src={Ping} alt="" />
        </div>

        <div className="flex items-center gap-2 mr-3 text-[#3d444e]">
          <a href="#">
            <img className="h-7" src={Exit} alt="" />
          </a>
          <a href="#">Exit</a>
        </div>
      </div>
    </>
  );
}
