<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

Here is my take on the Technigo Music Releases project for week 4 of the Fall 2023 JavaScript React upskill course

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

Since its the first week that we are actually working with React and not vanilla JavaScript I started out with mapping out the initial design, breaking it out into smaller components and doing a lot of different versions of .map functions just to get the hang of it.

The task was to recreate the provided design as much as possible so that was my main goal. I did a couple of small tweaks here and there to try and improve functionallity or just to get a better understanding of the flow.
* Using CSS-grids to render either 4, 2 or 1 album per row depending on desktop, tablet or mobile
* Inverting the SVG icons using filter in order to get white icons on black theme.
* Setting the control icon sizes using percentages to handle situations when the album images are rendering at a lower resolution on desktop because of limited width.
* Building a compontent folder for albums that encloses all the compontents for related to albums. And using the index.jsx as the "main" component.
* Using opacity and background fill with partial opacity in order to achieve the hover effects.
* Using path alias so that any component using the SVG files can be moved in and out of compontent folders without breaking paths

### View it live

Live version:
https://statuesque-jalebi-8945ec.netlify.app/
Intermediate stretch goals:
https://monumental-tartufo-57d610.netlify.app

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
