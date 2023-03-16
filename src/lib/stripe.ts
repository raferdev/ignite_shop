import Stripe from "stripe";

const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY?process.env.STRIPE_SECRET_KEY:""


export const stripe = new Stripe(STRIPE_SECRET,{
    apiVersion:'2022-11-15',
    appInfo: {
        name:'Ignite Shop'
    }
})