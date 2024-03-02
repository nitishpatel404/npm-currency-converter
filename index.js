import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_EMFa3d4VWnskbtjVgaQCts6LgTQAiRmJtV4bkIgn');

export async function convertCurrency(fromCurrency, toCurrency, units) {

        const res = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });
            const multiplier = res.data[toCurrency];
            const convertedValue = units * multiplier;
           return convertedValue;
        } 

convertCurrency("USD", "INR", 1);
