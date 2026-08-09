# Number Management Web Portal

A modern Angular-based web application for managing telephone number blocks by area code, LEA (Local Exchange Area), and number levels.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Number Block Selection**: Interactive grid for selecting number blocks
- **Filtering**: Filter by number levels (FTHH, STHH, THIRD) and LEA
- **Pagination**: Navigate through number blocks with previous/next controls
- **Navigation**: Multi-page structure with Home, Reports, and Contact sections
- **Modern UI**: Clean, professional interface with intuitive controls

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/              # Navigation header
│   │   └── number-management/   # Main number management component
│   ├── pages/
│   │   ├── home/                # Home page (shows number management)
│   │   ├── reports/             # Reports page
│   │   └── contact/             # Contact page
│   ├── app-routing.module.ts    # Application routing
│   ├── app.module.ts            # Main module
│   ├── app.component.ts         # Root component
│   └── app.component.html       # Root template
├── index.html                   # Application entry point
└── styles.css                   # Global styles
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

## Development Commands

- **Start Development Server**: `npm start`
- **Build for Production**: `npm run build`
- **Run Tests**: `npm test`
- **Watch Mode**: `npm run watch`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Angular 17**: Frontend framework
- **TypeScript**: Programming language
- **HTML5**: Markup
- **CSS3**: Styling with responsive design
- **RxJS**: Reactive programming

## Features Detailed

### Number Management Component
- **Number Levels Dropdown**: Select between FTHH, STHH, and THIRD
- **LEA Dropdown**: Choose Local Exchange Area (KLY, CMB, JNP, KTY)
- **Search Button**: Trigger search based on selected filters
- **Area Code Display**: Shows current area code (037 in demo)
- **Block Grid**: Interactive display of available number blocks (201-300)
- **Pagination**: Navigate between pages of blocks
- **Block Selection**: Click to select a specific number block

### Navigation
- **Home**: Main number management interface
- **Reports**: Reports section (placeholder for future implementation)
- **Contact**: Contact information section (placeholder for future implementation)

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## Future Enhancements

- Database integration for real data
- User authentication and authorization
- Advanced filtering and search capabilities
- Export/Import functionality
- Analytics and detailed reports
- Real-time updates with WebSockets

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please contact the development team.
