import AngularJsIcon from '../../../../images/angularjs-icon.png';
import CssIcon from '../../../../images/css3-icon.png';
import HtmlIcon from '../../../../images/html5-icon.png';
import JsIcon from '../../../../images/js-icon.png';
import ReactIcon from '../../../../images/react-icon.png';
import ReduxIcon from '../../../../images/redux-icon.png';
import TsIcon from '../../../../images/ts-icon.png';

export type RoleProps = {
  techIcons: string[];
  title: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type ExperienceProps = {
  companyName: string;
  roles: RoleProps[];
}[];

export const EXPERIENCE: ExperienceProps = [
  {
    companyName: 'BAMBU',
    roles: [
      {
        techIcons: [ReactIcon, ReduxIcon, TsIcon, JsIcon],
        title: 'Senior Front-end Engineer',
        startDate: 'Jan 2021',
        endDate: 'Present',
        achievements: [
          'Architected and developed BAMBU GO (2021 FinovateFall NYC "Best of Show"), world\'s first SaaS robo-advisory platform. ',
        ],
      },
      {
        techIcons: [ReactIcon, ReduxIcon, JsIcon, AngularJsIcon],
        title: 'Front-end Engineer',
        startDate: 'Jan 2017',
        endDate: 'Jan 2021',
        achievements: [
          'Delivered 3 MVPs per week to secure business deals and Series A & Series B fundings.',
        ],
      },
      {
        techIcons: [AngularJsIcon],
        title: 'Software Engineer Intern',
        startDate: 'Dec 2016',
        endDate: 'Dec 2016',
        achievements: ['Secured a full-time role within 6 days of internship.'],
      },
    ],
  },
  {
    companyName: 'Self-employed',
    roles: [
      {
        techIcons: [HtmlIcon, CssIcon, JsIcon],
        title: 'Web Developer',
        startDate: 'Feb 2016',
        endDate: 'Dec 2016',
        achievements: [
          'Successfully delivered projects in Wordpress as a first time self employed person.',
        ],
      },
    ],
  },
];
