# Sliding Puzzle

TODO: description

## Technical Description

We use eslint in combination with prettier.
Eslint check for general linting errors while prettier focuses on formating.
Eslint uses the Airbnb standard, generally assumed to be the best for React projects.

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
yarn start
```

### Development

```bash
yarn
yarn start
```
