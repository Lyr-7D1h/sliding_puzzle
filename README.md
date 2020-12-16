# Sliding Puzzle

TODO: description

## Technical Description

We use **eslint** in combination with **prettier**.
Eslint check for general linting errors while prettier focuses on formating.
Eslint uses the Airbnb standard, generally assumed to be the best for React projects.

**Material UI** is used for styling.
This is because I wanted consistent styling between all components and don't want to have the hassle to worry about styling.

**Jest** is used as test runner.
Most recommended and usefull test runner for React Applications

## File Structure

```
/src
    /features
        /common - Used for components which are general and can be shared for multiple features
        /puzzle - Used soly for components needed for the functioning puzzle
            {name}Page.jsx - Used as entry point for this feature
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
