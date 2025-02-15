# CineQuest

## Setup Instructions

1. **Get the code**

# Clone the repository

git clone https://github.com/Sairoden/CineQuest.git

# OR

Download ZIP from https://github.com/Sairoden/CineQuest

# Install dependencies

npm install

2. **Environment Setup**

- Request `.env.development` and `.env.production` files from the project owner
- After receiving the files, place them in the root directory
- For environment variables reference, check `.env.example` in the repository

3. **Run the Application**

# Development mode

npm run dev

Visit [http://localhost:3000](http://localhost:3000)

# Production build

npm run build
npm start

Production: [cinequest-sairoden.vercel.app](https://cinequest-sairoden.vercel.app)

## Limitations & Assumptions

- TMDB API rate limits (45 requests/second)
- Maximum 20 items per carousel/list
- Single authentication method (Google only)
- No offline support
- Limited sorting and filtering options
- Basic watchlist functionality
- API-dependent load times
- Image quality depends on TMDB's available resources
- More content details per page

## Implemented Stretch Goals

### Authentication & Security

- Google OAuth integration
- Protected routes
- Secure API handling
- Environment variable protection

### Core Features

- NextJS server API implementation
- Mobile responsiveness support
- Animations and transition effects
- Carousels
- Real-time updates
- Personal watchlist
- Movie/Series/Celebrity pages with details
- Trending sections
- TanStack Query for efficient data caching
- Paginations
- Search query

### Technical Implementation

- TypeScript & clean code architecture
- Best practices & Comments
- SEO and performance optimization
- Component reusability
- Client API usage
- Responsive design across devices
- Loading states and error handling
