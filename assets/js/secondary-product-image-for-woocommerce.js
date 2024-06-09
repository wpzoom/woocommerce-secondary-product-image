// Access the product list
var productList = document.querySelector('.products');

if (!productList) {
    productList = document.querySelector('.products-block-post-template');
}

// Function to show the secondary image
function showSecondaryImage(event) {
    var target = event.target;
    var parent = target.closest('.product-item'); // Make sure to select the closest product-item
    var secondaryWrapper = parent ? parent.querySelector('.wpzoom-secondary-image-container') : null;

    // Add the class to show the .wpzoom-secondary-image-container with animation
    if (secondaryWrapper) {
        secondaryWrapper.classList.add('show-secondary-image');
    }
}

// Function to hide the secondary image
function hideSecondaryImage(event) {
    var target = event.target;
    var parent = target.closest('.product-item'); // Make sure to select the closest product-item
    var secondaryWrapper = parent ? parent.querySelector('.wpzoom-secondary-image-container') : null;

    // Remove the class to hide the .wpzoom-secondary-image-container
    if (secondaryWrapper) {
        secondaryWrapper.classList.remove('show-secondary-image');
    }
}

// Attach event listeners
if (productList) {
    // Desktop events
    productList.addEventListener('mouseover', showSecondaryImage);
    productList.addEventListener('mouseout', hideSecondaryImage);

    // Mobile events
    productList.addEventListener('touchstart', function(event) {
        showSecondaryImage(event);
    });

    // Hide the secondary image after touchend
    productList.addEventListener('touchend', function(event) {
        hideSecondaryImage(event);
        
        // Allow the link to be followed after touch
        var linkElement = event.target.closest('a');
        if (linkElement) {
            // Programmatically trigger the click after touchend to follow the link
            linkElement.click();
        }
    });
}
