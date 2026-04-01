# Browser-Based Music Player

A fully functional, browser-based music player. This project allows users to upload their own local audio files and control playback directly in the browser without needing any backend server. It also features a landing page with a parallax scrolling effect to introduce the project.

## Features

* Local File Uploads: Select and upload audio files directly from your computer.
* Playback Controls: Play, pause, skip to the next track, or go back to the previous one.
* Live Progress Bar: A working progress bar that updates in real-time as the song plays.
* Loop Toggle: Options to loop a single specific song or loop through the entire selected playlist.
* Parallax Landing Page: A separate intro page that describes the project and features a parallax scrolling effect before entering the actual player.

## What I Learned

Building this project was a great way to get experience with browser APIs and managing UI state. Here are my main takeaways:

* **Working with the HTML5 Audio API:** I learned how to control audio (play, pause, tracking the `currentTime`, and changing the `src`).
* **Handling Local Files:** I figured out how to use the JavaScript File API to read local audio files uploaded by the user via an `<input>` tag and turn them into usable object URLs.
* **Dynamic UI Updates:** I practiced updating the DOM based on the audio state, specifically making sure the progress bar fills up accurately as the song plays.
* **CSS Parallax:** I learned how to implement a parallax scrolling effect for the landing page to give it a more polished, modern feel.

## How to Run Locally

Since this project is completely front-end based, there is no setup required.

1. Clone this repository.
2. Open the `landing.html` file (the landing page) in your web browser.
3. Click through to the player upload some local `.mp3` files, and hit play!
