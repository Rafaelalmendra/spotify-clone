//layout
import FeedOne from 'src/components/FeedOne';
import DashboardLayout from 'src/components/Layouts/Dashboard';

//styles
import * as S from 'src/styles/pages/home/styles';

const Home = () => {
  return (
    <DashboardLayout>
      <S.Container>
        <FeedOne />
      </S.Container>
    </DashboardLayout>
  );
};

export default Home;
