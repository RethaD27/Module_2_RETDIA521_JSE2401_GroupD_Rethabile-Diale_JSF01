# SwiftCart

SwiftCart is a dynamic e-commerce web application designed to showcase a list of products fetched from a public API. Users can filter, search, sort, and view product details, add products to the cart, and mark products as favorites. The application is built using Alpine.js for state management and interactivity, and Tailwind CSS for styling.

## Technologies Used

- **HTML**: Markup language used for structuring the application.
- **Alpine.js**: Lightweight JavaScript framework for handling component state and interactivity.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **Fake Store API**: Public API used to fetch product data.

## Features

- **Product Listing**: Display a list of products with their details.
- **Category Filter**: Filter products by category.
- **Search Functionality**: Search for products by title.
- **Sorting**: Sort products by price (lowest to highest and highest to lowest).
- **Modal**: View detailed information about a product in a modal.
- **Add to Cart**: Add products to the cart (dummy functionality).
- **Favorite**: Mark products as favorites.

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/swiftcart.git
    cd swiftcart
    ```

2. **Open the project**:
    Open the `index.html` file in your preferred web browser.

## Usage Examples

### Viewing Products

1. Open the application in your web browser.
2. Products will be automatically fetched from the Fake Store API and displayed on the page.

### Filtering Products

1. Select a category from the dropdown menu at the top left.
2. The products list will be filtered to show only products from the selected category.

### Searching for Products

1. Enter a search query in the search input box at the top center.
2. Click the "Search" button.
3. The products list will be filtered to show only products that match the search query.

### Sorting Products

1. Select a sorting order from the dropdown menu at the top right.
    - "Lowest to Highest" to sort by price in ascending order.
    - "Highest to Lowest" to sort by price in descending order.

### Viewing Product Details

1. Click on a product card to open a modal with detailed information about the product.

### Adding to Cart

1. In the product card or modal, click the "Add to Cart" button.
2. A dummy alert will be shown indicating the product has been added to the cart.

### Marking as Favorite

1. In the product card or modal, click the heart icon to mark the product as a favorite.
2. The heart icon will change color to indicate the product is marked as favorite.
