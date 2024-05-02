import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Store',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [{ label: 'Nfts', route: '/dashboard/nfts' }],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
    {
      group: 'Mac',
      separator: true,
      items: []
    },
    {
      group: 'iphone',
      separator: false,
      items: [
       
      ],
    },
    {
      group: 'watch',
      separator: false,
      items: [
       
      ],
    },
    {
      group: 'vision',
      separator: false,
      items: [
        
      ],
    },
    {
      group: 'AirPods',
      separator: false,
      items: [
        
      ],
    },
    {
      group: 'TV & Home',
      separator: false,
      items: [
        
      ],
    },
    {
      group: 'entertainment',
      separator: false,
      items: [
        
      ],
    },
    {
      group: 'Accessories',
      separator: false,
      items: [
        
      ],
    },
    {
      group: 'Accessories',
      separator: false,
      items: [
        
      ],
    },
    {
      group: 'Support',
      separator: false,
      items: [
       
      ],
    },
  ];
}
