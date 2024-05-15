
import React from 'react';
import styles from './MenuView.module.css'; // Make sure you have your modular CSS styles
import hamburgerImg from '../../assets/imgs/Hamburger.png';
import pizzaImg from '../../assets/imgs/pizza.png';
import caesarSaladImg from '../../assets/imgs/CaesarChickenSalad.png';
import spaghettiImg from '../../assets/imgs/bolognese.png';
import salmonImg from '../../assets/imgs/Salmon.png';
import wrapImg from '../../assets/imgs/Wrap.png';

export default function MenuView() {
    return (
        <div className={styles.menu}>
            <h1>Food Menu</h1>
            <div className={styles.menuItems}>
                <div className={styles.menuItem}>
                    <img src={hamburgerImg} alt="Hamburger" />
                    <h2>Hamburger</h2>
                    <p>Delicious burger with cheese, lettuce, tomato, and special sauce.</p>
                    <span>$10</span>
                </div>
                <div className={styles.menuItem}>
                    <img src={pizzaImg} alt="Pizza" />
                    <h2>Pizza</h2>
                    <p>Pepperoni pizza with mozzarella cheese and tomato sauce.</p>
                    <span>$12</span>
                </div>
                <div className={styles.menuItem}>
                    <img src={caesarSaladImg} alt="Caesar Salad" />
                    <h2>Caesar Salad</h2>
                    <p>Fresh salad with grilled chicken, croutons, parmesan cheese, and Caesar dressing.</p>
                    <span>$8</span>
                </div>
                <div className={styles.menuItem}>
                    <img src={spaghettiImg} alt="Spaghetti Bolognese" />
                    <h2>Spaghetti Bolognese</h2>
                    <p>Classic Italian spaghetti with Bolognese sauce made from ground beef, tomatoes, and herbs.</p>
                    <span>$14</span>
                </div>
                <div className={styles.menuItem}>
                    <img src={salmonImg} alt="Grilled Salmon" />
                    <h2>Grilled Salmon</h2>
                    <p>Grilled salmon fillet served with roasted vegetables and lemon-butter sauce.</p>
                    <span>$16</span>
                </div>
                <div className={styles.menuItem}>
                    <img src={wrapImg} alt="Vegetarian Wrap" />
                    <h2>Vegetarian Wrap</h2>
                    <p>Whole wheat wrap filled with grilled vegetables, hummus, and mixed greens.</p>
                    <span>$9</span>
                </div>
                {/* Add more menu items as needed */}
            </div>
        </div>
    );
}