This is a [Next.js](https://nextjs.org) project that uses the [shadcn/ui](https://ui.shadcn.com/) component library.

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [SSH Connection](#ssh-connection)
- [Forking the Repository](#forking-the-repository)
- [Getting Started](#getting-started)
- [Submitting Code](#submitting-code)
- [Learn More](#learn-more)
- [Deploy on Vercel](#deploy-on-vercel)


## Prerequisites
Ensure you have the following tools installed:
- Git
- SSH client (usually pre-installed on most operating systems)
- Node.js (includes npm)

## SSH Connection
1. **Generate SSH Key (if not already generated)**
   Run the following command in your terminal to generate an SSH key:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
   Follow the prompts to complete the key generation, typically saving the key in ~/.ssh/id_rsa and ~/.ssh/id_rsa.pub.

2. **Add SSH Key to GitHub**
   - Log in to your GitHub account.
   - Go to Settings > SSH and GPG keys > New SSH key.
   - Enter a title (e.g., "My Laptop") and paste the contents of your public key (found in the id_rsa.pub file) into the Key field.
   - Click Add SSH key.
   - Test SSH Connection Run the following command in your terminal to test the connection:
    ```bash
    ssh -T git@github.com
    ```
   If everything is set up correctly, you should see a welcome message.

## Forking the Repository
1. **Fork the Project Repository**
   * Go to the GitHub page of the project.
   * Click the `Fork` button in the upper right corner to create a copy of the repository in your account.
  
2. Clone Your Forked Repository Run the following command in your terminal, replacing it with your own repository address:
    ```bash
    git clone git@github.com:<your-username>/<your-forked-repo>.git
    ```
   Navigate into the project directory:
    ```bash
    cd <your-forked-repo>
    ```

## Getting Started

1. Install Dependencies In the project directory, run the following command to install the required dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Creating an `.env.local` File (if applicable) If your project requires environment variables, create a file named `.env.local` in the root directory and add your environment variables. For example:
   ```bash
   NEXT_PUBLIC_API_URL=https://api.example.com
   ```

5. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Submitting Code
1. Create a New Branch Before making changes, create a new branch:
   ```bash
    git checkout -b my-feature-branch
   ```

2. Replace my-feature-branch with a meaningful branch name that describes your feature or fix.

3. Make Changes and Stage Files After modifying files, add your changes with the following command:
   ```bash
   git add .
   ```

4. Commit Changes Commit your changes and add a commit message. For Example:
   ```bash
   git commit -m "feat: add a meaningful commit message"
   ```
   The following common types are typically used to describe the content of commits:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Documentation changes
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
    - `chore`: Other changes that do not modify src or test files

5. Push to GitHub Push your new branch to your forked repository:
   ```bash
   git push origin my-feature-branch
   ```

6. Create a Pull Request
   - Log in to GitHub and go to your forked repository.
   - Click on the `Compare & pull request` button.
   - Add a title and description, then click Create pull request.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
