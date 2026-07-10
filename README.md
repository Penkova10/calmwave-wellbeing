# CalmWave

CalmWave is a youth wellbeing web prototype inspired by HBSC themes. It helps young people reflect on how they feel, understand their main wellbeing pressure area, and choose one small supportive action for a calmer, healthier day.

## Preview

### Home page
![CalmWave home page](screenshots/home.png)

### Daily check-in
![CalmWave check-in section](screenshots/checkin.png)

### Micro-challenges
![CalmWave challenges section](screenshots/challenges.png)

## Project idea

Many adolescents experience daily pressure connected to stress, sleep, school responsibilities, screen overload, and lack of movement. CalmWave turns these wellbeing areas into a simple interactive check-in and micro-challenge experience.

The app is not a diagnostic tool. It is designed as a safe self-reflection prototype that encourages emotional awareness and small behaviour changes.

## Target group

The target group is young people and adolescents, especially ages 11 to 15, which matches the HBSC focus on school-aged children and youth wellbeing.

## HBSC inspiration

CalmWave is inspired by HBSC wellbeing themes such as stress, sleep, school pressure, physical activity, digital wellbeing, healthy habits, and emotional awareness. The app does not present official HBSC statistics, but uses these themes to create an interactive self-reflection prototype.

## Main features

## Main features

- Daily wellbeing check-in with sliders
- Personalized result based on the user's answers
- Wellbeing score
- Micro-challenges for small daily actions
- Saved micro-challenge progress in the browser using localStorage
- Psychology and impact section
- Clean responsive user interface

## Wellbeing areas

CalmWave focuses on:

- Stress
- Sleep
- School pressure
- Screen balance
- Movement

## Psychology behind the solution

The project uses:

- Self-reflection
- Emotional awareness
- Self-monitoring
- Small behaviour change
- Ethical, non-diagnostic guidance

Instead of asking young people to solve everything at once, CalmWave gives one realistic action for the day.

## Technologies used

- React
- Vite
- JavaScript
- CSS
- localStorage
- Git and GitHub

## How to run the project locally

To run CalmWave locally, Node.js and npm need to be installed.

### 1. Download the project

Download the project as a ZIP from GitHub and extract it.

Then open the extracted project folder in a terminal.

Example:

```bash
cd calmwave-wellbeing
```

If the folder name includes the branch name, it may look like this:

```bash
cd calmwave-wellbeing-master
```

### 2. Install dependencies

Run:

```bash
npm install
```

This installs all packages needed for the React/Vite project.

### 3. Start the development server

Run:

```bash
npm run dev
```

After the command runs, the terminal will show a local link, usually:

```text
http://localhost:5173/
```

Open that link in a browser to view the app.

### 4. Build for production

To check that the project builds successfully, run:

```bash
npm run build
```

This creates a production-ready version of the app in the `dist` folder.

### Note for Windows PowerShell

If PowerShell blocks npm commands because of script execution policy, use Command Prompt instead, or run the commands with `npm.cmd`:

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

## Project purpose

This project was created as a digital solution for youth wellbeing. The goal is to show how an interactive web prototype can support awareness, healthy habits, and simple daily wellbeing actions.