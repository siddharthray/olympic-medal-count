# Olympic Medal Count App

An interactive application that displays Olympic medal results during the games, showing up to 10 countries that have won the most medals of a given kind in the Olympics.

## Features

- Display countries ranked by gold, silver, bronze, or total medals
- Custom sorting rules with proper tiebreakers:
  - When ranking by total medals, ties are broken by most gold
  - When ranking by gold, ties are broken by most silver
  - When ranking by silver, ties are broken by most gold
  - When ranking by bronze, ties are broken by most gold
- URL parameter support for persistent sorting (`?sort=gold`, `?sort=silver`, etc.)
- Visual indicator for selected sort column
- Client-side sorting without refetching data
- Error handling for production scenarios

## Technology Stack

- React 18
- TypeScript
- CSS3
- Vite

## Implementation Details

- **Reusable Components**: Modular design with focused components
- **Type Safety**: Comprehensive TypeScript interfaces and types
- **Custom Hooks**: Encapsulated URL parameter management
- **Utility Functions**: Separate logic for sorting and data manipulation
- **Constants**: Configuration separated from implementation
- **Service Layer**: Abstracted API calls for better testability

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```
