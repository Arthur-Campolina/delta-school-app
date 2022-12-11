import MyHome from 'pages/home';
import MyLayout from 'pages/layout';
import StudentsList from 'pages/studentsForm/listStudents';
import FormAddStudent from 'pages/studentsForm/addStudent';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormEditStudent from 'pages/studentsForm/editStudent';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="home" element={<MyHome />} />
        <Route path="students-list" element={<StudentsList />} />
        <Route path="students-list">
          <Route index element={<StudentsList />} />
          <Route path="edit-student-form/:id" element={<FormEditStudent />} />
        </Route>
        <Route path="students-form" element={<FormAddStudent />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
