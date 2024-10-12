function toggleOptions(element) {
    // Uncheck all radios and hide all options
    document.querySelectorAll('.unit-box').forEach(box => {
      const radio = box.querySelector('input[type="radio"]');
      const options = box.querySelector('.options');

      // Uncheck the radio buttons and hide the options if it's not the clicked one
      if (box !== element) {
        radio.checked = false;
        options.classList.remove('show');
        box.classList.remove('active')
      }

    });
  
    // Check the radio and toggle options for the clicked box
    const radioButton = element.querySelector('input[type="radio"]');
    const optionsDiv = element.querySelector('.options');
  
  
    if (!radioButton.checked) {
      radioButton.checked = true;
      optionsDiv.classList.add('show');
      element.classList.add('active')

    } else {
      radioButton.checked = false;
      optionsDiv.classList.remove('show');
      element.classList.remove('active')
    }
  }

    // Function to stop event propagation
    function stopPropagation(event) {
      event.stopPropagation();
    }
  