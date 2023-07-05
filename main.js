const labels = document.querySelectorAll(".form-control label");  //This returns a nodelist of all labels in the html document.
// And now because its a nodelist, we can go ahead and use forEach on it.
labels.forEach(label => {
    label.innerHTML = label.innerText // this sets the innerHTMl(label) to match with the innerText (Email).
        .split("")   // We now split the letters into an arrayusing the .split() array method.
        .map((letter, idx) => `<span>${letter}</span>`) // Here, we map thru the letters, creating a span around each of them.
        .join('')  // this returns the letters to a single element separated by ' '
        
})



