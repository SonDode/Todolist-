# Todo List CLI (TypeScript)

A simple **to-do list** terminal application built to manage tasks through an interactive CRUD menu.

## What the app does

The app starts in the terminal and displays a menu where you can choose:

- **Create** - add a new task
- **Read** - display the current task list
- **Update** - edit an existing task
- **Delete** - remove an existing task
- **Exit** - close the application

Inputs are also validated so empty tasks cannot be saved.

## Technologies used

- **TypeScript** - main language
- **Node.js** - runtime environment
- **Inquirer** - interactive terminal prompts and menus
- **tsx** - runs TypeScript files directly in development

## Project structure

- `app.ts` - main application logic and CRUD menu
- `tsconfig.json` - TypeScript configuration
- `package.json` - scripts and dependencies

## Requirements

Make sure you have installed:

- **Node.js** (LTS version recommended)
- **npm** (included with Node.js)

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development mode

```bash
npm run dev
```

This script runs:

```bash
tsx app.ts
```

### 3. (Optional) Build + run from `dist`

Compile TypeScript:

```bash
npm run build
```

Run the compiled version:

```bash
npm start
```

## Available scripts

- `npm run dev` - run the app directly from TypeScript
- `npm run build` - compile output into the `dist` folder
- `npm start` - run the compiled app

## Current limitations

Tasks are stored in memory while the app is running. After exiting, the list resets to the default values defined in code.

---

If you want, the next step can be JSON file persistence (auto-save and load on startup).