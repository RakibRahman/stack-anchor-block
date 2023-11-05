import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetUserInfo } from '@/store/userSlice';

const Dashboard = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(resetUserInfo());
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h3 className="text-center mt-10">Welcome {user.email}</h3>
      <button
        onClick={handleSignOut}
        className="bg-blue-400 px-4 py-2 rounded-lg text-white"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
