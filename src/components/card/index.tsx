import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardType = {
  title: string;
  paragraph: string;
  image: string;
};

const MyCard = ({ title, paragraph, image }: CardType) => {
  return (
    
    <Card sx={{ maxWidth: 345 , maxHeight: 345}} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="news image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paragraph}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;
