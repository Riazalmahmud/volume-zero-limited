import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Store',
      separator: false,
      route: '/dashboard',
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Blog',
          route: '/dashboard',
          children: [{ label: 'blog', route: '/dashboard' }],
          
        },
       
      ],
    },
    {
      group: 'Mac',
      separator: true,
      route: '/dashboard',
      items: []
      
    },
    {
      group: 'iphone',
      separator: false,
      route: '/dashboard',
      items: [
       
      ],
    },
    {
      group: 'watch',
      separator: false,
      route: '/dashboard',
      items: [
       
      ],
    },
    {
      group: 'vision',
      separator: false,
      route: '/dashboard',
      items: [
        
      ],
    },
    {
      group: 'AirPods',
      separator: false,
      route: '/dashboard',
      items: [
        
      ],
    },
    {
      group: 'TV & Home',
      separator: false,
      route: '/dashboard',
      items: [
        
      ],
    },
    {
      group: 'entertainment',
      separator: false,
      route: '/dashboard',
      items: [
        
      ],
    },
    {
      group: 'Accessories',
      separator: false,
      route: '/dashboard',
      items: [
        
      ],
    },
    {
      group: 'Accessories',
      separator: false,
      route: '/dashboard',
      items: [
        
      ],
    },
    {
      group: 'Support',
      separator: false,
      route: '/dashboard',
      items: [
       
      ],
    },
  ];
}
