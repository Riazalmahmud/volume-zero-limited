import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  menuList = [
    { name: 'Store', url: 'https://example.com/store', icon: 'store_icon.png' },
    { name: 'Mac', url: 'https://example.com/mac', icon: 'mac_icon.png' },
    { name: 'iPad', url: 'https://example.com/ipad', icon: 'ipad_icon.png' },
    { name: 'iPhone', url: 'https://example.com/iphone', icon: 'iphone_icon.png' },
    { name: 'Watch', url: 'https://example.com/watch', icon: 'watch_icon.png' },
    { name: 'Vision', url: 'https://example.com/vision', icon: 'vision_icon.png' },
    { name: 'AirPods', url: 'https://example.com/airpods', icon: 'airpods_icon.png' },
    { name: 'TV & Home', url: 'https://example.com/tv_home', icon: 'tv_home_icon.png' },
    { name: 'AirTag', url: 'https://example.com/airtag', icon: 'airtag_icon.png' },
    { name: 'Accessories', url: 'https://example.com/accessories', icon: 'accessories_icon.png' },
    { name: 'Gift Cards', url: 'https://example.com/gift_cards', icon: 'gift_cards_icon.png' },
  ];

  menu2 = [
    { name: 'Wallet', url: 'https://example.com/wallet', icon: 'wallet_icon.png' },
    { name: 'Apple Card', url: 'https://example.com/apple_card', icon: 'apple_card_icon.png' },
    { name: 'Apple Pay', url: 'https://example.com/apple_pay', icon: 'apple_pay_icon.png' },
    { name: 'Apple Cash', url: 'https://example.com/apple_pay', icon: 'apple_pay_icon.png' },
  ];
  menu3 = [
    { name: 'Manage Your Apple ID', url: 'https://example.com/manage_apple_id', icon: 'manage_apple_id_icon.png' },
    {
      name: 'Apple Store Account',
      url: 'https://example.com/apple_store_account',
      icon: 'apple_store_account_icon.png',
    },
    { name: 'iCloud.com', url: 'https://example.com/icloud', icon: 'icloud_icon.png' },
  ];

  menu4 = [
    { name: 'Apple One', url: 'https://example.com/apple_one', icon: 'apple_one_icon.png' },
    { name: 'Apple TV+', url: 'https://example.com/apple_tv_plus', icon: 'apple_tv_plus_icon.png' },
    { name: 'Apple Music', url: 'https://example.com/apple_music', icon: 'apple_music_icon.png' },
    { name: 'Apple Arcade', url: 'https://example.com/apple_arcade', icon: 'apple_arcade_icon.png' },
    { name: 'Apple Fitness+', url: 'https://example.com/apple_fitness_plus', icon: 'apple_fitness_plus_icon.png' },
    { name: 'Apple News+', url: 'https://example.com/apple_news_plus', icon: 'apple_news_plus_icon.png' },
    { name: 'Apple Podcasts', url: 'https://example.com/apple_podcasts', icon: 'apple_podcasts_icon.png' },
    { name: 'Apple Books', url: 'https://example.com/apple_books', icon: 'apple_books_icon.png' },
    { name: 'App Store', url: 'https://example.com/app_store', icon: 'app_store_icon.png' },
  ];
  menu5 = [
    { name: 'Find a Store', url: 'https://example.com/find_a_store', icon: 'find_store_icon.png' },
    { name: 'Genius Bar', url: 'https://example.com/genius_bar', icon: 'genius_bar_icon.png' },
    { name: 'Today at Apple', url: 'https://example.com/today_at_apple', icon: 'today_at_apple_icon.png' },
    { name: 'Group Reservations', url: 'https://example.com/group_reservations', icon: 'group_reservations_icon.png' },
    { name: 'Apple Camp', url: 'https://example.com/apple_camp', icon: 'apple_camp_icon.png' },
    { name: 'Apple Store App', url: 'https://example.com/apple_store_app', icon: 'apple_store_app_icon.png' },
    {
      name: 'Certified Refurbished',
      url: 'https://example.com/certified_refurbished',
      icon: 'certified_refurbished_icon.png',
    },
    { name: 'Apple Trade In', url: 'https://example.com/apple_trade_in', icon: 'apple_trade_in_icon.png' },
    { name: 'Financing', url: 'https://example.com/financing', icon: 'financing_icon.png' },
    { name: 'Carrier Deals at Apple', url: 'https://example.com/carrier_deals', icon: 'carrier_deals_icon.png' },
    { name: 'Order Status', url: 'https://example.com/order_status', icon: 'order_status_icon.png' },
    { name: 'Shopping Help', url: 'https://example.com/shopping_help', icon: 'shopping_help_icon.png' },
  ];
  menu6 = [
    { name: 'Apple and Business', url: 'https://example.com/today_at_apple', icon: 'today_at_apple_icon.png' },
    { name: 'Shop for Business', url: 'https://example.com/today_at_apple', icon: 'today_at_apple_icon.png' },

    {
      forEducation: [
        { name: 'Apple and Education', url: 'https://example.com/apple_education', icon: 'apple_education_icon.png' },
        { name: 'Shop for K-12', url: 'https://example.com/shop_k12', icon: 'shop_k12_icon.png' },
        { name: 'Shop for College', url: 'https://example.com/shop_college', icon: 'shop_college_icon.png' },
      ],
    },
    {
      forHealthcare: [
        { name: 'Apple in Healthcare', url: 'https://example.com/apple_healthcare', icon: 'apple_healthcare_icon.png' },
        {
          name: 'Health on Apple Watch',
          url: 'https://example.com/health_apple_watch',
          icon: 'health_apple_watch_icon.png',
        },
        {
          name: 'Health Records on iPhone',
          url: 'https://example.com/health_records_iphone',
          icon: 'health_records_iphone_icon.png',
        },
      ],
    },
    {
      forGovernment: [
        { name: 'Shop for Government', url: 'https://example.com/apple_healthcare', icon: 'apple_healthcare_icon.png' },
        {
          name: 'Shop for Veterans and Military',
          url: 'https://example.com/health_apple_watch',
          icon: 'health_apple_watch_icon.png',
        },
      ],
    },
  ];
  appleValuesMenu = [
    { name: 'Accessibility', url: 'https://example.com/accessibility', icon: 'accessibility_icon.png' },
    { name: 'Education', url: 'https://example.com/education', icon: 'education_icon.png' },
    { name: 'Environment', url: 'https://example.com/environment', icon: 'environment_icon.png' },
    {
      name: 'Inclusion and Diversity',
      url: 'https://example.com/inclusion_diversity',
      icon: 'inclusion_diversity_icon.png',
    },
    { name: 'Privacy', url: 'https://example.com/privacy', icon: 'privacy_icon.png' },
    {
      name: 'Racial Equity and Justice',
      url: 'https://example.com/racial_equity_justice',
      icon: 'racial_equity_justice_icon.png',
    },
    { name: 'Supply Chain', url: 'https://example.com/supply_chain', icon: 'supply_chain_icon.png' },

    {
      aboutApple: [
        { name: 'Newsroom', url: 'https://example.com/newsroom', icon: 'newsroom_icon.png' },
        { name: 'Apple Leadership', url: 'https://example.com/apple_leadership', icon: 'apple_leadership_icon.png' },
        {
          name: 'Career Opportunities',
          url: 'https://example.com/career_opportunities',
          icon: 'career_opportunities_icon.png',
        },
        { name: 'Investors', url: 'https://example.com/investors', icon: 'investors_icon.png' },
        {
          name: 'Ethics & Compliance',
          url: 'https://example.com/ethics_compliance',
          icon: 'ethics_compliance_icon.png',
        },
        { name: 'Events', url: 'https://example.com/events', icon: 'events_icon.png' },
        { name: 'Contact Apple', url: 'https://example.com/contact_apple', icon: 'contact_apple_icon.png' },
      ],
    },
  ];

  public year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
