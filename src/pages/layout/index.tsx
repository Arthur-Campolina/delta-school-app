import CopyRight from 'components/copyRight';
import MyHeader from 'components/header';
import { Outlet } from 'react-router-dom';

const MyLayout = () => {
  return (
    <>
      <MyHeader />
      <Outlet />
      <CopyRight />
    </>
  );
};
export default MyLayout;
