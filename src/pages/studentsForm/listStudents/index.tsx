import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Student } from 'types/student';
import Loader from 'components/loader';
import { StudentService } from 'services/studentService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const StudentsList = () => {
  const navigate = useNavigate();
  const [studentsList, setStudentsList] = React.useState<Student[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    StudentService.findAll()
      .then((response) => {
        setStudentsList(response.data.content);
        toast.success('Alunos encontrados com sucesso!');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleDelete = (id: number) => {
    const confirm = window.confirm('Deseja realmente excluir este aluno?');
    if (confirm) {
      setIsLoading(true);
      StudentService.delete(id)
        .then((res) => {
          toast.success('Aluno deletado com sucesso!');
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
      window.location.reload();
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/students-list/edit-student-form/${id}`);
  };

  return (
    <TableContainer component={Paper} sx={{ my: 4 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Sobrenome</TableCell>
              <TableCell align="left">E-mail</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align="left">Rua</TableCell>
              <TableCell align="left">Número</TableCell>
              <TableCell align="left">Bairro</TableCell>
              <TableCell align="left">CEP</TableCell>
              <TableCell align="center">Editar</TableCell>
              <TableCell align="right">Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student) => {
              return (
                <TableRow key={student.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">{student?.name}</TableCell>
                  <TableCell align="left">{student?.surname}</TableCell>
                  <TableCell align="left">{student?.email}</TableCell>
                  <TableCell align="left">{student?.phoneNumber}</TableCell>
                  <TableCell align="left">{student?.street}</TableCell>
                  <TableCell align="left">{student?.number}</TableCell>
                  <TableCell align="left">{student?.neighbourhood}</TableCell>
                  <TableCell align="left">{student?.zipCode}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Editar Aluno">
                      <IconButton onClick={() => handleEdit(student.id)}>
                        <BorderColorOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Deletar Aluno">
                      <IconButton onClick={() => handleDelete(student.id)}>
                        <DeleteForeverOutlinedIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default StudentsList;
