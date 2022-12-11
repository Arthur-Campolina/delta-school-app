import { Grid } from '@mui/material';
import MyCard from 'components/card';

const MyHome = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} mx={3} my={3}>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportBusinessNews/tagreuters.com2022binary_LYNXMPEI6K0RE-FILEDIMAGE.jpg?w=876&h=484&crop=1"
          title="Capacitação profissional"
          paragraph="Ford tem focado sua atuação em pesquisa e desenvolvimento, além da importação de modelos da marca."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="data:image/jpeg;base64,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"
          title="WhatsApp libera atalho"
          paragraph="O WhatsApp disponibilizou um atalho para que usuários não precisem mais criar grupos e remover contatos."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportTechnologyNews/tagreuters.com2022binary_LYNXMPEI80262-FILEDIMAGE.jpg?w=876&h=484&crop=1"
          title="Twitter lança “verificado”"
          paragraph="“Verificado dourado para empresas, verificado cinza para governos, azul para indivíduos (celebridades ou não)."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/image_42.png?w=1024"
          title="IBM ajuda organizações"
          paragraph="IBM assumiu o compromisso de ajudar a enfrentar o desafio existencial da mudança climática."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/galaxias.jpg?w=876&h=484&crop=1"
          title="Telescópio e galáxias"
          paragraph="O telescópio espacial James Webb observou uma das primeiras galáxias formadas após o Big Bang."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/OIVAR0076CR003_oi_solucoes_imagem_iot_supermercado1920x1080px.png?w=1024"
          title="Oi lança Wi-Fi 6E"
          paragraph="Oi inclui em seu portfólio o Wi-Fi 6E,evolução da conectividade sem fio com atuação na frequência 6GHz."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/221118032444-01-vikram-s-111822.jpg?w=876&h=484&crop=1"
          title="Índia lança foguete privado"
          paragraph="Foguete, pesando 546 quilos, foi lançado pela startup indiana Skyroot Aerospace e atingiu uma altitude de 89,5 quilômetros."
        />
      </Grid>
      <Grid item xs={3} mb={1}>
        <MyCard
          data-testid="newsCardHome"
          image="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/rios.jpg?resize=1024,576"
          title="Fotos do rio Amazonas "
          paragraph="Oleg Artemiev compartilhou, em seu Instagram, fotos do rio Amazonas visto da Estação Espacial Internacional."
        />
      </Grid>
    </Grid>
  );
};

export default MyHome;
