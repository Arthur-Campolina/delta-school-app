import Loader from 'components/loader';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StudentService } from 'services/studentService';
import { camposFormStudent } from 'utils/formStudent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import React from 'react';
import TaskIcon from '@mui/icons-material/Task';

const FormAddStudent = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState<String>('');
  const navigate = useNavigate();

  const saveForm = (dados: any) => {
    setLoading(true);
    StudentService.create(dados)
      .then(() => {
        toast.success('Aluno adicionado com sucesso!');
        navigate('/students-list');
      })
      .catch((err: any) => {
        toast.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (dados: any) => {
    saveForm(dados);
  };

  const handleImage: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
    if (e.target.files !== null) {
      let url = URL.createObjectURL(e.target.files[0]);
      setImage(url);
    }
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
                  />
                )}
              </Grid>
            ))}
          </Grid>
          <Grid item p={2} mb={2} xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" component="label" endIcon={image.length > 0 && <TaskIcon />}>
              Imagem
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                {...register("image")}
                onChange={handleImage}
              />
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

export default FormAddStudent;
