import { NextRequest, NextResponse } from 'next/server';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();

    if (!items || !Array.isArray(items)) {
      throw new Error('Invalid or missing items');
    }

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100, // Convert dollars to cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Internal Error:', error.message || error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message || error}` },
      { status: 500 }
    );
  }
}
