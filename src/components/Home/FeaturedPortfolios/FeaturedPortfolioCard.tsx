import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type FeaturedPortfolioCardImgProps = {
  src: string;
  alt: string;
};

type FeaturedPortfolioCardUrlsProps = {
  github: string;
};

export type FeaturedPortfolioCardProps = {
  img: FeaturedPortfolioCardImgProps;
  title: string;
  description: string;
  urls: FeaturedPortfolioCardUrlsProps;
};

export const FeaturedPortfolioCard = ({
  img,
  urls,
  title,
  description,
}: FeaturedPortfolioCardProps) => {
  const handleOpenUrl: (url: string) => void = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Card>
      <CardMedia component="img" height="225" image={img.src} alt={img.alt} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label={`${title} github URL`}
          onClick={() => {
            handleOpenUrl(urls.github);
          }}
        >
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
