# Todo-List App

This project is a simple mobile to-do list built with Expo and React Native. The app allows a user to type a task into an input field, add it to a list, and delete tasks when they are complete. It demonstrates core React concepts such as `useState`, dynamic list rendering with `FlatList`, and a clean mobile card layout.

## Project Purpose

This app was created for Homework 3 in N322. The goal was to build a to-do list application that:

- stores tasks in state
- renders tasks dynamically
- adds new tasks from user input
- removes tasks with a delete button
- presents the UI in a clean, mobile-friendly layout

## Features

- Text input for entering a new task
- Add Item button to insert a task into the list
- Dynamic list rendering using `FlatList`
- Delete button/icon for each task item
- Mobile-first card layout for readability and clean styling
- Expo-based development workflow for Android, iOS, and web testing

## App Behavior

1. Open the app on a device or emulator.
2. Enter a task in the input field.
3. Press the Add Item button.
4. The new task appears in the list below.
5. Press the trash icon next to any item to remove it.

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- `@expo/vector-icons`

## Project Structure

```text
Todo-List/
├── app.json
├── package.json
├── README.md
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── explore.tsx
│   ├── components/
│   ├── constants/
│   └── hooks/
├── assets/
├── scripts/
└── tsconfig.json
```

## Installation

Before you run the app, make sure you have the following installed:

- Node.js (LTS version recommended)
- npm
- Expo CLI via the project dependencies or `npx expo`
- A mobile device with the Expo Go app, or an Android/iOS emulator

### 1. Clone the repository

```bash
git clone <your-github-repo-url>
cd Todo-List
```

### 2. Install dependencies

```bash
npm install
```

If the project is missing any Expo package after setup, install it as needed:

```bash
npx expo install @expo/vector-icons
```

## How to Run the App

### Option 1: Run on your phone with Expo Go

1. Start the Expo development server:

```bash
npx expo start
```

2. Install the Expo Go app from the App Store or Google Play.
3. Scan the QR code shown in the terminal with your phone camera.
4. The app should open in Expo Go and run on your device.

### Option 2: Run on an emulator

```bash
npx expo start --android
```

or

```bash
npx expo start --ios
```

### Option 3: Run in a web browser

```bash
npx expo start --web
```

## Assignment Alignment

This app satisfies the homework requirements by including:

- `useState` to manage task data
- an input field for adding tasks
- a button to add tasks
- a `FlatList` to display them dynamically
- a delete function for each item
- clean card-based styling for each task

## Screenshot

Add a screenshot of the app running in Expo Go here:

```text
[Insert screenshot of the app here]
```

## GitHub Submission

To submit the project:

1. Create a public GitHub repository.
2. Upload this project to the repo.
3. Copy the repository link.
4. Submit the GitHub URL and one screenshot of the app running in Expo Go.

## Notes

This project is intentionally simple and beginner-friendly. It focuses on learning state management and list rendering in a real mobile application. The app is a good foundation for future enhancements such as task completion toggles, local storage, or editing tasks.

## License

This project is for educational use as part of the N322 assignment.
