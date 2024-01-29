# Quik - Instant Delivery App

Quik is a web application designed to provide users with a quick and personalized instant delivery experience. The project is developed using HTML, CSS, and JavaScript, with a modular code organization for maintainability. The application features a responsive design to ensure an optimal user experience across various devices.

## User Flow

### Welcome Page

- **Signup or Continue as Guest:**
  - Users are welcomed with a homepage that allows them to either sign up or continue as a guest.

### Signup Form

- **User Registration:**
  - The signup form collects the user's full name and email address.
  - Upon successful registration, the user's information is displayed in the navbar.

### App Page

- **Dynamic Product Addition:**
  - Users can dynamically add products to their basket.
  - The basket displays the selected products, quantities, and total price in real-time.

### Order and Checkout

- **Order Review:**
  - The order list dynamically updates with added items, including names, quantities, and prices.
  - The total order price is calculated and displayed.

- **Checkout Process:**
  - Users can proceed to checkout, triggering the display of a payment form.
  - The payment form includes fields for cardholder name, email, card number, and CVV.

- **Payment Confirmation:**
  - Upon successful payment submission, users receive a thank-you message.
  - The message includes the user's name provided during registration.

## Technical Details

### Technologies Used

- **HTML5:** Markup language for structuring the application.
- **CSS3:** Styling language for designing the user interface.
- **JavaScript (ES6+):** Used for dynamic and interactive behavior of the app.
- **FontAwesome 6.5.1:** Icon library for enhanced visual elements.
- **UUID (v4):** Library for generating unique identifiers.

### Project Structure

The project is organized into three main files:

1. **index.html:** Contains the structure of the web page, including the layout, main content, and forms for ordering and payment.

2. **style.css:** Defines the styles and layout for the entire application. It includes responsive design considerations and enhances the visual appeal.

3. **script.js:** Implements the dynamic behavior of the app. It handles user interactions, updates the order list, and manages the checkout process. The code is modular, using functions to improve readability and maintainability.

4. **data.js:** Includes a menu array containing details about each item, such as name, ingredients, price, and quantity. UUID is generated using the `uuid` library for unique identification.

### Installation and Local Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/quik-app.git

Feel free to explore the code, suggest improvements, and contribute to making Quik even better! 🛠️🚀
