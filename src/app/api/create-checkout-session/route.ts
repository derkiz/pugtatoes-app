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
          unit_amount: Math.round(item.price * 100), // Convert dollars to cents and round to nearest integer
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `https://${process.env.NEXT_PUBLIC_HOST}/success`, // Update to use NEXT_PUBLIC_HOST
      cancel_url: `https://${process.env.NEXT_PUBLIC_HOST}/cancel`,   // Update to use NEXT_PUBLIC_HOST
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
