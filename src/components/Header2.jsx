import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    //sticky
    <header className="top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <Sparkles className="w-5 h-5 " />
            </div>
            <div>
              <h1 className="text-xl font-bold ">My React Template</h1>
              <p className="text-sm ">Modern & Modular</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
