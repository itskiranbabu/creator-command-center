import os
import json

# Create package.json
pkg = {
    "name": "creator-command-center",
    "version": "1.0.0",
    "private": True,
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "test": "jest"
    },
    "dependencies": {
        "@supabase/supabase-js": "^2.48.0",
        "ai": "^3.1.0",
        "next": "^15.0.0",
        "openai": "^4.73.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "recharts": "^2.12.7",
        "tailwindcss": "^3.4.15"
    },
    "devDependencies": {
        "@types/jest": "^29.5.14",
        "@types/node": "^22.7.4",
        "@types/react": "^18.3.8",
        "autoprefixer": "^10.4.20",
        "eslint": "^9.14.0",
        "eslint-config-next": "^15.0.0",
        "jest": "^29.7.0",
        "postcss": "^8.4.47",
        "typescript": "^5.6.3"
    }
}

with open('package.json', 'w') as f:
    json.dump(pkg, f, indent=2)
print("✓ package.json created")
