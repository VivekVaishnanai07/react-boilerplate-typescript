import { AppBarProps as MuiAppBarProps } from '@mui/material'

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export interface Products {
  id: number,
  createdAt: string,
  description: string,
  media: string,
  title: string,
  totalDownloads: string
}

export const products: Products[] = [
  {
    id: 1,
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: 'https://material-kit-react.devias.io/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '594'
  },
  {
    id: 2,
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: 'https://material-kit-react.devias.io/static/images/products/product_2.png',
    title: 'Medium Corporation',
    totalDownloads: '625'
  },
  {
    id: 3,
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: 'https://material-kit-react.devias.io/static/images/products/product_3.png',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: 4,
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: 'https://material-kit-react.devias.io/static/images/products/product_4.png',
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: 5,
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    media: 'https://material-kit-react.devias.io/static/images/products/product_5.png',
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: 6,
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: 'https://material-kit-react.devias.io/static/images/products/product_6.png',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];
