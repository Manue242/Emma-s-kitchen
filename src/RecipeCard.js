import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function RecipeCard({ recipe }) {
  return (
    <Card>
      <CardMedia component="img" height="140" image={recipe.imageUrl} alt={recipe.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;
