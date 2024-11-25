# SnippetBase

SnippetBase is a platform for developers to organize, share, and discover reusable React components. Save your favorite components, manage them by tags, and access them easily in future projects.

## Features

- **Add and Save Components**: Organize reusable React components by name, description, and tags.
- **Preview Components**: Render and test components interactively with live previews.
- **Search and Filter**: Quickly search and filter components by name, description, or tags.
- **Tagging System**: Categorize components with tags to keep everything organized.
- **Export and Reuse**: Copy code or export components for use in other projects.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Supabase (Authentication, Database, Storage)
- **Live Preview**: React Live or similar for rendering JSX/TSX components
- **Database**: PostgreSQL (via Supabase)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn (npm is preferred)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/snippetbase.git

   ```

2. Navigate to the project directory:

   ```bash
   cd snippetbase

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Set up your environment variables by creating a `.env` file in the root of the project:

   ```plaintext
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>

   ```

5. Start the development server:

   ```bash
   npm run dev

   ```

6. Open your browser and visit `http://localhost:3000` to see the app in action.

## Usage

1. **Sign Up / Log In**: Use the built-in authentication to create an account or log in.
2. **Add Components**: Go to the “Add Component” section to save new components with descriptions, tags, and JSX code.
3. **Browse and Search**: Use the search and filter options to find components.
4. **Live Preview**: Click on any component to view a live preview and interact with its props.

## Contributing

We welcome contributions to SnippetBase! If you want to help out, here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Supabase](https://supabase.com) for providing a powerful backend solution.
- [React Live](https://github.com/FormidableLabs/react-live) for the live component preview functionality.
- [Tailwind CSS](https://tailwindcss.com) for an easy-to-use utility-first CSS framework.
