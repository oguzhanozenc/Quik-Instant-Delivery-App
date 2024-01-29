# Quik - Instant Delivery App

Quik is a sleek web application designed for a quick and personalized instant delivery experience. Developed with HTML, CSS, and JavaScript, the project prioritizes modular code organization for easy maintainability. The application boasts a responsive design, ensuring a seamless user experience across devices.

## Table of Contents
- [User Flow](#user-flow)
  - [Welcome Page](#welcome-page)
    - [Signup or Continue as Guest](#signup-or-continue-as-guest)
  - [Signup Form](#signup-form)
    - [User Registration](#user-registration)
  - [App Page](#app-page)
    - [Dynamic Product Addition](#dynamic-product-addition)
  - [Order and Checkout](#order-and-checkout)
    - [Order Review](#order-review)
    - [Checkout Process](#checkout-process)
      - [Payment Confirmation](#payment-confirmation)
- [Technical Details](#technical-details)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
- [Installation and Local Setup](#installation-and-local-setup)

## User Flow

### Welcome Page
#### Signup or Continue as Guest
Users are greeted with a welcoming homepage, presenting options to either sign up or continue as a guest.

### Signup Form
#### User Registration
The signup form collects essential user information, including full name and email address. Upon successful registration, the user's details seamlessly appear in the navbar.

### App Page
#### Dynamic Product Addition
Users can dynamically add products to their basket. The basket dynamically displays selected products, quantities, and real-time total prices.

### Order and Checkout
#### Order Review
- The order list dynamically updates with added items, showcasing names, quantities, and prices.
- The total order price is calculated and prominently displayed.

#### Checkout Process
Users can smoothly proceed to checkout, prompting the display of a well-crafted payment form. The form includes fields for the cardholder name, email, card number, and CVV.

##### Payment Confirmation
Upon successfully submitting the payment, users are greeted with a heartfelt thank-you message. This personalized message includes the user's name provided during registration.

## Technical Details

### Technologies Used
- **HTML5:** Markup language for structuring the application.
- **CSS3:** Styling language for designing the user interface.
- **JavaScript (ES6+):** Employs dynamic and interactive behavior throughout the app.
- **FontAwesome 6.5.1:** Icon library, enhancing visual elements.
- **UUID (v4):** Library facilitating the generation of unique identifiers.

### Project Structure
The project is meticulously organized into three main files:

1. **index.html:** Contains the web page structure, including layout, main content, and forms for ordering and payment.
2. **style.css:** Defines styles and layout, incorporating responsive design considerations for an appealing visual experience.
3. **script.js:** Implements dynamic behavior, handling user interactions, updating the order list, and managing the checkout process. The code adopts a modular approach for enhanced readability and maintainability.
4. **data.js:** Houses a menu array detailing each item, encompassing name, ingredients, price, and quantity. UUID, generated using the uuid library, ensures unique identification.

## Installation and Local Setup
1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quik-app.git

  Feel free to explore the code, suggest improvements, and contribute to making Quik even better! 🛠️🚀
