import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function MyHeader() {
  const [iconType, setIconType] = React.useState<boolean>(false);

  let iconState = iconType;

  const onIconClick = () => {
    setIconType(iconState ? (iconState = false) : (iconState = true));
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://www.deltaglobal.com.br/"
            target="_blank"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DELTA SCHOOL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              open={false}
            ></Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Home">
              <Link to="/home" onClick={onIconClick}>
                <IconButton sx={{ p: 0, mx: 3 }}>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Lista de Alunos">
              <Link to="/students-list">
                <IconButton sx={{ p: 0 }}>
                  <ListAltIcon id='listStudentsButton'/>
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Adicionar Aluno">
              <Link to="/students-form">
                <IconButton sx={{ p: 0, mx: 3 }}>
                  <AddIcon id='addStudentButton'/>
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyHeader;
