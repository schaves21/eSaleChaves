import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ItemDetail.css';

export default function ItemDetail({ data }) {
    return ( 
      <div className="itemDetail">
        <Card  sx={{ maxWidth: 345 }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <CardMedia
            component="img"
            height="250"
            image={data.image}
            alt="producto"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.price}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }