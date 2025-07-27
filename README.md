# DEMO Project

A demonstration repository for modern web application development.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd web-application-project
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

This will start both frontend (http://localhost:3000) and backend (http://localhost:3001) servers concurrently.

## 📁 Project Structure

```
├── frontend/                 # Frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   ├── styles/         # CSS/SCSS files
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json        # Frontend dependencies
│
├── backend/                 # Backend API server
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Data models
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Custom middleware
│   │   ├── utils/          # Utility functions
│   │   └── config/         # Configuration files
│   └── package.json        # Backend dependencies
│
├── shared/                  # Shared code between frontend and backend
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Shared constants
│   └── utils/              # Shared utility functions
│
├── docs/                    # Documentation
│   ├── api/                # API documentation
│   ├── development/        # Development guides
│   └── deployment/         # Deployment guides
│
├── tests/                   # Test files
│   ├── frontend/           # Frontend tests
│   ├── backend/            # Backend tests
│   └── integration/        # Integration tests
│
└── package.json            # Root package.json for scripts
```

## 🛠️ Available Scripts

### Root Level Scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm run test` - Run all tests
- `npm run lint` - Lint all code
- `npm run format` - Format code with Prettier
- `npm run install:all` - Install dependencies for all packages
- `npm run clean` - Clean all node_modules and build directories

### Frontend Scripts
- `npm run dev:frontend` - Start frontend development server
- `npm run build:frontend` - Build frontend for production
- `npm run test:frontend` - Run frontend tests

### Backend Scripts
- `npm run dev:backend` - Start backend development server
- `npm run build:backend` - Build backend for production
- `npm run test:backend` - Run backend tests

## 🔧 Development Workflow

1. **Feature Development**
   - Create a new branch: `git checkout -b feature/your-feature-name`
   - Make your changes
   - Run tests: `npm test`
   - Run linting: `npm run lint`
   - Commit changes: `git commit -m "feat: your feature description"`

2. **Code Quality**
   - Pre-commit hooks automatically run Prettier and linting
   - All code must pass tests before merging
   - Follow conventional commit messages

3. **Testing**
   - Write unit tests for new features
   - Run integration tests before deployment
   - Maintain test coverage above 80%

## 📚 Documentation

- [API Documentation](./docs/api/README.md)
- [Development Guide](./docs/development/README.md)
- [Deployment Guide](./docs/deployment/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
