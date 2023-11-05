import { Sidebar } from '@/lib/components/common/Sidebar';
import { TopBar } from '@/lib/components/common/Topbar';

const Home = () => {
  return (
    <div className="flex min-h-[60vh] justify-between gap-4">
      <Sidebar />
      <div>
        <TopBar />
      </div>
    </div>
  );
};

export default Home;
