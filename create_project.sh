#!/bin/bash

# Initialize Next.js project structure
npm init -y
npm install next@15 react@18 react-dom@18 typescript @types/node @types/react tailwindcss postcss autoprefixer @supabase/supabase-js openai recharts
npm install --save-dev @types/jest jest

# Create directory structure
mkdir -p src/app/api/{leads,telegram,ai/{summarize,score,reply}}
mkdir -p src/app/dashboard
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/tests
mkdir -p public
mkdir -p supabase/migrations

echo "Project structure created successfully"
