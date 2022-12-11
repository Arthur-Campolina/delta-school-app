import { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StudentService } from 'services/studentService';
import { StatusLineStudent, Student } from 'types/student';
import Loader from 'components/loader';
import { camposFormStudent } from 'utils/formStudent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';

const FormEditStudent = () => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [completedLines, setCompletedLines] = React.useState<StatusLineStudent>({
    linha1: '',
  });

  const loadForm = React.useCallback(() => {
    setLoading(false);
    if (id !== undefined) {
      StudentService.findById(parseInt(id))
        .then((res) => {
          setCompletedLines({
            linha1: res.data.statusL1,
          });
          reset(res.data);
        })
        .catch((err) => {
          toast.error(err.message);
          navigate('/students-list');
        })
        .finally(() => {});
    } else {
      navigate('/students-list');
    }
  }, [id, navigate, reset]);

  React.useEffect(() => {
    loadForm();
  }, [loadForm]);

  const saveForm = (data: any) => {
    if (id !== undefined) {
      StudentService.update(parseInt(id), data)
        .then((res: AxiosResponse<Student>) => {
          toast.success('Aluno atualizado com sucesso!');
          navigate('/students-list');
        })
        .catch((err) => {
          toast.error(err.message);
        })
        .finally(() => {});
    }
  };

  const onSubmit = (data: any) => {
    saveForm(data);
  };

  return (
    <Paper elevation={2}>
      {loading && <Loader />}
      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" gutterBottom m={1} p={1}>
            Página do(a) Aluno(a)
          </Typography>
          <Grid container spacing={3} p={2} mb={2}>
            {camposFormStudent.linha1.map((campo) => (
              <Grid item xs={12} sm={6} key={campo.label}>
                {campo.type === 'text' && (
                  <TextField
                    type={campo.type}
                    placeholder={campo.label}
                    label={campo.label}
                    {...register(campo.name, { required: true })}
                    variant="filled"
                    defaultValue={completedLines}
                  />
                )}
              </Grid>
            ))}
          </Grid>
          <Grid item p={2} mb={2} xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" component="label">
              Imagem
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button variant="contained" component="label" endIcon={<SendIcon />}>
              Salvar
              <input hidden type="submit" />
            </Button>
          </Grid>
        </form>
      )}
    </Paper>
  );
};

export default FormEditStudent;
