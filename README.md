# Dark Web, IEEE UCB Ghost Theme
> Note: This theme is extremely experimental and may cause breaking changes. Further testing is required before implementation.
> ALL ISSUES MUST BE RESOLVED BEFORE DEPLOYMENT

![image](https://user-images.githubusercontent.com/45542237/91100371-efcd4700-e619-11ea-8f50-ab002a5a3238.png)

## Instructions from `ieee-ghost`

#### Setting up watch development
0. Install [NodeJS](https://nodejs.org/en/download/)
1. Install Ghost's CLI `npm install -g ghost-cli@latest` (Windows) or `sudo npm install -g ghost-cli@latest`
2. Verify Ghost's installation by running `ghost --version`
3. Create an empty directory for Ghost
4. cd into the empty directory
5. Run `ghost install 3.41.6 --local --no-start`
6. Start ghost with `ghost start` (ghost is now accessible through localhost:2368 but we won't use that)
7. From within the Ghost directory `cd content/themes/`
8. Clone this repository inside of the themes folder
9. `cd darkweb/src`
10. Run `npm install`
11. Run `npm run watch`
12. Follow the procedures to [Selecting Theme](#selecting-theme) (darkweb)
13. Follow the procedures to [Importing Content](#importing-content)

#### Deploying theme to site
1. cd to the *src* directory
1. `npm run build`
2. `npm run zip`
3. With the new ZIP file, upload it to the Ghost web admin interface at: Settings -> Design -> Upload a theme -> upload ZIP

#### Selecting Theme
1. Head to your local Ghost Admin portal (usually found at [http://localhost:3000/ghost](http://localhost:3000/ghost))
2. Go to `Design`, scroll down, and activate `darkweb`

#### Importing Content
1. Head to the Ghost Admin portal on IEEE
2. Go to `Labs -> Export Content` and click on `Export` (This will save a JSON file)
3. Head to your local Ghost Admin portal (usually found at [http://localhost:3000/ghost](http://localhost:3000/ghost))
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
