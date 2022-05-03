import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import * as React from 'react';

import JsIcon from '../../../images/js-icon.png';
import ReactIcon from '../../../images/react-icon.png';
import ReduxIcon from '../../../images/redux-icon.png';
import TsIcon from '../../../images/ts-icon.png';

const SKILLS = [
  {
    avatar: ReactIcon,
    label: 'ReactJS',
  },
  {
    avatar: ReduxIcon,
    label: 'Redux',
  },
  {
    avatar: TsIcon,
    label: 'Typescript',
  },
  {
    avatar: JsIcon,
    label: 'JavaScript (ES5/ES6)',
  },
];

const ListOfSkills = () => (
  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
    {SKILLS.map((skill) => (
      <Chip
        color="primary"
        variant="outlined"
        avatar={<Avatar src={skill.avatar} alt={skill.label} />}
        key={skill.label}
        label={skill.label}
      />
    ))}
  </Stack>
);

export default ListOfSkills;
