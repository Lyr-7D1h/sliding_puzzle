# Sliding Puzzle

![Docker Buildx](https://github.com/Lyr-7D1h/sliding_puzzle/workflows/Docker%20Buildx/badge.svg)

https://en.wikipedia.org/wiki/Sliding_puzzle

A sliding game. You can modify the puzzle size at start. The goal is to have the cards in order from smallest to largest and have the empty card at the end. When you've finished you get a score base on what the optimal amount of moves would have been. You get the option to retry. Enjoy!

## Technical Description

We use **eslint** in combination with **prettier**.
Eslint check for general linting errors while prettier focuses on formating.
Eslint uses the Airbnb standard, generally assumed to be the best for React projects.

**Material UI** is used for styling.
This is because I wanted consistent styling between all components and don't want to have the hassle to worry about styling.

**Jest** is used as test runner.
Most recommended and usefull test runner for React Applications.

**prop-types** is used for validating input for react components. This ensures that inputs are what we expect and otherwise return errors, showing us where the problem lies.

**Github Actions** is used for pushing multiple docker images build on different architectures using **Docker Buildx**.

I added manifests files for hosting this application on a **Kubernetes** cluster.

## File Structure

```
/src
    /features
        /common - Used for components which are general and can be shared for multiple features
        /puzzle - Used soly for components needed for the functioning puzzle
            {name}Page.jsx - Used as entry point for this feature
            {name}.test.{js|jsx} - Unit test file
            {name}.js - Helper file for current feature
```

## Build

### Production

```bash
yarn --production
yarn build
```

If you want static files served through a port

```bash
yarn global add serve
serve -s build -l 3000
```

### Development

```bash
yarn
yarn start
```

See localhost:3000

## Testing

```bash
yarn test
```

## Notes

There was a little more to sliding games then I thought. Biggest gotcha moment for me was that it turned out that not all boards are solvable. All in all I had a lot of fun making this game. Enjoy!
