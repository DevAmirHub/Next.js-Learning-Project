# Next.js Learning Project

A comprehensive Next.js 16 project demonstrating modern web development concepts, routing patterns, API integration, and best practices. This project is perfect for learning Next.js fundamentals and advanced features.

## 🚀 Tech Stack

- **Next.js 16.0.4** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## 📚 Next.js Concepts Demonstrated

### 1. **App Router Architecture**
- Modern file-based routing system
- Nested layouts and route groups
- Server and Client Components

### 2. **Dynamic Routes**
- Single dynamic segments: `[post_id]`, `[course_id]`, `[album_id]`
- Multiple dynamic segments: `[...product]` (catch-all routes)
- Nested dynamic routes with categories

### 3. **Route Groups**
- `(frontend)` - Organizes frontend routes without affecting URL structure
- Shared layouts for grouped routes

### 4. **Layouts & Nested Layouts**
- Root layout (`app/layout.tsx`) - Global layout with fonts and metadata
- Route group layout (`app/(frontend)/layout.tsx`) - Shared Navigation and Footer
- Layout composition and nesting

### 5. **Server Components & Async Components**
- Server-side data fetching
- Async/await in Server Components
- Promise-based params handling (Next.js 16 feature)

### 6. **Data Fetching**
- Server-side API calls
- Data revalidation with `next: { revalidate }`
- Error handling in data fetching
- TypeScript interfaces for API responses

### 7. **API Service Layer**
- Separated API logic in `app/lib/api/`
- Reusable API functions
- Centralized error handling
- Type-safe API calls

### 8. **Middleware**
- Request interception
- Cookie-based authentication checks
- Route protection patterns

### 9. **Metadata & SEO**
- Dynamic metadata configuration
- Title templates
- SEO-friendly structure

### 10. **Error Handling**
- Custom `not-found.tsx` page
- Error boundaries
- API error handling

### 11. **Styling**
- Tailwind CSS utility classes
- Dark mode support
- Responsive design patterns
- Component-based styling

## 📁 Project Structure

```
app/
├── layout.tsx                 # Root layout with fonts & metadata
├── page.tsx                   # Home page
├── not-found.tsx              # 404 error page
├── globals.css                # Global styles
│
├── (frontend)/                 # Route group (doesn't affect URL)
│   ├── layout.tsx              # Frontend layout (Navigation + Footer)
│   ├── page.tsx                # Home page
│   │
│   ├── posts/                  # Posts section
│   │   ├── page.tsx            # Posts list
│   │   └── [post_id]/          # Dynamic route
│   │       └── page.tsx
│   │
│   ├── albums/                 # Albums section
│   │   ├── page.tsx
│   │   └── [album_id]/
│   │       └── page.tsx
│   │
│   ├── comments/               # Comments section
│   │   ├── page.tsx
│   │   └── [comment_id]/
│   │       └── page.tsx
│   │
│   ├── blog/                   # Blog with nested routes
│   │   ├── page.tsx
│   │   └── category/
│   │       ├── page.tsx
│   │       ├── education/
│   │       │   ├── page.tsx
│   │       │   └── [blog_id]/
│   │       └── sports/
│   │           ├── page.tsx
│   │           └── [blog_id]/
│   │
│   ├── course/                 # Course section
│   │   ├── page.tsx
│   │   └── [course_id]/
│   │       └── page.tsx
│   │
│   └── shop/                   # Shop with catch-all routes
│       ├── page.tsx
│       └── products/
│           ├── page.tsx
│           └── [...product]/   # Catch-all route
│               └── page.tsx
│
├── Components/                 # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── RedirectClientButton.tsx
│   └── RedirectServerButton.tsx
│
└── lib/
    └── api/                    # API service layer
        ├── index.ts            # Central exports
        ├── posts.ts
        ├── albums.ts
        └── cumments.ts

middleware.ts                   # Request middleware
next.config.ts                  # Next.js configuration
```

## 🎯 Key Features

### Routing Patterns
- ✅ Static routes
- ✅ Dynamic routes (`[id]`)
- ✅ Catch-all routes (`[...slug]`)
- ✅ Nested routes
- ✅ Route groups
- ✅ Nested layouts

### Data Fetching
- ✅ Server Components with async/await
- ✅ API service layer separation
- ✅ Data revalidation
- ✅ Error handling
- ✅ TypeScript type safety

### UI/UX
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Navigation component
- ✅ Footer component
- ✅ Loading states
- ✅ Error pages

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd first-nextjs-project

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📖 Learning Path

This project is structured to help you learn Next.js concepts progressively:

1. **Start with**: Basic routing (`app/page.tsx`, `app/(frontend)/page.tsx`)
2. **Learn**: Dynamic routes (`[post_id]`, `[course_id]`)
3. **Explore**: Nested routes (`blog/category/education`)
4. **Understand**: Layouts and route groups
5. **Master**: API integration and data fetching
6. **Advanced**: Middleware and route protection

## 🔍 Key Concepts Explained

### Route Groups `(frontend)`
Route groups allow you to organize routes without affecting the URL structure. All routes inside `(frontend)` share the same layout.

### Dynamic Routes
- `[id]` - Single dynamic segment
- `[...slug]` - Catch-all route (matches multiple segments)

### Server Components
By default, all components in the App Router are Server Components. They can directly fetch data and don't send JavaScript to the client.

### Async Params (Next.js 16)
In Next.js 16, route params can be Promises. Always handle both Promise and direct params for compatibility:

```typescript
export default async function Page({ params }: { 
  params: Promise<{ id: string }> | { id: string } 
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const id = resolvedParams.id;
  // ...
}
```

## 🌐 API Integration

The project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) as a mock API for:
- Posts
- Albums
- Comments

API services are separated in `app/lib/api/` for better organization and reusability.

## 📝 Notes

- This project uses Next.js 16 with the App Router
- All API calls are server-side (Server Components)
- TypeScript is used throughout for type safety
- Tailwind CSS 4 is used for styling
- RTL (Right-to-Left) support is configured for Persian/Farsi

## 🤝 Contributing

This is a learning project. Feel free to:
- Fork the repository
- Experiment with different Next.js features
- Add new routes and features
- Improve documentation

## 👤 Author

**DevAmir**

- GitHub: [@DevAmirHub](https://github.com/DevAmirHub/)
- Email: devamir99@gmail.com

I create web products with an emphasis on clean architecture, practical solutions, and long-term maintainability.

## 📄 License

This project is open source and available for learning purposes.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/reference/rsc/server-components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy Learning! 🎓**
