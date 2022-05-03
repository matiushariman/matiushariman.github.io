import * as React from 'react';

import RolesTimeline from './RolesTimeline';
import type { RoleProps } from './constants';

export type ExperienceContentProps = {
  index: number;
  value: number;
  roles: RoleProps[];
};

function ExperienceContent(props: ExperienceContentProps) {
  const { value, index, roles, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experience-content-${index}`}
      aria-labelledby={`experience-content-${index}`}
      {...other}
    >
      {value === index ? <RolesTimeline roles={roles} /> : null}
    </div>
  );
}

export default ExperienceContent;
