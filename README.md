# Dark Web, IEEE UCB Ghost Theme
> Note: This theme is extremely experimental and may cause breaking changes. Further testing is required before implementation.
> ALL ISSUES MUST BE RESOLVED BEFORE DEPLOYMENT

![image](https://user-images.githubusercontent.com/45542237/91100371-efcd4700-e619-11ea-8f50-ab002a5a3238.png)

## Instructions from `ieee-ghost`

#### Setting up watch development
0. Install [NodeJS](https://nodejs.org/en/download/)
1. Install Ghost's CLI `npm install -g ghost-cli@latest` (Windows) or `sudo npm install -g ghost-cli@latest`
2. Verify Ghost's installation by running `ghost --version`
3. Install BrowserSync `npm install -g browser-sync`
4. Verify BrowserSync's installation by running `browser-sync --version`
5. Create an empty directory for Ghost
6. cd into the empty directory
7. Run `ghost install local --no-start`
8. From within the Ghost directory `cd content/themes/`
9. Clone this repository inside of the themes folder
10. `cd ieee-ghost/src`
11. Run `npm install`
12. cd out into the Ghost directory
13. Run `ghost start --development`
14. From the ghost directory, `cd contents/themes/ieee-ghost/src/`
15. Run `npm run watch`
16. Follow the procedures to [Selecting Theme](#selecting-theme) (ieee-ghost)
17. Follow the procedures to [Importing Content](#importing-content)

#### Selecting Theme
1. Head to your local Ghost Admin portal (usually found at [http://localhost:2368/ghost](http://localhost:2368/ghost))
2. Go to `Design`, scroll down, and activate `ieee-ghost`

#### Importing Content
1. Head to the Ghost Admin portal on IEEE
2. Go to `Labs -> Export Content` and click on `Export` (This will save a JSON file)
3. Head to your local Ghost Admin portal (usually found at [http://localhost:2368/ghost](http://localhost:2368/ghost))
4. Go to `Labs -> Import Content` and import your JSON file

#### Post-`Pages`
These are pages with custom designs on them. They include:
- about
- blog
- industry
- officers
To see these pages in action, on your local machine, remove the existing posts/pages and create new posts with urls pointing to their respective names.
ie: `about -> /about`

*Note: Images do not get transfered*