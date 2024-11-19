
export function loadMenu() {
    let content = document.getElementById('content');
    content.innerHTML = `
        <div class="menu-container">
            <header class="menu-header">
                <h1>Sabor del Sol</h1>
                <p>Authentic Mexican Flavors</p>
            </header>
            <section class="menu-section">
                <h2>Appetizers</h2>
                <ul>
                    <li>
                        <h3>Guacamole del Sol</h3>
                        <p>Freshly made guacamole with ripe avocados, lime, cilantro, and jalapeño, served with house-made tortilla chips.</p>
                    </li>
                    <li>
                        <h3>Queso Fundido</h3>
                        <p>Melted cheese with chorizo, poblano peppers, and onions, served with warm corn tortillas.</p>
                    </li>
                    <li>
                        <h3>Ceviche Tropical</h3>
                        <p>Citrus-marinated shrimp and fish, mixed with mango, cucumber, and avocado, served with crispy plantain chips.</p>
                    </li>
                    <li>
                        <h3>Elote Bites</h3>
                        <p>Mini grilled corn-on-the-cob seasoned with chili powder, lime, and cotija cheese.</p>
                    </li>
                </ul>
            </section>
            <section class="menu-section">
                <h2>Soups & Salads</h2>
                <ul>
                    <li>
                        <h3>Pozole Rojo</h3>
                        <p>Traditional hominy soup with tender pork, red chile broth, and garnishes of cabbage, radishes, and lime.</p>
                    </li>
                    <li>
                        <h3>Sopa de Tortilla</h3>
                        <p>Rich tomato broth with crispy tortilla strips, avocado, queso fresco, and a drizzle of crema.</p>
                    </li>
                    <li>
                        <h3>Ensalada del Sol</h3>
                        <p>Mixed greens with roasted corn, black beans, cherry tomatoes, avocado, and a tangy lime vinaigrette.</p>
                    </li>
                </ul>
            </section>
            <section class="menu-section">
                <h2>Tacos</h2>
                <ul>
                    <li>
                        <h3>Taco al Pastor</h3>
                        <p>Marinated pork with grilled pineapple, cilantro, and onion.</p>
                    </li>
                    <li>
                        <h3>Taco de Barbacoa</h3>
                        <p>Slow-cooked beef with pickled onions and fresh salsa verde.</p>
                    </li>
                    <li>
                        <h3>Taco de Pescado</h3>
                        <p>Beer-battered fish with cabbage slaw and chipotle mayo.</p>
                    </li>
                    <li>
                        <h3>Taco de Verduras</h3>
                        <p>Grilled zucchini, bell peppers, and mushrooms with avocado crema.</p>
                    </li>
                </ul>
            </section>
            <section class="menu-section">
                <h2>Entrées</h2>
                <ul>
                    <li>
                        <h3>Mole de Pollo</h3>
                        <p>Juicy chicken smothered in rich mole sauce, served with rice and refried beans.</p>
                    </li>
                    <li>
                        <h3>Carnitas Plate</h3>
                        <p>Crispy pork carnitas with rice, beans, and warm tortillas for a make-your-own taco experience.</p>
                    </li>
                    <li>
                        <h3>Chiles Rellenos</h3>
                        <p>Poblano peppers stuffed with cheese or picadillo, coated in egg batter, and served with tomato sauce.</p>
                    </li>
                    <li>
                        <h3>Enchiladas Tricolor</h3>
                        <p>Three enchiladas (red, green, and mole sauces) filled with your choice of chicken, cheese, or beef.</p>
                    </li>
                </ul>
            </section>
            <section class="menu-section">
                <h2>Desserts</h2>
                <ul>
                    <li>
                        <h3>Churros con Chocolate</h3>
                        <p>Warm, crispy churros dusted with cinnamon sugar, served with a rich chocolate dipping sauce.</p>
                    </li>
                    <li>
                        <h3>Tres Leches Cake</h3>
                        <p>Moist sponge cake soaked in three kinds of milk and topped with whipped cream.</p>
                    </li>
                    <li>
                        <h3>Flan de Naranja</h3>
                        <p>Silky caramel custard infused with orange zest.</p>
                    </li>
                </ul>
            </section>
            <section class="menu-section">
                <h2>Drinks</h2>
                <ul>
                    <li>
                        <h3>Aguas Frescas</h3>
                        <p>Choose from Jamaica (hibiscus), Tamarindo (tamarind), or Horchata (cinnamon rice water).</p>
                    </li>
                    <li>
                        <h3>Margaritas del Sol</h3>
                        <p>Classic, mango, or spicy jalapeño margaritas made with fresh lime juice.</p>
                    </li>
                    <li>
                        <h3>Jarritos Sodas</h3>
                        <p>Traditional Mexican sodas in flavors like tamarind, lime, or grapefruit.</p>
                    </li>
                    <li>
                        <h3>Café de Olla</h3>
                        <p>Mexican coffee brewed with cinnamon and piloncillo (unrefined sugar).</p>
                    </li>
                </ul>
            </section>
            <footer class="menu-footer">
                <p>Gracias por visitar Sabor del Sol!</p>
            </footer>
        </div>
    `;
}

