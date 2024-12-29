const express = require("express");
const stripe = require('stripe')(process.env.STRIPE_SEC_KEY);

const router = express.Router();

router.post("/payment", async (req, res) => {
    try {
        const { items, totalAmount, title } = req.body;
        // console.log(items, "hjm");


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: items.map((item) => ({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: 'hh',
                    },
                    unit_amount: item.price * 100, // Convert to cents
                },
                quantity: 1,
            })),
            mode: "payment",
            success_url: "http://localhost:5173/PaymentSuccess",
            cancel_url: "http://localhost:5173/PaymentCancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating payment session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;