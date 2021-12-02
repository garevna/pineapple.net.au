export const plans = {
  residential: [
    { name: 'Budget', upload: 50, download: 50, price: 50, tariffId: 'residential-50', selected: false },
    { name: 'Boost', upload: 150, download: 150, price: 69, tariffId: 'residential-150', selected: false },
    { name: 'Accelerate', upload: 250, download: 250, price: 99, tariffId: 'residential-250', selected: false },
    { name: 'Premium', upload: 500, download: 500, price: 140, tariffId: 'residential-500', selected: false },
    { name: 'Ultimate', upload: 1000, download: 1000, price: 250, tariffId: 'residential-1000', selected: false }
  ],
  business: [
    { name: 'Boost', upload: 150, download: 150, price: 150, tariffId: 'commercial-150', selected: false },
    { name: 'Accelerate', upload: 250, download: 250, price: 200, tariffId: 'commercial-250', selected: false },
    { name: 'Premium', upload: 500, download: 500, price: 240, tariffId: 'commercial-500', selected: false },
    { name: 'Ultimate', upload: 1000, download: 1000, price: 500, tariffId: 'commercial-1000', selected: false }
  ]
}
