# Refactoring Upgrades (with Tauri)

- [x] Check if it is feasible to rewrite the program with Tauri (using Rust and React)
- [ ] Create a list of functional and non-functional requirements (with Tauri)
- [ ] Establish styles and design the interface
- [ ] Design the options menu
- [ ] Add a SideBar to the defaultLayout
- [ ] Design the Home Page
- [ ] Add drag-and-drop file functionality
- [ ] Add functionality to open files from the menu
- [ ] Add a text editor to display the file content (Monaco Editor or another)
- [ ] Add functionality to save files (with Tauri)
- [ ] Add an about page with programme information and links to social media
- [ ] Add i18n (internationalisation) to support multiple languages
- [ ] Add a theme system (light/dark)
- [ ] Add a dialogue for third-party licences
- [ ] Add SQLite to save the history of converted files, settings, etc.
- [ ] Add a logging system for debugging and error tracking (in production)
- [ ] (Optional) Add an automatic update system (with Tauri)

---

# To-Do (Future Upgrades)

- [ ] Make Issue inside of the same program (Without exit from the program - Bridgex)
- [ ] Make a system to see the future "features" of program...
- [ ] Make a history of converted files (Inside program)
- [ ] Limit the file size
- [ ] When the file is ok, but not have a content, show again the initial Help (Logo with shortcuts, initial screen)
- [ ] Make a temporary file or inside database, to save the content extracted
  > Notes: This because when language is changed, the UI is reinitialised and the content extracted is deleted (from the square inside program...).
- [ ] Fix program "freeze", when converting, the program is frozen to can convert the file
- [ ] Add a dialogue to show the shortcuts available
- [ ] Update the manager and its use inside the program
  > Notes: The database isn't used correctly, bad practices are here
- [ ] Remove focus of links clicked
  > Notes: When links are clicked, these not remove the focus in, because same cause, when link is clicked, and return inside the program, if "enter" is key down, the "link" is actioned again!
- [ ] Save the size when close/exit (when reopen, the size is equal to last size configured)
- [ ] Connect "Shortcut" 'CTRL + S' to save/convert the document.
- [ ] ~If this project is viral in future, add the stars count from GitHub~
