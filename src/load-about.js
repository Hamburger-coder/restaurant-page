export function loadAbout () {
    let content = document.getElementById('content');
    content.innerHTML = `
        <h1>About Us</h1>
        <p>Welcome to Sabor del Sol, where the vibrant flavors of Mexico meet the warmth of the sun!</p>
        <p>Nestled in the heart of our community, we pride ourselves on serving authentic Mexican dishes inspired by traditional recipes and infused with a modern twist. From sizzling fajitas to zesty tacos and refreshing margaritas, every bite at Sabor del Sol is a celebration of culture, flavor, and love for food.</p>
        <p>Our chefs use the freshest ingredients to craft dishes that capture the essence of Mexican cuisine. Whether you're joining us for a family dinner, a festive celebration, or just craving a taste of Mexico, Sabor del Sol is your go-to destination for an unforgettable dining experience.</p>
        <h2 class="contact-h2">Contact Us</h3>
        <p><span class="material-symbols-outlined">
            pin_drop
            </span>&nbsp;&nbsp;&nbsp;123 Sunshine Avenue, Los Angelos, California</p>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M799.13-100.78q-128.45 0-253.81-55.91-125.36-55.92-228.76-159.03-103.39-103.11-159.3-228.66-55.91-125.55-55.91-254.19 0-25.99 17.16-43.32 17.17-17.33 42.92-17.33h161.44q27 0 44.78 14.31 17.79 14.3 23.18 39.17l25.43 128.13q4.26 24.48-.72 41.7-4.97 17.21-19.76 30.3l-100.39 93.48q17.74 30.78 41.85 60.76 24.11 29.98 54.85 59.72 28.17 28.17 56.52 50.71 28.35 22.55 58.43 40.03L605-397.18q15.22-14.65 35.37-20.28 20.15-5.63 42.63-1.37l122.74 26.31q25.87 7.39 39.67 23.82 13.81 16.44 13.81 41.31v165.96q0 25.99-17.37 43.32-17.37 17.33-42.72 17.33ZM244.39-609.04l65.44-60.92-15.87-83.26h-85.05q3.87 37.05 12 73.06 8.13 36.01 23.48 71.12Zm360.26 360.82q35.61 15.31 73 24.74 37.39 9.44 75.57 13.57v-85.18l-82.7-17.87-65.87 64.74ZM244.39-609.04Zm360.26 360.82Z"/></svg>
            (555) 678-9012
        </p>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M102.48-141.91v-676.18L902.61-480 102.48-141.91ZM200-288.48 653.09-480 200-671.52v123.04L448.48-480 200-411.52v123.04Zm0 0v-383.04 383.04Z"/></svg>
            <a href="mailto:info@sabordelsol.com">info@sabordelsol.com</a>
        </p>
    `
}