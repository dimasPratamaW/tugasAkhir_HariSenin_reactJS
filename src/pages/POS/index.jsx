import TopPos from "../../components/organisems/TopPos";
import NominalPos from "../../components/organisems/NominalPos";
import SubmitPos from "../../components/organisems/SubmitPos";
import ContentLeftPos from "../../components/organisems/ContentLeftPos";
import EmptyOrderPos from "../../components/organisems/EmptyOrderPos";
import RootLayouts from "../../layouts/RootLayouts";
import Home from "../../assets/icon/home.png";
import { CaretRightOutlined } from "@ant-design/icons";
import TableIcon from "../../assets/icon/desk.png";
import DataPost from "../../components/organisems/DataPost";

export default function PosPage() {
  return (
    <>
      <RootLayouts>
        <main className="w-full h-screen mt-24 font-serif">
          <div className="container py-3 px-5 shadow-2xl rounded-xl mx-auto">
            <TopPos />
            <div className="grid grid-cols-2 gap-5">
              <div className="grid w-full">
                <div className="w-full h-[500px] border-[1px] border-solid border-black">
                  <EmptyOrderPos />
                </div>
                <div className="h-max">
                  <ContentLeftPos />
                </div>
                <div className="w-full h-[150px] flex justify-center items-center">
                  <SubmitPos />
                  <NominalPos />
                </div>
              </div>
              <div className="w-full h-full overflow-hidden">
                <div className="flex justify-between">
                  <div className="flex justify-center items-center gap-2">
                    <img src={Home} alt="home" className="w-[30px]" />
                    <span>
                      <CaretRightOutlined />
                    </span>
                    <div className="grid place-items-center">
                      <img src={TableIcon} alt="desk" className="w-[20px]" />
                      <span>Desk</span>
                    </div>
                  </div>
                  <input type="text" placeholder="Search product" className="h-max px-2 py-2 rounded-xl text-center border-[1px] border-solid border-gray-500 mb-5" />
                </div>
                <div className="h-full w-full px-3 py-4 bg-gray-400">
                  <DataPost />
                </div>
              </div>
            </div>
          </div>
        </main>
      </RootLayouts>
    </>
  );
}
