// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: 2024
// This file contains the JS functions for index.html

"use strict";

function calculateOrder() {
    const prices = {
        small: 2.00,
        medium: 4.00,
        large: 6.00,
        extraLarge: 10.00,
        toppings: {
            1: 1.00,
            2: 1.75,
            3: 2.50,
            4: 3.35
        },
        taxRate: 0.13
    };

    const size = document.querySelector('input[name="size"]:checked').value;
    const numToppings = parseInt(document.querySelector('input[name="toppings"]:checked').value);

    const subtotal = prices[size] + (numToppings * prices.toppings[numToppings]);
    const tax = subtotal * prices.taxRate;
    const total = subtotal + tax;

    document.getElementById('result').innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax (HST): $${tax.toFixed(2)}</p>
        <p>Total: $${total.toFixed(2)}</p>
    `;
    document.getElementById('result').style.display = 'block';
}

