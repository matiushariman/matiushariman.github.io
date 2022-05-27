import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import * as React from 'react';

const SOCIAL = [
  {
    icon: <GitHubIcon />,
    alt: 'Github',
    url: 'https://github.com/matiushariman',
  },
  {
    icon: <LinkedInIcon />,
    alt: 'Linkedin',
    url: 'https://www.linkedin.com/in/matiushariman/',
  },
  {
    icon: <InstagramIcon />,
    alt: 'Instagram',
    url: 'https://www.instagram.com/matiushariman/',
  },
];

const SocialMediaList = () => {
  const handleOpenSocialUrl: (url: string) => void = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Stack direction="row" spacing={2}>
      {SOCIAL.map((social) => (
        <IconButton
          onClick={() => {
            handleOpenSocialUrl(social.url);
          }}
          color="primary"
          key={social.alt}
        >
          {social.icon}
        </IconButton>
      ))}
    </Stack>
  );
};

export default SocialMediaList;
