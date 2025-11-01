🧠 About This Project

todoApp is a simple yet well-designed task management mobile application built using React Native and Expo.
The goal of this project was to create an app that allows users to add, edit, delete, and organize their daily tasks based on priority levels.
It was developed as part of my learning process in mobile programming, where I explored how to design and deploy apps that can work smoothly on both iOS and Android devices.

The project also focuses on writing clean, maintainable code and applying good UI/UX design practices, helping me understand how real-world mobile applications are structured.

⚙️ Tools & Technologies Used

🧩 React Native (Expo) — to build a cross-platform mobile app

🎨 React Native Paper — for UI components with a clean material design look

🔽 DropDownPicker — to select task priorities easily

🧠 React Native Safe Area Context — to handle different screen layouts safely

🚀 Expo EAS Update — to publish and test the app instantly

💻 JavaScript (ES6+) — the main programming language

🧰 Visual Studio Code — used for writing and debugging code

🌱 Features

Add, edit, and delete tasks with just a few taps

Organize tasks based on High, Medium, or Low priority

Clean and modern user interface with responsive design

Works on iOS, Android, and Web (through Expo)

Real-time sorting system that always shows important tasks first

🚧 Challenges & What I Learned

During development, I faced several challenges that helped me learn more about mobile app design and debugging:

Cross-platform UI differences —
iOS and Android handle modals, dropdowns, and scroll areas differently.
➤ I fixed this by using KeyboardAvoidingView and safe-area layouts to keep the design consistent.

Handling dropdown conflicts —
The dropdown caused virtualized list errors.
➤ Solved it by switching to modal list mode, which works smoothly on both platforms.

Keyboard overlap issue —
On small screens, the keyboard covered the Save/Cancel buttons.
➤ Fixed with a combination of KeyboardAvoidingView and dynamic scrolling.

App deployment with Expo EAS —
Learning how to publish and share my app through EAS Update was challenging but rewarding.
➤ Now the app can be instantly shared via QR code for real-time testing.

These challenges taught me valuable lessons about cross-platform development, component layering, and UI consistency, which I believe are essential for any mobile developer.

🧪 How to Test the App

You can try out the app easily using Expo Go:

## 📱 Try It Out on Expo

Scan the QR code below using **Expo Go** app:

![QR Code](./assets/qr.png)

🔗 Or open directly: [https://expo.dev/@pbnguyen0121/todoApp](https://expo.dev/@pbnguyen0121/todoApp)

💬 Feedback & Contact

If you have suggestions, find bugs, or would like to collaborate on improving this project,
please feel free to reach out to me via email:

📧 pbnguyen0121@gmail.com

I’m always open to discussion about new features, better designs, or any ideas that can make this project more complete.
