# Clientflow Crm

A serious CRM for small sales teams: pipeline, accounts, follow-ups, activities and revenue visibility.

Built by **Pranaya Simkhada** as a portfolio project to demonstrate product thinking, TypeScript/React/Next.js, API design, PostgreSQL data modeling, responsive UI, validation, and production-minded workflows.

## Run locally

```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

The interface includes realistic demo data so a reviewer can explore the product immediately.

## Production path

The Prisma schema is included. Replace demo repositories/data with server actions or route handlers backed by PostgreSQL, add authentication, and configure the deployment environment.

## Stack

Next.js · React · TypeScript · PostgreSQL · Prisma · Tailwind-style CSS · REST-ready route handlers · Recharts
