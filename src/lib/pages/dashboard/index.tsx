import { useAppSelector } from '@/store/hooks';

const Dashboard = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      <h3 className="text-center mt-10">Welcome {user.email}</h3>
    </div>
  );
};

export default Dashboard;
