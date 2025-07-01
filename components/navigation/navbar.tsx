import { Bolt, CircleUser, House, Menu, TicketPlus } from "lucide-react";

const Navbar = () => {
  return (
    <section className="p-10 w-full h-[70px] sm:w-[70px] sm:h-full flex gap-7 justify-center sm:justify-between items-center flex-row sm:flex-col bg-greenblue opacity-60">
    <Menu size={32} color="#ffffff" className="hover:cursor-pointer hidden sm:block" />
    <div className="flex flex-row justify-center items-center sm:flex-col sm:justify-between sm:items-center gap-7">
      <House size={32} color="#ffffff" className="hover:cursor-pointer" />
      <CircleUser size={32} color="#ffffff" className="hover:cursor-pointer" />
      <TicketPlus size={32} color="#ffffff" className="hover:cursor-pointer" />
    </div>
    <Bolt size={32} color="#ffffff" className="hover:cursor-pointer" />
  </section>
  );
};

export default Navbar;