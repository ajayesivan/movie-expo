# Movie Expo - App

Movies Worth Remembering!

Design: https://www.figma.com/design/Acp1oLru2s4kgq0zcZsqLN/Movie-Expo?node-id=1-24&t=I105LhXw9GhR8tjQ-1

## Development

### Configure API Keys

This project uses the [Clerk](https://clerk.dev) and [TMDB](https://www.themoviedb.org) APIs for authentication and movie data respectively. To run the project locally, you'll need to create an account with both services and obtain the necessary API keys.

Create a `.env` file in the root of the project and add the following keys:

```
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<key>
EXPO_PUBLIC_TMDB_API_KEY=<key>
```

### Running the Project

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
    yarn expo
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

### Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
