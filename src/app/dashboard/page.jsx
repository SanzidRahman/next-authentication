import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

const Dashboard = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <div className=" h-[14rem] w-[32rem] absolute top-[10rem] left-[2rem] text-center sm:left-1/3">
      <div className="mb-5">
        <h1 className="text-2xl">This is DashBoard</h1>
        <h3> Hey ! {user.given_name}</h3>
      </div>

      <LogoutLink className=" bg-violet-600 rounded-xl p-2 pl-4 pr-4 hover:bg-slate-300 shadow-2xl border border-black">Log out</LogoutLink>
    </div>
  );
};

export default Dashboard;
