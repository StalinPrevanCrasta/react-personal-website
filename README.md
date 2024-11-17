# Personal Portfolio

This is a personal portfolio project built with React and Vite. It includes sections for About Me, Skills, Education, Projects, Contact, and a Resume.

## Table of Contents

- [Installation](#installation)
- [Setup Environment Variables](#setup-environment-variables)
- [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [License](#license)

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Setup Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_USER_ID=your_emailjs_user_id

VITE_GOOGLE_DRIVE_LINK=your_google_drive_link
VITE_RESUME_IMAGE_URL=your_resume_image_url
```

Replace the placeholders with your actual values:

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID.
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID.
- `VITE_EMAILJS_USER_ID`: Your EmailJS user ID.
- `VITE_GOOGLE_DRIVE_LINK`: The link to your resume file on Google Drive.
- `VITE_RESUME_IMAGE_URL`: The URL or path to your resume image.

## Running the Project

To start the development server, run:

```sh
npm run dev
```

You can view your project at [http://localhost:<port_number>](http://localhost:<port_number>).

## Building the Project

To create an optimized production build, run:

```sh
npm run build
```

This will generate the build files in the `dist` folder, which you can deploy to a web server.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
```

Just replace the placeholders (`your-username`, `your_emailjs_service_id`, `your_google_drive_link`, etc.) with your actual values, and your `README.md` file is good to go!