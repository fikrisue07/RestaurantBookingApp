name: CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:latest
        env:
          POSTGRES_USER: your_username
          POSTGRES_PASSWORD: your_password
          POSTGRES_DB: restaurant_booking
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run backend tests
      run: npm test --prefix backend

    - name: Run frontend tests
      run: npm test --prefix frontend

