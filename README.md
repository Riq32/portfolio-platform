# Enrique's Portfolio Platform

A sleek, responsive React application designed to showcase personal projects. This platform allows users to dynamically add new projects, search through existing ones, and manage the list with a delete feature.

## 🚀 Features

*   **Add Projects**: A form to input project titles and descriptions with instant UI updates.
*   **Search Functionality**: Real-time filtering of projects as you type in the search bar.
*   **Delete Capability**: Remove projects from the list with a single click.
*   **Success Notifications**: Visual feedback when a project is successfully added.
*   **Responsive Design**: Built with modular JSX and custom CSS for a clean, professional look.

## 🛠️ Tech Stack

*   **Frontend**: React 19
*   **Build Tool**: Vite
*   **Styling**: Custom CSS (Modular approach)
*   **Language**: JavaScript (ES6+)

## 📦 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/showcase-app.git](https://github.com/Riq32/portfolio-platform.git)
    cd showcase-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **View in browser**:
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```text
src/
├── components/
│   ├── AddProjectForm.jsx    # Form logic and success states
│   ├── ProjectItem.jsx       # Individual card display and delete button
│   ├── ProjectList.jsx       # List rendering and search filtering
│   └── ProjectShowCase.jsx   # Main state container and orchestrator
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
├── index.css                 # Global styles
└── components/*.css          # Component-specific styling